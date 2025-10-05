import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Shield, Zap, TrendingUp, Users, Award } from "lucide-react";
import featureSpeed from "@/assets/feature-speed.jpg";
import featureSecurity from "@/assets/feature-security.jpg";
import featureFlexible from "@/assets/feature-flexible.jpg";

const features = [
  {
    icon: Clock,
    title: "Instant Approval",
    description:
      "Get loan decisions in minutes, not days. Our AI-powered system processes applications instantly.",
    image: featureSpeed,
    color: "primary",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description:
      "Your data is protected with military-grade encryption and industry-leading security protocols.",
    image: featureSecurity,
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Flexible Terms",
    description:
      "Choose repayment plans that fit your lifestyle. Customize your loan to meet your needs.",
    image: featureFlexible,
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Competitive Rates",
    description:
      "Enjoy some of the lowest interest rates in the market. We believe in fair and transparent pricing.",
    color: "primary",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description:
      "Our dedicated team is always here to help. Get assistance whenever you need it.",
    color: "secondary",
  },
  {
    icon: Award,
    title: "Trusted by Thousands",
    description:
      "Join thousands of satisfied customers who chose FinEase for their financial needs.",
    color: "accent",
  },
];

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Choose <span className="text-gradient-primary">FinEase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of lending with our cutting-edge platform
            designed for your convenience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group"
    >
      <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-glow transition-all duration-300 h-full border border-border/50 backdrop-blur-sm">
        {feature.image && (
          <div className="mb-6 rounded-xl overflow-hidden">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        <div
          className={`inline-flex p-4 rounded-xl mb-6 ${
            feature.color === "primary"
              ? "bg-primary/10"
              : feature.color === "secondary"
              ? "bg-secondary/10"
              : "bg-accent/10"
          }`}
        >
          <Icon
            className={`w-8 h-8 ${
              feature.color === "primary"
                ? "text-primary"
                : feature.color === "secondary"
                ? "text-secondary"
                : "text-accent"
            }`}
          />
        </div>
        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};
