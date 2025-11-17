export default function Infos() {
  return (
    <main className="min-h-screen toile-pattern py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-['var(--font-playfair)'] text-4xl md:text-5xl font-bold text-center text-gold mb-12">
          Informations pratiques
        </h1>

        <div className="space-y-8">
          {/* Lieu de la réception */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 gold-frame">
            <h2 className="font-['var(--font-playfair)'] text-2xl font-bold text-toile-blue mb-4">
              📍 Lieu de la réception
            </h2>
            <div className="space-y-2">
              <p className="font-['var(--font-montserrat)'] text-lg font-semibold text-foreground">
                L&apos;Orangerie du Moulin
              </p>
              <p className="font-['var(--font-montserrat)'] text-foreground/70">
                77620 BRANSLES
              </p>
              <a
                href="https://www.google.com/maps/search/L'Orangerie+du+Moulin+77620+BRANSLES"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-gold hover:bg-gold/90 text-white font-['var(--font-montserrat)'] font-medium px-6 py-2 rounded-full transition-all"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>

          {/* Accès */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 gold-frame">
            <h2 className="font-['var(--font-playfair)'] text-2xl font-bold text-toile-blue mb-4">
              🚗 Accès
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-['var(--font-montserrat)'] font-semibold text-foreground mb-2">
                  En voiture
                </h3>
                <p className="font-['var(--font-montserrat)'] text-foreground/70">
                  Parking gratuit disponible sur place
                  <br />
                  Depuis Paris : environ 1h via A4
                </p>
              </div>
              <div>
                <h3 className="font-['var(--font-montserrat)'] font-semibold text-foreground mb-2">
                  En transports en commun
                </h3>
                <p className="font-['var(--font-montserrat)'] text-foreground/70">
                  Gare la plus proche : Provins (environ 20 min en voiture)
                  <br />
                  Possibilité de covoiturage - contactez-nous
                </p>
              </div>
            </div>
          </div>

          {/* Dress Code */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 gold-frame">
            <h2 className="font-['var(--font-playfair)'] text-2xl font-bold text-toile-blue mb-4">
              👗 Dress Code
            </h2>
            <p className="font-['var(--font-montserrat)'] text-lg text-foreground mb-4">
              <strong>Thème :</strong> Élégant
            </p>
            <p className="font-['var(--font-montserrat)'] text-foreground/70 mb-4">
              Nous vous suggérons une petite touche de <strong>bleu clair</strong>, de <strong>jaune pâle</strong> ou un <strong>motif toile de jouy</strong> dans votre tenue.
            </p>
            <div className="flex gap-4 justify-center mt-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-pale-yellow border-2 border-gold mx-auto mb-2"></div>
                <span className="text-sm font-['var(--font-montserrat)'] text-foreground/70">Jaune pâle</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-toile-blue border-2 border-gold mx-auto mb-2"></div>
                <span className="text-sm font-['var(--font-montserrat)'] text-foreground/70">Bleu clair</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-toile-blue to-white border-2 border-gold mx-auto mb-2"></div>
                <span className="text-sm font-['var(--font-montserrat)'] text-foreground/70">Toile de jouy</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 gold-frame">
            <h2 className="font-['var(--font-playfair)'] text-2xl font-bold text-toile-blue mb-4">
              ⏰ Horaires importantes
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-['var(--font-montserrat)'] font-semibold text-foreground">Mairie (13 juin)</span>
                <span className="font-['var(--font-montserrat)'] text-gold font-bold">14h00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-['var(--font-montserrat)'] font-semibold text-foreground">Réception (20 juin)</span>
                <span className="font-['var(--font-montserrat)'] text-gold font-bold">14h00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-['var(--font-montserrat)'] font-semibold text-foreground">Brunch (21 juin)</span>
                <span className="font-['var(--font-montserrat)'] text-gold font-bold">À confirmer</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 gold-frame">
            <h2 className="font-['var(--font-playfair)'] text-2xl font-bold text-toile-blue mb-4">
              📞 Contact
            </h2>
            <p className="font-['var(--font-montserrat)'] text-foreground/70 mb-4">
              Pour toute question, n&apos;hésitez pas à nous contacter :
            </p>
            <div className="space-y-2">
              <p className="font-['var(--font-montserrat)'] text-foreground">
                <strong>Célia :</strong> <a href="tel:0612345678" className="text-gold hover:underline">06 XX XX XX XX</a>
              </p>
              <p className="font-['var(--font-montserrat)'] text-foreground">
                <strong>Vincent :</strong> <a href="tel:0612345678" className="text-gold hover:underline">06 XX XX XX XX</a>
              </p>
              <p className="font-['var(--font-montserrat)'] text-foreground">
                <strong>Email :</strong> <a href="mailto:celia.vincent.mariage@example.com" className="text-gold hover:underline">celia.vincent.mariage@example.com</a>
              </p>
            </div>
          </div>

          {/* Liste de mariage */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 gold-frame text-center">
            <h2 className="font-['var(--font-playfair)'] text-2xl font-bold text-toile-blue mb-4">
              🎁 Liste de mariage
            </h2>
            <p className="font-['var(--font-montserrat)'] text-foreground/70 mb-4">
              Votre présence est notre plus beau cadeau.
              <br />
              Si vous souhaitez nous gâter, une participation à notre voyage de noces sera très appréciée.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
