import ButtonSwitch from "../components/ui/ButtonSwitch";

import { DataType } from "../data/LayoutData";
import FormInput from "../components/FormInput";
import { ClusterTypeStore } from "../store/ClusterTypeStore";

type Props = {
  data: DataType;
};

export default function FormSide({ data }: Props) {
  const { changeType, clusterType } = ClusterTypeStore();

  return (
    <div className="grid justify-around h-full w-[86%] md:w-[30rem] p-6 lg:p-10 mx-auto bg-[#F5F9F9] drop-shadow-lg rounded-2xl">
      <div className="rounded-full bg-white w-fit h-fit font-bold text-xs lg:text-base mx-auto">
        <ButtonSwitch
          selected={clusterType === 0}
          handler={changeType}
          text="K-Means"
        />
        <ButtonSwitch
          selected={clusterType === 1}
          handler={changeType}
          text="K-Medoids"
        />
      </div>

      <article className="py-3">
        <h1 className="font-bold text-xl lg:text-2xl py-2 lg:py-4">
          {data.label}
        </h1>
        <p className="font-light text-sm">{data.text}</p>
      </article>

      <FormInput />
    </div>
  );
}
