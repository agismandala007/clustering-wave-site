import { InputType } from "../../data/InputData";

type Props = {
  data: InputType;
};

export default function Input({ data }: Props) {
  return (
    <div className="flex flex-col py-2">
      <label className="font-semibold p-2">{data.label}</label>
      <input
        type={data.type}
        name={data.name}
        placeholder={data.placeholder}
        className="rounded-md border-b-2 border-[#032F2F] text-lg w-full pl-3"
        required
      />
    </div>
  );
}
