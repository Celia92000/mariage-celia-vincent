export default function Hebergements() {
  const hotels = [
    {
      nom: 'Hôtel Ibis Provins',
      distance: '15 km',
      prix: 'À partir de 80€/nuit',
      tel: '01 XX XX XX XX',
      site: 'https://www.accor.com',
    },
    {
      nom: 'Aux Vieux Remparts',
      distance: '18 km',
      prix: 'À partir de 120€/nuit',
      tel: '01 XX XX XX XX',
      site: 'https://www.auxvieuxremparts.com',
    },
    {
      nom: 'Campanile Provins',
      distance: '16 km',
      prix: 'À partir de 70€/nuit',
      tel: '01 XX XX XX XX',
      site: 'https://www.campanile.com',
    },
  ];

  const airbnb = [
    {
      type: 'Maison entière',
      distance: '5 km',
      capacite: '6-8 personnes',
      note: 'Idéal pour les familles',
    },
    {
      type: 'Gîte rural',
      distance: '10 km',
      capacite: '4-6 personnes',
      note: 'Cadre champêtre',
    },
  ];

  return (
    <main className="min-h-screen toile-pattern py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-['var(--font-playfair)'] text-4xl md:text-5xl font-bold text-center text-gold mb-4">
          Hébergements
        </h1>
        <p className="font-['var(--font-montserrat)'] text-center text-foreground/70 mb-12">
          Quelques suggestions d&apos;hébergements à proximité du lieu de réception
        </p>

        {/* Hôtels */}
        <div className="mb-12">
          <h2 className="font-['var(--font-playfair)'] text-3xl font-bold text-toile-blue mb-6">
            🏨 Hôtels
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg p-6 gold-frame hover:shadow-xl transition-shadow">
                <h3 className="font-['var(--font-playfair)'] text-xl font-bold text-foreground mb-3">
                  {hotel.nom}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="font-['var(--font-montserrat)'] text-sm text-foreground/70">
                    📍 {hotel.distance} du lieu
                  </p>
                  <p className="font-['var(--font-montserrat)'] text-sm font-semibold text-gold">
                    {hotel.prix}
                  </p>
                  <p className="font-['var(--font-montserrat)'] text-sm text-foreground/70">
                    📞 {hotel.tel}
                  </p>
                </div>
                <a
                  href={hotel.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-toile-blue hover:bg-toile-blue/90 text-white font-['var(--font-montserrat)'] font-medium px-4 py-2 rounded-full transition-all text-sm"
                >
                  Voir le site
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Airbnb & Locations */}
        <div className="mb-12">
          <h2 className="font-['var(--font-playfair)'] text-3xl font-bold text-toile-blue mb-6">
            🏡 Locations Airbnb & Gîtes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {airbnb.map((location, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg p-6 gold-frame">
                <h3 className="font-['var(--font-playfair)'] text-xl font-bold text-foreground mb-3">
                  {location.type}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="font-['var(--font-montserrat)'] text-sm text-foreground/70">
                    📍 {location.distance} du lieu
                  </p>
                  <p className="font-['var(--font-montserrat)'] text-sm text-foreground/70">
                    👥 {location.capacite}
                  </p>
                  <p className="font-['var(--font-montserrat)'] text-sm text-toile-blue italic">
                    {location.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.airbnb.fr/s/Bransles--France/homes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold/90 text-white font-['var(--font-montserrat)'] font-semibold px-8 py-3 rounded-full transition-all"
            >
              Rechercher sur Airbnb
            </a>
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 gold-frame">
          <h2 className="font-['var(--font-playfair)'] text-2xl font-bold text-toile-blue mb-4">
            ℹ️ Informations utiles
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-['var(--font-montserrat)'] font-semibold text-foreground mb-2">
                Réservation
              </h3>
              <p className="font-['var(--font-montserrat)'] text-foreground/70">
                Nous vous conseillons de réserver votre hébergement dès que possible, surtout pour le week-end du mariage.
              </p>
            </div>
            <div>
              <h3 className="font-['var(--font-montserrat)'] font-semibold text-foreground mb-2">
                Covoiturage
              </h3>
              <p className="font-['var(--font-montserrat)'] text-foreground/70">
                Si vous souhaitez organiser un covoiturage depuis Paris ou les gares alentours, contactez-nous pour être mis en relation avec d&apos;autres invités.
              </p>
            </div>
            <div>
              <h3 className="font-['var(--font-montserrat)'] font-semibold text-foreground mb-2">
                Navettes
              </h3>
              <p className="font-['var(--font-montserrat)'] text-foreground/70">
                Des navettes seront organisées depuis certains hébergements vers le lieu de réception. Plus d&apos;informations à venir.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 text-center">
          <p className="font-['var(--font-montserrat)'] text-foreground/70 mb-4">
            Besoin d&apos;aide pour trouver un hébergement ?
          </p>
          <a
            href="/rsvp"
            className="inline-block bg-toile-blue hover:bg-toile-blue/90 text-white font-['var(--font-montserrat)'] font-semibold px-8 py-3 rounded-full transition-all"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </main>
  );
}
