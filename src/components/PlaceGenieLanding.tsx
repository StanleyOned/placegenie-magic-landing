import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Menu, 
  X, 
  Mic, 
  Bot, 
  MapPin, 
  Navigation, 
  Bookmark, 
  Target,
  Star,
  ChevronRight,
  Apple,
  Check
} from 'lucide-react';
import heroImage from '@/assets/hero-iphone-mockup.jpg';

const PlaceGenieLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: Mic,
      title: "Voice Discovery",
      description: "Speak naturally to find places",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Bot,
      title: "AI Curation", 
      description: "Gemini AI personalizes recommendations",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Navigation,
      title: "Trip Planning",
      description: "Generate complete day trips automatically",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location Smart",
      description: "Finds places near you with custom radius",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Bookmark,
      title: "Save & Organize",
      description: "Bookmark favorites and trips",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Target,
      title: "Category Browse",
      description: "Explore by restaurants, bars, museums, parks",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Speak or Select",
      description: "Voice input or category selection",
      icon: Mic
    },
    {
      step: "2", 
      title: "AI Curates",
      description: "AI analyzes and finds perfect matches",
      icon: Bot
    },
    {
      step: "3",
      title: "Explore & Save", 
      description: "Get directions, save favorites, plan trips",
      icon: Bookmark
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "San Francisco, CA",
      text: "The voice search is incredible! I just say 'find me a cozy coffee shop' and it finds exactly what I'm looking for.",
      rating: 5
    },
    {
      name: "Mike Rodriguez", 
      location: "Austin, TX",
      text: "The AI recommendations are spot-on. It learns my preferences and suggests places I actually love.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      location: "New York, NY", 
      text: "Trip planning has never been easier. It created a perfect day itinerary in seconds!",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "Free",
      description: "Perfect for casual explorers",
      features: ["5 searches per day", "Basic recommendations", "Save favorites"],
      popular: false
    },
    {
      name: "Premium", 
      price: "$0.99/month",
      description: "For frequent adventurers",
      features: ["Unlimited searches", "Advanced AI curation", "Trip planning", "Custom radius", "Priority support"],
      popular: true
    },
    {
      name: "Lifetime",
      price: "$4.99 once",
      description: "Full access forever",
      features: ["Everything in Premium", "Lifetime updates", "Early access to new features", "No monthly fees"],
      popular: false
    }
  ];

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a 
      href={href}
      className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">PlaceGenie</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#how-it-works">How it Works</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#testimonials">Reviews</NavLink>
            </nav>

            {/* Download Button */}
            <div className="hidden md:block">
              <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
                <Apple className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#how-it-works">How it Works</NavLink>
                <NavLink href="#pricing">Pricing</NavLink>
                <NavLink href="#testimonials">Reviews</NavLink>
                <Button className="gradient-primary text-white w-full">
                  <Apple className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Discover Amazing Places with{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AI Magic
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Just speak naturally, and let AI curate personalized recommendations for restaurants, 
                attractions, and complete day trips
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary text-white shadow-glow hover:shadow-xl transition-all duration-300">
                  <Apple className="w-5 h-5 mr-2" />
                  Download on App Store
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Watch Demo
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="PlaceGenie App Interface"
                className="w-full h-auto rounded-2xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Every Explorer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the magic of AI-powered place discovery with features designed to make exploration effortless
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-feature transition-all duration-300 animate-scale-in border-0 gradient-card">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How PlaceGenie Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to discover your next favorite place
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="relative mb-6">
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of explorers who've discovered amazing places with PlaceGenie
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-scale-in border-0 gradient-card hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Choose Your Adventure Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and upgrade when you're ready for unlimited exploration
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative animate-scale-in border-0 gradient-card hover:shadow-card transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary shadow-feature scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {plan.price}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'gradient-primary text-white shadow-glow' : 'border border-primary text-primary hover:bg-primary hover:text-white'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">PlaceGenie</span>
              </div>
              <p className="text-muted-foreground">
                Discover amazing places with AI magic. Your next adventure is just a voice command away.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-background transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-muted-foreground hover:text-background transition-colors">How it Works</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-background transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Download</h4>
              <Button className="gradient-primary text-white w-full mb-4">
                <Apple className="w-4 h-4 mr-2" />
                App Store
              </Button>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-background transition-colors">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-background transition-colors">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-background transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 PlaceGenie. All rights reserved. Made with ❤️ for explorers everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlaceGenieLanding;