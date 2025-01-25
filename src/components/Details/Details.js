import Image from "next/image";
import Link from "next/link";
import GradientText from "../ui/GradientText";
import CountUp from "../ui/countUp";

export default function Details() {
  return (
    <div className="py-12 md:py-20 xl:pt-28 relative px-4 xl:px-0">
      <div className="max-w-[1296px] mx-auto relative z-20">
        <h2
          data-aos="fade-left"
          className="pb-8 font-extrabold xl:leading-[65px] text-3xl md:text-4 xl:text-[50px] text-center"
        >
          Voice AI that's ready to take phone <br className="hidden lg:block" />
          <span className="font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
            calls off your hands
          </span>
        </h2>

        <div className="py-6 xl:py-9 grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          <div
            data-aos="fade-up"
            className="relative p-[10px] border rounded-[25px] overflow-hidden"
          >
            <div
              className="p-[40px] md:min-h-[390px] h-full bg-[#ffffff88] rounded-[25px] backdrop-blur-[25px] relative z-20
                        shadow-[0px_40px_80px_-15px_rgba(0,0,0,0.075),0px_2px_0.6px_-2.5px_rgba(0,0,0,0.25),0px_30.3264px_30.3264px_-20.2176px_rgba(8,8,8,0.04),0px_7.58161px_16.4268px_rgba(8,8,8,0.03),0px_7.58161px_5.05441px_-5.05441px_rgba(8,8,8,0.05),0px_6.31801px_1.8954px_-5.05441px_rgba(8,8,8,0.05)]"
            >
              <Image
                src="/images/details/man.svg"
                width={100}
                height={100}
                alt="logos"
              />

              <h2 className="font-extrabold text-2xl md:text-3xl py-3">
                Human-like voice
              </h2>
              <p className="md:text-xl font-medium">
                Sounds just like a real person with natural speech patterns and
                tone
              </p>
            </div>

            <Image
              className="absolute bottom-0 left-0"
              src="/images/shapes/card-bottom.png"
              width={250}
              height={100}
              alt="logos"
            />
            <Image
              className="absolute top-0 right-0"
              src="/images/shapes/card-top.png"
              width={250}
              height={100}
              alt="logos"
            />
          </div>

          <div
            data-aos="fade-up"
            className="relative p-[10px] border rounded-[25px] overflow-hidden"
          >
            <div
              className="p-[40px] md:min-h-[390px] h-full bg-[#ffffff88] rounded-[25px] backdrop-blur-[25px] relative z-20
                        shadow-[0px_40px_80px_-15px_rgba(0,0,0,0.075),0px_2px_0.6px_-2.5px_rgba(0,0,0,0.25),0px_30.3264px_30.3264px_-20.2176px_rgba(8,8,8,0.04),0px_7.58161px_16.4268px_rgba(8,8,8,0.03),0px_7.58161px_5.05441px_-5.05441px_rgba(8,8,8,0.05),0px_6.31801px_1.8954px_-5.05441px_rgba(8,8,8,0.05)]"
            >
              <Image
                src="/images/details/setting.svg"
                width={100}
                height={100}
                alt="logos"
              />

              <h2 className="font-extrabold text-2xl md:text-3xl py-3">
                Customizable Responses
              </h2>
              <p className="md:text-xl font-medium">
                Tailor responses and conversation flows to your needs
              </p>
            </div>

            <Image
              className="absolute bottom-0 left-0"
              src="/images/shapes/card-bottom.png"
              width={250}
              height={100}
              alt="logos"
            />
            <Image
              className="absolute top-0 right-0"
              src="/images/shapes/card-top.png"
              width={250}
              height={100}
              alt="logos"
            />
          </div>

          <div
            data-aos="fade-up"
            className="relative p-[10px] border rounded-[25px] overflow-hidden"
          >
            <div
              className="p-[40px] md:min-h-[390px] h-full bg-[#ffffff88] rounded-[25px] backdrop-blur-[25px] relative z-20
                        shadow-[0px_40px_80px_-15px_rgba(0,0,0,0.075),0px_2px_0.6px_-2.5px_rgba(0,0,0,0.25),0px_30.3264px_30.3264px_-20.2176px_rgba(8,8,8,0.04),0px_7.58161px_16.4268px_rgba(8,8,8,0.03),0px_7.58161px_5.05441px_-5.05441px_rgba(8,8,8,0.05),0px_6.31801px_1.8954px_-5.05441px_rgba(8,8,8,0.05)]"
            >
              <Image
                src="/images/details/graph.svg"
                width={100}
                height={100}
                alt="logos"
              />

              <h2 className="font-extrabold text-2xl md:text-3xl py-3">
                Customizable Responses
              </h2>
              <p className="md:text-xl font-medium">
                Handle thousands of calls simultaneously with perfect
                consistency
              </p>
            </div>

            <Image
              className="absolute bottom-0 left-0"
              src="/images/shapes/card-bottom.png"
              width={250}
              height={100}
              alt="logos"
            />
            <Image
              className="absolute top-0 right-0"
              src="/images/shapes/card-top.png"
              width={250}
              height={100}
              alt="logos"
            />
          </div>
        </div>

        {/* language */}
        <div className="py-6 xl:py-9 relative">
          <div
            style={{
              padding: "10px",
              boxShadow: "0px 0px 20px 15px #00000010",
              border: "1px solid #fff",
              borderRadius: "24px",
              background:
                "linear-gradient(303deg, rgba(37, 99, 235, 0) 61.61%, rgba(37, 99, 235, 0.2) 151.43%), rgba(249, 250, 251, 0.14)",
            }}
          >
            <Image
              data-aos="fade-left"
              className="m-auto w-60 md:w-72 xl:w-[400px]"
              src="/images/language/fire.png"
              width={400}
              height={400}
              alt="logos"
            />

            <h2 className="mt-[-30px] font-extrabold xl:leading-[65px] text-3xl md:text-4 xl:text-[50px] text-center ">
              <span className="mx-3 font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
                <CountUp
                  from={0}
                  to={40}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                + languages
              </span>
              to choose from
            </h2>
            <p className="font-medium md:text-xl text-center py-4">
              CallBeast supports over 40 languages and diverse accents, to
              address global audience.
            </p>

            <div className="flex items-center justify-center gap-2 py-4">
              <div className="flex p-[8px_10px] bg-white border border-[#BFCFF3] shadow-[0px_6px_41px_14px_rgba(12,15,27,0.08)] rounded-[40px]">
                <Image
                  src="/images/language/f1.svg"
                  width={20}
                  height={20}
                  alt="logos"
                />
                <p className="ms-2 font-inter font-medium">Clone your voice</p>
              </div>
              <div className="flex p-[8px_10px] bg-white border border-[#BFCFF3] shadow-[0px_6px_41px_14px_rgba(12,15,27,0.08)] rounded-[40px]">
                <Image
                  src="/images/language/f22.svg"
                  width={20}
                  height={20}
                  alt="logos"
                />
                <p className="ms-2 font-inter font-medium">Multiple accents</p>
              </div>
            </div>

            <Image
              className="mx-auto my-4 w-64 md:w-[400px]"
              src="/images/language/flags.svg"
              width={415}
              height={75}
              alt="logos"
            />

            <div className="my-6 px-2 lg:px-0 relative z-90">
              <div className="max-w-[600px] mx-auto flex items-center  p-3 pe-4 bg-[rgba(253,254,254,0.1)] border border-[#E5ECFC] shadow-[0px_6px_41px_4px_rgba(12,15,27,0.1)] backdrop-blur-[12px] rounded-[70px]">
                <Image
                  src="/images/language/user.svg"
                  width={25}
                  height={25}
                  alt="logos"
                />

                <select className="w-full bg-transparent">
                  <option value="Christopher">Christopher</option>
                  <option value="Christopher">Christopher 2</option>
                </select>
              </div>

              <div className="text-center py-6">
                <button className="shadow-sm inline-block px-[26px] py-[14px] text-center text-white items-center bg-gradient-to-b from-[#779DFF] to-[#2D68FF] backdrop-blur-[25px] rounded-[25px] font-semibold">
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
                    className="pe-2 font-semibold"
                  >
                    Play Voice Sample
                    <span className="ml-1 inline-block h-2 w-2 border-r-2 border-b-2 -rotate-45"></span>
                  </GradientText>
                </button>
              </div>
            </div>
          </div>

          <Image
            className="absolute -z-10 left-0 bottom-1/4 hidden md:block"
            src="/images/language/d2.svg"
            width={180}
            height={400}
            alt="logos"
          />
          <Image
            className="absolute -z-10 right-0 bottom-4 hidden md:block"
            src="/images/language/d1.svg"
            width={180}
            height={400}
            alt="logos"
          />
          <Image
            className="absolute -z-10 right-[10%] bottom-1/4"
            src="/images/language/shp1.svg"
            width={250}
            height={300}
            alt="logos"
          />
        </div>

        {/* int */}
        <div className="py-6 xl:py-9">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div
                data-aos="fade-up"
                className="bg-white shadow-[0px_0px_15px_5px_rgba(20,20,43,0.08)] rounded-[45px]"
              >
                <Image
                  className="w-96 lg:w-full mx-auto"
                  src="/images/details/int1.png"
                  width={600}
                  height={400}
                  alt="logos"
                />
              </div>

              <h2
                data-aos="fade-right"
                className="py-4 lg:py-8 font-extrabold lg:leading-[50px] text-3xl lg:text-[40px]"
              >
                <span className="me-3 font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
                  Automate
                </span>
                customer <br className="hidden lg:block" />
                <span className="me-3 font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
                  support
                </span>
                inquiries
              </h2>

              <div className="lg:flex items-center pb-6">
                <div className="flex items-center">
                  <span className="block w-4 h-4 me-2 shadow-md shadow-blue-500 border-4 border-blue-500 rounded-full"></span>
                  <p className="font-medium">24/7 Availability</p>
                </div>
                <div className="flex items-center lg:ms-4">
                  <span className="block w-4 h-4 me-2 shadow-md shadow-blue-500 border-4 border-blue-500 rounded-full"></span>
                  <p className="font-medium">Reduced Costs</p>
                </div>
                <div className="flex items-center lg:ms-4">
                  <span className="block w-4 h-4 me-2 shadow-md shadow-blue-500 border-4 border-blue-500 rounded-full"></span>
                  <p className="font-medium">No-Codeq</p>
                </div>
              </div>

              <Link
                href="/"
                className="inline-block px-[26px] py-[14px] text-center text-white items-center bg-gradient-to-b from-[#779DFF] to-[#2D68FF] backdrop-blur-[25px] rounded-[25px] font-semibold"
              >
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
                  className="pe-2 font-semibold"
                >
                  Learn more
                  <span className="ml-1 inline-block h-2 w-2 border-r-2 border-b-2 -rotate-45"></span>
                </GradientText>
              </Link>
            </div>

            <div>
              <div
                data-aos="fade-up"
                className="bg-white shadow-[0px_0px_15px_5px_rgba(20,20,43,0.08)] rounded-[45px]"
              >
                <Image
                  className="w-96 lg:w-full mx-auto"
                  src="/images/details/int2.png"
                  width={600}
                  height={400}
                  alt="logos"
                />
              </div>

              <h2
                data-aos="fade-right"
                className="py-4 lg:py-8 font-extrabold lg:leading-[50px] text-3xl lg:text-[40px]"
              >
                Cold calling for sales, <br className="hidden lg:block" />
                <span className="me-3 font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
                  powered by AI
                </span>
              </h2>

              <div className="lg:flex items-center pb-6">
                <div className="flex items-center">
                  <span className="block w-4 h-4 me-2 shadow-md shadow-blue-500 border-4 border-blue-500 rounded-full"></span>
                  <p className="font-medium">Pre-call Scripts</p>
                </div>
                <div className="flex items-center lg:ms-4">
                  <span className="block w-4 h-4 me-2 shadow-md shadow-blue-500 border-4 border-blue-500 rounded-full"></span>
                  <p className="font-medium">Lead Prioritization</p>
                </div>
                <div className="flex items-center lg:ms-4">
                  <span className="block w-4 h-4 me-2 shadow-md shadow-blue-500 border-4 border-blue-500 rounded-full"></span>
                  <p className="font-medium">AI-Generated Notes</p>
                </div>
              </div>

              <Link
                href="/"
                className="inline-block px-[26px] py-[14px] text-center text-white items-center bg-gradient-to-b from-[#779DFF] to-[#2D68FF] backdrop-blur-[25px] rounded-[25px] font-semibold"
              >
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
                  className="pe-2 font-semibold"
                >
                  Get Started today
                  <span className="ml-1 inline-block h-2 w-2 border-r-2 border-b-2 -rotate-45"></span>
                </GradientText>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[-90px] top-[350px] w-[640px] h-[600px] bg-[rgba(74,134,255,0.32)] blur-[150px]"></div>
      <div className="absolute left-[-150px] top-[1150px] w-[500px] h-[500px] bg-[rgba(239,57,90,0.21)] blur-[150px]"></div>

      <div className="absolute bottom-[-300px] left-[20%] w-[450px] h-[450px] bg-[rgba(74,134,255,0.25)] blur-[150px]"></div>
      <div className="absolute bottom-[-300px] right-[20%] w-[450px] h-[450px] bg-[rgba(239,57,90,0.12)] blur-[150px]"></div>
    </div>
  );
}
