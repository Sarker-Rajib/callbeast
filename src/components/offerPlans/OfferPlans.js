import Image from "next/image";
import Link from "next/link";
import Faq from "../Faq/Faq";
import GradientText from "../ui/GradientText";

export default function OfferPlans() {
  return (
    <div className="pt-20 relative overflow-hidden px-4 xl:px-0">
      <div className="max-w-[1296px] mx-auto relative z-20">
        {/* features section */}
        <div className="features relative z-20">
          <Image
            data-aos="fade-left"
            className="w-[120px] lg:w-[215px]"
            src="/images/logo-b.svg"
            width={215}
            height={40}
            alt="group"
          />
          <h2
            data-aos="fade-right"
            className="py-3 font-extrabold xl:leading-[65px] text-2xl md:text-4xl xl:text-[50px]"
          >
            The
            <span className="mx-3 font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
              fully featured platform
            </span>
            to automate
            <br className="hidden lg:block" />
            phone calls with AI
          </h2>

          <div className="grid md:grid-cols-2 gap-7 pt-8">
            <div>
              <div data-aos="fade-up" className="flex pb-4">
                <div className="p-1 pe-3">
                  <Image
                    className="min-w-[50px] md:min-w-[60px]"
                    src="/images/offernplan/sc.svg"
                    width={60}
                    height={60}
                    alt="group"
                  />
                </div>
                <div className="grow">
                  <h5 className="font-extrabold text-xl md:text-[24px] lg:text-[28px]">
                    Simultaneous Calls
                  </h5>
                  <p className="font-medium md:text-lg">
                    Forget about queues. Our AI can handle dozens
                    <br className="hidden lg:block" />
                    of calls in parallel on the same phone line.
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" className="flex pb-4">
                <div className="p-1 pe-3">
                  <Image
                    className="min-w-[50px] md:min-w-[60px]"
                    src="/images/offernplan/edu.svg"
                    width={60}
                    height={60}
                    alt="group"
                  />
                </div>
                <div className="grow">
                  <h5 className="font-extrabold text-xl md:text-[24px] lg:text-[28px]">
                    Knowledge
                  </h5>
                  <p className="font-medium md:text-lg">
                    Upload any data for your flow like PDFs, images,
                    <br className="hidden lg:block" />
                    and even crawl full website contents.
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" className="flex pb-4">
                <div className="p-1 pe-3">
                  <Image
                    className="min-w-[50px] md:min-w-[60px]"
                    src="/images/offernplan/bb.svg"
                    width={60}
                    height={60}
                    alt="group"
                  />
                </div>
                <div className="grow">
                  <h5 className="font-extrabold text-xl md:text-[24px] lg:text-[28px]">
                    Quick prompt builder
                  </h5>
                  <p className="font-medium md:text-lg">
                    Easily instruct your agent how to behave during{" "}
                    <br className="hidden lg:block" /> the call using our
                    step-by-step wizard.
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" className="flex pb-4">
                <div className="p-1 pe-3">
                  <Image
                    className="min-w-[50px] md:min-w-[60px]"
                    src="/images/offernplan/bm.svg"
                    width={60}
                    height={60}
                    alt="group"
                  />
                </div>
                <div className="grow">
                  <h5 className="font-extrabold text-xl md:text-[24px] lg:text-[28px]">
                    White label resell
                  </h5>
                  <p className="font-medium md:text-lg">
                    Take advantage of the booming Voice AI market and
                    <br className="hidden lg:block" />
                    offer AI voice solutions under your own branding.
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="p-[45px] bg-white shadow-[0px_0px_10px_2px_rgba(20,20,43,0.08)] rounded-[45px] relative overflow-hidden"
            >
              <p className="font-inter text-sm">
                <span className="inline-block w-3 h-3 bg-green-600 rounded-full me-3 shadow-md shadow-green-500"></span>
                "I want to speak with a consultant"
              </p>
              <h4 className=" py-1 font-extrabold text-xl md:text-[24px] lg:text-[28px]">
                Human transfers
              </h4>
              <p className="font-medium md:text-lg pb-4">
                Forward calls to human agents when the flow neods it or when the
                customer requests it.
              </p>

              <div className="flex justify-between py-4">
                <div className="left">
                  <p className="pb-4 text-[#5c5c5c]">Agent</p>
                  <p className="pb-4 font-medium">Agent 005</p>
                  <p className="pb-4 font-medium">Mike R.</p>
                  <p className="pb-4 font-medium">Agent 014</p>
                </div>
                <div className="right">
                  <p className="pb-4 text-[#5c5c5c]">Status</p>
                  <p className="pb-4 text-green-500">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full me-3 shadow shadow-green-500"></span>
                    Available
                  </p>
                  <p className="pb-4 text-yellow-500">
                    <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full me-3 shadow shadow-yellow-500"></span>
                    On call
                  </p>
                  <p className="pb-4 text-red-500">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full me-3 shadow shadow-red-500"></span>
                    Busy
                  </p>
                </div>
              </div>

              <Image
                className="absolute top-0 right-0"
                src="/images/offernplan/331.png"
                width={230}
                height={40}
                alt="group"
              />

              <Image
                className="absolute left-0 bottom-0"
                src="/images/offernplan/332.png"
                width={370}
                height={40}
                alt="group"
              />
            </div>
          </div>

          <div className="py-12"></div>
        </div>

        {/* plans */}
        <div className="plans pb-24">
          <h2
            data-aos="fade-up"
            className="py-3 text-center font-extrabold xl:leading-[65px] text-2xl md:text-4xl xl:text-[50px]"
          >
            Ready to start
            <br className="hidden lg:block" />
            automating phone
            <span className="mx-3 font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
              calls with Al?
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 md:pt-12 xl:pt-36">
            <div
              data-aos="fade-right"
              className="p-[60px_40px] font-sans bg-white border-[1px_solid_#EFF0F7] shadow-[0px_2px_12px_rgba(20,20,43,0.08)] rounded-[25px]"
            >
              <div className="flex items-start">
                <Image
                  src="/images/offernplan/ic1.svg"
                  width={75}
                  height={75}
                  alt="group"
                />
                <span className="grow p-2">
                  <p className="md:text-lg text-[#6F6C90]">Pricing 01</p>
                  <p className="text-2xl font-bold">Pro Plan</p>
                </span>
              </div>

              <h4 className="text-5xl py-3 font-bold">
                $129 <span className="text-xl text-[#6F6C90]">/monthly</span>
              </h4>
              <p className="md:text-lg font-bold pb-4">Whats included</p>

              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">700 included minutes</span>
              </p>
              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">$0.16 / extra minute</span>
              </p>
              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">5 assistants</span>
              </p>
              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">5 outbound campaigns</span>
              </p>
              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">10 calls in parallel</span>
              </p>
              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">5 cloned voices</span>
              </p>
              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">
                  10,000 no-code automate platform runs monthly
                </span>
              </p>

              <div className="text-center pt-6">
                <Link
                  href="/"
                  className="inline-block w-full px-[20px] py-[14px] text-center font-inter text-white bg-gradient-to-b from-[#779DFF] to-[#2D68FF] backdrop-blur-[25px] rounded-[25px] font-semibold"
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
                    Choose Pro Plan
                    <span className="ml-1 inline-block h-2 w-2 border-r-2 border-b-2 -rotate-45"></span>
                  </GradientText>
                </Link>
              </div>
            </div>

            <div data-aos="fade-up" className="lg:pb-8">
              <div className="lg:mt-[-40px] p-[60px_40px] font-sans text-white border-[1px_solid_#EFF0F7] bg-[#2563EB] shadow-[0px_2px_12px_rgba(20,20,43,0.08) rounded-[25px]">
                <div className="flex items-start">
                  <Image
                    src="/images/offernplan/ic1.svg"
                    width={75}
                    height={75}
                    alt="group"
                  />
                  <span className="grow p-2">
                    <p className="md:text-lg text-[#ffffffc7]">Pricing 02</p>
                    <p className="text-2xl font-bold">Agency Plan</p>
                  </span>
                </div>

                <h4 className="text-5xl py-3 font-bold">
                  $249
                  <span className="text-xl text-[#ffffffb6]">/monthly</span>
                </h4>
                <p className="md:text-lg font-bold pb-4">Whats included</p>

                <p className="md:text-lg flex items-start pb-3">
                  <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                  <span className="leading-[18px]">1700 included minutes</span>
                </p>
                <p className="md:text-lg flex items-start pb-3">
                  <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                  <span className="leading-[18px]">$0.09 / extra minute</span>
                </p>
                <p className="md:text-lg flex items-start pb-3">
                  <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                  <span className="leading-[18px]">Unlimited assistants</span>
                </p>
                <p className="md:text-lg flex items-start pb-3">
                  <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                  <span className="leading-[18px]">
                    Unlimited outbound campaigns
                  </span>
                </p>
                <p className="md:text-lg flex items-start pb-3">
                  <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                  <span className="leading-[18px]">500 calls in parallel</span>
                </p>
                <p className="md:text-lg flex items-start pb-3">
                  <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                  <span className="leading-[18px]">10 cloned voices</span>
                </p>
                <p className="md:text-lg flex items-start pb-3">
                  <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                  <span className="leading-[18px]">
                    100,000 no-code automate platform runs monthly
                  </span>
                </p>

                <div className="text-center pt-6">
                  <Link
                    href="/"
                    className="p-[16px_14px_16px_17px] bg-gradient-to-b from-[#D1D7ED] to-[#FFFFFF] backdrop-blur-[25px] rounded-[25px] text-black w-full inline-block font-semibold font-inter"
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
                      Choose Agency Plan
                      <span className="ml-1 inline-block h-2 w-2 border-r-2 border-b-2 -rotate-45"></span>
                    </GradientText>
                  </Link>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="p-[60px_40px] font-sans bg-white border-[1px_solid_#EFF0F7] shadow-[0px_2px_12px_rgba(20,20,43,0.08)] rounded-[25px]"
            >
              <div className="flex items-start">
                <Image
                  src="/images/offernplan/ic3.svg"
                  width={75}
                  height={75}
                  alt="group"
                />
                <span className="grow p-2">
                  <p className="md:text-lg text-[#6F6C90]">Pricing 03</p>
                  <p className="text-2xl font-bold">White-label Plan</p>
                </span>
              </div>

              <h4 className="text-5xl py-3 font-bold">
                $419 <span className="text-xl text-[#6F6C90]">/monthly</span>
              </h4>
              <p className="md:text-lg font-bold pb-4">Whats included</p>

              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">3500 included minutes</span>
              </p>
              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">$0.09 / extra minute</span>
              </p>
              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">Unlimited assistants</span>
              </p>
              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">
                  Unlimited outbound campaigns
                </span>
              </p>
              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">1,000 calls in parallel</span>
              </p>
              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">Unlimited cloned voices</span>
              </p>
              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">
                  Unlimited no-code automate platform runs monthly
                </span>
              </p>
              <p className="md:text-lg flex items-start pb-3">
                <span className="me-2 inline-block h-4 w-4 border-4 shadow-md shadow-blue-500 bg-white rounded-full border-blue-500"></span>
                <span className="leading-[18px]">
                  White label (your own branding)
                </span>
              </p>

              <div className="text-center pt-6">
                <Link
                  href="/"
                  className="inline-block font-inter w-full px-[20px] py-[14px] text-center text-white bg-gradient-to-b from-[#779DFF] to-[#2D68FF] backdrop-blur-[25px] rounded-[25px] font-semibold"
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
                    Choose White-label Plan
                    <span className="ml-1 inline-block h-2 w-2 border-r-2 border-b-2 -rotate-45"></span>
                  </GradientText>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* faq */}
        <div className="relative" style={{ zIndex: 99 }}>
          <Faq />
        </div>
      </div>

      {/* shades */}
      <div className="absolute right-0 top-[-250px] w-[750px] h-[500px] bg-[rgba(74,134,255,0.38)] blur-[150px]"></div>
      <div className="absolute left-0 top-[-250px] w-[750px] h-[500px] bg-[rgba(239,57,90,0.18)] blur-[150px]"></div>

      <div className="absolute right-0 bottom-[380px] w-[750px] h-[500px] bg-[rgba(74,134,255,0.38)] blur-[150px]"></div>
      <div className="absolute left-0 bottom-[280px] w-[750px] h-[500px] bg-[rgba(239,57,90,0.18)] blur-[150px]"></div>
    </div>
  );
}
