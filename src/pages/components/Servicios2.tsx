/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export default function Servicios2(props: any) {
  return (
    <div className="px-5 mt-6 max-w-full w-[878px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-center p-4 w-full text-xl font-medium text-black whitespace-nowrap bg-white rounded-3xl shadow max-md:mt-10">
            <img
              loading="lazy"
              src="../assets/ser1.png"
              className="rounded-full aspect-square w-[134px] cursor-pointer"
            />
            <div className="mt-4">Desayunos</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-center p-4 w-full text-xl font-medium text-black whitespace-nowrap bg-white rounded-3xl shadow max-md:mt-10">
            <img
              loading="lazy"
              src="../assets/ser2.png"
              className="rounded-full aspect-square w-[134px]"
            />
            <div className="mt-4">Gimnasio</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center p-4 w-full text-xl font-medium text-black whitespace-nowrap bg-white rounded-3xl shadow max-md:mt-10">
            <img
              loading="lazy"
              src="../assets/ser3.png"
              className="self-center rounded-full aspect-square w-[134px]"
            />
            <div className="mt-4">Animaciones</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-center p-4 w-full text-xl font-medium text-black whitespace-nowrap bg-white rounded-3xl shadow max-md:mt-10">
            <img
              loading="lazy"
              src="../assets/ser4.png"
              className="rounded-full aspect-square w-[134px] cursor-pointer"
            />
            <div className="mt-4">Transporte</div>
          </div>
        </div>
      </div>
    </div>
  );
}
