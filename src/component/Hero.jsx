import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#0F1629] mt-[7rem]">
      <div className="relative max-w-[120rem] min-w-[93rem] h-[42.5rem]">
        <div>

          <div className="absolute text-[white] text-[3.575rem] font-bold font-the_bold_font top-[8.85rem] w-[32.875rem] left-[12rem] z-2">
            EXPLORE NEW <span className="bg-gradient-horizon bg-clip-text text-[transparent] z-2">HORIZONS</span>
          </div>
          <Image src='/dash.svg' alt='dash' height={100} width={24} className="absolute top-[17rem] left-[30.2rem] w-[22.5937rem]"/>

        <div className="absolute text-[white] text-[1.8rem] font-[400] font-poppins top-[19.3rem] left-[12rem]">
        Learn Anything, Anytime, Anywhere
        </div>
        <div className="absolute h-[50rem] w-[80rem] top-[-6rem] left-[-5rem] overflow-hidden rotate-[-10deg]">
        <Image src='/Ellipse3.svg' alt='Ellipse' height={100} width={24} className="absolute w-[80rem] h-[77.5rem] left-[-12rem] top-[3.9rem] overflow-hidden opacity-30"/>
        </div>

        <div className="absolute h-[30rem] w-[68.0625rem] top-[12rem] left-[-1rem] overflow-hidden rotate-[-1deg] z-1">
        <Image src='/Ellipse3.svg' alt='Ellipse' height={100} width={24} className="absolute w-[68.0625rem] h-[56.5rem] left-[-12rem] top-[3.9rem] overflow-hidden opacity-30"/>
        </div>

        <div className="absolute h-[25rem] w-[51.5rem] top-[18rem] left-[-4rem] overflow-hidden rotate-[-10deg] z-1">
        <Image src='/Ellipse3.svg' alt='Ellipse' height={100} width={24} className="absolute w-[51.5rem] h-[44.5rem] left-[-12rem] top-[3.9rem] overflow-hidden opacity-30"/>
        </div>

          <div>

            <div
              className="absolute max-w-[43.75rem] max-h-[41.3125rem] rounded-[43.75rem] z-3 top-[6rem] right-[10rem] min-h-[25rem] min-w-[27rem]"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(128, 116, 255, 0.67) 0%, rgba(123, 112, 238, 0.00) 100%)",
              }}
            ></div>
            
              <Image
                className="absolute top-[8rem] right-[11.9rem] max-w-[39.1875rem] max-h-[31.6875rem] min-h-[15rem] min-w-[24rem]"
                src="/Objects.svg"
                alt="objects"
                width={100}
                height={24}
              />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
