import Image from "next/image";
import GradientText from "../ui/GradientText";
import CountUp from "../ui/countUp";
import FadeContent from "../ui/fadeContent";

export default function MainBanner() {
  return (
    <div className="pt-32 lg:pt-44 relative overflow-hidde px-4 xl:px-0">
      <div className="relative" style={{ zIndex: 50 }}>
        <div
          className="mx-auto flex-nowrap flex w-[230px] items-center p-[8px_10px] bg-white border border-[#BFCFF3] rounded-[40px]"
          style={{ boxShadow: "0px 6px 41px 14px rgba(12, 15, 27, 0.08)" }}
        >
          <Image src="/images/grp.png" width={60} height={25} alt="group" />
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="font-inter ml-2"
          >
            <CountUp
              from={0}
              to={3500}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text me-2"
            />
            Pro Users
          </GradientText>
        </div>

        <h1
          data-aos="fade-right"
          className="font-extrabold xl:leading-[125px] pt-4 text-5xl md:text-7xl lg:text-[85px] xl:text-[105px] text-center "
        >
          Al
          <span className="mx-3 font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
            Voice Agents
          </span>
          <br className="hidden lg:block" />
          for Your Business
        </h1>

        <p className="text-center text-lg lg:text-xl font-medium py-2">
          Create no-code Al phone call systems with our Al voice agents: never
          miss a call again
          <br className="hidden lg:block" />
          and convert more leads
        </p>

        <div className="max-w-[1296px] mx-auto mt-6">
          <div className="relative z-10">
            <div className="max-w-[720px] mx-auto bg-[rgba(253,254,254,0.1)] border border-[#E5ECFC] shadow-[0px_10px_60px_14px_rgba(12,15,27,0.1)] backdrop-blur-[12px] rounded-lg md:rounded-[70px] p-2">
              <form>
                <div className="grid md:grid-cols-8 gap-2 items-center">
                  <span className="md:col-span-3 flex align-middle p-[14px_15px] bg-[#ffffff50] border border-[#F7F7F7] rounded-[25px] backdrop-blur-[25px]">
                    <Image
                      className="mx-auto"
                      src="/images/alpha.svg"
                      width={20}
                      height={20}
                      alt="group"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-transparent grow ml-1 px-1"
                    />
                  </span>

                  <span className="md:col-span-3 flex align-middle p-[14px_15px] bg-[#ffffff50] border border-[#F7F7F7] rounded-[25px] backdrop-blur-[25px]">
                    <Image
                      className="mx-auto"
                      src="/images/dial.svg"
                      width={20}
                      height={20}
                      alt="group"
                    />
                    <input
                      type="number"
                      placeholder="Phone"
                      className="bg-transparent grow ml-1 px-1"
                    />
                  </span>

                  <div className="md:col-span-2">
                    <button className="w-full px-[16px] py-[14px] text-center text-white flex items-center justify-center bg-gradient-to-b from-[#779DFF] to-[#2D68FF] backdrop-blur-[25px] rounded-[25px] font-semibold">
                      <GradientText
                        colors={[
                          "#40ffaa",
                          "#000000",
                          "#40ffaa",
                          "#dddddd",
                          "#40ffaa",
                        ]}
                        animationSpeed={3}
                        showBorder={false}
                        className="pe-2"
                      >
                        Get a free call
                        <span className="ml-1 inline-block h-2 w-2 border-r-2 border-b-2 -rotate-45"></span>
                      </GradientText>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Image
            data-aos="fade-up"
            className="w-64 md:w-80 mx-auto pt-3 relative z-10"
            src="/images/cll.png"
            width={350}
            height={90}
            alt="diallings"
          />
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 lg:pt-12 relative z-10">
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <div className="text lg:pt-10 col-span-2 md:col-span-3 lg:col-span-1">
                  <div className="bg-white rounded-[20px] lg:mb-12 p-1 border shadow-[0px_0px_4px_1px_rgba(0,0,0,0.2)]">
                    <div className="bg-white rounded-[20px] p-4 shadow-[0px_2px_4px_1px_rgba(0,0,0,0.2)]">
                      <p className="font-bold">
                        Voice AI tech is ready to handle phone calls and behave
                        like real people. Be among the first to take advantage
                        🚀
                      </p>
                    </div>
                  </div>
                </div>
              </FadeContent>

              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <div className="relative">
                  <Image
                    className="min-w-full"
                    src="/images/p1.png"
                    width={350}
                    height={90}
                    alt="group"
                  />
                  <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
                    <Image
                      src="/images/shapes/play.png"
                      width={50}
                      height={50}
                      alt="group"
                    />
                  </button>

                  <div className="flex items-start">
                    <span className="block min-w-4 min-h-4 mt-1 me-2 border-4 border-blue-500 rounded-full"></span>
                    <p>Listen to Lisa track her order</p>
                  </div>
                </div>
              </FadeContent>

              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <div className="relative">
                  <Image
                    className="min-w-full"
                    src="/images/p2.png"
                    width={350}
                    height={90}
                    alt="group"
                  />
                  <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
                    <Image
                      src="/images/shapes/play.png"
                      width={50}
                      height={50}
                      alt="group"
                    />
                  </button>

                  <div className="flex items-start">
                    <span className="block min-w-4 min-h-4 mt-1 me-2 border-4 border-blue-500 rounded-full"></span>
                    <p>See how Alex books an appointment</p>
                  </div>
                </div>
              </FadeContent>

              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <div className="relative">
                  <Image
                    className="min-w-full"
                    src="/images/p3.png"
                    width={350}
                    height={90}
                    alt="group"
                  />

                  <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
                    <Image
                      src="/images/shapes/play.png"
                      width={50}
                      height={50}
                      alt="group"
                    />
                  </button>

                  <div className="flex items-start">
                    <span className="block min-w-4 min-h-4 mt-1 me-2 border-4 border-blue-500 rounded-full"></span>
                    <p>AI voice agent cold calls lead</p>
                  </div>
                </div>
              </FadeContent>
            </div>

            <Image
              style={{ zIndex: 1 }}
              className="absolute hidden lg:block -top-[180px] right-[49.5%]"
              src="/images/shapes/v1.svg"
              width={460}
              height={300}
              alt="group"
            />
            <Image
              style={{ zIndex: 1 }}
              className="absolute hidden lg:block -top-[78px] right-[49.5%]"
              src="/images/shapes/v3.svg"
              width={160}
              height={200}
              alt="group"
            />
            <Image
              style={{ zIndex: 1 }}
              className="absolute hidden lg:block -top-[67px] left-[49.5%]"
              src="/images/shapes/v4.svg"
              width={160}
              height={200}
              alt="group"
            />
            <Image
              style={{ zIndex: 1 }}
              className="absolute hidden lg:block -top-[46px] left-[49.5%]"
              src="/images/shapes/v2.svg"
              width={460}
              height={300}
              alt="group"
            />
          </div>
        </div>
      </div>

      {/* shadow shapes */}
      <div className=" w-[935px] h-[890px] bg-[rgba(37,99,235,0.35)] filter blur-[250px] absolute top-0 -left-10"></div>
      <div className="w-[1000px] h-[927px] bg-[rgba(239,57,89,0.16)] filter blur-[250px] absolute top-[300px] right-0"></div>

      {/* side images */}
      <Image
        className="absolute top-12 left-0 w-20 md:w-36 xl:w-72"
        src="/images/hero-side-images/ml1.svg"
        width={280}
        height={100}
        alt="card"
      />
      <Image
        className="absolute top-[380px] left-0 w-20 md:w-36 xl:w-64"
        src="/images/hero-side-images/ml2.png"
        width={260}
        height={100}
        alt="card"
      />
      <Image
        className="absolute top-[550px] left-0 w-20 md:w-36 xl:w-72"
        src="/images/hero-side-images/ml3.svg"
        width={300}
        height={100}
        alt="card"
      />
      <Image
        className="absolute top-0 right-0 w-20 md:w-48 xl:w-[400px]"
        src="/images/hero-side-images/mr1.svg"
        width={400}
        height={100}
        alt="card"
      />
      <Image
        className="absolute top-[280px] right-0 w-20 md:w-36 xl:w-72"
        src="/images/hero-side-images/mr2.png"
        width={300}
        height={100}
        alt="card"
      />
      <Image
        className="absolute top-[680px] right-0 w-20 md:w-36 xl:w-72"
        src="/images/hero-side-images/mr3.svg"
        width={300}
        height={100}
        alt="card"
      />
    </div>
  );
}
