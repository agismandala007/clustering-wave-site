import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import { ResultClusterType } from "../types/cluster";

type Props = {
  cluster?: ResultClusterType;
  onChange: () => void;
};

export interface ResultModalRef {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ResultModalRef, Props>(function Modal(
  { cluster, onChange }: Props,
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
    close() {
      if (dialog.current) {
        dialog.current.close();
      }
    },
  }));

  console.log(cluster);

  return createPortal(
    <dialog
      ref={dialog}
      className="w-1/2 h-fit p-5 rounded-lg"
      onClose={onChange}
    >
      <form method="dialog" onChange={onChange} className="float-right">
        <button>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 lg:w-10"
          >
            <path
              d="M10.6668 31.6667L8.3335 29.3333L17.6668 20L8.3335 10.6667L10.6668 8.33334L20.0002 17.6667L29.3335 8.33334L31.6668 10.6667L22.3335 20L31.6668 29.3333L29.3335 31.6667L20.0002 22.3333L10.6668 31.6667Z"
              fill="#032F2F"
            />
          </svg>
        </button>
      </form>
      {cluster && (
        <div className="mt-5 p-5">
          <h1 className="font-extrabold text-2xl ">{cluster.cluster}</h1>
          <div className="grid lg:grid-cols-[1fr_5fr] gap-5 bg-[#F5F9F9] drop-shadow-lg rounded-lg text-black p-5">
            <h1 className="font-semibold text-lg">Trait: </h1>
            <p>{cluster.trait}</p>

            <h1 className="font-semibold text-lg">Strategies: </h1>
            <p>{cluster.strategies}</p>
          </div>
        </div>
      )}
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
});

export default Modal;
