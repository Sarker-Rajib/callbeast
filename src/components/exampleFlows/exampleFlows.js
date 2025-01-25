import Image from "next/image";

export default function ExampleFlows() {
  const cardInfos = [
    {
      url: "/images/features_page/calender.svg",
      width: 100,
      heading: "Schedule viewings",
      para: "Negotiate slots and add property viewings with customers using integration with the team's calendar.",
    },
    {
      url: "/images/features_page/funnel.png",
      width: 80,
      heading: "Lead prequalification",
      para: "Match active properties in the CRM to the client, providing personalized and efficient recommendations.",
    },
    {
      url: "/images/features_page/magnet.png",
      width: 100,
      heading: "Lead generation",
      para: "Call property owners from websites to propose the agency's brokerage services, increasing the number of listings.",
    },
  ];
  return (
    <div className="px-4 2xl:px-0">
      <div className="max-w-[1500px] py-6 md:py-14 mx-auto rounded-[35px]">
        <h2
          data-aos="fade-down"
          className="text-3xl pb-6 lg:pb-10 md:text-[40px] font-semibold text-center"
        >
          Examples of<span className="text-[#2D68FF] ms-2">flows</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-8">
          {cardInfos.map((data, i) => (
            <div
              data-aos="fade-up"
              key={i}
              className="bg-white rounded-[20px] p-7"
            >
              <div className="min-h-28">
                <Image
                  src={data.url}
                  width={data.width}
                  height={80}
                  alt="banner-images"
                />
              </div>
              <h4 className="pb-4 text-[#2D68FF] text-2xl md:text-[32px] font-semibold">
                {data.heading}
              </h4>
              <p className="text-[#687087] font-medium font-inter md:text-lg">
                {data.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
