import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-secondary/40 to-background border-t border-border/40">
      <div className="container max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              3D Characters
            </h3>
            <p className="text-muted-foreground">
              Creating exceptional 3D printed characters with precision and artistry.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors">Catalog</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Categories</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Fantasy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sci-Fi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gaming</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>hello@3dcharacters.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Maker Street, Tech City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-muted-foreground">
          <p>&copy; 2024 3D Characters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;