import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, CheckCircle, DollarSign, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Fill Application",
    description:
      "Complete our simple online form in just 5 minutes. No paperwork needed.",
    color: "primary",
  },
  {
    icon: CheckCircle,
    title: "Get Approved",
    description:
      "Receive instant decision powered by our smart AI technology.",
    color: "secondary",
  },
  {
    icon: DollarSign,
    title: "Receive Funds",
    description:
      "Money deposited directly into your account within 24 hours.",
    color: "accent",
  },
  {
    icon: PartyPopper,
    title: "Enjoy Freedom",
    description:
      "Use your loan for whatever you need and repay on your terms.",
    color: "success",
  },
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How It <span className="text-gradient-secondary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your loan is easier than ever. Follow these simple steps to
            financial freedom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 gradient-primary opacity-20 transform -translate-y-1/2" />

          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative z-10"
    >
      <div className="text-center">
        {/* Step Number */}
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card border-4 border-background shadow-lg mb-6 relative"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-2xl font-bold text-gradient-primary">
            {index + 1}
          </span>
        </motion.div>

        {/* Icon Container */}
        <motion.div
          className={`inline-flex p-6 rounded-2xl mb-6 ${
            step.color === "primary"
              ? "bg-primary/10"
              : step.color === "secondary"
              ? "bg-secondary/10"
              : step.color === "accent"
              ? "bg-accent/10"
              : "bg-success/10"
          }`}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon
            className={`w-12 h-12 ${
              step.color === "primary"
                ? "text-primary"
                : step.color === "secondary"
                ? "text-secondary"
                : step.color === "accent"
                ? "text-accent"
                : "text-success"
            }`}
          />
        </motion.div>

        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};
