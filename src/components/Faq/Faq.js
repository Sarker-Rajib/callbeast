import Accordion from "../Accordion/Accordion";

export default function Faq() {
  const data = [
    {
      title: "How does Autocalls work as an AI phone call platform?",
      content: "This is the content for the first accordion item.",
    },
    {
      title: "Can I use a phone system with Autocalls?",
      content: "This is the content for the second accordion item.",
    },
    {
      title: "Is expertise required for quality prompts?",
      content: "This is the content for the third accordion item.",
    },
    {
      title: "Can I set up automations with your service?",
      content: "This is the content for the 4th accordion item.",
    },
    {
      title: "How do I get a phone number from you?",
      content: "This is the content for the 5th accordion item.",
    },
  ];

  return (
    <div className="pb-12 lg:pb-24">
      <div className="max-w-[1296px] mx-auto">
        <div
          style={{
            background:
              "linear-gradient(303.27deg, rgba(37, 99, 235, 0) 61.61%, rgba(37, 99, 235, 0.2) 151.43%), rgba(249, 250, 251, 0.41)",
          }}
          className="pt-12 border-[2.5px_solid_rgba(255,255,255,0.6)] shadow-[0px_10px_80px_8px_rgba(12,15,27,0.08)] backdrop-blur-[12px] rounded-[24px] relative z-20"
        >
          <span className="max-w-[280px] flex items-center justify-between bg-white shadow-md p-2 px-4 rounded-[12px] mx-auto">
            <span>
              <span className="me-2 inline-block h-3 w-3 shadow-md shadow-green-500 bg-green-500 rounded-full border-blue-500"></span>
              <span className="text-sm">Voice.mp3</span>
            </span>
            <span className="me-2 inline-block h-1 w-24 shadow-md bg-neutral-300 rounded-full border-blue-500"></span>
          </span>
          <h2 className="py-3 text-center font-extrabold xl:leading-[65px] text-3xl md:text-4xl xl:text-[50px]">
            Frequently asked
            <span className="ms-3 bg-gradient-to-l from-[#EF3959] to-[#2563EB] text-transparent bg-clip-text">
              questions
            </span>
          </h2>

          <div className="p-6 xl:p-9 xl:px-12">
            <Accordion data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
