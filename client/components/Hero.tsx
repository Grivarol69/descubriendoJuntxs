import Image from "next/image";
import BlurArrow from "../public/assets/blue-button.svg";
import Gradient from "../public/assets/Gradient.svg";
import HeroImage from "../public/assets/Image.svg";
import Google from "../public/assets/Google.svg";
import Slack from "../public/assets/Slack.svg";
import Truspilot from "../public/assets/Trustpilot.svg";
import Cnn from "../public/assets/CNN.svg";
import Cluth from "../public/assets/Clutch.svg";
import Link from "next/link";

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Empieza a ayudar Hoy
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          ¡Tu donación hace la diferencia! Ayuda a apoyar nuestra causa y
          contribuye a crear un impacto positivo en la comunidad. Cada pequeña
          contribución suma para lograr un cambio significativo.
        </p>

        <div className="flex w-full pt-8 justify-center gap-x-6 ">
          <button className="bg-[#7286ff] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            <Link href='/donaciones'>Dona</Link> 
          </button>
          <button className="w-1/2 text-[#7286ff] flex items-center justify-center gap-x-2 lg:w-fit">
            <Link href='/donaciones'>Tipos de Donaciones</Link>
            <span>
              <Image src={BlurArrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="hero image"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle  lg:grid-cols-5">
              <Image src={Google} alt="" />
              <Image src={Slack} alt="" />
              <Image src={Truspilot} alt="" />
              <Image src={Cnn} alt="" />
              <Image src={Cluth} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
