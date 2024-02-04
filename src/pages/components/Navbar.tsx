/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export default function Navbar(props: any) {
  return (
    <div className="flex overflow-hidden relative flex-col items-center self-stretch px-20 pt-6 pb-12 w-full min-h-[376px] text-neutral-100 max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="./assets/navbar.png"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative gap-5 justify-between items-start self-stretch px-px mr-5 ml-5 whitespace-nowrap max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="self-stretch text-3xl font-black">Logo</div>
        <div className="flex gap-4 justify-center text-base">
          <div className="grow font-semibold text-white underline cursor-pointer">
            Home
          </div>
          <div>Menu</div>
          <div>Eventos</div>
          <div className="grow">Servicios</div>
        </div>
        <img
          loading="lazy"
          src="./assets/user.svg"
          className="aspect-square w-[35px]"
        />
      </div>
      <div className="relative mt-20 text-5xl font-black max-md:mt-10 max-md:max-w-full max-md:text-4xl font-bold">
        Nombre del Hotel
      </div>
      <div className="relative center cursor-pointer items-center px-16 py-2 mt-6 mb-11 max-w-full text-xl whitespace-nowrap bg-white rounded-xl text-stone-400 w-[425px] max-md:px-5 max-md:mb-10 text-center">
        Hacer reserva
      </div>

      <div className="mt-20 text-3xl font-medium text-black whitespace-nowrap max-md:mt-10">
        Tus recomedaciones
      </div>
    </div>
  );
}
