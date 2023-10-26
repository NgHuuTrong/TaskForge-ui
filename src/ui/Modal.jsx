/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

function Modal({
  openModal,
  setOpenModal,
  title = 'Title',
  size = 'small',
  children = null,
}) {
  const dialogRef = useRef(null);

  const sizes = {
    small: ' w-[50rem] h-[15rem]',
    medium: ' w-[75rem] h-[25rem]',
    large: ' w-[100rem] h-[50rem] min-h-[50rem]',
  };
  const base = 'flex bg-white relative overflow-hidden';

  const classModalContainer = base + sizes[size];

  useEffect(() => {
    if (openModal) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [openModal]);

  const dialog =
    openModal &&
    createPortal(
      <dialog
        ref={dialogRef}
        className="top-50 left-50 -translate-x-50 -translate-y-50 fixed z-10 flex rounded-xl backdrop:bg-gray-800/50"
      >
        <div className={`${classModalContainer}`}>
          <div className=" absolute -right-2 -top-2 z-10">
            <AiOutlineClose
              color="black"
              onClick={() => setOpenModal(false)}
              className="m-8 mb-2 ml-auto h-11 w-11 cursor-pointer px-2 py-1"
            />
          </div>
          {children}
        </div>
      </dialog>,
      document.body,
    );

  return dialog;
}
export default Modal;
