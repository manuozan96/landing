/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export default function Footer(props3: any) {
  return (
    <div className="flex justify-center items-center self-stretch px-16 py-12 mt-20 w-full bg-[#AE9672] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[962px]">
        <div className="justify-center max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="grow justify-center py-9 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                    <div className="self-stretch my-auto text-3xl font-bold text-white max-md:mt-10">
                      LOGO
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center text-white max-md:mt-10">
                      <div className="text-base font-bold whitespace-nowrap">
                        About us
                      </div>
                      <div className="mt-4 text-xs font-light">
                        Lorem ipsum dolor sit amet consectetur. Eget est diam
                        pharetra porttitor malesuada facilisi. Dui lorem eget
                        morbi diam. Sit justo vitae venenatis est nunc vel
                        tellus auctor. Odio tincidunt tempor hendrerit nunc
                        felis aliquet urna mollis quam.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch my-auto text-white whitespace-nowrap max-md:mt-10">
                <div className="text-base font-bold">Quick Links</div>
                <div className="mt-4 text-xs font-light">
                  Imput
                  <br />
                  Imput
                  <br />
                  Imput
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch py-2 my-auto max-md:mt-10">
                <div className="flex gap-2 justify-between pr-20 max-md:pr-5"></div>
                <div className="mt-2 text-xl font-bold text-white">
                  asdasd@asd.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-start self-center py-1.5 mt-4 text-xs font-light text-neutral-100 max-md:flex-wrap max-md:max-w-full">
          <div className="grow self-stretch text-xl font-bold text-white whitespace-nowrap">
            2023 Nombre. All right reserved
          </div>
          <div className="flex-auto mt-2">Terminos y condiciones</div>
          <div className="flex-auto mt-2">Politicas de privacidad</div>
          <div className="mt-2">Seguridad</div>
        </div>
      </div>
    </div>
  );
}
