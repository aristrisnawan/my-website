import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Disclosure, Transition } from "@headlessui/react";
import aris from "../images/aris.png";

export default function HeaderComponent() {
  return (
    <div>
      <div className="w-full">
        <div className="tablet:hidden laptop:hidden desktop:hidden mobile:block  mobile:w-full">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="p-4 flex flex-row justify-between w-full">
                  <div className="w-9 h-9 rounded-full bg-gray-600"></div>
                  <div>
                    {open ? (
                      <XIcon className=" w-9 " />
                    ) : (
                      <MenuIcon className=" w-9 " />
                    )}
                  </div>
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-100 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="text-black">
                    <div className="mx-0 w-full bg-gray-300 opacity-75 px-4 flex flex-col h-screen absolute">
                      <div>
                        <Disclosure.Button className="w-full">
                          <p className="font-bold text-3xl py-4 float-left">
                            Home
                          </p>
                        </Disclosure.Button>
                      </div>
                      <div>
                        <Disclosure.Button className="w-full">
                          <p className="font-bold text-3xl py-4 float-left">
                            Projects
                          </p>
                        </Disclosure.Button>
                      </div>
                      <div>
                        <Disclosure.Button className="w-full">
                          <p className="font-bold text-3xl py-4 float-left">
                            About
                          </p>
                        </Disclosure.Button>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
        {/* Header for tablet and laptop */}
        <div className="w-full px-20 py-5 justify-between tablet:block laptop:block mobile:hidden">
          <div className="flex flex-row  justify-between">
            <div
              className=" w-9 h-9 bg-slate-50 rounded-full bg-no-repeat bg-center my-auto"
              style={{ backgroundImage: `url(${aris})` }}
            ></div>
            <div className="flex flex-row tablet:gap-8 desktop:gap-10 text-gray-400">
              <p className=" hover:bg-gray-200 hover:rounded-md tablet:p-2 dekstop:p-4 text-xl font-medium cursor-pointer">
                Home
              </p>
              <p className=" hover:bg-gray-200 hover:rounded-md tablet:p-2 dekstop:p-4 text-xl font-medium cursor-pointer">
                About
              </p>
              <p className=" hover:bg-gray-200 hover:rounded-md tablet:p-2 dekstop:p-4 text-xl font-medium cursor-pointer">
                Projects
              </p>
            </div>
            {/* <div className=" w-7 h-7 my-auto rounded-full"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
