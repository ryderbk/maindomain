import { motion } from "framer-motion";

interface MilestoneBadgeProps {
  text: string;
}

const MilestoneBadge = ({ text }: MilestoneBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="inline-flex items-center gap-2 badge-glass rounded-full px-4 py-2"
    >
      <span className="w-2 h-2 rounded-full bg-accent glow-dot animate-pulse-glow" />
      <span className="text-sm font-medium text-foreground/90">{text}</span>
    </motion.div>
  );
};

export default MilestoneBadge;
