import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatProps {
  label: string;
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ label, value, suffix = "", duration = 2 }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = 60;
      const increment = end / totalSteps;
      const stepTime = (duration * 1000) / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center p-8 bg-white shadow-lg border-b-4 border-univ-gold hover:-translate-y-2 transition-transform duration-300">
      <div className="text-4xl md:text-5xl font-serif font-bold text-univ-blue mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-500 font-medium uppercase tracking-widest text-sm">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { label: 'Students', value: 15000, suffix: '+' },
    { label: 'Programs', value: 50, suffix: '+' },
    { label: 'Faculty', value: 600, suffix: '+' },
    { label: 'Research Papers', value: 1200, suffix: '+' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Counter {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
