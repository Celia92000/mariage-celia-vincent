export default function RSVP() {
  return (
    <main className="min-h-screen toile-pattern py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-['var(--font-playfair)'] text-5xl md:text-6xl font-bold text-center gradient-text mb-6 animate-fade-in">
          Confirmez votre présence
        </h1>
        <p className="text-center font-['var(--font-montserrat)'] text-lg mb-4 animate-fade-in" style={{ color: '#666', animationDelay: '0.2s' }}>
          Merci de confirmer votre présence avant le <strong style={{ color: '#c9a961' }}>1er janvier 2026</strong>
        </p>
        <p className="text-center font-['var(--font-montserrat)'] text-sm mb-12 animate-fade-in" style={{ color: '#999', animationDelay: '0.3s' }}>
          Remplissez le formulaire ci-dessous pour nous faire part de votre réponse
        </p>

        {/* Microsoft Forms Embed */}
        <div className="gold-frame p-4 md:p-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative w-full" style={{ paddingBottom: '120%', minHeight: '800px' }}>
            <iframe
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAYAAOkArS1UQU9YMUVJWTRNS05JVE5aWDZRNFg1QTdPWi4u&embed=true"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              style={{ border: 'none', minHeight: '800px' }}
              allowFullScreen
            />
          </div>
        </div>

        {/* Info supplémentaires */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="gold-frame p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl mb-3">📅</div>
            <h3 className="font-['var(--font-playfair)'] text-lg font-bold mb-2" style={{ color: '#a8c5d8' }}>
              Date limite
            </h3>
            <p className="font-['var(--font-montserrat)'] text-sm" style={{ color: '#666' }}>
              1er janvier 2026
            </p>
          </div>

          <div className="gold-frame p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-['var(--font-playfair)'] text-lg font-bold mb-2" style={{ color: '#a8c5d8' }}>
              Questions ?
            </h3>
            <p className="font-['var(--font-montserrat)'] text-sm" style={{ color: '#666' }}>
              Contactez-nous pour toute aide
            </p>
          </div>
        </div>

        {/* Navigation vers autres pages */}
        <div className="mt-16 text-center">
          <p className="font-['var(--font-montserrat)'] text-lg mb-6" style={{ color: '#666' }}>
            Découvrez aussi
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/programme"
              className="inline-block bg-gradient-to-r from-toile-blue to-[#6b95b8] hover:from-[#6b95b8] hover:to-toile-blue text-white font-['var(--font-montserrat)'] font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              📅 Programme
            </a>
            <a
              href="/hebergements"
              className="inline-block bg-gradient-to-r from-gold to-[#e8d4a0] hover:from-[#b89850] hover:to-gold text-white font-['var(--font-montserrat)'] font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              🏨 Hébergements
            </a>
            <a
              href="/infos"
              className="inline-block bg-gradient-to-r from-toile-blue to-[#6b95b8] hover:from-[#6b95b8] hover:to-toile-blue text-white font-['var(--font-montserrat)'] font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              ℹ️ Infos pratiques
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
