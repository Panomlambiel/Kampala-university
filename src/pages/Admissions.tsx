import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, FileText, DollarSign, Globe, HelpCircle, ArrowRight, Download } from 'lucide-react';

export default function Admissions() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-32 bg-univ-blue text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
            alt="Admissions" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Join Our Community</h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Your journey to excellence starts here. We seek curious, ambitious, and diverse students who are ready to make a difference in the world.
            </p>
            <button className="btn-secondary px-10 py-4 text-lg">START APPLICATION</button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">Application Process</h2>
            <p className="text-gray-600">Follow these simple steps to apply for admission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Choose Program', desc: 'Explore our faculties and select the program that aligns with your goals.' },
              { step: '02', title: 'Check Requirements', desc: 'Ensure you meet the academic and language requirements for your chosen course.' },
              { step: '03', title: 'Submit Application', desc: 'Complete the online application form and upload necessary documents.' },
              { step: '04', title: 'Receive Offer', desc: 'Successful applicants will receive an admission letter and enrollment instructions.' },
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-gray-50 rounded-sm border-t-4 border-univ-blue">
                <span className="text-5xl font-serif font-bold text-univ-blue/10 absolute top-4 right-4">{item.step}</span>
                <h3 className="text-xl font-serif font-bold text-univ-blue mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Fees */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-univ-blue mb-8 flex items-center gap-3">
                <FileText className="w-8 h-8 text-univ-gold" />
                Admission Requirements
              </h2>
              <div className="space-y-6">
                {[
                  'Completed online application form',
                  'Certified copies of academic transcripts and certificates',
                  'Copy of National ID or Passport',
                  'Two passport-sized photographs',
                  'Application fee payment receipt',
                  'Proof of English language proficiency (for international students)',
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-sm shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{req}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 flex items-center gap-2 text-univ-blue font-bold hover:underline">
                Download Detailed Prospectus (PDF) <Download className="w-4 h-4" />
              </button>
            </div>

            {/* Financial Aid */}
            <div className="bg-univ-blue p-12 text-white rounded-sm shadow-2xl">
              <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-univ-gold" />
                Financial Aid & Scholarships
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                We believe that financial constraints should not hinder academic potential. Kampala University offers various scholarship programs and financial aid options.
              </p>
              <div className="space-y-6 mb-10">
                <div className="p-6 bg-white/10 rounded-sm border border-white/20">
                  <h4 className="font-bold text-univ-gold mb-2">Merit-Based Scholarships</h4>
                  <p className="text-sm text-white/60">Awarded to students with exceptional academic performance in their previous studies.</p>
                </div>
                <div className="p-6 bg-white/10 rounded-sm border border-white/20">
                  <h4 className="font-bold text-univ-gold mb-2">Need-Based Grants</h4>
                  <p className="text-sm text-white/60">Financial assistance for students from disadvantaged backgrounds who demonstrate financial need.</p>
                </div>
                <div className="p-6 bg-white/10 rounded-sm border border-white/20">
                  <h4 className="font-bold text-univ-gold mb-2">Sports & Talent Awards</h4>
                  <p className="text-sm text-white/60">Recognizing excellence in sports, arts, and community leadership.</p>
                </div>
              </div>
              <button className="w-full btn-secondary">APPLY FOR SCHOLARSHIP</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about admissions.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'When is the application deadline?', a: 'For the February intake, the deadline is January 15th. For the August intake, it is July 15th.' },
              { q: 'Can I apply for more than one program?', a: 'Yes, you can indicate your first and second choices on the application form.' },
              { q: 'Is there an application fee?', a: 'Yes, a non-refundable application fee of UGX 50,000 (or $50 for international students) is required.' },
              { q: 'Do you offer on-campus housing?', a: 'Yes, we have several hostels on and near the campus. You can apply for housing once you receive your admission letter.' },
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-sm overflow-hidden">
                <summary className="p-6 font-bold text-univ-blue cursor-pointer flex items-center justify-between list-none">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-univ-gold/10 rounded-sm border border-univ-gold flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <HelpCircle className="w-10 h-10 text-univ-blue" />
              <div>
                <h4 className="font-bold text-univ-blue">Still have questions?</h4>
                <p className="text-sm text-gray-600">Our admissions team is here to help you.</p>
              </div>
            </div>
            <button className="btn-primary">CONTACT ADMISSIONS</button>
          </div>
        </div>
      </section>
    </main>
  );
}
