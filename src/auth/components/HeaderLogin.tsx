// import React from 'react';
import { Skew } from './';

export const HeaderLogin = () => {
  return (
    <>
      <section className="flex relative items-center p-0 h-[500px]">
        <div
          className="bg-blueGray-800 w-full h-full absolute bg-cover bg-50 z-0 opacity-20"
          style={{
            backgroundImage: "url('../src/assets/img/login/backgroundImage.png')",
          }}
        ></div>
        <div className="w-full bottom-0 absolute h-42 z-2">
          <Skew />
        </div>
      </section>
    </>
  )
}
