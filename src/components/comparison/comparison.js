import Image from "next/image";

export default function Comparison() {
  return (
    <div className="px-4 2xl:px-0">
      <div className="max-w-[1500px] py-6 md:py-14 mx-auto rounded-[35px]">
        <h2
          data-aos="fade-down"
          className="pb-4 md:pb-6 xl:pb-12 text-4xl md:text-5xl xl:text-7xl font-extrabold text-center"
        >
          Comparison between current
          <br className="hidden xl:block" />
          activity and our solution
        </h2>

        <div className="bg-gradient-to-r from-[#2D68FF] via-[#2d68ff59] to-white rounded-lg p-[1px]">
          <div className="h-full w-full bg-[#f2f2f2] rounded-lg p-2 md:p-6 xl:p-12">
            <div data-aos="fade-down">
              <div className="grid grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3">
                <div className="col-span-2 xl:col-span-3 flex items-center"></div>
                <div className="text-center rounded-t-2xl bg-white py-5 pt-6">
                  <p className="font-inter font-bold md:text-2xl">Current</p>
                </div>
                <div className="text-center rounded-t-2xl bg-[#2D68FF] py-5 pt-6 text-white">
                  <p className="font-inter font-bold md:text-2xl">
                    With Callbeast
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-down">
              <div className="grid grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3">
                <div className="col-span-2 xl:col-span-3 flex items-center">
                  <p className="font-inter md:font-bold md:text-[22px">
                    Monthly cost (1 employee vs Autocalls.ai)
                  </p>
                </div>
                <div className="text-center bg-white py-5">
                  <p className="font-inter font-bold md:text-2xl">
                    <span className="text-[#EF3959]">1.200€</span>
                  </p>
                </div>
                <div className="text-center bg-[#2D68FF] py-5 text-white">
                  <p className="font-inter font-bold md:text-2xl">450€</p>
                </div>
              </div>
              <div className="bg-gradient-to-l from-[#9D9D9D] to-white rounded-lg p-[.5px]"></div>
            </div>
            <div data-aos="fade-down">
              <div className="grid grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3">
                <div className="col-span-2 xl:col-span-3 flex items-center">
                  <p className="font-inter md:font-bold md:text-[22px">
                    Pay only for actual calls
                  </p>
                </div>
                <div className="text-center bg-white py-5">
                  <Image
                    className="mx-auto"
                    src="/images/features_page/r-tick.png"
                    width={30}
                    height={80}
                    alt="banner-images"
                  />
                </div>
                <div className="text-center bg-[#2D68FF] py-5 text-white">
                  <Image
                    className="mx-auto"
                    src="/images/features_page/gtick.png"
                    width={30}
                    height={80}
                    alt="banner-images"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-l from-[#9D9D9D] to-white rounded-lg p-[.5px]"></div>
            </div>
            <div data-aos="fade-down">
              <div className="grid grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3">
                <div className="col-span-2 xl:col-span-3 flex items-center">
                  <p className="font-inter md:font-bold md:text-[22px">
                    Easy management from the platform instead of managers
                  </p>
                </div>
                <div className="text-center bg-white py-5">
                  <Image
                    className="mx-auto"
                    src="/images/features_page/r-tick.png"
                    width={30}
                    height={80}
                    alt="banner-images"
                  />
                </div>
                <div className="text-center bg-[#2D68FF] py-5 text-white">
                  <Image
                    className="mx-auto"
                    src="/images/features_page/gtick.png"
                    width={30}
                    height={80}
                    alt="banner-images"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-l from-[#9D9D9D] to-white rounded-lg p-[.5px]"></div>
            </div>
            <div data-aos="fade-down">
              <div className="grid grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3">
                <div className="col-span-2 xl:col-span-3 flex items-center">
                  <p className="font-inter md:font-bold md:text-[22px">
                    Learns from every call and never leaves
                  </p>
                </div>
                <div className="text-center bg-white py-5">
                  <Image
                    className="mx-auto"
                    src="/images/features_page/r-tick.png"
                    width={30}
                    height={80}
                    alt="banner-images"
                  />
                </div>
                <div className="text-center bg-[#2D68FF] py-5 text-white">
                  <Image
                    className="mx-auto"
                    src="/images/features_page/gtick.png"
                    width={30}
                    height={80}
                    alt="banner-images"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-l from-[#9D9D9D] to-white rounded-lg p-[.5px]"></div>
            </div>
            <div data-aos="fade-down">
              <div className="grid grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3">
                <div className="col-span-2 xl:col-span-3 flex items-center">
                  <p className="font-inter md:font-bold md:text-[22px">
                    Vacation
                  </p>
                </div>
                <div className="text-center bg-white py-5">
                  <Image
                    className="mx-auto"
                    src="/images/features_page/gt2.png"
                    width={30}
                    height={80}
                    alt="banner-images"
                  />
                </div>
                <div className="text-center bg-gradient-to-b from-[#2D68FF] via-[rgba(255,255,255,0.14)] py-5 text-[#f2f2f2]">
                  <Image
                    className="mx-auto"
                    src="/images/features_page/r-tick.png"
                    width={30}
                    height={80}
                    alt="banner-images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
