import { FormEvent, useContext } from "react";
import DATAFORM from "../data/InputData";
import Input from "./ui/Input";
import { ClusterContext } from "../context/ClusterContextProvider";
import { FormInputType } from "../types/FormInputType";

type Props = {
  method: number;
};

export default function FormInput({ method }: Props) {
  const { doCluster } = useContext(ClusterContext);

  function handlerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newTypedData: FormInputType = {
      mag: parseFloat(formData.get("mag") as string),
      depth: parseFloat(formData.get("depth") as string),
      rad: parseFloat(formData.get("rad") as string),
      prov: formData.get("prov") as string,
    };

    doCluster(newTypedData, method);
  }

  return (
    <form onSubmit={handlerSubmit} className="flex flex-col flex-wrap my-auto">
      {DATAFORM.map((data) => (
        <Input data={data} />
      ))}

      <div className="flex justify-end mt-3 py-2">
        <button className="text-white bg-[#032F2F] w-1/3 py-3 rounded-xl font-semibold">
          Cluster
        </button>
      </div>
    </form>
  );
}
