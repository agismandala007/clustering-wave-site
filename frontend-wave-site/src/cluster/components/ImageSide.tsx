type Props = {
  image: string;
  title: string;
  text: string;
};

export default function ImageSide({ image, title, text }: Props) {
  return (
    <div
      className="w-[86%] h-full text-white hidden lg:flex rounded-2xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="m-10 flex flex-col justify-end">
        <h1 className="font-bold text-3xl ">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
