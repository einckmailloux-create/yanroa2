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
  whyYanora: {
    title: '为什么选择YANORA',
    feature1Title: '10W+全球客户',
    feature1Desc: '为全球客户提供专业的医疗美容和整形外科服务',
    feature2Title: '针对每张脸的个性化美学方案',
    feature2Desc: '根据不同面部结构和人种背景量身定制美容和医疗美学解决方案',
    feature3Title: '经验丰富的医疗团队',
    feature3Desc: '我们技术娴熟的医生提供透明咨询、精准治疗计划和专业护理，陪伴您的每一步美学之旅',
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
    tagline: '专业医美整形服务\n成就更美的你',
    about: '关于我们',
    contact: '联系我们',
    support: '服务支持',
    faq: '常见问题',
    afterSales: '售后服务',
    bookConsult: '预约咨询',
    legal: '法律条款',
    privacy: '隐私政策',
    terms: '服务条款',
    disclaimer: '免责声明',
  },
  concerns: {
    title: '那些你担心或已经发生的问题',
  },
  facialAnalysis: {
    foreheadTitle: '额面分析',
    foreheadDesc: '额面分为明区 灰区 暗区  三个转折面 额结节的高低影响 额头的饱满度和立体度',
    outerContourTitle: '外轮廓分析',
    outerContourDesc: '发际线 太阳穴 脸颊下颌骨 下巴的凹凸关系 决定了外轮廓的流畅度',
    innerContourTitle: '内轮廓分析',
    innerContourDesc: '内轮廓的大小、立体度、苹果肌饱满度及平整度共同决定面部精致感与年轻态。',
  },
  facialFold: {
    title: '面部折叠度',
    subtitle: '面部折叠度是衡量面部年轻态的关键指标，通过对比可以直观感受岁月在面部留下的痕迹',
    lowFold: '低折叠度',
    highFold: '高折叠度',
    youngState: '年轻面部状态',
    diagram3d: '3D面部图示',
  },
  facialContour: {
    hero: {
      title: '面部轮廓重塑',
      subtitle: '我们根据不同人种的面部结构和骨架特征，\n结合个人审美偏好，科学地提供个性化整形解决方案。',
      cta: '现在开始探索',
      imageAlt: '面部轮廓示例',
    },
    anatomy: {
      forehead: '额头',
      cheekbone: '颧骨',
      chin: '下巴',
      jawline: '下颌线',
    },
    services: {
      title: '五官精雕板块',
      subtitle: '聚焦于五官局部的精细化调整',
      forehead: { title: '额头/眉骨', desc: '丰额头、眉弓抬高' },
      cheekbone: { title: '颧骨', desc: '颧骨内推/降低' },
      jawline: { title: '下颌线', desc: '下颌角截骨、去咬肌' },
      chin: { title: '下巴', desc: '颏成型、假体隆颏' },
    },
    features: {
      nose: '鼻子',
      eyes: '眼睛',
      lips: '嘴巴',
      noseTypes: {
        straight: { name: '直鼻', desc: '气质干练' },
        upturned: { name: '微翘鼻', desc: '柔和甜美' },
        box: { name: '盒鼻', desc: '混血立体' },
        droplet: { name: '水滴鼻', desc: '自然圆润' },
      },
    },
    cases: [
      { parts: '颧骨 + 下巴', desc: '利用颧骨内推和颏成型术式改善面部轮廓流畅度，打造柔和的面部线条' },
      { parts: '鼻子 + 眼睛', desc: '综合鼻综合和双眼皮手术，提升五官精致度与面部协调性' },
      { parts: '下颌线', desc: '通过下颌角截骨改善方形脸，塑造流畅的下颌线条' },
    ],
  },
  bodySculpting: {
    hero: {
      title: '身体塑形',
      subtitle: '科学塑形方案，打造理想身材曲线',
      cta: '现在开始探索',
      imageAlt: (index: number) => `身体塑形示例${index}`,
      carouselLabel: (index: number) => `切换到图片 ${index + 1}`,
    },
    services: {
      title: '服务项目',
      subtitle: '专业塑形技术，为你量身定制理想身材',
      waist: { title: '直角腰', desc: '打造完美腰线' },
      breast: { title: '隆胸', desc: '自然饱满胸型' },
      liposuction: { title: '吸脂塑形', desc: '精准去除脂肪' },
      abdomen: { title: '腹部塑形', desc: '平坦紧致腹部' },
      buttocks: { title: '臀部提升', desc: '塑造完美臀型' },
      thigh: { title: '大腿塑形', desc: '改善腿部线条' },
    },
    details: {
      waist: {
        title: '直角腰塑形',
        desc: '通过精准吸脂与肌肉塑形，打造90度完美腰臀比例',
        techniques: ['腰部360度环形吸脂', '后腰凹陷塑造', '侧腰线条雕刻', '腰臀比例黄金设计'],
      },
      breast: {
        title: '隆胸手术',
        desc: '采用多种技术方案，量身定制自然饱满的胸型',
        techniques: ['假体隆胸 - 硅胶/盐水', '自体脂肪隆胸', '复合隆胸技术', '个性化形态设计'],
      },
      liposuction: {
        title: '吸脂塑形',
        desc: '精准去除顽固脂肪，雕刻理想身材曲线',
        techniques: ['超声波吸脂', '水动力吸脂', '激光溶脂', '多部位综合塑形'],
      },
      abdomen: {
        title: '腹部塑形',
        desc: '打造平坦紧致的腹部线条',
        techniques: ['腹部吸脂', '腹壁成型', '马甲线雕刻', '腹部皮肤收紧'],
      },
      buttocks: {
        title: '臀部提升',
        desc: '塑造挺翘饱满的完美臀型',
        techniques: ['臀部填充', '臀部提升', '臀部吸脂', 'S曲线塑造'],
      },
      thigh: {
        title: '大腿塑形',
        desc: '改善腿部线条，塑造纤细修长美腿',
        techniques: ['大腿吸脂', '膝盖周围塑形', '小腿肌肉缩小', '腿部线条雕刻'],
      },
    },
    cases: {
      title: '真实案例',
      subtitle: '见证专业技术带来的美丽蜕变',
      loading: '加载中...',
      empty: '暂无案例',
      before: '术前',
      after: '术后',
      imageAlt: (title: string, type: string) => `${title} - ${type}`,
      caseImageAlt: (service: string, index: number) => `${service} 案例 ${index + 1}`,
    },
  },
  injectionLifting: {
    hero: {
      title: '面部年轻化',
      subtitle: '非手术方式，轻松实现年轻化效果',
      cta: '现在开始探索',
      imageAlt: (index: number) => `面部年轻化效果展示${index}`,
    },
    services: {
      title: '服务项目',
      subtitle: '无创年轻化，重塑自然美感',
      injection: { title: '注射填充', desc: '恢复面部饱满' },
      diamond7d: { title: '7D砖石提升', desc: '深层紧致提升' },
      midface: { title: '面中三件套', desc: '综合提升改善' },
      smas: { title: 'SMAS筋膜提升', desc: '深层紧致提升' },
      singlePart: { title: '单部位提升', desc: '精准局部改善' },
    },
    details: {
      injection: {
        title: '注射填充',
        desc: '恢复面部饱满度，填充凹陷，抚平皱纹，重塑年轻轮廓',
        features: ['立体塑形', '持久保湿', '安全可吸收', '即时见效'],
      },
      diamond7d: {
        title: '7D砖石提升',
        desc: '7D砖石提升技术，深层立体提升，全方位改善面部松弛',
        features: ['七维立体', '深层提升', '持久紧致', '自然效果'],
      },
      midface: {
        title: '面中三件套提升',
        desc: '针对面中部位进行综合提升，改善苹果肌、泪沟、法令纹',
        features: ['三位一体', '全面年轻化', '效果显著', '持久自然'],
      },
      smas: {
        title: 'SMAS筋膜提升',
        desc: '深层筋膜层提升，从根本改善面部松弛下垂',
        features: ['深层提升', '持久紧致', '专业技术', '效果自然'],
      },
      singlePart: {
        title: '单部位提升',
        desc: '针对性改善局部问题，精准提升单一部位',
        features: ['精准定位', '个性化方案', '快速恢复', '效果明显'],
      },
    },
    caseImageAlt: (service: string, index: number) => `${service} 案例 ${index + 1}`,
  },
  hairTransplant: {
    hero: {
      title: '植发',
      subtitle: '科学重塑浓密秀发，重拾自信形象',
      cta: '现在开始探索',
      imageAlt: '植发效果展示',
    },
    education: {
      whyTitle: '头发为什么会脱落?',
      whyDesc: '头发生长和脱落是个周期性的动态过程。简单来说，毛囊这个"生产车间"遭到了破坏。',
      cycleTitle: '毛囊生长周期',
      cycleDesc: '我们可以把毛囊想象成一个生产头发的工厂，它会经历三个主要阶段:',
      phases: {
        growth: { title: '生长期 (约2-7年)', desc: '头发积极生长，约85%-90%的头发处于这个阶段。' },
        regression: { title: '退行期 (约2-3周)', desc: '工厂"停工"，头发停止生长。' },
        resting: { title: '休止期 (约3-4个月)', desc: '工厂"放假"，旧头发会自然脱落，为新生头发腾出空间。' },
      },
      normalLoss: '正常情况下，每天脱落50-100根头发属于正常生理现象。',
      causesTitle: '病理性脱发的主要原因',
      causes: {
        androgenic: {
          title: '雄激素性脱发',
          desc: '也称为脂溢性脱发，有遗传倾向。关键是一种叫二氢睾酮（DHT）的激素攻击毛囊，使生长期缩短，头发逐渐变细、变短，长不出头发。',
        },
        stress: {
          title: '精神与情绪因素',
          desc: '长期精神压力大、熬夜、焦虑，导致身体释放皮质醇等压力激素，扰乱毛囊周期，导致短时间内脱落增多。',
        },
        nutrition: {
          title: '营养缺乏',
          desc: '头发主要由角蛋白构成，需要足够的蛋白质、维生素和微量元素。过度节食或缺乏铁、锌、维生素B族等，都可能因"原料"不足导致脱发。',
        },
        postpartum: {
          title: '产后脱发',
          desc: '怀孕时雌激素水平高，头发会延长生长期。产后雌激素骤降，大量头发同时进入休止期，导致短期内集中脱落，这通常是暂时的。',
        },
        medical: {
          title: '疾病与药物影响',
          desc: '甲状腺功能异常、自身免疫疾病（如斑秃）等会干扰毛囊。化疗药物、部分降压药也可能引起脱发。',
        },
      },
    },
    treatment: {
      title: '治疗方案的三个层级',
      subtitle: '根据脱发类型和严重程度，选择最适合的治疗方式',
      tier1: {
        title: '日常调理与生活方式干预',
        suitable: '适用于休止期脱发、营养性脱发的辅助改善，以及所有脱发类型的预防。',
        methods: [
          { title: '营养补充', desc: '均衡饮食，补充蛋白质、维生素和微量元素' },
          { title: '压力管理', desc: '保证充足睡眠，减少焦虑和精神压力' },
        ],
      },
      tier2: {
        title: '药物治疗',
        suitable: '适用于雄激素性脱发、斑秃等，是目前最主要的保守治疗手段。',
        methods: [
          { title: '外用药物', desc: '局部刺激毛囊生长，改善头皮血液循环' },
          { title: '口服药物', desc: '抑制DHT生成，延缓脱发进程' },
        ],
      },
      tier3: {
        title: '外科手术（植发）',
        suitable: '适用于永久性脱发，且药物治疗无效，但后枕部资源充足的雄激素性脱发患者，也用于修复疤痕性脱发。',
        methods: [
          { title: 'FUE技术', desc: '单个毛囊提取种植，无痕迹，恢复快' },
          { title: 'FUT技术', desc: '条状取发，适合大面积脱发' },
        ],
      },
      selectionTitle: '如何选择治疗方案?',
      step1: '先诊断',
      step1Desc: '去正规医院皮肤科，明确脱发类型和原因。',
      step2: '后治疗：根据诊断结果选择方案',
      scenarios: [
        { condition: '急性短期脱发（如产后、压力大）', solution: '首选第一层，通常可自愈。' },
        { condition: '慢性进行性脱发（如雄激素性脱发）', solution: '早期以第二层为主，若效果不佳再考虑第三层。' },
        { condition: '毛囊未坏死', solution: '可采用第二层药物治疗。' },
        { condition: '毛囊已坏死', solution: '只能靠第三层手术解决。' },
      ],
    },
    services: {
      title: '服务项目',
      subtitle: '专业团队，先进技术，为您提供个性化的植发解决方案',
      fue: { title: 'FUE无痕植发', desc: '无痕迹恢复快' },
      hairline: { title: '发际线调整', desc: '精准设计提升' },
      eyebrow: { title: '眉毛种植', desc: '立体自然眉形' },
      beard: { title: '胡须种植', desc: '塑造男性魅力' },
    },
    details: {
      fue: {
        title: 'FUE无痕植发',
        desc: '采用先进的毛囊单位提取技术，逐个提取健康毛囊进行种植，无需开刀，不留疤痕，恢复快，效果自然。',
        features: ['适合大面积脱发', '毛囊存活率高达95%以上', '术后3-5天即可正常工作', '无痕迹自然美观'],
      },
      hairline: {
        title: '发际线调整',
        desc: '根据面部黄金比例设计发际线，优化面部轮廓，提升整体气质。适合发际线后移、M型脱发等情况。',
        features: ['个性化设计方案', '符合面部美学比例', '显年轻，提升颜值', '精准种植自然流畅'],
      },
      eyebrow: {
        title: '眉毛种植',
        desc: '针对眉毛稀疏、缺失等问题，通过精细种植技术，打造立体自然的眉形，提升面部精致度。',
        features: ['根据脸型设计眉形', '一根一根精细种植', '永久保持，无需化妆', '立体自然眉形'],
      },
      beard: {
        title: '胡须种植',
        desc: '为胡须稀疏的男士提供专业种植服务，塑造阳刚魅力，提升男性气质。',
        features: ['多种胡型可选', '生长方向精确控制', '增强男性魅力', '自然浓密效果'],
      },
    },
    caseImageAlt: (service: string, index: number) => `${service} 案例 ${index + 1}`,
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
  whyYanora: {
    title: 'Why Choose YANORA',
    feature1Title: '10W+ Clients Worldwide',
    feature1Desc: 'Providing professional medical aesthetic and cosmetic surgery services globally',
    feature2Title: 'Personalized Aesthetic Plans for Every Face',
    feature2Desc: 'Tailored cosmetic and medical aesthetic solutions designed for different facial structures and ethnic backgrounds',
    feature3Title: 'Experienced Medical Team',
    feature3Desc: 'Our skilled doctors provide transparent consultation, precise treatment planning, and professional care throughout every step of your aesthetic journey',
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
    tagline: 'Professional Medical Aesthetics Services\nAchieving a Better You',
    about: 'About Us',
    contact: 'Contact Us',
    support: 'Service Support',
    faq: 'FAQ',
    afterSales: 'After Sales',
    bookConsult: 'Book Consultation',
    legal: 'Legal Terms',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    disclaimer: 'Disclaimer',
  },
  concerns: {
    title: 'Common Concerns You May Have',
  },
  facialAnalysis: {
    foreheadTitle: 'Forehead Analysis',
    foreheadDesc: 'The forehead is divided into bright, gray, and dark zones with three transitional planes. The height of forehead tubercles affects fullness and three-dimensionality.',
    outerContourTitle: 'Outer Contour Analysis',
    outerContourDesc: 'The concave-convex relationship between hairline, temples, cheeks, jawbone, and chin determines the smoothness of the outer contour.',
    innerContourTitle: 'Inner Contour Analysis',
    innerContourDesc: 'The size, three-dimensionality, apple cheek fullness, and smoothness of the inner contour collectively determine facial refinement and youthfulness.',
  },
  facialFold: {
    title: 'Facial Fold Degree',
    subtitle: 'Facial fold degree is a key indicator of facial youthfulness. Comparison allows you to visually perceive the traces left by time on the face.',
    lowFold: 'Low Fold',
    highFold: 'High Fold',
    youngState: 'Youthful Facial State',
    diagram3d: '3D Facial Diagram',
  },
  facialContour: {
    hero: {
      title: 'Facial Contour Reshaping',
      subtitle: 'Based on facial structure and skeletal features of different ethnicities,\ncombined with personal aesthetic preferences, we scientifically provide personalized surgical solutions.',
      cta: 'Start Exploring Now',
      imageAlt: 'Facial Contour Example',
    },
    anatomy: {
      forehead: 'Forehead',
      cheekbone: 'Cheekbone',
      chin: 'Chin',
      jawline: 'Jawline',
    },
    services: {
      title: 'Facial Feature Refinement',
      subtitle: 'Focusing on detailed adjustments of facial features',
      forehead: { title: 'Forehead/Brow Bone', desc: 'Forehead augmentation, brow lift' },
      cheekbone: { title: 'Cheekbone', desc: 'Cheekbone reduction/lowering' },
      jawline: { title: 'Jawline', desc: 'Jaw angle reduction, masseter reduction' },
      chin: { title: 'Chin', desc: 'Genioplasty, chin implant' },
    },
    features: {
      nose: 'Nose',
      eyes: 'Eyes',
      lips: 'Lips',
      noseTypes: {
        straight: { name: 'Straight Nose', desc: 'Professional & Sharp' },
        upturned: { name: 'Upturned Nose', desc: 'Soft & Sweet' },
        box: { name: 'Box Nose', desc: 'Mixed-race & Dimensional' },
        droplet: { name: 'Droplet Nose', desc: 'Natural & Round' },
      },
    },
    cases: [
      { parts: 'Cheekbone + Chin', desc: 'Improve facial contour smoothness through cheekbone reduction and genioplasty to create soft facial lines' },
      { parts: 'Nose + Eyes', desc: 'Comprehensive rhinoplasty and double eyelid surgery to enhance facial harmony and refinement' },
      { parts: 'Jawline', desc: 'Improve square face through jaw angle osteotomy to create a smooth jawline' },
    ],
  },
  bodySculpting: {
    hero: {
      title: 'Body Sculpting',
      subtitle: 'Scientific sculpting solutions for your ideal body curves',
      cta: 'Start Exploring Now',
      imageAlt: (index: number) => `Body Sculpting Example ${index}`,
      carouselLabel: (index: number) => `Switch to image ${index + 1}`,
    },
    services: {
      title: 'Services',
      subtitle: 'Professional sculpting techniques, customized for your ideal figure',
      waist: { title: 'Right-Angle Waist', desc: 'Perfect waistline' },
      breast: { title: 'Breast Augmentation', desc: 'Natural & full breast shape' },
      liposuction: { title: 'Liposuction', desc: 'Precise fat removal' },
      abdomen: { title: 'Abdomen Sculpting', desc: 'Flat & tight abdomen' },
      buttocks: { title: 'Buttock Lift', desc: 'Perfect buttock shape' },
      thigh: { title: 'Thigh Sculpting', desc: 'Improved leg lines' },
    },
    details: {
      waist: {
        title: 'Right-Angle Waist Sculpting',
        desc: 'Create a perfect 90-degree waist-to-hip ratio through precise liposuction and muscle sculpting',
        techniques: ['360-degree circular waist liposuction', 'Lower back curve creation', 'Side waist line sculpting', 'Golden waist-to-hip ratio design'],
      },
      breast: {
        title: 'Breast Augmentation',
        desc: 'Multiple technical solutions to customize natural and full breast shape',
        techniques: ['Implant augmentation - Silicone/Saline', 'Autologous fat transfer', 'Composite augmentation technique', 'Personalized shape design'],
      },
      liposuction: {
        title: 'Liposuction Sculpting',
        desc: 'Precisely remove stubborn fat to sculpt ideal body curves',
        techniques: ['Ultrasonic liposuction', 'Water-jet liposuction', 'Laser lipolysis', 'Multi-area comprehensive sculpting'],
      },
      abdomen: {
        title: 'Abdomen Sculpting',
        desc: 'Create flat and tight abdominal lines',
        techniques: ['Abdominal liposuction', 'Abdominoplasty', 'Ab line sculpting', 'Abdominal skin tightening'],
      },
      buttocks: {
        title: 'Buttock Lift',
        desc: 'Create a firm and full perfect buttock shape',
        techniques: ['Buttock augmentation', 'Buttock lift', 'Buttock liposuction', 'S-curve sculpting'],
      },
      thigh: {
        title: 'Thigh Sculpting',
        desc: 'Improve leg lines, create slim and slender beautiful legs',
        techniques: ['Thigh liposuction', 'Knee area sculpting', 'Calf muscle reduction', 'Leg line sculpting'],
      },
    },
    cases: {
      title: 'Real Cases',
      subtitle: 'Witness the beautiful transformation brought by professional techniques',
      loading: 'Loading...',
      empty: 'No cases available',
      before: 'Before',
      after: 'After',
      imageAlt: (title: string, type: string) => `${title} - ${type}`,
      caseImageAlt: (service: string, index: number) => `${service} Case ${index + 1}`,
    },
  },
  injectionLifting: {
    hero: {
      title: 'Facial Rejuvenation',
      subtitle: 'Non-surgical approach, easily achieve rejuvenation effects',
      cta: 'Start Exploring Now',
      imageAlt: (index: number) => `Facial Rejuvenation Effect Display ${index}`,
    },
    services: {
      title: 'Services',
      subtitle: 'Non-invasive rejuvenation, reshape natural beauty',
      injection: { title: 'Injection Fillers', desc: 'Restore facial fullness' },
      diamond7d: { title: '7D Diamond Lift', desc: 'Deep tightening lift' },
      midface: { title: 'Mid-Face Trio', desc: 'Comprehensive lift improvement' },
      smas: { title: 'SMAS Fascia Lift', desc: 'Deep tightening lift' },
      singlePart: { title: 'Single Area Lift', desc: 'Precise local improvement' },
    },
    details: {
      injection: {
        title: 'Injection Fillers',
        desc: 'Restore facial fullness, fill depressions, smooth wrinkles, reshape youthful contours',
        features: ['3D shaping', 'Long-lasting hydration', 'Safe & absorbable', 'Immediate results'],
      },
      diamond7d: {
        title: '7D Diamond Lift',
        desc: '7D Diamond Lift technology, deep three-dimensional lift, comprehensive improvement of facial sagging',
        features: ['Seven-dimensional 3D', 'Deep lift', 'Long-lasting firmness', 'Natural effects'],
      },
      midface: {
        title: 'Mid-Face Trio Lift',
        desc: 'Comprehensive lift for mid-face area, improve apple muscles, tear troughs, and nasolabial folds',
        features: ['Three-in-one', 'Comprehensive rejuvenation', 'Significant effects', 'Long-lasting & natural'],
      },
      smas: {
        title: 'SMAS Fascia Lift',
        desc: 'Deep fascia layer lift, fundamentally improve facial sagging and drooping',
        features: ['Deep lift', 'Long-lasting firmness', 'Professional technique', 'Natural effects'],
      },
      singlePart: {
        title: 'Single Area Lift',
        desc: 'Targeted improvement of local issues, precise lift for single area',
        features: ['Precise targeting', 'Personalized plan', 'Quick recovery', 'Obvious effects'],
      },
    },
    caseImageAlt: (service: string, index: number) => `${service} Case ${index + 1}`,
  },
  hairTransplant: {
    hero: {
      title: 'Hair Transplantation',
      subtitle: 'Scientifically restore thick hair, regain confident image',
      cta: 'Start Exploring Now',
      imageAlt: 'Hair Transplant Effect Display',
    },
    education: {
      whyTitle: 'Why Does Hair Fall Out?',
      whyDesc: 'Hair growth and loss is a cyclical dynamic process. Simply put, the hair follicle "production workshop" has been damaged.',
      cycleTitle: 'Hair Follicle Growth Cycle',
      cycleDesc: 'We can imagine hair follicles as a hair production factory, going through three main stages:',
      phases: {
        growth: { title: 'Anagen (about 2-7 years)', desc: 'Hair grows actively, about 85%-90% of hair is in this phase.' },
        regression: { title: 'Catagen (about 2-3 weeks)', desc: 'Factory "shutdown", hair stops growing.' },
        resting: { title: 'Telogen (about 3-4 months)', desc: 'Factory "vacation", old hair naturally falls out, making room for new hair.' },
      },
      normalLoss: 'Under normal circumstances, losing 50-100 hairs per day is a normal physiological phenomenon.',
      causesTitle: 'Main Causes of Pathological Hair Loss',
      causes: {
        androgenic: {
          title: 'Androgenetic Alopecia',
          desc: 'Also called seborrheic alopecia, with genetic tendency. The key is a hormone called dihydrotestosterone (DHT) attacking hair follicles, shortening the growth phase, and gradually thinning and shortening hair until it cannot grow.',
        },
        stress: {
          title: 'Mental & Emotional Factors',
          desc: 'Long-term mental stress, staying up late, and anxiety cause the body to release stress hormones like cortisol, disrupting the hair follicle cycle and causing increased hair loss in a short time.',
        },
        nutrition: {
          title: 'Nutritional Deficiency',
          desc: 'Hair is mainly composed of keratin and requires sufficient protein, vitamins, and trace elements. Excessive dieting or lack of iron, zinc, B vitamins, etc., can all cause hair loss due to insufficient "raw materials".',
        },
        postpartum: {
          title: 'Postpartum Hair Loss',
          desc: 'During pregnancy, high estrogen levels extend the hair growth phase. After delivery, estrogen plummets, causing a large amount of hair to enter the telogen phase simultaneously, leading to concentrated hair loss in a short period, which is usually temporary.',
        },
        medical: {
          title: 'Disease & Medication Effects',
          desc: 'Thyroid dysfunction, autoimmune diseases (such as alopecia areata), etc., can interfere with hair follicles. Chemotherapy drugs and some antihypertensive medications may also cause hair loss.',
        },
      },
    },
    treatment: {
      title: 'Three Tiers of Treatment Options',
      subtitle: 'Choose the most suitable treatment method based on hair loss type and severity',
      tier1: {
        title: 'Daily Care & Lifestyle Intervention',
        suitable: 'Suitable for auxiliary improvement of telogen effluvium and nutritional hair loss, as well as prevention of all hair loss types.',
        methods: [
          { title: 'Nutritional Supplementation', desc: 'Balanced diet, supplement protein, vitamins, and trace elements' },
          { title: 'Stress Management', desc: 'Ensure adequate sleep, reduce anxiety and mental stress' },
        ],
      },
      tier2: {
        title: 'Medication Treatment',
        suitable: 'Suitable for androgenetic alopecia, alopecia areata, etc., currently the main conservative treatment method.',
        methods: [
          { title: 'Topical Medications', desc: 'Locally stimulate hair follicle growth, improve scalp blood circulation' },
          { title: 'Oral Medications', desc: 'Inhibit DHT production, delay hair loss progression' },
        ],
      },
      tier3: {
        title: 'Surgical Treatment (Hair Transplant)',
        suitable: 'Suitable for permanent hair loss, ineffective drug treatment, but sufficient posterior occipital resources for androgenetic alopecia patients, also used to repair scarring alopecia.',
        methods: [
          { title: 'FUE Technique', desc: 'Individual follicle extraction and planting, no trace, fast recovery' },
          { title: 'FUT Technique', desc: 'Strip harvesting, suitable for large-area hair loss' },
        ],
      },
      selectionTitle: 'How to Choose Treatment Options?',
      step1: 'Diagnosis First',
      step1Desc: 'Go to a regular hospital dermatology department to clarify hair loss type and cause.',
      step2: 'Treatment After: Choose plan based on diagnosis',
      scenarios: [
        { condition: 'Acute short-term hair loss (such as postpartum, stress)', solution: 'First choice is tier one, usually self-healing.' },
        { condition: 'Chronic progressive hair loss (such as androgenetic alopecia)', solution: 'Early focus on tier two, consider tier three if ineffective.' },
        { condition: 'Hair follicles not necrotic', solution: 'Can use tier two medication treatment.' },
        { condition: 'Hair follicles necrotic', solution: 'Can only be solved by tier three surgery.' },
      ],
    },
    services: {
      title: 'Services',
      subtitle: 'Professional team, advanced technology, providing you with personalized hair transplant solutions',
      fue: { title: 'FUE Scarless Hair Transplant', desc: 'No trace, fast recovery' },
      hairline: { title: 'Hairline Adjustment', desc: 'Precise design & enhancement' },
      eyebrow: { title: 'Eyebrow Transplant', desc: '3D natural eyebrow shape' },
      beard: { title: 'Beard Transplant', desc: 'Shape masculine charm' },
    },
    details: {
      fue: {
        title: 'FUE Scarless Hair Transplant',
        desc: 'Using advanced follicular unit extraction technology, extracting and planting healthy follicles one by one, no surgery required, no scarring, fast recovery, natural results.',
        features: ['Suitable for large-area hair loss', 'Follicle survival rate up to 95%+', 'Resume normal work in 3-5 days post-op', 'No trace, natural & beautiful'],
      },
      hairline: {
        title: 'Hairline Adjustment',
        desc: 'Design hairline according to facial golden ratio, optimize facial contour, enhance overall temperament. Suitable for receding hairline, M-shaped hair loss, etc.',
        features: ['Personalized design plan', 'Conforms to facial aesthetic proportions', 'Look younger, enhance appearance', 'Precise planting, natural & smooth'],
      },
      eyebrow: {
        title: 'Eyebrow Transplant',
        desc: 'For sparse eyebrows and missing eyebrow issues, through precise planting technology, create three-dimensional natural eyebrow shape, enhance facial refinement.',
        features: ['Design eyebrow shape according to face shape', 'Fine planting one by one', 'Permanent retention, no makeup needed', '3D natural eyebrow shape'],
      },
      beard: {
        title: 'Beard Transplant',
        desc: 'Provide professional planting services for men with sparse beards, shape masculine charm, enhance male temperament.',
        features: ['Multiple beard styles available', 'Precise control of growth direction', 'Enhance masculine charm', 'Natural & thick effect'],
      },
    },
    caseImageAlt: (service: string, index: number) => `${service} Case ${index + 1}`,
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

