type Props = {
  img: string;
  header: string;
  text: string;
};

export default function Information({ img, header, text }: Props) {
  return (
    <div className="flex flex-col justify-evenly ">
      <img src={img} alt={header} className="w-8 lg:w-12" />
      <h1 className="font-semibold lg:text-lg py-1 lg:py-2">{header}</h1>
      <p className="text-xs font-light lg:font-normal lg:text-sm text-[#0B7175]">
        {text}
      </p>
    </div>
  );
}
