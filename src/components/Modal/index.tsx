import React, { ReactNode } from "react";

type ModalProps = {
  openModal: boolean;
  handleCloseModal: () => void;
  children: ReactNode;
};

export default function Modal({
  openModal,
  handleCloseModal,
  children,
}: ModalProps) {
  return (
    <>
      {openModal && (
        <div
          onClick={handleCloseModal}
          className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black/60 z-50"
        >
          {children}
        </div>
      )}
    </>
  );
}
