import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBackground}
          alt="Financial growth visualization"
          className="w-full h-full object-cover opacity-20"
        />
        
        {/* Animated Wave Layers */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(262 83% 58% / 0.4) 0%, hsl(220 90% 56% / 0.3) 50%, hsl(174 72% 56% / 0.4) 100%)",
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(225deg, hsl(174 72% 56% / 0.3) 0%, hsl(262 83% 58% / 0.2) 50%, hsl(330 81% 60% / 0.3) 100%)",
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, hsl(262 83% 58% / 0.2) 0%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 2 + "px",
              height: Math.random() * 8 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              background: i % 3 === 0 
                ? "hsl(var(--primary))" 
                : i % 3 === 1 
                ? "hsl(var(--secondary))" 
                : "hsl(var(--accent))",
              opacity: Math.random() * 0.4 + 0.2,
            }}
            animate={{
              y: [0, Math.random() * -150 - 50],
              x: [0, Math.random() * 80 - 40],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        animate={{
          x: [-40, 40, -40],
          y: [-20, 20, -20],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Financial Freedom
          <br />
          <span className="text-gradient-primary">Made Simple</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
        >
          Get instant loan approvals with competitive rates. No hidden fees, no
          hassle. Just simple, transparent lending.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="gradient-primary text-white shadow-glow hover:shadow-lg hover:scale-105 transition-all text-lg px-8 py-6 group"
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-2 hover:bg-card/50 backdrop-blur-sm"
          >
            Calculate Loan
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "$2M+", label: "Loans Processed" },
            { value: "15k+", label: "Happy Customers" },
            { value: "99%", label: "Approval Rate" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="glass rounded-2xl p-6 backdrop-blur-md"
            >
              <div className="text-4xl font-bold text-gradient-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
