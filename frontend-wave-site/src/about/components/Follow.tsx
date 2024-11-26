import LINKED from "../../assets/img/follow-me-button.svg";

type Props = {
  text: string;
  link: string;
};

export default function Follow({ text, link }: Props) {
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full mt-1 hover:bg-slate-200">
        <h1>{text}</h1>
        <a href={link}>
          <img src={LINKED} alt={text} />
        </a>
      </div>

      <div className={"border-b-2 border-b-[#032F2F] lg:mt-1"}></div>
    </>
  );
}
