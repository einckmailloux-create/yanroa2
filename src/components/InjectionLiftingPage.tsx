import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CTASection from './CTASection';
import Footer from './Footer';
import Navbar from './Navbar';
import ServiceCasesSection from './ServiceCasesSection';
import WhyYanoraSection from './WhyYanoraSection';
import { useLanguage } from '../contexts/LanguageContext';

function InjectionLiftingPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<'injection' | 'diamond7d' | 'midface' | 'smas' | 'singlePart'>('injection');

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
            {t('injectionLifting.hero.title')}
          </h1>
          <p className="text-sm md:text-base font-light leading-relaxed mb-8 max-w-2xl mx-auto" style={{color: '#4B5563'}}>
            {t('injectionLifting.hero.subtitle')}
          </p>
          <button
            onClick={() => navigate('/booking')}
            className="px-8 py-3 text-sm md:text-base font-light tracking-wide transition-all duration-300 hover:opacity-80"
            style={{
              backgroundColor: '#1C2B3A',
              color: '#FFFFFF'
            }}
          >
            {t('injectionLifting.hero.cta')}
          </button>

          <div className="grid grid-cols-2 gap-6 md:gap-8 mt-12 max-w-4xl mx-auto bg-white">
            <div className="overflow-hidden bg-white">
              <img
                src="/3d931fc8d4b7d9ba6357f51f842da33d.jpg"
                alt={`${t('injectionLifting.hero.title')} 1`}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden bg-white">
              <img
                src="/6492d5ffd9ae5616e415a8afbe984073.jpg"
                alt={`${t('injectionLifting.hero.title')} 2`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-4 tracking-wide" style={{color: '#1F1F1F'}}>
              {t('injectionLifting.services.title')}
            </h2>
            <p className="text-sm md:text-base font-light" style={{color: '#6B7280'}}>
              {t('injectionLifting.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
            {[
              { key: 'injection' as const, title: t('injectionLifting.services.injection.title'), subtitle: t('injectionLifting.services.injection.desc') },
              { key: 'diamond7d' as const, title: t('injectionLifting.services.diamond7d.title'), subtitle: t('injectionLifting.services.diamond7d.desc') },
              { key: 'midface' as const, title: t('injectionLifting.services.midface.title'), subtitle: t('injectionLifting.services.midface.desc') },
              { key: 'smas' as const, title: t('injectionLifting.services.smas.title'), subtitle: t('injectionLifting.services.smas.desc') },
              { key: 'singlePart' as const, title: t('injectionLifting.services.singlePart.title'), subtitle: t('injectionLifting.services.singlePart.desc') },
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

          <div className="bg-gray-50 p-8 md:p-12 border" style={{borderColor: '#E5E7EB'}}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-light mb-4" style={{color: '#1F1F1F'}}>
                {t(`injectionLifting.details.${activeService}.title`)}
              </h3>
              <p className="text-sm md:text-base mb-8 leading-relaxed" style={{color: '#6B7280'}}>
                {t(`injectionLifting.details.${activeService}.desc`)}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(t(`injectionLifting.details.${activeService}.features`) as string[]).map((feature, index) => (
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

          <div className="bg-white p-8 md:p-12 border mt-8" style={{borderColor: '#E5E7EB'}}>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {activeService === 'injection' && [
                  '/Gemini_Generated_Image_u1lac1u1lac1u1la.png',
                  '/Gemini_Generated_Image_fv9uk0fv9uk0fv9u.png',
                  '/3d931fc8d4b7d9ba6357f51f842da33d.jpg',
                  '/6492d5ffd9ae5616e415a8afbe984073.jpg'
                ].map((image, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border overflow-hidden"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <img
                      src={image}
                      alt={`${t('injectionLifting.services.injection.title')} ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
                {activeService === 'diamond7d' && [
                  '/3d931fc8d4b7d9ba6357f51f842da33d.jpg',
                  '/6492d5ffd9ae5616e415a8afbe984073.jpg',
                  '/Gemini_Generated_Image_94iwds94iwds94iw.png',
                  '/Gemini_Generated_Image_iubeodiubeodiube.png'
                ].map((image, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border overflow-hidden"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <img
                      src={image}
                      alt={`${t('injectionLifting.services.diamond7d.title')} ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
                {activeService === 'midface' && [
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
                      alt={`${t('injectionLifting.services.midface.title')} ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
                {activeService === 'smas' && [
                  '/6492d5ffd9ae5616e415a8afbe984073.jpg',
                  '/3d931fc8d4b7d9ba6357f51f842da33d.jpg',
                  '/Gemini_Generated_Image_94iwds94iwds94iw.png',
                  '/Gemini_Generated_Image_iubeodiubeodiube.png'
                ].map((image, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border overflow-hidden"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <img
                      src={image}
                      alt={`${t('injectionLifting.services.smas.title')} ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
                {activeService === 'singlePart' && [
                  '/Gemini_Generated_Image_a16ssqa16ssqa16s.png',
                  '/Gemini_Generated_Image_qvpx6jqvpx6jqvpx.png',
                  '/Gemini_Generated_Image_lv6nndlv6nndlv6n.png',
                  '/Gemini_Generated_Image_pf7kappf7kappf7k.png'
                ].map((image, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border overflow-hidden"
                    style={{borderColor: '#E5E7EB'}}
                  >
                    <img
                      src={image}
                      alt={`${t('injectionLifting.services.singlePart.title')} ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <ServiceCasesSection serviceType="injection" />

      <WhyYanoraSection />

      <CTASection />

      <Footer />
    </div>
  );
}

export default InjectionLiftingPage;
