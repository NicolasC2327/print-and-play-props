import { Card, CardContent } from "@/components/ui/card";
import { Printer, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Printer,
      title: "Premium 3D Printing",
      description: "State-of-the-art resin printers ensure incredible detail and smooth finishes on every character."
    },
    {
      icon: Palette,
      title: "Hand-Painted Details", 
      description: "Each character can be custom painted with professional techniques to bring your vision to life."
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Most orders ship within 3-5 business days with careful packaging to ensure safe delivery."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Why Choose</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Characters?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge 3D printing technology with artistic craftsmanship to create exceptional collectibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-glow-card transition-all duration-300 bg-gradient-card border-border/50">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;