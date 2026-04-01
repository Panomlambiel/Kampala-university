import React from 'react';
import { Book, Code, Heart, Scale, Palette, Briefcase, Microscope, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const faculties = [
  { name: 'Science & Technology', icon: Microscope, color: 'bg-blue-500', desc: 'Pioneering research in biotechnology, environmental science, and applied physics.' },
  { name: 'Business & Management', icon: Briefcase, color: 'bg-gold-500', desc: 'Developing the next generation of entrepreneurs and corporate leaders.' },
  { name: 'Law & Governance', icon: Scale, color: 'bg-red-500', desc: 'Excellence in legal education with a focus on justice and human rights.' },
  { name: 'Information Technology', icon: Code, color: 'bg-green-500', desc: 'Cutting-edge training in software engineering, cybersecurity, and data science.' },
  { name: 'Health Sciences', icon: Heart, color: 'bg-pink-500', desc: 'Training compassionate healthcare professionals and medical researchers.' },
  { name: 'Arts & Humanities', icon: Palette, color: 'bg-purple-500', desc: 'Exploring the human experience through literature, history, and the arts.' },
  { name: 'Education', icon: GraduationCap, color: 'bg-orange-500', desc: 'Empowering educators to shape the future of learning in Africa.' },
  { name: 'Engineering', icon: Book, color: 'bg-indigo-500', desc: 'Innovative solutions for infrastructure, energy, and manufacturing.' },
];

export default function Academics() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-univ-blue py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Academic Programs</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              With 8 faculties and over 50 programs, Kampala University offers a comprehensive educational experience that combines academic rigor with practical application.
            </p>
          </div>
        </div>
      </section>

      {/* Faculties Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculties.map((faculty, i) => (
              <motion.div 
                key={faculty.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-100 rounded-sm hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-univ-blue/5 text-univ-blue group-hover:bg-univ-blue group-hover:text-white transition-colors`}>
                  <faculty.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-univ-blue">{faculty.name}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{faculty.desc}</p>
                <button className="text-univ-blue font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Departments <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Learning Portal */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-univ-blue rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 p-12 md:p-20 text-white flex flex-col justify-center">
              <span className="text-univ-gold font-bold uppercase tracking-widest text-xs mb-4">Digital Learning</span>
              <h2 className="text-4xl font-serif font-bold mb-6">KU E-Learning Portal</h2>
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                Access your courses, submit assignments, and collaborate with peers from anywhere in the world. Our modern LMS ensures a seamless learning experience.
              </p>
              <div className="flex gap-4">
                <button className="btn-secondary">STUDENT LOGIN</button>
                <button className="px-6 py-3 border border-white text-white font-bold hover:bg-white hover:text-univ-blue transition-all">FACULTY LOGIN</button>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop" 
                alt="E-Learning" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">Academic Calendar 2026</h2>
            <p className="text-gray-600">Plan your academic year with these important dates.</p>
          </div>

          <div className="max-w-4xl mx-auto border border-gray-100 rounded-sm overflow-hidden shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-univ-blue text-white">
                  <th className="p-6 font-serif font-bold">Event</th>
                  <th className="p-6 font-serif font-bold">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { event: 'Semester I Registration Begins', date: 'January 15, 2026' },
                  { event: 'Orientation for New Students', date: 'February 01, 2026' },
                  { event: 'Commencement of Lectures', date: 'February 05, 2026' },
                  { event: 'Mid-Semester Break', date: 'April 10 - 17, 2026' },
                  { event: 'End of Semester Examinations', date: 'June 15 - 30, 2026' },
                  { event: 'Semester II Registration Begins', date: 'August 15, 2026' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-medium text-gray-700">{row.event}</td>
                    <td className="p-6 text-univ-blue font-bold">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
