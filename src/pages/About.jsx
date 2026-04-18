import { motion } from 'framer-motion';

export default function About() {
  const team = [
    { name: 'Alex Chen', role: 'Founder & CEO', game: 'Valorant' },
    { name: 'Sarah Miller', role: 'Head Builder', game: 'Cyberpunk 2077' },
    { name: 'Marcus Johnson', role: 'Performance Lead', game: 'CS2' },
  ];

  const timeline = [
    { year: '2019', event: 'Founded in a garage' },
    { year: '2020', event: 'First 1,000 builds shipped' },
    { year: '2021', event: 'ISO 9001 Certified' },
    { year: '2022', event: '10,000th build delivered' },
    { year: '2023', event: 'Expanded to EU market' },
    { year: '2024', event: '50,000+ happy gamers' },
  ];

  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <section className="py-20 text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6">We're Gamers. We Build the Rigs We Wish We Had.</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            NexCore Systems was born from frustration. Tired of overpriced prebuilts with bottlenecks and cheap parts, 
            we set out to build gaming PCs that actually deliver on their promises. Zero fluff. Max performance.
          </p>
        </section>

        {/* Team */}
        <section className="py-20">
          <h2 className="font-display font-bold text-3xl mb-12 text-center">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-surface rounded-lg p-6 border border-white/10 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-brand-cyan to-blue-600 rounded-full mx-auto mb-4" />
                <h3 className="font-display font-bold text-xl">{member.name}</h3>
                <p className="text-brand-cyan mb-2">{member.role}</p>
                <p className="text-sm text-gray-400">Main: {member.game}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <h2 className="font-display font-bold text-3xl mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-brand-cyan/30" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block bg-brand-surface border border-white/10 rounded-lg p-4">
                      <div className="text-brand-cyan font-display font-bold text-2xl">{item.year}</div>
                      <div className="text-gray-400">{item.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-brand-cyan rounded-full relative z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <h2 className="font-display font-bold text-3xl mb-12 text-center">Built Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'No Bottlenecks', desc: 'Every component carefully selected to maximize performance synergy.' },
              { title: 'Real Testing', desc: '72-hour stress tests on every single build before shipping.' },
              { title: 'Gamer Support', desc: 'Our support team actually games. They get it.' },
            ].map((value, i) => (
              <div key={i} className="bg-brand-surface rounded-lg p-6 border border-white/10">
                <div className="text-brand-cyan text-4xl mb-4">⚡</div>
                <h3 className="font-display font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
