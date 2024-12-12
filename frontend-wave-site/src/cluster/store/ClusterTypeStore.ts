import { create } from "zustand";

type ClusterState = {
  clusterType: number;
  changeType: () => void;
};

export const ClusterTypeStore = create<ClusterState>((set) => ({
  clusterType: 0,
  changeType: () =>
    set((state) => ({
      clusterType: state.clusterType === 0 ? 1 : 0,
    })),
}));
