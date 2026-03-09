import { useState } from "react";
import { Rocket, Globe, Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const RescueForm = () => {
  const [formData, setFormData] = useState({
    siteUrl: '',
    businessType: '',
    contactName: '',
    email: '',
    phone: '',
    urgencyLevel: '',
    currentProblems: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    'E-commerce Store',
    'Professional Services', 
    'Restaurant/Food Service',
    'Healthcare/Medical',
    'Real Estate',
    'Education/Training',
    'Creative/Agency',
    'Non-Profit',
    'Technology/Software',
    'Other'
  ];

  const urgencyLevels = [
    { value: 'critical', label: '🚨 CRITICAL - Site is completely down' },
    { value: 'urgent', label: '⚡ URGENT - Major functionality broken' },
    { value: 'moderate', label: '⚠️ MODERATE - Performance issues' },
    { value: 'routine', label: '🔧 ROUTINE - General improvements needed' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("🚀 Distress signal received! Captain WP is preparing the rescue mission.", {
      description: "You'll be redirected to Rescue Odyssey mission control in 3 seconds..."
    });
    
    // Redirect to Rescue Odyssey after 3 seconds
    setTimeout(() => {
      window.location.href = 'https://example.com';
    }, 3000);
    
    setIsSubmitting(false);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-nebula py-20">
      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Form header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-card/20 backdrop-blur-sm border border-primary/30 rounded-lg px-6 py-3 mb-6">
              <div className="w-3 h-3 bg-alert rounded-full animate-pulse" />
              <span className="font-space text-alert font-bold tracking-wider">
                RESCUE REQUEST ACTIVE
              </span>
            </div>
            
            <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Send Your </span>
              <span className="text-primary bg-gradient-cosmic bg-clip-text text-transparent">
                Distress Signal
              </span>
            </h2>
            
            <p className="font-cosmic text-xl text-muted-foreground max-w-3xl mx-auto">
              Captain WP is standing by at mission control. 
              Provide your site details for immediate rescue coordination.
            </p>
          </div>

          {/* Rescue form */}
          <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Site URL */}
              <div className="space-y-2">
                <Label htmlFor="siteUrl" className="flex items-center gap-2 font-space text-foreground">
                  <Globe className="w-4 h-4 text-primary" />
                  WordPress Site URL
                </Label>
                <Input
                  id="siteUrl"
                  type="url"
                  placeholder="https://your-wordpress-site.com"
                  value={formData.siteUrl}
                  onChange={(e) => updateFormData('siteUrl', e.target.value)}
                  className="bg-background/50 border-primary/30 focus:border-primary font-cosmic"
                  required
                />
              </div>

              {/* Business type and urgency - grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-space text-foreground">Business Type</Label>
                  <Select onValueChange={(value) => updateFormData('businessType', value)} required>
                    <SelectTrigger className="bg-background/50 border-primary/30 focus:border-primary font-cosmic">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="font-space text-foreground">Urgency Level</Label>
                  <Select onValueChange={(value) => updateFormData('urgencyLevel', value)} required>
                    <SelectTrigger className="bg-background/50 border-primary/30 focus:border-primary font-cosmic">
                      <SelectValue placeholder="How urgent is your rescue?" />
                    </SelectTrigger>
                    <SelectContent>
                      {urgencyLevels.map(level => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact info - grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName" className="font-space text-foreground">
                    Contact Name
                  </Label>
                  <Input
                    id="contactName"
                    placeholder="Your name"
                    value={formData.contactName}
                    onChange={(e) => updateFormData('contactName', e.target.value)}
                    className="bg-background/50 border-primary/30 focus:border-primary font-cosmic"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 font-space text-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="bg-background/50 border-primary/30 focus:border-primary font-cosmic"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 font-space text-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number (Optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="bg-background/50 border-primary/30 focus:border-primary font-cosmic"
                />
              </div>

              {/* Current problems */}
              <div className="space-y-2">
                <Label htmlFor="problems" className="font-space text-foreground">
                  Describe Your Site's Current Problems
                </Label>
                <Textarea
                  id="problems"
                  placeholder="Tell Captain WP about the issues you're experiencing (slow loading, security concerns, SEO problems, etc.)"
                  value={formData.currentProblems}
                  onChange={(e) => updateFormData('currentProblems', e.target.value)}
                  className="bg-background/50 border-primary/30 focus:border-primary font-cosmic min-h-[120px]"
                  required
                />
              </div>

              {/* Submit button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-rescue hover:shadow-rescue text-foreground font-space font-bold text-lg py-6 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                      Transmitting to Rescue Odyssey...
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      <Rocket className="w-6 h-6" />
                      LAUNCH RESCUE MISSION
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </div>
            </form>

            {/* Trust indicators */}
            <div className="mt-8 pt-6 border-t border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-safety rounded-full" />
                  <span className="font-mono text-sm">200+ Sites Rescued</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-mono text-sm">24-48 Hour Response</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-rocket rounded-full" />
                  <span className="font-mono text-sm">99.9% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

