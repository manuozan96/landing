/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export default function Reserva(props: any) {
  return (
    <div className="flex justify-center items-center self-stretch px-16 py-10 mt-20 w-full bg-[#AE9672] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-center w-full max-w-[1038px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex justify-center items-center self-stretch px-4 py-3 my-auto aspect-square">
          <img
            loading="lazy"
            src="assets/der.svg"
            className="w-3 aspect-[0.57] fill-neutral-100 cursor-pointer"
          />
        </div>
        <div className="justify-center self-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="assets/res.jpg"
                className="grow w-full aspect-[1.56] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10">
                <div className="text-3xl font-extrabold whitespace-nowrap">
                  Nombre de la habitación
                </div>
                <div className="mt-6 text-xl text-justify">
                  Lorem ipsum dolor sit amet consectetur. Eu felis risus quis
                  nisi lectus.
                  <br />
                  <br />
                  Enim ipsum nisi gravida massa odio. Volutpat fermentum.
                </div>
                <div className="flex justify-center items-center mx-auto px-16 py-2 mt-14 text-xl font-semibold text-justify whitespace-nowrap bg-white rounded-xl text-stone-400 max-md:px-5 max-md:mt-10 cursor-pointer">
                  Hacer Reservación
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center self-stretch px-4 py-3 my-auto aspect-square">
          <img
            loading="lazy"
            src="./assets/der.svg"
            className="w-3 aspect-[0.57] fill-neutral-100 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
