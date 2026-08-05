import hooliLogo from "../assets/hooli.svg";
import lyftLogo from "../assets/lyft.svg";
import piedPiperLogo from "../assets/pied-piper.svg";
import stripeLogo from "../assets/stripe.svg";
import awsLogo from "../assets/aws.svg";
import redditLogo from "../assets/reddit.svg";
import category1 from "../assets/shop-category1.jpg";
import category2 from "../assets/shop-category2.jpg";
import category3 from "../assets/shop-category3.jpg";
import category4 from "../assets/shop-category4.jpg";
import category5 from "../assets/shop-category5.jpg";

const shopCategories = [
  { image: category1, title: "CLOTHS", itemCount: "5 Items" },
  { image: category2, title: "CLOTHS", itemCount: "5 Items" },
  { image: category3, title: "CLOTHS", itemCount: "5 Items" },
  { image: category4, title: "CLOTHS", itemCount: "5 Items" },
  { image: category5, title: "CLOTHS", itemCount: "5 Items" },
];
function ShopPage() {
  return (
    <section>
      <section className="flex flex-col bg-[#FAFAFA] px-6 py-6">
  <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-4 md:flex-row md:justify-between">
    <h1 className="text-2xl font-bold text-[#252B42]">
      Shop
    </h1>

    <div className="flex items-center gap-3 text-sm font-bold">
      <span className="text-[#252B42]">Home</span>
      <span className="text-[#BDBDBD]">›</span>
      <span className="text-[#BDBDBD]">Shop</span>
    </div>
  </div>
</section>
<div className="mx-6 flex flex-col gap-4 py-6 md:mx-auto md:w-[calc(100%-3rem)] md:max-w-[1050px] md:flex-row" >
  {shopCategories.map((category) => (
    <div
      key={category.image}
      className="relative flex overflow-hidden md:flex-1"
    >
      <img
        src={category.image}
        alt={category.title}
        className="h-[300px] w-full object-cover md:h-[220px]"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-base font-bold">
          {category.title}
        </h2>

        <p className="mt-2 text-sm font-bold">
          {category.itemCount}
        </p>
      </div>
    </div>
  ))}
</div>
 <section className="mx-6 flex w-[calc(100%-3rem)] flex-col items-center gap-10 py-10 md:mx-auto md:max-w-[1050px] md:flex-row md:justify-between">
        <img className="h-8 w-auto" src={hooliLogo} alt="Hooli" />
        <img className="h-8 w-auto" src={lyftLogo} alt="Lyft" />
        <img className="h-8 w-auto" src={piedPiperLogo} alt="Pied Piper" />
        <img className="h-8 w-auto" src={stripeLogo} alt="Stripe" />
        <img className="h-8 w-auto" src={awsLogo} alt="AWS" />
        <img className="h-8 w-auto" src={redditLogo} alt="Reddit" />
      </section>

    </section>
  );
}

export default ShopPage;


