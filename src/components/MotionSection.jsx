import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export function MotionSection({ children, className = '', delay = 0 }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      custom={delay}
    >
      {children}
    </motion.section>
  );
}

