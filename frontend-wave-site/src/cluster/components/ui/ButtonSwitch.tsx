type Props = {
  handler: () => void;
  text: string;
  selected: boolean;
};

export default function ButtonSwitch({ handler, text, selected }: Props) {
  return (
    <button
      className={`py-2 px-4 ${
        selected ? "bg-[#032F2F] text-white rounded-full" : undefined
      }`}
      onClick={handler}
    >
      {text}
    </button>
  );
}
