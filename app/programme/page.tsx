export default function Programme() {
  const events = [
    {
      date: '13 Juin 2026',
      title: 'Mairie',
      color: '#a8c5d8',
      location: 'Mairie de Levallois',
      timeline: [
        { time: '14h00', title: 'Arrivée', desc: 'Mairie de Levallois', icon: '🏛️' },
        { time: '14h30', title: 'Mairie', desc: 'Mairie de Levallois', icon: '📖' },
        { time: '15h30', title: "Vin d'honneur", desc: 'Salon Ronsard - Mairie de Levallois', icon: '🥂' },
      ],
    },
    {
      date: '20 Juin 2026',
      title: 'Réception',
      color: '#c9a961',
      location: "L'Orangerie du Moulin - 77620 Bransles",
      timeline: [
        { time: '14h30', title: "Verre d'accueil", desc: '', icon: '🍾' },
        { time: '15h00', title: 'Cérémonie', desc: '', icon: '💒' },
        { time: '18h00', title: "Vin d'honneur", desc: '', icon: '🍷' },
        { time: '20h00', title: 'Repas', desc: '', icon: '🍽️' },
        { time: '23h00', title: 'Découpe du gâteau', desc: '', icon: '🎂' },
        { time: '23h30', title: 'Ouverture de bal', desc: '', icon: '💃' },
      ],
    },
    {
      date: '21 Juin 2026',
      title: 'Brunch du lendemain',
      color: '#a8c5d8',
      location: "L'Orangerie du Moulin - 77620 Bransles",
      timeline: [
        { time: '10h00', title: 'Brunch', desc: '', icon: '🥐' },
      ],
    },
  ];

  return (
    <main className="min-h-screen relative py-20 px-4" style={{ backgroundColor: '#f5f9fb' }}>
      {/* Motif toile de jouy en fond */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: 'url(/toile-jouy-final.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.85
      }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative p-2 rounded-2xl mb-12 sm:mb-16 animate-fade-in" style={{
          background: 'linear-gradient(135deg, #c9a961, #e8d4a0, #c9a961)',
          boxShadow: '0 20px 60px rgba(201, 169, 97, 0.3)'
        }}>
          <div className="bg-white rounded-xl p-6 sm:p-12 text-center">
            <h1 className="font-['var(--font-playfair)'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4 sm:mb-6">
              Programme du mariage
            </h1>
            <p className="font-['var(--font-montserrat)'] text-base sm:text-lg px-4" style={{ color: '#666' }}>
              Trois jours de célébration pour partager notre bonheur
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {events.map((event, eventIndex) => (
            <div
              key={event.title}
              className="gold-frame p-6 sm:p-8 md:p-12 animate-fade-in-up"
              style={{ animationDelay: `${eventIndex * 0.2}s` }}
            >
              {/* Header */}
              <div className="text-center mb-8 sm:mb-10">
                <div
                  className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full mb-3 sm:mb-4"
                  style={{ backgroundColor: `${event.color}20` }}
                >
                  <p className="font-['var(--font-montserrat)'] text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wider" style={{ color: event.color }}>
                    {event.date}
                  </p>
                </div>
                <h2 className="font-['var(--font-playfair)'] text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3" style={{ color: event.color }}>
                  {event.title}
                </h2>
                <p className="font-['var(--font-montserrat)'] text-sm sm:text-base md:text-lg px-4" style={{ color: '#999' }}>
                  📍 {event.location}
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div
                  className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-1/2"
                  style={{ background: `linear-gradient(180deg, transparent, ${event.color}40, transparent)` }}
                ></div>

                <div className="space-y-8">
                  {event.timeline.map((item, index) => (
                    <div
                      key={index}
                      className="relative flex items-start gap-6"
                    >
                      {/* Time - Always on the left */}
                      <div className="hidden md:block flex-1 text-right">
                        <div className="inline-block">
                          <div className="font-['var(--font-playfair)'] text-3xl font-bold" style={{ color: event.color }}>
                            {item.time}
                          </div>
                        </div>
                      </div>

                      {/* Center dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
                          style={{ backgroundColor: event.color, color: 'white' }}
                        >
                          {item.icon}
                        </div>
                      </div>

                      {/* Content - Always on the right */}
                      <div className="flex-1 md:text-left">
                        <div className="inline-block max-w-md">
                          {/* Mobile time */}
                          <div className="md:hidden font-['var(--font-playfair)'] text-2xl font-bold mb-2" style={{ color: event.color }}>
                            {item.time}
                          </div>
                          <h3 className="font-['var(--font-playfair)'] text-xl md:text-2xl font-semibold mb-2" style={{ color: '#1a1a1a' }}>
                            {item.title}
                          </h3>
                          {item.desc && (
                            <p className="font-['var(--font-montserrat)'] text-base" style={{ color: '#666' }}>
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative p-2 rounded-2xl mt-16 animate-fade-in-up" style={{
          background: 'linear-gradient(135deg, #c9a961, #e8d4a0, #c9a961)',
          boxShadow: '0 20px 60px rgba(201, 169, 97, 0.3)'
        }}>
          <div className="bg-white rounded-xl p-12 text-center">
            <p className="font-['var(--font-montserrat)'] text-lg mb-6" style={{ color: '#666' }}>
              Confirmez votre présence dès maintenant
            </p>
            <a
              href="/rsvp"
              className="inline-block bg-gradient-to-r from-gold to-[#e8d4a0] hover:from-[#b89850] hover:to-gold text-white font-['var(--font-montserrat)'] font-semibold text-lg px-12 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl"
            >
              Répondre à l'invitation
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
