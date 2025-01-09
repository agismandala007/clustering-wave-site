import { InputType } from "../../data/InputData";
import PROV from "../../data/ProvList";

type Props = {
  data: InputType;
};

export default function Input({ data }: Props) {
  let cssClasses = "rounded-md border-b-2 border-[#032F2F] text-lg w-full pl-3";

  return (
    <div className="flex flex-col py-2">
      <label className="font-semibold p-2">{data.label}</label>
      {data.name != "prov" ? (
        <input
          type={data.type}
          step=".01"
          name={data.name}
          placeholder={data.placeholder}
          className={cssClasses}
          required
        />
      ) : (
        <select name={data.name} className={`${cssClasses} bg-white`} required>
          <option value="" disabled selected>
            Choose a Province
          </option>
          {PROV.map((data: string) => (
            <option key={data} value={data}>
              {data}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
