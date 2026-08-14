import { useParams, Link } from "react-router-dom";
import { Check, ChevronLeft, ChevronRight, Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import featuredImage from "../assets/featured1.png";
import hooliLogo from "../assets/hooli.svg";
import lyftLogo from "../assets/lyft.svg";
import piedPiperLogo from "../assets/pied-piper.svg";
import stripeLogo from "../assets/stripe.svg";
import awsLogo from "../assets/aws.svg";
import redditLogo from "../assets/reddit.svg";

function ProductDetailPage() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return (
      <section className="mx-6 flex min-h-[400px] flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold text-[#252B42]">Product not found</h1>
        <Link to="/shop" className="mt-5 rounded bg-[#23A6F0] px-6 py-3 font-bold text-white">
          Back to Shop
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="bg-[#FAFAFA]">
        <div className="mx-6 flex max-w-[1050px] items-center gap-3 py-6 text-sm font-bold md:mx-auto">
          <Link to="/" className="text-[#252B42]">Home</Link>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <Link to="/shop" className="text-[#BDBDBD]">Shop</Link>
        </div>

        <div className="mx-6 flex max-w-[1050px] flex-col gap-8 pb-12 md:mx-auto md:flex-row md:gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative h-[420px] overflow-hidden bg-white md:h-[500px]">
              <img src={product.image} alt={product.title} className="h-full w-full object-cover object-top" />
              <button type="button" aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 text-[#252B42]">
                <ChevronLeft size={38} />
              </button>
              <button type="button" aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#252B42]">
                <ChevronRight size={38} />
              </button>
            </div>

            <div className="mt-5 flex gap-5">
              <button type="button" className="h-20 w-24 overflow-hidden border-2 border-[#23A6F0]">
                <img src={product.image} alt="Product thumbnail" className="h-full w-full object-cover" />
              </button>
              <button type="button" className="h-20 w-24 overflow-hidden opacity-60">
                <img src={product.image} alt="Product thumbnail" className="h-full w-full object-cover" />
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pt-4">
            <h1 className="text-xl text-[#252B42]">{product.title}</h1>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-1 text-[#F3CD03]">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="#F3CD03" />)}
              </div>
              <span className="text-sm font-bold text-[#737373]">10 Reviews</span>
            </div>
            <p className="mt-5 text-2xl font-bold text-[#252B42]">{product.newPrice}</p>
            <p className="mt-2 text-sm font-bold text-[#737373]">
              Availability : <span className="text-[#23A6F0]">In Stock</span>
            </p>
            <p className="mt-8 border-b border-[#BDBDBD] pb-7 text-sm leading-6 text-[#858585]">
              A comfortable and stylish piece for everyday wear. Its simple
              design makes it easy to combine with your favorite clothes.
            </p>

            <div className="mt-7 flex gap-3">
              <button type="button" aria-label="Blue color" className="size-7 rounded-full bg-[#23A6F0]" />
              <button type="button" aria-label="Green color" className="size-7 rounded-full bg-[#2DC071]" />
              <button type="button" aria-label="Orange color" className="size-7 rounded-full bg-[#E77C40]" />
              <button type="button" aria-label="Dark color" className="size-7 rounded-full bg-[#252B42]" />
            </div>

            <div className="mt-16 flex items-center gap-2">
              <button type="button" className="rounded bg-[#23A6F0] px-5 py-3 text-sm font-bold text-white">Select Options</button>
              <button type="button" aria-label="Add to favorites" className="flex size-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white"><Heart size={18} /></button>
              <button type="button" aria-label="Add to cart" className="flex size-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white"><ShoppingCart size={18} /></button>
              <button type="button" aria-label="View product" className="flex size-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white"><Eye size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-6 max-w-[1050px] py-10 md:mx-auto">
        <div className="flex justify-center gap-4 border-b border-[#ECECEC] pb-6 text-center text-xs font-bold text-[#737373] md:gap-12 md:text-sm">
          <button type="button">Description</button>
          <button type="button">Additional Information</button>
          <button type="button">Reviews <span className="text-[#23856D]">(0)</span></button>
        </div>

        <div className="flex flex-col gap-10 py-10 md:flex-row">
          <img
            src={featuredImage}
            alt="Fashion collection"
            className="h-[360px] w-full rounded-md object-cover object-top md:w-1/3"
          />

          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-[#252B42]">Product Details</h2>
            <p className="mt-5 text-sm leading-6 text-[#737373]">
              A comfortable and stylish piece for everyday wear. Its simple
              design makes it easy to combine with jeans or trousers.
            </p>

            <div className="mt-8 border-t border-[#ECECEC] pt-7">
              <h2 className="text-xl font-bold text-[#252B42]">Why You Will Love It</h2>
              <div className="mt-5 flex flex-col gap-4 text-sm text-[#737373]">
                <p className="flex items-center gap-3"><Check size={18} className="text-[#23A6F0]" /> Soft and comfortable fabric</p>
                <p className="flex items-center gap-3"><Check size={18} className="text-[#23A6F0]" /> Easy to combine</p>
                <p className="flex items-center gap-3"><Check size={18} className="text-[#23A6F0]" /> Suitable for daily wear</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-[#252B42]">Care and Delivery</h2>
            <div className="mt-6 flex flex-col text-sm text-[#737373]">
              <p className="flex items-center gap-3 border-b border-[#ECECEC] py-5"><ChevronRight size={18} /> Machine wash at 30°C</p>
              <p className="flex items-center gap-3 border-b border-[#ECECEC] py-5"><ChevronRight size={18} /> Do not use bleach</p>
              <p className="flex items-center gap-3 py-5"><ChevronRight size={18} /> Fast and secure delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-12">
        <div className="mx-6 max-w-[1050px] md:mx-auto">
          <h2 className="border-b border-[#ECECEC] pb-5 text-2xl font-bold text-[#252B42]">BESTSELLER PRODUCTS</h2>
          <div className="mt-6 flex flex-col gap-y-12 sm:flex-row sm:flex-wrap sm:justify-between">
            {products.slice(0, 8).map((item) => (
              <div key={item.id} className="w-full sm:w-[48%] md:w-[23%]">
                <ProductCard id={item.id} image={item.image} title={item.title} department={item.department} oldPrice={item.oldPrice} newPrice={item.newPrice} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-6 flex max-w-[1050px] flex-col items-center gap-10 py-14 md:mx-auto md:flex-row md:justify-between">
        <img className="h-9 w-auto" src={hooliLogo} alt="Hooli" />
        <img className="h-9 w-auto" src={lyftLogo} alt="Lyft" />
        <img className="h-9 w-auto" src={piedPiperLogo} alt="Pied Piper" />
        <img className="h-9 w-auto" src={stripeLogo} alt="Stripe" />
        <img className="h-9 w-auto" src={awsLogo} alt="AWS" />
        <img className="h-9 w-auto" src={redditLogo} alt="Reddit" />
      </section>
    </>
  );
}

export default ProductDetailPage;
