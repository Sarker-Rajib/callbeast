import Image from "next/image";
import Link from "next/link";

export default function UseCase() {
  return (
    <div className="pt-24 pb-24 relative px-4 xl:px-0">
      <div className="max-w-[1296px] mx-auto relative z-20">
        <h2 className=" font-extrabold xl:leading-[65px] text-[30px] md:text-[40px] xl:text-[50px] text-center ">
          Endless
          <span className="ms-3 font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
            use cases
          </span>
        </h2>

        <p className="text-center md:text-[20px] font-medium py-4">
          AI Voice Agents offer diverse applications, from home automation to
          personalized
          <br className="hidden lg:block" />
          assistance, revolutionizing user experiences
        </p>

        <div className="grid md:grid-cols-12 gap-6 pt-12 relative z-10">
          <div className="md:col-span-7 bg-[#F1F1F1] p-[40px_35px] rounded-[45px]">
            <div className="i">
              <Image
                src="/images/usecase/u1.png"
                width={800}
                height={400}
                alt="group"
              />
            </div>

            <h4 className="font-extrabold text-xl md:text-[30px] py-3">Appointments</h4>
            <p className="font-medium md:text-[20px]">
              Manage and confirm customer <br className="hidden lg:block"/>
              appointments without human <br className="hidden lg:block"/>
              intervention, saving time.
            </p>
          </div>
          <div className="md:col-span-5 bg-[#F1F1F1] p-[0px_35px_40px_35px] rounded-[45px]">
            <div className="lg:min-h-[400px]">
              <Image
                className="mx-auto"
                src="/images/usecase/u2.png"
                width={350}
                height={400}
                alt="group"
              />
            </div>
            <h4 className="font-extrabold text-xl md:text-[30px] py-3">Inbound Calls</h4>
            <p className="font-medium md:text-[20px]">
              Automate the management of inbound <br className="hidden lg:block"/>
              calls to improve customer experience <br className="hidden lg:block"/>
              and increase operational efficiency.
            </p>
          </div>

          <div className="md:col-span-6 lg:col-span-4 bg-[#F1F1F1] p-[40px_35px_40px_35px] rounded-[45px]">
            <div className="md:min-h-[300px] flex items-center">
              <Image
                className="mx-auto w-full"
                src="/images/usecase/u3.png"
                width={350}
                height={400}
                alt="group"
              />
            </div>
            <h4 className="font-extrabold text-xl md:text-[30px] pb-3">
              Customer Support
            </h4>
            <p className="font-medium md:text-[20px]">
              24/7 customer service
              <br className="hidden lg:block"/>
              automation
            </p>
          </div>
          <div className="md:col-span-6 lg:col-span-4 bg-[#F1F1F1] p-[40px_35px_40px_35px] rounded-[45px]">
            <div className="md:min-h-[300px] flex items-center">
              <Image
                className="mx-auto w-full"
                src="/images/usecase/u4.png"
                width={350}
                height={400}
                alt="group"
              />
            </div>
            <h4 className="font-extrabold text-xl md:text-[30px] pb-3">Your Business</h4>
            <p className="font-medium md:text-[20px]">
              Custom solutions for your
              <br className="hidden lg:block"/>
              needs
            </p>
          </div>
          <div className="md:col-span-6 lg:col-span-4 bg-[#F1F1F1] p-[40px_35px_40px_35px] rounded-[45px]">
            <div className="min-h-[20px] flex items-center">
              <Image
                className="mx-auto w-full"
                src="/images/usecase/u5.png"
                width={350}
                height={400}
                alt="group"
              />
            </div>
            <h4 className="font-extrabold text-xl md:text-[30px] pb-3">Product Support</h4>
            <p className="font-medium md:text-[20px]">
              Technical assistance and
              <br className="hidden lg:block"/>
              product guidance
            </p>
          </div>

          <div className="md:col-span-6 lg:col-span-5 bg-[#F1F1F1] p-[0px_35px_40px_35px] rounded-[45px]">
            <div className="md:min-h-[300px]">
              <Image
                className="mx-auto"
                src="/images/usecase/u6.svg"
                width={500}
                height={400}
                alt="group"
              />
            </div>
            <h4 className="font-extrabold text-xl md:text-[30px] py-3">
              Complaints and Claims
            </h4>
            <p className="font-medium md:text-[20px]">
              Handle customer complaints
              <br className="hidden lg:block"/>
              efficiently
            </p>
          </div>
          <div className="md:col-span-12 lg:col-span-7 bg-[#F1F1F1] p-[40px_35px] rounded-[45px] grid md:grid-cols-2">
            <div className="md:pt-[200px]">
              <h4 className="font-extrabold text-xl md:text-[30px] py-3">
                Frequently Asked Questions
              </h4>
              <p className="font-medium md:text-[20px]">
                Automatically answer frequently <br className="hidden lg:block"/>
                asked customer questions, <br className="hidden lg:block"/>
                reducing call volume to operators.
              </p>
            </div>
            <div>
              <div className="i">
                <Image
                  src="/images/usecase/u7.png"
                  width={800}
                  height={400}
                  alt="group"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-12 relative "
          style={{ zIndex: 99 }}
        >
          <Link
            href="/"
            className="col-span-2 inline-block px-[20px] py-[14px] text-center text-white bg-gradient-to-b from-[#779DFF] to-[#2D68FF] backdrop-blur-[25px] rounded-[25px] font-semibold"
          >
            Book a free consultation
            <span className="ml-1 inline-block h-2 w-2 border-r-2 border-b-2 -rotate-45"></span>
          </Link>
        </div>

        <div className="integrate pt-16 relative">
          <div className="relative z-20">
            <Image
              className="w-[180px] md:w-[215px] mx-auto"
              src="/images/logo-b.svg"
              width={215}
              height={40}
              alt="group"
            />
            <h2 className="py-3 font-extrabold lg:leading-[65px] text-4xl lg:text-[50px] text-center ">
              Integrate with
              <span className="ms-3 font-extrabold bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
                popular tools
              </span>
            </h2>
            <p className="pb-3 font-medium text-xl md:text-[28px] text-center">
              Tools integrate seamlessly, boosting efficiency and simplifying
              workflows.
            </p>
            <Image
              className="mx-auto w-64 md:w-[500px]"
              src="/images/inos.png"
              width={500}
              height={40}
              alt="group"
            />
            <p className="mtfont-medium text-lg text-center">
              Streamline workflows by connecting your favorite tools View
              integrations
            </p>
            <div className="text-center pt-6"
              style={{ zIndex: 99 }}
            >

              <Link
                href="/"
                className="col-span-2 inline-block px-[20px] py-[14px] text-center text-white bg-gradient-to-b from-[#779DFF] to-[#2D68FF] backdrop-blur-[25px] rounded-[25px] font-semibold"
              >
                View integrations
                <span className="ml-1 inline-block h-2 w-2 border-r-2 border-b-2 -rotate-45"></span>
              </Link>
            </div>
          </div>

          <Image
            className="absolute top-[-450px] left-1/2 -translate-x-1/2 z-0"
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
