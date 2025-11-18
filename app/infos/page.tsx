export default function Infos() {
  const infos = [
    {
      icon: '📍',
      title: 'Lieu de la réception',
      color: '#a8c5d8',
      content: (
        <>
          <p className="font-['var(--font-playfair)'] text-2xl font-semibold mb-2">
            L&apos;Orangerie du Moulin
          </p>
          <p className="text-lg mb-4" style={{ color: '#666' }}>
            77620 BRANSLES
          </p>
          <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.459699178887!2d2.8036086!3d48.1399421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ef7d81b685eeb9%3A0x3d0b67612c9bb49f!2sL&#39;Orangerie%20du%20Moulin!5e0!3m2!1sfr!2sfr!4v1763424016080!5m2!1sfr!2sfr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://maps.app.goo.gl/bDz2BHMnRtZFAX7o7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-toile-blue to-[#6b95b8] hover:from-[#6b95b8] hover:to-toile-blue text-white font-['var(--font-montserrat)'] font-medium px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            📍 Ouvrir dans Google Maps
          </a>
        </>
      ),
    },
    {
      icon: '🚗',
      title: 'Accès',
      color: '#c9a961',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-['var(--font-playfair)'] text-xl font-semibold mb-3" style={{ color: '#1a1a1a' }}>
              Distances
            </h3>
            <p style={{ color: '#666' }}>
              🚗 1h de Paris par l&apos;A6 (Porte d&apos;Orléans)
              <br />
              🚉 45 minutes en train (+ 15 min en navette privée)
              <br />
              ✈️ 1h de l&apos;aéroport d&apos;Orly
              <br />
              📍 35 minutes de Fontainebleau
              <br />
              🅿️ Parking gratuit sur place
            </p>
          </div>
          <div>
            <h3 className="font-['var(--font-playfair)'] text-xl font-semibold mb-3" style={{ color: '#1a1a1a' }}>
              Depuis Paris (A6 puis A77)
            </h3>
            <p style={{ color: '#666' }}>
              • Sortie 17 Dordives
              <br />
              • Traverser Dordives sur la N7 (ne PAS tourner à gauche à l&apos;Intermarché)
              <br />
              • Au 2ème feu, tourner à gauche direction « Bransles - Egreville »
              <br />
              • À la 2ème intersection, tourner à droite direction « La Selle S/ Le bied »
              <br />
              • Après 1km, prendre la première route à gauche jusqu&apos;au virage serré à droite
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: '👗',
      title: 'Dress Code',
      color: '#f4e4c1',
      content: (
        <>
          <p className="text-lg mb-4" style={{ color: '#666' }}>
            <strong style={{ color: '#1a1a1a' }}>Thème :</strong> Élégant
          </p>
          <p className="mb-6" style={{ color: '#666' }}>
            Nous vous suggérons une petite touche de <strong>bleu clair</strong>, de <strong>jaune pâle</strong> ou un <strong>motif toile de jouy</strong> dans votre tenue.
          </p>
          <div className="flex gap-6 justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-2 shadow-lg" style={{ backgroundColor: '#f4e4c1', border: '3px solid #c9a961' }}></div>
              <span className="text-sm" style={{ color: '#999' }}>Jaune pâle</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-2 shadow-lg" style={{ backgroundColor: '#a8c5d8', border: '3px solid #c9a961' }}></div>
              <span className="text-sm" style={{ color: '#999' }}>Bleu clair</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-2 shadow-lg" style={{ backgroundImage: 'url(/toile-jouy-final.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', border: '3px solid #c9a961' }}></div>
              <span className="text-sm" style={{ color: '#999' }}>Toile de jouy</span>
            </div>
          </div>
        </>
      ),
    },
    {
      icon: '⏰',
      title: 'Horaires importantes',
      color: '#a8c5d8',
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 rounded-lg" style={{ backgroundColor: '#a8c5d820' }}>
            <span className="font-['var(--font-montserrat)'] font-semibold">Mairie (13 juin)</span>
            <span className="font-['var(--font-playfair)'] text-2xl font-bold" style={{ color: '#a8c5d8' }}>14h00</span>
          </div>
          <div className="flex justify-between items-center p-4 rounded-lg" style={{ backgroundColor: '#c9a96120' }}>
            <span className="font-['var(--font-montserrat)'] font-semibold">Réception (20 juin)</span>
            <span className="font-['var(--font-playfair)'] text-2xl font-bold" style={{ color: '#c9a961' }}>14h00</span>
          </div>
          <div className="flex justify-between items-center p-4 rounded-lg" style={{ backgroundColor: '#f4e4c120' }}>
            <span className="font-['var(--font-montserrat)'] font-semibold">Brunch (21 juin)</span>
            <span className="font-['var(--font-playfair)'] text-2xl font-bold" style={{ color: '#c9a961' }}>10h00</span>
          </div>
        </div>
      ),
    },
    {
      icon: '📞',
      title: 'Contact',
      color: '#c9a961',
      content: (
        <>
          <p className="mb-6" style={{ color: '#666' }}>
            Pour toute question, n&apos;hésitez pas à nous contacter :
          </p>
          <div className="space-y-3">
            <p style={{ color: '#1a1a1a' }}>
              <strong>Célia :</strong>{' '}
              <a href="tel:0683717050" className="hover:underline" style={{ color: '#a8c5d8' }}>
                06 83 71 70 50
              </a>
            </p>
            <p style={{ color: '#1a1a1a' }}>
              <strong>Vincent :</strong>{' '}
              <a href="tel:0682734655" className="hover:underline" style={{ color: '#a8c5d8' }}>
                06 82 73 46 55
              </a>
            </p>
          </div>
        </>
      ),
    },
    {
      icon: '🎁',
      title: 'Liste de mariage',
      color: '#f4e4c1',
      content: (
        <div className="text-center">
          <p className="text-lg mb-4" style={{ color: '#666' }}>
            Votre présence est notre plus beau cadeau.
          </p>
          <p style={{ color: '#666' }}>
            Si vous souhaitez nous gâter, une participation à notre voyage de noces sera très appréciée.
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen toile-pattern py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-['var(--font-playfair)'] text-5xl md:text-6xl font-bold text-center gradient-text mb-6 animate-fade-in">
          Informations pratiques
        </h1>
        <p className="text-center font-['var(--font-montserrat)'] text-lg mb-16 animate-fade-in" style={{ color: '#666', animationDelay: '0.2s' }}>
          Tout ce que vous devez savoir pour profiter pleinement de cette journée
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {infos.map((info, index) => (
            <div
              key={info.title}
              id={info.title === 'Contact' ? 'contact' : undefined}
              className="gold-frame p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-lg"
                  style={{ backgroundColor: `${info.color}30` }}
                >
                  {info.icon}
                </div>
                <h2 className="font-['var(--font-playfair)'] text-2xl font-bold" style={{ color: info.color }}>
                  {info.title}
                </h2>
              </div>
              <div className="font-['var(--font-montserrat)']">{info.content}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <a
            href="/rsvp"
            className="inline-block bg-gradient-to-r from-gold to-[#e8d4a0] hover:from-[#b89850] hover:to-gold text-white font-['var(--font-montserrat)'] font-semibold text-lg px-12 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl"
          >
            Confirmer ma présence
          </a>
        </div>
      </div>
    </main>
  );
}
