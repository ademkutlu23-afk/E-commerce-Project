import { Link } from "react-router-dom";
import { BookOpen, BookCopy, TrendingUp } from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import hooliLogo from "../assets/hooli.svg";
import lyftLogo from "../assets/lyft.svg";
import piedPiperLogo from "../assets/pied-piper.svg";
import stripeLogo from "../assets/stripe.svg";
import awsLogo from "../assets/aws.svg";
import redditLogo from "../assets/reddit.svg";
import firstProductImage from "../assets/unsplash_first.jpg";
import secondProductImage from "../assets/unsplash_sec.jpg";
import thirdProductImage from "../assets/unsplash_third.jpg";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import featured1 from "../assets/featured1.png";
import featured2 from "../assets/featured2.png";
import featuredPost1 from "../assets/FeaturedPost1.png";
import featuredPost2 from "../assets/FeaturedPost2.png";
import FeaturedPostCard from "../components/FeaturedPostCard";

const products = [
  {
    id: 1,
    image: product1,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 2,
    image: product2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 3,
    image: product3,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 4,
    image: product4,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 5,
    image: product5,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 6,
    image: product6,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 7,
    image: product7,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 8,
    image: product8,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 9,
    image: product9,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 10,
    image: product10,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
];
const featuredPosts = [
  {
    id: 1,
    image: featuredPost1,
    department: "English Department",
    title: "Graphic Design",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    sales: 15,
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 2,
    image: featuredPost2,
    department: "English Department",
    title: "Graphic Design",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    sales: 15,
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
];

function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="mx-6 flex w-[calc(100%-3rem)] flex-col items-center gap-10 py-10 md:mx-auto md:max-w-[1050px] md:flex-row md:justify-between">
        <img className="h-8 w-auto" src={hooliLogo} alt="Hooli" />
        <img className="h-8 w-auto" src={lyftLogo} alt="Lyft" />
        <img className="h-8 w-auto" src={piedPiperLogo} alt="Pied Piper" />
        <img className="h-8 w-auto" src={stripeLogo} alt="Stripe" />
        <img className="h-8 w-auto" src={awsLogo} alt="AWS" />
        <img className="h-8 w-auto" src={redditLogo} alt="Reddit" />
      </section>

      <section className="mx-6 flex w-[calc(100%-3rem)] flex-col gap-3 py-10 md:mx-auto md:max-w-[1050px] md:flex-row">
        <div className="relative h-[420px] overflow-hidden md:h-[500px] md:w-1/2">
          <img
            src={firstProductImage}
            alt="Top products collection"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-0 left-0 flex w-2/3 flex-col items-start bg-[#2A7CC7]/80 p-6 text-white">
            <h2 className="text-lg font-bold">Top Product of the Week</h2>
            <Link
              to="/shop"
              className="mt-4 border border-white px-5 py-2 text-xs font-bold"
            >
              EXPLORE ITEMS
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:h-[500px] md:w-1/2">
          <div className="relative h-[260px] overflow-hidden md:h-auto md:flex-1">
            <img
              src={secondProductImage}
              alt="Women's top product"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 flex w-2/3 flex-col items-start bg-[#2A7CC7]/80 p-4 text-white">
              <h2 className="text-base font-bold">Top Product of the Week</h2>
              <Link
                to="/shop"
                className="mt-3 border border-white px-4 py-2 text-xs font-bold"
              >
                EXPLORE ITEMS
              </Link>
            </div>
          </div>

          <div className="relative h-[260px] overflow-hidden md:h-auto md:flex-1">
            <img
              src={thirdProductImage}
              alt="Fashion top product"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 flex w-2/3 flex-col items-start bg-[#2A7CC7]/80 p-4 text-white">
              <h2 className="text-base font-bold">Top Product of the Week</h2>
              <Link
                to="/shop"
                className="mt-3 border border-white px-4 py-2 text-xs font-bold"
              >
                EXPLORE ITEMS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-6 py-10 md:mx-auto md:max-w-[1050px]">
        <div className="mb-10 text-center">
          <p className="text-sm text-[#737373]">Featured Products</p>
          <h2 className="mt-2 text-2xl font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h2>
          <p className="mt-2 text-xs text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="flex flex-col gap-y-10 sm:flex-row sm:flex-wrap sm:justify-between">
          {products.map((product) => (
            <div key={product.id} className="w-full sm:w-[48%] lg:w-[18%]">
              <ProductCard
                image={product.image}
                title={product.title}
                department={product.department}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="border border-[#23A6F0] px-8 py-3 text-xs font-bold text-[#23A6F0]"
          >
            LOAD MORE PRODUCTS
          </button>
        </div>
      </section>

      <section className="mx-6 flex flex-col gap-10 py-16 md:mx-auto md:max-w-[1050px] md:flex-row md:items-center">
        <div className="flex w-full gap-3 md:w-1/2">
          <img
            src={featured1}
            alt="Woman smiling"
            className="h-[420px] w-[calc(50%-0.375rem)] object-cover"
          />
          <img
            src={featured2}
            alt="Woman listening to music"
            className="h-[420px] w-[calc(50%-0.375rem)] object-cover"
          />
        </div>

        <div className="w-full text-center md:w-1/2 md:pl-10 md:text-left">
          <p className="text-base font-bold text-[#23A6F0]">
            Featured Products
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#252B42] md:text-5xl">
            We love what we do
          </h2>
          <p className="mx-auto mt-4 max-w-[320px] text-sm leading-6 text-[#737373] md:mx-0">
            Problems trying to resolve the conflict between the two major
            realms of Classical physics: Newtonian mechanics.
          </p>
          <p className="mx-auto mt-5 max-w-[320px] text-sm leading-6 text-[#737373] md:mx-0">
            Problems trying to resolve the conflict between the two major
            realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </section>

      <section className="mx-6 py-16 text-center md:mx-auto md:max-w-[1050px]">
        <p className="text-sm text-[#737373]">Featured Products</p>
        <h2 className="mt-2 text-2xl font-bold text-[#252B42]">
          THE BEST SERVICES
        </h2>
        <p className="mt-2 text-xs text-[#737373]">
          Problems trying to resolve the conflict between
        </p>

        <div className="flex flex-col items-center gap-16 pt-24 md:flex-row md:items-start md:gap-8">
          <div className="flex w-full flex-col items-center text-center md:w-1/3">
            <BookOpen size={48} className="text-[#23A6F0]" />
            <h3 className="mt-6 text-lg font-bold text-[#252B42]">
              Easy Wins
            </h3>
            <p className="mt-4 max-w-[220px] text-sm leading-5 text-[#737373]">
              Get your best looking smile now!
            </p>
          </div>

          <div className="flex w-full flex-col items-center text-center md:w-1/3">
            <BookCopy size={48} className="text-[#23A6F0]" />
            <h3 className="mt-6 text-lg font-bold text-[#252B42]">
              Concrete
            </h3>
            <p className="mt-4 max-w-[220px] text-sm leading-5 text-[#737373]">
              Defalcate is most focused in helping you discover your most
              beautiful smile.
            </p>
          </div>

          <div className="flex w-full flex-col items-center text-center md:w-1/3">
            <TrendingUp size={48} className="text-[#23A6F0]" />
            <h3 className="mt-6 text-lg font-bold text-[#252B42]">
              Hack Growth
            </h3>
            <p className="mt-4 max-w-[220px] text-sm leading-5 text-[#737373]">
              Overcame any hurdle or any other problem.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-6 py-16 md:mx-auto md:max-w-[1050px]">
  <div className="text-center">
    <p className="text-sm font-bold text-[#23A6F0]">
      Practice Advice
    </p>

    <h2 className="mt-3 text-3xl font-bold text-[#252B42]">
      Featured Posts
    </h2>
  </div>

  <div className="mt-12 flex flex-col gap-10 md:flex-row md:justify-between">
    {featuredPosts.map((post) => (
      <div key={post.id} className="w-full md:w-[48%]">
        <FeaturedPostCard
          image={post.image}
          department={post.department}
          title={post.title}
          description={post.description}
          sales={post.sales}
          oldPrice={post.oldPrice}
          newPrice={post.newPrice}
        />
      </div>
    ))}
  </div>
</section>
    </>
  );
}

export default HomePage;
