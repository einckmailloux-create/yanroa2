import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translations = getTranslations(language);
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const getTranslations = (lang: Language) => {
  const translations = {
    zh: zhTranslations,
    en: enTranslations,
  };
  return translations[lang];
};

const zhTranslations = {
  splash: {
    tagline: '遇见最美的自己',
  },
  nav: {
    home: '首页',
    projects: '项目',
    cases: '案例',
    faq: 'FAQ',
    login: '登录',
    logout: '退出登录',
    bookNow: '立即预约',
    facialContour: '面部轮廓',
    bodySculpting: '身体塑形',
    facialRejuvenation: '面部年轻化',
    hairTransplant: '植发',
    dental: '牙齿美容',
  },
  hero: {
    title1: '只有自然独一无二的，',
    title2: '你才是这个世界上最独特的符号',
    cta: '现在开始探索',
  },
  services: {
    beforePlaceholder: '【此处放置案例照片 A】',
    afterPlaceholder: '【此处放置案例照片 B】',
  },
  advantages: {
    title: '我们的优势',
    advantage1: '注重面部整体比例和谐',
    advantage2: '专业的面诊评估',
    advantage3: '专注于整体特征',
    advantage4: '看看未来的自己',
    advantage5: '基于美学的个性化方案',
  },
  ethnicity: {
    title: '不同人种的面部特征',
    subtitle: '注重面部整体比例和谐，基于美学对不同人种有个性化的定制方案',
    black: '黑人',
    asian: '黄种人',
    white: '白人',
    boneFeatures: '骨骼特征：',
    softTissue: '软组织特征：',
    blackBone: '面中部常显前突，但鼻骨低平；眶距可能较宽；下颌骨发达，嘴唇极厚且唇红外翻。',
    blackSoft: '皮肤较厚，不易长皱纹但需关注瘢痕愈合；鼻翼宽大，鼻孔扁平，鼻小柱短；多为双眼皮但形态深邃。',
    asianBone: '颧骨常显外扩，下颌角棱角分明，眉骨与眶缘发育平缓。',
    asianSoft: '单眼皮或内双比例高，常伴有内眦赘皮；鼻梁偏低，鼻头圆润，鼻基底凹陷；软组织相对丰厚。',
    whiteBone: '眉骨与眶缘极为突出，颧骨转向侧面，下颌骨线条分明，下巴尖翘。',
    whiteSoft: '皮肤较薄，脂肪含量少，容易出现皱纹和骨相显露；鼻梁高挺，鼻翼窄，嘴唇偏薄；双眼皮宽而深。',
    cta: '了解你的面部特征，立即开始行之有效的行动来提升你的容颜',
  },
  plan: {
    title: '获取你的手术计划',
    subtitle: '了解你的面部特征，立即开始行之有效的行动来提升你的容颜',
    before: '术前照片 (Before)',
    after: '术后照片 (After)',
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
    step1: '获取专家面部分析',
    step2: '你最美的样子',
    step3: '获取你的专属焕颜方案',
    step4: '见证显著效果',
  },
  analysis: {
    title: '你的脸，独一无二的解法',
    subtitle: '基于人种骨架、动态肌肉与心理诉求的六维面诊分析法',
    dimension1: '轮廓与骨相维度',
    dimension2: '软组织与皮相维度',
    dimension3: '五官局部维度',
    dimension4: '动态与肌肉维度',
  },
  vision: {
    title: '有没有想过你的脸会是什么样子',
    subtitle: '展望未来',
  },
  realCases: {
    title: '真实案例对比',
    before: '手术前',
    after: '手术后',
    months: '个月',
  },
  caseStudies: {
    title: '成功案例',
    viewAll: '查看所有案例',
  },
  testimonials: {
    title: '客户对我们的评价',
    mapTitle: '我们的客户遍布全世界',
    mapSubtitle: '让客户满意是我们的永恒的追求',
    readMore: '快来看看',
  },
  journey: {
    title: '今天开始你的蜕变之旅',
    step1: '点击回答问题',
    step2: '上传图片',
    step3: '为你定制专属方案',
    step4: '为你开启旅途',
    cta: '开启你的蜕变之旅',
  },
  footer: {
    tagline: '专业医美整形，成就更美的你',
    about: '关于我们',
    contact: '联系方式',
    privacy: '隐私政策',
    terms: '服务条款',
  },
  booking: {
    title: '立即预约',
    subtitle: '填写您的信息，我们的专业团队将尽快与您联系',
    firstName: '名',
    lastName: '姓',
    email: '邮箱',
    phone: '电话',
    required: '*',
    firstNamePlaceholder: '名',
    lastNamePlaceholder: '姓',
    emailPlaceholder: '请输入您的邮箱地址',
    phonePlaceholder: '请输入您的电话号码',
    submit: '提交预约',
    submitting: '提交中...',
    vipTitle: '终身VIP会员',
    vipPrice: '$200',
    vipDescription: '享受终身尊享服务与专属优惠',
    selectServices: '选择服务项目',
    injection: '注射改善',
    injectionDesc: '微创注射美容方案',
    injectionPrice: '$40',
    surgery: '通过手术改善',
    surgeryDesc: '专业手术美容方案',
    surgeryPrice: '$80',
    hairConsult: '头发建议',
    hairConsultDesc: '专业毛发健康咨询',
    hairConsultPrice: '$20',
    paypalPayment: 'PayPal支付',
    cardPayment: '银行卡支付',
    processing: '处理中...',
    backToHome: '返回首页',
    successTitle: '预约成功！',
    successMessage: '您的预约已确认，我们的团队将尽快与您联系',
  },
};

