import React, { useEffect, useState } from "react";
import { Rocket, Zap, Shield, Bug, Navigation } from "lucide-react";

export const SpaceJourney = () => {
  const [currentObstacle, setCurrentObstacle] = useState(0);
  const [journeyProgress, setJourneyProgress] = useState(0);

  const obstacles = [
    {
      icon: Zap,
      name: "Slow-Loading Asteroids",
      description: "Massive chunks of bloated code drifting through space",
      action: "Deploying speed optimization thrusters...",
      color: "text-rocket",
      bgColor: "bg-rocket/20"
    },
    {
      icon: Bug,
      name: "Malware Storm",
      description: "Cosmic virus clusters threatening system integrity", 
      action: "Activating security shields and malware scanners...",
      color: "text-alert",
      bgColor: "bg-alert/20"
    },
    {
      icon: Shield,
      name: "Broken Code Meteors",
      description: "Fragments of corrupted plugins creating debris fields",
      action: "Engaging code repair and cleanup protocols...",
      color: "text-destructive", 
      bgColor: "bg-destructive/20"
    },
    {
      icon: Navigation,
      name: "SEO Black Holes",
      description: "Invisible voids where search rankings disappear",
      action: "Deploying visibility enhancement beacons...",
      color: "text-safety",
      bgColor: "bg-safety/20"
    }
  ];

  useEffect(() => {
    const obstacleTimer = setInterval(() => {
      setCurrentObstacle(prev => (prev + 1) % obstacles.length);
    }, 4000);

    const progressTimer = setInterval(() => {
      setJourneyProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 200);

    return () => {
      clearInterval(obstacleTimer);
      clearInterval(progressTimer);
    };
  }, [obstacles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-space">
      {/* Moving star field */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `drift ${20 + Math.random() * 10}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Journey path */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl h-2 bg-muted/20 rounded-full">
          <div 
            className="h-full bg-gradient-cosmic rounded-full transition-all duration-200 shadow-glow"
            style={{ width: `${journeyProgress}%` }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Journey header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-card/20 backdrop-blur-sm border border-primary/30 rounded-lg px-6 py-3 mb-6">
              <Rocket className="w-6 h-6 text-primary animate-pulse" />
              <span className="font-space text-primary font-bold tracking-wider">
                RESCUE MISSION IN PROGRESS
              </span>
            </div>
            
            <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Navigating Through </span>
              <br />
              <span className="text-primary bg-gradient-cosmic bg-clip-text text-transparent">
                Digital Space Dangers
              </span>
            </h2>
            
            <p className="font-cosmic text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Captain WP pilots the rescue vessel through treacherous cosmic obstacles, 
              using advanced WordPress repair technology to clear the path.
            </p>

            {/* Journey progress */}
            <div className="max-w-lg mx-auto bg-card/20 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm text-muted-foreground">Journey Progress</span>
                <span className="font-mono text-sm text-primary font-bold">{journeyProgress}%</span>
              </div>
              <div className="w-full h-3 bg-muted/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-cosmic transition-all duration-200 shadow-glow"
                  style={{ width: `${journeyProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Current obstacle display */}
          <div className="mb-16">
            <div className={`${obstacles[currentObstacle].bgColor} backdrop-blur-sm border border-primary/30 rounded-2xl p-8 max-w-4xl mx-auto transition-all duration-500`}>
              <div className="flex items-center gap-4 mb-6">
                {React.createElement(obstacles[currentObstacle].icon, {
                  className: `w-12 h-12 ${obstacles[currentObstacle].color} animate-pulse`
                })}
                <div>
                  <h3 className="font-space text-2xl font-bold text-foreground mb-2">
                    Obstacle Detected: {obstacles[currentObstacle].name}
                  </h3>
                  <p className="font-cosmic text-muted-foreground">
                    {obstacles[currentObstacle].description}
                  </p>
                </div>
              </div>
              
              <div className="bg-card/30 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-safety rounded-full animate-pulse" />
                  <span className="font-mono text-sm text-safety font-bold">
                    CAPTAIN WP RESPONSE
                  </span>
                </div>
                <p className="font-cosmic text-foreground">
                  {obstacles[currentObstacle].action}
                </p>
              </div>

              {/* Action progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">Countermeasures</span>
                  <span className="font-mono text-xs text-safety">ACTIVE</span>
                </div>
                <div className="w-full h-2 bg-card/30 rounded-full overflow-hidden">
                  <div className="h-full bg-safety animate-rescue-beam" />
                </div>
              </div>
            </div>
          </div>

          {/* Obstacle overview grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {obstacles.map((obstacle, index) => {
              const Icon = obstacle.icon;
              const isActive = index === currentObstacle;
              const isPassed = index < currentObstacle;
              
              return (
                <div 
                  key={index}
                  className={`bg-card/20 backdrop-blur-sm border rounded-xl p-6 transition-all duration-500 ${
                    isActive 
                      ? 'border-primary shadow-glow transform scale-105' 
                      : isPassed
                      ? 'border-safety/50 opacity-80'
                      : 'border-muted/20 opacity-60'
                  }`}
                >
                  <div className="text-center">
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${
                      isActive ? obstacle.color + ' animate-pulse' : 
                      isPassed ? 'text-safety' : 'text-muted-foreground'
                    }`} />
                    <h4 className="font-space font-bold text-sm text-foreground mb-2">
                      {obstacle.name}
                    </h4>
                    <div className="flex justify-center">
                      {isPassed ? (
                        <span className="inline-flex items-center gap-1 text-safety text-xs font-mono">
                          ✓ CLEARED
                        </span>
                      ) : isActive ? (
                        <span className="inline-flex items-center gap-1 text-primary text-xs font-mono animate-pulse">
                          ⚡ ACTIVE
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-muted-foreground text-xs font-mono">
                          ⏳ PENDING
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mission status */}
          <div className="text-center mt-16">
            <div className="bg-gradient-cosmic/10 border border-primary/20 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="font-space text-lg font-bold text-foreground mb-3">
                🛸 Captain WP Navigation Log
              </h3>
              <p className="font-cosmic text-muted-foreground">
                "Skillfully maneuvering through the digital cosmos. All WordPress repair systems 
                are operational. Your site will be rescued and restored to optimal performance."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating obstacles */}
      <div className="absolute top-20 right-10 animate-drift opacity-40">
        <div className="w-8 h-8 bg-rocket/30 rounded-full" />
      </div>
      <div className="absolute bottom-32 left-16 animate-drift opacity-40" style={{ animationDelay: '3s' }}>
        <div className="w-6 h-6 bg-alert/30 rounded-full" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-drift opacity-40" style={{ animationDelay: '6s' }}>
        <div className="w-4 h-4 bg-destructive/30 rounded-full" />
      </div>
    </section>
  );
};

