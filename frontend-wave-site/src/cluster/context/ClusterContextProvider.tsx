import { createContext, useRef, useState } from "react";
import { NewCluster } from "../http";
import { FormInputType } from "../types/FormInputType";
import Modal, { ResultModalRef } from "../components/Modal";
import { ResultClusterType } from "../types/ClusterType";

type Props = {
  children: React.ReactNode;
};

type ClusterContextType = {
  doCluster: (input: FormInputType, method: number) => void;
};

export const ClusterContext = createContext<ClusterContextType>({
  doCluster: () => {},
});

export default function ClusterContextProvider({ children }: Props) {
  const [cluster, setCluster] = useState<ResultClusterType>();
  const dialog = useRef<ResultModalRef>(null);

  async function startClustering(input: FormInputType, method: number) {
    let methodType: string = "kmeans";
    if (method != 0) {
      methodType = "kmedoids";
    }

    const result = await NewCluster(input, methodType);
    setCluster(result);

    dialog.current?.open();
  }

  function onReset() {
    setCluster(undefined);
    dialog.current?.close();
  }

  const ctxValue = {
    doCluster: startClustering,
  };

  return (
    <ClusterContext.Provider value={ctxValue}>
      <div className="overflow-auto flex flex-col bg-[#F5F9F9] drop-shadow-lg p-6 lg:p-10 mb-10 h-full w-[86%] rounded-2xl mx-auto lg:justify-self-end">
        <Modal ref={dialog} cluster={cluster} onChange={onReset} />
        {children}
      </div>
    </ClusterContext.Provider>
  );
}
