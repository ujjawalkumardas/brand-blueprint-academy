import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Palette, Target, Star, Play, CheckCircle2, Users, Award, TrendingUp, Twitter, Instagram, Youtube } from "lucide-react";
import courseThumbnail from "@/assets/course-thumbnail.png";
import logo from "@/assets/logo.png";
const Index = () => {
  const handleEnroll = () => {
    window.open("https://superprofile.bio/course/e9a3238d-6a8b-4ded-924f-a2860b24a121", "_blank");
  };
  return <div className="min-h-screen bg-[#0F0F0F] text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-[#0F0F0F]/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Ujjawal Kumar Das" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
          </div>
          <Button variant="hero" onClick={handleEnroll}>Enroll Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Limited Time Offer
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Master the Art of Creating{" "}
              <span className="text-primary">Brand Guidelines</span>
            </h1>
            <p className="text-lg text-muted-foreground">A complete course for video editors who want to design structured, professional brand identities for themselves or their clients.</p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button size="lg" variant="hero" onClick={handleEnroll} className="text-lg px-8 py-6">
                Enroll Now for ₹3,999
              </Button>
              <div className="text-muted-foreground">
                <span className="line-through">₹7,999</span>
                <span className="ml-2 text-primary font-semibold">50% OFF</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border shadow-card">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold">50 Spots Left</div>
                  <div className="text-sm text-muted-foreground">Enroll Before It’s Full</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border shadow-card">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold">97%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border shadow-card">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Positive Reviews</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Professional Brand Guidelines from Scratch—Step by Step</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Learn Practical Design Systems</h3>
              <p className="text-muted-foreground">
                Master the fundamentals of creating comprehensive brand guideline documents that professionals use.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Step-by-Step Brand Guideline Framework</h3>
              <p className="text-muted-foreground">
                Follow a proven framework to structure logos, colors, fonts, and visual identity systems.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Real Client-Based Examples</h3>
              <p className="text-muted-foreground">
                Work through real-world examples and case studies from actual client projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Card Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Course</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from a complete course structure that takes you from beginner to advanced level in creating brand guidelines.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border shadow-glow overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img src={courseThumbnail} alt="Brand Guideline Course Thumbnail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-primary">Hindi Course</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                  <span className="ml-2 text-sm text-muted-foreground">(4.9/5)</span>
                </div>
              </div>
              <CardTitle className="text-2xl">How to Create Professional Brand Guidelines</CardTitle>
              <CardDescription className="text-base">
                Complete course covering everything from basic design principles to advanced brand identity systems. Perfect for video editors and content creators.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>40+ Video Lessons in Hindi</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Lifetime Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Downloadable Resources</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Certificate of Completion</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-primary">₹3,999</div>
                <div className="text-sm text-muted-foreground line-through">₹7,999</div>
              </div>
              <Button size="lg" variant="hero" onClick={handleEnroll}>
                Join Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Promo Video Section */}
      

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Students Say</h2>
          <p className="text-muted-foreground">
            Real feedback from our community of video editors and creators
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Rahul Sharma</h4>
                  <p className="text-sm text-muted-foreground">Video Editor</p>
                </div>
              </div>
              <p className="text-muted-foreground">"Pehle mujhe lagta tha brand guideline sirf bade brands ke liye hoti hai, lekin is course ne pura perspective change kar diya. Ab main apne clients ke liye proper brand documents bana pata hoon — aur sab kuch step-by-step samjhaaya gaya tha. Totally worth it!"</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Priya Patel</h4>
                  <p className="text-sm text-muted-foreground">Content Creator</p>
                </div>
              </div>
              <p className="text-muted-foreground">"Honestly, course itna structured aur easy-to-follow hai ki har concept clear ho gaya. Mujhe pehli baar laga ki main apne content ke liye proper brand identity bana sakti hoon. Highly recommend for anyone serious about growing as a creator!"</p>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                <Star className="w-5 h-5 fill-primary text-primary" style={{
                clipPath: 'inset(0 50% 0 0)'
              }} />
                
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Amit Kumar</h4>
                  <p className="text-sm text-muted-foreground">Freelance Designer</p>
                </div>
              </div>
              <p className="text-muted-foreground">"As a freelancer, mujhe pehle brand guideline projects ke liye client convince karna mushkil lagta tha. Ab main confidently premium charge karta hoon because I actually know how to deliver professional results. Templates and examples are gold!"</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Sneha Reddy</h4>
                  <p className="text-sm text-muted-foreground">Social Media Manager</p>
                </div>
              </div>
              <p className="text-muted-foreground">"Is course ne meri approach hi badal di. Pehle sirf posts banati thi, ab brand ke look aur feel ke hisaab se strategy banati hoon. Real-world examples ne sab kuch simple bana diya. My clients love the work now!"</p>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Launch Offer</h2>
          <p className="text-muted-foreground">
            Limited time discount - Save 50% on enrollment
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Regular Price Card - Left Column */}
          <Card className="bg-card/30 border-border shadow-card opacity-75 relative">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-muted/50 text-muted-foreground text-xs font-medium">
              Available Later
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2 text-muted-foreground">Regular Price</CardTitle>
              <CardDescription className="text-muted-foreground/70">Original Price (Before Launch Discount)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-2">
                <div className="text-5xl font-bold text-muted-foreground line-through">₹7,999</div>
                <div className="text-sm text-muted-foreground/70">After Offer Ends</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground/70">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                  <span>Video Lessons in Hindi</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground/70">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                  <span>Lifetime Course Access</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground/70">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                  <span>Downloadable Templates & Resources</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground/70">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                  <span>Real Client Project Examples</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground/70">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                  <span>Certificate of Completion</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground/70">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                  <span>Community Access</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="lg" variant="outline" className="w-full text-lg py-6" disabled>
                Regular Price After Offer
              </Button>
            </CardFooter>
          </Card>

          {/* Discounted Offer Card - Right Column */}
          <Card className="bg-gradient-card border-primary shadow-glow-lg">
            <CardHeader className="text-center">
              <div className="inline-block mx-auto px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                Best Value
              </div>
              <CardTitle className="text-3xl mb-2">Complete Course Access</CardTitle>
              <CardDescription>Everything you need to master brand guidelines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-2">
                <div className="text-5xl font-bold text-primary">₹3,999</div>
                <div className="text-lg text-muted-foreground line-through">₹7,999</div>
                <div className="text-sm text-primary font-semibold">Save ₹4,000 (50% OFF)</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Video Lessons in Hindi</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Lifetime Course Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Downloadable Templates & Resources</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Real Client Project Examples</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Certificate of Completion</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Community Access</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="lg" variant="hero" className="w-full text-lg py-6" onClick={handleEnroll}>
                Enroll Now - Limited Offer
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-20" style={{
      backgroundColor: '#1E1E1E'
    }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">💡 Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Everything you need to know about the course
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card/30 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What will I learn in this course?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You'll learn how to create a complete brand guideline from scratch — the same process professionals use to earn money by offering brand guideline services to clients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card/30 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Who is this course for?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This course is designed for video editors and creative professionals who want to integrate design thinking into their editing process. It's not for complete beginners — basic editing knowledge is recommended.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card/30 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Do I need to know editing before joining?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, just the basics. If you're familiar with tools like Premiere Pro or After Effects, you're ready to start.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card/30 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What makes this course different from other editing courses?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most courses only focus on how to edit videos. This course teaches you what to learn before editing — the design foundation that helps you make structured, visually consistent, and high-quality content.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card/30 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Will I get lifetime access?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, you'll have lifetime access to all course materials after purchase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card/30 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Is the course live or recorded?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The course is completely pre-recorded, so you can learn at your own pace.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card/30 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                How will this course help me get clients?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You'll be able to create brand guidelines for your clients — helping them define their visual identity and stand out online.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-card/30 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Can I use this knowledge for my own brand too?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. You can apply the same techniques to build consistent and professional branding for your own content.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-card/30 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What if I don't have clients right now?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                That's perfectly fine. You can use this time to master the tools and process, so when clients come — you're fully ready.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-card/30 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Will I get any templates or resources?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, you'll receive the same Brand Guideline template that I use in the course — ready to customize for your own projects or clients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="bg-card/30 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                How much can I charge clients after learning this skill?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can start charging anywhere between ₹4,000 to ₹12,000 per brand guideline, depending on the project and client size.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="bg-card/30 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Will I get a certificate after completing the course?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, you'll receive a completion certificate after finishing the course.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="bg-card/30 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                How can I contact support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                If you face any payment or access issues, you can reach out via email at ujjawal.helpsuppport@gmail.com
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold">Brand Guidelines</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Master the art of creating professional brand guidelines in Hindi. Perfect for video editors and content creators.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About the Course</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Instructor</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: ujjawal.helpsuppport@gmail.com</li>
                <li>Phone: +91 91031 87500</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Brand Guidelines Course. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/kumarrujjawal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/kumarrujjawal/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@kumarrujjawal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/5Y4ZqqyX" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;