import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  open: boolean;
  onChange?: () => void;
};
export default function Modal({ children, open, onChange }: Props) {
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
      className="w-1/2 h-fit p-5 rounded-lg"
      onClose={onChange}
    >
      {children}
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
}
