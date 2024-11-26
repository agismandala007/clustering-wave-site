type Props = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col py-2">
      <label className="font-semibold p-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className="rounded-md border-b-2 text-lg w-full pl-3"
        onChange={onChange}
        readOnly={name === "lat" || name === "lon"}
      />
    </div>
  );
}
