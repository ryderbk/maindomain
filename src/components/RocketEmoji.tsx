import { motion } from "framer-motion";

const RocketEmoji = () => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0, rotate: -45 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.8,
      }}
      className="inline-block ml-2"
    >
      🚀
    </motion.span>
  );
};

export default RocketEmoji;
