import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Palette, Target, Star, Play, CheckCircle2, Users, Award, TrendingUp } from "lucide-react";
const Index = () => {
  const handleEnroll = () => {
    window.open("https://superprofile.bio/course/e9a3238d-6a8b-4ded-924f-a2860b24a121", "_blank");
  };
  return <div className="min-h-screen bg-[#0F0F0F] text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Brand Guidelines Course</span>
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
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
              <div className="absolute inset-0 flex items-center justify-center">
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
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
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

        <div className="max-w-md mx-auto">
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
      <section className="container mx-auto px-4 py-20" style={{
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
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: support@brandcourse.com</li>
                <li>Phone: +91 98765 43210</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Brand Guidelines Course. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;