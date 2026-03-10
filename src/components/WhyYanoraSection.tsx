import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

function WhyYanoraSection() {
  const { t } = useLanguage();

  const features = [
    {
      id: 1,
      image: '/7f89a2d3257b24a6954e53e9ca86f557_copy.jpg',
      title: t('whyYanora.feature1Title'),
      description: t('whyYanora.feature1Desc')
    },
    {
      id: 2,
      image: '/babdd4249dea4d87530ef110e24bd12b_copy.jpg',
      title: t('whyYanora.feature2Title'),
      description: t('whyYanora.feature2Desc')
    },
    {
      id: 3,
      image: '/e4f3412e99df422ba49fc3eb3df46c36.jpg',
      title: t('whyYanora.feature3Title'),
      description: t('whyYanora.feature3Desc')
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h2 className="text-2xl md:text-4xl font-light text-center mb-12 md:mb-16 tracking-wide" style={{color: '#1F1F1F'}}>
            {t('whyYanora.title')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.id}
              animation="fade-up"
              delay={index * 100}
              className="flex flex-col items-center"
            >
              <div className="w-full rounded-2xl overflow-hidden mb-6" style={{backgroundColor: '#F5F8FA'}}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-center mb-3 tracking-wide" style={{color: '#1F1F1F'}}>
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-center leading-relaxed" style={{color: '#6B7280'}}>
                {feature.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyYanoraSection;
