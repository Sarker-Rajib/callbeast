import Image from "next/image";
import Link from "next/link";
import GradientText from "../ui/GradientText";
import FadeContent from "../ui/fadeContent";

export default function PopularTools() {
  return (
    <div className="overflow-hidden xl:pb-20">
      <div className="max-w-[1280px] px-4 2xl:p-0 py-6 md:py-14 mx-auto rounded-[35px]">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div data-aos="fade-up" className="text-center">
            <p className="bg-[#2D68FF] inline-block text-white font-semibold p-[15px_35px] rounded-md">
              Connectivity
            </p>
            <h2 className="py-4  font-extrabold lg:leading-[65px] text-4xl lg:text-[50px]">
              Ultra
              <span className="mx-3 font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
                connected
              </span>
              with
              <br className="hidden lg:block" />
              your business
            </h2>

            <p className="font-medium md:text-xl">
              Explore our cutting-edge services designed to streamline your
              calls, boost
              <br className="hidden lg:block" />
              efficiency, and enhance customer satisfaction.
            </p>
          </div>
        </FadeContent>

        <div className="py-6 xl:py-12">
          <div className="grid gap-5 xl:grid-cols-3">
            <div className="relative z-10 grid md:grid-cols-2 xl:grid-cols-1 gap-5">
              <div
                data-aos="fade-right"
                className="shadow-lg border border-white bg-[#f2f2f2] p-3 lg:p-4 xl:p-5 rounded-3xl relative"
              >
                <Image
                  src="/images/features_page/repo.png"
                  width={70}
                  height={70}
                  alt="group"
                />

                <h5 className="font-sans pb-3 font-bold md:text-lg">
                  Reporting
                </h5>
                <p className="text-[#687087] font-medium md:text-lg">
                  Our AI collects and analyzes all call data, providing you with
                  detailed reports.
                </p>

                {/*  */}
                <Image
                  className="absolute top-0 right-0"
                  src="/images/features_page/pp.png"
                  width={20}
                  height={20}
                  alt="group"
                />
              </div>
              <div
                data-aos="fade-right"
                className="shadow-lg border border-white bg-[#f2f2f2] p-3 lg:p-4 xl:p-5 rounded-3xl relative"
              >
                <Image
                  src="/images/features_page/code.png"
                  width={70}
                  height={70}
                  alt="group"
                />

                <h5 className="font-sans pb-3 font-bold md:text-lg">
                  External tools
                </h5>
                <p className="text-[#687087] font-medium md:text-lg">
                  Integrate Al with calendars, CRMs, and ERPs to automatically
                  manage and synchronize appointments, contacts, and operational
                  data.
                </p>

                {/*  */}
                <Image
                  className="absolute top-0 right-0"
                  src="/images/features_page/g.png"
                  width={20}
                  height={20}
                  alt="group"
                />
              </div>
            </div>

            <div className="hidden xl:flex h-full items-center relative">
              <Image
                data-aos="fade-up"
                className="mx-auto relative z-10"
                src="/images/features_page/center.png"
                width={300}
                height={500}
                alt="group"
              />

              {/* shapes */}
              <Image
                className="absolute top-24 left-[-60px]"
                src="/images/features_page/11.png"
                width={160}
                height={80}
                alt="group"
              />
              <Image
                className="absolute bottom-24 left-[-60px]"
                src="/images/features_page/22.png"
                width={160}
                height={80}
                alt="group"
              />
              <Image
                className="absolute top-24 right-[-60px]"
                src="/images/features_page/33.png"
                width={160}
                height={80}
                alt="group"
              />
              <Image
                className="absolute bottom-24 right-[-60px]"
                src="/images/features_page/44.png"
                width={160}
                height={80}
                alt="group"
              />
            </div>

            <div className="relative z-10 grid md:grid-cols-2 xl:grid-cols-1 gap-5">
              <div
                data-aos="fade-left"
                className="shadow-lg border border-white bg-[#f2f2f2] p-3 lg:p-4 xl:p-5 rounded-3xl relative"
              >
                <Image
                  src="/images/features_page/sent.png"
                  width={70}
                  height={70}
                  alt="group"
                />

                <h5 className="font-sans pb-3 font-bold md:text-lg">
                  Knowledge base
                </h5>
                <p className="text-[#687087] font-medium md:text-lg">
                  Access and use your company's knowledge base to provide
                  customers with accurate and up-to-date information.
                </p>

                {/*  */}
                <Image
                  className="absolute top-0 right-0"
                  src="/images/features_page/y.png"
                  width={20}
                  height={20}
                  alt="group"
                />
              </div>

              <div
                data-aos="fade-left"
                className="shadow-lg border border-white bg-[#f2f2f2] p-3 lg:p-4 xl:p-5 rounded-3xl relative"
              >
                <Image
                  src="/images/features_page/advice.png"
                  width={70}
                  height={70}
                  alt="group"
                />

                <h5 className="font-sans pb-3 font-bold md:text-lg">
                  Sentiment analysis
                </h5>
                <p className="text-[#687087] font-medium md:text-lg">
                  Identify emotions and continuously improve interactions,
                  providing more empathetic and personalized experiences.
                </p>

                {/*  */}
                <Image
                  className="absolute top-0 right-0"
                  src="/images/features_page/p.png"
                  width={20}
                  height={20}
                  alt="group"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 relative">
          <div className="relative z-20">
            <Image
              data-aos="fade-left"
              className="w-[180px] md:w-[215px] mx-auto"
              src="/images/logo-b.svg"
              width={215}
              height={40}
              alt="group"
            />
            <h2
              data-aos="fade-right"
              className="py-3 font-extrabold lg:leading-[65px] text-4xl lg:text-[50px] text-center "
            >
              Integrate with
              <span className="ms-3 font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
                popular tools
              </span>
            </h2>
            <p
              data-aos="fade-left"
              className="pb-3 font-medium text-xl md:text-[28px] text-center"
            >
              Tools integrate seamlessly, boosting efficiency and simplifying
              workflows.
            </p>
            <Image
              data-aos="fade-right"
              className="mx-auto w-64 md:w-[500px]"
              src="/images/inos.png"
              width={500}
              height={40}
              alt="group"
            />
            <p
              data-aos="fade-left"
              className="mtfont-medium text-lg text-center"
            >
              Streamline workflows by connecting your favorite tools View
              integrations
            </p>
            <div
              data-aos="fade-up"
              className="text-center pt-6"
              style={{ zIndex: 99 }}
            >
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <Link
                  href="/"
                  className="col-span-2 inline-block px-[20px] py-[14px] text-center text-white bg-gradient-to-b from-[#779DFF] to-[#2D68FF] backdrop-blur-[25px] rounded-[25px] font-semibold"
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
                    className="pe-2"
                  >
                    View integrations
                    <span className="ml-1 inline-block h-2 w-2 border-r-2 border-b-2 -rotate-45"></span>
                  </GradientText>
                </Link>
              </FadeContent>
            </div>
          </div>

          <Image
            className="absolute top-[-320px] left-1/2 -translate-x-1/2 z-0"
            src="/images/shapes/shade-1.png"
            width={1300}
            height={1300}
            alt="group"
          />
        </div>
      </div>
    </div>
  );
}
