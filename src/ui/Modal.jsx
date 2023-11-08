/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

function Modal({ openModal, setOpenModal, title = 'Title', size = 'small', children = null, background = '' }) {
  const dialogRef = useRef(null);
  const [workspaceName, setWorkspaceName] = useState('');

  // const buttonDisabled = 'bg-[--color-grey-100] text-[--color-grey-400] cursor-not-allowed'

  const sizes = {
    small: ' w-[50rem] h-[15rem]',
    medium: ' w-[75rem] h-[25rem]',
    large: ' w-[100rem] h-[50rem] min-h-[50rem]',
  };
  const base = ` flex bg-[--color-grey-0] relative overflow-hidden`;

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
          <div className=" absolute left-[96%] flex">
            <AiOutlineClose
              color="black"
              onClick={() => setOpenModal(false)}
              className="m-8 mb-2 ml-auto h-11 w-11 cursor-pointer px-2 py-1"
            />
          </div>

          <div className="flex flex-1 flex-col px-20 py-10">
            <div className="mt-10 flex flex-col">
              <div className="text-4xl text-[--color-grey-600] font-bold">Let's build a Workspace</div>
              <span className="text-[1.5rem] text-[--color-grey-400]">
                Increase your productivity by making it easy for everyone to access boards in one location.
              </span>
            </div>
            <div className="flex flex-col justify-evenly">
              <div className="my-10">
                <div className="text-lg text-[--color-grey-600]">Workspace Name</div>
                <div className="flex max-w-xl">
                  <input
                    type="text"
                    placeholder="Taco's company"
                    className="w-[30rem] rounded-md border-[0.2rem] p-2 text-base outline-none transition-colors duration-500 focus:border-[var(--header-button-txt-hovered)]"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                  />
                </div>
                <span className="text-base text-[--color-grey-400]">
                  This is the name of your company, group or organization.
                </span>
              </div>
              <div className="my-auto">
                <div className="text-lg text-[--color-grey-600]">
                  Description Workspace
                  <span className="text-[--color-grey-400]"> Options</span>
                </div>
                <div className="flex max-w-xl">
                  <textarea
                    className="w-[30rem] rounded-md border-[0.2rem] p-2 text-base outline-none transition-colors duration-500 focus:border-[var(--header-button-txt-hovered)]"
                    cols="40"
                    rows="5"
                    placeholder="Our team organizes everything here"
                  ></textarea>
                </div>
              </div>
              <div className="mt-10">
                <span className="text-base text-[--color-grey-400]">
                  Put your members on a board with a short description of your Workspace.
                </span>
                <button
                  className={`h-16 w-[30rem] text-xl transition-colors duration-500 ${
                    workspaceName.length > 0
                      ? ' bg-[--header-button-txt-hovered] text-white'
                      : ' bg-[--color-grey-100] text-[--color-grey-400] cursor-not-allowed'
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>

          <div
            className={`ml-auto h-full w-full flex-1 bg-[url(${background})]`}
            style={{
              background: `url(${background})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </div>
      </dialog>,
      document.body,
    );

  return dialog;
}
export default Modal;
