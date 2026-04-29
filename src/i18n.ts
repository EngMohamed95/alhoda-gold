import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services",
        collection2026: "Collection 2026",
        search: "Verify",
        contact: "Contact",
        login: "Login",
        dashboard: "Dashboard"
      },
      hero: {
        title: "Al Hoda Gold Trading",
        subtitle: "26 Years of Leadership in Jewelry and Gold Bullion",
        desc: "Luxurious designs, reliable bullions, and Egyptian craftsmanship that rivals global brands.",
        explore: "Explore Collections",
        contact: "Contact Us Now",
        collections: "Featured Collections",
        collectionsSubtitle: "Masterpieces Crafted for Eternity",
        col1: "Royal Heritage",
        col2: "Modern Elegance",
        col3: "Pure Bullion",
        marquee1: "PREMIUM QUALITY",
        marquee2: "24K PURE GOLD",
        marquee3: "CERTIFIED BULLION",
        stats: "Excellence in Numbers",
        statsYears: "Years",
        statsClients: "Happy Clients",
        statsProducts: "Unique Pieces",
        statsBranches: "Branches",
        craftsmanship: "Authentic Craftsmanship",
        craftsmanshipDesc: "Every piece tells a story of passion and meticulous attention to detail."
      },
      about: {
        title: "Who We Are",
        subtitle: "Experience that Speaks Gold",
        desc1: "Al Hoda Gold Trading Company was founded on a clear vision: to provide golden products that combine quality, trust, and beauty. Since our inception, our singular goal has been finding our place among the leading companies in Egypt for manufacturing gold jewelry and trading bullions.",
        desc2: "We rely on a team of the most skilled craftsmen and designers with vast experience over dealing with gold and jewelry. We use the latest manufacturing and finishing technologies to ensure our clients receive elegant products suitable for refined tastes and all occasions.",
        vision: "Our Vision",
        visionDesc: "To be one of the most prominent Egyptian brands in the gold industry, reaching a status that competes with major global brands, while preserving the Egyptian identity in quality and craftsmanship.",
        mission: "Our Mission",
        missionDesc: "We are committed to providing jewelry and gold bullions of the highest quality standards, through elegant designs, reliable materials, and professional customer service, granting each client a secure and exceptional purchasing experience worthy of the value of gold.",
        whyUs: "Why Choose Al Hoda?",
        yearsTitle: "Over 26 Years of Experience",
        yearsDesc: "Long experience in gold making giving trust to every transaction.",
        qualityTitle: "High Manufacturing Quality",
        qualityDesc: "Finest materials and newest ways.",
        designTitle: "Authentic & Modern Models",
        designDesc: "Egyptian taste mixed with world modernity."
      },
      services: {
        title: "Our Services & Products",
        jewelry: {
          title: "Gold Jewelry Manufacturing",
          subtitle: "Luxurious Designs... Executed with Mastery",
          desc: "Al Hoda offers a wide range of gold jewelry carefully designed to suit different tastes, from elegant classic designs to modern contemporary models. We care about minute details in every piece, from choosing the design to final finishing, to present jewelry reflecting luxury.",
          itemsTitle: "Our Products Include",
          setsTitle: "Luxury Gold Sets",
          setsDesc: "Elegant designs for special occasions, weddings, and premium gifts.",
          dailyTitle: "Chains, Bracelets & Rings",
          dailyDesc: "Daily contemporary pieces for various tastes.",
          customTitle: "Custom Special Designs",
          customDesc: "We help you transform your idea into a unique personal gold piece.",
          weddingTitle: "Wedding Jewelry",
          weddingDesc: "Refined choices for brides combining beauty and value."
        },
        bullion: {
          title: "Gold Bullions",
          subtitle: "A Secure Investment with Real Value",
          desc: "Gold is not just an adornment, it is one of the most important ways to preserve value and invest. Al Hoda provides golden bullions with reliable specifications and high quality, suitable for investors and individuals looking to acquire gold as a safe asset."
        },
        trading: {
          title: "Gold Trading",
          subtitle: "Trust Built on Years of Experience",
          desc: "Through our long experience in the Egyptian gold market, Al Hoda offers professional gold trading services, committing to transparency, accuracy, and credibility in dealing."
        }
      },
      search: {
        title: "Verify Your Bullion",
        subtitle: "Your secure investment verified through our database",
        placeholder: "Enter Bullion Serial Number...",
        button: "Verify Now",
        scanBtn: "Scan Image",
        results: {
          found: "Bullion Verified",
          weight: "Weight",
          purity: "Purity",
          issueDate: "Issue Date",
          notFound: "Bullion serial not found in our records. Please check the number and try again.",
          invalid: "Please enter a valid serial number.",
        }
      },
      dashboard: {
        title: "Admin Dashboard",
        addBullion: "+ Add Bullion",
        serial: "Serial Number",
        weight: "Weight (g)",
        purity: "Purity (e.g., 999.9)",
        date: "Issue Date",
        save: "Save Bullion",
        delete: "Delete",
        success: "Bullion added successfully!",
        logout: "Logout",
        users: "Users",
        addUser: "+ Add User",
        username: "Username",
        role: "Role",
        userAdded: "User added successfully!"
      },
      login: {
        title: "Admin Login",
        username: "Username",
        password: "Password",
        button: "Login",
        error: "Invalid credentials. Note: use 'admin' / 'admin123'"
      },
      contact: {
        title: "Contact Us",
        desc: "We at Al Hoda Gold Trading welcome your inquiries and requests regarding jewelry and gold bullions. For inquiries about products, prices, custom designs, or bullion requests, you can contact us directly.",
        info: "Experience, Trust, and Luxury in the World of Gold.",
        callText: "Call Us Now",
        waText: "Message on WhatsApp",
        visitText: "Visit Our Headquarters",
        startJourney: "Start your journey with gold in confidence",
        journeyDesc: "Whether you are looking for a special jewelry piece, a luxurious wedding set, a custom design, or a gold bullion for investment, Al Hoda's team is ready to assist you."
      },
      footer: {
        tagline: "Start your journey with gold in confidence.",
        contact: "Contact",
        call: "Call Us Now",
        whatsapp: "Message on WhatsApp",
        visit: "Visit Our Headquarters",
        rights: "© 2026 Al Hoda Gold Trading. All Rights Reserved."
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        collection2026: "كولكشن 2026",
        search: "التحقق",
        contact: "تواصل معنا",
        login: "تسجيل الدخول",
        dashboard: "لوحة التحكم"
      },
      hero: {
        title: "الهدى لتجارة الذهب",
        subtitle: "26 عامًا من الريادة في صناعة المجوهرات والسبائك الذهبية",
        desc: "تصميمات فاخرة، سبائك موثوقة، وحرفية مصرية تضاهي العلامات العالمية.",
        explore: "اكتشف مجموعاتنا",
        contact: "تواصل معنا الآن",
        collections: "مجموعات فاخرة",
        collectionsSubtitle: "تحف فنية صيغت لتدوم إلى الأبد",
        col1: "التراث الملكي",
        col2: "الأناقة العصرية",
        col3: "سبائك صافية",
        marquee1: "جودة استثنائية",
        marquee2: "ذهب خالص عيار 24",
        marquee3: "سبائك معتمدة",
        stats: "التميز في أرقام",
        statsYears: "عاماً من الخبرة",
        statsClients: "عميل سعيد",
        statsProducts: "قطعة فريدة",
        statsBranches: "فروعنا",
        craftsmanship: "حرفية أصيلة",
        craftsmanshipDesc: "كل قطعة تروي قصة شغف واهتمام دقيق بالتفاصيل."
      },
      about: {
        title: "من نحن",
        subtitle: "خبرة تتحدث بالذهب",
        desc1: "تأسست شركة الهدى لتجارة الذهب على رؤية واضحة: تقديم منتجات ذهبية تجمع بين الجودة، الثقة، والجمال. ومنذ انطلاقنا، وضعنا أمامنا هدفًا واحدًا، وهو أن نكون من الشركات الرائدة في مصر في تصنيع المجوهرات الذهبية وتجارة السبائك.",
        desc2: "نعتمد على فريق من أمهر الحرفيين والمصممين، أصحاب خبرة طويلة في التعامل مع الذهب والمجوهرات، مع استخدام أحدث التقنيات في التصنيع والتشطيب، لنضمن لعملائنا منتجات راقية تناسب مختلف الأذواق والمناسبات.",
        vision: "رؤيتنا",
        visionDesc: "أن تكون شركة الهدى لتجارة الذهب واحدة من أبرز العلامات المصرية في صناعة وتجارة الذهب، وأن نصل بمنتجاتنا إلى مكانة تنافس كبرى العلامات العالمية، مع الحفاظ على الهوية المصرية في الجودة والحرفية.",
        mission: "رسالتنا",
        missionDesc: "نلتزم بتقديم مجوهرات وسبائك ذهبية بأعلى معايير الجودة، من خلال تصميمات راقية، خامات موثوقة، وخدمة عملاء احترافية، لنمنح كل عميل تجربة شراء آمنة ومميزة تليق بقيمة الذهب.",
        whyUs: "لماذا تختار شركة الهدى؟",
        yearsTitle: "أكثر من 26 عامًا من الخبرة",
        yearsDesc: "خبرة طويلة في صناعة وتجارة الذهب والمجوهرات، تمنح عملاءنا الثقة في كل تعامل.",
        qualityTitle: "جودة تصنيع عالية",
        qualityDesc: "نستخدم أفضل الخامات وأحدث أساليب التصنيع للوصول إلى أعلى مستوى من الإتقان.",
        designTitle: "تصميمات تجمع بين الأصالة والحداثة",
        designDesc: "نقدم تصميمات مستوحاة من الذوق المصري الأصيل، مع لمسات عصرية تناسب أحدث الاتجاهات العالمية."
      },
      services: {
        title: "خدماتنا ومنتجاتنا",
        jewelry: {
          title: "صناعة المجوهرات الذهبية",
          subtitle: "تصميمات فاخرة… وتنفيذ بإتقان",
          desc: "تقدم شركة الهدى مجموعة واسعة من المشغولات الذهبية المصممة بعناية لتناسب مختلف الأذواق، من التصميمات الكلاسيكية الراقية إلى الموديلات العصرية الحديثة. نحرص في كل قطعة على التفاصيل الدقيقة، بداية من اختيار التصميم وحتى مرحلة التشطيب النهائي، لنقدم مجوهرات تعبر عن الفخامة والجودة.",
          itemsTitle: "تشمل منتجاتنا:",
          setsTitle: "أطقم ذهب فاخرة",
          setsDesc: "تصميمات أنيقة للمناسبات الخاصة، الشبكات، والهدايا الراقية.",
          dailyTitle: "سلاسل وانسيالات وخواتم",
          dailyDesc: "قطع يومية وعصرية تناسب مختلف الأذواق.",
          customTitle: "تصميمات خاصة حسب الطلب",
          customDesc: "نساعدك في تحويل فكرتك إلى قطعة ذهبية فريدة تحمل طابعك الشخصي.",
          weddingTitle: "مشغولات ذهبية للمناسبات والزفاف",
          weddingDesc: "اختيارات راقية للعروس تجمع بين الجمال والقيمة."
        },
        bullion: {
          title: "السبائك الذهبية",
          subtitle: "استثمار آمن بقيمة حقيقية",
          desc: "الذهب ليس مجرد زينة، بل هو واحد من أهم وسائل حفظ القيمة والاستثمار. لذلك توفر شركة الهدى سبائك ذهبية بمواصفات موثوقة وجودة عالية، لتناسب المستثمرين والأفراد الراغبين في اقتناء الذهب كأصل آمن."
        },
        trading: {
          title: "تجارة الذهب",
          subtitle: "ثقة مبنية على سنوات من الخبرة",
          desc: "من خلال خبرتنا الطويلة في سوق الذهب المصري، تقدم شركة الهدى خدمات تجارة الذهب باحترافية عالية، مع الالتزام بالشفافية، الدقة، والمصداقية في التعامل."
        }
      },
      search: {
        title: "التحقق من السبائك",
        subtitle: "افحص بيانات سبيكتك عبر قاعدة بياناتنا لضمان استثمارك",
        placeholder: "أدخل رقم السبيكة...",
        button: "تحقق الآن",
        scanBtn: "فحص بالصورة",
        results: {
          found: "تم التحقق بنجاح",
          weight: "الوزن",
          purity: "العيار / النقاوة",
          issueDate: "تاريخ الإصدار",
          notFound: "رقم السبيكة غير مسجل لدينا، يرجى التأكد من الرقم والمحاولة مرة أخرى.",
          invalid: "يرجى إدخال رقم سبيكة صحيح.",
        }
      },
      dashboard: {
        title: "لوحة تحكم الإدارة",
        addBullion: "+ إضافة سبيكة",
        serial: "رقم السبيكة",
        weight: "الوزن (جرام)",
        purity: "النقاوة (مثال: 999.9)",
        date: "تاريخ الإصدار",
        save: "حفظ السبيكة",
        delete: "حذف",
        success: "تمت الإضافة بنجاح!",
        logout: "تسجيل الخروج",
        users: "المستخدمين",
        addUser: "+ إضافة مستخدم",
        username: "اسم المستخدم",
        role: "الصلاحية",
        userAdded: "تم إضافة المستخدم بنجاح!"
      },
      login: {
        title: "تسجيل دخول الإدارة",
        username: "اسم المستخدم",
        password: "كلمة المرور",
        button: "دخول",
        error: "بيانات الدخول غير صحيحة. استخدم 'admin' / 'admin123'"
      },
      contact: {
        title: "تواصل معنا",
        desc: "يسعدنا في شركة الهدى لتجارة الذهب استقبال استفساراتكم وطلباتكم الخاصة بالمجوهرات والسبائك الذهبية. للاستفسار عن المنتجات، الأسعار، التصميمات الخاصة، أو طلبات السبائك، يمكنكم التواصل معنا مباشرة عبر الهاتف أو واتساب.",
        info: "شركة الهدى لتجارة الذهب.. خبرة، ثقة، وفخامة في عالم الذهب.",
        callText: "اتصل بنا الآن",
        waText: "راسلنا عبر واتساب",
        visitText: "زورونا في مقر الشركة",
        startJourney: "ابدأ رحلتك مع الذهب بثقة",
        journeyDesc: "سواء كنت تبحث عن قطعة مجوهرات مميزة، شبكة فاخرة، تصميم خاص، أو سبيكة ذهبية للاستثمار، فريق الهدى جاهز لمساعدتك."
      },
      footer: {
        tagline: "ابدأ رحلتك مع الذهب بثقة",
        contact: "تواصل معنا",
        call: "اتصل بنا الآن",
        whatsapp: "راسلنا عبر واتساب",
        visit: "زورونا في مقر الشركة",
        rights: "© 2026 شركة الهدى لتجارة الذهب. جميع الحقوق محفوظة."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
