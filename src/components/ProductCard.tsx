import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

const ProductCard = ({ name, price, image, rating, reviews }: ProductCardProps) => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/create-3d"); // 👈 tu ruta configurada en main.tsx
  };

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-glow-card hover:scale-105 bg-gradient-card border-border/50">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({reviews})</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ${price}
            </span>
            
            <Button variant="glow" size="sm" onClick={handleRedirect}>
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;