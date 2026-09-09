import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  FlaskConical,
  Globe2,
  Leaf,
  Mail,
  ShieldCheck,
  Sparkles,
  Wheat,
} from "lucide-react";

const CHECKOUT = "https://pay.hotmart.com/O107466069Q?checkoutMode=10&bid=1788507646008";
const COVER = "/assets/updated-book-cover.png";
const HERO = "/assets/medizin-hero.jpg";
const ORGANS = "/assets/medizin-organs.jpg";
const APPLICATIONS = "/assets/medizin-applications.jpg";
const CREATOR = "/assets/creator-character.jpg";
const OPEN_BOOK = "/assets/open-book.png";
const OPEN_BOOK_RECIPE = "/assets/open-book-recipe.png";

type Locale = "de" | "pt";

const copy = {
  de: {
    nav: { contents: "Inhalt", method: "Methode", offer: "Angebot", faq: "FAQ" },
    heroEyebrow: "DAS VERBORGENE WISSEN DER NATUR",
    heroTitle: "Millionen werden für Ihre Krankheiten verkauft — doch die ultimative Heilung liegt direkt vor Ihrer Haustür.",
    heroText:
      "Entdecken Sie das geheime Arsenal von über 300 uralten Rezepten zur Behandlung, Heilung und Kontrolle von Krankheiten in jedem Organ Ihres Körpers. Der schrittweise Prozess, der Arterien befreit, Leberentzündungen bekämpft, chronische Schmerzen lindert und Ihre Gesundheit von innen heraus wiederherstellt.",
    heroCta: "Exemplar sichern",
    heroNote: "Sofortiger digitaler Zugang · PDF-Format",
    kicker: "01 / DER ANSATZ",
    problemTitle: "Die Pharmaindustrie entwickelt keine Heilmittel, sie schafft Kunden.",
    problemText:
      "Wenn Sie heute an einer Krankheit leiden, beantworten Sie diese Frage ehrlich: Hat das Medikament, das Sie einnehmen, Ihr Problem gelöst, oder müssen Sie es Ihr Leben lang nehmen? Die moderne Medizin ist in Notfällen hervorragend, aber bei chronischen Krankheiten werden häufig nur Symptome unterdrückt. Ihre Vorfahren wussten, wie man mit natürlichen Heilmitteln achtsam mit dem Körper umgeht.",
    pull: "Schluss mit schwarzen Pillen und ihren verheerenden Nebenwirkungen!",
    productKicker: "02 / DAS BUCH",
    productTitle: "Die praktischen Gesundheitsrichtlinien unserer Vorfahren: natürliche Behandlungen und Heilmittel.",
    productText:
      "Wir haben über 300 traditionelle Heilrezepte zusammengestellt, die auf überliefertem Wissen basieren. Eine präzise Schritt-für-Schritt-Anleitung mit genauen Zutaten, Extraktionsmethoden und praktischen Anwendungshinweisen.",
    productPoints: ["300 nummerierte Lösungen", "Tees, Garrafadas, Bäder, Salben und Kompressen", "Kompakte Schritt-für-Schritt-Anleitungen", "Digitales PDF zum sofortigen Lesen"],
    learnKicker: "03 / WAS SIE ENTDECKEN",
    learnTitle: "Ein klarer Weg durch die natürliche Hausapotheke.",
    learnText: "Die Inhalte sind nach Körperbereichen und Alltagssituationen geordnet — vom ersten Blick bis zur praktischen Anwendung.",
    categories: [
      ["Leber, Nieren und Gallenblase", "Intensive traditionelle Pflanzenkuren und natürliche Ressourcen für die tägliche Pflanzenkunde."],
      ["Herz und Kreislaufsystem", "Überlieferte Rezepturen und achtsame Routinen rund um Kreislauf und Wohlbefinden."],
      ["Chronische Schmerzen und Entzündungen", "Traditionelle Anwendungen mit Kompressen, Bädern, Ölen und Salben."],
      ["Chronische Erkrankungen und Beschwerden", "Unterstützende und vorbeugende Anwendungen als Ergänzung zur fachlichen Behandlung."],
      ["Nervensystem und Immunsystem", "Rezepte zur Linderung von Unruhe, Schlafproblemen und zur Stärkung der natürlichen Widerstandskraft."],
    ],
    methodKicker: "04 / SO FUNKTIONIERT ES",
    methodTitle: "Wie funktionieren die Schritt-für-Schritt-Anleitungen?",
    methodText: "Keine Sorge, Sie benötigen keine medizinischen Vorkenntnisse. Die Anleitung ist intuitiv und leicht verständlich.",
    methodCards: [
      ["Genaue Zutaten", "Wurzeln, Blätter, Rinde und Samen, die Sie in Naturkostläden oder auf Wochenmärkten finden."],
      ["Detaillierte Zubereitung", "Präzise Kochzeit, richtige Mengenverhältnisse und ein geeignetes Gefäß — verständlich erklärt."],
      ["Praktische Anwendungstechniken", "Konzentrierte Aufgüsse, Tinkturen, dermatologische Salben, warme Kompressen und Sirupe."],
    ],
    offerKicker: "05 / IHR EXEMPLAR",
    offerTitle: "Gesundheit zurückgewinnen zum Preis einer Packung Generika.",
    pricePrefix: "Nur",
    access: "Sofortiger digitaler Zugang im PDF-Format",
    buy: "Jetzt Exemplar sichern",
    guarantee: "Zufriedenheitsgarantie — volle Kostenübernahme",
    guaranteeText: "15 Tage risikofrei testen. Kaufen Sie das Buch, entdecken Sie über 300 Rezepte und prüfen Sie in Ruhe, ob das Material zu Ihnen passt. Innerhalb von 15 Tagen können Sie eine Rückerstattung anfragen.",
    faqKicker: "06 / HÄUFIGE FRAGEN",
    faqTitle: "Alles Wichtige auf einen Blick.",
    faqs: [
      ["Lehrt das Buch, wie man schwere Erkrankungen behandelt?", "Das Buch vermittelt traditionelles Wissen zur Unterstützung, Vorbeugung und Linderung verschiedener Beschwerden und chronischer Schmerzen und dient als Ergänzung zur ärztlichen Behandlung."],
      ["Wo finde ich die Heilpflanzen?", "Viele natürliche Ressourcen finden Sie auf Märkten, Wochenmärkten sowie in Geschäften und Online-Shops für Naturprodukte."],
      ["Wie erhalte ich Zugriff?", "Das Material ist ein hochwertiges E-Book im PDF-Format. Die Lieferung erfolgt automatisch und umgehend per E-Mail, sobald die Zahlung bestätigt wurde."],
      ["Kann ich auf dem Smartphone lesen?", "Ja. Das PDF ist für Smartphone, Tablet und Computer geeignet."],
    ],
    finalTitle: "Treffen Sie heute die Entscheidung für ein bewussteres, natürlicheres Leben.",
    finalCta: "Sichern Sie sich jetzt Ihr Exemplar",
    footer: "Medizin der Natur · Gruppe für natürliche Heilmethoden",
    disclaimer: "Traditionelles Informationsmaterial. Es ersetzt keine individuelle Beratung durch medizinisches Fachpersonal.",
    language: "Sprache",
  },
  pt: {
    nav: { contents: "Conteúdo", method: "Método", offer: "Oferta", faq: "FAQ" },
    heroEyebrow: "O CONHECIMENTO OCULTO DA NATUREZA",
    heroTitle: "Mais de 300 preparações tradicionais para uma vida mais consciente.",
    heroText:
      "Um guia prático premium com chás, garrafadas, banhos, pomadas e aplicações naturais tradicionais — explicado com clareza, passo a passo.",
    heroCta: "Garantir meu exemplar",
    heroNote: "Acesso digital imediato · Formato PDF",
    kicker: "01 / A PROPOSTA",
    problemTitle: "Voltar ao que a natureza sempre ofereceu.",
    problemText:
      "Entre ervas, raízes, folhas e ingredientes simples da cozinha existe um repertório transmitido por gerações. Medicina da Natureza organiza esse conhecimento com quantidades, preparo e formas de uso fáceis de consultar.",
    pull: "Conhecimento tradicional. Organização prática. Para o dia a dia.",
    productKicker: "02 / O LIVRO",
    productTitle: "A enciclopédia prática da saúde dos nossos antepassados.",
    productText:
      "Não é uma coleção solta. Cada solução segue a mesma estrutura: objetivo, ingredientes, preparo, aplicação e observações — para você encontrar rapidamente o que procura.",
    productPoints: ["300 soluções numeradas", "Chás, garrafadas, banhos, pomadas e compressas", "Instruções práticas passo a passo", "PDF digital para ler imediatamente"],
    learnKicker: "03 / O QUE VOCÊ VAI DESCOBRIR",
    learnTitle: "Um caminho claro pela farmácia natural de casa.",
    learnText: "O conteúdo é organizado por regiões do corpo e situações do cotidiano — da consulta à aplicação prática.",
    categories: [
      ["Fígado, rins e bile", "Aplicações tradicionais com plantas e alimentos para o conhecimento natural do dia a dia."],
      ["Coração e circulação", "Receitas tradicionais e rotinas conscientes para o bem-estar."],
      ["Dores e inflamações", "Compressas, banhos, óleos e aplicações externas."],
      ["Estômago e digestão", "Chás, preparações leves e ingredientes da cozinha."],
      ["Sistema nervoso e imunidade", "Rituais noturnos, conhecimento de ervas e aliados naturais."],
    ],
    methodKicker: "04 / COMO FUNCIONA",
    methodTitle: "Do ingrediente à aplicação pronta — sem rodeios.",
    methodText: "Cada receita é apresentada para que você acompanhe os passos de forma intuitiva.",
    methodCards: [
      ["Ingredientes exatos", "Raízes, folhas, cascas, sementes e itens da cozinha — com medidas e alternativas."],
      ["Preparo detalhado", "Tempo de cozimento, infusão, recipientes e ordem explicados com clareza."],
      ["Aplicação prática", "Infusões, banhos, compressas, pomadas e xaropes com instruções objetivas."],
    ],
    offerKicker: "05 / SEU EXEMPLAR",
    offerTitle: "Um acervo inteiro de conhecimento. Pelo preço de uma pequena pausa no dia.",
    pricePrefix: "Apenas",
    access: "Acesso digital imediato em PDF",
    buy: "Garantir meu exemplar agora",
    guarantee: "Garantia de satisfação de 15 dias",
    guaranteeText: "Leia com calma. Se o material não for para você, poderá solicitar o reembolso dentro de 15 dias.",
    faqKicker: "06 / PERGUNTAS FREQUENTES",
    faqTitle: "Tudo o que você precisa saber.",
    faqs: [
      ["O que o e-book contém?", "Mais de 300 entradas organizadas com objetivo, ingredientes, quantidades, preparo e aplicação em um PDF compacto."],
      ["O acesso é imediato?", "Sim. Após a confirmação do pagamento, o acesso digital será disponibilizado conforme o processamento do checkout."],
      ["Onde encontro os ingredientes?", "Muitos ingredientes podem ser encontrados em supermercados, lojas naturais, farmácias, feiras e casas especializadas."],
      ["Posso ler no celular?", "Sim. O PDF é adequado para celular, tablet e computador."],
    ],
    finalTitle: "Tome hoje a decisão por uma vida mais consciente e conectada à natureza.",
    finalCta: "Garantir meu exemplar agora",
    footer: "Medicina da Natureza · Grupo de tratamentos naturais",
    disclaimer: "Material informativo sobre conhecimento tradicional. Não substitui orientação individual de profissionais de saúde.",
    language: "Idioma",
  },
} as const;

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`section-label ${light ? "section-label--light" : ""}`}>{children}</div>;
}

