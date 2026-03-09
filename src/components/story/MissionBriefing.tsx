import { useEffect, useState } from "react";
import { AlertTriangle, Zap, Eye, Shield, Clock } from "lucide-react";
import missionControl from "@/assets/mission-control.jpg";

export const MissionBriefing = () => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [alertLevel, setAlertLevel] = useState('CRITICAL');

  const problems = [
    {
      icon: Zap,
      title: "Site Speed",
      status: "CRITICAL",
      description: "Loading time: 8.3 seconds",
      detail: "Losing altitude fast - visitors abandoning ship",
      color: "text-alert",
      bgColor: "bg-alert/10"
    },
    {
      icon: Eye,
      title: "SEO Visibility", 
      status: "MINIMAL",
      description: "Ranking: Page 47 of search results",
      detail: "Lost in dark matter - invisible to rescue teams",
      color: "text-rocket",
      bgColor: "bg-rocket/10"
    },
    {
      icon: Shield,
      title: "Security Status",
      status: "VULNERABLE", 
      description: "Last update: 847 days ago",
      detail: "Shields compromised - cosmic malware detected",
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      icon: Clock,
      title: "User Experience",
      status: "FAILING",
      description: "Bounce rate: 89%",
      detail: "Navigation systems down - users lost in space",
      color: "text-safety",
      bgColor: "bg-safety/10"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProblem(prev => (prev + 1) % problems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [problems.length]);

  useEffect(() => {
    const alerts = ['CRITICAL', 'RED ALERT', 'EMERGENCY'];
    const alertTimer = setInterval(() => {
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 2000);
    return () => clearInterval(alertTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Mission control background */}
      <div className="absolute inset-0">
        <img 
          src={missionControl} 
          alt="Mission control interface"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-space/80" />
      </div>

      {/* Alert indicators */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-3 bg-alert/20 backdrop-blur-sm border border-alert rounded-lg px-6 py-3 animate-pulse-glow">
          <AlertTriangle className="w-6 h-6 text-alert animate-pulse" />
          <span className="font-space text-alert font-bold tracking-wider">
            {alertLevel}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Mission header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-card/20 backdrop-blur-sm border border-primary/30 rounded-lg px-6 py-3 mb-6">
              <div className="w-3 h-3 bg-safety rounded-full animate-pulse" />
              <span className="font-space text-primary font-bold tracking-wider">
                MISSION BRIEFING
              </span>
            </div>
            
            <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Your WordPress Site </span>
              <br />
              <span className="text-alert animate-pulse-glow">Needs Immediate Rescue</span>
            </h2>
            
            <p className="font-cosmic text-xl text-muted-foreground max-w-3xl mx-auto">
              Mission Control has detected critical system failures. 
              Time is running out. Rescue operation parameters loading...
            </p>
          </div>

          {/* Problem analysis grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              const isActive = index === currentProblem;
              
              return (
                <div 
                  key={index}
                  className={`${problem.bgColor} backdrop-blur-sm border-2 rounded-xl p-6 transition-all duration-500 ${
                    isActive 
                      ? `border-${problem.color.split('-')[1]} shadow-lg transform scale-105` 
                      : 'border-primary/20 opacity-70'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-8 h-8 ${problem.color}`} />
                      <div>
                        <h3 className="font-space font-bold text-foreground text-lg">
                          {problem.title}
                        </h3>
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                          isActive ? 'animate-pulse' : ''
                        }`}>
                          <div className={`w-2 h-2 ${problem.color.replace('text', 'bg')} rounded-full`} />
                          {problem.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="font-cosmic text-muted-foreground">
                      {problem.description}
                    </p>
                    <p className={`font-cosmic text-sm ${problem.color} font-semibold ${
                      isActive ? 'animate-pulse' : ''
                    }`}>
                      ⚠️ {problem.detail}
                    </p>
                  </div>

                  {/* Diagnostic readout */}
                  <div className="mt-4 bg-card/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="font-mono text-xs text-muted-foreground">
                        DIAGNOSTIC ACTIVE
                      </span>
                    </div>
                    <div className="h-2 bg-card/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${problem.color.replace('text', 'bg')} transition-all duration-1000 ${
                          isActive ? 'animate-pulse' : ''
                        }`}
                        style={{ 
                          width: isActive ? '85%' : '0%',
                          transition: isActive ? 'width 2s ease-out' : 'width 0.5s ease-in'
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mission urgency */}
          <div className="bg-gradient-rescue/10 border border-rocket/30 rounded-xl p-8 text-center">
            <div className="mb-6">
              <h3 className="font-space text-2xl font-bold text-foreground mb-3">
                🚨 EMERGENCY PROTOCOL ACTIVATED
              </h3>
              <p className="font-cosmic text-lg text-muted-foreground max-w-2xl mx-auto">
                Multiple critical systems failing simultaneously. 
                Without immediate intervention, your WordPress site will be lost forever in the digital void.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-rescue hover:shadow-rescue text-foreground font-space font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-3 text-lg">
                  🚀 BEGIN RESCUE MISSION
                  <span className="group-hover:animate-bounce">⚡</span>
                </span>
              </button>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="font-mono text-sm">Estimated rescue time: 24-48 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating danger indicators */}
      <div className="absolute top-1/4 left-10 animate-float">
        <AlertTriangle className="w-6 h-6 text-alert opacity-60" />
      </div>
      <div className="absolute top-3/4 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Shield className="w-5 h-5 text-destructive opacity-60" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-4 h-4 text-rocket opacity-60" />
      </div>
    </section>
  );
};

