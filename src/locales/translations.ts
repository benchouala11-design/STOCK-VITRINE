export type Language = 'fr' | 'ar';

export interface Translations {
  nav: {
    home: string;
    features: string;
    download: string;
    documentation: string;
    contact: string;
    downloadBtn: string;
  };
  hero: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    benefits: {
      offline: string;
      bilingual: string;
      trial: string;
    };
  };
  mockup: {
    dashboardTitle: string;
    liveStatus: string;
    storeName: string;
    tabs: {
      accueil: string;
      caisse: string;
      produit: string;
      facture: string;
      bilan: string;
      clients: string;
      employes: string;
    };
    floatingReceiptCard: {
      ticketNumber: string;
      totalAmount: string;
      status: string;
      printedAt: string;
    };
  };
  features: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
      highlight: string;
    }>;
  };
  download: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    cardTitle: string;
    cardVersion: string;
    specs: Array<{ label: string; value: string }>;
    ctaBtn: string;
    subNote: string;
  };
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    whatsappCalloutTitle: string;
    whatsappCalloutSubtitle: string;
    whatsappNumber: string;
    whatsappBtn: string;
    quickMsgBtn: string;
  };
  badges: {
    offline: string;
    multiDevice: string;
    aiImport: string;
    fastPrint: string;
    exportExcelPdf: string;
    bilingual: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      features: "Fonctionnalités",
      download: "Téléchargement",
      documentation: "Documentation",
      contact: "Contact",
      downloadBtn: "Télécharger",
    },
    hero: {
      badge: "✨ Logiciel de Gestion N°1 en Algérie • Essai gratuit 2 jours",
      titleMain: "Le contrôle total de ",
      titleHighlight: "votre commerce & caisse.",
      subtitle: "Stock Pro centralise vos ventes, votre stock, vos encaissements, vos clients et vos bilans dans une application ultra-rapide conçue spécifiquement pour les commerçants algériens.",
      primaryCta: "Télécharger l'essai gratuit",
      secondaryCta: "Contacter sur WhatsApp",
      benefits: {
        offline: "100% Fonctionnel Hors-ligne",
        bilingual: "Français & العربية",
        trial: "Essai gratuit sans engagement",
      },
    },
    mockup: {
      dashboardTitle: "Stock Pro 2026 — Édition Professionnelle",
      liveStatus: "Synchronisé (Hors-ligne OK)",
      storeName: "Boutique Principale",
      tabs: {
        accueil: "Tableau de Bord",
        caisse: "Caisse & POS",
        produit: "Fiche Produit",
        facture: "Facturation & Ticket",
        bilan: "Bilan & Rapports",
        clients: "Clients & Fournisseurs",
        employes: "Pointage Employés",
      },
      floatingReceiptCard: {
        ticketNumber: "🧾 Ticket N° 4892",
        totalAmount: "18,700 DZD",
        status: "Payé en Caisse",
        printedAt: "Imprimé à 14:32",
      },
    },
    features: {
      badge: "⚡ Tout ce dont votre commerce a besoin",
      title: "Des fonctionnalités taillées pour ",
      titleHighlight: "la performance.",
      subtitle: "Découvrez pourquoi des centaines de magasins et grossistes algériens font confiance à Stock Pro chaque jour.",
      items: [
        {
          title: "Fonctionnement 100% Hors-ligne",
          description: "Continuez à vendre et à encaisser même en cas de coupure Internet ou réseau. Vos données restent sécurisées localement.",
          icon: "WifiOff",
          highlight: "Zéro interruption de vente"
        },
        {
          title: "Caisse & Point de Vente (POS) Express",
          description: "Interface tactile et lecteur code-barres ultra rapide. Éditez des tickets de caisse en moins de 2 secondes.",
          icon: "ShoppingCart",
          highlight: "Vente en 2 clics"
        },
        {
          title: "Gestion Intelligente du Stock",
          description: "Alertes automatiques de stock faible, inventaire rapide avec douchette et suivi précis des entrées/sorties.",
          icon: "Package",
          highlight: "Alertes en temps réel"
        },
        {
          title: "Importation Intelligente avec IA",
          description: "Importez vos listes de produits depuis Excel ou PDF instantanément grâce à notre moteur d'analyse intelligent.",
          icon: "Sparkles",
          highlight: "Gain de temps massif"
        },
        {
          title: "Bilan Financier & Bénéfices Nets",
          description: "Calculez automatiquement votre chiffre d'affaires, vos marges bénéficiaires et vos créances clients/fournisseurs.",
          icon: "TrendingUp",
          highlight: "Chiffres clairs"
        },
        {
          title: "Multi-Postes & Réseau Local",
          description: "Connectez plusieurs caisses ou ordinateurs en réseau dans votre magasin sans frais d'abonnement cloud obligatoires.",
          icon: "Layers",
          highlight: "Synchronisation fluide"
        }
      ]
    },
    download: {
      badge: "💾 Version PC Windows 10/11",
      title: "Téléchargez Stock Pro et essayez-le ",
      titleHighlight: "gratuitement dès aujourd'hui.",
      subtitle: "Installation facile en 1 minute. Aucune carte bancaire requise. Bénéficiez de 2 jours d'essai gratuit complet.",
      cardTitle: "Stock Pro v4.2 Professionnel",
      cardVersion: "Compatible Windows 7, 10 & 11 (32/64 bit)",
      specs: [
        { label: "Taille du fichier", value: "48.5 Mo" },
        { label: "Durée d'essai", value: "2 jours offerts" },
        { label: "Connexion requis", value: "Non (Fonctionne offline)" },
        { label: "Langues", value: "Français / العربية" }
      ],
      ctaBtn: "Télécharger Stock Pro (Essai Gratuit)",
      subNote: "Garantie sans virus • Installation sécurisée"
    },
    contact: {
      badge: "💬 Assistance & Démos Instantanées",
      title: "Une question ? Besoin d'une démo ? ",
      titleHighlight: "Contactez-nous sur WhatsApp.",
      subtitle: "Notre équipe support est à votre disposition pour vous guider, installer le logiciel à distance ou répondre à vos questions commercial.",
      whatsappCalloutTitle: "Assistance Directe WhatsApp",
      whatsappCalloutSubtitle: "Réponse rapide en direct avec nos conseillers techniques",
      whatsappNumber: "0668537167",
      whatsappBtn: "Discuter sur WhatsApp maintenant",
      quickMsgBtn: "Demander une démonstration à distance"
    },
    badges: {
      offline: "Fonctionne hors ligne",
      multiDevice: "Multi-postes",
      aiImport: "Import intelligent avec IA",
      fastPrint: "Impression ultra rapide",
      exportExcelPdf: "Export Excel & PDF",
      bilingual: "Français / العربية",
    },
    footer: {
      rights: "Tous droits réservés.",
      tagline: "Le logiciel professionnel de référence pour les commerçants algériens."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      features: "المميزات",
      download: "التحميل",
      documentation: "التوثيق",
      contact: "اتصل بنا",
      downloadBtn: "تحميل",
    },
    hero: {
      badge: "✨ برنامج التسيير رقم 1 في الجزائر • تجربة مجانية لمدة يومين",
      titleMain: "تحكم كامل في ",
      titleHighlight: "تجارتك وصندوقك.",
      subtitle: "يجمع Stock Pro مبيعاتك، مخزونك، مدفوعاتك، زبائنك وحصائلتك في تطبيق فائق السرعة مصمم خصيصًا للتجار والشركات الجزائرية.",
      primaryCta: "تحميل النسخة التجريبية مجاناً",
      secondaryCta: "تواصل معنا عبر واتساب",
      benefits: {
        offline: "يعمل 100% بدون إنترنت",
        bilingual: "العربية & Français",
        trial: "تجربة مجانية بدون أي التزام",
      },
    },
    mockup: {
      dashboardTitle: "ستوك برو 2026 — النسخة الاحترافية",
      liveStatus: "متزامن (يعمل بدون إنترنت)",
      storeName: "المتجر الرئيسي",
      tabs: {
        accueil: "لوحة التحكم",
        caisse: "الصندوق و POS",
        produit: "بطاقة المنتج",
        facture: "الفواتير والوصل",
        bilan: "الحصيلة والتقارير",
        clients: "الزبائن والموردين",
        employes: "تسجيل العمال",
      },
      floatingReceiptCard: {
        ticketNumber: "🧾 وصل رقم 4892",
        totalAmount: "18,700 دج",
        status: "مدفوع في الصندوق",
        printedAt: "تمت الطباعة 14:32",
      },
    },
    features: {
      badge: "⚡ كل ما تحتاجه تجارتك للنمو",
      title: "مميزات مصممة من أجل ",
      titleHighlight: "الأداء العالي.",
      subtitle: "اكتشف لماذا يثق مئات المحلات وتجار الجملة في الجزائر ببرنامج Stock Pro يومياً.",
      items: [
        {
          title: "عمل 100% بدون إنترنت",
          description: "واصل البيع والتسجيل حتى في حالة انقطاع الإنترنت أو الشبكة. تبقى بياناتك محفوظة ومؤمنة محلياً.",
          icon: "WifiOff",
          highlight: "بدون أي توقف في البيع"
        },
        {
          title: "نقطة البيع والصندوق السريع (POS)",
          description: "واجهة باللمس وقارئ باركود فائق السرعة. طباعة وصل الصندوق في أقل من ثانيتين.",
          icon: "ShoppingCart",
          highlight: "بيع في نقرتين"
        },
        {
          title: "إدارة ذكية للمخزون",
          description: "تنبيهات تلقائية للمخزون المنخفض، جرد سريع عبر القارئ ومتابعة دقيقة لمدخلات ومخرجات السلع.",
          icon: "Package",
          highlight: "تنبيهات لحظية"
        },
        {
          title: "استيراد ذكي بالذكاء الاصطناعي",
          description: "استورد قوائم منتجاتك من ملفات Excel أو PDF فورياً بفضل المحرك الذكي في التطبيق.",
          icon: "Sparkles",
          highlight: "توفير هائل للوقت"
        },
        {
          title: "الحصيلة المالية والأرباح الصافية",
          description: "حساب تلقائي لرقام الأعمال، هامش الربح، والديون المستحقة للزبائن والموردين.",
          icon: "TrendingUp",
          highlight: "أرقام واضحة بدقة"
        },
        {
          title: "متعدد الأجهزة والشبكة المحلية",
          description: "ربط عدة صناديق أو أجهزة كمبيوتر في شبكة واحدة داخل محلكم دون الحاجة لاشتراكات سحابية إجبارية.",
          icon: "Layers",
          highlight: "مزامنة سلسة"
        }
      ]
    },
    download: {
      badge: "💾 نسخة للكمبيوتر Windows 10/11",
      title: "حمل Stock Pro وجربه ",
      titleHighlight: "مجاناً ابتداءً من اليوم.",
      subtitle: "تثبيت سهل في دقيقة واحدة. بدون بطاقة بنكية. استفد من 2 أيام تجربة مجانية كاملة.",
      cardTitle: "Stock Pro v4.2 الاحترافي",
      cardVersion: "متوافق مع Windows 7, 10 & 11 (32/64 bit)",
      specs: [
        { label: "حجم الملف", value: "48.5 ميغابايت" },
        { label: "مدة التجربة", value: "2 أيام مجانية" },
        { label: "الإنترنت مطلوب", value: "لا (يعمل بدون إنترنت)" },
        { label: "اللغات", value: "العربية / Français" }
      ],
      ctaBtn: "تحميل Stock Pro (تجربة مجانية)",
      subNote: "مضمون خالي من الفيروسات • تثبيت آمن"
    },
    contact: {
      badge: "💬 الدعم الفني والعروض التوضيحية",
      title: "لديك سؤال؟ تريد عرضاً توضيحياً؟ ",
      titleHighlight: "تواصل معنا مباشرة عبر واتساب.",
      subtitle: "فريق الدعم الفني في خدمتكم لمساعدتكم، تثبيت البرنامج عن بعد أو الإجابة عن استفساراتكم التجارية.",
      whatsappCalloutTitle: "الدعم المباشر عبر واتساب",
      whatsappCalloutSubtitle: "رد سريع ومباشر مع مستشارينا التقنيين",
      whatsappNumber: "0668537167",
      whatsappBtn: "تحدث معنا على واتساب الآن",
      quickMsgBtn: "طلب عرض توضيحي عن بعد"
    },
    badges: {
      offline: "يعمل بدون إنترنت",
      multiDevice: "متعدد الأجهزة",
      aiImport: "استيراد ذكي بالذكاء الاصطناعي",
      fastPrint: "طباعة سريعة",
      exportExcelPdf: "تصدير Excel و PDF",
      bilingual: "العربية / Français",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      tagline: "البرنامج الاحترافي المرجعي للتجار والشركات في الجزائر."
    }
  },
};
