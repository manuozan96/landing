/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { create } from "zustand";
import { useSpring, animated } from "react-spring";

interface Store {
  isAnimating: boolean;
  toggleAnimation: () => void;
}

const useStore = create<Store>((set) => ({
  isAnimating: true,
  toggleAnimation: () => set((state) => ({ isAnimating: !state.isAnimating })),
}));

export default function Bebidas(props: any) {
  const { isAnimating, toggleAnimation } = useStore();
  const springProps = useSpring({
    opacity: isAnimating ? 1 : 0,
    transform: isAnimating ? "translateX(0%)" : "translateX(-100%)",
  });

  return (
    <>
      <br />
      <br />
      <p className="text-lg">Bebidas</p>
      <div className="flex gap-5 justify-between items-center px-5 mt-6 max-w-full w-[888px] max-md:flex-wrap">
        <img
          onClick={toggleAnimation}
          loading="lazy"
          src="./assets/izq.svg"
          className="self-stretch my-auto aspect-square w-[25px] cursor-pointer"
        />
        <animated.div
          style={springProps}
          className="justify-center self-stretch max-md:max-w-full"
        >
          <div className="justify-center self-stretch max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center items-center p-4 w-full text-black whitespace-nowrap bg-white rounded-3xl shadow max-md:mt-10">
                  <img
                    loading="lazy"
                    src="../assets/beb1.svg"
                    className="aspect-[1.1] w-[178px]"
                  />
                  <div className="mt-6 text-base font-semibold">Nombre</div>
                  <div className="mt-6 text-xs">00.00 $</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center items-center p-4 w-full text-black whitespace-nowrap bg-white rounded-3xl shadow max-md:mt-10">
                  <img
                    loading="lazy"
                    src="../assets/beb2.svg"
                    className="aspect-[1.1] w-[178px]"
                  />
                  <div className="mt-6 text-base font-semibold">Nombre</div>
                  <div className="mt-6 text-xs">00.00 $</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center items-center p-4 w-full text-black whitespace-nowrap bg-white rounded-3xl shadow max-md:mt-10">
                  <img
                    loading="lazy"
                    src="../assets/beb3.svg"
                    className="aspect-[1.1] w-[178px]"
                  />
                  <div className="mt-6 text-base font-semibold">Nombre</div>
                  <div className="mt-6 text-xs">00.00 $</div>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
        <img
          onClick={toggleAnimation}
          loading="lazy"
          src="./assets/der.svg"
          className="self-stretch my-auto aspect-square w-[25px] cursor-pointer"
        />
      </div>
    </>
  );
}
