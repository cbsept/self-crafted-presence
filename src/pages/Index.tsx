import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
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
  Bot
} from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd send this to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. Chester will get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const services = [
    {
      category: "Cybersecurity Consulting Services",
      icon: Shield,
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
      icon: Database
    },
    {
      title: "Cybersecurity Inherent Risk Matrix",
      description: "Comprehensive risk-rating model aligned to NIST CSF 2.0, tailored for South African public sector context",
      icon: Shield
    },
    {
      title: "Smart Hospitality App",
      description: "Mobile-first restaurant service app featuring QR code ordering, dynamic split billing, and timed bookings",
      icon: Globe
    },
    {
      title: "Power Platform Project Management Tools",
      description: "Custom solutions for real-time project tracking and automated reporting workflows across enterprise environments",
      icon: Settings
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Chester September
            </h1>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              <Badge variant="secondary" className="text-sm px-3 py-1">Cybersecurity Subject Matter Expert</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">Innovator</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">Creator</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">Automator</Badge>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming complex digital risk into clarity, resilience, and results.
            </p>
            <div className="pt-6">
              <Button size="lg" className="text-lg px-8 py-3" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a cybersecurity and audit innovation leader with 15+ years of specialised experience across public and private sectors. I currently head the Cybersecurity Audit Centre of Excellence at the Auditor-General of South Africa (AGSA), where I oversee national cybersecurity audit strategy and execution across 100+ public institutions.
            </p>
            <p className="text-lg leading-relaxed">
              My strengths include cybersecurity assurance, audit automation, RPA, and building scalable systems that bridge regulation and innovation. I've developed national audit methodologies, automated Nessus-based reporting, and implemented RPA across internal audit processes.
            </p>
            <p className="text-lg leading-relaxed">
              As a Certified CISA, CISSP, and COBIT expert, I bring deep technical insight, strategic leadership, and execution strength to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Services</h2>
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-2">
                        <h4 className="font-semibold text-foreground flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed ml-7">
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Special Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
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
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Get In Touch</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Interested in working together or starting a conversation?
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:cbsept@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    cbsept@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+27741128720" className="text-muted-foreground hover:text-primary transition-colors">
                    (+27) 074 112 8720
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a 
                    href="https://www.linkedin.com/in/chester-september" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Chester September. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;