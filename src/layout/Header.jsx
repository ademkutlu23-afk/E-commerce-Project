import { useState } from "react";
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap items-center justify-between px-6 py-4 md:px-8">
      <Link className="text-2xl font-bold text-[#252B42]" to="/">
        Bandage
      </Link>

      <nav
        onClick={() => setMenuOpen(false)}
        className={`${
          menuOpen ? "flex" : "hidden"
        } order-3 mt-6 w-full flex-col items-center gap-5 text-sm font-bold text-[#737373] md:order-none md:mt-0 md:flex md:w-auto md:flex-row md:gap-4 md:text-xs`}
      >
        <Link to="/">Home</Link>
        <Link to="/shop" className="flex items-center gap-1">
          Shop
          <ChevronDown size={12} />
        </Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/pages">Pages</Link>
      </nav>

      <div className="flex items-center gap-4 text-[#23A6F0] md:gap-3">
        <Link
          to="/login"
          className="hidden items-center gap-1 text-xs font-bold md:flex"
        >
          <User size={13} />
          Login / Register
        </Link>

        <button type="button" aria-label="Ara">
          <Search className="size-6 md:size-4" />
        </button>

        <Link to="/cart" className="flex items-center gap-1" aria-label="Sepet">
          <ShoppingCart className="size-6 md:size-4" />
          <span className="hidden text-[10px] md:inline">1</span>
        </Link>

        <Link
          to="/favorites"
          className="hidden items-center gap-1 md:flex"
          aria-label="Favoriler"
        >
          <Heart size={16} />
          <span className="text-[10px]">1</span>
        </Link>

        <button
          type="button"
          className="md:hidden"
          aria-label="Menüyü aç veya kapat"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
