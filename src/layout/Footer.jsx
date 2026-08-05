import { Camera, Send, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-16 text-[#737373]">
      <div className="bg-[#FAFAFA]">
        <div className="mx-6 flex flex-col gap-6 border-b border-[#E6E6E6] py-10 md:mx-auto md:max-w-[1050px] md:flex-row md:items-center md:justify-between">
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

          <div className="flex items-center gap-5 text-[#23A6F0]">
            <a href="#" aria-label="Facebook">
              <ThumbsUp size={22} />
            </a>
            <a href="#" aria-label="Instagram">
              <Camera size={22} />
            </a>
            <a href="#" aria-label="Twitter">
              <Send size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-6 flex flex-col gap-10 py-12 md:mx-auto md:max-w-[1050px] md:flex-row md:justify-between">
        <div>
          <h2 className="font-bold text-[#252B42]">Company Info</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm font-bold">
            <Link to="/about">About Us</Link>
            <Link to="/career">Carrier</Link>
            <Link to="/careers">We are hiring</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-[#252B42]">Legal</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm font-bold">
            <Link to="/about">About Us</Link>
            <Link to="/career">Carrier</Link>
            <Link to="/careers">We are hiring</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-[#252B42]">Features</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm font-bold">
            <Link to="/business">Business Marketing</Link>
            <Link to="/analytics">User Analytic</Link>
            <Link to="/chat">Live Chat</Link>
            <Link to="/support">Unlimited Support</Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-[#252B42]">Resources</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm font-bold">
            <Link to="/ios-android">IOS & Android</Link>
            <Link to="/demo">Watch a Demo</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/api">API</Link>
          </div>
        </div>

        <div className="md:max-w-[320px]">
          <h2 className="font-bold text-[#252B42]">Get In Touch</h2>

          <form className="mt-5 flex">
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Email address"
              className="min-w-0 flex-1 border border-[#E6E6E6] bg-[#F9F9F9] px-4 py-3 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-[#23A6F0] px-5 py-3 text-sm text-white"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-2 text-xs">Lore imp sum dolor Amit</p>
        </div>
      </div>

      <div className="bg-[#FAFAFA]">
        <p className="mx-6 py-6 text-sm font-bold md:mx-auto md:max-w-[1050px]">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