const enTranslations = {
  splash: {
    tagline: 'Meet the Most Beautiful You',
  },
  nav: {
    home: 'Home',
    projects: 'Projects',
    cases: 'Cases',
    faq: 'FAQ',
    login: 'Login',
    logout: 'Logout',
    bookNow: 'Book Now',
    facialContour: 'Facial Contouring',
    bodySculpting: 'Body Sculpting',
    facialRejuvenation: 'Facial Rejuvenation',
    hairTransplant: 'Hair Transplant',
    dental: 'Dental Aesthetics',
  },
  hero: {
    title1: 'Only what is naturally unique,',
    title2: 'Makes you the most distinctive symbol in the world',
    cta: 'Start Exploring Now',
  },
  services: {
    beforePlaceholder: '[Before Photo]',
    afterPlaceholder: '[After Photo]',
  },
  advantages: {
    title: 'Our Advantages',
    advantage1: 'Focus on Overall Facial Harmony',
    advantage2: 'Professional Consultation',
    advantage3: 'Holistic Features Approach',
    advantage4: 'Visualize Your Future Self',
    advantage5: 'Personalized Aesthetic Plans',
  },
  ethnicity: {
    title: 'Facial Features by Ethnicity',
    subtitle: 'Emphasizing overall facial harmony with personalized solutions based on aesthetic principles for different ethnicities',
    black: 'African',
    asian: 'Asian',
    white: 'Caucasian',
    boneFeatures: 'Bone Structure:',
    softTissue: 'Soft Tissue:',
    blackBone: 'Midface protrusion with low nasal bridge; possibly wider orbital distance; developed mandible with thick, everted lips.',
    blackSoft: 'Thicker skin, wrinkle-resistant but requires attention to scar healing; wide nostrils, flat nose, short columella; often double eyelids with deep-set appearance.',
    asianBone: 'Prominent cheekbones, angular mandible, gentle brow bone and orbital rim development.',
    asianSoft: 'High proportion of monolids or inner double eyelids with epicanthal folds; lower nasal bridge, rounded tip, recessed nasal base; relatively fuller soft tissue.',
    whiteBone: 'Prominent brow bone and orbital rim, lateral cheekbones, defined jawline, pointed chin.',
    whiteSoft: 'Thinner skin with less fat, prone to wrinkles and bone prominence; high nasal bridge, narrow nostrils, thinner lips; wide, deep double eyelids.',
    cta: 'Understand your facial features and start effective actions to enhance your appearance',
  },
  plan: {
    title: 'Get Your Treatment Plan',
    subtitle: 'Understand your facial features and start effective actions to enhance your appearance',
    before: 'Before Photo',
    after: 'After Photo',
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
    step1: 'Expert Facial Analysis',
    step2: 'Your Best Self',
    step3: 'Personalized Enhancement Plan',
    step4: 'Witness Remarkable Results',
  },
  analysis: {
    title: 'Your Face, Your Unique Solution',
    subtitle: 'Six-dimensional facial analysis based on ethnic bone structure, dynamic muscles, and psychological needs',
    dimension1: '1. Contour & Bone Structure',
    dimension2: '2. Soft Tissue & Skin',
    dimension3: '3. Individual Features',
    dimension4: '4. Dynamic & Muscles',
  },
  vision: {
    title: 'Ever Wondered What Your Face Could Look Like',
    subtitle: 'Envision Your Future',
  },
  realCases: {
    title: 'Real Case Comparisons',
    before: 'Before',
    after: 'After',
    months: 'months',
  },
  caseStudies: {
    title: 'Success Stories',
    viewAll: 'View All Cases',
  },
  testimonials: {
    title: 'What Our Clients Say',
    mapTitle: 'Our Clients Around the World',
    mapSubtitle: 'Client satisfaction is our eternal pursuit',
    readMore: 'Read More',
  },
  journey: {
    title: 'Start Your Transformation Journey Today',
    step1: 'Answer Questions',
    step2: 'Upload Photos',
    step3: 'Get Personalized Plan',
    step4: 'Begin Your Journey',
    cta: 'Start Your Transformation',
  },
  footer: {
    tagline: 'Professional Medical Aesthetics, Achieving a Better You',
    about: 'About Us',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
  booking: {
    title: 'Book Now',
    subtitle: 'Fill in your information and our professional team will contact you soon',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    required: '*',
    firstNamePlaceholder: 'First Name',
    lastNamePlaceholder: 'Last Name',
    emailPlaceholder: 'Enter your email address',
    phonePlaceholder: 'Enter your phone number',
    submit: 'Submit Booking',
    submitting: 'Submitting...',
    vipTitle: 'Lifetime VIP Membership',
    vipPrice: '$200',
    vipDescription: 'Enjoy lifetime exclusive services and special offers',
    selectServices: 'Select Services',
    injection: 'Injection Enhancement',
    injectionDesc: 'Minimally invasive injection solutions',
    injectionPrice: '$40',
    surgery: 'Surgical Enhancement',
    surgeryDesc: 'Professional surgical solutions',
    surgeryPrice: '$80',
    hairConsult: 'Hair Consultation',
    hairConsultDesc: 'Professional hair health consultation',
    hairConsultPrice: '$20',
    paypalPayment: 'Pay with PayPal',
    cardPayment: 'Pay with Card',
    processing: 'Processing...',
    backToHome: 'Back to Home',
    successTitle: 'Booking Successful!',
    successMessage: 'Your booking is confirmed, our team will contact you soon',
  },
};

