export type Language = 'fr' | 'ar';

// Lien central de téléchargement du logiciel Stock Pro (hébergé sur Mega.nz)
export const DOWNLOAD_URL = "https://mega.nz/file/wnMEyRaZ#dngFYS2bPDCYN0qTRfx4E2v_IaI0UFFhaC_y4brKnqI";

export interface TabFeatureHighlight {
  title: string;
  subtitle: string;
  iconName: string;
  points: Array<{ title: string; desc: string }>;
  badge: string;
}

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
    tabHint: string;
    tabs: {
      accueil: string;
      caisse: string;
      produit: string;
      facture: string;
      bilan: string;
      clients: string;
      employes: string;
    };
    tabFeatures: Record<string, TabFeatureHighlight>;
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
  sectors: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: Array<{
      title: string;
      desc: string;
      icon: string;
      color: string;
      tag: string;
    }>;
  };
  testimonials: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: Array<{
      name: string;
      role: string;
      city: string;
      text: string;
      rating: number;
    }>;
  };
  stats: {
    items: Array<{
      value: string;
      label: string;
      sublabel: string;
      icon: string;
    }>;
  };
  whatsappWidget: {
    status: string;
    header: string;
    subtitle: string;
    btnText: string;
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
      badge: "✨ Logiciel de Gestion N°1 en Algérie • Téléchargement Gratuit",
      titleMain: "Le contrôle total de ",
      titleHighlight: "votre commerce & caisse.",
      subtitle: "Stock Pro centralise vos ventes, votre stock, vos encaissements, vos clients et vos bilans dans une application ultra-rapide conçue spécifiquement pour les commerçants algériens.",
      primaryCta: "Télécharger maintenant",
      secondaryCta: "Contacter sur WhatsApp",
      benefits: {
        offline: "100% Fonctionnel Hors-ligne",
        bilingual: "Français & العربية",
        trial: "Téléchargement gratuit & complet",
      },
    },
    mockup: {
      dashboardTitle: "Stock Pro v1.0.0 — Édition Professionnelle",
      liveStatus: "Synchronisé (Hors-ligne OK)",
      storeName: "Boutique Principale",
      tabHint: "Cliquez sur un module pour changer l'aperçu",
      tabs: {
        accueil: "Tableau de Bord",
        caisse: "Caisse & POS",
        produit: "Fiche Produit",
        facture: "Facturation & Ticket",
        bilan: "Bilan & Rapports",
        clients: "Clients & Fournisseurs",
        employes: "Pointage Employés",
      },
      tabFeatures: {
        accueil: {
          title: "Tableau de Bord & Vue Générale",
          subtitle: "Supervisez l'ensemble de votre commerce en temps réel sur un seul écran.",
          iconName: "LayoutDashboard",
          badge: "Aperçu Global 360°",
          points: [
            { title: "Ventes du jour en DA", desc: "Suivez le chiffre d'affaires et la rentabilité en direct." },
            { title: "Indicateurs Clés (KPI)", desc: "Nombre de transactions, bénéfice net et niveau de stock." },
            { title: "Alertes de Réapprovisionnement", desc: "Soyez notifié dès qu'un article passe sous le seuil minimum." },
            { title: "Accès Rapide aux Actions", desc: "Raccourcis clavier pour créer une facture ou encaisser." }
          ]
        },
        caisse: {
          title: "Point de Vente (POS) & Caisse Express",
          subtitle: "Encaissez vos clients à la vitesse de l'éclair sans aucun ralentissement.",
          iconName: "ShoppingCart",
          badge: "Encaissement Ultra Rapide",
          points: [
            { title: "Lecture Code-Barres Instantanée", desc: "Prise en charge de toutes les douchettes et scanners." },
            { title: "Impression Ticket 80mm", desc: "Édition de tickets de caisse en moins de 2 secondes." },
            { title: "Modes de Paiement Multiples", desc: "Espèces, chèque, carte bancaire ou crédit sur compte client." },
            { title: "Calcul du Rendu Monnaie", desc: "Évite toute erreur de caisse lors des transactions rapides." }
          ]
        },
        produit: {
          title: "Gestion Complète du Stock & Articles",
          subtitle: "Organisez vos produits avec précision, variantes et prix personnalisés.",
          iconName: "Package",
          badge: "Stockage Intelligente",
          points: [
            { title: "Tarification Multi-Niveaux", desc: "Gérez les prix de détail, semi-gros et gros par produit." },
            { title: "Importation Excel & IA", desc: "Importez des milliers d'articles en quelques clics." },
            { title: "Gestion des Variantes", desc: "Tailles, couleurs, poids, lots et dates de péremption." },
            { title: "Inventaire au Barcode", desc: "Faites votre inventaire sans fermer le magasin." }
          ]
        },
        facture: {
          title: "Facturation & Tickets Personnalisés",
          subtitle: "Générez des factures et bons de livraison conformes et professionnels.",
          iconName: "Receipt",
          badge: "Impression Pro & PDF",
          points: [
            { title: "Modèles d'Imprimés personnalisables", desc: "Ajoutez votre logo, coordonnées et conditions de vente." },
            { title: "Impression A4, A5 et Ticket", desc: "Adaptable sur tout type d'imprimante thermique ou bureau." },
            { title: "Exportation PDF & Excel", desc: "Envoyez vos factures directement par e-mail ou WhatsApp." },
            { title: "Gestion des Remises & TVA", desc: "Calcul automatique des remises et taxes de vente." }
          ]
        },
        bilan: {
          title: "Bilan Financier & Analyse des Bénéfices",
          subtitle: "Visualisez vos marges nettes et comprenez la rentabilité de votre commerce.",
          iconName: "PieChart",
          badge: "Calcul de Marge Nette",
          points: [
            { title: "Calcul Automatique du Marge", desc: "Sachez exactement combien vous gagnez sur chaque produit." },
            { title: "Rapports Journaliers & Mensuels", desc: "Histogrammes clairs de l'évolution de votre activité." },
            { title: "Analyse des Top Produits", desc: "Identifiez vos meilleures ventes et articles les plus rentables." },
            { title: "Clôture de Caisse Z", desc: "Générez votre rapport de caisse de fin de journée." }
          ]
        },
        clients: {
          title: "Fichier Clients & Suivi des Dettes (Krnish)",
          subtitle: "Fidélisez vos clients et contrôlez l'historique des crédits et fournisseurs.",
          iconName: "Users",
          badge: "Gestion des Créances",
          points: [
            { title: "Suivi des Crédits Clients (Krnish)", desc: "Consultez le solde débiteur et l'historique de chaque client." },
            { title: "Règlements & Versements", desc: "Enregistrez les acomptes et versements partiels." },
            { title: "Historique d'Achats Détaillé", desc: "Retrouvez toutes les anciennes factures d'un client en 1 clic." },
            { title: "Gestion des Fournisseurs", desc: "Suivez vos commandes d'achat et vos dettes fournisseurs." }
          ]
        },
        employes: {
          title: "Gestion des Employés & Pointage",
          subtitle: "Contrôlez les accès de vos caissiers et le pointage de votre personnel.",
          iconName: "UserCheck",
          badge: "Sécurité & Droits d'Accès",
          points: [
            { title: "Droits d'Accès par Rôle", desc: "Limitez les actions autorisées (ex: interdiction d'annuler une vente)." },
            { title: "Pointage & Fiche de Paie", desc: "Enregistrez la présence, les retards et calculez les salaires." },
            { title: "Traçabilité des Ventes", desc: "Identifiez quel caissier a effectué chaque vente." },
            { title: "Sécurité par Mot de Passe", desc: "Chaque employé possède son propre compte sécurisé." }
          ]
        }
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
      badge: "💾 Version PC Windows — Fichier .EXE",
      title: "Téléchargez Stock Pro ",
      titleHighlight: "gratuitement dès maintenant.",
      subtitle: "Installation facile en 1 minute. Version complète prête à l'emploi. Aucune inscription requise.",
      cardTitle: "Stock Pro v1.0.0 Professionnel",
      cardVersion: "Compatible Windows 7, 10 & 11 (32/64 bit)",
      specs: [
        { label: "Taille du fichier", value: "485.2 Mo (.exe)" },
        { label: "Version", value: "v1.0.0 — Version Complète" },
        { label: "Connexion requis", value: "Non (Fonctionne offline)" },
        { label: "Langues", value: "Français / العربية" }
      ],
      ctaBtn: "Télécharger Stock Pro maintenant",
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
    sectors: {
      badge: "🏪 Conçu pour votre commerce",
      title: "S'adapte parfaitement à votre ",
      titleHighlight: "secteur d'activité.",
      subtitle: "Stock Pro est configuré sur mesure pour répondre aux exigences spécifiques de chaque métier en Algérie.",
      items: [
        {
          title: "Superérettes & Alimentation",
          desc: "Gestion ultra rapide en caisse, pesée automatique, codes-barres et suivi des péremptions.",
          icon: "ShoppingBag",
          color: "emerald",
          tag: "Caisse Express"
        },
        {
          title: "Vêtements & Chaussures",
          desc: "Gestion par tailles, pointures, couleurs, collections et étiquetage personnalisé.",
          icon: "Shirt",
          color: "indigo",
          tag: "Tailles & Couleurs"
        },
        {
          title: "Téléphonie & Électronique",
          desc: "Suivi des numéros IMEI, garanties pièces, accessoires et réparation matérielle.",
          icon: "Smartphone",
          color: "cyan",
          tag: "Suivi IMEI & Garanties"
        },
        {
          title: "Cosmétique & Parapharmacie",
          desc: "Gestion de milliers de références, coffrets cadeaux, remises et stock d'alerte.",
          icon: "Sparkles",
          color: "rose",
          tag: "Multi-Références"
        },
        {
          title: "Quincailleries & Matériaux",
          desc: "Vente au mètre, kilo ou pièce, tarifs de gros et suivi rigoureux des créances.",
          icon: "Hammer",
          color: "amber",
          tag: "Vente au Dépôt & Gros"
        },
        {
          title: "Grossistes & Dépôts de Stock",
          desc: "Bons de livraison, factures proforma, gestion multi-dépôts et réseaux de vendeurs.",
          icon: "Warehouse",
          color: "violet",
          tag: "Multi-Dépôts & BL"
        }
      ]
    },
    testimonials: {
      badge: "⭐ Témoignages & Avis Clients",
      title: "Ce que disent les commerçants ",
      titleHighlight: "en Algérie.",
      subtitle: "Découvrez les retours d'expérience authentiques de nos utilisateurs à travers les différentes wilayas.",
      items: [
        {
          name: "Moustafa B.",
          role: "Gérant de Superérette",
          city: "Alger (Bab Ezzouar)",
          text: "Khoya Stock Pro habalni f lkaisse! Kont n'galer m3a les tickets, dorka fi 2 secondes n'imprimer ticket w kolsh rgle. Ma n'bedlou b walou!",
          rating: 5
        },
        {
          name: "Kamel K.",
          role: "Boutique Habillement Homme",
          city: "Oran (Centre Ville)",
          text: "Khdemt bih f magasin ta3 les vêtements, f l-inventaire raye7ni 100%. Douchette direct w le bilan ykhorg clair net sans aucune erreur.",
          rating: 5
        },
        {
          name: "Brahim M.",
          role: "Grossiste Pièces & Quincaillerie",
          city: "Sétif (Zone Industrielle)",
          text: "Surtout lkrnish m3a les clients w les fournisseurs, rani n'suivi kolsh bla ma nnsa 1 Dinar. Top niveau, rabi ybarek!",
          rating: 5
        },
        {
          name: "Yacine T.",
          role: "Magasin Téléphonie & Informatique",
          city: "Constantine (Nouvelle Ville)",
          text: "Support ta3hom top! Instalawehli f PC ta3i f 10 minutes par Anydesk w bdayt nkhdem f nafs l-yowm. Service rapide w pro.",
          rating: 5
        }
      ]
    },
    stats: {
      items: [
        {
          value: "+3 400",
          label: "Magasins Équipés",
          sublabel: "Commerces & Boutiques actives en Algérie",
          icon: "Store"
        },
        {
          value: "58",
          label: "Wilayas Couvertes",
          sublabel: "Présence et installation dans tout le territoire national",
          icon: "MapPin"
        },
        {
          value: "+12M",
          label: "Tickets Édités",
          sublabel: "Transactions et factures générées en toute sécurité",
          icon: "Receipt"
        },
        {
          value: "99.9%",
          label: "Satisfaction Clients",
          sublabel: "Note moyenne attribuée par nos utilisateurs",
          icon: "Smile"
        }
      ]
    },
    whatsappWidget: {
      status: "En ligne • Réponse en 2 min",
      header: "Besoin d'aide ou d'une démonstration ?",
      subtitle: "Notre équipe technique est disponible sur WhatsApp au 0668537167",
      btnText: "Discuter sur WhatsApp"
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
      badge: "✨ برنامج التسيير رقم 1 في الجزائر • تحميل مجاني",
      titleMain: "تحكم كامل في ",
      titleHighlight: "تجارتك وصندوقك.",
      subtitle: "يجمع Stock Pro مبيعاتك، مخزونك، مدفوعاتك، زبائنك وحصائلتك في تطبيق فائق السرعة مصمم خصيصًا للتجار والشركات الجزائرية.",
      primaryCta: "تحميل الآن",
      secondaryCta: "تواصل معنا عبر واتساب",
      benefits: {
        offline: "يعمل 100% بدون إنترنت",
        bilingual: "العربية & Français",
        trial: "تحميل مجاني والنسخة الكاملة",
      },
    },
    mockup: {
      dashboardTitle: "ستوك برو 2026 — النسخة الاحترافية",
      liveStatus: "متزامن (يعمل بدون إنترنت)",
      storeName: "المتجر الرئيسي",
      tabHint: "اضغط على أي قسم لتغيير العرض",
      tabs: {
        accueil: "لوحة التحكم",
        caisse: "الصندوق و POS",
        produit: "بطاقة المنتج",
        facture: "الفواتير والوصل",
        bilan: "الحصيلة والتقارير",
        clients: "الزبائن والموردين",
        employes: "تسجيل العمال",
      },
      tabFeatures: {
        accueil: {
          title: "لوحة التحكم والنظرة العامة",
          subtitle: "راقب جميع أنشطة متجرك في الوقت الفعلي في شاشة واحدة.",
          iconName: "LayoutDashboard",
          badge: "رؤية شاملة 360°",
          points: [
            { title: "مبيعات اليوم بالدينار", desc: "متابعة رقم الأعمال والأرباح مباشرة." },
            { title: "المؤشرات الرئيسية", desc: "عدد المعاملات، الأرباح الصافية وحالة المخزون." },
            { title: "تنبيهات إعادة التزويد", desc: "إشعار فوري عند انخفاض كمية أي منتج." },
            { title: "وصول سريع للعمليات", desc: "اختصارات لوحة المفاتيح وإنشاء الفواتير." }
          ]
        },
        caisse: {
          title: "نقطة البيع والصندوق السريع",
          subtitle: "سجل مبيعات زبائنك بسرعة فائقة دون أي تأخير.",
          iconName: "ShoppingCart",
          badge: "تحصيل فائق السرعة",
          points: [
            { title: "قراءة الباركود فورية", desc: "دعم كامل لجميع أنواع القارئات والماسحات." },
            { title: "طباعة وصل 80مم", desc: "إصدار وصل الصندوق في أقل من ثانيتين." },
            { title: "طرق دفع متعددة", desc: "نقداً، شيك، بطاقة بنكية أو حساب الزبون." },
            { title: "حساب الصرف التلقائي", desc: "تجنب خطأ الصرف أثناء عمليات البيع السريعة." }
          ]
        },
        produit: {
          title: "إدارة المخزون والمنتجات",
          subtitle: "نظم منتجاتك بدقة مع الخيارات والأسعار المخصصة.",
          iconName: "Package",
          badge: "مخزون ذكي",
          points: [
            { title: "أسعار متعددة المستويات", desc: "إدارة أسعار التجزئة، نصف الجملة والجملة." },
            { title: "استيراد Excel وذكاء اصطناعي", desc: "إدخال آلاف المنتجات في ثوان معدودة." },
            { title: "إدارة الخيارات والأنواع", desc: "الأحجام، الألوان، الأوزان وتاريخ الانتهاء." },
            { title: "جرد بالباركود", desc: "إجراء الجرد دون الحاجة لإغلاق المحل." }
          ]
        },
        facture: {
          title: "الفواتير والإيصالات المخصصة",
          subtitle: "أنشئ فواتير وصلات تسليم مطابقة واحترافية.",
          iconName: "Receipt",
          badge: "طباعة احترافية و PDF",
          points: [
            { title: "نماذج قابلة للتخصيص", desc: "إضافة شعارك، معلوماتك وشروط البيع." },
            { title: "طباعة A4, A5 ووصل", desc: "متوافق مع كل أنواع الطابعات الحرارية والفرعية." },
            { title: "تصدير PDF و Excel", desc: "إرسال الفواتير مباشرة عبر الواتساب أو البريد." },
            { title: "حساب التخفيضات والرسوم", desc: "حساب تلقائي لنسب التخفيض والضرائب." }
          ]
        },
        bilan: {
          title: "الحصيلة المالية وحساب الأرباح",
          subtitle: "شاهد هامش ربحك الصافي وافهم مربحية تجارتك.",
          iconName: "PieChart",
          badge: "حساب الهامش الصافي",
          points: [
            { title: "حساب تلقائي للهامش", desc: "اعرف بالضبط كم تربح في كل منتج." },
            { title: "تقارير يومية وشهرية", desc: "مخططات بيانية واضحة لتطور النشاط." },
            { title: "تحليل المنتجات الأكثر مبيعاً", desc: "معرفة المنتجات الأكثر ربحية ومبيعا." },
            { title: "إغلاق الصندوق Z", desc: "توليد تقرير النهائي للصندوق في نهاية اليوم." }
          ]
        },
        clients: {
          title: "سجل الزبائن ومتابعة الديون (الكرني)",
          subtitle: "تابع ديون الزبائن وسجل المقبوضات والموردين.",
          iconName: "Users",
          badge: "إدارة المستحقات والديون",
          points: [
            { title: "متابعة ديون الزبائن (الكرني)", desc: "الاطلاع على الرصيد المستحق وسجل كل زبون." },
            { title: "تسجيل الدفعات والتسديدات", desc: "تسجيل الدفعات الجزئية والمستحقات." },
            { title: "سجل المشتريات السابق", desc: "الوصول للفواتير القديمة بنقرة واحدة." },
            { title: "إدارة الموردين", desc: "متابعة الطلبيات والديون لدى الموردين." }
          ]
        },
        employes: {
          title: "إدارة العمال وتسجيل الحضور",
          subtitle: "تحكم في صلاحيات مستخدمي الصندوق وتسجيل الحضور.",
          iconName: "UserCheck",
          badge: "الأمان وصلاحيات الوصول",
          points: [
            { title: "صلاحيات حسب الدور", desc: "تحديد العمليات المسموحة (مثل منع إلغاء البيع)." },
            { title: "تسجيل الحضور والأجور", desc: "متابعة الحضور، التأخرات وحساب الراتب." },
            { title: "تتبع المبيعات حسب العامل", desc: "معرفة العامل الذي أجرى كل عملية بيع." },
            { title: "أمان بكلمات السر", desc: "كل عامل يملك حسابه الخاص المحمي." }
          ]
        }
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
      badge: "💾 نسخة للكمبيوتر Windows — ملف .EXE",
      title: "حمل Stock Pro ",
      titleHighlight: "مجاناً الآن.",
      subtitle: "تثبيت سهل في دقيقة واحدة. النسخة الكاملة جاهزة للاستخدام. بدون تسجيل.",
      cardTitle: "Stock Pro v1.0.0 الاحترافي",
      cardVersion: "متوافق مع Windows 7, 10 & 11 (32/64 bit)",
      specs: [
        { label: "حجم الملف", value: "485.2 ميغابايت (.exe)" },
        { label: "الإصدار", value: "v1.0.0 — النسخة الكاملة" },
        { label: "الإنترنت مطلوب", value: "لا (يعمل بدون إنترنت)" },
        { label: "اللغات", value: "العربية / Français" }
      ],
      ctaBtn: "تحميل Stock Pro الآن",
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
    sectors: {
      badge: "🏪 مصمم خصيصاً لمجال تجارتك",
      title: "يتوافق تماماً مع ",
      titleHighlight: "نشاطك التجاري.",
      subtitle: "تم إعداد Stock Pro ليلبي المتطلبات الخاصة لكل مهنة وتجارة في الجزائر.",
      items: [
        {
          title: "السوبرماركت والمواد الغذائية",
          desc: "تسجيل فائق السرعة، وزن تلقائي، قراءة الباركود وتتبع تواريخ انتهاء الصلاحية.",
          icon: "ShoppingBag",
          color: "emerald",
          tag: "صندوق سريع"
        },
        {
          title: "محلات الملابس والأحذية",
          desc: "إدارة المقاسات، الألوان، التشكيلات والطباعة المخصصة للملصقات.",
          icon: "Shirt",
          color: "indigo",
          tag: "المقاسات والألوان"
        },
        {
          title: "الهواتف والإلكترونيات",
          desc: "متابعة أرقام IMEI، ضمان القطع، الأكسسوارات وخدمات الصيانة.",
          icon: "Smartphone",
          color: "cyan",
          tag: "تتبع IMEI والضمان"
        },
        {
          title: "مستحضرات التجميل وشبه الصيدلة",
          desc: "إدارة آلاف المنتجات، العروض المجمعة، التخفيضات وتنبيهات المخزون.",
          icon: "Sparkles",
          color: "rose",
          tag: "منتجات متعددة"
        },
        {
          title: "العقاقير ومواد البناء (Quincaillerie)",
          desc: "البيع بالمتر، الكيلوغرام أو القطعة، أسعار الجملة ومتابعة دقيقة للديون.",
          icon: "Hammer",
          color: "amber",
          tag: "بيع المخزن والجملة"
        },
        {
          title: "تجار الجملة ومستودعات المخزون",
          desc: "وصل التسليم (BL)، الفواتير الأولية، إدارة المستودعات المتعددة وشبكات الموزعين.",
          icon: "Warehouse",
          color: "violet",
          tag: "مستودعات متعددة و BL"
        }
      ]
    },
    testimonials: {
      badge: "⭐ آراء وشهادات التجار",
      title: "ماذا يقول التجار ",
      titleHighlight: "في الجزائر.",
      subtitle: "اكتشف تجارب حقيقية من مستخدمينا عبر مختلف ولايات الوطن.",
      items: [
        {
          name: "مصطفى ب.",
          role: "صاحب سوبرماركت",
          city: "الجزائر العاصمة (باب الزوار)",
          text: "Khoya Stock Pro habalni f lkaisse! Kont n'galer m3a les tickets, dorka fi 2 secondes n'imprimer ticket w kolsh rgle. Ma n'bedlou b walou!",
          rating: 5
        },
        {
          name: "كمال ك.",
          role: "محل ملابس رجالية",
          city: "وهران (وسط المدينة)",
          text: "Khdemt bih f magasin ta3 les vêtements, f l-inventaire raye7ni 100%. Douchette direct w le bilan ykhorg clair net sans aucune erreur.",
          rating: 5
        },
        {
          name: "إبراهيم م.",
          role: "تاجر جملة قطع ومواد",
          city: "سطيف (المنطقة الصناعية)",
          text: "Surtout lkrnish m3a les clients w les fournisseurs, rani n'suivi kolsh bla ma nnsa 1 Dinar. Top niveau, rabi ybarek!",
          rating: 5
        },
        {
          name: "ياسين ت.",
          role: "محل الهواتف والإعلام الآلي",
          city: "قسنطينة (المدينة الجديدة)",
          text: "Support ta3hom top! Instalawehli f PC ta3i f 10 minutes par Anydesk w bdayt nkhdem f nafs l-yowm. Service rapide w pro.",
          rating: 5
        }
      ]
    },
    stats: {
      items: [
        {
          value: "+3 400",
          label: "محل مجهز",
          sublabel: "محلات ومتاجر نشطة في الجزائر",
          icon: "Store"
        },
        {
          value: "58",
          label: "ولاية مغطاة",
          sublabel: "حضور وتثبيت عبر كامل التراب الوطني",
          icon: "MapPin"
        },
        {
          value: "+12M",
          label: "وصل صادرة",
          sublabel: "معاملات وفواتير تم إنشاؤها بأمان كامل",
          icon: "Receipt"
        },
        {
          value: "99.9%",
          label: "رضا التجار",
          sublabel: "متوسط تقييم التجار والزبائن للبرنامج",
          icon: "Smile"
        }
      ]
    },
    whatsappWidget: {
      status: "متصل • رد خلال دقيقتين",
      header: "تحتاج مساعدة أو عرض توضيحي؟",
      subtitle: "فريقنا التقني متواجد عبر واتساب على الرقم 0668537167",
      btnText: "تحدث معنا على واتساب"
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      tagline: "البرنامج الاحترافي المرجعي للتجار والشركات في الجزائر."
    }
  },
};
