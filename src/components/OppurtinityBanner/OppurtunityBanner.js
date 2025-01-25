import Image from "next/image";
import GradientText from "../ui/GradientText";

export default function Oppurtunity() {
  return (
    <div className="bg-[#2D3547] py-10  md:py-[80px] relative">
      <div className="relative" style={{ zIndex: 99 }}>
        <Image
          className="mx-auto"
          src="/images/opp/logo2.svg"
          width={120}
          height={120}
          alt="logos"
        />
        <h2
          data-aos="fade-left"
          className="pb-8 pt-2 text-white font-extrabold xl:leading-[95px] text-5xl md:text-6xl xl:text-[85px] text-center "
        >
          Don't miss the voice
          <br className="hidden lg:block" />
          <span className="font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
            AI opportunity
          </span>
        </h2>

        <div className="text-center py-6">
          <button className="shadow-sm inline-block px-[26px] py-[14px] text-center text-white items-center bg-gradient-to-b from-[#779DFF] to-[#2D68FF] backdrop-blur-[25px] rounded-[25px] font-semibold">
            <GradientText
              colors={["#40ffaa", "#000000", "#40ffaa", "#dddddd", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="pe-2 font-semibold"
            >
              Book a free consultation
              <span className="ml-1 inline-block h-2 w-2 border-r-2 border-b-2 -rotate-45"></span>
            </GradientText>
          </button>
        </div>
      </div>

      <Image
        className="absolute z-0 left-0 top-0"
        src="/images/opp/33.png"
        width={500}
        height={500}
        alt="shade"
      />
      <Image
        className="absolute z-0 right-0 bottom-0"
        src="/images/opp/34.png"
        width={500}
        height={500}
        alt="shade"
      />

      <Image
        className="absolute z-0 left-0 bottom-1/4 hidden xl:block"
        src="/images/opp/sd1.png"
        width={200}
        height={200}
        alt="shade"
      />
      <Image
        className="absolute z-0 right-0 top-0 hidden xl:block"
        src="/images/opp/sd2.png"
        width={500}
        height={500}
        alt="shade"
      />
    </div>
  );
}
