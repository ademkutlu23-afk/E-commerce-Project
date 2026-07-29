import { Search, ShoppingCart, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Link className="text-2xl font-bold" to="/">
        Bandage
      </Link>

      <div className="flex items-center gap-4">
        <Search stroke="#23A6F0" />
        <ShoppingCart stroke="#23A6F0" />
        <Menu stroke="#23A6F0" />
      </div>
    </header>
  );
}