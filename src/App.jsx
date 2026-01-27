import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { XCircle, Meh, Clock, CheckCircle2, Instagram } from 'lucide-react';
import { MotionSection } from './components/MotionSection.jsx';

const heroImage =
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80';
const solutionImage =
  'https://images.unsplash.com/photo-1554344058-8d1d1dbc5960?auto=format&fit=crop&w=1400&q=80';
const coachImage =
  'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=400&q=80';

  function EmailForm({ variant = 'primary' }) {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false); // Optionnel : pour gérer l'état de chargement
  
    const handleSubmit = async (e) => { // 1. Ajoutez 'async' ici
      e.preventDefault();
      if (!email) return;
      
      setSubmitting(true);
  
      try {
        // 2. Remplacez l'URL ci-dessous par le lien que Formspree vous a donné
        const response = await fetch("https://formspree.io/f/xkorpdda", {
          method: "POST",
          body: new FormData(e.target),
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          setSubmitted(true);
          setEmail(''); // Vide le champ après succès
        } else {
          alert("Une erreur s'est produite lors de l'inscription.");
        }
      } catch (error) {
        console.error(error);
        alert("Erreur de connexion.");
      } finally {
        setSubmitting(false);
      }
    };
  
    const baseButtonClasses = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold tracking-wide transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background';
    const primaryButtonClasses = 'bg-accent text-white shadow-soft-blue hover:bg-blue-500 focus:ring-accent';
    const ghostButtonClasses = 'bg-transparent border border-accent/40 text-accent hover:bg-accent/10 focus:ring-accent/60';
  
    return (
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4"
      >
        <input
          name="email" /* 3. TRÈS IMPORTANT : Ajoutez cet attribut name="email" */
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          className="flex-1 rounded-full bg-neutral-900/70 border border-neutral-700/70 px-4 py-3 text-sm sm:text-base text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
        <button
          type="submit"
          disabled={submitting || submitted} // Désactive le bouton pendant l'envoi
          className={`${baseButtonClasses} ${
            variant === 'primary' ? primaryButtonClasses : ghostButtonClasses
          } ${submitting ? 'opacity-70 cursor-wait' : ''}`}
        >
          {submitting ? 'Envoi...' : (submitted ? 'Inscription validée ✅' : 'Rejoindre la Liste Prioritaire')}
        </button>
      </form>
    );
  }
  

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center section-padding">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Athlète en pleine séance d'entraînement intense"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      <div className="relative container-tight z-10 py-10 sm:py-16 lg:py-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-4">
              MGC Coaching · Pré-lancement
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
              Arrêtez de vous entraîner dans le vide.{' '}
              <span className="text-accent">Sculptez le physique que vous méritez.</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Pas de bullshit. Pas de régimes à la mode. Juste de la discipline et une méthode
              sur-mesure pour ceux qui sont prêts à charbonner. Le programme{' '}
              <span className="font-semibold text-white">MGC Coaching</span> arrive bientôt.
            </p>

            <div className="mt-8 space-y-4">
              <EmailForm />
              <p className="text-xs sm:text-sm text-neutral-400">
                Déjà <span className="font-semibold text-white">50+ inscrits</span> sur la liste
                d&apos;attente.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-8 lg:mt-0 lg:flex-1 flex justify-end"
          >
            <div className="relative max-w-sm w-full rounded-3xl overflow-hidden border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div className="relative h-64 sm:h-72">
                <img
                  src="./assets/Entrainement.png"
                  alt="Entraînement intense en salle de sport"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent/80 mb-2">
                  Discipline · Intensité · Résultats
                </p>
                <p className="text-sm text-neutral-300">
                  Coaching 1-on-1 pour ceux qui sont prêts à respecter un plan, pas à chercher des
                  excuses.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: XCircle,
      title: 'Pas de plan précis',
      text: "Vous allez à la salle sans objectif clair. Vous soulevez des poids au hasard en espérant un miracle."
    },
    {
      icon: Meh,
      title: 'Diète inadaptée',
      text: "Vous pensez manger 'sain', mais vos macros ne soutiennent pas votre croissance musculaire."
    },
    {
      icon: Clock,
      title: 'Manque de discipline',
      text: "Personne pour vous pousser quand la motivation baisse. Vous abandonnez dès que c'est dur."
    }
  ];

  return (
    <MotionSection className="section-padding py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container-tight">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Pourquoi vous stagnez aujourd&apos;hui ?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-xl">
          Si vous vous entraînez depuis des mois (ou des années) sans voir de vrai changement,
          c&apos;est rarement une question de génétique. C&apos;est une question de structure.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900/80 to-black/90 p-5 sm:p-6"
            >
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-accent/10 rounded-full blur-3xl" />
              </div>
              <div className="relative flex items-start gap-4">
                <div className="mt-1 rounded-xl bg-neutral-900 border border-neutral-700/70 p-2.5">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function SolutionSection() {
  const bullets = [
    'Plans d’entraînement 100% personnalisés.',
    'Suivi nutritionnel flexible (sans se priver).',
    'Check-ins hebdomadaires et support 24/7.'
  ];

  return (
    <MotionSection className="section-padding py-16 sm:py-20 lg:py-24 bg-background/90 border-t border-neutral-900/80">
      <div className="container-tight grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            La Méthode MGC : <span className="text-accent">Plus qu&apos;du sport, un mindset.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
            Je suis en train de finaliser une approche qui combine l&apos;entraînement scientifique
            et la discipline militaire. Mon but n&apos;est pas juste de vous faire perdre 5kg, mais
            de transformer votre mentalité face à l&apos;effort. Ce sera un suivi 1-on-1 pour ceux
            qui ne cherchent pas d&apos;excuses.
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-accent/10 p-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm sm:text-base text-neutral-200">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.25rem] bg-gradient-to-tr from-accent/25 via-transparent to-transparent blur-3xl opacity-70" />
          <div className="relative rounded-[1.75rem] overflow-hidden border border-neutral-800 bg-neutral-950/70 backdrop-blur-xl shadow-[0_18px_70px_rgba(15,23,42,0.9)]">
            <img
              src="./assets/athlete_concentre.png"
              alt="Athlète concentré pendant une séance de coaching"
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                  Méthode MGC · Teaser
                </p>
                <p className="mt-1 text-sm text-neutral-200">
                  Chaque séance, chaque repas, chaque décision alignée sur votre objectif.
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-end text-right">
                <span className="text-xs text-neutral-400">Lancement</span>
                <span className="text-sm font-semibold text-white">2024 · Liste privée</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function ResultsSection() {
  const outcomes = [
    {
      title: 'Une transformation visible',
      text: 'Perte de gras ciblée et construction musculaire durable en 90 jours.'
    },
    {
      title: 'Une confiance inébranlable',
      text: 'Le sentiment de puissance qui vient quand on respecte ses engagements envers soi-même.'
    },
    {
      title: 'Une énergie décuplée',
      text: 'Fini les coups de barre. Optimisez votre santé pour performer au travail et dans la vie.'
    }
  ];

  return (
    <MotionSection className="section-padding py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-[#050816] to-background">
      <div className="container-tight">
        <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Ce qui vous attend au lancement...
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-xl">
              Imaginez où vous serez dans 3 mois si, au lieu de repousser encore, vous décidez
              aujourd&apos;hui de respecter un vrai plan.
            </p>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:overflow-visible">
          {outcomes.map(({ title, text }, idx) => (
            <div
              key={title}
              className="min-w-[260px] sm:min-w-0 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-lg p-5 sm:p-6 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 mb-3">
                  Résultat #{idx + 1}
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{text}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500">
                <span>90 jours de discipline</span>
                <span className="text-accent font-medium">Pour ceux qui restent.</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function AboutSection() {
  return (
    <MotionSection className="section-padding py-16 sm:py-20 lg:py-24 bg-background border-t border-neutral-900/80">
      <div className="container-tight grid md:grid-cols-[auto,1fr] gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-accent/50 via-transparent to-transparent blur-xl opacity-70" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border border-neutral-700 bg-neutral-900 shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
              <img
                src="./assets/maxime.jpg"
                alt="Maxime Domas, coach sportif"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Qui est <span className="text-accent">Maxime Domas</span> ?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Coach sportif en cours de certification, passionné par le dépassement de soi. Je ne
            suis pas là pour être votre ami, mais pour être le partenaire de votre réussite. Je
            construis actuellement l&apos;offre de coaching la plus complète pour les débutants
            ambitieux.
          </p>
          <p className="mt-4 text-sm text-neutral-400">
            Si vous attendez un coach qui vous laisse tranquille quand vous lâchez, ce programme
            n&apos;est pas pour vous. Si vous cherchez quelqu&apos;un pour vous rappeler qui vous
            avez décidé de devenir, alors on va bien s&apos;entendre.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}

function FinalCtaSection() {
  return (
    <MotionSection className="section-padding py-16 sm:py-20 lg:py-24">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-r from-black via-[#020617] to-[#020617] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <div className="absolute inset-0 opacity-60 pointer-events-none">
            <div className="absolute -top-24 -right-10 w-52 h-52 bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-16 -left-8 w-44 h-44 bg-blue-900/40 blur-3xl" />
          </div>
          <div className="relative max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Ne manquez pas le départ.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-200 leading-relaxed">
              Les places pour mon lancement seront limitées pour garantir la qualité du suivi.
              Inscrivez-vous pour être notifié en premier et bénéficier du tarif de lancement.
            </p>
          </div>

          <div className="relative mt-8">
            <EmailForm variant="primary" />
            <p className="mt-3 text-xs sm:text-sm text-neutral-400">
              Zéro spam, uniquement les infos essentielles sur le lancement et les conditions
              d&apos;accès.
            </p>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function Footer() {
  return (
    <footer className="section-padding py-8 border-t border-neutral-900 bg-black">
      <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-neutral-500">
        <p>© 2026 MGC Coaching. Tous droits réservés.</p>
        <a
          href="https://www.instagram.com/mgc_coaching"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors"
        >
          <Instagram className="w-4 h-4" />
          <span>@mgc_coaching</span>
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ResultsSection />
      <AboutSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}

