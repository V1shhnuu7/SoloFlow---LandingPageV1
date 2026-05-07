import type { Variants } from "framer-motion";

// Same easing as the existing Reveal component for visual consistency with pricing
const ease = [0.2, 0.8, 0.2, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const fadeUpSm: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export const fadeUpLg: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

export const stagger = (childStagger = 0.08, initialDelay = 0.1): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: childStagger, delayChildren: initialDelay },
  },
});

// Standard scroll-into-view trigger config used across sections
export const inView = {
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: true, amount: 0.15, margin: "0px 0px -8% 0px" },
};
