import Input from "./Input";

import data from "../data/for-input";

type Props = {
  title: string;
  text: string;
  handler: () => void;
  selected: number;
};

export default function FormSide({ title, text, handler, selected }: Props) {
  return (
    <div className="flex flex-col bg-[#F5F9F9] drop-shadow-lg p-6 lg:p-10 mb-10 h-full w-4/5 lg:w-2/3 rounded-3xl mx-auto lg:justify-self-end">
      <div className="flex rounded-full bg-white w-fit font-bold text-xs lg:text-base px-5 gap-7 mx-auto">
        <button
          className={
            selected === 0
              ? `bg-[#032F2F] text-white py-2 px-4 rounded-full`
              : undefined
          }
          onClick={handler}
        >
          K-Means
        </button>
        <button
          className={
            selected === 1
              ? `bg-[#032F2F] text-white py-2 px-4 rounded-full`
              : undefined
          }
          onClick={handler}
        >
          K-Medoids
        </button>
      </div>

      <h1 className="font-extrabold text-xl lg:text-3xl py-2 lg:py-4">
        {title}
      </h1>
      <p className="font-light text-sm">{text}</p>

      {data.map((input) => (
        <Input
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
        />
      ))}

      <div className="flex justify-end mt-3 py-2">
        <button className="text-white bg-[#032F2F] w-fit py-3 px-5 rounded-xl font-semibold">
          Cluster
        </button>
      </div>
    </div>
  );
}
