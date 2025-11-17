import Countdown from '@/components/Countdown';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen toile-pattern">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-12 gold-frame text-center">
            <h1 className="font-['var(--font-playfair)'] text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
              VINCENT
            </h1>
            <div className="text-5xl text-gold my-6 font-['var(--font-playfair)']">&</div>
            <h1 className="font-['var(--font-playfair)'] text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
              CÉLIA
            </h1>

            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent my-8"></div>

            <p className="font-['var(--font-montserrat)'] text-xl md:text-2xl text-toile-blue mb-4 italic">
              Vous invitent à célébrer leur mariage
            </p>

            <div className="my-6">
              <p className="font-['var(--font-playfair)'] text-3xl font-semibold text-gold">
                SAMEDI 20 JUIN
              </p>
              <p className="font-['var(--font-playfair)'] text-5xl font-bold text-toile-blue my-2">
                2026
              </p>
              <p className="font-['var(--font-montserrat)'] text-lg text-foreground/70">
                14:00
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent my-8"></div>

            <p className="font-['var(--font-montserrat)'] text-lg md:text-xl text-toile-blue italic">
              À l&apos;ORANGERIE DU MOULIN
            </p>
            <p className="font-['var(--font-montserrat)'] text-md text-foreground/70">
              77620 BRANSLES
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['var(--font-playfair)'] text-4xl font-bold text-center text-gold mb-8">
            Compte à rebours
          </h2>
          <Countdown />
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 gold-frame">
            <h3 className="font-['var(--font-playfair)'] text-2xl font-bold text-gold mb-4">
              Thème du mariage
            </h3>
            <p className="font-['var(--font-montserrat)'] text-lg text-foreground italic">
              Élégant
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 gold-frame">
            <h3 className="font-['var(--font-playfair)'] text-2xl font-bold text-gold mb-4">
              Dress Code
            </h3>
            <p className="font-['var(--font-montserrat)'] text-lg text-foreground mb-4">
              Une petite touche de bleu clair ou de jaune pâle ou motif toile de jouy
            </p>
            <div className="flex gap-4 justify-center">
              <div className="w-12 h-12 rounded-full bg-pale-yellow border-2 border-gold"></div>
              <div className="w-12 h-12 rounded-full bg-toile-blue border-2 border-gold"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-toile-blue to-white border-2 border-gold"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/rsvp"
            className="inline-block bg-gold hover:bg-gold/90 text-white font-['var(--font-montserrat)'] font-semibold text-lg px-12 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Confirmer ma présence
          </Link>
        </div>
      </section>
    </main>
  );
}
