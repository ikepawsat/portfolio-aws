import React from "react";

export default function Modal({ showModal, setShowModal, title, desc, image, longDesc, githubLink }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-white">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg shadow-gray-500 relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center w-full">
                    {title}
                  </h3>
                </div>
                {/* body */}
                <div className="relative p-6 flex-auto max-md">
                  <div className="flex justify-center">
                    <img src={image} alt={title} className="w-96 h-auto" />
                  </div>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {longDesc}
                  </p>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <a
                    href={githubLink}
                    className="text-blue-500 bg-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-4 cursor-pointer"
                  >
                    GitHub Link
                  </a>
                  <button
                    className="text-red-500 bg-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ml-4"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
