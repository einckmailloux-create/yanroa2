import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CTASection from './CTASection';
import ServiceCasesSection from './ServiceCasesSection';
import WhyYanoraSection from './WhyYanoraSection';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function HairTransplantPage() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [activeService, setActiveService] = useState<'fue' | 'hairline' | 'eyebrow' | 'beard'>('fue');

  const translations = language === 'zh' ? {
    tier1Methods: [
      { title: '营养补充', desc: '均衡饮食，补充蛋白质、维生素和微量元素' },
      { title: '压力管理', desc: '保证充足睡眠，减少焦虑和精神压力' },
    ],
    tier2Methods: [
      { title: '外用药物', desc: '局部刺激毛囊生长，改善头皮血液循环' },
      { title: '口服药物', desc: '抑制DHT生成，延缓脱发进程' },
    ],
    tier3Methods: [
      { title: 'FUE技术', desc: '单个毛囊提取种植，无痕迹，恢复快' },
      { title: 'FUT技术', desc: '条状取发，适合大面积脱发' },
    ],
    scenarios: [
      { condition: '急性短期脱发（如产后、压力大）', solution: '首选第一层，通常可自愈。' },
      { condition: '慢性进行性脱发（如雄激素性脱发）', solution: '早期以第二层为主，若效果不佳再考虑第三层。' },
      { condition: '毛囊未坏死', solution: '可采用第二层药物治疗。' },
      { condition: '毛囊已坏死', solution: '只能靠第三层手术解决。' },
    ],
    fueFeatures: ['适合大面积脱发', '毛囊存活率高达95%以上', '术后3-5天即可正常工作', '无痕迹自然美观'],
    hairlineFeatures: ['个性化设计方案', '符合面部美学比例', '显年轻，提升颜值', '精准种植自然流畅'],
    eyebrowFeatures: ['根据脸型设计眉形', '一根一根精细种植', '永久保持，无需化妆', '立体自然眉形'],
    beardFeatures: ['多种胡型可选', '生长方向精确控制', '增强男性魅力', '自然浓密效果'],
  } : {
    tier1Methods: [
      { title: 'Nutritional Supplementation', desc: 'Balanced diet, supplement protein, vitamins, and trace elements' },
      { title: 'Stress Management', desc: 'Ensure adequate sleep, reduce anxiety and mental stress' },
    ],
    tier2Methods: [
      { title: 'Topical Medications', desc: 'Locally stimulate hair follicle growth, improve scalp blood circulation' },
      { title: 'Oral Medications', desc: 'Inhibit DHT production, delay hair loss progression' },
    ],
    tier3Methods: [
      { title: 'FUE Technique', desc: 'Individual follicle extraction and planting, no trace, fast recovery' },
      { title: 'FUT Technique', desc: 'Strip harvesting, suitable for large-area hair loss' },
    ],
    scenarios: [
      { condition: 'Acute short-term hair loss (such as postpartum, stress)', solution: 'First choice is tier one, usually self-healing.' },
      { condition: 'Chronic progressive hair loss (such as androgenetic alopecia)', solution: 'Early focus on tier two, consider tier three if ineffective.' },
      { condition: 'Hair follicles not necrotic', solution: 'Can use tier two medication treatment.' },
      { condition: 'Hair follicles necrotic', solution: 'Can only be solved by tier three surgery.' },
    ],
    fueFeatures: ['Suitable for large-area hair loss', 'Follicle survival rate up to 95%+', 'Resume normal work in 3-5 days post-op', 'No trace, natural & beautiful'],
    hairlineFeatures: ['Personalized design plan', 'Conforms to facial aesthetic proportions', 'Look younger, enhance appearance', 'Precise planting, natural & smooth'],
    eyebrowFeatures: ['Design eyebrow shape according to face shape', 'Fine planting one by one', 'Permanent retention, no makeup needed', '3D natural eyebrow shape'],
    beardFeatures: ['Multiple beard styles available', 'Precise control of growth direction', 'Enhance masculine charm', 'Natural & thick effect'],
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Mobile Watermark */}
      <div className="md:hidden fixed bottom-6 right-6 z-10 pointer-events-none">
        <span className="text-6xl font-light tracking-wider opacity-20" style={{color: '#1F1F1F'}}>
          YANORA
        </span>
      </div>

      <Navbar />

      <section className="py-16 md:py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-light mb-6 leading-relaxed tracking-wide" style={{color: '#1F1F1F'}}>
            {t('hairTransplant.hero.title')}
          </h1>
          <p className="text-sm md:text-base font-light leading-relaxed mb-8 max-w-2xl mx-auto" style={{color: '#4B5563'}}>
            {t('hairTransplant.hero.subtitle')}
          </p>
          <button
            onClick={() => navigate('/booking')}
            className="px-8 py-3 text-sm md:text-base font-light tracking-wide transition-all duration-300 hover:opacity-80"
            style={{
              backgroundColor: '#1C2B3A',
              color: '#FFFFFF'
            }}
          >
            {t('hairTransplant.hero.cta')}
          </button>

          <div className="mt-12 flex justify-center">
            <img
              src="/Gemini_Generated_Image_qvpx6jqvpx6jqvpx.png"
              alt="植发效果展示"
              className="w-full max-w-3xl h-auto object-contain"
              style={{
                filter: 'brightness(1.05)',
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12" style={{backgroundColor: '#F9FAFB'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide" style={{color: '#1F1F1F'}}>
              {t('hairTransplant.education.whyTitle')}
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed" style={{color: '#6B7280'}}>
              {t('hairTransplant.education.whyDesc')}
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 mb-12 shadow-sm">
            <h3 className="text-2xl font-light mb-8 tracking-wide" style={{color: '#1F1F1F'}}>
              {t('hairTransplant.education.cycleTitle')}
            </h3>
            <p className="text-base mb-8 leading-relaxed" style={{color: '#6B7280'}}>
              {t('hairTransplant.education.cycleDesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6" style={{backgroundColor: '#F9FAFB'}}>
                <h4 className="text-lg font-normal mb-3" style={{color: '#1C2B3A'}}>
                  {t('hairTransplant.education.phases.growth.title')}
                </h4>
                <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                  {t('hairTransplant.education.phases.growth.desc')}
                </p>
              </div>
              <div className="p-6" style={{backgroundColor: '#F9FAFB'}}>
                <h4 className="text-lg font-normal mb-3" style={{color: '#1C2B3A'}}>
                  {t('hairTransplant.education.phases.regression.title')}
                </h4>
                <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                  {t('hairTransplant.education.phases.regression.desc')}
                </p>
              </div>
              <div className="p-6" style={{backgroundColor: '#F9FAFB'}}>
                <h4 className="text-lg font-normal mb-3" style={{color: '#1C2B3A'}}>
                  {t('hairTransplant.education.phases.resting.title')}
                </h4>
                <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                  {t('hairTransplant.education.phases.resting.desc')}
                </p>
              </div>
            </div>
            <p className="text-sm mt-8 p-4" style={{backgroundColor: '#FEF3C7', color: '#92400E'}}>
              {t('hairTransplant.education.normalLoss')}
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-light mb-8 tracking-wide" style={{color: '#1F1F1F'}}>
              {t('hairTransplant.education.causesTitle')}
            </h3>
            <div className="space-y-6">
              <div className="pb-6 border-b" style={{borderColor: '#E5E7EB'}}>
                <h4 className="text-lg font-normal mb-3 flex items-center gap-2" style={{color: '#1F1F1F'}}>
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#1C2B3A'}} />
                  {t('hairTransplant.education.causes.androgenic.title')}
                </h4>
                <p className="text-sm leading-relaxed ml-4" style={{color: '#6B7280'}}>
                  {t('hairTransplant.education.causes.androgenic.desc')}
                </p>
              </div>
              <div className="pb-6 border-b" style={{borderColor: '#E5E7EB'}}>
                <h4 className="text-lg font-normal mb-3 flex items-center gap-2" style={{color: '#1F1F1F'}}>
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#1C2B3A'}} />
                  {t('hairTransplant.education.causes.stress.title')}
                </h4>
                <p className="text-sm leading-relaxed ml-4" style={{color: '#6B7280'}}>
                  {t('hairTransplant.education.causes.stress.desc')}
                </p>
              </div>
              <div className="pb-6 border-b" style={{borderColor: '#E5E7EB'}}>
                <h4 className="text-lg font-normal mb-3 flex items-center gap-2" style={{color: '#1F1F1F'}}>
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#1C2B3A'}} />
                  {t('hairTransplant.education.causes.nutrition.title')}
                </h4>
                <p className="text-sm leading-relaxed ml-4" style={{color: '#6B7280'}}>
                  {t('hairTransplant.education.causes.nutrition.desc')}
                </p>
              </div>
              <div className="pb-6 border-b" style={{borderColor: '#E5E7EB'}}>
                <h4 className="text-lg font-normal mb-3 flex items-center gap-2" style={{color: '#1F1F1F'}}>
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#1C2B3A'}} />
                  {t('hairTransplant.education.causes.postpartum.title')}
                </h4>
                <p className="text-sm leading-relaxed ml-4" style={{color: '#6B7280'}}>
                  {t('hairTransplant.education.causes.postpartum.desc')}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-normal mb-3 flex items-center gap-2" style={{color: '#1F1F1F'}}>
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#1C2B3A'}} />
                  {t('hairTransplant.education.causes.medical.title')}
                </h4>
                <p className="text-sm leading-relaxed ml-4" style={{color: '#6B7280'}}>
                  {t('hairTransplant.education.causes.medical.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide" style={{color: '#1F1F1F'}}>
              {t('hairTransplant.treatment.title')}
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed" style={{color: '#6B7280'}}>
              {t('hairTransplant.treatment.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white border-l-4 p-8 md:p-12 shadow-sm" style={{borderColor: '#1C2B3A'}}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-light" style={{backgroundColor: '#1C2B3A'}}>
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2 tracking-wide" style={{color: '#1F1F1F'}}>
                    {t('hairTransplant.treatment.tier1.title')}
                  </h3>
                  <p className="text-sm mb-4" style={{color: '#6B7280'}}>
                    {t('hairTransplant.treatment.tier1.suitable')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-16">
                {translations.tier1Methods.map((method, index) => (
                  <div key={index} className="p-4" style={{backgroundColor: '#F9FAFB'}}>
                    <h4 className="text-base font-normal mb-2" style={{color: '#1F1F1F'}}>{method.title}</h4>
                    <p className="text-sm" style={{color: '#6B7280'}}>{method.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-l-4 p-8 md:p-12 shadow-sm" style={{borderColor: '#1C2B3A'}}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-light" style={{backgroundColor: '#1C2B3A'}}>
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2 tracking-wide" style={{color: '#1F1F1F'}}>
                    {t('hairTransplant.treatment.tier2.title')}
                  </h3>
                  <p className="text-sm mb-4" style={{color: '#6B7280'}}>
                    {t('hairTransplant.treatment.tier2.suitable')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-16">
                {translations.tier2Methods.map((method, index) => (
                  <div key={index} className="p-4" style={{backgroundColor: '#F9FAFB'}}>
                    <h4 className="text-base font-normal mb-2" style={{color: '#1F1F1F'}}>{method.title}</h4>
                    <p className="text-sm" style={{color: '#6B7280'}}>{method.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-l-4 p-8 md:p-12 shadow-sm" style={{borderColor: '#1C2B3A'}}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-light" style={{backgroundColor: '#1C2B3A'}}>
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2 tracking-wide" style={{color: '#1F1F1F'}}>
                    {t('hairTransplant.treatment.tier3.title')}
                  </h3>
                  <p className="text-sm mb-4" style={{color: '#6B7280'}}>
                    {t('hairTransplant.treatment.tier3.suitable')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-16">
                {translations.tier3Methods.map((method, index) => (
                  <div key={index} className="p-4" style={{backgroundColor: '#F9FAFB'}}>
                    <h4 className="text-base font-normal mb-2" style={{color: '#1F1F1F'}}>{method.title}</h4>
                    <p className="text-sm" style={{color: '#6B7280'}}>{method.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12" style={{backgroundColor: '#F9FAFB'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide" style={{color: '#1F1F1F'}}>
              {t('hairTransplant.treatment.selectionTitle')}
            </h2>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-light" style={{backgroundColor: '#1C2B3A'}}>
                  1
                </div>
                <div>
                  <h3 className="text-lg font-normal mb-2" style={{color: '#1F1F1F'}}>{t('hairTransplant.treatment.step1')}</h3>
                  <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>
                    {t('hairTransplant.treatment.step1Desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-light" style={{backgroundColor: '#1C2B3A'}}>
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-normal mb-4" style={{color: '#1F1F1F'}}>{t('hairTransplant.treatment.step2')}</h3>
                  <div className="space-y-4">
                    {translations.scenarios.map((scenario, index) => (
                      <div key={index} className="pl-4 border-l-2" style={{borderColor: '#D1D5DB'}}>
                        <p className="text-sm font-normal mb-1" style={{color: '#1F1F1F'}}>
                          {scenario.condition}
                        </p>
                        <p className="text-sm" style={{color: '#6B7280'}}>
                          {scenario.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide" style={{color: '#1F1F1F'}}>
              {t('hairTransplant.services.title')}
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed" style={{color: '#6B7280'}}>
              {t('hairTransplant.services.subtitle')}
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {[
              { key: 'fue' as const, title: t('hairTransplant.services.fue.title'), subtitle: t('hairTransplant.services.fue.desc') },
              { key: 'hairline' as const, title: t('hairTransplant.services.hairline.title'), subtitle: t('hairTransplant.services.hairline.desc') },
              { key: 'eyebrow' as const, title: t('hairTransplant.services.eyebrow.title'), subtitle: t('hairTransplant.services.eyebrow.desc') },
              { key: 'beard' as const, title: t('hairTransplant.services.beard.title'), subtitle: t('hairTransplant.services.beard.desc') },
            ].map((service) => (
              <button
                key={service.key}
                onClick={() => setActiveService(service.key)}
                className="p-6 md:p-8 border transition-all duration-300 text-center"
                style={{
                  backgroundColor: activeService === service.key ? '#1C2B3A' : 'white',
                  borderColor: activeService === service.key ? '#1C2B3A' : '#E5E7EB',
                  color: activeService === service.key ? 'white' : '#1F1F1F'
                }}
                onMouseEnter={(e) => {
                  if (activeService !== service.key) {
                    e.currentTarget.style.borderColor = '#1C2B3A';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeService !== service.key) {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <h3 className="text-base md:text-lg font-normal mb-2">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm font-light opacity-80">
                  {service.subtitle}
                </p>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="bg-gray-50 p-8 md:p-12 border" style={{borderColor: '#E5E7EB'}}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
                {activeService === 'fue' && t('hairTransplant.details.fue.title')}
                {activeService === 'hairline' && t('hairTransplant.details.hairline.title')}
                {activeService === 'eyebrow' && t('hairTransplant.details.eyebrow.title')}
                {activeService === 'beard' && t('hairTransplant.details.beard.title')}
              </h3>
              <p className="text-sm md:text-base mb-8 leading-relaxed" style={{color: '#6B7280'}}>
                {activeService === 'fue' && t('hairTransplant.details.fue.desc')}
                {activeService === 'hairline' && t('hairTransplant.details.hairline.desc')}
                {activeService === 'eyebrow' && t('hairTransplant.details.eyebrow.desc')}
                {activeService === 'beard' && t('hairTransplant.details.beard.desc')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeService === 'fue' && translations.fueFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white border"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <span className="mt-1 text-sm" style={{color: '#1C2B3A'}}>●</span>
                    <span className="text-sm md:text-base" style={{color: '#4B5563'}}>{feature}</span>
                  </div>
                ))}
                {activeService === 'hairline' && translations.hairlineFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white border"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <span className="mt-1 text-sm" style={{color: '#1C2B3A'}}>●</span>
                    <span className="text-sm md:text-base" style={{color: '#4B5563'}}>{feature}</span>
                  </div>
                ))}
                {activeService === 'eyebrow' && translations.eyebrowFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white border"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <span className="mt-1 text-sm" style={{color: '#1C2B3A'}}>●</span>
                    <span className="text-sm md:text-base" style={{color: '#4B5563'}}>{feature}</span>
                  </div>
                ))}
                {activeService === 'beard' && translations.beardFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white border"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <span className="mt-1 text-sm" style={{color: '#1C2B3A'}}>●</span>
                    <span className="text-sm md:text-base" style={{color: '#4B5563'}}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="bg-white p-8 md:p-12 border mt-8" style={{borderColor: '#E5E7EB'}}>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {activeService === 'fue' && [
                  '/Gemini_Generated_Image_94iwds94iwds94iw.png',
                  '/Gemini_Generated_Image_iubeodiubeodiube.png',
                  '/Gemini_Generated_Image_u1lac1u1lac1u1la.png',
                  '/Gemini_Generated_Image_fv9uk0fv9uk0fv9u.png'
                ].map((image, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border overflow-hidden"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <img
                      src={image}
                      alt={`FUE无痕植发 案例 ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
                {activeService === 'hairline' && [
                  '/Gemini_Generated_Image_lv6nndlv6nndlv6n.png',
                  '/Gemini_Generated_Image_pf7kappf7kappf7k.png',
                  '/Gemini_Generated_Image_qvpx6jqvpx6jqvpx.png',
                  '/Gemini_Generated_Image_a16ssqa16ssqa16s.png'
                ].map((image, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border overflow-hidden"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <img
                      src={image}
                      alt={`发际线调整 案例 ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
                {activeService === 'eyebrow' && [
                  '/Gemini_Generated_Image_u1lac1u1lac1u1la.png',
                  '/Gemini_Generated_Image_94iwds94iwds94iw.png',
                  '/Gemini_Generated_Image_iubeodiubeodiube.png',
                  '/Gemini_Generated_Image_fv9uk0fv9uk0fv9u.png'
                ].map((image, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border overflow-hidden"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <img
                      src={image}
                      alt={`眉毛种植 案例 ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
                {activeService === 'beard' && [
                  '/Gemini_Generated_Image_pf7kappf7kappf7k.png',
                  '/Gemini_Generated_Image_lv6nndlv6nndlv6n.png',
                  '/Gemini_Generated_Image_a16ssqa16ssqa16s.png',
                  '/Gemini_Generated_Image_qvpx6jqvpx6jqvpx.png'
                ].map((image, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border overflow-hidden"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <img
                      src={image}
                      alt={`胡须种植 案例 ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <ServiceCasesSection serviceType="hair" />

      <WhyYanoraSection />

      <CTASection />

      <Footer />
    </div>
  );
}

export default HairTransplantPage;
