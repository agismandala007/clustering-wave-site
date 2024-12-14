import { FormEvent, useState } from "react";
import DATAFORM from "../data/InputData";
import Input from "./ui/Input";
import { FormInputType } from "../types/FormInputType";
import { ClusterTypeStore } from "../store/ClusterTypeStore";
import Modal from "./Modal";
import { ModalStore } from "../store/ModalStore";
import { NewCluster } from "../http";
import { ResultClusterType } from "../types/ClusterType";

export default function FormInput() {
  const [resultCluster, setResultCluster] = useState<ResultClusterType>({
    cluster: "2",
    trait: ["lorem", "lorem", "lorem"],
    strategies:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi esse facilis ipsa nisi totam doloremque, nobis quae temporibus tempora possimus similique? Qui laboriosam possimus error corporis deserunt consequatur quisquam.",
  });

  const { clusterType } = ClusterTypeStore();
  const { modal, show, hide } = ModalStore();

  async function handlerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newTypedData: FormInputType = {
      mag: parseFloat(formData.get("mag") as string),
      depth: parseFloat(formData.get("depth") as string),
      rad: parseFloat(formData.get("rad") as string),
      prov: formData.get("prov") as string,
    };

    let methodType: string = "kmeans";
    if (clusterType != 0) {
      methodType = "kmedoids";
    }
    const result = await NewCluster(newTypedData, methodType);
    setResultCluster(result);
    show();
  }

  const openModal = modal === "open";

  return (
    <>
      <Modal
        open={true}
        onChange={openModal ? hide : undefined}
        result={resultCluster}
      />
      <form
        onSubmit={handlerSubmit}
        className="flex flex-col flex-wrap my-auto"
      >
        {DATAFORM.map((data) => (
          <Input data={data} />
        ))}

        <div className="flex justify-end mt-3 py-2">
          <button
            className="text-white bg-[#032F2F] w-1/3 py-3 rounded-xl font-semibold"
            type="submit"
          >
            Cluster
          </button>
        </div>
      </form>
    </>
  );
}