function AppLink({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a className={`cta ${className}`} href={CHECKOUT} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={17} strokeWidth={2.2} />
    </a>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("de");
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [legalOpen, setLegalOpen] = useState(false);

  const carouselItems = [
    { src: COVER, alt: "Medizin der Natur — Buchcover" },
    { src: CREATOR, alt: "Der Autor mit dem Buch in der Natur" },
    { src: OPEN_BOOK, alt: "Aufgeschlagenes Buch mit natürlicher Rezeptur" },
    { src: OPEN_BOOK_RECIPE, alt: "Aufgeschlagene Rezeptseite mit Ingwer-Zitronen-Tee" },
  ];

  useEffect(() => {
    const lang = navigator.languages?.[0] || navigator.language || "de";
    setLocale(lang.toLowerCase().startsWith("pt") ? "pt" : "de");
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCarouselIndex((current) => (current + 1) % carouselItems.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [carouselItems.length]);

  const t = copy[locale];
  const categoryIcons = useMemo(() => ["✦", "◌", "✧", "◈", "⋆"], []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Medizin der Natur">
          <span className="brand-mark"><Leaf size={16} /></span>
          <span>MEDIZIN <b>DER NATUR</b></span>
        </a>
        <nav className={`top-nav ${menuOpen ? "top-nav--open" : ""}`}>
          <a href="#buch" onClick={() => setMenuOpen(false)}>{t.nav.contents}</a>
          <a href="#methode" onClick={() => setMenuOpen(false)}>{t.nav.method}</a>
          <a href="#angebot" onClick={() => setMenuOpen(false)}>{t.nav.offer}</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>{t.nav.faq}</a>
        </nav>
        <div className="header-actions">
          <button className="language-toggle" onClick={() => setLocale(locale === "de" ? "pt" : "de")} aria-label={`${t.language}: ${locale}`}>
            <Globe2 size={15} /> {locale.toUpperCase()}
          </button>
          <AppLink className="cta--small">{t.heroCta}</AppLink>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"><span /><span /></button>
        </div>
      </header>

      <main id="top">
        <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(6,18,12,.97) 0%, rgba(6,18,12,.83) 39%, rgba(6,18,12,.16) 70%, rgba(6,18,12,.20) 100%), url(${HERO})` }}>
          <div className="hero-inner">
            <div className="hero-copy">
              <SectionLabel light><Sparkles size={14} /> {t.heroEyebrow}</SectionLabel>
              <h1>{t.heroTitle}</h1>
              <p className="hero-lead">{t.heroText}</p>
              <div className="hero-actions">
                <AppLink>{t.heroCta}</AppLink>
                <a href="#buch" className="text-link">{locale === "de" ? "Mehr erfahren" : "Saiba mais"} <ArrowDown size={16} /></a>
              </div>
              <p className="hero-note"><ShieldCheck size={14} /> {t.heroNote}</p>
            </div>
            <div className="hero-product">
              <div className="halo" />
              <div className="hero-carousel" aria-roledescription="carousel" aria-label={locale === "de" ? "Buch- und Inhaltsbilder" : "Imagens do livro e conteúdo"}>
                <div className="hero-carousel-track" style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
                  {carouselItems.map((item) => <div className="hero-carousel-slide" key={item.src}><img src={item.src} alt={item.alt} /></div>)}
                </div>
                <div className="hero-carousel-controls">
                  {carouselItems.map((item, i) => <button key={item.src} className={carouselIndex === i ? "is-active" : ""} onClick={() => setCarouselIndex(i)} aria-label={`${locale === "de" ? "Bild" : "Imagem"} ${i + 1}`} />)}
                </div>
              </div>
              <div className="hero-stamp"><strong>300</strong><span>{locale === "de" ? "NATÜRLICHE LÖSUNGEN" : "SOLUÇÕES NATURAIS"}</span></div>
            </div>
          </div>
          <div className="hero-bottom-line"><span>GRUPPE FÜR NATÜRLICHE HEILMETHODEN</span><span>ÜBERLIEFERT · GEORDNET · PRAKTISCH</span></div>
        </section>

        <section className="statement section-cream">
          <div className="statement-number">01</div>
          <div className="statement-content">
            <SectionLabel>{t.kicker}</SectionLabel>
            <h2>{t.problemTitle}</h2>
            <p>{t.problemText}</p>
          </div>
          <div className="statement-visual"><img src={OPEN_BOOK_RECIPE} alt={locale === "de" ? "Aufgeschlagene Seite mit natürlicher Rezeptur" : "Livro aberto com receita natural"} /><div className="statement-pull"><Leaf size={24} /><span>{t.pull}</span></div></div>
        </section>

        <section id="buch" className="book-section section-dark">
          <div className="book-copy">
            <SectionLabel light>{t.productKicker}</SectionLabel>
            <h2>{t.productTitle}</h2>
            <p>{t.productText}</p>
            <ul className="check-list">
              {t.productPoints.map((point) => <li key={point}><span><Check size={15} /></span>{point}</li>)}
            </ul>
            <AppLink>{t.heroCta}</AppLink>
          </div>
          <div className="book-visual">
            <div className="book-frame"><img src={COVER} alt="Capa atualizada do e-book Medizin der Natur" /></div>
            <div className="book-caption"><BookOpen size={18} /><span>{locale === "de" ? "Ein Nachschlagewerk für Ihre natürliche Hausapotheke" : "Um guia de consulta para sua farmácia natural"}</span></div>
          </div>
        </section>

        <section className="discover section-cream">
          <div className="discover-head"><div><SectionLabel>{t.learnKicker}</SectionLabel><h2>{t.learnTitle}</h2></div><p>{t.learnText}</p></div>
          <div className="category-image" style={{ backgroundImage: `url(${ORGANS})` }}>
            <div className="category-grid">
              {t.categories.map(([title, text], i) => <article className="category-card" key={title}><span className="category-icon">{categoryIcons[i]}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="methode" className="method section-dark">
          <div className="method-intro"><SectionLabel light>{t.methodKicker}</SectionLabel><h2>{t.methodTitle}</h2><p>{t.methodText}</p></div>
          <div className="method-cards">
            {[
              [OPEN_BOOK, Wheat, t.methodCards[0]],
              [OPEN_BOOK_RECIPE, FlaskConical, t.methodCards[1]],
              [APPLICATIONS, Leaf, t.methodCards[2]],
            ].map(([image, Icon, card]) => {
              const [title, text] = card as readonly [string, string];
              const IconComp = Icon as typeof Wheat;
              return <article className="method-card" key={title}><img src={image as string} alt="" /><div className="method-card-body"><IconComp size={21} /><h3>{title}</h3><p>{text}</p></div></article>;
            })}
          </div>
        </section>

        <section id="angebot" className="offer section-cream">
          <div className="offer-layout">
            <div className="offer-copy"><SectionLabel>{t.offerKicker}</SectionLabel><h2>{t.offerTitle}</h2><div className="price-line"><span>{t.pricePrefix}</span><strong>33<span>€</span></strong></div><p className="offer-access"><Clock3 size={16} /> {t.access}</p><AppLink className="cta--gold">{t.buy}</AppLink></div>
            <div className="guarantee-card"><div className="guarantee-seal"><ShieldCheck size={28} /><strong>15</strong><span>{locale === "de" ? "TAGE" : "DIAS"}</span></div><div><h3>{t.guarantee}</h3><p>{t.guaranteeText}</p></div></div>
          </div>
        </section>

        <section id="faq" className="faq section-cream">
          <div className="faq-head"><SectionLabel>{t.faqKicker}</SectionLabel><h2>{t.faqTitle}</h2></div>
          <div className="faq-list">
            {t.faqs.map(([question, answer], i) => <div className={`faq-item ${openFaq === i ? "faq-item--open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{question}</span><ChevronDown size={19} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}
          </div>
        </section>

        <section className="final-cta" style={{ backgroundImage: `linear-gradient(90deg, rgba(8,25,16,.96), rgba(8,25,16,.68)), url(${HERO})` }}>
          <Leaf size={26} /><h2>{t.finalTitle}</h2><AppLink>{t.finalCta}</AppLink>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark"><Leaf size={15} /></span><span>{t.footer}</span></div><p>{t.disclaimer}</p><div className="footer-links"><button className="legal-link" onClick={() => setLegalOpen(true)}>{locale === "de" ? "Rechtliche Hinweise" : "Avisos legais"}</button><a href={`mailto:kontakt@medizin-der-natur.de`}><Mail size={14} /> kontakt@medizin-der-natur.de</a></div></footer>
      {legalOpen && <div className="legal-modal-backdrop" role="presentation" onClick={() => setLegalOpen(false)}><section className="legal-modal" role="dialog" aria-modal="true" aria-labelledby="legal-title" onClick={(event) => event.stopPropagation()}><button className="legal-close" onClick={() => setLegalOpen(false)} aria-label={locale === "de" ? "Schließen" : "Fechar"}>×</button><SectionLabel>{locale === "de" ? "RECHTLICHE HINWEISE" : "AVISOS LEGAIS"}</SectionLabel><h2 id="legal-title">{locale === "de" ? "Hinweise zum digitalen Material" : "Informações sobre o material digital"}</h2><p>{locale === "de" ? "Dieses E-Book dient der allgemeinen Information über traditionelles Pflanzenwissen. Die Inhalte ersetzen keine individuelle medizinische Beratung, Diagnose oder Behandlung." : "Este e-book tem finalidade informativa sobre conhecimentos tradicionais de plantas. O conteúdo não substitui orientação médica individual, diagnóstico ou tratamento."}</p><p>{locale === "de" ? "Bitte prüfen Sie Zutaten, Allergien und persönliche Verträglichkeit sorgfältig und wenden Sie sich bei gesundheitlichen Fragen an qualifiziertes Fachpersonal." : "Verifique ingredientes, alergias e sua tolerância individual. Em caso de dúvidas de saúde, procure um profissional qualificado."}</p></section></div>}
    </div>
  );
}
