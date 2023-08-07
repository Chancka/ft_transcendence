import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function ChangeNameDialog(props: {
  changeNameDialog: any;
  setChangeNameDialog: any;
  nameOfChannel: string;
  setNameOfChannel: any;
}) {
  const [nameOfChannel, setNameOfChannel] = useState(props.nameOfChannel);

  function closeDialog() {
    props.setChangeNameDialog(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameOfChannel(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(props.nameOfChannel + " submitted");
    if (nameOfChannel === "") {
      setNameOfChannel(props.nameOfChannel);
      return;
    }
    props.setNameOfChannel(nameOfChannel);
    // api.changeChannelName(props.nameOfChannel, props.channelId);!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    props.setChangeNameDialog(false);
  }

  return (
    <>
      <Transition appear show={props.changeNameDialog} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDialog}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Change the name of {props.nameOfChannel}
                </Dialog.Title>
                <div className="mt-2">
                  <form action="submit" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none"
                      placeholder="New name"
                      value={nameOfChannel}
                      onChange={handleChange}
                    />
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ChangeNameDialog;
