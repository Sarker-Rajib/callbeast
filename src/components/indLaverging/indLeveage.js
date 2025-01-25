import Image from "next/image";
import Link from "next/link";
import FadeContent from "../ui/fadeContent";

export default function IndLeveraging() {
  return (
    <div className="px-4 2xl:px-0">
      <div className="max-w-[1500px] py-6 md:py-14 mx-auto rounded-[35px]">
        <div className="text-center">
          <h2
            data-aos="fade-up"
            className="py-4 xl:pb-16 font-extrabold lg:leading-[65px] text-4xl lg:text-[50px]"
          >
            Industries leveraging
            <br className="hidden lg:block" />
            voice
            <span className="mx-3 font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
              AI agents
            </span>
          </h2>
        </div>

        <div className="grid xl:grid-cols-5 gap-6">
          <div className="xl:col-span-2 gap-3 lg:gap-4 2xl:gap-12 grid md:grid-cols-2 xl:grid-cols-1 p-2 border border-white rounded-[20px]">
            {/* cards */}
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div
                data-aos="fade-up"
                className="w-full rounded-[20px]"
                style={{
                  padding: "01px",
                  background: "rgb(255,255,255)",
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,1) 15%, rgba(37,99,235,1) 100%)",
                }}
              >
                <div
                  className="rounded-[20px] p-4 xl:p-8"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,1) 25%)",
                  }}
                >
                  <div className="grid md:grid-cols-3 gap-2">
                    <div>
                      <Image
                        className="mx-auto max-w-full"
                        src="/images/features_page/ind1.png"
                        width={165}
                        height={165}
                        alt="banner-images"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h2 className="font-extrabold pb-3 text-2xl md:text-3xl">
                        Real estate
                      </h2>
                      <p className="font-medium md:text-xl pb-4">
                        Never miss a lead—automate property inquiries, schedule
                        viewings, and follow-ups.
                      </p>

                      <Link
                        href="/"
                        className="bg-[#2D68FF] hover:bg-[#1151f1] inline-block text-white font-semibold p-[8px_30px] rounded-md"
                      >
                        See real-estate
                      </Link>
                    </div>
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
              <div
                data-aos="fade-up"
                className="w-full rounded-[20px]"
                style={{
                  padding: "01px",
                  background: "rgb(255,255,255)",
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,1) 15%, rgba(37,99,235,1) 100%)",
                }}
              >
                <div
                  className="rounded-[20px] p-4 xl:p-8"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,1) 25%)",
                  }}
                >
                  <div className="grid md:grid-cols-3 gap-2">
                    <div>
                      <Image
                        className="mx-auto max-w-full"
                        src="/images/features_page/ind2.png"
                        width={165}
                        height={165}
                        alt="banner-images"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h2 className="font-extrabold pb-3 text-2xl md:text-3xl">
                        Online stores
                      </h2>
                      <p className="font-medium md:text-xl pb-4">
                        Deliver instant support, manage orders, and process
                        returns 24/7.
                      </p>

                      <Link
                        href="/"
                        className="bg-[#2D68FF] hover:bg-[#1151f1] inline-block text-white font-semibold p-[8px_30px] rounded-md"
                      >
                        See e-commerce
                      </Link>
                    </div>
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
              <div
                data-aos="fade-up"
                className="w-full rounded-[20px]"
                style={{
                  padding: "01px",
                  background: "rgb(255,255,255)",
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,1) 15%, rgba(37,99,235,1) 100%)",
                }}
              >
                <div
                  className="rounded-[20px] p-4 xl:p-8"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,1) 25%)",
                  }}
                >
                  <div className="grid md:grid-cols-3 gap-2">
                    <div>
                      <Image
                        className="mx-auto max-w-full"
                        src="/images/features_page/ind3.png"
                        width={165}
                        height={165}
                        alt="banner-images"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h2 className="font-extrabold pb-3 text-2xl md:text-3xl">
                        Medical
                      </h2>
                      <p className="font-medium md:text-xl pb-4">
                        Simplify appointment scheduling, reminders, and patient
                        engagement effortlessly.
                      </p>

                      <Link
                        href="/"
                        className="bg-[#2D68FF] hover:bg-[#1151f1] inline-block text-white font-semibold p-[8px_30px] rounded-md"
                      >
                        See medical
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeContent>
          </div>

          <div className="xl:col-span-3 border p-2 xl:pt-6 border-white rounded-[20px]">
            <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-3 lg:gap-4 2xl:gap-12">
              {/* cards */}
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <div
                  data-aos="fade-up"
                  className="w-full rounded-[20px]"
                  style={{
                    padding: "01px",
                    background: "rgb(255,255,255)",
                    background:
                      "linear-gradient(0deg, rgba(255,255,255,1) 15%, rgba(37,99,235,1) 100%)",
                  }}
                >
                  <div
                    className="rounded-[20px] p-4 xl:p-8"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,1) 25%)",
                    }}
                  >
                    <div className="grid lg:grid-cols-3 gap-2">
                      <div>
                        <Image
                          className="mx-auto max-w-full"
                          src="/images/features_page/ind4.png"
                          width={165}
                          height={165}
                          alt="banner-images"
                        />
                      </div>
                      <div className="lg:col-span-2">
                        <h2 className="font-extrabold pb-3 text-2xl md:text-3xl">
                          Services
                        </h2>
                        <p className="font-medium md:text-xl pb-4">
                          We can schedule meetings, collect feedback, and
                          provide customer support for various requests.
                        </p>

                        <Link
                          href="/"
                          className="bg-[#2D68FF] hover:bg-[#1151f1] inline-block text-white font-semibold p-[8px_30px] rounded-md"
                        >
                          See services
                        </Link>
                        <div className="pb-4 xl:pb-8"></div>
                      </div>
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
                <div
                  data-aos="fade-up"
                  className="w-full rounded-[20px]"
                  style={{
                    padding: "01px",
                    background: "rgb(255,255,255)",
                    background:
                      "linear-gradient(0deg, rgba(255,255,255,1) 15%, rgba(37,99,235,1) 100%)",
                  }}
                >
                  <div
                    className="rounded-[20px] p-4 xl:p-8"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,1) 25%)",
                    }}
                  >
                    <div className="grid lg:grid-cols-3 gap-2">
                      <div>
                        <Image
                          className="mx-auto max-w-full"
                          src="/images/features_page/ind4.png"
                          width={165}
                          height={165}
                          alt="banner-images"
                        />
                      </div>
                      <div className="lg:col-span-2">
                        <h2 className="font-extrabold pb-3 text-2xl md:text-3xl">
                          Call center
                        </h2>
                        <p className="font-medium md:text-xl pb-4">
                          Maximize efficiency and customer satisfaction by
                          automating phone calls with Al voice agents.
                          CallBeast.ai handles inbound and outbound calls.
                        </p>

                        <Link
                          href="/"
                          className="bg-[#2D68FF] hover:bg-[#1151f1] inline-block text-white font-semibold p-[8px_30px] rounded-md"
                        >
                          See call centers
                        </Link>
                        <div className="pb-4 xl:pb-8"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeContent>
            </div>
          </div>
        </div>

        <div className="links py-6 xl:py-12">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <ul className="flex flex-wrap gap-3 items-center justify-between">
              <li>
                <Link href="/" className="font-extrabold text-xl md:text-3xl">
                  Auto
                </Link>
              </li>
              <li>
                <Image
                  className="mx-auto max-w-full"
                  src="/images/features_page/blade.png"
                  width={20}
                  height={20}
                  alt="banner-images"
                />
              </li>
              <li>
                <Link href="/" className="font-extrabold text-xl md:text-3xl">
                  Hotels
                </Link>
              </li>
              <li>
                <Image
                  className="mx-auto max-w-full"
                  src="/images/features_page/blade.png"
                  width={20}
                  height={20}
                  alt="banner-images"
                />
              </li>
              <li>
                <Link href="/" className="font-extrabold text-xl md:text-3xl">
                  Finance{" "}
                </Link>
              </li>
              <li>
                <Image
                  className="mx-auto max-w-full"
                  src="/images/features_page/blade.png"
                  width={20}
                  height={20}
                  alt="banner-images"
                />
              </li>
              <li>
                <Link href="/" className="font-extrabold text-xl md:text-3xl">
                  E-commerce
                </Link>
              </li>
              <li>
                <Image
                  className="mx-auto max-w-full"
                  src="/images/features_page/blade.png"
                  width={20}
                  height={20}
                  alt="banner-images"
                />
              </li>
              <li>
                <Link href="/" className="font-extrabold text-xl md:text-3xl">
                  Services{" "}
                </Link>
              </li>
              <li>
                <Image
                  className="mx-auto max-w-full"
                  src="/images/features_page/blade.png"
                  width={20}
                  height={20}
                  alt="banner-images"
                />
              </li>
              <li>
                <Link href="/" className="font-extrabold text-xl md:text-3xl">
                  Legal
                </Link>
              </li>
              <li>
                <Image
                  className="mx-auto max-w-full"
                  src="/images/features_page/blade.png"
                  width={20}
                  height={20}
                  alt="banner-images"
                />
              </li>
              <li>
                <Link href="/" className="font-extrabold text-xl md:text-3xl">
                  Tourism
                </Link>
              </li>
              <li>
                <Image
                  className="mx-auto max-w-full"
                  src="/images/features_page/blade.png"
                  width={20}
                  height={20}
                  alt="banner-images"
                />
              </li>
              <li>
                <Link href="/" className="font-extrabold text-xl md:text-3xl">
                  Recruitment
                </Link>
              </li>
            </ul>
          </FadeContent>
        </div>
      </div>
    </div>
  );
}
