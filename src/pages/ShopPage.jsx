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
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { LayoutGrid, List } from "lucide-react";

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
<div className="mx-6 flex flex-col items-center gap-6 border-b border-[#23A6F0] py-6 md:mx-auto md:max-w-[1050px] md:flex-row md:justify-between">
  <p className="text-sm font-bold text-[#737373]">
    Showing all 12 results
  </p>

  <div className="flex items-center gap-3">
    <span className="text-sm text-[#737373]">Views:</span>

    <button
      type="button"
      className="border border-[#E8E8E8] p-3 text-[#252B42]"
      aria-label="Grid görünümü"
    >
      <LayoutGrid size={16} />
    </button>

    <button
      type="button"
      className="border border-[#E8E8E8] p-3 text-[#737373]"
      aria-label="Liste görünümü"
    >
      <List size={16} />
    </button>
  </div>

  <div className="flex items-center gap-3">
    <select className="border border-[#DDDDDD] px-4 py-3 text-sm text-[#737373]">
      <option>Popularity</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
    </select>

    <button
      type="button"
      className="bg-[#23A6F0] px-6 py-3 text-sm font-bold text-white"
    >
      Filter
    </button>
  </div>
</div>
<div className="mx-6 mt-12 flex flex-col gap-y-12 md:mx-auto md:max-w-[1050px] md:flex-row md:flex-wrap md:justify-between">
  {products.slice(0, 12).map((product) => (
  <div key={product.id} className="w-full md:w-[22%]">
    <ProductCard
     id={product.id}
      image={product.image}
      title={product.title}
      department={product.department}
      oldPrice={product.oldPrice}
      newPrice={product.newPrice}
    />
  </div>
))}
</div>

<div className="mt-12 flex justify-center pb-12">
  <button
    type="button"
    disabled
    className="border border-[#BDBDBD] px-4 py-3 text-sm text-[#BDBDBD]"
  >
    First
  </button>

  {[1, 2, 3].map((page) => (
    <button
      key={page}
      type="button"
      className={`border border-[#BDBDBD] px-4 py-3 text-sm ${
        page === 2 ? "bg-[#23A6F0] text-white" : "text-[#23A6F0]"
      }`}
    >
      {page}
    </button>
  ))}

  <button
    type="button"
    className="border border-[#BDBDBD] px-4 py-3 text-sm text-[#23A6F0]"
  >
    Next
  </button>
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


