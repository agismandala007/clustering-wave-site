import { DataType } from "../data/LayoutData";

type Props = {
  data: DataType;
};

export default function ImageSide({ data }: Props) {
  return (
    <section
      className="w-[86%] h-full text-white lg:flex hidden rounded-2xl"
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="m-10 flex flex-col justify-end">
        <h1 className="font-bold text-3xl ">{data.label}</h1>
        <p>{data.text}</p>
      </div>
    </section>
  );
}
