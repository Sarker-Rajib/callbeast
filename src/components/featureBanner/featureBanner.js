import Image from "next/image";
import FadeContent from "../ui/fadeContent";

export default function FeatureBanner() {
  return (
    <div className="pt-28 pb-8 lg:pt-36 px-4 2xl:px-0 relative">
      <div className="overflow-hidden text-center relative z-10">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="relative z-20">
            <p className="bg-[#2D68FF] inline-block text-white font-semibold p-[15px_35px] rounded-md">
              Industries
            </p>

            <h4 className="text-4xl lg:text-6xl font-extrabold py-4 lg:py-6">
              Real estate
            </h4>
          </div>
          <Image
            className="mx-auto -mt-40 w-[370px] lg:w-[600px]"
            src="/images/features_page/rad2.png"
            width={600}
            height={450}
            alt="banner-images"
          />

          <Image
            className="-mt-9 hidden xl:block"
            src="/images/features_page/shape-w.png"
            width={1920}
            height={220}
            alt="banner-images"
          />
        </FadeContent>
      </div>

      <div className="mt-8 xl:mt-0 max-w-[1500px] mx-auto bg-white rounded-[35px] relative z-10">
        <div className="grid lg:grid-cols-2">
          <div className="image">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <Image
                className="mx-auto"
                src="/images/features_page/city-skyline.png"
                width={600}
                height={450}
                alt="banner-images"
              />
            </FadeContent>
          </div>
          <div className="p-6 lg:p-14">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <p
                data-aos="fade-left"
                className="bg-[#2D68FF] inline-block text-white font-semibold p-[15px_35px] rounded-md"
              >
                Real estate
              </p>
            </FadeContent>
            <h2
              data-aos="fade-left"
              className="text-3xl md:text-4xl lg:text-5xl xl:leading-[66px] font-extrabold py-4 lg:py-6"
            >
              AI voice agents <br className="hidden lg:block" />
              for real estate <br className="hidden lg:block" />
              phone calls
            </h2>
            <p data-aos="fade-up" className="md:font-medium md:text-lg">
              CallBeast.ai transforms how real estate agencies handle
              communications by automating phone calls to improve efficiency and
              increase customer satisfaction. From scheduling viewings to
              generating leads, our AI solution ensures your team can focus on
              what truly matters – closing deals and growing the business.
            </p>

            <div
              data-aos="fade-left"
              className="flex flex-wrap pt-3 gap-1 xl:gap-6"
            >
              <span className="flex items-center">
                <span className="block min-w-4 min-h-4 me-2 shadow-md shadow-blue-500 border-4 border-blue-500 rounded-full"></span>
                <p className="font-inter font-semibold uppercase">
                  Reduce costs by over 50%
                </p>
              </span>
              <span className="flex items-center">
                <span className="block min-w-4 min-h-4 me-2 shadow-md shadow-blue-500 border-4 border-blue-500 rounded-full"></span>
                <p className="font-inter font-semibold uppercase">
                  Available 24/7
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* shadow shapes */}
      <div className="w-[750px] h-[600px] absolute top-0 left-10 bg-[#2563eb59] filter blur-[250px] hidden lg:block"></div>
      <div className="w-[760px] h-[607px] absolute top-0 right-0 bg-[#ef395929] filter blur-[250px]"></div>
    </div>
  );
}
