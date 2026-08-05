import {
  ChartNoAxesColumnIncreasing,
  ChevronRight,
  Clock,
  Download,
  Eye,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

function FeaturedPostCard({
  image,
  department,
  title,
  description,
  sales,
  oldPrice,
  newPrice,
}) {
  return (
    <div className="flex flex-col overflow-hidden md:flex-row">
      <div className="relative md:w-2/5">
        <img
          src={image}
          alt={title}
          className="h-[300px] w-full object-cover md:h-full"
        />

        <span className="absolute left-4 top-4 bg-[#E74040] px-3 py-1 text-xs font-bold text-white">
          Sale
        </span>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3">
          <button
            type="button"
            aria-label="Favorilere ekle"
            className="flex size-9 items-center justify-center rounded-full bg-white text-[#252B42]"
          >
            <Heart size={17} />
          </button>

          <button
            type="button"
            aria-label="Sepete ekle"
            className="flex size-9 items-center justify-center rounded-full bg-white text-[#252B42]"
          >
            <ShoppingCart size={17} />
          </button>

          <button
            type="button"
            aria-label="Ürünü görüntüle"
            className="flex size-9 items-center justify-center rounded-full bg-white text-[#252B42]"
          >
            <Eye size={17} />
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col p-5 md:w-3/5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-bold text-[#23A6F0]">{department}</p>

          <span className="flex items-center gap-1 rounded-full bg-[#252B42] px-2 py-1 text-xs text-white">
            <Star size={12} fill="#FFCE31" stroke="#FFCE31" />
            4.9
          </span>
        </div>

        <h3 className="mt-3 text-base font-bold text-[#252B42]">{title}</h3>

        <p className="mt-3 text-sm leading-5 text-[#737373]">{description}</p>

        <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#737373]">
          <Download size={16} />
          <span>{sales} Sales</span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm font-bold">
          <span className="text-[#BDBDBD]">{oldPrice}</span>
          <span className="text-[#23856D]">{newPrice}</span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="size-4 rounded-full bg-[#23A6F0]" />
          <span className="size-4 rounded-full bg-[#23856D]" />
          <span className="size-4 rounded-full bg-[#E77C40]" />
          <span className="size-4 rounded-full bg-[#252B42]" />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-[#737373]">
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-[#23A6F0]" />
            22h...
          </span>
          <span className="flex items-center gap-1">
            <ChartNoAxesColumnIncreasing size={14} className="text-[#E77C40]" />
            64 Lessons
          </span>
          <span className="flex items-center gap-1">
            <ChartNoAxesColumnIncreasing size={14} className="text-[#23856D]" />
            Progress
          </span>
        </div>

        <Link
          to="/shop"
          className="mt-5 inline-flex w-fit items-center gap-1 rounded-full border border-[#23A6F0] px-4 py-2 text-sm font-bold text-[#23A6F0]"
        >
          Learn More
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default FeaturedPostCard;
