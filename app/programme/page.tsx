export default function Programme() {
  return (
    <main className="min-h-screen toile-pattern py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-['var(--font-playfair)'] text-4xl md:text-5xl font-bold text-center text-gold mb-12">
          Programme du mariage
        </h1>

        {/* Mairie - 13 Juin */}
        <div className="mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 gold-frame">
            <h2 className="font-['var(--font-playfair)'] text-3xl font-bold text-toile-blue mb-6 text-center">
              Mairie - 13 Juin 2026
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="min-w-[80px]">
                  <span className="font-['var(--font-playfair)'] text-2xl font-bold text-gold">14h</span>
                </div>
                <div>
                  <h3 className="font-['var(--font-montserrat)'] font-semibold text-lg text-foreground">Arrivée</h3>
                  <p className="font-['var(--font-montserrat)'] text-foreground/70">Mairie de Levallois</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-[80px]">
                  <span className="font-['var(--font-playfair)'] text-2xl font-bold text-gold">14h30</span>
                </div>
                <div>
                  <h3 className="font-['var(--font-montserrat)'] font-semibold text-lg text-foreground">Cérémonie civile</h3>
                  <p className="font-['var(--font-montserrat)'] text-foreground/70">Mairie de Levallois</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-[80px]">
                  <span className="font-['var(--font-playfair)'] text-2xl font-bold text-gold">15h30</span>
                </div>
                <div>
                  <h3 className="font-['var(--font-montserrat)'] font-semibold text-lg text-foreground">Vin d&apos;honneur</h3>
                  <p className="font-['var(--font-montserrat)'] text-foreground/70">Salon Ronsard - Mairie de Levallois</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gold/20">
              <p className="font-['var(--font-montserrat)'] text-sm text-toile-blue">
                📍 À la Mairie de Levallois<br />
                Suivi du vin d&apos;honneur au Salon Ronsard - Mairie de Levallois
              </p>
            </div>
          </div>
        </div>

        {/* Réception - 20 Juin */}
        <div className="mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 gold-frame">
            <h2 className="font-['var(--font-playfair)'] text-3xl font-bold text-toile-blue mb-6 text-center">
              Réception - 20 Juin 2026
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="min-w-[80px]">
                  <span className="font-['var(--font-playfair)'] text-2xl font-bold text-gold">14h</span>
                </div>
                <div>
                  <h3 className="font-['var(--font-montserrat)'] font-semibold text-lg text-foreground">Verre d&apos;accueil</h3>
                  <p className="font-['var(--font-montserrat)'] text-foreground/70">L&apos;Orangerie du Moulin</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-[80px]">
                  <span className="font-['var(--font-playfair)'] text-2xl font-bold text-gold">15h</span>
                </div>
                <div>
                  <h3 className="font-['var(--font-montserrat)'] font-semibold text-lg text-foreground">Cérémonie laïque</h3>
                  <p className="font-['var(--font-montserrat)'] text-foreground/70">L&apos;Orangerie du Moulin</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-[80px]">
                  <span className="font-['var(--font-playfair)'] text-2xl font-bold text-gold">18h</span>
                </div>
                <div>
                  <h3 className="font-['var(--font-montserrat)'] font-semibold text-lg text-foreground">Vin d&apos;honneur</h3>
                  <p className="font-['var(--font-montserrat)'] text-foreground/70">Cocktail et photos</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-[80px]">
                  <span className="font-['var(--font-playfair)'] text-2xl font-bold text-gold">20h</span>
                </div>
                <div>
                  <h3 className="font-['var(--font-montserrat)'] font-semibold text-lg text-foreground">Dîner</h3>
                  <p className="font-['var(--font-montserrat)'] text-foreground/70">Repas assis</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-[80px]">
                  <span className="font-['var(--font-playfair)'] text-2xl font-bold text-gold">23h</span>
                </div>
                <div>
                  <h3 className="font-['var(--font-montserrat)'] font-semibold text-lg text-foreground">Découpe du gâteau & Ouverture de bal</h3>
                  <p className="font-['var(--font-montserrat)'] text-foreground/70">Soirée dansante</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gold/20">
              <p className="font-['var(--font-montserrat)'] text-sm text-toile-blue">
                📍 À l&apos;Orangerie du Moulin - 77620 BRANSLES
              </p>
            </div>
          </div>
        </div>

        {/* Brunch - 21 Juin */}
        <div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 gold-frame">
            <h2 className="font-['var(--font-playfair)'] text-3xl font-bold text-toile-blue mb-6 text-center">
              Brunch du lendemain - 21 Juin 2026
            </h2>

            <div className="text-center space-y-4">
              <p className="font-['var(--font-montserrat)'] text-lg text-foreground">
                Pour prolonger ce moment ensemble, rejoignez-nous pour un brunch convivial
              </p>
              <div className="inline-block bg-pale-yellow/30 rounded-lg px-8 py-4 mt-4">
                <p className="font-['var(--font-playfair)'] text-2xl font-bold text-gold">
                  Horaire à confirmer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
