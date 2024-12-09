import { NewCluster } from "../http";
import { ResultClusterType } from "../types/ClusterType";
import { FormInputType } from "../types/FormInputType";
import { create } from "zustand";

type State = {
  cluster: ResultClusterType;
  progress: string;
};

type Actions = {
  doCluster: (input: FormInputType, method: number) => Promise<void>;
};

type Action = {
  type: number;
  data: FormInputType;
};

async function clusterReduce(set: (state: State) => void, action: Action) {
  const methodType: string = action.type === 0 ? "kmeans" : "kmedoids";

  try {
    const result = await NewCluster(action.data, methodType);

    set({ cluster: result, progress: "open" });
  } catch (error) {
    console.error("Error during clustering:", error);
  }
}

export const useCluster = create<State & Actions>((set) => ({
  cluster: { cluster: "", trait: "", strategies: "" },
  progress: "",
  doCluster: async (input: FormInputType, method: number) => {
    await clusterReduce(set, { type: method, data: input });
  },
}));
