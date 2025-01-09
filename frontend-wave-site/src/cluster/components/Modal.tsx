import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ResultClusterType } from "../types/ClusterType";
import ListModal from "./ui/ListModal";

type Props = {
  open: boolean;
  result?: ResultClusterType;
  onChange?: () => void;
};
export default function Modal({ open, result, onChange }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal?.showModal();
    }

    return () => modal?.close();
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className="w-[60vh] h-fit py-10 px-10 rounded-lg "
      onClose={onChange}
    >
      <form
        method="dialog"
        onChange={onChange}
        className="flex justify-between items-center"
      >
        <h1 className="font-extrabold text-2xl">Cluster {result?.cluster}</h1>
        <button>
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 lg:w-10"
          >
            <path
              d="M10.6668 31.6667L8.3335 29.3333L17.6668 20L8.3335 10.6667L10.6668 8.33334L20.0002 17.6667L29.3335 8.33334L31.6668 10.6667L22.3335 20L31.6668 29.3333L29.3335 31.6667L20.0002 22.3333L10.6668 31.6667Z"
              fill="#032F2F"
            />
          </svg>
        </button>
      </form>
      <p className="font-light pt-2 w-[90%]">
        Karakteristik yang terdapat dalam Cluster {result?.cluster} mencakup
        berbagai aspek yang didefinisikan sebagai berikut.
      </p>

      {result && (
        <ul key={result.cluster} className="grid gap-1 py-4">
          {result.trait.map((data) => (
            <ListModal text={data} />
          ))}
        </ul>
      )}

      <div className="py-4 px-6 bg-[#F5F9F9] rounded-lg">
        <div className="flex items-center">
          <h2 className="font-bold text-lg lg:text-xl">Rekomendasi Mitigasi</h2>
          <h2 className="hidden lg:block bg-[#0B7175] text-base text-white font-semibold rounded-2xl py-1 px-2 ml-2">
            Cluster {result?.cluster}
          </h2>
        </div>
        <p className="py-2 text-sm">{result?.strategies}</p>
      </div>
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
}
