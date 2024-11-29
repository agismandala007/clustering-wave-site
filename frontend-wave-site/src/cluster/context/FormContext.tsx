import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ClusterContextType = {
  type: number;
  onChangeType: () => void;
};

export const ClusterContext = createContext<ClusterContextType>({
  type: 0,
  onChangeType: () => {},
});

export default function FormContext({ children }: Props) {
  const [selected, setSelected] = useState<number>(0);

  function changeType() {
    setSelected((prev) => {
      return prev === 0 ? 1 : 0;
    });
  }

  const ctxValue = {
    type: selected,
    onChangeType: changeType,
  };
  return (
    <ClusterContext.Provider value={ctxValue}>
      {children}
    </ClusterContext.Provider>
  );
}
