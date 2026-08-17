import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import sariKadin from "../assets/sarilikadin.png";
import aboutVideo from "../assets/aboutvideosu.png";
import gokhanOzdemir from "../assets/gokhanozdemir.jpeg";
import ademKutlu from "../assets/Ben.png";
import aylinMercan from "../assets/Aylin.jpeg";
import hooliLogo from "../assets/hooli.svg";
import lyftLogo from "../assets/lyft.svg";
import piedPiperLogo from "../assets/pied-piper.svg";
import stripeLogo from "../assets/stripe.svg";
import awsLogo from "../assets/aws.svg";
import redditLogo from "../assets/reddit.svg";

const statistics = [
  { number: "15K", text: "Happy Customers" },
  { number: "150K", text: "Monthly Visitors" },
  { number: "15", text: "Countries Worldwide" },
  { number: "100+", text: "Top Partners" },
];

const teamMembers = [
  { name: "Gökhan Özdemir", role: "Project Manager", image: gokhanOzdemir },
  { name: "Adem Kutlu", role: "Full Stack Developer", image: ademKutlu },
  { name: "Aylin Mercan", role: "Full Stack Developer", image: aylinMercan },
];

function AboutPage() {
  return (
    <>
      <section className="mx-6 flex min-h-[650px] w-[calc(100%-3rem)] max-w-[1292px] flex-col items-center justify-between gap-10 py-12 md:mx-auto md:flex-row md:py-16">
        <div className="w-full text-center md:w-2/5 md:text-left">
          <p className="text-sm font-bold text-[#252B42]">ABOUT COMPANY</p>
          <h1 className="mt-6 text-4xl font-bold text-[#252B42] md:text-6xl">ABOUT US</h1>
          <p className="mx-auto mt-6 max-w-[380px] text-base leading-7 text-[#737373] md:mx-0">
            We know how large objects will act, but things on a small scale.
            Discover our collections and find products that fit your style.
          </p>
          <Link to="/shop" className="mt-7 inline-flex rounded bg-[#23A6F0] px-7 py-3 text-sm font-bold text-white">
            Get Quote Now
          </Link>
        </div>

        <div className="flex w-full items-center justify-center md:w-3/5 md:justify-end">
          <img src={sariKadin} alt="Woman carrying shopping bags" className="w-full max-w-[650px] object-contain" />
        </div>
      </section>

      <section className="mx-6 w-[calc(100%-3rem)] max-w-[1292px] py-16 md:mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="md:w-2/5">
            <p className="text-sm font-bold text-[#E74040]">Problems trying</p>
            <h2 className="mt-4 text-2xl font-bold text-[#252B42]">
              We create a simple and enjoyable shopping experience.
            </h2>
          </div>
          <p className="text-sm leading-6 text-[#737373] md:w-1/2">
            Our goal is to bring useful products together with a clean design.
            We focus on quality, easy shopping and customer satisfaction.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:justify-between">
          {statistics.map((item) => (
            <div key={item.text} className="w-full text-center sm:w-[45%] md:w-[22%]">
              <p className="text-4xl font-bold text-[#252B42]">{item.number}</p>
              <p className="mt-3 text-sm font-bold text-[#737373]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-6 w-[calc(100%-3rem)] max-w-[1050px] py-16 md:mx-auto">
        <div className="relative h-[260px] overflow-hidden rounded-xl md:h-[480px]">
          <img src={aboutVideo} alt="About us video cover" className="h-full w-full object-cover" />
          <button type="button" aria-label="Play video" className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#23A6F0] text-white">
            <Play size={25} fill="white" />
          </button>
        </div>
      </section>

      <section className="mx-6 w-[calc(100%-3rem)] max-w-[1050px] py-16 text-center md:mx-auto">
        <h2 className="text-3xl font-bold text-[#252B42]">Meet Our Team</h2>
        <p className="mx-auto mt-4 max-w-[480px] text-sm leading-6 text-[#737373]">
          Meet the people who support and develop our ecommerce project.
        </p>

        <div className="mt-12 flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:justify-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex w-full max-w-[230px] flex-col items-center">
              <img src={member.image} alt={member.name} className="size-40 rounded-full object-cover object-top" />
              <h3 className="mt-5 font-bold text-[#252B42]">{member.name}</h3>
              <p className="mt-2 text-sm text-[#23A6F0]">{member.role}</p>
            </div>
          ))}
        </div>

        <Link to="/team" className="mt-10 inline-flex rounded border border-[#23A6F0] px-6 py-3 text-sm font-bold text-[#23A6F0]">
          View All Team
        </Link>
      </section>

      <section className="bg-[#FAFAFA] py-16 text-center">
        <div className="mx-6 w-[calc(100%-3rem)] max-w-[1292px] md:mx-auto">
          <h2 className="text-3xl font-bold text-[#252B42]">Big Companies Are Here</h2>
          <p className="mt-4 text-sm text-[#737373]">We work with trusted brands around the world.</p>
          <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:justify-between">
            {[hooliLogo, lyftLogo, piedPiperLogo, stripeLogo, awsLogo, redditLogo].map((logo, index) => (
              <img key={index} src={logo} alt="Partner company" className="h-9 w-auto" />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export default AboutPage;
