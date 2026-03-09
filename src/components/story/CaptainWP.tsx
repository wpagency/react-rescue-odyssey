import { useEffect, useState } from "react";
import { Award, Rocket, Shield, Target } from "lucide-react";
import captainWPHero from "@/assets/captain-wp-hero.jpg";

export const CaptainWP = () => {
  const [credentialIndex, setCredentialIndex] = useState(0);

  const credentials = [
    { icon: Award, text: "500+ Successful Rescue Missions", color: "text-safety" },
    { icon: Target, text: "99.9% Mission Success Rate", color: "text-primary" },
    { icon: Shield, text: "Trained at Rescue Odyssey Space Academy", color: "text-rocket" },
    { icon: Rocket, text: "Specialized in WordPress Emergencies", color: "text-accent" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCredentialIndex(prev => (prev + 1) % credentials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [credentials.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-nebula">
      {/* Cosmic background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 animate-pulse"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Hero Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <img 
                src={captainWPHero} 
                alt="Captain WP - WordPress Rescue Specialist"
                className="w-full rounded-2xl shadow-glow animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              
              {/* Floating mission badge */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg p-3 animate-pulse-glow">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-safety rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-foreground">MISSION ACTIVE</span>
                </div>
              </div>

              {/* Rescue equipment indicators */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                {[Shield, Rocket, Target].map((Icon, index) => (
                  <div 
                    key={index}
                    className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-2"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2">
            {/* Hero title */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-card/20 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-safety rounded-full animate-pulse" />
                <span className="font-space text-primary font-bold tracking-wider text-sm">
                  RESCUE SPECIALIST
                </span>
              </div>
              
              <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Meet </span>
                <span className="text-primary bg-gradient-cosmic bg-clip-text text-transparent">
                  Captain WP
                </span>
              </h2>
              
              <p className="font-cosmic text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Elite WordPress Rescue Specialist from the legendary Rescue Odyssey Space Academy. 
                When WordPress sites are lost in the digital void, Captain WP answers the call.
              </p>
            </div>

            {/* Rotating credentials */}
            <div className="mb-8">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-6 min-h-[120px] flex items-center">
                <div className="w-full">
                  {credentials.map((credential, index) => {
                    const Icon = credential.icon;
                    return (
                      <div 
                        key={index}
                        className={`transition-all duration-500 ${
                          index === credentialIndex 
                            ? 'opacity-100 transform translate-y-0' 
                            : 'opacity-0 transform translate-y-4 absolute'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <Icon className={`w-8 h-8 ${credential.color}`} />
                          <div>
                            <p className="font-cosmic text-lg font-semibold text-foreground">
                              {credential.text}
                            </p>
                            <p className="font-mono text-sm text-muted-foreground">
                              Verified by Space Command
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mission stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center">
                <div className="font-space text-2xl font-bold text-safety mb-1">500+</div>
                <div className="font-cosmic text-sm text-muted-foreground">Sites Rescued</div>
              </div>
              <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center">
                <div className="font-space text-2xl font-bold text-primary mb-1">99.9%</div>
                <div className="font-cosmic text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>

            {/* Academy certification */}
            <div className="bg-gradient-cosmic/10 border border-primary/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-rocket" />
                <span className="font-space font-bold text-foreground">Academy Certified</span>
              </div>
              <p className="font-cosmic text-muted-foreground">
                Graduated with highest honors from{" "}
                <span className="text-primary font-semibold">Rescue Odyssey Space Academy</span>
                {" "}- the universe's premier WordPress rescue training facility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


