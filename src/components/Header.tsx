import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            3D Characters
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#home" className="transition-colors hover:text-primary">
            Home
          </a>
          <a href="#catalog" className="transition-colors hover:text-primary">
            Catalog
          </a>
          <a href="#about" className="transition-colors hover:text-primary">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-primary">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="glow" size="sm">
            <ShoppingCart className="h-4 w-4" />
            Cart
          </Button>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;