import AnimatedSection from './AnimatedSection';

function WhyYanoraSection() {
  const features = [
    {
      id: 1,
      image: '/7f89a2d3257b24a6954e53e9ca86f557_copy.jpg',
      title: '10W+Clients Worldwide',
      description: 'Providing professional medical aesthetic and cosmetic surgery services globally.'
    },
    {
      id: 2,
      image: '/babdd4249dea4d87530ef110e24bd12b_copy.jpg',
      title: 'Personalized Aesthetic Plans for Every Face',
      description: 'Tailored cosmetic and medical aesthetic solutions designed for different facial structures and ethnic backgrounds.'
    },
    {
      id: 3,
      image: '/e4f3412e99df422ba49fc3eb3df46c36.jpg',
      title: 'Experienced Medical Team',
      description: 'Our skilled doctors provide transparent consultation, precise treatment planning, and professional care throughout every step of your aesthetic journey.'
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h2 className="text-2xl md:text-4xl font-light text-center mb-12 md:mb-16 tracking-wide" style={{color: '#1F1F1F'}}>
            为什么选择YANORA
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
