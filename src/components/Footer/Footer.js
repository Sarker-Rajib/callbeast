import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentPath = usePathname();

  return (
    <div className="px-4 xl:px-0 py-8 xl:py-16 relative" style={{ zIndex: 99 }}>
      {currentPath != "/features" && (
        <div className="border-b-2 mb-12 xl:mb-16 border-[#00000060] max-w-[1296px] mx-auto"></div>
      )}

      <div className="max-w-[1296px] mx-auto relative z-20 font-inter">
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          <div>
            <Image
              src="/images/logo-b.svg"
              width={210}
              height={50}
              alt="icon"
            />

            <p className="text-lg py-6">Al Voice Agents for Your Business</p>

            <div className="flex">
              <Link href="/" className="inline-block me-3">
                <Image
                  src="/images/footer/skype.svg"
                  width={35}
                  height={35}
                  alt="icon"
                />
              </Link>
              <Link href="/" className="inline-block me-3">
                <Image
                  src="/images/footer/Mail.svg"
                  width={35}
                  height={35}
                  alt="icon"
                />
              </Link>
              <Link href="/" className="inline-block me-3">
                <Image
                  src="/images/footer/in.svg"
                  width={35}
                  height={35}
                  alt="logos"
                />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <h5 className="font-bold pb-4 uppercase">Quick links</h5>
              <ul>
                <li>
                  <Link
                    href="/"
                    className="text-lg hover:text-blue-500 inline-block my-1"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-lg hover:text-blue-500 inline-block my-1"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-lg hover:text-blue-500 inline-block my-1"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-lg hover:text-blue-500 inline-block my-1"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold pb-4 uppercase">Contact us</h5>
              <ul>
                <li>
                  <p className="text-lg inline-block my-1">1-800-CALLBEAST</p>
                </li>
                <li>
                  <p className="text-lg inline-block my-1">
                    support@callbeast.com
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h5 className="font-bold pb-4 uppercase">Join newsletter</h5>
            <p className="text-lg pb-4">
              Subscribe our newsletter to get more Insightful information and
              resourse
            </p>

            <form>
              <div className="shadow-sm flex px-[26px] py-[14px] text-center text-white items-center bg-gradient-to-b from-[#779DFF] to-[#2D68FF] backdrop-blur-[25px] rounded-[25px] font-semibold">
                <input
                  type="email"
                  className="grow bg-transparent"
                  placeholder="input your emil"
                />
                <button type="submit">
                  <span className="ml-1 inline-block h-2 w-2 border-r-2 border-b-2 -rotate-45"></span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-b-2 border-[#00000060] mt-12 xl:mt-16"></div>
        <br />

        <div className="grid md:grid-cols-2">
          <p className="font-medium">
            © Copyright 2025 Callbeast - All Rights Reserved
          </p>

          <ul className="flex justify-around">
            <li>
              <Link
                href="/"
                className="font-medium hover:text-blue-500 inline-block my-1"
              >
                Terms of use
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium hover:text-blue-500 inline-block my-1"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium hover:text-blue-500 inline-block my-1"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
