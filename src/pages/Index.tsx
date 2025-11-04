import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Palette, Type, Video, Target, CheckCircle2, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import instructorImg from "@/assets/instructor.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Index = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.85), rgba(15, 15, 15, 0.85)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Learn How to Create
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Brand Guidelines
            </span>
            <br />
            for Content Creators
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A Hindi course that helps you design brand systems for yourself or your clients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Button variant="hero" size="lg" className="text-lg px-10" onClick={scrollToPrice}>
              Enroll Now for ₹5000
            </Button>
          </div>
          <div className="text-muted-foreground">
            <span className="line-through">₹7000</span> • Limited Time Offer
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Students Say</h2>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Star className="fill-current" size={24} />
              <span className="text-2xl font-bold">4.9/5</span>
              <span className="text-muted-foreground">from 200+ students</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Priya Sharma",
                role: "Video Editor",
                img: testimonial1,
                text: "This course completely changed how I approach client projects. The brand guidelines I create now are professional and comprehensive!"
              },
              {
                name: "Rahul Verma",
                role: "Content Creator",
                img: testimonial2,
                text: "Ujjawal's teaching style is perfect. Everything is explained in Hindi with practical examples. Highly recommended!"
              },
              {
                name: "Arjun Patel",
                role: "Freelance Designer",
                img: testimonial3,
                text: "I can now charge premium rates for brand guideline projects. This course paid for itself in the first client project!"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-slide-up">
            What You'll Learn
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Building Brand Identity Systems",
                desc: "Create cohesive brand identities from scratch"
              },
              {
                icon: Palette,
                title: "Defining Color Palettes",
                desc: "Master color theory and create stunning palettes"
              },
              {
                icon: Type,
                title: "Typography & Fonts",
                desc: "Choose and pair fonts that work perfectly"
              },
              {
                icon: Video,
                title: "Consistent Video Branding",
                desc: "Apply brand systems to video content"
              },
              {
                icon: Sparkles,
                title: "Tone & Visual Direction",
                desc: "Define brand personality and visual style"
              },
              {
                icon: CheckCircle2,
                title: "Professional Documentation",
                desc: "Create client-ready brand guideline documents"
              }
            ].map((item, i) => (
              <Card key={i} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-glow">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Instructor Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={instructorImg}
                      alt="Ujjawal - Course Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">About the Instructor</h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      Taught by <span className="text-primary font-bold">Ujjawal</span> — a creator who helps video editors understand the power of design.
                    </p>
                    <p className="text-muted-foreground">
                      With years of experience in brand design and content creation, Ujjawal has helped hundreds of creators and editors build professional brand systems that elevate their work and attract premium clients.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-slide-up">
            Special Launch Offer
          </h2>
          
          <div className="max-w-md mx-auto">
            <Card className="bg-gradient-card border-2 border-primary shadow-glow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="inline-block bg-primary/10 rounded-full px-4 py-2 mb-4">
                    <span className="text-sm font-bold text-primary">LIMITED TIME OFFER</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-2xl text-muted-foreground line-through">₹7,000</span>
                  </div>
                  <div className="text-6xl font-bold text-primary mb-2">₹5,000</div>
                  <p className="text-muted-foreground">One-time payment • Lifetime access</p>
                </div>
                
                <div className="space-y-3 mb-8 text-left">
                  {[
                    "Complete brand guidelines course in Hindi",
                    "Practical examples and templates",
                    "Downloadable resources and checklists",
                    "Lifetime access to all updates",
                    "Certificate of completion"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="hero" size="lg" className="w-full text-lg">
                  Enroll Now for ₹5,000
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Who is this course for?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  This course is perfect for video editors, content creators, freelance designers, and anyone who wants to offer brand guideline services to clients or create their own professional brand identity.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  What will I learn?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You'll learn how to create complete brand guideline documents including logo usage, color palettes, typography systems, visual direction, tone of voice, and how to apply these consistently across all content, especially video content.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Is it beginner-friendly?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! The course is taught in Hindi with clear explanations and practical examples. No prior design experience is required. We start from basics and gradually move to advanced concepts.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Do I get lifetime access?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! You get lifetime access to the course including all future updates and additional content. Learn at your own pace, anytime, anywhere.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  What tools do I need?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The concepts taught in this course can be applied using any design tool you prefer - Figma, Canva, Adobe Creative Suite, or even free tools. The focus is on understanding brand systems, not specific software.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Creating Brand Guidelines Like a Pro
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 200+ students who are already creating professional brand systems
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-10 bg-background text-foreground hover:bg-background/90"
            onClick={scrollToPrice}
          >
            Join Now for ₹5,000
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Brand Guidelines Course. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
