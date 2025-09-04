import ProductCard from "./ProductCard";
import dragonImage from "@/assets/dragon-character.jpg";
import robotImage from "@/assets/robot-warrior.jpg";
import collectionImage from "@/assets/character-collection.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Mystic Dragon",
      price: 29.99,
      image: dragonImage,
      rating: 5,
      reviews: 127
    },
    {
      name: "Cyber Warrior",
      price: 34.99,
      image: robotImage,
      rating: 5,
      reviews: 89
    },
    {
      name: "Fantasy Collection",
      price: 99.99,
      image: collectionImage,
      rating: 5,
      reviews: 203
    }
  ];

  return (
    <section id="catalog" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured
            </span>{" "}
            <span className="text-foreground">Characters</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular 3D printed characters, crafted with precision and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;