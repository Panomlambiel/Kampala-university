import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Globe, FileText, Users, Award, ExternalLink, ArrowRight, Download } from 'lucide-react';

export default function Research() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-univ-blue py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Research & Innovation</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Advancing knowledge and solving real-world challenges through interdisciplinary research and global collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Research Centers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">Our Research Centers</h2>
            <p className="text-gray-600">Specialized hubs of excellence across various disciplines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Center for Sustainable Energy', icon: Microscope, desc: 'Developing renewable energy solutions for rural and urban Uganda.' },
              { title: 'Institute of Health Research', icon: Microscope, desc: 'Pioneering studies in infectious diseases and public health policy.' },
              { title: 'Social Sciences Research Hub', icon: Users, desc: 'Exploring social dynamics, governance, and economic development.' },
              { title: 'Innovation & Tech Lab', icon: Microscope, desc: 'Fostering technological advancements in AI, IoT, and data science.' },
              { title: 'Environmental Science Center', icon: Globe, desc: 'Addressing climate change and biodiversity conservation in East Africa.' },
              { title: 'Legal & Policy Research Unit', icon: FileText, desc: 'Analyzing legal frameworks and advocating for human rights.' },
            ].map((center, i) => (
              <motion.div 
                key={center.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-100 rounded-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-univ-blue/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-univ-blue group-hover:text-white transition-colors">
                  <center.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-univ-blue">{center.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{center.desc}</p>
                <button className="text-univ-blue font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">Featured Projects</h2>
            <p className="text-gray-600">Highlighting our most impactful ongoing research initiatives.</p>
          </div>

          <div className="space-y-12">
            {[
              { 
                title: 'Solar-Powered Irrigation for Smallholder Farmers', 
                image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop',
                desc: 'A multi-disciplinary project aimed at increasing agricultural productivity through affordable solar technology.',
                impact: 'Over 500 farmers in Northern Uganda have benefited from this pilot phase.'
              },
              { 
                title: 'AI-Driven Disease Diagnosis in Rural Clinics', 
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
                desc: 'Developing low-cost mobile diagnostic tools for early detection of malaria and tuberculosis.',
                impact: 'Reducing diagnostic time by 60% in remote areas with limited medical staff.'
              },
            ].map((project, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 rounded-sm overflow-hidden shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-serif font-bold text-univ-blue mb-6">{project.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{project.desc}</p>
                  <div className="p-6 bg-univ-gold/10 border-l-4 border-univ-gold rounded-sm mb-8">
                    <h4 className="font-bold text-univ-blue mb-2">Impact</h4>
                    <p className="text-gray-700 italic">{project.impact}</p>
                  </div>
                  <button className="btn-primary">VIEW PROJECT DETAILS</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">Recent Publications</h2>
              <p className="text-gray-600">Access our latest research papers, journals, and reports.</p>
            </div>
            <button className="btn-primary">VIEW ALL PUBLICATIONS</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'The Impact of Digital Literacy on Rural Entrepreneurship in Uganda', journal: 'Journal of African Development', date: 'Sept 2025' },
              { title: 'Sustainable Urban Planning: A Case Study of Kampala Metropolitan Area', journal: 'Urban Studies Review', date: 'Aug 2025' },
              { title: 'Advancements in Low-Cost Solar Cell Technology', journal: 'Renewable Energy International', date: 'July 2025' },
              { title: 'Public Health Policy Responses to Emerging Infectious Diseases', journal: 'East African Medical Journal', date: 'June 2025' },
            ].map((pub, i) => (
              <div key={i} className="p-6 bg-gray-50 border border-gray-100 rounded-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="w-12 h-12 bg-univ-blue text-white rounded-sm flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 hover:text-univ-blue cursor-pointer transition-colors mb-2">{pub.title}</h4>
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> {pub.journal}</span>
                    <span>{pub.date}</span>
                  </div>
                  <button className="mt-4 text-sm font-bold text-univ-blue flex items-center gap-2 hover:underline">
                    Download PDF <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
