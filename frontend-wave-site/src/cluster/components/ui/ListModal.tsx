import IMAGE from "../../../assets/img/check.png";

type Props = {
  text: string;
};

export default function ListModal({ text }: Props) {
  return (
    <li className="flex items-center">
      <img src={IMAGE} alt="check" className="w-7 h-7" />
      <p className="ml-2 font-medium">{text}</p>
    </li>
  );
}
