type Props = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDefault: boolean;
};

export default function Input({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  isDefault,
}: Props) {
  return (
    <div className="flex flex-col py-2">
      <label className={`font-semibold p-2 `}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`rounded-md border-b-2 text-lg w-full pl-3 ${
          isDefault && "border-2 border-red-600"
        }`}
        onChange={onChange}
        readOnly={name === "lat" || name === "lon"}
        required
      />
    </div>
  );
}
