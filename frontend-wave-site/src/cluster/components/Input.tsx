type Props = {
  label: string;
  type: string;
  placeholder: string;
};

export default function Input({ label, type, placeholder }: Props) {
  return (
    <div className="flex flex-col py-2 w-full">
      <label className="font-semibold p-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-md border-b-2 text-lg w-full pl-3"
      />
    </div>
  );
}
