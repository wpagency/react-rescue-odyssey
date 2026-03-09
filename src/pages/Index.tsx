import { HoustonProblem } from "@/components/story/HoustonProblem";
import { CaptainWP } from "@/components/story/CaptainWP";
import { MissionBriefing } from "@/components/story/MissionBriefing";
import { SpaceJourney } from "@/components/story/SpaceJourney";
import { RescueForm } from "@/components/story/RescueForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Section 1: Houston, We Have a Problem */}
      <HoustonProblem />
      
      {/* Section 2: Meet Captain WP */}
      <CaptainWP />
      
      {/* Section 3: The Rescue Mission Briefing */}
      <MissionBriefing />
      
      {/* Section 4: The Journey Through Digital Space */}
      <SpaceJourney />
      
      {/* Section 7: Your Rescue Mission Awaits (Final CTA) */}
      <RescueForm />
    </div>
  );
};

export default Index;


