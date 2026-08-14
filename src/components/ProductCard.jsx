import { Link } from "react-router-dom";

function ProductCard({ id, image, title, department, oldPrice, newPrice }) {
  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col items-center text-center"
    >
      <img className="aspect-[3/4] w-full object-cover" src={image} alt={title} />
      <h3 className="mt-4 text-sm font-bold text-[#252B42]">{title}</h3>
      <p className="mt-2 text-xs text-[#737373]">{department}</p>
      <div className="mt-2 flex items-center gap-2 text-sm font-bold">
        <span className="text-[#BDBDBD]">{oldPrice}</span>
        <span className="text-[#23856D]">{newPrice}</span>
      </div>
    </Link>
  );
}

export default ProductCard;
