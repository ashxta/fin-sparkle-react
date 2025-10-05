import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator } from "lucide-react";

export const LoanCalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(12);
  const interestRate = 8.5; // Fixed interest rate for demo

  const monthlyPayment =
    (loanAmount * (interestRate / 100 / 12)) /
    (1 - Math.pow(1 + interestRate / 100 / 12, -loanTerm));

  const totalPayment = monthlyPayment * loanTerm;
  const totalInterest = totalPayment - loanAmount;

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Calculator className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Loan Calculator
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Calculate Your{" "}
            <span className="text-gradient-accent">Monthly Payment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Adjust the sliders to see how much you could borrow and what your
            monthly payments would be.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 shadow-glow border-2 border-primary/20 backdrop-blur-sm">
            <div className="space-y-12">
              {/* Loan Amount Slider */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-lg font-semibold">Loan Amount</label>
                  <motion.span
                    key={loanAmount}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-gradient-primary"
                  >
                    ${loanAmount.toLocaleString()}
                  </motion.span>
                </div>
                <Slider
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  min={1000}
                  max={100000}
                  step={1000}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>$1,000</span>
                  <span>$100,000</span>
                </div>
              </div>

              {/* Loan Term Slider */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-lg font-semibold">Loan Term</label>
                  <motion.span
                    key={loanTerm}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-gradient-secondary"
                  >
                    {loanTerm} months
                  </motion.span>
                </div>
                <Slider
                  value={[loanTerm]}
                  onValueChange={(value) => setLoanTerm(value[0])}
                  min={6}
                  max={60}
                  step={6}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>6 months</span>
                  <span>60 months</span>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-xl bg-primary/5"
                >
                  <div className="text-sm text-muted-foreground mb-2">
                    Monthly Payment
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    ${monthlyPayment.toFixed(2)}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-xl bg-secondary/5"
                >
                  <div className="text-sm text-muted-foreground mb-2">
                    Total Interest
                  </div>
                  <div className="text-3xl font-bold text-secondary">
                    ${totalInterest.toFixed(2)}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-xl bg-accent/5"
                >
                  <div className="text-sm text-muted-foreground mb-2">
                    Total Payment
                  </div>
                  <div className="text-3xl font-bold text-accent">
                    ${totalPayment.toFixed(2)}
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <Button
                  size="lg"
                  className="gradient-primary text-white shadow-glow hover:shadow-lg hover:scale-105 transition-all text-lg px-12 py-6"
                >
                  Apply for This Loan
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
