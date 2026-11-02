(() => {
    const root = document.documentElement;
    const languageStorageKey = 'shuaib-project-lang';
    const translations = {
        ar: {
            'nav-cmd': 'محاكي CMD 🖥️',
            'nav-home': 'الرئيسية',
            'nav-models': 'نماذج الذكاء الاصطناعي',
            'nav-sheets': 'شرح Sheets',
            'nav-learning': 'الشيتات والبرمجة',
            'nav-tools': 'الأدوات التفاعلية',
            'nav-faq': 'الأسئلة الشائعة',
            'nav-more': 'المزيد من الأقسام',
            'nav-ideas': 'الأفكار والمقترحات',
            'nav-privacy': 'الخصوصية وإخلاء المسؤولية',
            'nav-pc': 'التطوير عبر الحاسوب',
            'nav-mobile': 'التطوير عبر الهاتف',
            'nav-language': 'تغيير اللغة',
            'page-index': 'مشروع شعيب | التعلم بالذكاء الاصطناعي',
            'page-ai-models': 'نماذج الذكاء الاصطناعي',
            'page-sheet-tutorial': 'طريقة إنشاء Sheet احترافي بالذكاء الاصطناعي',
            'page-pc-development': 'بيئات تطوير الحاسوب ولغات البرمجة المتقدمة',
            'page-mobile-development': 'دليل وتطوير الهاتف بالذكاء الاصطناعي',
            'page-ideas': 'شاركنا فكرتك أو مقترحك',
            'page-privacy': 'مركز الخصوصية وإخلاء المسؤولية',
            'cmd-title': 'محاكي CMD 🖥️',
            'cmd-placeholder': 'اكتب أمراً هنا...',
            'cmd-close': 'إغلاق',
            'cmd-welcome': '🇩🇿 أهلاً بك في محاكي الأوامر التفاعلي.',
            'cmd-help': 'الأوامر المتاحة: help، clear، echo، date، time، dir، whoami.',
            'cmd-unknown': '❌ أمر غير معروف. اكتب help لعرض الأوامر المتاحة.',
            'welcome-title': 'مرحباً بك في مشروعي',
            'hero_desc': 'ابدأ رحلتك في التعلم أكثر عن الذكاء الاصطناعي والبرمجة',
            'explore-btn': 'ابدأ الاستكشاف',
            'watch-video-btn': 'شاهد الفيديو',
            'dev-section-title': 'أين تريد التطوير؟',
            'ideas-title': 'شاركنا فكرتك أو مقترحك',
            'privacy-title': 'مركز الخصوصية وإخلاء المسؤولية',
            'pc-title': 'بيئات تطوير الحاسوب ولغات البرمجة المتقدمة',
            'mobile-title': 'دليل وتطوير الهاتف بالذكاء الاصطناعي',
            'sheet-title': 'طريقة إنشاء Sheet احترافي بالذكاء الاصطناعي'
        },
        en: {
            'nav-cmd': 'CMD Simulator 🖥️',
            'nav-home': 'Home',
            'nav-models': 'AI Models',
            'nav-sheets': 'Sheets Tutorial',
            'nav-learning': 'Sheets & Programming',
            'nav-tools': 'Interactive Tools',
            'nav-faq': 'FAQ',
            'nav-more': 'More sections',
            'nav-ideas': 'Ideas & Feedback',
            'nav-privacy': 'Privacy & Disclaimer',
            'nav-pc': 'PC Development',
            'nav-mobile': 'Mobile Development',
            'nav-language': 'Change language',
            'page-index': "Shuaib's Project | Learn with AI",
            'page-ai-models': 'AI Models',
            'page-sheet-tutorial': 'Create a Professional Sheet with AI',
            'page-pc-development': 'Computer Development Environments and Programming Languages',
            'page-mobile-development': 'Mobile Development with AI',
            'page-ideas': 'Share an Idea or Suggestion',
            'page-privacy': 'Privacy and Disclaimer',
            'cmd-title': 'CMD Simulator 🖥️',
            'cmd-placeholder': 'Enter a command...',
            'cmd-close': 'Close',
            'cmd-welcome': '🇩🇿 Welcome to the interactive command simulator.',
            'cmd-help': 'Available commands: help, clear, echo, date, time, dir, whoami.',
            'cmd-unknown': '❌ Unknown command. Type help to see available commands.',
            'welcome-title': 'Welcome to my project',
            'hero_desc': 'Explore leading AI assistants and learn practical ways to use artificial intelligence to build useful, well-organized spreadsheets.',
            'explore-btn': 'Start Exploring',
            'watch-video-btn': 'Watch Video',
            'dev-section-title': 'Where do you want to develop?',
            'ideas-title': 'Share an Idea or Suggestion',
            'privacy-title': 'Privacy and Disclaimer',
            'pc-title': 'Computer Development Environments and Programming Languages',
            'mobile-title': 'Mobile Development with AI',
            'sheet-title': 'Create a Professional Sheet with AI'
        },
        fr: {
            'nav-cmd': 'Simulateur CMD 🖥️',
            'nav-home': 'Accueil',
            'nav-models': 'Modèles IA',
            'nav-sheets': 'Tutoriel Sheets',
            'nav-learning': 'Sheets et programmation',
            'nav-tools': 'Outils interactifs',
            'nav-faq': 'FAQ',
            'nav-more': 'Plus de rubriques',
            'nav-ideas': 'Idées et suggestions',
            'nav-privacy': 'Confidentialité et avertissement',
            'nav-pc': 'Développement informatique',
            'nav-mobile': 'Développement mobile',
            'nav-language': 'Changer de langue',
            'page-index': 'Projet de Shuaib | Apprendre avec l’IA',
            'page-ai-models': 'Modèles d’intelligence artificielle',
            'page-sheet-tutorial': 'Créer une feuille professionnelle avec l’IA',
            'page-pc-development': 'Environnements de développement informatique',
            'page-mobile-development': 'Développement mobile avec l’IA',
            'page-ideas': 'Partager une idée ou une suggestion',
            'page-privacy': 'Confidentialité et avertissement',
            'cmd-title': 'Simulateur CMD 🖥️',
            'cmd-placeholder': 'Entrez une commande...',
            'cmd-close': 'Fermer',
            'cmd-welcome': '🇩🇿 Bienvenue dans le simulateur de commandes interactif.',
            'cmd-help': 'Commandes disponibles : help, clear, echo, date, time, dir, whoami.',
            'cmd-unknown': '❌ Commande inconnue. Tapez help pour afficher les commandes.',
            'welcome-title': 'Bienvenue dans mon projet',
            'hero_desc': 'Explorez les principaux assistants IA et découvrez des moyens pratiques d’utiliser l’intelligence artificielle pour créer des feuilles de calcul utiles et bien organisées.',
            'explore-btn': 'Commencer l’exploration',
            'watch-video-btn': 'Regarder la vidéo',
            'dev-section-title': 'Où voulez-vous développer ?',
            'ideas-title': 'Partager une idée ou une suggestion',
            'privacy-title': 'Confidentialité et avertissement',
            'pc-title': 'Environnements de développement informatique',
            'mobile-title': 'Développement mobile avec l’IA',
            'sheet-title': 'Créer une feuille professionnelle avec l’IA'
        }
    };

    const localizedContent = {
        'الرئيسية': { en: 'Home', fr: 'Accueil' },
        'نماذج الذكاء الاصطناعي': { en: 'AI Models', fr: 'Modèles d’intelligence artificielle' },
        'شرح Sheets': { en: 'Sheets Tutorial', fr: 'Tutoriel Sheets' },
        'مختبر البرمجة': { en: 'Programming Lab', fr: 'Laboratoire de Code' },
        'الأفكار والمقترحات': { en: 'Ideas & Feedback', fr: 'Idées et suggestions' },
        'الخصوصية وإخلاء المسؤولية': { en: 'Privacy & Disclaimer', fr: 'Confidentialité et avertissement' },
        'التطوير عبر الحاسوب': { en: 'PC Development', fr: 'Développement informatique' },
        'التطوير عبر الهاتف': { en: 'Mobile Development', fr: 'Développement mobile' },
        'التنقل الرئيسي': { en: 'Main navigation', fr: 'Navigation principale' },
        'TIK CODE DZ — الصفحة الرئيسية': { en: 'TIK CODE DZ — Home', fr: 'TIK CODE DZ — Accueil' },
        'إنهاء وضع العرض': { en: 'Exit presentation mode', fr: 'Quitter le mode présentation' },
        'الاسم': { en: 'Name', fr: 'Nom' },
        'استماع 🔊 للكود': { en: 'Listen to the code', fr: 'Écouter le code' },
        'العودة للأعلى': { en: 'Back to top', fr: 'Retour en haut' },
        'العودة إلى الأعلى': { en: 'Back to top', fr: 'Retour en haut' },
        'العربية': { en: 'Arabic', fr: 'Arabe' },
        'و': { en: 'and', fr: 'et' },
        'أو': { en: 'or', fr: 'ou' },
        'Back to top': { ar: 'العودة للأعلى', en: 'Back to top', fr: 'Retour en haut' },
        'Shuaib\'s Project': { ar: 'مشروع شعيب', en: "Shuaib's Project", fr: 'Projet de Shuaib' },
        'Continue with Facebook': { ar: 'تابع باستخدام Facebook', en: 'Continue with Facebook', fr: 'Continuer avec Facebook' },
        'Continue with GitHub': { ar: 'تابع باستخدام GitHub', en: 'Continue with GitHub', fr: 'Continuer avec GitHub' },
        'English': { ar: 'الإنجليزية', en: 'English', fr: 'Anglais' },
        'Python virtual environment': { ar: 'بيئة Python افتراضية', en: 'Python virtual environment', fr: 'Environnement virtuel Python' },
        'Privacy Policy & Legal Disclaimer': {
            ar: 'سياسة الخصوصية وإخلاء المسؤولية',
            en: 'Privacy Policy & Legal Disclaimer',
            fr: 'Politique de confidentialité et avertissement'
        },
        'Privacy & Disclaimer': {
            ar: 'الخصوصية وإخلاء المسؤولية',
            en: 'Privacy & Disclaimer',
            fr: 'Confidentialité et avertissement'
        },
        'PC Development': { ar: 'التطوير عبر الحاسوب', en: 'PC Development', fr: 'Développement informatique' },
        'Mobile Development': { ar: 'التطوير عبر الهاتف', en: 'Mobile Development', fr: 'Développement mobile' },
        '(Dr. M\'hamed Boukhobza Institute)': {
            ar: '(مؤسسة الدكتور امحمد بوخبزة)',
            en: "(Dr. M'hamed Boukhobza Institute)",
            fr: "(Institut du Dr M'hamed Boukhobza)"
        },
        'Terminal · Python': { ar: 'الطرفية · Python', en: 'Terminal · Python', fr: 'Terminal · Python' },
        'Close sign-in dialog': { ar: 'إغلاق نافذة تسجيل الدخول', en: 'Close sign-in dialog', fr: 'Fermer la fenêtre de connexion' },
        'Authentication mode': { ar: 'طريقة المصادقة', en: 'Authentication mode', fr: 'Mode d’authentification' },
        'Technology and AI logo': { ar: 'شعار التقنية والذكاء الاصطناعي', en: 'Technology and AI logo', fr: 'Logo de technologie et d’intelligence artificielle' },
        'Project features': { ar: 'مميزات المشروع', en: 'Project features', fr: 'Fonctionnalités du projet' },
        'Share this project': { ar: 'مشاركة المشروع', en: 'Share this project', fr: 'Partager le projet' },
        'Close privacy policy': { ar: 'إغلاق سياسة الخصوصية', en: 'Close privacy policy', fr: 'Fermer la politique de confidentialité' },
        'Dismiss announcement': { ar: 'إغلاق الإعلان', en: 'Dismiss announcement', fr: 'Fermer l’annonce' },
        'Search and filter AI models': { ar: 'البحث عن نماذج الذكاء الاصطناعي وتصفيتها', en: 'Search and filter AI models', fr: 'Rechercher et filtrer les modèles d’IA' },
        'Search by model or capability...': {
            ar: 'ابحث حسب النموذج أو الإمكانية...',
            en: 'Search by model or capability...',
            fr: 'Rechercher par modèle ou fonctionnalité...'
        },
        'AI model cards': { ar: 'بطاقات نماذج الذكاء الاصطناعي', en: 'AI model cards', fr: 'Cartes des modèles d’IA' },
        'OpenAI logo': { ar: 'شعار OpenAI', en: 'OpenAI logo', fr: 'Logo OpenAI' },
        'Google Gemini multicolor logo': { ar: 'شعار Google Gemini متعدد الألوان', en: 'Google Gemini multicolor logo', fr: 'Logo multicolore Google Gemini' },
        'Claude logo': { ar: 'شعار Claude', en: 'Claude logo', fr: 'Logo Claude' },
        'Developer social profiles': { ar: 'حسابات المطور على مواقع التواصل', en: 'Developer social profiles', fr: 'Profils sociaux du développeur' },
        'Instagram - opens in a new tab': {
            ar: 'Instagram - يفتح في علامة تبويب جديدة',
            en: 'Instagram - opens in a new tab',
            fr: 'Instagram - s’ouvre dans un nouvel onglet'
        },
        'GitHub - opens in a new tab': {
            ar: 'GitHub - يفتح في علامة تبويب جديدة',
            en: 'GitHub - opens in a new tab',
            fr: 'GitHub - s’ouvre dans un nouvel onglet'
        },
        'Share this page': { ar: 'مشاركة الصفحة', en: 'Share this page', fr: 'Partager cette page' },
        'Project pages': { ar: 'صفحات المشروع', en: 'Project pages', fr: 'Pages du projet' },
        'Privacy notice': { ar: 'إشعار الخصوصية', en: 'Privacy notice', fr: 'Avis de confidentialité' },
        'Google Apps Script example': {
            ar: 'مثال Google Apps Script',
            en: 'Google Apps Script example',
            fr: 'Exemple Google Apps Script'
        },
        'تم استلام رأيك بنجاح! شكراً لك من القلب على دعمك ومساهمتك القيمة.': {
            en: 'Your feedback was received successfully! Thank you sincerely for your support and valuable contribution.',
            fr: 'Votre avis a bien été reçu ! Merci sincèrement pour votre soutien et votre précieuse contribution.'
        },
        'التبديل إلى الوضع الفاتح': { en: 'Switch to light mode', fr: 'Passer au mode clair' },
        'التبديل إلى الوضع الداكن': { en: 'Switch to dark mode', fr: 'Passer au mode sombre' },
        'فتح القائمة الجانبية': { en: 'Open navigation menu', fr: 'Ouvrir le menu de navigation' },
        'إغلاق القائمة الجانبية': { en: 'Close navigation menu', fr: 'Fermer le menu de navigation' },
        'روابط أقسام الصفحة': { en: 'Page section links', fr: 'Liens des sections de la page' },
        'إغلاق الإعدادات': { en: 'Close settings', fr: 'Fermer les paramètres' },
        'شعار TIK CODE DZ الاحترافي بثعلب الفنك الرقمي': {
            en: 'Professional TIK CODE DZ logo featuring a digital fennec fox',
            fr: 'Logo professionnel TIK CODE DZ représentant un fennec numérique'
        },
        'اختر نوع الجهاز': { en: 'Choose a device type', fr: 'Choisissez un type d’appareil' },
        'اختر طريقة التعرف على النظام': { en: 'Choose how to detect your system', fr: 'Choisissez une méthode de détection du système' },
        'مثال: حلّل مصروفاتي الشهرية وحدد أكبر فئات الإنفاق.': {
            en: 'Example: Analyze my monthly expenses and identify the largest spending categories.',
            fr: 'Exemple : analysez mes dépenses mensuelles et identifiez les principales catégories de dépenses.'
        },
        'مثال: حلّل بيانات المبيعات الشهرية وحدد أفضل المنتجات.': {
            en: 'Example: Analyze monthly sales data and identify the top products.',
            fr: 'Exemple : analysez les ventes mensuelles et identifiez les meilleurs produits.'
        },
        'أمثلة جاهزة': { en: 'Ready-made examples', fr: 'Exemples prêts à l’emploi' },
        'عناصر التحكم بالصوت': { en: 'Audio controls', fr: 'Commandes audio' },
        'اختر لغة البرمجة': { en: 'Choose a programming language', fr: 'Choisissez un langage de programmation' },
        'شعار Python': { en: 'Python logo', fr: 'Logo Python' },
        'محاكي مخرجات لغة البرمجة': { en: 'Programming language output simulator', fr: 'Simulateur de sortie du langage de programmation' },
        'الصق نصًا أو بيانات تجريبية...': { en: 'Paste text or sample data...', fr: 'Collez du texte ou des données d’exemple...' },
        'اختر شخصية المساعد': { en: 'Choose an assistant persona', fr: 'Choisissez un profil d’assistant' },
        'سجل المحادثة': { en: 'Conversation history', fr: 'Historique de la conversation' },
        'اكتب سؤالك هنا... (Enter للإرسال، Shift+Enter لسطر جديد)': {
            en: 'Type your question here... (Enter to send, Shift+Enter for a new line)',
            fr: 'Saisissez votre question... (Entrée pour envoyer, Maj+Entrée pour une nouvelle ligne)'
        },
        'اكتب فكرتك هنا...': { en: 'Write your idea here...', fr: 'Écrivez votre idée ici...' },
        'صفحات الموقع': { en: 'Site pages', fr: 'Pages du site' },
        'إغلاق معلومات المطور': { en: 'Close developer information', fr: 'Fermer les informations du développeur' },
        'الحسابات الرسمية للمطور': { en: 'Developer’s official accounts', fr: 'Comptes officiels du développeur' },
        'رمز QR لرابط الصفحة الرئيسية الحالية': { en: 'QR code for the current homepage link', fr: 'Code QR du lien de la page d’accueil actuelle' },
        'رمز QR لرابط صفحة دليل Sheets الحالية': { en: 'QR code for the current Sheets guide link', fr: 'Code QR du lien du guide Sheets actuel' },
        'روابط إضافية': { en: 'Additional links', fr: 'Liens supplémentaires' },
        'إغلاق التنبيه': { en: 'Close notification', fr: 'Fermer la notification' },
        'فتح قائمة الأقسام': { en: 'Open sections menu', fr: 'Ouvrir le menu des sections' },
        'إغلاق نافذة تسجيل الدخول': { en: 'Close sign-in dialog', fr: 'Fermer la fenêtre de connexion' },
        'نوع تسجيل الدخول': { en: 'Sign-in type', fr: 'Type de connexion' },
        'فيديو تعريفي بالذكاء الاصطناعي': { en: 'AI introduction video', fr: 'Vidéo de présentation de l’IA' },
        'ما هو الذكاء الاصطناعي؟ | فِهموجرافيك ١': {
            en: 'What is artificial intelligence? | Infographic 1',
            fr: 'Qu’est-ce que l’intelligence artificielle ? | Infographie 1'
        },
        'مشاركة الصفحة': { en: 'Share this page', fr: 'Partager cette page' },
        'إغلاق سياسة الخصوصية': { en: 'Close privacy policy', fr: 'Fermer la politique de confidentialité' },
        'رسالة ترحيب وشكر': { en: 'Welcome and thank-you message', fr: 'Message de bienvenue et de remerciement' },
        'إغلاق إشعار النجاح': { en: 'Close success notification', fr: 'Fermer la notification de réussite' },
        'روابط سريعة': { en: 'Quick links', fr: 'Liens rapides' },
        'تقديم الأفكار والمقترحات': { en: 'Send an idea or suggestion', fr: 'Envoyer une idée ou une suggestion' },
        'تسجيل الدخول / إنشاء حساب': { en: 'Sign in / Create account', fr: 'Connexion / Créer un compte' },
        'تسجيل الدخول': { en: 'Sign in', fr: 'Se connecter' },
        'مرحبًا بك — اختر طريقة المتابعة.': { en: 'Welcome — choose how to continue.', fr: 'Bienvenue — choisissez comment continuer.' },
        'إنشاء حساب': { en: 'Create account', fr: 'Créer un compte' },
        'البريد الإلكتروني': { en: 'Email address', fr: 'Adresse e-mail' },
        'كلمة المرور': { en: 'Password', fr: 'Mot de passe' },
        'أو تابع باستخدام': { en: 'Or continue with', fr: 'Ou continuer avec' },
        'واجهة تجريبية فقط: لا تُرسل معلوماتك ولا تُحفظ. تسجيل الدخول الحقيقي غير مفعّل.': {
            en: 'Demo interface only: your information is not sent or stored. Real sign-in is not enabled.',
            fr: 'Interface de démonstration : vos informations ne sont ni envoyées ni stockées. La connexion réelle est désactivée.'
        },
        'Find a model for your workflow and compare the practical differences.': {
            ar: 'ابحث عن نموذج يناسب طريقة عملك وقارن بين الفروق العملية.',
            fr: 'Trouvez un modèle adapté à votre méthode de travail et comparez leurs différences pratiques.'
        },
        'Dismiss': { ar: 'إغلاق', fr: 'Fermer' },
        'Demo interface only: your information is not sent or stored. Real sign-in is not enabled.': {
            ar: 'واجهة تجريبية فقط: لا تُرسل معلوماتك ولا تُحفظ. تسجيل الدخول الحقيقي غير مفعّل.',
            fr: 'Interface de démonstration uniquement : vos informations ne sont ni envoyées ni stockées. La connexion réelle est désactivée.'
        },
        'AI Models': { ar: 'نماذج الذكاء الاصطناعي', fr: 'Modèles d’intelligence artificielle' },
        'Meet three leading AI assistants. Choose a model to read a clear introduction in Arabic and English.': {
            ar: 'تعرّف على ثلاثة من أبرز مساعدي الذكاء الاصطناعي، واختر نموذجًا لقراءة مقدمة واضحة بالعربية والإنجليزية.',
            fr: 'Découvrez trois assistants IA majeurs et choisissez un modèle pour lire une présentation en arabe et en anglais.'
        },
        'Search models': { ar: 'البحث عن النماذج', fr: 'Rechercher des modèles' },
        'Filter by category': { ar: 'التصفية حسب الفئة', fr: 'Filtrer par catégorie' },
        'All categories': { ar: 'كل الفئات', fr: 'Toutes les catégories' },
        'General assistant': { ar: 'مساعد عام', fr: 'Assistant généraliste' },
        'Workspace integration': { ar: 'تكامل مساحة العمل', fr: 'Intégration à l’espace de travail' },
        'Writing and analysis': { ar: 'الكتابة والتحليل', fr: 'Rédaction et analyse' },
        '3 models shown': { ar: 'يُعرض 3 نماذج', fr: '3 modèles affichés' },
        'A conversational AI assistant for drafting, explaining, summarizing, and structuring information.': {
            ar: 'مساعد محادثة بالذكاء الاصطناعي لصياغة النصوص وشرحها وتلخيصها وتنظيم المعلومات.',
            fr: 'Un assistant conversationnel d’IA pour rédiger, expliquer, résumer et structurer des informations.'
        },
        "Google's AI assistant, with helpful capabilities in supported Google Workspace experiences.": {
            ar: 'مساعد Google للذكاء الاصطناعي، مع إمكانات مفيدة في تجارب Google Workspace المدعومة.',
            fr: 'L’assistant IA de Google, avec des fonctionnalités utiles dans les environnements Google Workspace compatibles.'
        },
        'An AI assistant suited to working with long text, analysis, writing, and code explanations.': {
            ar: 'مساعد ذكاء اصطناعي مناسب للعمل على النصوص الطويلة والتحليل والكتابة وشرح الأكواد.',
            fr: 'Un assistant IA adapté aux longs textes, à l’analyse, à la rédaction et à l’explication de code.'
        },
        'ChatGPT is a conversational assistant from OpenAI that can help draft ideas, summarize text, explain formulas, and turn requirements into structured tables. Give it a clear prompt, then review generated data and formulas before using them.': {
            ar: 'ChatGPT مساعد محادثة من OpenAI يمكنه المساعدة في صياغة الأفكار، تلخيص النصوص، شرح الصيغ، وتحويل المتطلبات إلى جداول منظمة. اكتب طلبًا واضحًا وراجع النتائج والصيغ قبل استخدامها في ملفك.',
            fr: 'ChatGPT est un assistant conversationnel d’OpenAI qui peut aider à rédiger des idées, résumer des textes, expliquer des formules et transformer des besoins en tableaux structurés. Formulez une demande claire, puis vérifiez les données et formules générées avant de les utiliser.'
        },
        "Gemini is Google's AI assistant. Its features may be available in Google Sheets through the Workspace Gemini experience, depending on your account, plan, and region. When available, open Sheets, select the Gemini feature, ask it to organize data or suggest a formula, and verify the result.": {
            ar: 'Gemini هو مساعد Google للذكاء الاصطناعي. قد تتوفر ميزاته داخل Google Sheets عبر تجربة Gemini في Workspace، وذلك بحسب نوع الحساب والخطة والمنطقة. عند توفره، افتح Sheets واختر ميزة Gemini لطلب تنظيم البيانات أو اقتراح صيغة، ثم تحقق من النتيجة.',
            fr: 'Gemini est l’assistant IA de Google. Ses fonctionnalités peuvent être disponibles dans Google Sheets via Workspace, selon votre compte, votre offre et votre région. Si l’option est disponible, ouvrez Sheets, sélectionnez Gemini et demandez-lui d’organiser les données ou de proposer une formule, puis vérifiez le résultat.'
        },
        'Claude is an assistant from Anthropic that can help analyze long text, organize information, and explain code or formulas. Describe the spreadsheet columns and desired output, then copy the result into Sheets and review it before relying on it.': {
            ar: 'Claude مساعد من Anthropic يساعد في تحليل النصوص الطويلة، تنظيم المعلومات، وشرح الأكواد والصيغ. يمكنك وصف أعمدة الجدول والنتيجة المطلوبة، ثم نسخ المخرجات إلى Sheets ومراجعتها قبل الاعتماد عليها.',
            fr: 'Claude est un assistant d’Anthropic qui peut analyser de longs textes, organiser des informations et expliquer du code ou des formules. Décrivez les colonnes du tableur et le résultat souhaité, puis copiez la réponse dans Sheets et vérifiez-la avant de l’utiliser.'
        },
        'No models match your search. Try another term or category.': {
            ar: 'لا توجد نماذج تطابق بحثك. جرّب عبارة أو فئة أخرى.',
            fr: 'Aucun modèle ne correspond à votre recherche. Essayez un autre terme ou une autre catégorie.'
        },
        'Model Guides | شرح الموديلات': { en: 'Model Guides', fr: 'Guides des modèles' },
        'Quick Comparison | مقارنة سريعة': { en: 'Quick Comparison', fr: 'Comparaison rapide' },
        'الشرح / Learn More': { en: 'Learn More', fr: 'En savoir plus' },
        'المعيار': { en: 'Criterion', fr: 'Critère' },
        'سرعة الاستجابة': { en: 'Response speed', fr: 'Vitesse de réponse' },
        'تنسيق بيانات الجداول': { en: 'Spreadsheet data formatting', fr: 'Mise en forme des données du tableur' },
        'لا تمثل أوصاف السرعة اختبارًا معياريًا؛ فالاستجابة تتغير حسب طول الطلب والخطة والاتصال.': {
            en: 'The speed descriptions are not benchmark results; response times vary with prompt length, plan, and connection.',
            fr: 'Les indications de vitesse ne sont pas des résultats de référence ; la réponse varie selon la longueur de la demande, l’offre et la connexion.'
        },
        'Ideas & Feedback': { ar: 'الأفكار والمقترحات', fr: 'Idées et suggestions' },
        'شاركنا فكرتك أو مقترحك': { en: 'Share an idea or suggestion', fr: 'Partagez une idée ou une suggestion' },
        'ما الميزة أو الشرح أو المثال الذي سيساعدك في التعلم؟ اكتب اقتراحك وسنحتفظ به محليًا في هذا المتصفح.': {
            en: 'What feature, guide, or example would help you learn? Send your suggestion; it will be stored locally in this browser.',
            fr: 'Quelle fonctionnalité, quel guide ou exemple vous aiderait à apprendre ? Saisissez votre suggestion ; elle sera conservée localement dans ce navigateur.'
        },
        'أهلاً بك! أنا شعيب، وممتن جداً لوقتك ورأيك. أفكارك ومقترحاتك هي المحرك الأساسي لتطوير هذا الموقع وتحديثه باستمرار. شكراً لمساهمتك في بناء هذه المنصة!': {
            en: 'Welcome! I’m Shuaib, and I truly appreciate your time and feedback. Your ideas and suggestions help drive the ongoing development of this website. Thank you for helping build this platform!',
            fr: 'Bienvenue ! Je suis Shuaib et je vous remercie sincèrement pour votre temps et votre avis. Vos idées et suggestions contribuent au développement continu de ce site. Merci de participer à la création de cette plateforme !'
        },
        'المقترح': { en: 'Your suggestion', fr: 'Votre suggestion' },
        'حفظ المقترح': { en: 'Save suggestion', fr: 'Enregistrer la suggestion' },
        'هذا مشروع ثابت بلا خادم خلفي؛ لا يُرسل المقترح إلى المطور. يبقى محفوظًا على هذا الجهاز فقط.': {
            en: 'This is a static project with no backend server. Your suggestion is not sent to the developer and remains stored on this device only.',
            fr: 'Ce projet statique ne possède pas de serveur. Votre suggestion n’est pas envoyée au développeur et reste enregistrée uniquement sur cet appareil.'
        },
        'مقترحات هذا المتصفح': { en: 'Suggestions in this browser', fr: 'Suggestions de ce navigateur' },
        'لا توجد مقترحات محفوظة بعد.': { en: 'No suggestions have been saved yet.', fr: 'Aucune suggestion n’a encore été enregistrée.' },
        'Privacy & Transparency': { ar: 'الخصوصية والشفافية', fr: 'Confidentialité et transparence' },
        'آخر تحديث: 31 أكتوبر 2026': { en: 'Last updated: October 31, 2026', fr: 'Dernière mise à jour : 31 octobre 2026' },
        'من نحن وإخلاء المسؤولية': { en: 'About us and disclaimer', fr: 'À propos et avertissement' },
        'هذا الموقع مشروع شخصي وتعليمي مستقل طوّره شعيب، وليس تابعًا لأي جهة أو شركة رسمية، ولا يمثلها أو تدعمه. تُذكر أسماء Google وOpenAI وAnthropic وغيرها لأغراض التعريف فقط.': {
            en: 'This is an independent personal educational project developed by Shuaib. It is not affiliated with, representative of, or endorsed by any official organization or company. Google, OpenAI, Anthropic, and other names are mentioned for identification purposes only.',
            fr: 'Ce site est un projet éducatif personnel et indépendant développé par Shuaib. Il n’est affilié à aucune organisation ni entreprise officielle, ne les représente pas et n’est pas approuvé par elles. Google, OpenAI, Anthropic et les autres noms sont cités à titre d’identification uniquement.'
        },
        'ما الذي يُعالج داخل المتصفح؟': { en: 'What is processed in your browser?', fr: 'Que traite votre navigateur ?' },
        'مدخلات مولّدات البرومبتات وأدوات التنظيف والمحاكاة تُعالج في الصفحة ولا تُرسل إلى خادم هذا الموقع.': {
            en: 'Inputs to prompt generators, cleaning tools, and simulators are processed in the page and are not sent to this website’s server.',
            fr: 'Les saisies des générateurs de prompts, outils de nettoyage et simulateurs sont traitées dans la page et ne sont pas envoyées au serveur de ce site.'
        },
        'المقترحات التي تحفظها في صفحة الأفكار تبقى في تخزين المتصفح على جهازك، ولا تُرسل إلى المطور. يمكنك حذفها من إعدادات المتصفح.': {
            en: 'Suggestions saved on the Ideas page remain in this browser’s storage on your device and are not sent to the developer. You can delete them in your browser settings.',
            fr: 'Les suggestions enregistrées sur la page Idées restent dans le stockage de ce navigateur sur votre appareil et ne sont pas envoyées au développeur. Vous pouvez les supprimer dans les paramètres du navigateur.'
        },
        'قد تحفظ بعض الصفحات تفضيلات المظهر أو الصوت أو المفضّلات محليًا. موافقة الترحيب تحفظ في sessionStorage للجلسة الحالية.': {
            en: 'Some pages may store appearance, audio, or favorites preferences locally. The welcome acknowledgement is stored in sessionStorage for the current session.',
            fr: 'Certaines pages peuvent enregistrer localement les préférences d’apparence, audio ou favoris. L’acceptation du message de bienvenue est conservée dans sessionStorage pour la session en cours.'
        },
        'نموذج تسجيل الدخول الموجود في بعض الصفحات واجهة تجريبية ولا ينفذ مصادقة حقيقية أو يرسل بياناته.': {
            en: 'The sign-in form on some pages is a demo interface; it does not perform real authentication or send its data.',
            fr: 'Le formulaire de connexion de certaines pages est une démonstration ; il n’effectue aucune authentification réelle et n’envoie pas ses données.'
        },
        'الخدمات والروابط الخارجية': { en: 'External services and links', fr: 'Services et liens externes' },
        'يستخدم الموقع Umami Cloud لقياس زيارات الصفحات وبعض التفاعلات المحددة، مثل اختيار تبويب لغة أو فتح دليل الهاتف/الحاسوب. تُرسل أسماء هذه الأحداث فقط، ولا تُرسل نصوص المقترحات أو مدخلات النماذج ضمنها. قد يتلقى مزوّد التحليلات بيانات الاتصال عند تحميل السكربت وفق سياسته.': {
            en: 'This website uses Umami Cloud to measure page visits and selected interactions, such as choosing a language or opening a phone/PC guide. Only event names are sent; suggestion text and form inputs are not included. The analytics provider may receive connection data when its script loads, as described in its policy.',
            fr: 'Ce site utilise Umami Cloud pour mesurer les visites et certaines interactions, comme le choix d’une langue ou l’ouverture d’un guide mobile/PC. Seuls les noms des événements sont envoyés ; le texte des suggestions et les saisies des formulaires ne le sont pas. Le fournisseur d’analytique peut recevoir des données de connexion au chargement du script, selon sa politique.'
        },
        'قد تستخدم الصفحات خطوطًا أو فيديو أو شعارات وروابط مستضافة لدى مزوّدين خارجيين؛ عند تحميلها أو فتحها قد يتلقى المزوّد بيانات الاتصال وفق سياسته. لا يتحكم هذا المشروع في تلك الخدمات.': {
            en: 'Pages may use fonts, videos, logos, and links hosted by external providers. When loaded or opened, a provider may receive connection data under its policy. This project does not control those services.',
            fr: 'Les pages peuvent utiliser des polices, vidéos, logos et liens hébergés par des fournisseurs externes. Lors de leur chargement ou ouverture, un fournisseur peut recevoir des données de connexion selon sa politique. Ce projet ne contrôle pas ces services.'
        },
        'أمثلة Apps Script أو أدوات API لا تتصل بخدمة خارجية تلقائيًا. إذا أعددت المثال وشغّلته بنفسك، فقد تُرسل البيانات التي تحددها ومفتاح API إلى المزوّد المذكور في المثال. لا تستخدم بيانات شخصية أو سرية، ولا تضع مفاتيحك في صفحات عامة.': {
            en: 'Apps Script examples and API tools do not connect to an external service automatically. If you configure and run an example, the data you specify and your API key may be sent to the provider named in it. Do not use personal or confidential data, or place keys in public pages.',
            fr: 'Les exemples Apps Script et les outils API ne se connectent pas automatiquement à un service externe. Si vous configurez et exécutez un exemple, les données indiquées et votre clé API peuvent être envoyées au fournisseur mentionné. N’utilisez pas de données personnelles ou confidentielles et ne placez pas de clés dans des pages publiques.'
        },
        'دقة المحتوى وشروط الاستخدام': { en: 'Content accuracy and terms of use', fr: 'Exactitude du contenu et conditions d’utilisation' },
        'المحتوى والأمثلة لأغراض تعليمية فقط، وتُقدّم دون ضمان. راجع النتائج والأوامر ومصادرها قبل استخدامها، والتزم بسياسات مؤسستك الأكاديمية وشروط الأدوات الخارجية. تتحمل مسؤولية البيانات التي تدخلها والخدمات التي تختار استخدامها.': {
            en: 'Content and examples are for educational purposes only and are provided without warranty. Review results, commands, and their sources before use, and follow your academic institution’s policies and external tools’ terms. You are responsible for the data you enter and the services you choose to use.',
            fr: 'Le contenu et les exemples sont fournis à des fins pédagogiques uniquement et sans garantie. Vérifiez les résultats, commandes et leurs sources avant utilisation, et respectez les règles de votre établissement ainsi que les conditions des outils externes. Vous êtes responsable des données saisies et des services utilisés.'
        },
        'التواصل والاقتراحات': { en: 'Contact and suggestions', fr: 'Contact et suggestions' },
        'يمكنك إرسال الأفكار عبر': { en: 'You can share ideas through the', fr: 'Vous pouvez partager vos idées via la' },
        'صفحة المقترحات': { en: 'Suggestions page', fr: 'page des suggestions' },
        '. الحفظ محلي في هذا الإصدار؛ لا يوجد خادم لاستلام الرسائل.': {
            en: '. Suggestions are stored locally in this version; there is no server to receive messages.',
            fr: '. Les suggestions sont stockées localement dans cette version ; aucun serveur ne reçoit les messages.'
        },
        'مشروع شعيب © 2026': { en: 'Shuaib’s Project © 2026', fr: 'Projet de Shuaib © 2026' },
        'المقترحات': { en: 'Suggestions', fr: 'Suggestions' },
        'الخصوصية': { en: 'Privacy', fr: 'Confidentialité' },
        'دليل الحاسوب': { en: 'PC Guide', fr: 'Guide informatique' },
        'دليل الهاتف': { en: 'Mobile Guide', fr: 'Guide mobile' },
        'مشروع شعيب | SHUAIB’S PROJECT': { en: 'Shuaib’s Project', fr: 'Projet de Shuaib' },
        'الشعار الاحترافي | TIK CODE DZ': { en: 'Professional logo | TIK CODE DZ', fr: 'Logo professionnel | TIK CODE DZ' },
        'الثعلب الرقمي — شعار مشروع TIK CODE DZ.': { en: 'The digital fox — TIK CODE DZ project logo.', fr: 'Le renard numérique — logo du projet TIK CODE DZ.' },
        'مرحباً بك في مشروعي': { en: 'Welcome to my project', fr: 'Bienvenue dans mon projet' },
        'استكشف أدوات الذكاء الاصطناعي الرائدة وتعلم طرقاً عملية لاستخدام الذكاء الاصطناعي لبناء جداول بيانات مفيدة ومنظمة.': {
            en: 'Explore leading AI tools and learn practical ways to use artificial intelligence to build useful, well-organized spreadsheets.',
            fr: 'Découvrez les principaux outils d’IA et apprenez à utiliser l’intelligence artificielle pour créer des feuilles de calcul utiles et bien organisées.'
        },
        'ابدأ الاستكشاف': { en: 'Start Exploring', fr: 'Commencer l’exploration' },
        'شاهد الفيديو': { en: 'Watch the video', fr: 'Regarder la vidéo' },
        'اختر مسارك': { en: 'Choose your path', fr: 'Choisissez votre parcours' },
        'أين تريد التطوير؟': { en: 'Where would you like to develop?', fr: 'Où souhaitez-vous développer ?' },
        'دليل مخصص للهاتف أو الحاسوب، اختر للمتابعة مباشرةً.': {
            en: 'Choose a dedicated mobile or PC guide to continue.',
            fr: 'Choisissez un guide dédié au mobile ou à l’informatique pour continuer.'
        },
        'طريقة إنشاء Sheet احترافي بالذكاء الاصطناعي': { en: 'Create a professional spreadsheet with AI', fr: 'Créer une feuille de calcul professionnelle avec l’IA' },
        'تعرّف على أساسيات الذكاء الاصطناعي، ثم اتبع خطوات عملية لتحويل فكرتك إلى جدول واضح قابل للاستخدام.': {
            en: 'Learn the basics of AI, then follow practical steps to turn your idea into a clear, usable spreadsheet.',
            fr: 'Découvrez les bases de l’IA, puis suivez des étapes pratiques pour transformer votre idée en feuille de calcul claire et exploitable.'
        },
        'التطوير عبر الحاسوب': { en: 'PC Development', fr: 'Développement informatique' },
        'التطوير عبر الهاتف بالذكاء الاصطناعي': { en: 'Mobile development with AI', fr: 'Développement mobile avec l’IA' },
        'بيئات تطوير الحاسوب ولغات البرمجة المتقدمة': { en: 'PC development environments and programming languages', fr: 'Environnements de développement informatique et langages de programmation' },
        'دليل وتطوير الهاتف بالذكاء الاصطناعي': { en: 'Mobile development guide with AI', fr: 'Guide de développement mobile avec l’IA' },
        'PC AI Developer Hub': { ar: 'مركز تطوير الحاسوب بالذكاء الاصطناعي', fr: 'Espace de développement PC avec l’IA' },
        'Mobile AI Development Hub': { ar: 'مركز تطوير الهاتف بالذكاء الاصطناعي', fr: 'Espace de développement mobile avec l’IA' },
        'مساحة مستقلة لإرشادات البرمجة على الحاسوب. استخدم المساعدات لفهم الكود ومراجعة الأخطاء، ثم اختبر الحل في بيئة آمنة.': {
            en: 'A dedicated space for PC programming guidance. Use assistants to understand code and review errors, then test solutions in a safe environment.',
            fr: 'Un espace dédié aux conseils de programmation sur PC. Utilisez des assistants pour comprendre le code et examiner les erreurs, puis testez les solutions dans un environnement sûr.'
        },
        'بيئات تطوير الحاسوب ولغات البرمجة المتقدمة': { en: 'PC development environments and programming languages', fr: 'Environnements de développement informatique et langages de programmation' },
        'نظام التشغيل': { en: 'Operating system', fr: 'Système d’exploitation' },
        'أوامر البيئة متوافقة مبدئيًا مع Windows 11; راجع تثبيت Python وإعداد الطرفية على جهازك.': {
            en: 'The environment commands are initially intended for Windows 11; check Python installation and terminal setup on your device.',
            fr: 'Les commandes de l’environnement ciblent initialement Windows 11 ; vérifiez l’installation de Python et la configuration du terminal sur votre appareil.'
        },
        'مساعدون مناسبون للتطوير': { en: 'Assistants for development', fr: 'Assistants pour le développement' },
        'شرح الأخطاء، إنشاء اختبارات، وتقسيم مهام المشروع إلى خطوات واضحة.': {
            en: 'Explain errors, create tests, and break project tasks into clear steps.',
            fr: 'Expliquez les erreurs, créez des tests et divisez les tâches du projet en étapes claires.'
        },
        'استكشاف أمثلة الويب وخدمات Google ومراجعة خطط التطوير.': {
            en: 'Explore web examples and Google services, and review development plans.',
            fr: 'Explorez des exemples Web et les services Google, et examinez les plans de développement.'
        },
        'مراجعة التغييرات والملفات وشرح الحلول مع الحفاظ على السياق.': {
            en: 'Review changes and files, and explain solutions while preserving context.',
            fr: 'Examinez les modifications et les fichiers, puis expliquez les solutions en conservant le contexte.'
        },
        'بيئة الحاسوب': { en: 'PC environment', fr: 'Environnement informatique' },
        'محرر متعدد اللغات؛ افتح مجلد المشروع وثبّت الإضافات الموثوقة المناسبة.': {
            en: 'A multi-language editor. Open the project folder and install suitable trusted extensions.',
            fr: 'Un éditeur multilingue. Ouvrez le dossier du projet et installez des extensions fiables et adaptées.'
        },
        'بيئة معزولة لتثبيت اعتماديات المشروع دون التأثير على بقية النظام.': {
            en: 'An isolated environment for installing project dependencies without affecting the rest of the system.',
            fr: 'Un environnement isolé pour installer les dépendances du projet sans affecter le reste du système.'
        },
        'مختبر لغات البرمجة': { en: 'Programming language lab', fr: 'Laboratoire des langages de programmation' },
        'اختر لغة لعرض مثال موجز ومحاكاة ناتج التنفيذ.': {
            en: 'Choose a language to see a short example and a simulated result.',
            fr: 'Choisissez un langage pour voir un exemple court et un résultat simulé.'
        },
        'لغة عالية المستوى مناسبة للأتمتة وتحليل البيانات والتعلم.': {
            en: 'A high-level language suited to automation, data analysis, and learning.',
            fr: 'Un langage de haut niveau adapté à l’automatisation, à l’analyse de données et à l’apprentissage.'
        },
        'تشغيل المحاكاة': { en: 'Run simulation', fr: 'Lancer la simulation' },
        'اختر «تشغيل المحاكاة» لعرض ناتج المثال.': {
            en: 'Select “Run simulation” to display the example output.',
            fr: 'Sélectionnez « Lancer la simulation » pour afficher le résultat de l’exemple.'
        },
        'أين أضع الكود؟': { en: 'Where should I put the code?', fr: 'Où placer le code ?' },
        'افتح VS Code، أنشئ ملفًا باسم main.py، الصق كود Python ثم شغّله من الطرفية بالأمر: python main.py.': {
            en: 'Open VS Code, create a file named main.py, paste the Python code, then run it in the terminal with: python main.py.',
            fr: 'Ouvrez VS Code, créez un fichier nommé main.py, collez le code Python, puis exécutez-le dans le terminal avec : python main.py.'
        },
        'Mobile AI Development Hub': { ar: 'مركز تطوير الهاتف بالذكاء الاصطناعي', fr: 'Espace de développement mobile avec l’IA' },
        'تعلم البرمجة من الهاتف بمساعدة النماذج الذكية. اختر نظامك اختياريًا لمشاهدة البيئات الأقرب للتوافق؛ لا نطلب صلاحيات ولا نفحص الجهاز تلقائيًا.': {
            en: 'Learn to code on your phone with AI assistants. Optionally select your system to see compatible environments; we request no permissions and do not scan your device automatically.',
            fr: 'Apprenez à programmer sur votre téléphone avec des assistants IA. Sélectionnez éventuellement votre système pour afficher les environnements compatibles ; aucune autorisation n’est demandée et votre appareil n’est pas analysé automatiquement.'
        },
        'نوع النظام وإصداره': { en: 'System type and version', fr: 'Type et version du système' },
        'عرض كل البيئات': { en: 'Show all environments', fr: 'Afficher tous les environnements' },
        'Android 12 وفوق': { en: 'Android 12 and later', fr: 'Android 12 et versions ultérieures' },
        'Android 8 إلى 11': { en: 'Android 8 to 11', fr: 'Android 8 à 11' },
        'Android قديم / موارد محدودة': { en: 'Older Android / limited resources', fr: 'Ancien Android / ressources limitées' },
        'iOS 17 وفوق': { en: 'iOS 17 and later', fr: 'iOS 17 et versions ultérieures' },
        'iOS 15 إلى 16': { en: 'iOS 15 to 16', fr: 'iOS 15 à 16' },
        'iOS 14 أو أقدم': { en: 'iOS 14 or earlier', fr: 'iOS 14 ou version antérieure' },
        'اختر إصدارًا لتصفية البيئات. الكشف اليدوي اختياري ولا تُرسل معلومات الجهاز.': {
            en: 'Choose a version to filter environments. Manual detection is optional and device information is not sent.',
            fr: 'Choisissez une version pour filtrer les environnements. La détection manuelle est facultative et aucune information sur l’appareil n’est envoyée.'
        },
        'المساعد المناسب للتعلم من الهاتف': { en: 'The right assistant for learning on mobile', fr: 'L’assistant adapté à l’apprentissage sur mobile' },
        'اطلب مثالًا صغيرًا يناسب تطبيقك، واشرح القيود وإصدار النظام قبل تشغيله.': {
            en: 'Ask for a small example suited to your app, and describe system constraints and version before running it.',
            fr: 'Demandez un petit exemple adapté à votre application et précisez les contraintes et la version du système avant de l’exécuter.'
        },
        'استفد من شرح JavaScript والويب وخطوات استخدام الأدوات السحابية من المتصفح.': {
            en: 'Use its explanations of JavaScript and the web, and its steps for using cloud tools in a browser.',
            fr: 'Profitez de ses explications sur JavaScript et le Web ainsi que de ses conseils pour utiliser des outils cloud dans le navigateur.'
        },
        'اطلب شرح الأخطاء ومراجعة مقتطفات الكود مع مراعاة موارد الهاتف.': {
            en: 'Ask it to explain errors and review code snippets with your phone’s resources in mind.',
            fr: 'Demandez-lui d’expliquer les erreurs et d’examiner des extraits de code en tenant compte des ressources du téléphone.'
        },
        'بيئات الهاتف والسحابة': { en: 'Mobile and cloud environments', fr: 'Environnements mobiles et cloud' },
        'طرفية لتجربة Python على Android. ثبّت من المصدر الرسمي وراجع التوافق قبل إضافة الحزم.': {
            en: 'A terminal for trying Python on Android. Install it from the official source and check compatibility before adding packages.',
            fr: 'Un terminal pour essayer Python sur Android. Installez-le depuis la source officielle et vérifiez la compatibilité avant d’ajouter des paquets.'
        },
        'بيئة تعليمية لتشغيل أمثلة Python البسيطة، حسب دعم الإصدار والتطبيق لجهازك.': {
            en: 'An educational environment for running simple Python examples, depending on app and version support for your device.',
            fr: 'Un environnement pédagogique pour exécuter des exemples Python simples, selon la compatibilité de l’application et de sa version avec votre appareil.'
        },
        'شغّل دفاتر Python في المتصفح؛ مناسب لـ iOS والأجهزة محدودة الموارد ويتطلب اتصالًا بالإنترنت.': {
            en: 'Run Python notebooks in a browser. Suitable for iOS and resource-limited devices; an internet connection is required.',
            fr: 'Exécutez des notebooks Python dans un navigateur. Convient à iOS et aux appareils limités ; une connexion Internet est nécessaire.'
        },
        'تجربة JavaScript عبر أدوات الويب مناسبة لكثير من أجهزة iOS؛ تشغيل الحزم محليًا محدود.': {
            en: 'Web-based JavaScript tools work on many iOS devices; local package execution is limited.',
            fr: 'Les outils JavaScript en ligne conviennent à de nombreux appareils iOS ; l’exécution locale de paquets est limitée.'
        },
        'مختبر الأكواد على الهاتف': { en: 'Mobile code lab', fr: 'Laboratoire de code mobile' },
        'ابدأ بأمثلة صغيرة، وشغّلها محليًا على Android عند التوافق أو استخدم Colab سحابيًا.': {
            en: 'Start with small examples. Run them locally on compatible Android devices or use Colab in the cloud.',
            fr: 'Commencez par de petits exemples. Exécutez-les localement sur un appareil Android compatible ou utilisez Colab dans le cloud.'
        },
        'Terminal تجريبي': { en: 'Demo terminal', fr: 'Terminal de démonstration' },
        'هذه محاكاة محلية؛ لا يتم تشغيل كود حقيقي على جهازك.': {
            en: 'This is a local simulation; no real code is run on your device.',
            fr: 'Il s’agit d’une simulation locale ; aucun code réel n’est exécuté sur votre appareil.'
        },
        'أمثلة عملية لتشغيل الأكواد من الهاتف': { en: 'Practical examples for running code on a phone', fr: 'Exemples pratiques d’exécution de code sur téléphone' },
        'مثال Python في Pydroid 3': { en: 'Python example in Pydroid 3', fr: 'Exemple Python dans Pydroid 3' },
        'في محرر التطبيق، الصق المثال واضغط زر التشغيل. المحاكاة هنا للشرح فقط ولا تشغّل الكود على الهاتف.': {
            en: 'Paste the example in the app editor and tap Run. This simulation is for demonstration only; it does not run code on your phone.',
            fr: 'Collez l’exemple dans l’éditeur de l’application et appuyez sur Exécuter. Cette simulation est illustrative et n’exécute pas de code sur votre téléphone.'
        },
        'مثال JavaScript عبر Termux': { en: 'JavaScript example with Termux', fr: 'Exemple JavaScript avec Termux' },
        'بعد تثبيت Node.js في Termux، احفظ النص في': { en: 'After installing Node.js in Termux, save the text in', fr: 'Après avoir installé Node.js dans Termux, enregistrez le texte dans' },
        'تحقق من توافق الحزم قبل تثبيتها.': { en: 'Check package compatibility before installing.', fr: 'Vérifiez la compatibilité des paquets avant leur installation.' },
        'ستظهر هنا نتيجة المثال التجريبية.': { en: 'The example’s simulated output will appear here.', fr: 'Le résultat simulé de l’exemple apparaîtra ici.' },
        'التوافق يتغير بحسب إصدار النظام والمنطقة ومصدر التطبيق. لا تدخل بيانات حساسة أو مفاتيح API في الأدوات أو المحادثات الخارجية.': {
            en: 'Compatibility varies by system version, region, and app source. Do not enter sensitive data or API keys in tools or external chats.',
            fr: 'La compatibilité varie selon la version du système, la région et la source de l’application. Ne saisissez pas de données sensibles ni de clés API dans les outils ou conversations externes.'
        },
        'تعلم البرمجة من الهاتف بمساعدة النماذج الذكية. اختر نظامك اختياريًا لمشاهدة البيئات الأقرب للتوافق؛ لا نطلب صلاحيات ولا نفحص الجهاز تلقائيًا.': {
            en: 'Learn to code on your phone with AI assistants. Optionally select your system to see compatible environments; we request no permissions and do not scan your device automatically.',
            fr: 'Apprenez à programmer sur votre téléphone avec des assistants IA. Sélectionnez éventuellement votre système pour afficher les environnements compatibles ; aucune autorisation n’est demandée et votre appareil n’est pas analysé automatiquement.'
        },
        'أين يوضع الكود على الحاسوب؟': { en: 'Where should code go on a computer?', fr: 'Où placer le code sur un ordinateur ?' },
        'افتح VS Code، أنشئ ملفًا جديدًا بالامتداد المطابق للغة المختارة مثل': {
            en: 'Open VS Code, create a new file with the extension matching your selected language, such as',
            fr: 'Ouvrez VS Code et créez un fichier avec l’extension correspondant au langage choisi, par exemple'
        },
        'الصق الكود، ثم شغّله بالطريقة المناسبة للغة. أما كود Google Apps Script فيوضع في محرر Apps Script المرتبط بجدول Google Sheets.': {
            en: 'Paste the code, then run it using the appropriate method for that language. Google Apps Script code belongs in the Apps Script editor connected to a Google Sheet.',
            fr: 'Collez le code, puis exécutez-le de la manière adaptée au langage. Le code Google Apps Script doit être placé dans l’éditeur Apps Script associé à une feuille Google Sheets.'
        },
        'مكتبة الأكواد والحلول البرمجية (Developer & Apps Script Library)': {
            en: 'Code and programming solutions library',
            fr: 'Bibliothèque de code et de solutions de programmation'
        },
        'مثال تعليمي يقرأ نطاقًا محدودًا من الورقة، ويرسل محتواه إلى OpenAI API، ثم يكتب الملخص في العمود F. لا تشغّله على بيانات حساسة.': {
            en: 'This educational example reads a limited spreadsheet range, sends its contents to the OpenAI API, then writes a summary to column F. Do not run it on sensitive data.',
            fr: 'Cet exemple pédagogique lit une plage limitée de la feuille, envoie son contenu à l’API OpenAI, puis écrit le résumé dans la colonne F. Ne l’exécutez pas sur des données sensibles.'
        },
        'قبل التشغيل: أضف المفتاح في خصائص المشروع، وامنح Apps Script الأذونات المطلوبة. عند تشغيل المثال تُرسل خلايا A1:D20 إلى OpenAI؛ راجع سياسة مزوّد الخدمة وتكاليف API ولا تستخدم بيانات شخصية أو سرية.': {
            en: 'Before running: add the key in project properties and grant the required Apps Script permissions. Running this example sends cells A1:D20 to OpenAI. Review the provider policy and API costs; do not use personal or confidential data.',
            fr: 'Avant l’exécution : ajoutez la clé dans les propriétés du projet et accordez les autorisations Apps Script requises. Cet exemple envoie les cellules A1:D20 à OpenAI. Consultez la politique du fournisseur et les coûts de l’API ; n’utilisez pas de données personnelles ou confidentielles.'
        },
        'مثال JavaScript: تنظيف قائمة قيم قبل استخدامها': { en: 'JavaScript example: clean a list of values before use', fr: 'Exemple JavaScript : nettoyer une liste de valeurs avant utilisation' },
        'تأخذ الدالة نصًا متعدد الأسطر، وتزيل الفراغات وتستبعد الأسطر الفارغة، ثم تعيد قائمة نظيفة. المتغير rawText هو النص المدخل وcleanRows هي النتيجة.': {
            en: 'The function takes multiline text, trims whitespace, removes empty lines, and returns a clean list. rawText is the input and cleanRows is the result.',
            fr: 'La fonction reçoit un texte multiligne, supprime les espaces superflus et les lignes vides, puis renvoie une liste nettoyée. rawText est l’entrée et cleanRows le résultat.'
        },
        'يقسم النص إلى أسطر.': { en: 'Splits the text into lines.', fr: 'Divise le texte en lignes.' },
        'يزيل الفراغات حول كل سطر ويختصر الفراغات الداخلية.': { en: 'Trims each line and normalizes internal whitespace.', fr: 'Supprime les espaces autour de chaque ligne et normalise les espaces internes.' },
        'يحذف الأسطر الفارغة، ثم تعرض': { en: 'Removes empty lines, then displays the', fr: 'Supprime les lignes vides, puis affiche le' },
        'النتيجة.': { en: 'result.', fr: 'résultat.' },
        'مثال Python: حساب مجموع عمود رقمي': { en: 'Python example: sum a numeric column', fr: 'Exemple Python : calculer la somme d’une colonne numérique' },
        'تستقبل الدالة قائمة قيم، وتتجاهل القيم التي لا يمكن تحويلها إلى رقم. المتغير values هو المدخل وtotal هو المجموع.': {
            en: 'The function receives a list of values and ignores those that cannot be converted to numbers. values is the input and total is the sum.',
            fr: 'La fonction reçoit une liste de valeurs et ignore celles qui ne peuvent pas être converties en nombres. values est l’entrée et total la somme.'
        },
        'تبدأ الدالة مجموعًا بقيمة صفر.': { en: 'The function initializes the total to zero.', fr: 'La fonction initialise la somme à zéro.' },
        'تحاول تحويل كل عنصر إلى رقم عشري؛ وتتخطى النصوص غير الرقمية بأمان.': {
            en: 'Attempts to convert each item to a decimal number; nonnumeric text is safely skipped.',
            fr: 'Tente de convertir chaque élément en nombre décimal ; les textes non numériques sont ignorés sans risque.'
        },
        'تعيد المجموع، وتعرضه': { en: 'Returns the sum and displays it', fr: 'Renvoie la somme et l’affiche' },
        'غيّر قائمة': { en: 'Replace the list', fr: 'Remplacez la liste' },
        'إلى بيانات تجريبية خاصة بك.': { en: 'with your own test data.', fr: 'par vos propres données de test.' },
        'ما الذي تحتاجه؟': { en: 'What do you need?', fr: 'De quoi avez-vous besoin ?' },
        'تحليل المبيعات': { en: 'Sales analysis', fr: 'Analyse des ventes' },
        'صيغة للمصروفات': { en: 'An expense formula', fr: 'Une formule de dépenses' },
        'إنشاء البرومبت الاحترافي (Generate Prompt)': { en: 'Generate a professional prompt', fr: 'Générer un prompt professionnel' },
        'البرومبت الناتج': { en: 'Generated prompt', fr: 'Prompt généré' },
        'نسخ البرومبت': { en: 'Copy prompt', fr: 'Copier le prompt' },
        'سيظهر البرومبت الاحترافي هنا بعد إنشائه.': { en: 'Your professional prompt will appear here after generation.', fr: 'Votre prompt professionnel apparaîtra ici après sa génération.' },
        'فتح ChatGPT': { en: 'Open ChatGPT', fr: 'Ouvrir ChatGPT' },
        'فتح Gemini': { en: 'Open Gemini', fr: 'Ouvrir Gemini' },
        'حفظ في المفضلة': { en: 'Save to favorites', fr: 'Ajouter aux favoris' },
        'مُحاكي الشات التجريبي (AI Chat Sandbox)': { en: 'AI chat sandbox', fr: 'Bac à sable de discussion IA' },
        'اختر شخصية واسأل عن صيغ Sheets أو كتابة البرومبتات أو Apps Script. الردود محاكاة محلية وليست اتصالًا بموديل خارجي.': {
            en: 'Choose a persona and ask about Sheets formulas, prompt writing, or Apps Script. Replies are simulated locally and do not connect to an external model.',
            fr: 'Choisissez un profil et posez des questions sur les formules Sheets, la rédaction de prompts ou Apps Script. Les réponses sont simulées localement, sans connexion à un modèle externe.'
        },
        'مساعد Google Sheets والدوال': { en: 'Google Sheets and formulas assistant', fr: 'Assistant Google Sheets et formules' },
        'مهندس البرومبتات الاحترافي': { en: 'Professional prompt engineer', fr: 'Ingénieur de prompts professionnel' },
        'مطور الأكواد و Apps Script': { en: 'Code and Apps Script developer', fr: 'Développeur de code et Apps Script' },
        'أهلًا بك! اختر الشخصية المناسبة واكتب سؤالك. لا تدخل بيانات شخصية أو سرية.': {
            en: 'Welcome! Choose a persona and enter your question. Do not include personal or confidential information.',
            fr: 'Bienvenue ! Choisissez un profil et saisissez votre question. N’incluez aucune information personnelle ou confidentielle.'
        },
        'اكتب رسالتك للمساعد': { en: 'Write a message to the assistant', fr: 'Écrivez un message à l’assistant' },
        'إرسال': { en: 'Send', fr: 'Envoyer' },
        'المحادثة والتوليد يعملان داخل المتصفح فقط. راجع الصيغ والأكواد على بيانات تجريبية قبل استخدامها.': {
            en: 'Chat and generation run entirely in your browser. Review formulas and code with test data before use.',
            fr: 'La discussion et la génération s’exécutent uniquement dans votre navigateur. Vérifiez les formules et le code avec des données de test avant utilisation.'
        },
        'مكتبة الأكواد البرمجية': { en: 'Code library', fr: 'Bibliothèque de code' },
        'نُقلت مكتبة الأكواد والحلول إلى واجهة التطوير عبر الحاسوب لتكون أمثلتها وبيئات تشغيلها في مكان واحد.': {
            en: 'The code and solutions library has moved to the PC development hub, bringing its examples and runtime environments together.',
            fr: 'La bibliothèque de code et de solutions a été déplacée vers l’espace de développement PC, où ses exemples et environnements d’exécution sont réunis.'
        },
        'افتح مكتبة الأكواد في دليل الحاسوب': { en: 'Open the code library in the PC guide', fr: 'Ouvrir la bibliothèque de code dans le guide informatique' },
        'مركز لغات البرمجة (Programming Languages Hub)': { en: 'Programming Languages Hub', fr: 'Espace des langages de programmation' },
        'أمثلة مبسطة للتعلّم فقط. الشعار يعرّف باللغة، والمخطط يوضح مسار التنفيذ بصورة عامة.': {
            en: 'Simplified examples for learning only. The icon identifies the language, and the diagram shows the general execution flow.',
            fr: 'Exemples simplifiés à des fins d’apprentissage uniquement. L’icône identifie le langage et le schéma présente le flux général d’exécution.'
        },
        'البيانات والأتمتة والذكاء الاصطناعي': { en: 'Data, automation, and AI', fr: 'Données, automatisation et IA' },
        'Python لغة عالية المستوى تُنفّذ عبر مفسر، وتُستخدم في تحليل البيانات والأتمتة وتطبيقات الذكاء الاصطناعي. تستقبل الدالة اسمًا وتعيد تحية ثم يعرضها البرنامج.': {
            en: 'Python is a high-level interpreted language used for data analysis, automation, and AI applications. The function receives a name and returns a greeting for the program to display.',
            fr: 'Python est un langage interprété de haut niveau utilisé pour l’analyse de données, l’automatisation et les applications d’IA. La fonction reçoit un nom et renvoie un message de bienvenue que le programme affiche.'
        },
        'للحاسوب:': { en: 'For a computer:', fr: 'Sur ordinateur :' },
        'VS Code مع Python، أو الطرفية بعد تثبيت Python.': { en: 'VS Code with Python, or a terminal after installing Python.', fr: 'VS Code avec Python, ou un terminal après l’installation de Python.' },
        'للهاتف:': { en: 'For a phone:', fr: 'Sur téléphone :' },
        'جرّب Python عبر Pydroid 3 أو Termux، أو استخدم Google Colab سحابيًا.': {
            en: 'Try Python with Pydroid 3 or Termux, or use Google Colab in the cloud.',
            fr: 'Essayez Python avec Pydroid 3 ou Termux, ou utilisez Google Colab dans le cloud.'
        },
        'تعرّف def greet(name) دالة تستقبل الاسم.': { en: 'def greet(name) defines a function that receives a name.', fr: 'def greet(name) définit une fonction qui reçoit un nom.' },
        'تعيد return رسالة تحية تتضمن الاسم.': { en: 'return sends back a greeting containing the name.', fr: 'return renvoie un message de bienvenue contenant le nom.' },
        'يعرض print النتيجة بعد استدعاء الدالة.': { en: 'print displays the result after the function call.', fr: 'print affiche le résultat après l’appel de la fonction.' },
        'ملف Python ← المفسّر ← النتيجة': { en: 'Python file ← interpreter ← result', fr: 'Fichier Python ← interpréteur ← résultat' },
        'مقارنة مخرجات الموديلات': { en: 'Compare model outputs', fr: 'Comparer les résultats des modèles' },
        'اختر المهمة نفسها لمعاينة فروق أسلوب الصياغة.': { en: 'Choose the same task to compare response styles.', fr: 'Choisissez la même tâche pour comparer les styles de réponse.' },
        'تلخيص المبيعات': { en: 'Summarize sales', fr: 'Résumer les ventes' },
        'اقتراح صيغة Sheets': { en: 'Suggest a Sheets formula', fr: 'Suggérer une formule Sheets' },
        'تنظيم جدول مهام': { en: 'Organize a task table', fr: 'Organiser un tableau de tâches' },
        'عرض المقارنة': { en: 'Show comparison', fr: 'Afficher la comparaison' },
        'الموديل': { en: 'Model', fr: 'Modèle' },
        'عينة المخرج': { en: 'Sample output', fr: 'Exemple de résultat' },
        'اختر مهمة لعرض عينة توضيحية.': { en: 'Choose a task to display a sample.', fr: 'Choisissez une tâche pour afficher un exemple.' },
        'هذه أمثلة تعليمية ثابتة تُعرض محليًا، وليست ناتجة عن اتصال فعلي بالموديلات أو خدماتها.': {
            en: 'These are static educational examples displayed locally, not results from an actual connection to the models or their services.',
            fr: 'Ces exemples pédagogiques statiques sont affichés localement et ne proviennent pas d’une connexion réelle aux modèles ou à leurs services.'
        },
        'مركز تطبيقات الذكاء الاصطناعي والأكواد البرمجية': { en: 'AI applications and code center', fr: 'Centre d’applications IA et de code' },
        'مسارات عملية لمشاريع الطلاب: ابدأ بمساعدات الذكاء الاصطناعي، ثم راجع الشيفرة وجرّبها على بيانات آمنة.': {
            en: 'Practical paths for student projects: start with AI assistants, then review the code and test it with safe data.',
            fr: 'Parcours pratiques pour les projets étudiants : commencez avec des assistants IA, puis examinez le code et testez-le avec des données sûres.'
        },
        'أمثلة مشروحة لـ C++ وC# وPython وJavaScript، مع محاكاة محلية للتوضيح.': {
            en: 'Explained examples in C++, C#, Python, and JavaScript, with local simulations for illustration.',
            fr: 'Exemples expliqués en C++, C#, Python et JavaScript, avec des simulations locales à titre illustratif.'
        },
        'تعرف على ربط Sheets بواجهة API، وإدارة الأسرار، والتحقق من الاستجابات.': {
            en: 'Learn how to connect Sheets to an API, manage secrets, and validate responses.',
            fr: 'Découvrez comment connecter Sheets à une API, gérer les secrets et valider les réponses.'
        },
        'استخدم المحاكي المحلي للتدرب على صياغة الأسئلة دون اتصال بموديل خارجي.': {
            en: 'Use the local simulator to practice writing prompts without connecting to an external model.',
            fr: 'Utilisez le simulateur local pour vous entraîner à formuler des questions sans connexion à un modèle externe.'
        },
        'أسئلة شائعة حول التعلم والمشاريع الأكاديمية': { en: 'Frequently asked questions about learning and academic projects', fr: 'Questions fréquentes sur l’apprentissage et les projets académiques' },
        'كيف أستخدم هذه الأمثلة في مشروع أو بحث طلابي؟': { en: 'How can I use these examples in a student project or research?', fr: 'Comment utiliser ces exemples dans un projet ou une recherche étudiante ?' },
        'استخدمها كنقطة انطلاق، وحدد السؤال والمنهج والبيانات بنفسك، ثم وثّق ما عدّلته وراجع متطلبات المؤسسة الأكاديمية.': {
            en: 'Use them as a starting point. Define your own question, method, and data, document your changes, and check your institution’s requirements.',
            fr: 'Utilisez-les comme point de départ. Définissez vous-même la question, la méthode et les données, documentez vos modifications et vérifiez les exigences de votre établissement.'
        },
        'هل أستطيع تسليم الشيفرة أو الإجابة الناتجة كما هي؟': { en: 'Can I submit the code or generated answer as-is?', fr: 'Puis-je remettre le code ou la réponse générée telle quelle ?' },
        'لا. راجع كل نتيجة واختبرها واشرحها بأسلوبك، واذكر استخدام الأدوات وفق سياسة المؤسسة أو المقرر.': {
            en: 'No. Review, test, and explain every result in your own words, and disclose tool use according to your institution’s or course’s policy.',
            fr: 'Non. Vérifiez, testez et expliquez chaque résultat avec vos propres mots, et signalez l’utilisation des outils selon les règles de votre établissement ou cours.'
        },
        'ما الطريقة الآمنة لتجربة أدوات الذكاء الاصطناعي؟': { en: 'What is a safe way to try AI tools?', fr: 'Comment essayer les outils d’IA en toute sécurité ?' },
        'استخدم بيانات اصطناعية أو منزوعة الهوية، ولا تضع بيانات المشاركين أو مفاتيح API في البرومبتات أو خلايا الجداول.': {
            en: 'Use synthetic or de-identified data. Do not put participant data or API keys in prompts or spreadsheet cells.',
            fr: 'Utilisez des données synthétiques ou anonymisées. Ne placez pas de données de participants ni de clés API dans les prompts ou les cellules du tableur.'
        },
        'دليل موديلات الذكاء الاصطناعي': { en: 'AI Models Guide', fr: 'Guide des modèles d’IA' },
        'أدوات مساندة لمشاريع الطلاب': { en: 'Tools for student projects', fr: 'Outils pour les projets étudiants' },
        'أدوات محلية لتنظيف بيانات تجريبية وتقدير التوكينات، مع شروحات تطبيقية في مركز الأكواد أعلاه.': {
            en: 'Local tools for cleaning test data and estimating tokens, with practical guides in the code center above.',
            fr: 'Outils locaux pour nettoyer des données de test et estimer les tokens, avec des guides pratiques dans le centre de code ci-dessus.'
        },
        'تنظيف النصوص والبيانات': { en: 'Text and data cleaning', fr: 'Nettoyage de texte et de données' },
        'أدخل بياناتك هنا؛ المعالجة تتم في الصفحة ولا تُرسل إلى خادم.': { en: 'Enter data here; it is processed on this page and not sent to a server.', fr: 'Saisissez vos données ici ; elles sont traitées dans cette page et ne sont pas envoyées à un serveur.' },
        'البيانات الخام': { en: 'Raw data', fr: 'Données brutes' },
        'تنظيف المسافات': { en: 'Trim whitespace', fr: 'Supprimer les espaces superflus' },
        'استخراج الإيميلات': { en: 'Extract email addresses', fr: 'Extraire les adresses e-mail' },
        'توحيد الأرقام والتواريخ': { en: 'Normalize numbers and dates', fr: 'Normaliser les nombres et les dates' },
        'حاسبة التوكينات والتكلفة': { en: 'Token and cost calculator', fr: 'Calculateur de tokens et de coût' },
        'تقدير تقريبي لتوكينات الإدخال والتكلفة؛ لا يشمل الرد. عدّل السعر وفق تسعير الموديل الفعلي.': {
            en: 'Approximate estimate of input tokens and cost; excludes the response. Adjust the price to the model’s actual pricing.',
            fr: 'Estimation approximative des tokens d’entrée et du coût, hors réponse. Ajustez le prix selon la tarification réelle du modèle.'
        },
        'عدد الكلمات': { en: 'Word count', fr: 'Nombre de mots' },
        'السعر المرجعي للإدخال لكل مليون توكن (USD)': { en: 'Reference input price per million tokens (USD)', fr: 'Prix de référence de l’entrée par million de tokens (USD)' },
        'تُملأ القيمة بحسب النموذج المختار ويمكن تعديلها. الأسعار تقريبية وقد تتغير حسب المنطقة والطبقة؛ تحقق من': {
            en: 'The value is filled according to the selected model and can be edited. Prices are estimates and may vary by region and tier; check',
            fr: 'La valeur est définie selon le modèle choisi et peut être modifiée. Les prix sont approximatifs et peuvent varier selon la région et l’offre ; consultez'
        },
        'تسعير OpenAI': { en: 'OpenAI pricing', fr: 'Tarifs OpenAI' },
        'تسعير Gemini': { en: 'Gemini pricing', fr: 'Tarifs Gemini' },
        'تسعير Anthropic': { en: 'Anthropic pricing', fr: 'Tarifs Anthropic' },
        'شاركنا فكرتك أو مقترحك': { en: 'Share an idea or suggestion', fr: 'Partagez une idée ou une suggestion' },
        'ما الميزة أو الشرح الذي سيساعدك على استخدام الذكاء الاصطناعي مع Sheets؟': {
            en: 'What feature or guide would help you use AI with Sheets?',
            fr: 'Quelle fonctionnalité ou quel guide vous aiderait à utiliser l’IA avec Sheets ?'
        },
        'اكتب مقترحك': { en: 'Write your suggestion', fr: 'Rédigez votre suggestion' },
        'إرسال المقترح': { en: 'Send suggestion', fr: 'Envoyer la suggestion' },
        'لأن الموقع لا يملك خادمًا خلفيًا، يُحفظ المقترح في هذا المتصفح فقط ولا يُرسل إلى المطور.': {
            en: 'This website has no backend server, so the suggestion is stored only in this browser and is not sent to the developer.',
            fr: 'Ce site ne possède pas de serveur ; votre suggestion est donc enregistrée uniquement dans ce navigateur et n’est pas envoyée au développeur.'
        },
        'الدعم والأسئلة الشائعة': { en: 'Help and frequently asked questions', fr: 'Aide et questions fréquentes' },
        'كيف أوثق استخدام المساعد في مشروع المقرر؟': { en: 'How should I document assistant use in a course project?', fr: 'Comment documenter l’utilisation d’un assistant dans un projet de cours ?' },
        'راجع سياسة المؤسسة، واذكر الأداة والغرض من استخدامها، ووضّح ما راجعته أو عدّلته بنفسك.': {
            en: 'Check your institution’s policy, name the tool and its purpose, and explain what you reviewed or changed yourself.',
            fr: 'Consultez les règles de votre établissement, indiquez l’outil et son objectif, et précisez ce que vous avez vérifié ou modifié vous-même.'
        },
        'هل تصلح أمثلة الأكواد للتسليم مباشرة؟': { en: 'Can code examples be submitted as-is?', fr: 'Les exemples de code peuvent-ils être remis tels quels ?' },
        'الأمثلة للتعلم فقط؛ اختبرها واشرحها بنفسك وتحقق من توافقها مع متطلبات المشروع قبل أي استخدام.': {
            en: 'Examples are for learning only. Test and explain them yourself, and check they meet project requirements before using them.',
            fr: 'Les exemples sont réservés à l’apprentissage. Testez-les et expliquez-les vous-même, puis vérifiez qu’ils répondent aux exigences du projet avant utilisation.'
        },
        'كيف أستخدم بيانات بحثية بأمان؟': { en: 'How can I use research data safely?', fr: 'Comment utiliser des données de recherche en toute sécurité ?' },
        'مشروع شعيب | SHUAIB’S PROJECT': { en: 'Shuaib’s Project', fr: 'Projet de Shuaib' },
        'نوفمبر': { en: 'November', fr: 'novembre' },
        'الذكرى الـ': { en: 'Anniversary', fr: 'anniversaire' },
        'لإندلاع ثورة التحرير الجزائرية': { en: 'of the outbreak of the Algerian Revolution', fr: 'du déclenchement de la Révolution algérienne' },
        'المجد والخلود لشهدائنا الأبرار': { en: 'Glory and eternity to our noble martyrs', fr: 'Gloire et éternité à nos nobles martyrs' },
        'حاسوب 💻': { en: 'Computer 💻', fr: 'Ordinateur 💻' },
        'هاتف 📱': { en: 'Phone 📱', fr: 'Téléphone 📱' },
        'تغيير الجهاز': { en: 'Change device', fr: 'Changer d’appareil' },
        'خصّص إرشادات الحاسوب': { en: 'Customize PC guidance', fr: 'Personnaliser le guide informatique' },
        'إرشادات عامة': { en: 'General guidance', fr: 'Conseils généraux' },
        'اختر المساعد الذكي المناسب': { en: 'Choose the right AI assistant', fr: 'Choisissez le bon assistant IA' },
        'مساعد البرمجة اليومي': { en: 'Everyday coding assistant', fr: 'Assistant de programmation au quotidien' },
        'اطلب شرح الأخطاء، وإنشاء اختبارات، أو تقسيم المشروع إلى خطوات. شارك رسالة الخطأ والجزء الضروري من الكود فقط.': {
            en: 'Ask it to explain errors, create tests, or break a project into steps. Share only the error message and the necessary code.',
            fr: 'Demandez-lui d’expliquer les erreurs, de créer des tests ou de découper le projet en étapes. Ne partagez que le message d’erreur et le code nécessaire.'
        },
        'شرح وتخطيط متصل بالويب': { en: 'Web-connected explanations and planning', fr: 'Explications et planification connectées au Web' },
        'استخدمه لصياغة خطة تطوير، وفهم أمثلة الويب، ومراجعة حلول تناسب أدوات Google. تحقق من الإصدارات قبل تشغيل الأوامر.': {
            en: 'Use it to draft a development plan, understand web examples, and review solutions for Google tools. Check versions before running commands.',
            fr: 'Utilisez-le pour préparer un plan de développement, comprendre des exemples Web et examiner des solutions adaptées aux outils Google. Vérifiez les versions avant d’exécuter des commandes.'
        },
        'مراجعة التغييرات والسياق': { en: 'Review changes and context', fr: 'Examiner les changements et le contexte' },
        'قدّم الملفات أو المقاطع اللازمة لمراجعة منظمة، واطلب توضيح آثار التغيير والاختبارات المقترحة.': {
            en: 'Provide the relevant files or snippets for a structured review, and ask about change impact and suggested tests.',
            fr: 'Fournissez les fichiers ou extraits pertinents pour une revue structurée, et demandez les effets des changements et les tests suggérés.'
        },
        'بيئة الحاسوب الموصى بها': { en: 'Recommended PC environment', fr: 'Environnement informatique recommandé' },
        'افتح مجلد المشروع في VS Code، ثم أنشئ بيئة Python معزولة باستخدام الأمر المناسب لنظامك.': {
            en: 'Open the project folder in VS Code, then create an isolated Python environment using the command for your system.',
            fr: 'Ouvrez le dossier du projet dans VS Code, puis créez un environnement Python isolé à l’aide de la commande adaptée à votre système.'
        },
        'نسخ أمر الإعداد': { en: 'Copy setup command', fr: 'Copier la commande de configuration' },
        'تنزيل VS Code': { en: 'Download VS Code', fr: 'Télécharger VS Code' },
        'خصّص التوصيات حسب نظام هاتفك (اختياري)': { en: 'Customize recommendations for your phone (optional)', fr: 'Personnaliser les recommandations pour votre téléphone (facultatif)' },
        'يُقرأ نوع النظام محليًا فقط عند ضغطك على زر التعرف، أو يمكنك الاختيار يدويًا.': {
            en: 'Your system type is read locally only when you press Detect, or you can choose it manually.',
            fr: 'Le type de système est lu localement uniquement lorsque vous appuyez sur Détecter ; vous pouvez aussi le choisir manuellement.'
        },
        'التعرف على النظام بموافقتي': { en: 'Detect system with my consent', fr: 'Détecter le système avec mon accord' },
        'الاختيار اليدوي': { en: 'Manual selection', fr: 'Sélection manuelle' },
        'لم يبدأ فحص النظام.': { en: 'System detection has not started.', fr: 'La détection du système n’a pas commencé.' },
        'نوع الهاتف وإصداره': { en: 'Phone type and version', fr: 'Type et version du téléphone' },
        'اختر النظام والإصدار': { en: 'Choose system and version', fr: 'Choisissez le système et la version' },
        'يساعدك الذكاء الاصطناعي على فهم الأخطاء، وصياغة أمثلة صغيرة، وشرح كل خطوة. راجع الكود والصلاحيات قبل التشغيل ولا تشارك مفاتيح API أو بيانات حساسة.': {
            en: 'AI can help explain errors, draft small examples, and clarify each step. Review code and permissions before running it; never share API keys or sensitive data.',
            fr: 'L’IA peut vous aider à comprendre les erreurs, rédiger de petits exemples et expliquer chaque étape. Vérifiez le code et les autorisations avant l’exécution ; ne partagez jamais de clés API ni de données sensibles.'
        },
        'بطاقات المساعدين الذكيين': { en: 'AI assistant cards', fr: 'Cartes des assistants IA' },
        'تعلّم بالتجربة': { en: 'Learn by experimenting', fr: 'Apprendre par l’expérimentation' },
        'اطلب سكريبتًا صغيرًا متوافقًا مع نظامك، ثم اطلب شرح كل سطر وطريقة اختبار آمنة قبل تشغيله في البيئة المناسبة.': {
            en: 'Ask for a small script compatible with your system, then request a line-by-line explanation and a safe test method before running it in a suitable environment.',
            fr: 'Demandez un petit script compatible avec votre système, puis une explication ligne par ligne et une méthode de test sûre avant de l’exécuter dans un environnement adapté.'
        },
        'أفكار وتطبيقات ويب': { en: 'Web ideas and applications', fr: 'Idées et applications Web' },
        'استفد منه في شرح JavaScript وواجهات الويب، أو صياغة خطوات تجربة Colab من المتصفح. لا تفترض أن لديه وصولًا إلى ملفات الهاتف.': {
            en: 'Use it to explain JavaScript and web interfaces, or outline how to try Colab in a browser. Do not assume it can access files on your phone.',
            fr: 'Utilisez-le pour expliquer JavaScript et les interfaces Web ou décrire comment essayer Colab dans un navigateur. Ne supposez pas qu’il peut accéder aux fichiers de votre téléphone.'
        },
        'شرح ومراجعة متأنية': { en: 'Careful explanation and review', fr: 'Explication et revue approfondies' },
        'اطلب مراجعة مقطع الكود وشرح أسباب الخطأ والتحسينات، مع تكييف الاقتراحات لموارد الهاتف وإصدار النظام.': {
            en: 'Ask for a code snippet review and an explanation of errors and improvements, tailored to your phone’s resources and system version.',
            fr: 'Demandez une revue du code et une explication des erreurs et améliorations, adaptées aux ressources de votre téléphone et à la version du système.'
        },
        'بيئات التشغيل والإرشادات': { en: 'Runtime environments and guidance', fr: 'Environnements d’exécution et conseils' },
        'Termux — Python على Android': { en: 'Termux — Python on Android', fr: 'Termux — Python sur Android' },
        'لطرفية Android الحديثة. ثبّت Termux من مصدره الرسمي وتأكد من التوافق قبل تثبيت الحزم.': {
            en: 'A terminal for modern Android. Install Termux from its official source and check compatibility before installing packages.',
            fr: 'Un terminal pour Android récent. Installez Termux depuis sa source officielle et vérifiez la compatibilité avant d’installer des paquets.'
        },
        'نسخ أوامر Termux': { en: 'Copy Termux commands', fr: 'Copier les commandes Termux' },
        'دليل Termux الرسمي': { en: 'Official Termux guide', fr: 'Guide officiel de Termux' },
        'Pydroid 3 — Python تعليمي': { en: 'Pydroid 3 — educational Python', fr: 'Pydroid 3 — Python pédagogique' },
        'مناسب لتجربة سكريبتات صغيرة على Android إذا كان إصدار التطبيق يدعم جهازك.': {
            en: 'Suitable for trying small scripts on Android if the app version supports your device.',
            fr: 'Convient pour essayer de petits scripts sur Android si la version de l’application est compatible avec votre appareil.'
        },
        'نسخ أوامر التجربة': { en: 'Copy test commands', fr: 'Copier les commandes de test' },
        'صفحة Pydroid 3': { en: 'Pydroid 3 page', fr: 'Page Pydroid 3' },
        'Google Colab — تشغيل سحابي': { en: 'Google Colab — cloud execution', fr: 'Google Colab — exécution cloud' },
        'شغّل Python في دفتر سحابي من المتصفح، خيار مناسب لـ iOS والأجهزة محدودة الموارد. يلزم اتصال بالإنترنت.': {
            en: 'Run Python in a cloud notebook from your browser. Suitable for iOS and resource-limited devices; an internet connection is required.',
            fr: 'Exécutez Python dans un notebook cloud depuis votre navigateur. Convient à iOS et aux appareils limités ; une connexion Internet est nécessaire.'
        },
        'نسخ خطوات Colab': { en: 'Copy Colab steps', fr: 'Copier les étapes Colab' },
        'فتح Google Colab': { en: 'Open Google Colab', fr: 'Ouvrir Google Colab' },
        'iOS — JavaScript والويب': { en: 'iOS — JavaScript and web', fr: 'iOS — JavaScript et Web' },
        'جرّب JavaScript عبر أدوات الويب، أو استخدم Colab لتشغيل Python سحابيًا. إمكانات التشغيل المحلي تختلف عن Android.': {
            en: 'Try JavaScript with web tools, or use Colab to run Python in the cloud. Local execution options differ from Android.',
            fr: 'Essayez JavaScript avec des outils Web ou utilisez Colab pour exécuter Python dans le cloud. Les possibilités d’exécution locale diffèrent d’Android.'
        },
        'نسخ مثال JavaScript': { en: 'Copy JavaScript example', fr: 'Copier l’exemple JavaScript' },
        'التطبيقات والتوافق يتغيران بحسب إصدار النظام والمنطقة؛ تحقق من المصدر الرسمي قبل التثبيت.': {
            en: 'Apps and compatibility vary by system version and region; check the official source before installing.',
            fr: 'Les applications et leur compatibilité varient selon la version du système et la région ; vérifiez la source officielle avant l’installation.'
        },
        'مولّد البرومبتات الذكي': { en: 'Smart prompt generator', fr: 'Générateur intelligent de prompts' },
        'اكتب ما تحتاجه، اختر الموديل والمهمة، واحصل على برومبت احترافي جاهز للنسخ.': {
            en: 'Describe what you need, choose a model and task, and get a professional prompt ready to copy.',
            fr: 'Décrivez votre besoin, choisissez un modèle et une tâche, puis obtenez un prompt professionnel prêt à copier.'
        },
        'ما هو البرومبت (Prompt)؟ هو السؤال أو الأمر الدقيق الذي تكتبه للذكاء الاصطناعي ليقوم بتوليد الكود أو النص أو حل المشكلة التي تحتاجها بأفضل نتيجة.': {
            en: 'What is a prompt? It is the precise question or instruction you give an AI to generate code, text, or a solution to your problem.',
            fr: 'Qu’est-ce qu’un prompt ? C’est la question ou l’instruction précise donnée à une IA pour générer du code, du texte ou une solution à votre problème.'
        },
        '🚨 تنبيه: هذا المولد تحت التطوير حالياً': { en: '🚨 Notice: This generator is currently under development', fr: '🚨 Attention : ce générateur est en cours de développement' },
        'اختر الموديل': { en: 'Choose a model', fr: 'Choisir un modèle' },
        'نوع المهمة': { en: 'Task type', fr: 'Type de tâche' },
        'صيغ Sheets': { en: 'Sheets formulas', fr: 'Formules Sheets' },
        'تلخيص مقال': { en: 'Summarize an article', fr: 'Résumer un article' },
        'استماع 🔊': { en: 'Listen 🔊', fr: 'Écouter 🔊' },
        'إيقاف مؤقت ⏸️': { en: 'Pause ⏸️', fr: 'Pause ⏸️' },
        'إيقاف ⏹️': { en: 'Stop ⏹️', fr: 'Arrêter ⏹️' },
        'التعلم الذكي': { en: 'Smart learning', fr: 'Apprentissage intelligent' },
        'اكتشف مفاهيم الذكاء الاصطناعي وتعلّم استخدام أدواته بثقة.': {
            en: 'Explore AI concepts and learn to use its tools with confidence.',
            fr: 'Découvrez les concepts de l’IA et apprenez à utiliser ses outils en toute confiance.'
        },
        'أتمتة المهام': { en: 'Task automation', fr: 'Automatisation des tâches' },
        'حوّل الخطوات المتكررة إلى عمليات منظمة توفر الوقت والجهد.': {
            en: 'Turn repetitive steps into organized processes that save time and effort.',
            fr: 'Transformez les tâches répétitives en processus organisés pour gagner du temps et des efforts.'
        },
        'نظّم البيانات واستخرج منها مؤشرات تساعد على اتخاذ قرارات أفضل.': {
            en: 'Organize data and extract insights that support better decisions.',
            fr: 'Organisez les données et extrayez des indicateurs pour prendre de meilleures décisions.'
        },
        'تطبيقات متنوعة': { en: 'Various applications', fr: 'Applications variées' },
        'استكشف تطبيقات عملية في التعليم والأعمال والإنتاجية اليومية.': {
            en: 'Explore practical applications for education, business, and everyday productivity.',
            fr: 'Découvrez des applications pratiques pour l’éducation, les affaires et la productivité quotidienne.'
        },
        'لغات البرمجة والتطبيقات (Programming Languages Hub)': { en: 'Programming languages and applications', fr: 'Langages de programmation et applications' },
        'أمثلة تمهيدية توضح الاستخدام ومسار التنفيذ. صحة البرنامج تعتمد على مراجعة الشيفرة والاختبار، لا على اللغة وحدها.': {
            en: 'Introductory examples explain usage and execution flow. Program correctness depends on code review and testing, not the language alone.',
            fr: 'Des exemples introductifs présentent l’utilisation et le déroulement de l’exécution. La fiabilité dépend de la revue du code et des tests, pas seulement du langage.'
        },
        'اضغط «تشغيل المحاكاة» لعرض ناتج المثال.': { en: 'Select “Run simulation” to display the example output.', fr: 'Sélectionnez « Lancer la simulation » pour afficher le résultat de l’exemple.' },
        'شاهد الشرح التفصيلي والأمثلة خطوة بخطوة في صفحة Sheets': {
            en: 'See the detailed guide and step-by-step examples on the Sheets page.',
            fr: 'Consultez le guide détaillé et les exemples pas à pas sur la page Sheets.'
        },
        'اختر مهمة لمعاينة فروق أسلوب الصياغة على الطلب نفسه.': {
            en: 'Choose a task to compare response styles for the same request.',
            fr: 'Choisissez une tâche pour comparer les styles de réponse à une même demande.'
        },
        'هذه أمثلة تعليمية ثابتة تُعرض محليًا، وليست ناتجة عن تشغيل الموديلات أو اتصال بخدماتها. تختلف النتائج الفعلية بحسب الطلب والإصدار.': {
            en: 'These static educational examples are displayed locally; they are not generated by running models or connecting to their services. Actual results vary by prompt and version.',
            fr: 'Ces exemples pédagogiques statiques sont affichés localement ; ils ne proviennent pas de modèles exécutés ni de connexions à leurs services. Les résultats réels varient selon la demande et la version.'
        },
        'كيف أستخدم أدوات المنصة في مشروع أو بحث طلابي؟': { en: 'How can I use these tools in a student project or research?', fr: 'Comment utiliser ces outils dans un projet ou une recherche étudiante ?' },
        'ابدأ بتحديد سؤال المشروع ومصادر البيانات، ثم استخدم الأدوات التعليمية لصياغة خطوات العمل. وثّق المنهج والقرارات، وراجع متطلبات المؤسسة الأكاديمية.': {
            en: 'Start by defining your project question and data sources, then use the learning tools to plan your workflow. Document your methods and decisions, and check your institution’s requirements.',
            fr: 'Commencez par définir la question du projet et les sources de données, puis utilisez les outils pédagogiques pour organiser le travail. Documentez la méthode et les décisions, et vérifiez les exigences de votre établissement.'
        },
        'هل يمكن تسليم مخرجات الذكاء الاصطناعي كما هي؟': { en: 'Can AI-generated output be submitted as-is?', fr: 'Peut-on remettre un résultat généré par l’IA tel quel ?' },
        'لا. تعامل معها كمسودة تعليمية، وتحقق من صحتها، وأعد صياغتها بأسلوبك، واذكر استخدام الأدوات وفق سياسة المؤسسة الأكاديمية.': {
            en: 'No. Treat it as a learning draft, verify it, rewrite it in your own words, and disclose tool use according to your institution’s policy.',
            fr: 'Non. Considérez-le comme un brouillon pédagogique, vérifiez-le, reformulez-le avec vos propres mots et signalez l’utilisation des outils selon les règles de votre établissement.'
        },
        'كيف أحمي بيانات المشاركين أو بيانات البحث؟': { en: 'How can I protect participant or research data?', fr: 'Comment protéger les données des participants ou de recherche ?' },
        'استخدم بيانات اصطناعية أو منزوعة الهوية، ولا ترفع معلومات شخصية أو سرية إلى أي خدمة قبل مراجعة الموافقات والسياسات المعتمدة.': {
            en: 'Use synthetic or de-identified data. Do not upload personal or confidential information to any service before checking approvals and applicable policies.',
            fr: 'Utilisez des données synthétiques ou anonymisées. Ne transmettez aucune information personnelle ou confidentielle à un service sans vérifier les autorisations et politiques applicables.'
        },
        'سجل التحديثات والتطوير (Updates & Changelog)': { en: 'Updates and changelog', fr: 'Mises à jour et journal des modifications' },
        'الإصدار الحالي: v1.0.0 (تحديث نشط)': { en: 'Current version: v1.0.0 (active update)', fr: 'Version actuelle : v1.0.0 (mise à jour active)' },
        'مكتمل': { en: 'Complete', fr: 'Terminé' },
        'مولّد البرومبتات ومُحاكي الشات': { en: 'Prompt generator and chat simulator', fr: 'Générateur de prompts et simulateur de discussion' },
        'إنشاء برومبتات حسب السياق وتجربة مساعدات إرشادية محلية للشيت والبرومبتات والأكواد.': {
            en: 'Create context-aware prompts and try local guided assistants for spreadsheets, prompts, and code.',
            fr: 'Créez des prompts contextuels et essayez des assistants locaux pour les feuilles de calcul, les prompts et le code.'
        },
        'قيد العمل': { en: 'In progress', fr: 'En cours' },
        'توسيع الأدوات العملية': { en: 'Expanding practical tools', fr: 'Extension des outils pratiques' },
        'تحسين أمثلة صيغ Sheets وتنظيف البيانات وإضافة شروحات تطبيقية تدريجيًا.': {
            en: 'Improve Sheets formula and data-cleaning examples, and gradually add practical guides.',
            fr: 'Améliorer les exemples de formules Sheets et de nettoyage des données, et ajouter progressivement des guides pratiques.'
        },
        'مخطط له': { en: 'Planned', fr: 'Planifié' },
        'مكتبة حلول أوسع': { en: 'A broader solutions library', fr: 'Une bibliothèque de solutions plus vaste' },
        'أمثلة Apps Script إضافية، ودروس متقدمة للأتمتة وتحليل البيانات، وقوالب مهام جديدة.': {
            en: 'More Apps Script examples, advanced automation and data-analysis lessons, and new task templates.',
            fr: 'Davantage d’exemples Apps Script, des cours avancés d’automatisation et d’analyse de données, et de nouveaux modèles de tâches.'
        },
        'خريطة الطريق / Roadmap': { en: 'Roadmap', fr: 'Feuille de route' },
        'خطوات وبناء الأنظمة الذكية (Website & AI Roadmap)': { en: 'Website and AI roadmap', fr: 'Feuille de route du site et de l’IA' },
        'مسار تعليمي يربط الفكرة بالتجربة ثم بنموذج أولي مسؤول.': {
            en: 'A learning path connecting an idea to experimentation and then to a responsible prototype.',
            fr: 'Un parcours pédagogique qui relie une idée à l’expérimentation, puis à un prototype responsable.'
        },
        '١. تحديد المشكلة': { en: '1. Define the problem', fr: '1. Définir le problème' },
        'عرّف احتياج المشروع ومستخدميه، وحدد سؤالًا أكاديميًا واضحًا ومخرجات قابلة للقياس.': {
            en: 'Define the project’s need and users, and set a clear academic question with measurable outcomes.',
            fr: 'Définissez le besoin du projet et ses utilisateurs, puis formulez une question académique claire avec des résultats mesurables.'
        },
        '٢. إعداد البيانات': { en: '2. Prepare the data', fr: '2. Préparer les données' },
        'نظّم البيانات المصرّح باستخدامها، واحذف المعرفات الشخصية قبل أي تجربة.': {
            en: 'Organize data you are authorized to use and remove personal identifiers before testing.',
            fr: 'Organisez les données dont l’utilisation est autorisée et supprimez les identifiants personnels avant tout essai.'
        },
        '٣. بناء نموذج أولي': { en: '3. Build a prototype', fr: '3. Créer un prototype' },
        'استخدم أمثلة الأكواد والأدوات لتجربة حل صغير، مع توثيق الافتراضات والقيود.': {
            en: 'Use code examples and tools to test a small solution, documenting assumptions and limitations.',
            fr: 'Utilisez des exemples de code et des outils pour tester une petite solution, en documentant les hypothèses et les limites.'
        },
        '٤. التحقق والتطوير': { en: '4. Validate and improve', fr: '4. Valider et améliorer' },
        'اختبر النتائج على حالات متنوعة، وراجعها مع المشرف أو الفريق قبل اعتمادها.': {
            en: 'Test results across varied cases and review them with a supervisor or team before adoption.',
            fr: 'Testez les résultats sur différents cas et examinez-les avec un encadrant ou une équipe avant de les adopter.'
        },
        'الأدوات والتطبيقات العملية': { en: 'Practical tools and applications', fr: 'Outils et applications pratiques' },
        'أدوات مساندة لتنظيف البيانات وتقدير التوكينات، مع مركز مستقل للتطبيقات والأكواد البرمجية.': {
            en: 'Supporting tools for cleaning data and estimating tokens, with a dedicated center for applications and code.',
            fr: 'Des outils pour nettoyer les données et estimer les tokens, avec un espace dédié aux applications et au code.'
        },
        'السعر الابتدائي مثال توضيحي وليس سعرًا رسميًا؛ راجع مزوّد الخدمة قبل اتخاذ قرار.': {
            en: 'The initial price is illustrative, not official. Check the provider before making a decision.',
            fr: 'Le prix initial est donné à titre d’exemple et n’est pas officiel. Consultez le fournisseur avant toute décision.'
        },
        'مسارات عملية للتعلّم الأكاديمي، واختبار الأفكار، وبناء نماذج أولية آمنة.': {
            en: 'Practical paths for academic learning, testing ideas, and building safe prototypes.',
            fr: 'Des parcours pratiques pour apprendre, tester des idées et créer des prototypes sûrs.'
        },
        'أمثلة تعليمية ومحاكاة محلية لـ C++ وC# وPython وJavaScript.': {
            en: 'Learning examples and local simulations for C++, C#, Python, and JavaScript.',
            fr: 'Exemples pédagogiques et simulations locales en C++, C#, Python et JavaScript.'
        },
        'استكشف الأمثلة': { en: 'Explore examples', fr: 'Explorer les exemples' },
        'تطبيقات Google Sheets': { en: 'Google Sheets applications', fr: 'Applications Google Sheets' },
        'تعلم ربط الأفكار بالجداول عبر Apps Script وأمثلة موثقة.': {
            en: 'Learn to connect ideas to spreadsheets with Apps Script and documented examples.',
            fr: 'Apprenez à relier vos idées aux feuilles de calcul grâce à Apps Script et à des exemples documentés.'
        },
        'افتح مكتبة الأكواد': { en: 'Open code library', fr: 'Ouvrir la bibliothèque de code' },
        'مساعدات الذكاء الاصطناعي': { en: 'AI assistants', fr: 'Assistants IA' },
        'ChatGPT مساعد محادثة من OpenAI يمكنه المساعدة في صياغة الأفكار، تلخيص النصوص، شرح الصيغ، وتحويل المتطلبات إلى جداول منظمة. اكتب طلبًا واضحًا وراجع النتائج والصيغ قبل استخدامها في ملفك.': {
            en: 'ChatGPT is a conversational assistant from OpenAI that can help draft ideas, summarize text, explain formulas, and turn requirements into structured tables. Give it a clear prompt, then review generated data and formulas before using them.',
            fr: 'ChatGPT est un assistant conversationnel d’OpenAI qui peut aider à rédiger des idées, résumer des textes, expliquer des formules et transformer des besoins en tableaux structurés. Formulez une demande claire, puis vérifiez les données et formules générées avant de les utiliser.'
        },
        'Gemini هو مساعد Google للذكاء الاصطناعي. قد تتوفر ميزاته داخل Google Sheets عبر تجربة Gemini في Workspace، وذلك بحسب نوع الحساب والخطة والمنطقة. عند توفره، افتح Sheets واختر ميزة Gemini لطلب تنظيم البيانات أو اقتراح صيغة، ثم تحقق من النتيجة.': {
            en: 'Gemini is Google’s AI assistant. Its features may be available in Google Sheets through Workspace, depending on your account, plan, and region. When available, open Sheets, select Gemini, and ask it to organize data or suggest a formula; then verify the result.',
            fr: 'Gemini est l’assistant IA de Google. Ses fonctionnalités peuvent être disponibles dans Google Sheets via Workspace, selon votre compte, votre offre et votre région. Si l’option est disponible, ouvrez Sheets, sélectionnez Gemini et demandez-lui d’organiser les données ou de proposer une formule, puis vérifiez le résultat.'
        },
        'Claude مساعد من Anthropic يساعد في تحليل النصوص الطويلة، تنظيم المعلومات، وشرح الأكواد والصيغ. يمكنك وصف أعمدة الجدول والنتيجة المطلوبة، ثم نسخ المخرجات إلى Sheets ومراجعتها قبل الاعتماد عليها.': {
            en: 'Claude is an assistant from Anthropic that can help analyze long text, organize information, and explain code and formulas. Describe the spreadsheet columns and desired result, then copy the output into Sheets and review it before relying on it.',
            fr: 'Claude est un assistant d’Anthropic qui peut analyser de longs textes, organiser des informations et expliquer du code ou des formules. Décrivez les colonnes du tableur et le résultat souhaité, puis copiez la réponse dans Sheets et vérifiez-la avant de l’utiliser.'
        },
        'تختلف بحسب النموذج والحمل؛ مناسب عادة للطلبات القصيرة والمتوسطة.': {
            en: 'Varies by model and demand; generally suitable for short and medium requests.',
            fr: 'Varie selon le modèle et la charge ; convient généralement aux demandes courtes et moyennes.'
        },
        'تختلف بحسب النموذج والحساب؛ قد يكون عمليًا عند العمل ضمن Workspace المدعوم.': {
            en: 'Varies by model and account; may be convenient in a supported Workspace.',
            fr: 'Varie selon le modèle et le compte ; peut être pratique dans un Workspace compatible.'
        },
        'تختلف بحسب النموذج وطول السياق؛ الطلبات الطويلة قد تحتاج وقتًا إضافيًا.': {
            en: 'Varies by model and context length; long requests may take more time.',
            fr: 'Varie selon le modèle et la longueur du contexte ; les demandes longues peuvent prendre plus de temps.'
        },
        'اطلب مخرجات TSV أو CSV مع عناوين أعمدة واضحة.': {
            en: 'Request TSV or CSV output with clear column headers.',
            fr: 'Demandez une sortie TSV ou CSV avec des en-têtes de colonnes clairs.'
        },
        'قد يساعد تكامله المتاح في Sheets على اقتراح تنظيم وصيغ ضمن مساحة العمل.': {
            en: 'Available Sheets integration may suggest organization and formulas within your workspace.',
            fr: 'L’intégration disponible dans Sheets peut suggérer une organisation et des formules dans votre espace de travail.'
        },
        'ينشئ جداول نصية منظمة ويمكن طلب TSV أو CSV للصقها في Sheets.': {
            en: 'It creates structured text tables; you can request TSV or CSV to paste into Sheets.',
            fr: 'Il crée des tableaux textuels structurés ; vous pouvez demander du TSV ou CSV à coller dans Sheets.'
        },
        'يوفر تكامل Google Workspace إمكانات ضمن تطبيقات Google المدعومة.': {
            en: 'Google Workspace integration provides features within supported Google apps.',
            fr: 'L’intégration Google Workspace propose des fonctionnalités dans les applications Google compatibles.'
        },
        'الترجمة والكتابة': { en: 'Translation and writing', fr: 'Traduction et rédaction' },
        'يساعد في صياغة النصوص وتلخيصها ومراجعتها.': {
            en: 'Helps draft, summarize, and review text.',
            fr: 'Aide à rédiger, résumer et relire des textes.'
        },
        'مهام عامة': { en: 'General tasks', fr: 'Tâches générales' },
        'تنظيم الأفكار وتحويل التعليمات إلى خطوات.': {
            en: 'Organizes ideas and turns instructions into steps.',
            fr: 'Organise les idées et transforme les consignes en étapes.'
        },
        'فتح القائمة الجانبية': { en: 'Open navigation menu', fr: 'Ouvrir le menu de navigation' },
        'تحليل البيانات': { en: 'Data analysis', fr: 'Analyse des données' },
        'المهمة': { en: 'Task', fr: 'Tâche' },
        'الفيديو يقدّم مدخلًا مبسطًا إلى الذكاء الاصطناعي. قد يختلف تشغيله بحسب إعدادات YouTube والمتصفح.': {
            en: 'This video offers a simple introduction to AI. Playback may vary depending on YouTube and browser settings.',
            fr: 'Cette vidéo propose une introduction simple à l’IA. La lecture peut varier selon les paramètres de YouTube et du navigateur.'
        },
        'مشاهدة الفيديو على YouTube': { en: 'Watch on YouTube', fr: 'Regarder sur YouTube' },
        'أنشئ برومبتًا مخصصًا، ثم راجع النتائج قبل استخدامها في جدولك.': {
            en: 'Create a custom prompt, then review the results before using them in your spreadsheet.',
            fr: 'Créez un prompt personnalisé, puis vérifiez les résultats avant de les utiliser dans votre feuille de calcul.'
        },
        'اختر الموديل والمهمة': { en: 'Choose a model and task', fr: 'Choisissez un modèle et une tâche' },
        'نسخ الكود': { en: 'Copy code', fr: 'Copier le code' },
        'نسخ الأوامر': { en: 'Copy commands', fr: 'Copier les commandes' },
        'الموقع الرسمي': { en: 'Official website', fr: 'Site officiel' },
        'التنزيل الرسمي': { en: 'Official download', fr: 'Téléchargement officiel' },
        'تابع إلى صفحة الدليل': { en: 'Continue to the guide page', fr: 'Accéder à la page du guide' },
        'قارن النماذج وتعرّف على الاستخدام المسؤول في مشاريع الطلاب.': {
            en: 'Compare models and learn about responsible use in student projects.',
            fr: 'Comparez les modèles et découvrez leur utilisation responsable dans les projets étudiants.'
        },
        'استكشف الموديلات': { en: 'Explore models', fr: 'Explorer les modèles' },
        'مُحاكي الذكاء الاصطناعي (AI Chat Sandbox)': { en: 'AI chat sandbox', fr: 'Bac à sable de discussion IA' },
        'اختر شخصية واكتب سؤالك لتجربة ردود إرشادية فورية حول Sheets والبرومبتات والأكواد.': {
            en: 'Choose a persona and ask a question to try instant guided replies about Sheets, prompts, and code.',
            fr: 'Choisissez un profil et posez une question pour essayer des réponses guidées sur Sheets, les prompts et le code.'
        },
        'خبير الشيت & الدوال': { en: 'Sheets and formulas expert', fr: 'Expert Sheets et formules' },
        'مهندس البرومبتات': { en: 'Prompt engineer', fr: 'Ingénieur de prompts' },
        'مرحبًا! اختر شخصية المساعد واسأل عن صيغة أو برومبت أو كود. هذه محاكاة محلية للتوضيح، وليست نموذج ذكاء اصطناعي متصلًا.': {
            en: 'Welcome! Choose an assistant persona and ask about a formula, prompt, or code. This is a local demonstration, not a connected AI model.',
            fr: 'Bienvenue ! Choisissez un profil et posez une question sur une formule, un prompt ou du code. Cette démonstration locale n’est pas connectée à un modèle d’IA.'
        },
        'المحادثة والتوليد يعملان داخل المتصفح فقط. قد تكون الردود عامة؛ راجع الصيغ والأكواد قبل استخدامها.': {
            en: 'Chat and generation run only in your browser. Replies may be generic; review formulas and code before use.',
            fr: 'La discussion et la génération s’exécutent uniquement dans votre navigateur. Les réponses peuvent être générales ; vérifiez les formules et le code avant utilisation.'
        },
        'ما الميزة أو الشرح الذي تود رؤيته في المشروع؟': { en: 'What feature or guide would you like to see in the project?', fr: 'Quelle fonctionnalité ou quel guide aimeriez-vous voir dans le projet ?' },
        'كيف أوثق استخدام أداة ذكاء اصطناعي في مشروع دراسي؟': { en: 'How should I document AI tool use in a school project?', fr: 'Comment documenter l’utilisation d’un outil d’IA dans un projet scolaire ?' },
        'اتبع تعليمات المقرر أو المؤسسة، واذكر الأداة والغرض من استخدامها، وميّز بوضوح بين عملك والمساعدة الآلية.': {
            en: 'Follow your course or institution’s instructions, name the tool and its purpose, and clearly distinguish your work from automated assistance.',
            fr: 'Suivez les consignes du cours ou de l’établissement, indiquez l’outil et son objectif, et distinguez clairement votre travail de l’assistance automatisée.'
        },
        'هل تضمن المنصة صحة الشيفرة أو النتائج الأكاديمية؟': { en: 'Does the platform guarantee code or academic results are correct?', fr: 'La plateforme garantit-elle l’exactitude du code ou des résultats académiques ?' },
        'لا. المحتوى تعليمي؛ اختبر الأمثلة وراجعها مع مصادر موثوقة ومشرف المشروع قبل استخدامها.': {
            en: 'No. The content is educational; test examples and review them with reliable sources and your project supervisor before use.',
            fr: 'Non. Le contenu est pédagogique ; testez les exemples et vérifiez-les avec des sources fiables et votre encadrant avant utilisation.'
        },
        'هل يمكن إدخال بيانات البحث أو المشاركين؟': { en: 'Can I enter research or participant data?', fr: 'Puis-je saisir des données de recherche ou de participants ?' },
        'استخدم بيانات تجريبية أو منزوعة الهوية، ولا ترفع معلومات المشاركين أو البيانات السرية دون موافقة وسياسة واضحة.': {
            en: 'Use test or de-identified data. Do not upload participant or confidential information without clear approval and policy.',
            fr: 'Utilisez des données de test ou anonymisées. Ne transmettez pas d’informations sur les participants ou confidentielles sans autorisation et politique clairement établies.'
        },
        'مركز الخصوصية والشفافية': { en: 'Privacy and transparency center', fr: 'Centre de confidentialité et de transparence' },
        'هذا مشروع شخصي وتعليمي طوّره شعيب، وليس تابعًا لأي شركة أو جهة رسمية. مدخلات مولّد البرومبتات تبقى داخل متصفحك ولا تُرسل إلى خوادم الموقع. إذا أرسلت مقترحًا، فسيُحفظ محليًا على جهازك فقط. أما مثال Apps Script في دليل Sheets، فلا يرسل بيانات إلى مزوّد خارجي إلا إذا شغّلته بنفسك بعد إعداده.': {
            en: 'This is a personal educational project by Shuaib and is not affiliated with any company or official organization. Prompt-generator inputs stay in your browser and are not sent to the site’s servers. Suggestions are stored only on your device. The Apps Script example in the Sheets guide sends data to an external provider only if you configure and run it yourself.',
            fr: 'Ce projet éducatif personnel a été créé par Shuaib et n’est affilié à aucune entreprise ni organisation officielle. Les saisies du générateur de prompts restent dans votre navigateur et ne sont pas envoyées aux serveurs du site. Les suggestions sont enregistrées uniquement sur votre appareil. L’exemple Apps Script du guide Sheets n’envoie des données à un fournisseur externe que si vous le configurez et l’exécutez vous-même.'
        },
        'قراءة سياسة الخصوصية وإخلاء المسؤولية': { en: 'Read the privacy policy and disclaimer', fr: 'Lire la politique de confidentialité et l’avertissement' },
        'مركز الخصوصية وإخلاء المسؤولية': { en: 'Privacy and disclaimer center', fr: 'Centre de confidentialité et avertissement' },
        'الإعدادات ⚙️': { en: 'Settings ⚙️', fr: 'Paramètres ⚙️' },
        'الإعدادات': { en: 'Settings', fr: 'Paramètres' },
        'المظهر': { en: 'Appearance', fr: 'Apparence' },
        'التبديل إلى المظهر الفاتح': { en: 'Switch to light appearance', fr: 'Passer à l’apparence claire' },
        'وضع العرض التقديمي': { en: 'Presentation mode', fr: 'Mode présentation' },
        'وضع العرض': { en: 'Presentation view', fr: 'Vue présentation' },
        'سرعة القراءة الصوتية': { en: 'Speech rate', fr: 'Vitesse de lecture audio' },
        'بطيئة': { en: 'Slow', fr: 'Lente' },
        'عادية': { en: 'Normal', fr: 'Normale' },
        'سريعة': { en: 'Fast', fr: 'Rapide' },
        'تُطبق على أزرار الاستماع في هذه الصفحة.': { en: 'Applies to the Listen buttons on this page.', fr: 'S’applique aux boutons Écouter de cette page.' },
        'القراءة الصوتية مدمجة في المتصفح ويمكن ضبط سرعتها هنا.': {
            en: 'Speech is built into your browser, and you can adjust its speed here.',
            fr: 'La lecture audio est intégrée à votre navigateur et sa vitesse peut être réglée ici.'
        },
        'الخطوة ١ من ٢ · Welcome': { en: 'Step 1 of 2 · Welcome', fr: 'Étape 1 sur 2 · Bienvenue' },
        'أهلًا وسهلًا بك، وشكرًا لزيارتك': { en: 'Welcome, and thank you for visiting', fr: 'Bienvenue et merci de votre visite' },
        'مرحبًا بك في مشروعي. أنا شعيب، طوّرت هذا الموقع بجهد فردي بوصفه مشروعًا شخصيًا مستقلًا لأغراض تعليمية، وليس تابعًا لمنظمة أو شركة.': {
            en: 'Welcome to my project. I’m Shuaib, and I built this independent personal website for educational purposes. It is not affiliated with any organization or company.',
            fr: 'Bienvenue sur mon projet. Je suis Shuaib et j’ai créé ce site personnel indépendant à des fins pédagogiques. Il n’est affilié à aucune organisation ni entreprise.'
        },
        'أقدّر وقتك واهتمامك ودعمك كثيرًا؛ فزيارتك وملاحظاتك تشجعني على مواصلة التعلم وتحسين المشروع. وسأدوّن أسماء الداعمين الأوائل تقديرًا لهم بعد أخذ موافقتهم.': {
            en: 'I truly appreciate your time, interest, and support. Your visit and feedback encourage me to keep learning and improving this project. With their permission, I will acknowledge early supporters.',
            fr: 'J’apprécie sincèrement votre temps, votre intérêt et votre soutien. Votre visite et vos commentaires m’encouragent à continuer d’apprendre et d’améliorer ce projet. Avec leur accord, je citerai les premiers soutiens.'
        },
        'شكرًا جزيلًا لكونك جزءًا من بداية هذه الرحلة. في الخطوة التالية ستطّلع على الخصوصية وشروط الاستخدام قبل الدخول.': {
            en: 'Thank you for being part of the beginning of this journey. In the next step, you can review privacy and terms of use before entering.',
            fr: 'Merci de participer au début de cette aventure. À l’étape suivante, vous pourrez consulter la confidentialité et les conditions d’utilisation avant d’entrer.'
        },
        'التالي / متابعة ⬅️': { en: 'Next / Continue ⬅️', fr: 'Suivant / Continuer ⬅️' },
        'الخطوة ٢ من ٢ · Privacy & Terms': { en: 'Step 2 of 2 · Privacy & Terms', fr: 'Étape 2 sur 2 · Confidentialité et conditions' },
        'الخصوصية وشروط الاستخدام': { en: 'Privacy and terms of use', fr: 'Confidentialité et conditions d’utilisation' },
        'هذا الموقع مشروع شخصي مستقل طوّره شعيب لأغراض تعليمية واستعراضية فقط، ولا يتبع Google أو OpenAI أو Anthropic أو أي جهة رسمية، ولا يمثلها أو تدعمه.': {
            en: 'This is an independent personal project developed by Shuaib for educational and demonstration purposes only. It is not affiliated with, representative of, or endorsed by Google, OpenAI, Anthropic, or any official entity.',
            fr: 'Ce projet personnel indépendant a été créé par Shuaib à des fins pédagogiques et de démonstration uniquement. Il n’est affilié à, ne représente ni n’est soutenu par Google, OpenAI, Anthropic ou une quelconque entité officielle.'
        },
        'الخصوصية ومعالجة البيانات': { en: 'Privacy and data processing', fr: 'Confidentialité et traitement des données' },
        'مدخلات الأدوات التفاعلية تُعالج في متصفحك ولا تُرسل إلى خوادم هذا الموقع. قد تُحفظ بعض التفضيلات أو المفضّلات محليًا في متصفحك.': {
            en: 'Interactive tool inputs are processed in your browser and are not sent to this website’s servers. Some preferences or favorites may be saved locally in your browser.',
            fr: 'Les saisies des outils interactifs sont traitées dans votre navigateur et ne sont pas envoyées aux serveurs de ce site. Certaines préférences ou favoris peuvent être enregistrés localement dans votre navigateur.'
        },
        'الأدوات التي تفتح خدمات خارجية أو تشغّل مثال Apps Script/API قد ترسل البيانات التي تختارها إلى مزوّد تلك الخدمة؛ لا تدخل بيانات حساسة أو مفاتيح سرية، وراجع سياسة المزوّد.': {
            en: 'Tools that open external services or run an Apps Script/API example may send the data you choose to that provider. Do not enter sensitive data or secret keys, and review the provider’s policy.',
            fr: 'Les outils qui ouvrent des services externes ou exécutent un exemple Apps Script/API peuvent envoyer les données choisies à ce fournisseur. Ne saisissez pas de données sensibles ni de clés secrètes et consultez sa politique.'
        },
        'قد تُحمّل الخطوط والشعارات والفيديو من مزوّدين خارجيين وفق سياساتهم. نموذج تسجيل الدخول في الموقع تجريبي ولا يرسل بياناته.': {
            en: 'Fonts, logos, and videos may be loaded from external providers under their policies. The website sign-in form is a demo and does not send its data.',
            fr: 'Les polices, logos et vidéos peuvent être chargés depuis des fournisseurs externes selon leurs politiques. Le formulaire de connexion est une démonstration et n’envoie pas ses données.'
        },
        'شروط الاستخدام': { en: 'Terms of use', fr: 'Conditions d’utilisation' },
        'استخدم المحتوى والأمثلة لأغراض التعلم، وتحقق من النتائج والأوامر قبل تطبيقها. أنت مسؤول عن البيانات التي تدخلها وعن أي خدمة خارجية تختار استخدامها.': {
            en: 'Use the content and examples for learning, and verify results and commands before applying them. You are responsible for the data you enter and any external service you choose to use.',
            fr: 'Utilisez le contenu et les exemples à des fins d’apprentissage et vérifiez les résultats et les commandes avant de les appliquer. Vous êtes responsable des données saisies et de tout service externe utilisé.'
        },
        'أوافق على سياسة الخصوصية وشروط الاستخدام.': {
            en: 'I agree to the privacy policy and terms of use.',
            fr: 'J’accepte la politique de confidentialité et les conditions d’utilisation.'
        },
        'رجوع': { en: 'Back', fr: 'Retour' },
        'الموافقة والدخول للموقع 🚀': { en: 'Agree and enter the website 🚀', fr: 'Accepter et accéder au site 🚀' },
        'تعذّر حفظ الموافقة في هذا المتصفح. حاول تفعيل التخزين أو استخدام متصفح آخر.': {
            en: 'Consent could not be saved in this browser. Try enabling storage or using another browser.',
            fr: 'Le consentement n’a pas pu être enregistré dans ce navigateur. Activez le stockage ou essayez un autre navigateur.'
        },
        'تابع باستخدام Facebook': { en: 'Continue with Facebook', fr: 'Continuer avec Facebook' },
        'تابع باستخدام GitHub': { en: 'Continue with GitHub', fr: 'Continuer avec GitHub' },
        'واجهة تجريبية فقط: لا يتم إرسال بياناتك أو حفظها، وتسجيل الدخول الحقيقي غير مفعّل.': {
            en: 'Demo interface only: your information is not sent or stored. Real sign-in is not enabled.',
            fr: 'Interface de démonstration uniquement : vos informations ne sont ni envoyées ni stockées. La connexion réelle est désactivée.'
        },
        'توسيع مكتبة أكواد Sheets وApps Script بأمثلة عملية إضافية.': {
            en: 'Expand the Sheets and Apps Script code library with more practical examples.',
            fr: 'Enrichir la bibliothèque de code Sheets et Apps Script avec des exemples pratiques supplémentaires.'
        },
        'إضافة شروحات تطبيقية متقدمة لتحليل البيانات وأتمتة الجداول.': {
            en: 'Add advanced practical guides for data analysis and spreadsheet automation.',
            fr: 'Ajouter des guides pratiques avancés sur l’analyse des données et l’automatisation des feuilles de calcul.'
        },
        'تحسين أدوات إنشاء البرومبتات وإضافة قوالب لمهام جديدة.': {
            en: 'Improve prompt-generation tools and add templates for new tasks.',
            fr: 'Améliorer les outils de génération de prompts et ajouter des modèles pour de nouvelles tâches.'
        },
        'قريباً / Coming Soon': { en: 'Coming soon', fr: 'Bientôt disponible' },
        'نعمل على إضافة ميزات وأدوات ذكاء اصطناعي جديدة وشروحات متقدمة.. انتظرونا!': {
            en: 'We are working on new AI features and tools, along with advanced guides. Stay tuned!',
            fr: 'Nous préparons de nouvelles fonctionnalités et outils d’IA ainsi que des guides avancés. À bientôt !'
        },
        'الحسابات الرسمية للمطور — تابعونا للمزيد': { en: 'Developer’s official accounts — follow for updates', fr: 'Comptes officiels du développeur — suivez-nous' },
        'الملف الأكاديمي الرسمي للمطور': { en: 'Developer’s official academic profile', fr: 'Profil académique officiel du développeur' },
        'شعيب مولى الخلوة | Shuaib Moula El Kheloua': { en: 'Shuaib Moula El Kheloua', fr: 'Shuaib Moula El Kheloua' },
        'المؤسسة الأكاديمية:': { en: 'Academic institution:', fr: 'Établissement académique :' },
        'طالب/باحث بمؤسسة الدكتور امحمد بوخبزة': { en: 'Student/researcher at Dr. Mhammed Boukhabza Institution', fr: 'Étudiant/chercheur à l’établissement Dr Mhammed Boukhabza' },
        'التخصص:': { en: 'Specialty:', fr: 'Spécialité :' },
        'مطور ويب ومهتم بالذكاء الاصطناعي': { en: 'Web developer and AI enthusiast', fr: 'Développeur Web et passionné d’IA' },
        'امسح الرمز لفتح رابط هذه الصفحة.': { en: 'Scan the code to open this page.', fr: 'Scannez le code pour ouvrir cette page.' },
        'يُنشأ الرمز للرابط العام فقط. في النسخة المحلية لا تُرسل مسارات الملفات أو localhost إلى أي خدمة.': {
            en: 'The code is generated only for a public URL. In the local version, file paths and localhost are never sent to any service.',
            fr: 'Le code est généré uniquement pour une URL publique. Dans la version locale, les chemins de fichiers et localhost ne sont envoyés à aucun service.'
        },
        'إخلاء المسؤولية': { en: 'Disclaimer', fr: 'Avertissement' },
        'إخلاء مسؤولية: هذا الموقع هو مشروع شخصي بحت تم تطويره بواسطة (شعيب) لأغراض تعليمية واستعراضية فقط، وهو غير تابع، ولا يمثل، وليس مدعوماً من أي جهة أو شركة رسمية (مثل Google أو OpenAI أو غيرها).': {
            en: 'Disclaimer: This is a purely personal project developed by Shuaib for educational and demonstration purposes only. It is not affiliated with, representative of, or supported by any official organization or company, including Google or OpenAI.',
            fr: 'Avertissement : ce projet entièrement personnel a été développé par Shuaib à des fins pédagogiques et de démonstration uniquement. Il n’est affilié à aucune organisation ou entreprise officielle, ne les représente pas et n’est pas soutenu par elles, notamment Google ou OpenAI.'
        },
        'الخصوصية والبيانات': { en: 'Privacy and data', fr: 'Confidentialité et données' },
        'مدخلات مولّدات البرومبتات تُعالج داخل متصفحك ولا تُرسل إلى خوادم هذا الموقع ولا تُحفظ فيه. تُحفظ تفضيلات المظهر والموديل والمهمة والمقترحات محليًا في هذا المتصفح. تبقى الموافقة على هذا الإشعار ضمن الجلسة الحالية فقط وتظهر مجددًا عند فتح جلسة جديدة. تختلف هذه القاعدة عند تشغيل عينة Apps Script يدويًا: يرسل المثال نطاق A1:D20 إلى OpenAI API؛ لا تستخدمه مع بيانات حساسة وراجع شروط مزوّد الخدمة.': {
            en: 'Prompt-generator inputs are processed in your browser and are neither sent to nor stored on this website’s servers. Appearance, model, task, and suggestion preferences are stored locally in this browser. Acknowledgement of this notice lasts for the current session and appears again in a new session. Manually running the Apps Script sample is different: it sends range A1:D20 to the OpenAI API. Do not use sensitive data, and review the provider’s terms.',
            fr: 'Les saisies du générateur de prompts sont traitées dans votre navigateur et ne sont ni envoyées ni conservées sur les serveurs du site. Les préférences d’apparence, de modèle, de tâche et les suggestions sont stockées localement. L’acceptation de cet avis vaut pour la session en cours et réapparaît lors d’une nouvelle session. L’exécution manuelle de l’exemple Apps Script est différente : elle envoie la plage A1:D20 à l’API OpenAI. N’utilisez pas de données sensibles et consultez les conditions du fournisseur.'
        },
        'عند فتح نافذة المطور من موقع منشور، يُرسل رابط الصفحة العام فقط إلى خدمة QR خارجية لتوليد الصورة؛ لا تُرسل مدخلات الأدوات معها. لا يتم إرسال مسارات الملفات المحلية أو عناوين localhost.': {
            en: 'When the developer panel is opened on a published website, only the public page URL is sent to an external QR service to generate the image; tool inputs are not included. Local file paths and localhost addresses are never sent.',
            fr: 'Lorsque le panneau développeur est ouvert sur un site publié, seule l’URL publique de la page est envoyée à un service QR externe pour générer l’image ; les saisies des outils ne sont pas incluses. Les chemins locaux et adresses localhost ne sont jamais transmis.'
        },
        'تحميل الخطوط والأصول من خدمات خارجية يتطلب اتصالًا بمزوّدي تلك الملفات، وقد يعالجون بيانات الاتصال وفق سياساتهم. لا ينفذ الموقع تسجيل دخول حقيقيًا ولا يرسل بيانات نموذج تسجيل الدخول.': {
            en: 'Loading fonts and assets from external services requires connecting to their providers, who may process connection data under their policies. This site does not perform real sign-in or send sign-in form data.',
            fr: 'Le chargement de polices et de ressources depuis des services externes nécessite une connexion à leurs fournisseurs, qui peuvent traiter les données de connexion selon leurs politiques. Ce site n’effectue aucune véritable connexion et n’envoie pas les données du formulaire.'
        },
        '01 نوفمبر 1954': { en: 'November 1, 1954', fr: '1er novembre 1954' },
        'ذكرى ثورة التحرير المظفرة': { en: 'Anniversary of the victorious Liberation Revolution', fr: 'Anniversaire de la glorieuse Révolution de libération' },
        '🇩🇿 01 نوفمبر 1954 | المجد والخلود لشهداء الجزائر الأبرار': {
            en: '🇩🇿 November 1, 1954 | Glory and eternity to Algeria’s noble martyrs',
            fr: '🇩🇿 1er novembre 1954 | Gloire et éternité aux nobles martyrs algériens'
        },
        'كيف يعمل الذكاء الاصطناعي؟': { en: 'How does AI work?', fr: 'Comment fonctionne l’IA ?' },
        'يمكن للمساعد الذكي تحويل وصفك إلى اقتراحات منظمة، لكنه لا يعرف بياناتك الخاصة إلا إذا زودته بها.': {
            en: 'An AI assistant can turn your description into organized suggestions, but it does not know your private data unless you provide it.',
            fr: 'Un assistant IA peut transformer votre description en suggestions structurées, mais il ne connaît pas vos données privées si vous ne les lui fournissez pas.'
        },
        '١. يفهم الطلب والسياق': { en: '1. Understand the request and context', fr: '1. Comprendre la demande et le contexte' },
        'حلّل طلبك المكتوب، وحدد الهدف والقيود مثل أسماء الأعمدة والفترة الزمنية ونوع النتيجة المطلوبة.': {
            en: 'Analyze your written request and identify its goal and constraints, such as column names, date range, and desired output.',
            fr: 'Analysez votre demande et identifiez son objectif et ses contraintes, comme les noms de colonnes, la période et le résultat souhaité.'
        },
        '٢. ينظم البيانات': { en: '2. Organize the data', fr: '2. Organiser les données' },
        'يقترح صفوفًا وأعمدة وصيغًا اعتمادًا على الأنماط التي تعلمها. اطلب إخراجًا مفصولًا بعلامات تبويب (TSV) لسهولة اللصق في الجدول.': {
            en: 'It suggests rows, columns, and formulas based on learned patterns. Request tab-separated (TSV) output for easy pasting into a spreadsheet.',
            fr: 'Il propose des lignes, colonnes et formules à partir des modèles appris. Demandez une sortie tabulée (TSV) pour la coller facilement dans le tableur.'
        },
        '٣. راجع النتيجة وجرّبها': { en: '3. Review and test the result', fr: '3. Vérifier et tester le résultat' },
        'الصيغ والنتائج قد تحتوي على أخطاء؛ تحقق من الحسابات، واختبر الصيغ على بيانات غير حساسة قبل اعتمادها.': {
            en: 'Formulas and results may contain errors. Check calculations and test formulas with non-sensitive data before relying on them.',
            fr: 'Les formules et résultats peuvent contenir des erreurs. Vérifiez les calculs et testez les formules avec des données non sensibles avant de les utiliser.'
        },
        'الموديلات المتوفرة للعمل مع Google Sheets': { en: 'Models available for Google Sheets', fr: 'Modèles disponibles pour Google Sheets' },
        'يمكن الاستفادة من Gemini داخل بعض حسابات Google Workspace، أو استخدام ChatGPT عبر خدمة منفصلة أو إضافة موثوقة. توافر الميزات والإضافات يختلف حسب الحساب والمنطقة.': {
            en: 'Gemini is available in some Google Workspace accounts; ChatGPT can also be used through a separate service or trusted add-on. Feature and add-on availability varies by account and region.',
            fr: 'Gemini est disponible dans certains comptes Google Workspace ; ChatGPT peut aussi être utilisé via un service distinct ou un module fiable. La disponibilité des fonctionnalités varie selon le compte et la région.'
        },
        'التفعيل:': { en: 'Setup:', fr: 'Configuration :' },
        'افتح Google Sheets بحساب يدعم ميزات Gemini، وابحث عن خيار Gemini أو «اسأل Gemini» في الواجهة. إذا لم يظهر الخيار، فتحقق من خطة الحساب والمنطقة وإعدادات مسؤول Workspace.': {
            en: 'Open Google Sheets with an account that supports Gemini and look for Gemini or “Ask Gemini” in the interface. If it is unavailable, check your account plan, region, and Workspace administrator settings.',
            fr: 'Ouvrez Google Sheets avec un compte compatible avec Gemini et recherchez Gemini ou « Demander à Gemini ». Si l’option n’apparaît pas, vérifiez l’offre du compte, la région et les paramètres de l’administrateur Workspace.'
        },
        'التجربة:': { en: 'Try it:', fr: 'Essai :' },
        'اطلب اقتراح أعمدة مناسبة لميزانية شهرية، أو اطلب شرح صيغة محددة قبل إدخالها ومراجعتها داخل الجدول.': {
            en: 'Ask for suitable columns for a monthly budget, or request an explanation of a formula before entering and reviewing it in the spreadsheet.',
            fr: 'Demandez des colonnes adaptées à un budget mensuel ou l’explication d’une formule avant de l’ajouter et de la vérifier dans le tableur.'
        },
        'ChatGPT من OpenAI': { en: 'ChatGPT by OpenAI', fr: 'ChatGPT par OpenAI' },
        'استخدم ChatGPT في نافذة منفصلة وانسخ البيانات إليه بعد إزالة المعلومات الحساسة. ويمكن استخدام إضافة من Google Workspace Marketplace بعد التحقق من ناشرها وصلاحياتها وسياسة الخصوصية.': {
            en: 'Use ChatGPT in a separate window and remove sensitive information before pasting data. You may also use an add-on from Google Workspace Marketplace after checking its publisher, permissions, and privacy policy.',
            fr: 'Utilisez ChatGPT dans une fenêtre distincte et supprimez les informations sensibles avant d’y coller des données. Vous pouvez aussi utiliser un module de Google Workspace Marketplace après vérification de son éditeur, de ses autorisations et de sa politique de confidentialité.'
        },
        'اطلب إنشاء جدول بصيغة TSV، ثم انسخ النتيجة والصقها في الخلية A1 في Sheets. لا تشارك مفاتيح API أو بيانات سرية.': {
            en: 'Request a table in TSV format, then copy and paste it into cell A1 in Sheets. Do not share API keys or confidential data.',
            fr: 'Demandez un tableau au format TSV, puis copiez-le dans la cellule A1 de Sheets. Ne partagez pas de clés API ni de données confidentielles.'
        },
        'قبل تثبيت أي إضافة خارجية، راجع الأذونات والناشر وسياسة الخصوصية. لا تضع كلمات المرور أو بيانات العملاء أو مفاتيح API في الطلبات.': {
            en: 'Before installing an external add-on, review its permissions, publisher, and privacy policy. Do not include passwords, customer data, or API keys in prompts.',
            fr: 'Avant d’installer un module externe, vérifiez ses autorisations, son éditeur et sa politique de confidentialité. N’incluez pas de mots de passe, données clients ou clés API dans les prompts.'
        },
        'مولّد البرومبتات الذكي (Interactive Prompt Generator)': { en: 'Interactive Prompt Generator', fr: 'Générateur interactif de prompts' },
        'اكتب ما تحتاجه، واختر الموديل ونوع المهمة، لتحصل على برومبت احترافي مخصص قابل للنسخ.': {
            en: 'Describe what you need and choose a model and task to create a tailored professional prompt ready to copy.',
            fr: 'Décrivez votre besoin et choisissez un modèle et une tâche pour créer un prompt professionnel personnalisé à copier.'
        },
        'كتابة صيغ Sheets': { en: 'Write Sheets formulas', fr: 'Rédiger des formules Sheets' },
        'افتح أمثلة اللغات': { en: 'Open language examples', fr: 'Ouvrir les exemples de langage' },
        'انتقل إلى مكتبة الأكواد': { en: 'Go to the code library', fr: 'Accéder à la bibliothèque de code' },
        'تجربة المساعدات': { en: 'Try the assistants', fr: 'Essayer les assistants' },
        'جرّب محاكي الشات': { en: 'Try the chat simulator', fr: 'Essayer le simulateur de discussion' },
        'لشرح ChatGPT وGemini وClaude بالعربية والإنجليزية، تفضل بزيارة': {
            en: 'For Arabic and English guides to ChatGPT, Gemini, and Claude, visit the',
            fr: 'Pour consulter les guides en arabe et en anglais de ChatGPT, Gemini et Claude, visitez le'
        },
        'تصفح الشيفرات التعليمية وجرّب أمثلة Apps Script أو محاكاة اللغات البرمجية، مع مراجعة كل خطوة قبل استخدامها.': {
            en: 'Browse educational code and try Apps Script examples or programming-language simulations, reviewing each step before use.',
            fr: 'Parcourez le code pédagogique et essayez des exemples Apps Script ou des simulations de langages, en vérifiant chaque étape avant utilisation.'
        },
        'استكشف مكتبة الأكواد والحلول': { en: 'Explore the code and solutions library', fr: 'Explorer la bibliothèque de code et de solutions' },
        'النموذج الفرعي': { en: 'Model variant', fr: 'Variante du modèle' },
        'الموديل: GPT-4o mini\nالتقدير: نحو 650 توكن إدخال\nتكلفة الإدخال التقريبية: $0.000097 USD (لا تشمل توكنات الرد).': {
            en: 'Model: GPT-4o mini\nEstimate: about 650 input tokens\nEstimated input cost: $0.000097 USD (response tokens excluded).',
            fr: 'Modèle : GPT-4o mini\nEstimation : environ 650 tokens d’entrée\nCoût estimé de l’entrée : 0,000097 USD (hors tokens de réponse).'
        },
        'استخدم بيانات اصطناعية أو منزوعة الهوية، ولا ترسل بيانات المشاركين أو مفاتيح API إلى نماذج خارجية.': {
            en: 'Use synthetic or de-identified data. Do not send participant data or API keys to external models.',
            fr: 'Utilisez des données synthétiques ou anonymisées. N’envoyez pas de données de participants ni de clés API à des modèles externes.'
        },
        'سجل التحديثات والتطوير': { en: 'Development updates and changelog', fr: 'Mises à jour et journal du développement' },
        'الإصدار الحالي: v1.0.0': { en: 'Current version: v1.0.0', fr: 'Version actuelle : v1.0.0' },
        'مولّد البرومبتات ومكتبة الأكواد': { en: 'Prompt generator and code library', fr: 'Générateur de prompts et bibliothèque de code' },
        'مولّد برومبتات حسب السياق، ومثال Apps Script مع تنبيهات الخصوصية، وحاسبة أدوات Sheets.': {
            en: 'Context-aware prompt generator, Apps Script example with privacy notices, and Sheets tools calculator.',
            fr: 'Générateur de prompts contextuels, exemple Apps Script avec avis de confidentialité et calculateur d’outils Sheets.'
        },
        'توسيع مركز الأدوات': { en: 'Expand the tools center', fr: 'Développer le centre d’outils' },
        'تحسين أمثلة الصيغ والتنظيف وإضافة شروحات عملية تدريجيًا.': {
            en: 'Gradually improve formula and cleaning examples and add practical guides.',
            fr: 'Améliorer progressivement les exemples de formules et de nettoyage, et ajouter des guides pratiques.'
        },
        'إضافة أمثلة Apps Script جديدة، ودروس متقدمة للأتمتة وتحليل البيانات، وقوالب برومبت إضافية.': {
            en: 'Add Apps Script examples, advanced automation and data-analysis lessons, and more prompt templates.',
            fr: 'Ajouter des exemples Apps Script, des cours avancés d’automatisation et d’analyse de données, ainsi que des modèles de prompts.'
        },
        'تم التطوير بواسطة شعيب © 2026 - شارك هذا الدليل': {
            en: 'Developed by Shuaib © 2026 — Share this guide',
            fr: 'Développé par Shuaib © 2026 — Partager ce guide'
        },
        'مشاركة على X': { en: 'Share on X', fr: 'Partager sur X' },
        'سياسة الخصوصية وإخلاء المسؤولية': { en: 'Privacy policy and disclaimer', fr: 'Politique de confidentialité et avertissement' },
        'تحميل خط Tajawal والشعارات البرمجية من خدمات خارجية يتطلب اتصالًا بمزوّدي تلك الملفات. لا ينفذ الموقع تسجيل دخول حقيقيًا ولا يرسل بيانات نموذج تسجيل الدخول.': {
            en: 'Loading the Tajawal font and programming logos from external services requires connecting to their providers. This site does not perform real sign-in or send sign-in form data.',
            fr: 'Le chargement de la police Tajawal et des logos de programmation depuis des services externes nécessite une connexion à leurs fournisseurs. Ce site n’effectue aucune véritable connexion et n’envoie pas les données du formulaire.'
        },
        'مناسب لـ': { en: 'Suitable for', fr: 'Convient à' },
        'صياغة الطلبات، الشرح، وإنشاء مسودات البيانات.': {
            en: 'Prompt writing, explanations, and creating data drafts.',
            fr: 'Rédaction de prompts, explications et création de brouillons de données.'
        },
        'المهام داخل Google Workspace عند توافر الميزة للحساب.': {
            en: 'Tasks in Google Workspace when the feature is available for the account.',
            fr: 'Tâches dans Google Workspace lorsque la fonctionnalité est disponible pour le compte.'
        },
        'تلخيص النصوص الطويلة، الكتابة، وتحليل المحتوى.': {
            en: 'Summarizing long text, writing, and content analysis.',
            fr: 'Résumé de longs textes, rédaction et analyse de contenu.'
        },
        'الأسئلة الشائعة': { en: 'Frequently asked questions', fr: 'Questions fréquentes' },
        'أي موديل هو الأسرع؟': { en: 'Which model is the fastest?', fr: 'Quel modèle est le plus rapide ?' },
        'لا توجد إجابة ثابتة؛ فالسرعة تعتمد على إصدار النموذج، طول الطلب، الاتصال، وقيود الحساب. اختبر المهام نفسها في حسابك للمقارنة.': {
            en: 'There is no fixed answer. Speed depends on model version, prompt length, connection, and account limits. Test the same tasks in your account to compare.',
            fr: 'Il n’y a pas de réponse fixe. La vitesse dépend de la version du modèle, de la longueur de la demande, de la connexion et des limites du compte. Testez les mêmes tâches dans votre compte.'
        },
        'ما أفضل تنسيق لنسخ بيانات إلى Sheets؟': { en: 'What is the best format for copying data to Sheets?', fr: 'Quel est le meilleur format pour copier des données dans Sheets ?' },
        'اطلب TSV (قيم مفصولة بعلامات تبويب) مع صف عناوين. عادةً يمكن لصقه مباشرة في الخلايا مع الحفاظ على الأعمدة.': {
            en: 'Request TSV (tab-separated values) with a header row. It can usually be pasted directly into cells while preserving columns.',
            fr: 'Demandez du TSV (valeurs séparées par des tabulations) avec une ligne d’en-tête. Le contenu peut généralement être collé directement dans les cellules en conservant les colonnes.'
        },
        'هل نتائج الموديلات دقيقة دائمًا؟': { en: 'Are model outputs always accurate?', fr: 'Les résultats des modèles sont-ils toujours exacts ?' },
        'لا. راجع البيانات والصيغ على أمثلة معروفة، ولا تشارك معلومات حساسة في خدمات لا تسمح بها سياسة مؤسستك.': {
            en: 'No. Check data and formulas against known examples, and do not share sensitive information with services prohibited by your institution’s policy.',
            fr: 'Non. Vérifiez les données et formules avec des exemples connus, et ne partagez pas d’informations sensibles avec des services interdits par les règles de votre établissement.'
        },
        'مدخلات مولّدات البرومبتات تُعالج داخل متصفحك ولا تُرسل إلى خوادم هذا الموقع ولا تُحفظ فيه. تُحفظ محليًا تفضيلات المظهر والموديل والمهمة وموافقة السياسة فقط. تختلف هذه القاعدة عند تشغيل عينة Apps Script يدويًا: يرسل المثال نطاق A1:D20 إلى OpenAI API؛ لا تستخدمه مع بيانات حساسة وراجع شروط مزوّد الخدمة.': {
            en: 'Prompt-generator inputs are processed in your browser and are not sent to or stored on this website’s servers. Only appearance, model, task, and policy preferences are stored locally. Manually running the Apps Script sample is different: it sends range A1:D20 to the OpenAI API. Do not use sensitive data, and review the provider’s terms.',
            fr: 'Les saisies du générateur de prompts sont traitées dans votre navigateur et ne sont ni envoyées ni stockées sur les serveurs du site. Seules les préférences d’apparence, de modèle, de tâche et de politique sont conservées localement. L’exécution manuelle de l’exemple Apps Script est différente : elle envoie la plage A1:D20 à l’API OpenAI. N’utilisez pas de données sensibles et consultez les conditions du fournisseur.'
        },
        'هذا مشروع شخصي وتعليمي طوّره شعيب، وليس تابعًا لأي شركة أو جهة رسمية. مدخلات مولّد البرومبتات لا تغادر متصفحك، والمقترحات تحفظ محليًا في هذا المتصفح فقط. تنبيه مهم: عند تشغيل مثال Apps Script بنفسك، يرسل النطاق الذي يقرأه إلى OpenAI API؛ لا تستخدمه مع بيانات شخصية أو سرية.': {
            en: 'This is a personal educational project by Shuaib and is not affiliated with any company or official organization. Prompt-generator inputs stay in your browser, and suggestions are stored only in this browser. Important: running the Apps Script example sends the range it reads to the OpenAI API. Do not use personal or confidential data.',
            fr: 'Ce projet éducatif personnel de Shuaib n’est affilié à aucune entreprise ni organisation officielle. Les saisies du générateur de prompts restent dans votre navigateur et les suggestions sont conservées uniquement dans ce navigateur. Important : l’exécution de l’exemple Apps Script envoie la plage lue à l’API OpenAI. N’utilisez pas de données personnelles ou confidentielles.'
        },
        'تحميل خط Tajawal من Google Fonts يتطلب اتصالًا بخوادم Google، وقد يعالج مزوّد الخط بيانات الاتصال وفق سياسته. لا ينفذ الموقع تسجيل دخول حقيقيًا ولا يرسل بيانات نموذج تسجيل الدخول.': {
            en: 'Loading the Tajawal font from Google Fonts requires connecting to Google servers, which may process connection data under its policy. This site does not perform real sign-in or send sign-in form data.',
            fr: 'Le chargement de la police Tajawal depuis Google Fonts nécessite une connexion aux serveurs Google, qui peuvent traiter les données de connexion selon leur politique. Ce site n’effectue aucune véritable connexion et n’envoie pas les données du formulaire.'
        },
        'نحن نحترم خصوصيتك. استخدامك للموقع يعني موافقتك على سياسة الخصوصية والمفهوم الشخصي للمشروع.': {
            en: 'We respect your privacy. Using this website means you acknowledge its privacy policy and independent-project status.',
            fr: 'Nous respectons votre vie privée. L’utilisation de ce site implique la prise en compte de sa politique de confidentialité et de son statut de projet indépendant.'
        },
        'أوافق / Accept': { en: 'I agree / Accept', fr: 'J’accepte' },
        'مشروع شعيب | SHUAIB\'S PROJECT': { en: 'Shuaib’s Project', fr: 'Projet de Shuaib' },
        'سعر الإدخال لكل مليون توكن (USD)': { en: 'Input price per million tokens (USD)', fr: 'Prix d’entrée par million de tokens (USD)' },
        'الموديل: ChatGPT\nالتقدير: نحو 650 توكن إدخال\nتكلفة الإدخال التقريبية: $0.000650 USD (لا تشمل توكنات الرد).': {
            en: 'Model: ChatGPT\nEstimate: about 650 input tokens\nEstimated input cost: $0.000650 USD (response tokens excluded).',
            fr: 'Modèle : ChatGPT\nEstimation : environ 650 tokens d’entrée\nCoût estimé de l’entrée : 0,000650 USD (hors tokens de réponse).'
        },
        'إغلاق': { en: 'Close', fr: 'Fermer' },
        'فتح Claude': { en: 'Open Claude', fr: 'Ouvrir Claude' },
        'موقع VS Code': { en: 'VS Code website', fr: 'Site de VS Code' },
        '، الصق الكود، ثم شغّله بالطريقة المناسبة للغة. أما كود Google Apps Script فيوضع في محرر Apps Script المرتبط بجدول Google Sheets.': {
            en: ', paste the code, then run it using the appropriate method for that language. Google Apps Script code belongs in the Apps Script editor connected to a Google Sheet.',
            fr: ', collez le code, puis exécutez-le de la manière adaptée au langage. Le code Google Apps Script doit être placé dans l’éditeur Apps Script associé à une feuille Google Sheets.'
        },
        'حفظ الكود': { en: 'Save code', fr: 'Enregistrer le code' },
        'استماع 🔊 للشرح': { en: 'Listen to the explanation 🔊', fr: 'Écouter l’explication 🔊' },
        'JavaScript · تشغيل في Console المتصفح أو مشروعك': { en: 'JavaScript · Run in the browser console or your project', fr: 'JavaScript · Exécuter dans la console du navigateur ou votre projet' },
        '. غيّر قائمة': { en: '. Change the list', fr: '. Modifiez la liste' },
        'Google Colab — سحابي': { en: 'Google Colab — cloud', fr: 'Google Colab — cloud' },
        'فتح Colab': { en: 'Open Colab', fr: 'Ouvrir Colab' },
        'JavaScript والويب — iOS': { en: 'JavaScript and web — iOS', fr: 'JavaScript et Web — iOS' },
        'على Android افتح Pydroid 3، أنشئ ملفًا باسم main.py، الصق كود Python واضغط زر التشغيل. أو احفظه في Termux باسم main.py ثم نفّذ python main.py.': {
            en: 'On Android, open Pydroid 3, create main.py, paste the Python code, and tap Run. Or save it as main.py in Termux and run python main.py.',
            fr: 'Sur Android, ouvrez Pydroid 3, créez main.py, collez le code Python et appuyez sur Exécuter. Ou enregistrez-le sous main.py dans Termux et lancez python main.py.'
        },
        'أنشئ ملفًا جديدًا باسم': { en: 'Create a new file named', fr: 'Créez un nouveau fichier nommé' },
        'نسخ المثال': { en: 'Copy example', fr: 'Copier l’exemple' },
        'عرض ناتج تجريبي': { en: 'Show sample output', fr: 'Afficher un résultat exemple' },
        'ثم شغّله بالأمر': { en: 'then run it with the command', fr: 'puis exécutez-le avec la commande' },
        '. تحقق من توافق الحزم قبل تثبيتها.': { en: '. Check package compatibility before installing.', fr: '. Vérifiez la compatibilité des paquets avant installation.' },
        '© 2026 Shuaib\'s Project. All rights reserved. | Share this page': {
            ar: '© 2026 مشروع شعيب. جميع الحقوق محفوظة. | شارك هذه الصفحة',
            fr: '© 2026 Projet de Shuaib. Tous droits réservés. | Partager cette page'
        }
    };

    const pageDetails = {
        'index.html': { title: 'page-index', heading: 'welcome-title' },
        'ai-models.html': { title: 'page-ai-models' },
        'sheet-tutorial.html': { title: 'page-sheet-tutorial', heading: 'sheet-title' },
        'pc-development.html': { title: 'page-pc-development', heading: 'pc-title' },
        'mobile-development.html': { title: 'page-mobile-development', heading: 'mobile-title' },
        'ideas.html': { title: 'page-ideas', heading: 'ideas-title' },
        'privacy.html': { title: 'page-privacy', heading: 'privacy-title' }
    };

    const localizedContentByText = new Map(
        Object.entries(localizedContent).map(([source, values]) => [normalizeText(source), values])
    );
    const textNodeStates = new WeakMap();
    const translatedAttributes = ['placeholder', 'title', 'aria-label', 'alt', 'value'];

    function normalizeText(value) {
        return value.replace(/\s+/g, ' ').trim();
    }

    function translateTextNode(node, language) {
        let state = textNodeStates.get(node);
        const currentText = node.nodeValue;
        if (!state) {
            state = { source: currentText, rendered: currentText };
            textNodeStates.set(node, state);
        } else if (currentText !== state.rendered) {
            state.source = currentText;
        }

        const translation = localizedContentByText.get(normalizeText(state.source))?.[language];
        if (translation === undefined) {
            state.rendered = state.source;
            if (node.nodeValue !== state.source) node.nodeValue = state.source;
            return;
        }
        const leadingWhitespace = state.source.match(/^\s*/)?.[0] || '';
        const trailingWhitespace = state.source.match(/\s*$/)?.[0] || '';
        state.rendered = `${leadingWhitespace}${translation}${trailingWhitespace}`;
        if (node.nodeValue !== state.rendered) node.nodeValue = state.rendered;
    }

    function translateContentSubtree(subtree, language) {
        if (subtree.nodeType === Node.TEXT_NODE) {
            const parent = subtree.parentElement;
            if (parent && !parent.closest('script,style,code,pre,textarea,svg,[data-i18n],.cmd-simulator')) {
                translateTextNode(subtree, language);
            }
            return;
        }
        if (subtree.nodeType !== Node.ELEMENT_NODE) return;
        const element = subtree;
        if (element.matches('script,style,.cmd-simulator')) return;

        const elements = [element, ...element.querySelectorAll('*')];
        for (const currentElement of elements) {
            if (currentElement.matches('script,style,.cmd-simulator') ||
                currentElement.closest('.cmd-simulator')) continue;

            for (const attribute of translatedAttributes) {
                if (attribute === 'value' &&
                    !currentElement.matches('button, input[type="button"], input[type="submit"], input[type="reset"]')) continue;
                const value = currentElement.getAttribute(attribute);
                if (!value) continue;
                const sourceKey = `source${attribute.replace(/(^|-)(\w)/g, (_, __, letter) => letter.toUpperCase())}`;
                if (!currentElement.dataset[sourceKey]) currentElement.dataset[sourceKey] = value;
                const sourceValue = currentElement.dataset[sourceKey];
                const translation = localizedContentByText.get(normalizeText(sourceValue))?.[language];
                const localizedValue = translation === undefined ? sourceValue : translation;
                if (value !== localizedValue) currentElement.setAttribute(attribute, localizedValue);
            }
        }

        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
            const textNode = walker.currentNode;
            const parent = textNode.parentElement;
            if (parent && !parent.closest('script,style,code,pre,textarea,svg,[data-i18n],.cmd-simulator')) {
                translateTextNode(textNode, language);
            }
        }
    }

    function translatePage(language) {
        const dictionary = translations[language];
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const translation = dictionary[element.dataset.i18n];
            if (translation !== undefined) element.textContent = translation;
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
            const translation = dictionary[element.dataset.i18nPlaceholder];
            if (translation !== undefined) element.placeholder = translation;
        });
        document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
            const translation = dictionary[element.dataset.i18nAriaLabel];
            if (translation !== undefined) element.setAttribute('aria-label', translation);
        });
        translateContentSubtree(document.body, language);
        const languageSwitcher = document.querySelector('.language-switcher-container');
        const languageLabels = {
            ar: { group: 'اختيار اللغة', ar: 'العربية', en: 'الإنجليزية', fr: 'الفرنسية' },
            en: { group: 'Choose language', ar: 'Arabic', en: 'English', fr: 'French' },
            fr: { group: 'Choisir la langue', ar: 'Arabe', en: 'Anglais', fr: 'Français' }
        }[language];
        if (languageSwitcher) {
            languageSwitcher.setAttribute('aria-label', languageLabels.group);
            languageSwitcher.querySelectorAll('button[data-lang]').forEach((button) => {
                button.setAttribute('aria-label', languageLabels[button.dataset.lang]);
                button.setAttribute('aria-pressed', String(button.dataset.lang === language));
            });
        }

        const page = pageDetails[location.pathname.split('/').pop().toLowerCase()];
        if (page) {
            const title = dictionary[page.title];
            if (title !== undefined) document.title = title;
            if (page.heading) {
                const heading = document.querySelector('main h1');
                if (heading) {
                    heading.dataset.i18n = page.heading;
                    heading.textContent = dictionary[page.heading];
                }
            }
        }
        window.dispatchEvent(new CustomEvent('site-language-change', { detail: { language } }));
    }

    function setLanguage(language) {
        const selectedLanguage = Object.prototype.hasOwnProperty.call(translations, language) ? language : 'ar';
        root.lang = selectedLanguage;
        root.dir = selectedLanguage === 'ar' ? 'rtl' : 'ltr';
        translatePage(selectedLanguage);
        try {
            localStorage.setItem(languageStorageKey, selectedLanguage);
        } catch (error) {
            console.error('Selected language could not be saved.', error);
        }
    }

    function addNavigationControls() {
        const nav = document.querySelector('nav.site-header-nav');
        if (!nav) return;

        const sectionLabels = {
            '#home': 'nav-home',
            '#model-showcase': 'nav-models',
            '#home-showcase': 'nav-models',
            '#sheets-programming': 'nav-learning',
            '#interactive-tools': 'nav-tools',
            '#home-support-section': 'nav-faq'
        };
        const navLinks = nav.querySelectorAll('.nav-links a, .site-nav-links a, .drawer-links a, .site-menu-links a');
        navLinks.forEach((link) => {
            const path = new URL(link.href, location.href).pathname.split('/').pop().toLowerCase();
            if (sectionLabels[link.hash]) link.dataset.i18n = sectionLabels[link.hash];
            else if (path === 'index.html' || !path) link.dataset.i18n = 'nav-home';
            else if (path === 'ai-models.html') link.dataset.i18n = 'nav-models';
            else if (path === 'sheet-tutorial.html') link.dataset.i18n = 'nav-sheets';
            else if (path === 'ideas.html') link.dataset.i18n = 'nav-ideas';
            else if (path === 'privacy.html') link.dataset.i18n = 'nav-privacy';
            else if (path === 'pc-development.html') link.dataset.i18n = 'nav-pc';
            else if (path === 'mobile-development.html') link.dataset.i18n = 'nav-mobile';
        });

        const cmdButton = document.createElement('button');
        cmdButton.className = 'nav-cmd-btn';
        cmdButton.type = 'button';
        cmdButton.dataset.i18n = 'nav-cmd';
        cmdButton.setAttribute('aria-controls', 'cmd-simulator');
        cmdButton.setAttribute('aria-expanded', 'false');
        cmdButton.addEventListener('click', () => {
            if (typeof window.toggleCMD !== 'function') {
                console.error('CMD simulator is unavailable on this page.');
                return;
            }
            window.toggleCMD();
        });
        nav.prepend(cmdButton);

        const languageSwitcher = nav.querySelector('#language-switcher-container');
        if (!languageSwitcher) {
            console.error('Language switcher container is missing from the site header.');
            return;
        }
        languageSwitcher.innerHTML = `
            <button type="button" data-lang="ar">AR</button>
            <button type="button" data-lang="en">EN</button>
            <button type="button" data-lang="fr">FR</button>`;
        languageSwitcher.addEventListener('click', (event) => {
            const button = event.target.closest('button[data-lang]');
            if (button && languageSwitcher.contains(button)) setLanguage(button.dataset.lang);
        });
    }

    window.setSiteLanguage = setLanguage;
    window.addEventListener('DOMContentLoaded', () => {
        addNavigationControls();
        let savedLanguage = 'ar';
        try {
            savedLanguage = localStorage.getItem(languageStorageKey) || 'ar';
        } catch (error) {
            console.error('Saved language could not be read.', error);
        }
        setLanguage(savedLanguage);
        const contentObserver = new MutationObserver((records) => {
            const language = root.lang;
            records.forEach((record) => {
                record.addedNodes.forEach((node) => translateContentSubtree(node, language));
            });
        });
        contentObserver.observe(document.body, { childList: true, subtree: true });
    }, { once: true });
})();
