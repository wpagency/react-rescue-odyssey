import { useEffect, useState } from "react";
import { AlertTriangle, Zap, Eye, Shield } from "lucide-react";
import wordpressInDistress from "@/assets/wordpress-in-distress.jpg";

export const HoustonProblem = () => {
  const [visibleStats, setVisibleStats] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleStats(prev => (prev < 4 ? prev + 1 : prev));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const problems = [
    { icon: Zap, text: "73% of WordPress sites are drifting aimlessly", color: "text-alert" },
    { icon: Eye, text: "Lost in the digital void with zero visibility", color: "text-rocket" },
    { icon: Shield, text: "Vulnerable to cosmic malware storms", color: "text-destructive" },
    { icon: AlertTriangle, text: "Emergency response needed immediately", color: "text-safety" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-space">
      {/* Animated star field */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground opacity-70 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Houston Alert */}
          <div className="mb-8 animate-pulse-glow">
            <div className="inline-flex items-center gap-3 bg-card/20 backdrop-blur-sm border border-alert/30 rounded-lg px-6 py-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-alert animate-pulse" />
              <span className="font-space text-alert font-bold tracking-wider">
                HOUSTON, WE HAVE A PROBLEM
              </span>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mb-12">
            <img 
              src={wordpressInDistress} 
              alt="WordPress planet in distress floating in deep space"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-danger animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-alert/20 to-transparent rounded-2xl" />
          </div>

          {/* Main headline */}
          <h1 className="font-space text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-foreground">Another </span>
            <span className="text-primary bg-gradient-cosmic bg-clip-text text-transparent">
              WordPress Site
            </span>
            <br />
            <span className="text-foreground">Is Lost In </span>
            <span className="text-alert animate-pulse-glow">Digital Space</span>
          </h1>

          <p className="font-cosmic text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Drifting aimlessly through the cosmic void, losing visitors, revenue, and hope. 
            Critical systems failing. Time is running out.
          </p>

          {/* Problem statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div 
                  key={index}
                  className={`bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-6 transform transition-all duration-700 ${
                    visibleStats > index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <Icon className={`w-8 h-8 ${problem.color} mx-auto mb-4`} />
                  <p className="font-cosmic text-sm text-muted-foreground">
                    {problem.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="space-y-6">
            <button className="group bg-gradient-rescue hover:shadow-rescue text-foreground font-space font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-3 text-lg">
                📡 SEND DISTRESS SIGNAL
                <span className="group-hover:animate-pulse">🚀</span>
              </span>
            </button>
            
            <p className="font-mono text-sm text-muted-foreground">
              Emergency rescue protocol initiated...
            </p>
          </div>
        </div>
      </div>

      {/* Floating debris */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-muted/50 rounded-full animate-drift" 
           style={{ animationDuration: '25s', animationDelay: '0s' }} />
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-primary/60 rounded-full animate-drift" 
           style={{ animationDuration: '30s', animationDelay: '5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-alert/40 rounded-full animate-drift" 
           style={{ animationDuration: '35s', animationDelay: '10s' }} />
    </section>
  );
};

