/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export default function Eventos(props: any) {
  return (
    <>
      <br />
      <br />
      <p className="text-lg">Eventos</p>

      <div className="px-5 mt-6 max-w-full w-[884px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-end px-12 pt-12 pb-4 text-white whitespace-nowrap rounded-xl shadow aspect-[0.62] w-[210px] max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                src="./assets/concierto.jpg"
                className="object-cover absolute inset-0 size-full cursor-pointer"
              />
              <div className="relative mt-24 text-2xl font-bold max-md:mt-10">
                Concierto
              </div>
              <div className="relative self-center mt-24 text-base font-semibold text-center max-md:mt-10">
                Fecha
                <br />
                Hora
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-end px-20 pt-12 pb-4 text-white whitespace-nowrap rounded-xl shadow aspect-[0.62] w-[210px] max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                src="./assets/wine.jpg"
                className="object-cover absolute inset-0 size-full cursor-pointer"
              />
              <div className="relative mt-20 text-2xl font-bold max-md:mt-10">
                Wine
                <br />
                Night
              </div>
              <div className="relative mt-16 text-base font-semibold text-center max-md:mt-10">
                Fecha
                <br />
                Hora
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-end px-12 pt-12 pb-4 text-white whitespace-nowrap rounded-xl shadow aspect-[0.62] w-[210px] max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                src="./assets/concierto.jpg"
                className="object-cover absolute inset-0 size-full cursor-pointer"
              />
              <div className="relative mt-24 text-2xl font-bold max-md:mt-10">
                Concierto
              </div>
              <div className="relative self-center mt-24 text-base font-semibold text-center max-md:mt-10">
                Fecha
                <br />
                Hora
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
