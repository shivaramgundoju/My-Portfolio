import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shivaramgundoju@example.com",
    href: "mailto:shivaramgundoju@example.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 81849 69337",
    href: "tel:+918184969337"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/shivaramgundoju",
    color: "hover:text-gray-900 dark:hover:text-gray-100"
  },
  {
    icon: Linkedin,
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/shivaram-gundoju/",
    color: "hover:text-blue-600"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:shivaramgundoju@gmail.com",
    color: "hover:text-primary"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start a conversation? I'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-card border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={`border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-110 ${social.color}`}>
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-8 bg-gradient-card border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <h3 className="text-xl font-semibold text-foreground">
                  Currently Available
                </h3>
              </div>
              <p className="text-muted-foreground">
                I'm actively looking for internship opportunities and freelance projects. 
                Let's discuss how we can work together!
              </p>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-card border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
