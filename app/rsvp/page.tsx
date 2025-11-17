'use client';

import { useState } from 'react';

export default function RSVP() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    nombreAdultes: 1,
    nombreEnfants: 0,
    presenceMairie: false,
    presenceReception: false,
    presenceBrunch: false,
    allergies: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Envoyer les données à votre backend ou service email
    console.log('Formulaire RSVP:', formData);

    // Pour l'instant, afficher un message de confirmation
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (submitted) {
    return (
      <main className="min-h-screen toile-pattern py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-12 gold-frame text-center">
            <div className="text-6xl mb-6">✓</div>
            <h1 className="font-['var(--font-playfair)'] text-4xl font-bold text-gold mb-4">
              Merci !
            </h1>
            <p className="font-['var(--font-montserrat)'] text-lg text-foreground mb-8">
              Votre confirmation a bien été enregistrée.
              <br />
              Nous avons hâte de célébrer ce moment avec vous !
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gold hover:bg-gold/90 text-white font-['var(--font-montserrat)'] font-semibold px-8 py-3 rounded-full transition-all"
            >
              Modifier ma réponse
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen toile-pattern py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 md:p-12 gold-frame">
          <h1 className="font-['var(--font-playfair)'] text-4xl md:text-5xl font-bold text-center text-gold mb-4">
            Confirmez votre présence
          </h1>
          <p className="font-['var(--font-montserrat)'] text-center text-foreground/70 mb-8">
            Merci de confirmer votre présence avant le 1er mai 2026
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom & Prénom */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nom" className="block font-['var(--font-montserrat)'] text-sm font-medium text-foreground mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="prenom" className="block font-['var(--font-montserrat)'] text-sm font-medium text-foreground mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            {/* Email & Téléphone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block font-['var(--font-montserrat)'] text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="telephone" className="block font-['var(--font-montserrat)'] text-sm font-medium text-foreground mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            {/* Nombre de personnes */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombreAdultes" className="block font-['var(--font-montserrat)'] text-sm font-medium text-foreground mb-2">
                  Nombre d&apos;adultes *
                </label>
                <input
                  type="number"
                  id="nombreAdultes"
                  name="nombreAdultes"
                  min="0"
                  required
                  value={formData.nombreAdultes}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="nombreEnfants" className="block font-['var(--font-montserrat)'] text-sm font-medium text-foreground mb-2">
                  Nombre d&apos;enfants
                </label>
                <input
                  type="number"
                  id="nombreEnfants"
                  name="nombreEnfants"
                  min="0"
                  value={formData.nombreEnfants}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            {/* Présence aux événements */}
            <div className="space-y-3">
              <p className="font-['var(--font-montserrat)'] text-sm font-medium text-foreground">
                Présence aux événements *
              </p>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="presenceMairie"
                    checked={formData.presenceMairie}
                    onChange={handleChange}
                    className="w-5 h-5 text-gold border-gold/30 rounded focus:ring-gold"
                  />
                  <span className="font-['var(--font-montserrat)'] text-foreground">
                    Mairie (13 juin 2026 - Levallois)
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="presenceReception"
                    checked={formData.presenceReception}
                    onChange={handleChange}
                    className="w-5 h-5 text-gold border-gold/30 rounded focus:ring-gold"
                  />
                  <span className="font-['var(--font-montserrat)'] text-foreground">
                    Réception (20 juin 2026 - Bransles)
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="presenceBrunch"
                    checked={formData.presenceBrunch}
                    onChange={handleChange}
                    className="w-5 h-5 text-gold border-gold/30 rounded focus:ring-gold"
                  />
                  <span className="font-['var(--font-montserrat)'] text-foreground">
                    Brunch (21 juin 2026)
                  </span>
                </label>
              </div>
            </div>

            {/* Allergies */}
            <div>
              <label htmlFor="allergies" className="block font-['var(--font-montserrat)'] text-sm font-medium text-foreground mb-2">
                Allergies ou régimes alimentaires
              </label>
              <textarea
                id="allergies"
                name="allergies"
                rows={3}
                value={formData.allergies}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Vegetarien, allergies, etc."
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-['var(--font-montserrat)'] text-sm font-medium text-foreground mb-2">
                Message pour les mariés
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Un petit mot pour nous..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-gold hover:bg-gold/90 text-white font-['var(--font-montserrat)'] font-semibold text-lg px-12 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                Confirmer ma présence
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
