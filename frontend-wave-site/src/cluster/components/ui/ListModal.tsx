import IMAGE from "../../../assets/img/check.png";

type Props = {
  text: string;
};

export default function ListModal({ text }: Props) {
  return (
    <li className="flex">
      <img src={IMAGE} alt="check" />
      <p className="ml-2 font-medium">{text}</p>
    </li>
  );
}
