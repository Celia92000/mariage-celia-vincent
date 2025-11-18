import Countdown from '@/components/Countdown';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#f5f9fb' }}>
      {/* Motif toile de jouy en fond */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: 'url(/toile-jouy-final.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.85
      }}></div>

      {/* Ornements dorés en coins - Comme sur le faire-part */}
      <div className="fixed top-0 left-0 w-32 h-32 pointer-events-none opacity-30">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 Q20 10 0 20 M0 0 Q10 20 20 0" stroke="#c9a961" strokeWidth="2" fill="none"/>
          <circle cx="15" cy="15" r="2" fill="#c9a961"/>
        </svg>
      </div>
      <div className="fixed top-0 right-0 w-32 h-32 pointer-events-none opacity-30 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 Q20 10 0 20 M0 0 Q10 20 20 0" stroke="#c9a961" strokeWidth="2" fill="none"/>
          <circle cx="15" cy="15" r="2" fill="#c9a961"/>
        </svg>
      </div>

      {/* Photos du couple sur les côtés - cachées sur mobile */}
      <div className="hidden xl:block fixed left-1/4 -translate-x-full top-1/2 pointer-events-none z-0">
        <div className="relative p-1 rounded-xl" style={{
          background: 'linear-gradient(135deg, #c9a961, #e8d4a0, #c9a961)',
          boxShadow: '0 8px 30px rgba(201, 169, 97, 0.3)'
        }}>
          <img
            src="/couple.jpg"
            alt="Célia & Vincent"
            className="rounded-lg w-48 h-64 md:w-56 md:h-72 object-cover"
            style={{ border: '3px solid white', objectPosition: 'center 30%' }}
          />
        </div>
      </div>

      <div className="hidden xl:block fixed right-1/4 translate-x-full top-1/2 pointer-events-none z-0">
        <div className="relative p-1 rounded-xl" style={{
          background: 'linear-gradient(135deg, #c9a961, #e8d4a0, #c9a961)',
          boxShadow: '0 8px 30px rgba(201, 169, 97, 0.3)'
        }}>
          <img
            src="/couple2.jpg"
            alt="Célia & Vincent"
            className="rounded-lg w-48 h-64 md:w-56 md:h-72 object-cover"
            style={{ border: '3px solid white' }}
          />
        </div>
      </div>

      {/* Hero Section - Style faire-part */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Carte principale avec cadre doré art déco */}
          <div className="relative p-2 rounded-2xl" style={{
            background: 'linear-gradient(135deg, #c9a961, #e8d4a0, #c9a961)',
            boxShadow: '0 20px 60px rgba(201, 169, 97, 0.3)'
          }}>
            <div className="bg-white rounded-xl p-6 sm:p-12 md:p-20 text-center relative overflow-hidden">

              {/* Noms - Style élégant comme le faire-part */}
              <h1 className="font-['var(--font-playfair)'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wide" style={{
                color: '#6b95b8',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
              }}>
                VINCENT
              </h1>

              {/* Séparateur doré élégant */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 my-6 sm:my-8">
                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"></div>
                <div className="font-['var(--font-playfair)'] text-3xl sm:text-4xl md:text-5xl" style={{ color: '#c9a961' }}>&</div>
                <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent via-[#c9a961] to-transparent"></div>
              </div>

              <h1 className="font-['var(--font-playfair)'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-12 tracking-wide" style={{
                color: '#6b95b8',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
              }}>
                CÉLIA
              </h1>

              {/* Ligne dorée */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent my-8"></div>

              {/* Texte invitation */}
              <p className="font-['var(--font-montserrat)'] text-lg sm:text-xl md:text-2xl italic mb-8 sm:mb-12" style={{ color: '#6b95b8' }}>
                Vous invitent à célébrer leur mariage
              </p>

              {/* Date - Style carte élégante */}
              <div className="inline-block px-6 sm:px-10 py-4 sm:py-6 mb-6 sm:mb-8 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(168, 197, 216, 0.1), rgba(244, 228, 193, 0.1))' }}>
                <p className="font-['var(--font-playfair)'] text-xl sm:text-2xl md:text-3xl font-semibold mb-2" style={{ color: '#c9a961' }}>
                  SAMEDI 20 JUIN
                </p>
                <p className="font-['var(--font-playfair)'] text-4xl sm:text-5xl md:text-6xl font-bold my-3" style={{ color: '#6b95b8' }}>
                  2026
                </p>
                <p className="font-['var(--font-montserrat)'] text-lg sm:text-xl" style={{ color: '#999' }}>
                  14:00
                </p>
              </div>

              {/* Ligne dorée */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent my-6 sm:my-8"></div>

              {/* Lieu */}
              <p className="font-['var(--font-playfair)'] text-xl sm:text-2xl italic mb-2" style={{ color: '#6b95b8' }}>
                À l'ORANGERIE DU MOULIN
              </p>
              <p className="font-['var(--font-montserrat)'] text-base sm:text-lg" style={{ color: '#999' }}>
                77620 BRANSLES
              </p>
            </div>
          </div>

          {/* Bouton CTA élégant */}
          <div className="text-center mt-12">
            <Link
              href="/rsvp"
              className="inline-block px-12 py-4 text-white font-['var(--font-montserrat)'] font-semibold text-lg rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #c9a961, #e8d4a0)',
                boxShadow: '0 4px 20px rgba(201, 169, 97, 0.3)'
              }}
            >
              Confirmer ma présence
            </Link>
          </div>
        </div>
      </section>

      {/* Compte à rebours */}
      <section className="relative py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative p-2 rounded-2xl mb-8" style={{
            background: 'linear-gradient(135deg, #c9a961, #e8d4a0, #c9a961)',
            boxShadow: '0 20px 60px rgba(201, 169, 97, 0.3)'
          }}>
            <div className="bg-white rounded-xl p-6 text-center">
              <h2 className="font-['var(--font-playfair)'] text-3xl font-bold" style={{ color: '#c9a961' }}>
                Compte à rebours
              </h2>
            </div>
          </div>
          <Countdown />
        </div>
      </section>

      {/* Info Cards - Style élégant */}
      <section className="relative py-20 px-4 mb-20">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Thème */}
          <div className="relative p-1.5 rounded-2xl" style={{ background: 'linear-gradient(135deg, #c9a961, #e8d4a0)' }}>
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-['var(--font-playfair)'] text-2xl font-bold mb-3" style={{ color: '#c9a961' }}>
                Thème du mariage
              </h3>
              <p className="font-['var(--font-playfair)'] text-2xl italic" style={{ color: '#6b95b8' }}>
                Élégant
              </p>
            </div>
          </div>

          {/* Dress Code */}
          <div className="relative p-1.5 rounded-2xl" style={{ background: 'linear-gradient(135deg, #6b95b8, #a8c5d8)' }}>
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="font-['var(--font-playfair)'] text-2xl font-bold mb-3" style={{ color: '#6b95b8' }}>
                Dress Code
              </h3>
              <p className="font-['var(--font-montserrat)'] text-sm mb-4" style={{ color: '#666' }}>
                Une petite touche de bleu clair ou de jaune pâle<br />ou motif toile de jouy
              </p>
              <div className="flex gap-4 justify-center">
                <div className="w-10 h-10 rounded-full" style={{ backgroundColor: '#f4e4c1', border: '2px solid #c9a961', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}></div>
                <div className="w-10 h-10 rounded-full" style={{ backgroundColor: '#a8c5d8', border: '2px solid #6b95b8', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}></div>
                <div className="w-10 h-10 rounded-full" style={{ backgroundImage: 'url(/toile-jouy-final.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', border: '2px solid #c9a961', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
