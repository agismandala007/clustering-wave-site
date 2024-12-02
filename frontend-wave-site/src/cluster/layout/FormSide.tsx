import ClusterCpntextProvider from "../context/ClusterContextProvider";
import ButtonForm from "../components/ButtonForm";

import { DataType } from "../data/LayoutData";
import FormInput from "../components/FormInput";

type Props = {
  data: DataType;
  typeMethod: number;
  onChangeMethod: () => void;
};

export default function FormSide({ data, typeMethod, onChangeMethod }: Props) {
  return (
    <ClusterCpntextProvider>
      <div className="flex rounded-full bg-white w-fit font-bold text-xs lg:text-base mx-auto">
        <ButtonForm
          selected={typeMethod === 0}
          handler={onChangeMethod}
          text="K-Means"
        />
        <ButtonForm
          selected={typeMethod === 1}
          handler={onChangeMethod}
          text="K-Medoids"
        />
      </div>

      <article>
        <h1 className="font-extrabold text-xl lg:text-3xl py-2 lg:py-4">
          {data.label}
        </h1>
        <p className="font-light text-sm">{data.text}</p>
      </article>

      <FormInput method={typeMethod} />
    </ClusterCpntextProvider>
  );
}
