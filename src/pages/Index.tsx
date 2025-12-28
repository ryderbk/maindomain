import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import MilestoneBadge from "@/components/MilestoneBadge";
import RocketEmoji from "@/components/RocketEmoji";
import useConfetti from "@/hooks/useConfetti";

// Static content data
const milestoneData = {
  badge: "New Milestone Unlocked",
  headingLine1: "I just bought my",
  headingLine2: "first domain",
  domain: "ryderbk.me",
  description: "Welcome to my corner of the internet.",
};

const Index = () => {
  useConfetti();

  return (
    <main className="min-h-screen flex items-center justify-center bg-radial-gradient overflow-hidden">
      <GlassCard>
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Badge */}
          <MilestoneBadge text={milestoneData.badge} />

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            <span className="text-gradient block">
              {milestoneData.headingLine1}
            </span>
            <span className="text-gradient block">
              {milestoneData.headingLine2}
            </span>
            <span className="block mt-1">
              <span className="text-gradient-accent font-display italic">
                {milestoneData.domain}
              </span>
              <RocketEmoji />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-muted-foreground text-lg md:text-xl max-w-md"
          >
            {milestoneData.description}
          </motion.p>
        </div>
      </GlassCard>
    </main>
  );
};

export default Index;
