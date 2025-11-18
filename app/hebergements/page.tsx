export default function Hebergements() {
  const hebergements = [
    {
      nom: 'Le moulin du Mez',
      contact: 'Florence - 06.15.16.07.57',
      adresse: 'Le Moulin du Mez 45680 DORDIVES',
      distance: '5 min',
      capacite: '3 lits doubles, 2 salles de bain',
      prix: '450€ (2 nuits) ou 520€ (3 nuits)',
      site: null,
      type: 'Gîte',
    },
    {
      nom: "L'Orée du Chêne",
      contact: 'Brigitte et Michel Bauwens - 06 79 84 84 89',
      adresse: '1 bis hameau de La Brosse 77620 BRANSLES',
      distance: '5 min',
      capacite: '2 chambres + 1 convertible 2 pers',
      prix: '200€ la nuit',
      site: null,
      type: 'Gîte',
    },
    {
      nom: 'Au Domaine Des Roses',
      contact: 'Pascal - 01 60 55 09 81 / 06 07 04 71 46',
      adresse: '6 Rue du Marais Brûle, 77460 Souppes-sur-Loing',
      distance: '13 min',
      capacite: '5 chambres (3-4 pers/chambre)',
      prix: '68€ à 129€ avec petit dej',
      site: 'https://domainedesroses.wordpress.com/',
      type: 'Chambres d\'hôtes',
    },
    {
      nom: 'La grange des blins',
      contact: 'Bruno - 03 86 97 56 19 / 06 83 56 07 67',
      adresse: '4 les Blins 89150 JOUY',
      distance: '18-23 min',
      capacite: '3 chambres + 1 gîte + grenier',
      prix: '70€ à 90€ la nuit',
      site: 'https://lagrangedesblins.fr',
      type: 'Gîte',
    },
    {
      nom: 'Le Gîte de groupe Le gué aux filles',
      contact: 'Christophe - 07 76 72 42 81',
      adresse: '18 Route du Moulin Neuf - 45210 Chevannes',
      distance: '7 min',
      capacite: '9 chambres + 1 duplex + 2 dortoirs',
      prix: '3120€ (2 nuits)',
      site: 'https://www.grandsgites.com/gite-50-gue-desfilles-365.htm',
      type: 'Gîte de groupe',
    },
    {
      nom: 'Gîte des Hoctins',
      contact: 'Béatrice & Jean-Pierre - 06 83 21 97 14 / 06 82 26 87 47',
      adresse: '1, Chemin des Hoctins 45210 CHEVANNES',
      distance: '7 min',
      capacite: '3 chambres (1 lit 140 + 1 lit 140 + 2 lits 90)',
      prix: 'À partir de 60€ la nuit',
      site: 'https://www.gites-de-france.com/fr/centre-val-deloire/loiret/gite-des-hoctins-h45g021240',
      type: 'Gîte',
    },
    {
      nom: "L'Allée du Quatre",
      contact: 'Marie-Juliette et Georges Vellien - 06 50 66 03 46',
      adresse: '4, Rue du 21 août 77460 SOUPPES SUR LOING',
      distance: '13 min',
      capacite: 'Studio + longère 10-14 pers',
      prix: '830€ (2 nuits)',
      site: 'www.lalleeduquatre.fr',
      type: 'Gîte',
    },
    {
      nom: 'Le Moulin de Madame',
      contact: 'Catherine et Philippe Bauwens - 06 10 42 46 19',
      adresse: 'Bransles',
      distance: '5 min',
      capacite: '4 chambres + canapé (8 pers) ou moulin (3 chambres + dortoir)',
      prix: 'env 1700€ (2 nuits)',
      site: 'https://www.airbnb.fr/rooms/44698823',
      type: 'Gîte',
    },
    {
      nom: 'Les hébergements insolites du Danica',
      contact: 'Dominique et Delphine - 02 38 92 28 80',
      adresse: 'Chem. du Puits, 45680 Dordives',
      distance: '8 min',
      capacite: 'Roulottes et cabanes - 16 pers',
      prix: '40 à 70€ la nuit',
      site: 'https://www.ledanica.com/',
      type: 'Hébergement insolite',
    },
    {
      nom: 'Au chant du coq',
      contact: 'Paulette et Bernard - 06 60 02 86 07',
      adresse: 'Rue de la Vallée aux Chats, Les Canivelles 77620 BRANSLES',
      distance: '2 min',
      capacite: 'Gîte 5 personnes',
      prix: '150€ la nuit',
      site: 'https://www.tourismegatinaisvaldeloing.fr/fr/fiche/6643881/gite-auchant-du-coq/',
      type: 'Gîte',
    },
    {
      nom: 'Les plumes de Vallombreuse',
      contact: 'Hélène - 07 75 21 77 81',
      adresse: '3 Rue du Bois Maréchal, Bransles',
      distance: '2 min',
      capacite: 'Gîte 6 pers + chambres d\'hôtes',
      prix: '180€ (gîte) / 90€ (chambre)',
      site: 'https://www.laplumedevallombreuse.com/',
      type: 'Gîte & Chambres d\'hôtes',
    },
    {
      nom: "Hôtel de l'abbaye",
      contact: '02 38 96 53 12',
      adresse: 'Rue des Trois Platanes, 45210 Ferrières-en-Gâtinais',
      distance: '10 min',
      capacite: '32 chambres',
      prix: '90€ à 100€ la nuit',
      site: 'https://www.hotel-abbaye.fr/',
      type: 'Hôtel',
    },
    {
      nom: "Gite de l'atelier",
      contact: 'Gaelle et Nicolas',
      adresse: 'Égreville',
      distance: '10 min',
      capacite: '4 chambres, 6 lits, 8 personnes',
      prix: '430€ (2 nuits)',
      site: 'https://www.airbnb.fr/rooms/53806473',
      type: 'Gîte',
    },
    {
      nom: "L'Echappée Belle",
      contact: 'Dan',
      adresse: '7 Rue de la Forge - 45210 Chevannes',
      distance: '7 min',
      capacite: '6 chambres, 8 lits, 2 salles de bain',
      prix: '850€',
      site: 'https://www.airbnb.fr/rooms/557017226184281783',
      type: 'Gîte',
    },
  ];

  const conseils = [
    {
      icon: '📅',
      title: 'Réservez tôt',
      desc: 'Nous vous conseillons de réserver votre hébergement dès que possible, surtout le weekend du mariage.',
    },
    {
      icon: '🚗',
      title: 'Covoiturage',
      desc: 'Contactez-nous pour être mis en relation avec d\'autres invités et organiser un covoiturage.',
    },
  ];

  return (
    <main className="min-h-screen toile-pattern py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-['var(--font-playfair)'] text-5xl md:text-6xl font-bold text-center gradient-text mb-6 animate-fade-in">
          Hébergements
        </h1>
        <p className="text-center font-['var(--font-montserrat)'] text-lg mb-16 animate-fade-in" style={{ color: '#666', animationDelay: '0.2s' }}>
          Liste complète des hébergements à proximité
        </p>

        {/* Liste des hébergements */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {hebergements.map((hebergement, index) => (
              <div
                key={hebergement.nom}
                className="gold-frame p-6 hover:shadow-2xl transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ backgroundColor: '#a8c5d820', color: '#a8c5d8' }}>
                    {hebergement.type}
                  </span>
                  <h3 className="font-['var(--font-playfair)'] text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>
                    {hebergement.nom}
                  </h3>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <p style={{ color: '#666' }}>
                    📞 {hebergement.contact}
                  </p>
                  <p style={{ color: '#666' }}>
                    📍 {hebergement.adresse}
                  </p>
                  <p style={{ color: '#666' }}>
                    🚗 {hebergement.distance} du lieu
                  </p>
                  <p style={{ color: '#666' }}>
                    👥 {hebergement.capacite}
                  </p>
                  <p className="font-semibold text-base" style={{ color: '#c9a961' }}>
                    💰 {hebergement.prix}
                  </p>
                </div>

                {hebergement.site && (
                  <a
                    href={hebergement.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-toile-blue to-[#6b95b8] hover:from-[#6b95b8] hover:to-toile-blue text-white font-['var(--font-montserrat)'] font-medium px-4 py-3 rounded-lg transition-all text-sm"
                  >
                    Voir le site web
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Conseils */}
        <div>
          <h2 className="font-['var(--font-playfair)'] text-3xl font-bold text-center mb-10 gradient-text">
            Informations utiles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {conseils.map((conseil, index) => (
              <div
                key={conseil.title}
                className="gold-frame p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{conseil.icon}</div>
                <h3 className="font-['var(--font-playfair)'] text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                  {conseil.title}
                </h3>
                <p className="font-['var(--font-montserrat)']" style={{ color: '#666' }}>
                  {conseil.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mt-16 gold-frame p-10 animate-fade-in-up">
          <h3 className="font-['var(--font-playfair)'] text-2xl font-bold mb-4" style={{ color: '#a8c5d8' }}>
            Besoin d&apos;aide ?
          </h3>
          <p className="font-['var(--font-montserrat)'] mb-6" style={{ color: '#666' }}>
            N&apos;hésitez pas à nous contacter pour toute question concernant les hébergements
          </p>
          <a
            href="/infos#contact"
            className="inline-block bg-gradient-to-r from-toile-blue to-[#6b95b8] hover:from-[#6b95b8] hover:to-toile-blue text-white font-['var(--font-montserrat)'] font-semibold px-10 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Nos coordonnées
          </a>
        </div>
      </div>
    </main>
  );
}
