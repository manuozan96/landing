/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export default function Servicios(props: any) {
  return (
    <>
      <br />
      <br />
      <p className="text-lg">Servicios</p>

      <div className="px-5 mt-6 max-w-full w-[878px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center p-4 w-full text-xl font-medium text-black whitespace-nowrap bg-white rounded-3xl shadow max-md:mt-10">
              <img
                loading="lazy"
                src="./assets/piscina.png"
                className="rounded-full aspect-square w-[134px]"
              />
              <div className="mt-4">Piscina</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center p-4 w-full text-xl font-medium text-black whitespace-nowrap bg-white rounded-3xl shadow max-md:mt-10">
              <img
                loading="lazy"
                src="./assets/spa.svg"
                className="aspect-square fill-[url(/spa),lightgray_50%_/_cover_no-repeat] w-[134px]"
              />
              <div className="mt-4">Spa</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center p-4 w-full text-xl font-medium text-black whitespace-nowrap bg-white rounded-3xl shadow max-md:mt-10">
              <img
                loading="lazy"
                src="./assets/sauna.png"
                className="rounded-full aspect-square w-[134px]"
              />
              <div className="mt-4">Sauna</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center p-4 w-full text-xl font-medium text-black whitespace-nowrap bg-white rounded-3xl shadow max-md:mt-10">
              <img
                loading="lazy"
                src="./assets/discoteca.png"
                className="rounded-full aspect-square w-[134px]"
              />
              <div className="mt-4">Discoteca</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
