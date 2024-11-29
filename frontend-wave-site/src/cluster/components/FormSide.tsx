import Input from "./Input";

import data from "../data/for-input";
import { useEffect, useRef, useState } from "react";

import Modal, { ResultModalRef } from "./Modal";

import { InputType } from "../types/type";
import { NewCluster } from "../http";
import { ResultClusterType } from "../types/cluster";
import ButtonForm from "./ButtonForm";

type Props = {
  title: string;
  text: string;
  handler: () => void;
  selected: number;
};

const defaultInput: InputType = {
  mag: 0,
  depth: 0,
  rad: 0,
  lat: 0,
  lon: 0,
  prov: "",
};

export default function FormSide({ title, text, handler, selected }: Props) {
  const [cluster, setCluster] = useState<ResultClusterType>();
  const [input, setInput] = useState<InputType>(defaultInput);
  const [isFormDefault, setIsFromDefalut] = useState<boolean>(false);

  const dialog = useRef<ResultModalRef>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setInput((prev) => ({
        ...prev,
        ["lat"]: position.coords.latitude,
        ["lon"]: position.coords.longitude,
      }));
    });
  }, []);

  type InputKeys = keyof InputType;

  function handlerInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event?.target;
    setInput((prev) => ({
      ...prev,
      [name]: name === "prov" ? value : parseFloat(value),
    }));
  }

  function isDefaultInput() {
    return (
      input.mag === defaultInput.mag ||
      input.depth === defaultInput.depth ||
      input.rad === defaultInput.rad ||
      input.lat === defaultInput.lat ||
      input.lon === defaultInput.lon ||
      input.prov === defaultInput.prov
    );
  }

  async function handlerForm() {
    let type: string = "kmeans";
    if (selected != 0) {
      type = "kmedoids";
    }

    if (!isDefaultInput()) {
      setIsFromDefalut(false);
      const result = await NewCluster(input, type);
      setCluster(result);

      dialog.current?.open();
    } else {
      setIsFromDefalut(true);
    }
  }

  function onReset() {
    setCluster(undefined);
    dialog.current?.close();
  }

  return (
    <div className="flex flex-col bg-[#F5F9F9] drop-shadow-lg p-6 lg:p-10 mb-10 h-full w-[86%] rounded-2xl mx-auto lg:justify-self-end">
      <Modal ref={dialog} cluster={cluster} onChange={onReset} />
      <div className="flex rounded-full bg-white w-fit font-bold text-xs lg:text-base px-5 gap-7 mx-auto">
        <ButtonForm
          selected={selected === 0}
          handler={handler}
          text="K-Means"
        />
        <ButtonForm
          selected={selected === 1}
          handler={handler}
          text="K-Medoids"
        />
      </div>

      <h1 className="font-extrabold text-xl lg:text-3xl py-2 lg:py-4">
        {title}
      </h1>
      <p className="font-light text-sm">{text}</p>

      <div className="flex flex-col flex-wrap my-auto">
        {data.map((formInput) => (
          <Input
            label={formInput.label}
            name={formInput.name}
            type={formInput.type}
            placeholder={formInput.placeholder}
            value={input[formInput.name as InputKeys]}
            onChange={handlerInput}
            isDefault={isFormDefault}
          />
        ))}

        <div className="flex justify-end mt-3 py-2">
          <button
            className="text-white bg-[#032F2F] w-fit py-3 px-5 rounded-xl font-semibold"
            onClick={handlerForm}
          >
            Cluster
          </button>
        </div>
      </div>
    </div>
  );
}
