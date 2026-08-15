import { Mail, MapPin, Phone } from "lucide-react";
import heroWoman from "../assets/hero-woman.png";

const offices = [
  { city: "Paris", address: "1901 Thorn Ridge Cir.", postalCode: "75000 Paris" },
  { city: "New York", address: "2715 Ash Dr. San Jose,", postalCode: "10001 New York" },
  { city: "Berlin", address: "4140 Parker Rd.", postalCode: "10115 Berlin" },
  { city: "London", address: "3517 W. Gray St. Utica,", postalCode: "SW1A London" },
];

function ContactPage() {
  return (
    <section className="bg-[#F7F9FC] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1050px]">
        <div className="mx-auto max-w-[600px] text-center">
          <p className="text-sm font-bold text-[#23A6F0]">GET IN TOUCH</p>
          <h1 className="mt-3 text-4xl font-bold text-[#252B42] md:text-5xl">
            We would love to hear from you
          </h1>
          <p className="mt-5 text-sm leading-6 text-[#737373]">
            Have a question about our products or your order? Our team is ready
            to help you.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          <div className="relative flex min-h-[480px] flex-col overflow-hidden rounded-2xl bg-[#252B42] p-8 text-white md:w-2/5 md:p-10">
            <h2 className="text-3xl font-bold">Let us talk</h2>
            <p className="mt-4 max-w-[290px] text-sm leading-6 text-[#E6E6E6]">
              Send us an email and we will get back to you as soon as possible.
            </p>

            <a href="mailto:info@bandage.com" className="relative z-10 mt-7 flex items-center gap-3 text-sm font-bold">
              <Mail size={20} className="text-[#23A6F0]" />
              info@bandage.com
            </a>
            <a href="tel:+451215215" className="relative z-10 mt-4 flex items-center gap-3 text-sm font-bold">
              <Phone size={20} className="text-[#23A6F0]" />
              +451 215 215
            </a>

            <img
              src={heroWoman}
              alt="Woman wearing denim fashion"
              className="pointer-events-none absolute bottom-0 right-[-60px] w-[390px] opacity-90"
            />
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap md:w-3/5">
            {offices.map((office) => (
              <div key={office.city} className="w-full rounded-2xl bg-white p-7 shadow-sm sm:w-[calc(50%-0.625rem)]">
                <div className="flex size-11 items-center justify-center rounded-full bg-[#EAF7FE] text-[#23A6F0]">
                  <MapPin size={21} />
                </div>
                <h2 className="mt-5 text-xl font-bold text-[#252B42]">{office.city}</h2>
                <p className="mt-3 text-sm text-[#737373]">{office.address}</p>
                <p className="mt-2 text-sm font-bold text-[#252B42]">{office.postalCode}</p>
                <a href="tel:+451215215" className="mt-5 block text-sm text-[#737373]">+451 215 215</a>
                <a href="mailto:info@bandage.com" className="mt-2 block text-sm font-bold text-[#23A6F0]">info@bandage.com</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
