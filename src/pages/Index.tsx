import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Shield, 
  Code, 
  Users, 
  Award, 
  Mail, 
  Phone, 
  Linkedin, 
  CheckCircle,
  Zap,
  Settings,
  Globe,
  Lock,
  Database,
  Bot,
  ArrowRight,
  Star,
  TrendingUp,
  Target
} from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd send this to a backend
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. Chester will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "100+", label: "Organisations Serviced", icon: Shield },
    { number: "1000+", label: "Projects Completed", icon: Target },
    { number: "4", label: "Major Certifications", icon: Star }
  ];

  const services = [
    {
      category: "Cybersecurity Consulting Services",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      items: [
        {
          title: "Cyber Maturity & Risk Assessments",
          description: "Structured assessments using NIST, ISO 27001, ISF frameworks"
        },
        {
          title: "Cybersecurity Audit Integration", 
          description: "Embedding cybersecurity risk into statutory and performance audit processes"
        },
        {
          title: "Governance, Risk & Compliance (GRC)",
          description: "Establishing cybersecurity governance structures and control environments"
        },
        {
          title: "WebTrust / PKI Advisory",
          description: "Expert guidance on PKI systems and certificate lifecycle management"
        },
        {
          title: "Third-Party & Supply Chain Cyber Risk",
          description: "Frameworks for assessing and monitoring third-party providers"
        },
        {
          title: "Vulnerability Management & Technical Assessment",
          description: "Interpreting technical testing results for assurance relevance"
        },
        {
          title: "Secure System Development & Architecture Review",
          description: "Evaluating systems for cybersecurity design adequacy"
        }
      ]
    },
    {
      category: "Audit Automation",
      icon: Bot,
      color: "from-green-500 to-green-600",
      items: [
        {
          title: "Python Scripting for Automation",
          description: "Custom scripts for audit procedures and report generation"
        },
        {
          title: "MS Power Platform for RPA",
          description: "Leveraging Power Automate and Power Apps for workflow orchestration"
        },
        {
          title: "Automated Cybersecurity Audit Tools",
          description: "Bespoke tools like Nessus report generators with risk classification"
        },
        {
          title: "Data-Driven Audit Procedures",
          description: "Analytics and rule-based logic for automated testing"
        },
        {
          title: "End-to-End Digital Workflow Design",
          description: "Full audit lifecycle automations from planning to reporting"
        }
      ]
    },
    {
      category: "App POC Modelling & Prototyping",
      icon: Code,
      color: "from-purple-500 to-purple-600",
      items: [
        {
          title: "Rapid Application Prototyping",
          description: "Functional prototypes to validate business concepts"
        },
        {
          title: "Proof-of-Concept (POC) Modelling",
          description: "Translating ideas into tangible application models"
        },
        {
          title: "MVP App Modelling",
          description: "Simplified versions capturing essential features and user journeys"
        }
      ]
    },
    {
      category: "Advisory & Leadership",
      icon: Users,
      color: "from-orange-500 to-orange-600",
      items: [
        {
          title: "Fractional CISO / Audit Lead",
          description: "Strategic cybersecurity leadership on a fractional basis"
        },
        {
          title: "Framework Implementation",
          description: "SOC 2 Type II, NIST CSF 2.0, COBIT 5, ISO 27001"
        },
        {
          title: "Public Sector Transformation Strategy",
          description: "National and institutional cybersecurity transformation initiatives"
        }
      ]
    }
  ];

  const projects = [
    {
      title: "Vulnerability Report Generator",
      description: "Python-based tool automating vulnerability data transformation into styled Word reports with severity mapping and exploitability logic",
      icon: Database,
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Cybersecurity Inherent Risk Matrix",
      description: "Comprehensive risk-rating model aligned to NIST CSF 2.0, tailored for South African public sector context",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Hospitality App",
      description: "Mobile-first restaurant service app featuring QR code ordering, dynamic split billing, and timed bookings",
      icon: Globe,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Power Platform Project Management Tools",
      description: "Custom solutions for real-time project tracking and automated reporting workflows across enterprise environments",
      icon: Settings,
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium"
      >
        Skip to main content
      </a>
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/10" role="banner">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/favicon.png" 
              alt="Chester September Professional Logo - Cybersecurity Expert" 
              className="w-10 h-10"
            />
            <span className="text-xl font-semibold text-foreground">Chester September</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="main-content" className="relative py-32 px-4 bg-gradient-hero" role="main" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 id="hero-heading" className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Chester September
              </h1>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
                {["Cybersecurity Subject Matter Expert", "Innovator", "Creator", "Automator"].map((title, index) => (
                  <Badge 
                    key={title}
                    variant="secondary" 
                    className={`text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {title}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Transforming complex digital risk into <span className="text-primary font-semibold">clarity</span>, 
              <span className="text-primary font-semibold"> resilience</span>, and 
              <span className="text-primary font-semibold"> results</span>.
            </p>
            <div className="pt-8">
              <Button 
                size="lg" 
                className="text-lg px-10 py-4 bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 transform hover:scale-105 group" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-primary/20 rounded-full blur-sm"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-primary/30 rounded-full blur-sm"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-primary/25 rounded-full blur-sm"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-secondary" aria-labelledby="stats-heading">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">About Me</h2>
          
          <div className="grid lg:grid-cols-3 gap-12 items-stretch">
            {/* Professional Photo */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative group max-w-sm">
                <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 p-1 rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-500">
                  <img 
                    src="/lovable-uploads/25f055bf-2233-4401-a297-52a9d3019381.png"
                    alt="Chester September - Cybersecurity Expert"
                    className="w-full h-auto object-cover rounded-2xl border-4 border-primary/20 hover:border-primary/40 transition-all duration-500 transform group-hover:scale-105 grayscale hover:grayscale-0"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-2 space-y-8 text-lg leading-relaxed text-muted-foreground">
              <div className="p-8 rounded-2xl bg-gradient-secondary border border-primary/10 animate-slide-up">
                <p className="mb-6">
                  I'm a cybersecurity and audit innovation leader with <span className="text-primary font-semibold">over 15 years of specialised experience</span> across public and private sectors. I currently head a Cybersecurity Audit Centre of Excellence at my place of employment, where I oversee a national cybersecurity audit strategy and execution across <span className="text-primary font-semibold">100+ public institutions</span>.
                </p>
                <p className="mb-6">
                  My strengths include cybersecurity assurance, audit automation, RPA, and building scalable systems that bridge regulation and innovation. I've developed national audit methodologies, automated vulnerability reporting, and implemented RPA for streamlined project management.
                </p>
                <p>
                  As a <span className="text-primary font-semibold">certified cybersecurity expert</span>, I bring deep technical insight, strategic leadership, and execution strength to every engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-foreground">Services</h2>
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-500 transform hover:scale-[1.02] animate-slide-up shadow-elegant">
                <CardHeader className="pb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl text-foreground">{service.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="group p-6 rounded-xl hover:bg-primary/5 transition-all duration-300">
                        <h4 className="font-semibold text-foreground flex items-start gap-3 mb-3 group-hover:text-primary transition-colors">
                          <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed ml-8">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Projects Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-foreground">Special Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Card key={index} className="group p-8 hover:shadow-elegant transition-all duration-500 transform hover:scale-105 animate-slide-up bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg group-hover:shadow-glow transition-all duration-300`}>
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">Get In Touch</h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Interested in working together or starting a conversation?
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, href: "mailto:cbsept@gmail.com", text: "cbsept@gmail.com", label: "Email" },
                  { icon: Phone, href: "tel:+27741128720", text: "(+27) 074 112 8720", label: "Phone" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/chester-september", text: "LinkedIn Profile", label: "LinkedIn" }
                ].map((contact, index) => (
                  <div key={contact.label} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">{contact.label}</div>
                      <a 
                        href={contact.href}
                        target={contact.label === "LinkedIn" ? "_blank" : undefined}
                        rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                        className="text-foreground hover:text-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                        aria-label={`Contact via ${contact.label}`}
                      >
                        {contact.text}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-primary/20 focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-primary/20 focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-2 border-primary/20 focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project or how I can help you..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02] group text-lg py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Send your message to Chester September"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/10 bg-card/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-lg">&copy; 2024 Chester September. All rights reserved.</p>
          <p className="text-muted-foreground/70 text-sm mt-2">Cybersecurity Expert • Innovation Leader • Digital Transformation Specialist</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;