import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Users, FileText, ArrowRight, Search, MapPin, Clock } from 'lucide-react';

const jobs = [
  { title: 'Senior Lecturer - Computer Science', department: 'Faculty of IT', type: 'Full-Time', location: 'Ggaba Campus', deadline: 'Oct 30, 2025' },
  { title: 'Research Fellow - Public Health', department: 'Institute of Health Research', type: 'Contract', location: 'Main Campus', deadline: 'Nov 05, 2025' },
  { title: 'Administrative Assistant', department: 'Registrar Office', type: 'Full-Time', location: 'Main Campus', deadline: 'Oct 25, 2025' },
  { title: 'Lab Technician - Civil Engineering', department: 'School of Engineering', type: 'Full-Time', location: 'Ggaba Campus', deadline: 'Nov 12, 2025' },
  { title: 'Student Internship - Marketing', department: 'Communications Dept', type: 'Internship', location: 'Remote/Hybrid', deadline: 'Oct 20, 2025' },
];

export default function Careers() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-univ-blue py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Work With Us</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Join a team of dedicated professionals committed to shaping the future of education in Uganda. Explore career opportunities at Kampala University.
            </p>
          </div>
        </div>
      </section>

      {/* Why KU */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">Why Build Your Career at KU?</h2>
            <p className="text-gray-600">We offer a dynamic and supportive environment for professional growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Academic Freedom', icon: GraduationCap, desc: 'We foster an environment where innovative ideas and diverse perspectives are celebrated.' },
              { title: 'Professional Growth', icon: Briefcase, desc: 'Access to continuous learning opportunities, research grants, and global partnerships.' },
              { title: 'Impactful Work', icon: Users, desc: 'Be part of an institution that is directly contributing to the development of Uganda.' },
            ].map((benefit, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-sm border-b-4 border-univ-gold">
                <div className="w-16 h-16 bg-univ-blue text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-univ-blue mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">Current Openings</h2>
              <p className="text-gray-600">Find the perfect role that matches your skills and passion.</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search positions..." 
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-univ-blue/20"
              />
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-all border-l-4 border-univ-blue flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div>
                  <h4 className="text-xl font-serif font-bold text-univ-blue mb-2">{job.title}</h4>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {job.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                  <div className="text-xs text-gray-400">
                    Deadline: <span className="font-bold text-univ-blue">{job.deadline}</span>
                  </div>
                  <button className="btn-primary text-sm px-6 py-2">APPLY NOW</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Policies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-univ-blue p-12 text-white rounded-sm shadow-2xl flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-serif font-bold mb-6">HR Policies & Benefits</h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                We are committed to providing a fair, inclusive, and rewarding workplace for all our staff. Download our HR handbook to learn more about our policies and benefits.
              </p>
              <button className="flex items-center gap-2 text-univ-gold font-bold hover:underline">
                Download HR Handbook (PDF) <FileText className="w-5 h-5" />
              </button>
            </div>
            <div className="md:w-1/3">
              <div className="p-8 bg-white/10 rounded-sm border border-white/20 text-center">
                <h4 className="font-bold text-univ-gold mb-2">Equal Opportunity</h4>
                <p className="text-xs text-white/60">KU is an equal opportunity employer and does not discriminate based on gender, religion, or ethnicity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
