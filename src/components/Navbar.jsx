import React from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import SassDadsLogo from "../assets/sassdads-logo.svg";

const Navbar = () => {
  return (
    <div className="fixed mx-auto w-[100%] bg-white shadow-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between py-2 md:justify-between">
        <Link href="/">
          <div className="ml-3 flex items-center md:ml-0">
            <div className="hidden sm:block">
              <Image
                src={SassDadsLogo}
                alt="Picture of the author"
                width={55}
                height={55}
              />
            </div>
            <div className="block sm:hidden">
              <Image
                src={SassDadsLogo}
                alt="Picture of the author"
                width={45}
                height={45}
              />
            </div>
            <p className="ml-2 text-xl font-extrabold text-darkText sm:text-2xl">
              SassDads
            </p>
          </div>
        </Link>
        <div className="hidden md:block">
          <ul className="flex gap-8 text-base">
            <li className="cursor-pointer text-[#4D555E] transition-all duration-75 ease-in hover:text-primary">
              FAQ
            </li>
            <li className="cursor-pointer text-[#4D555E] transition-all duration-75 ease-in hover:text-[#fcb645]">
              Feature
            </li>
            <li className="cursor-pointer text-[#4D555E] transition-all duration-75 ease-in hover:text-[#fcb645]">
              Pricing
            </li>
            <li className="cursor-pointer text-[#4D555E] transition-all duration-75 ease-in hover:text-[#fcb645]">
              Testimonial
            </li>
          </ul>
        </div>
        <div className="">
          <button className="hidden rounded bg-primary py-2 px-4 font-bold text-white transition-all duration-100 ease-in hover:shadow-sm md:block">
            Get Started
          </button>
        </div>
        <div className="block md:hidden">
          <Menu>
            <Menu.Button>
              <div className="mr-3 rotate-180 text-darkText md:mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                  />
                </svg>
              </div>
            </Menu.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="bg-red-500">
                <Menu.Items>
                  <div className="absolute top-[1rem] right-0 flex w-[100vw] flex-col gap-2 bg-white py-8 px-4 tracking-wide shadow-md">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${
                            active && "bg-secondary"
                          } rounded bg-white py-2 text-center  text-base text-darkText hover:bg-secondary sm:text-lg`}
                          href="/faq"
                        >
                          FAQ
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${
                            active && "bg-secondary"
                          } rounded bg-white py-2 text-center  text-base text-darkText hover:bg-secondary sm:text-lg`}
                          href="/features"
                        >
                          Feature
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${
                            active && "bg-secondary"
                          } rounded bg-white py-2 text-center  text-base text-darkText hover:bg-secondary sm:text-lg`}
                          href="/pricing"
                        >
                          Pricing
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${
                            active && "bg-secondary"
                          } rounded bg-white py-2 text-center  text-base text-darkText hover:bg-secondary sm:text-lg`}
                          href="/testimonial"
                        >
                          Testimonial
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${
                            active && "bg-primary"
                          } rounded bg-primary py-2 text-center text-base font-bold text-white hover:bg-primary sm:text-lg`}
                          href="/getstarted"
                        >
                          Get Started
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </div>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
