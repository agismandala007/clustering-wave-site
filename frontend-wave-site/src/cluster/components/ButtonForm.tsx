type Props = {
  handler: () => void;
  text: string;
  selected: boolean;
};

export default function ButtonForm({ handler, text, selected }: Props) {
  return (
    <button
      className={
        selected ? `bg-[#032F2F] text-white py-2 px-4 rounded-full` : undefined
      }
      onClick={handler}
    >
      {text}
    </button>
  );
}
