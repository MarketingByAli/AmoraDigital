import { Link, useLocation } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight, CheckCircle2, Zap, Code, Layers, Rocket, Shield, Server, Database, Star, Phone,
  Mail, Box, GitBranch, Terminal, Cloud, Settings, Lock, Globe, Activity, Cog
} from 'lucide-react'
import { ROUTES, localeFromPath, type Locale } from '../../i18n/routes'

const T = {
  en: {
    crumbHome: 'Home', crumbDev: 'Development', crumbCurrent: 'Java',
    headPre: 'Enterprise-Grade ', headHighlight: 'Java Solutions',
    sub: 'Build robust, scalable, and secure enterprise applications with Java. From microservices to monoliths\u2014we architect Java systems that handle millions of transactions with 99.9% uptime.',
    ctaStart: 'Start Your Project', ctaStack: 'View Tech Stack',
    trust1: 'Enterprise Ready', trust2: '99.9% Uptime',
    floats: { spring: 'Spring Boot', secure: 'Secure', micro: 'Microservices', cloud: 'Cloud Native' },
    stats: [
      { value: '99.9%', label: 'Uptime', description: 'System reliability' },
      { value: '50+', label: 'Java Projects', description: 'Successfully delivered' },
      { value: '10M+', label: 'Requests/Day', description: "Systems we've built" },
      { value: '15+', label: 'Years Experience', description: 'Java expertise' }
    ],
    whySection: { badge: 'Why Java', headPre: 'Why Choose ', headHighlight: 'Java?', sub: "Java powers the world's most critical systems. Here's why enterprises trust it." },
    benefits: [
      { title: 'Enterprise Security', description: 'Battle-tested security features trusted by banks, healthcare, and government.' },
      { title: 'High Performance', description: 'Optimized JVM performance handling millions of transactions.' },
      { title: 'Scalability', description: 'Horizontal scaling with microservices architecture for any load.' },
      { title: 'Maintainability', description: 'Clean, well-structured code that teams can maintain for years.' }
    ],
    servicesSection: { badge: 'Our Services', headPre: 'Java Development ', headHighlight: 'Services' },
    services: [
      { title: 'Enterprise Applications', description: 'Large-scale business applications built to handle complex workflows and high volumes.' },
      { title: 'Microservices', description: 'Scalable, independently deployable services that grow with your business.' },
      { title: 'REST & GraphQL APIs', description: 'Well-documented, secure APIs that power web and mobile applications.' },
      { title: 'Database Solutions', description: 'Efficient data layer design with JPA, Hibernate, and optimized queries.' },
      { title: 'Cloud Native', description: 'AWS, Azure, and GCP deployments with Kubernetes and Docker.' },
      { title: 'Security', description: 'Enterprise-grade security with Spring Security, OAuth2, and JWT.' }
    ],
    stackSection: { badge: 'Tech Stack', headPre: 'Java ', headHighlight: 'Ecosystem', sub: 'We leverage the full power of the Java ecosystem for enterprise solutions.' },
    stack: [
      { name: 'Spring Boot', description: 'Rapid application development framework' },
      { name: 'Spring Cloud', description: 'Microservices & distributed systems' },
      { name: 'Hibernate/JPA', description: 'Object-relational mapping' },
      { name: 'Apache Kafka', description: 'Event streaming & messaging' },
      { name: 'Docker & K8s', description: 'Containerization & orchestration' },
      { name: 'Maven/Gradle', description: 'Build automation & dependencies' }
    ],
    springSection: { badge: 'Spring Framework', headPre: 'Spring Boot ', headHighlight: 'Experts', sub: 'Spring Boot is our framework of choice for building production-ready Java applications. We leverage the entire Spring ecosystem to deliver robust, maintainable solutions.' },
    frameworks: [
      { name: 'Spring Boot', description: 'Our primary framework for rapid development' },
      { name: 'Spring MVC', description: 'Web application framework' },
      { name: 'Spring Security', description: 'Authentication & authorization' },
      { name: 'Spring Data', description: 'Data access abstraction' },
      { name: 'Spring Cloud', description: 'Microservices patterns' },
      { name: 'Spring Batch', description: 'Batch processing' }
    ],
    arch: { heading: 'Microservices Architecture', gateway: 'API Gateway', svc1: 'User Service', svc2: 'Order Service', svc3: 'Payment Service' },
    useCasesSection: { badge: 'Use Cases', headPre: 'Industries We ', headHighlight: 'Serve' },
    useCases: [
      'Banking & Finance Systems', 'Healthcare Platforms', 'E-commerce Backends', 'ERP Systems',
      'Payment Processing', 'Inventory Management', 'CRM Applications', 'Logistics & Supply Chain',
      'Insurance Platforms', 'Government Systems', 'Trading Platforms', 'IoT Backends'
    ],
    processSection: { badge: 'Our Process', headPre: 'How We ', headHighlight: 'Deliver Excellence' },
    process: [
      { step: '01', title: 'Requirements Analysis', description: 'Deep dive into your business needs, scalability requirements, and technical constraints.' },
      { step: '02', title: 'Architecture Design', description: 'Design robust, scalable architecture with proper patterns and best practices.' },
      { step: '03', title: 'Agile Development', description: 'Iterative development with continuous integration and regular deliverables.' },
      { step: '04', title: 'Deploy & Monitor', description: 'Production deployment with monitoring, logging, and performance optimization.' }
    ],
    testimonial: {
      quote: '"They rebuilt our entire payment processing system in Java. It now handles 10x the volume with zero downtime. Exceptional enterprise expertise."',
      author: 'Hans de Groot', role: 'CTO, FinTech Solutions B.V.'
    },
    lead: {
      heading: 'Ready for Enterprise Java?',
      sub: "Let's discuss your enterprise application needs and create a solution that scales with your business.",
      bullets: ['Free architecture consultation', 'Technical feasibility assessment', 'Scalability planning', 'No obligation proposal'],
      title: 'Start Your Java Project', subject: 'Java Development Inquiry',
      button: 'Get Free Consultation', footnote: "Free consultation. We'll respond within 24 hours.",
      first: 'First Name', firstPh: 'John', last: 'Last Name', lastPh: 'Doe',
      email: 'Email', emailPh: 'john@company.com',
      project: 'Project Type', projectPh: 'Select project type',
      projectOpts: ['Enterprise Application', 'Microservices Architecture', 'API Development', 'Legacy Migration', 'System Integration', 'Other'],
      desc: 'Project Description', descPh: 'Tell us about your project...'
    },
    quick: { heading: 'Ready for enterprise-grade Java?', sub: "Let's discuss your Java project today.", email: 'Email Us' }
  },
  nl: {
    crumbHome: 'Home', crumbDev: 'Ontwikkeling', crumbCurrent: 'Java',
    headPre: 'Enterprise-grade ', headHighlight: 'Java-oplossingen',
    sub: 'Bouw robuuste, schaalbare en veilige enterprise-applicaties met Java. Van microservices tot monolieten \u2014 wij architecteren Java-systemen die miljoenen transacties verwerken met 99,9% uptime.',
    ctaStart: 'Start je project', ctaStack: 'Bekijk tech stack',
    trust1: 'Enterprise-proof', trust2: '99,9% uptime',
    floats: { spring: 'Spring Boot', secure: 'Veilig', micro: 'Microservices', cloud: 'Cloud-native' },
    stats: [
      { value: '99,9%', label: 'Uptime', description: 'Systeembetrouwbaarheid' },
      { value: '50+', label: 'Java-projecten', description: 'Succesvol opgeleverd' },
      { value: '10M+', label: 'Requests/dag', description: 'In systemen die wij bouwden' },
      { value: '15+', label: 'Jaar ervaring', description: 'Java-expertise' }
    ],
    whySection: { badge: 'Waarom Java', headPre: 'Waarom kiezen voor ', headHighlight: 'Java?', sub: 'Java draait de meest kritische systemen ter wereld. Hierom vertrouwen enterprises erop.' },
    benefits: [
      { title: 'Enterprise-security', description: 'Bewezen security-features waarop banken, zorg en overheden vertrouwen.' },
      { title: 'Hoge performance', description: 'Geoptimaliseerde JVM-performance voor miljoenen transacties.' },
      { title: 'Schaalbaarheid', description: 'Horizontale schaling met microservices-architectuur voor elke belasting.' },
      { title: 'Onderhoudbaarheid', description: 'Schone, goed-gestructureerde code die teams jarenlang kunnen onderhouden.' }
    ],
    servicesSection: { badge: 'Onze diensten', headPre: 'Java-development ', headHighlight: 'diensten' },
    services: [
      { title: 'Enterprise-applicaties', description: 'Grootschalige business-applicaties voor complexe workflows en hoge volumes.' },
      { title: 'Microservices', description: 'Schaalbare, onafhankelijk deploybare services die meegroeien met je business.' },
      { title: 'REST- & GraphQL-API\'s', description: "Goed gedocumenteerde, veilige API's voor web- en mobiele apps." },
      { title: 'Database-oplossingen', description: 'Efficiënt datalaag-ontwerp met JPA, Hibernate en geoptimaliseerde queries.' },
      { title: 'Cloud-native', description: 'AWS-, Azure- en GCP-deployments met Kubernetes en Docker.' },
      { title: 'Security', description: 'Enterprise-security met Spring Security, OAuth2 en JWT.' }
    ],
    stackSection: { badge: 'Tech stack', headPre: 'Java-', headHighlight: 'ecosysteem', sub: 'We benutten de volledige kracht van het Java-ecosysteem voor enterprise-oplossingen.' },
    stack: [
      { name: 'Spring Boot', description: 'Framework voor snelle applicatie-ontwikkeling' },
      { name: 'Spring Cloud', description: 'Microservices & gedistribueerde systemen' },
      { name: 'Hibernate/JPA', description: 'Object-relational mapping' },
      { name: 'Apache Kafka', description: 'Event streaming & messaging' },
      { name: 'Docker & K8s', description: 'Containerization & orchestration' },
      { name: 'Maven/Gradle', description: 'Build-automation & dependencies' }
    ],
    springSection: { badge: 'Spring framework', headPre: 'Spring Boot-', headHighlight: 'experts', sub: 'Spring Boot is ons voorkeursframework voor productie-klare Java-applicaties. We benutten het volledige Spring-ecosysteem voor robuuste, onderhoudbare oplossingen.' },
    frameworks: [
      { name: 'Spring Boot', description: 'Ons hoofdframework voor snelle ontwikkeling' },
      { name: 'Spring MVC', description: 'Web-applicatieframework' },
      { name: 'Spring Security', description: 'Authenticatie & autorisatie' },
      { name: 'Spring Data', description: 'Data-access-abstractie' },
      { name: 'Spring Cloud', description: 'Microservices-patronen' },
      { name: 'Spring Batch', description: 'Batch-processing' }
    ],
    arch: { heading: 'Microservices-architectuur', gateway: 'API Gateway', svc1: 'User Service', svc2: 'Order Service', svc3: 'Payment Service' },
    useCasesSection: { badge: 'Toepassingen', headPre: 'Branches die we ', headHighlight: 'bedienen' },
    useCases: [
      'Bank- & finance-systemen', 'Zorgplatforms', 'E-commerce-backends', 'ERP-systemen',
      'Betalingsverwerking', 'Voorraadbeheer', 'CRM-applicaties', 'Logistiek & supply chain',
      'Verzekeringsplatforms', 'Overheidssystemen', 'Trading-platforms', 'IoT-backends'
    ],
    processSection: { badge: 'Onze werkwijze', headPre: 'Zo leveren we ', headHighlight: 'excellentie' },
    process: [
      { step: '01', title: 'Requirements-analyse', description: 'Diep duiken in je business-behoeften, schaalbaarheidseisen en technische randvoorwaarden.' },
      { step: '02', title: 'Architectuurontwerp', description: 'Robuuste, schaalbare architectuur met de juiste patronen en best practices.' },
      { step: '03', title: 'Agile ontwikkeling', description: 'Iteratieve ontwikkeling met continuous integration en regelmatige opleveringen.' },
      { step: '04', title: 'Deploy & monitor', description: 'Productie-deployment met monitoring, logging en performance-optimalisatie.' }
    ],
    testimonial: {
      quote: '"Ze hebben ons volledige betalingsverwerkingssysteem in Java herbouwd. Het verwerkt nu 10x het volume met nul downtime. Uitzonderlijke enterprise-expertise."',
      author: 'Hans de Groot', role: 'CTO, FinTech Solutions B.V.'
    },
    lead: {
      heading: 'Klaar voor enterprise-Java?',
      sub: 'Laten we je enterprise-applicatie bespreken en samen een oplossing maken die meegroeit met je business.',
      bullets: ['Gratis architectuurconsult', 'Technische haalbaarheidsanalyse', 'Schaalbaarheidsplanning', 'Vrijblijvend voorstel'],
      title: 'Start je Java-project', subject: 'Aanvraag Java-development',
      button: 'Vraag gratis consult', footnote: 'Gratis consult. We reageren binnen 24 uur.',
      first: 'Voornaam', firstPh: 'Jan', last: 'Achternaam', lastPh: 'Jansen',
      email: 'E-mail', emailPh: 'jan@bedrijf.nl',
      project: 'Type project', projectPh: 'Kies projecttype',
      projectOpts: ['Enterprise-applicatie', 'Microservices-architectuur', 'API-development', 'Legacy-migratie', 'Systeemintegratie', 'Anders'],
      desc: 'Projectomschrijving', descPh: 'Vertel ons over je project...'
    },
    quick: { heading: 'Klaar voor enterprise-grade Java?', sub: 'Laten we vandaag je Java-project bespreken.', email: 'Mail ons' }
  }
} as const

const SERVICE_ICONS = [Server, Box, Globe, Database, Cloud, Lock]
const BENEFIT_ICONS = [Shield, Activity, Layers, GitBranch]
const STACK_ICONS = [Rocket, Cloud, Database, Activity, Box, Cog]

export default function JavaDevelopment() {
  const { pathname } = useLocation()
  const locale: Locale = localeFromPath(pathname)
  const t = T[locale]

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-600 to-rose-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
                <Link to={ROUTES.home[locale]} className="text-white/60 hover:text-white transition-colors">{t.crumbHome}</Link>
                <span className="text-white/40" aria-hidden>/</span>
                <Link to={ROUTES.development[locale]} className="text-white/60 hover:text-white transition-colors">{t.crumbDev}</Link>
                <span className="text-white/40" aria-hidden>/</span>
                <span className="text-white">{t.crumbCurrent}</span>
              </nav>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t.headPre}<span className="text-orange-200">{t.headHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">{t.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-red-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group">
                  {t.ctaStart}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
                <a href="#tech-stack" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                  {t.ctaStack}
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-200" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-orange-200" aria-hidden />
                  <span className="text-sm text-white/70">{t.trust2}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-400/30 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-slate-400">UserService.java</span>
                  </div>
                  <div className="p-4 font-mono text-sm">
                    <div><span className="text-purple-400">@Service</span></div>
                    <div><span className="text-purple-400">public class</span> <span className="text-yellow-300">UserService</span> <span className="text-white">{'{'}</span></div>
                    <div className="mt-2 pl-4"><span className="text-purple-400">@Autowired</span></div>
                    <div className="pl-4"><span className="text-purple-400">private</span> <span className="text-cyan-300">UserRepository</span> <span className="text-white">repo;</span></div>
                    <div className="mt-2 pl-4"><span className="text-purple-400">public</span> <span className="text-cyan-300">User</span> <span className="text-yellow-300">findById</span><span className="text-white">(</span></div>
                    <div className="pl-8"><span className="text-cyan-300">Long</span> <span className="text-white">id) {'{'}</span></div>
                    <div className="pl-8"><span className="text-purple-400">return</span> <span className="text-white">repo</span></div>
                    <div className="pl-12"><span className="text-white">.findById(id)</span></div>
                    <div className="pl-12"><span className="text-white">.orElseThrow();</span></div>
                    <div className="pl-4"><span className="text-white">{'}'}</span></div>
                    <div><span className="text-white">{'}'}</span></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 backdrop-blur-sm">
                  <Rocket className="w-4 h-4 text-orange-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.spring}</span>
                </div>
              </div>
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Shield className="w-4 h-4 text-green-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.secure}</span>
                </div>
              </div>
              <div className="absolute bottom-20 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <Box className="w-4 h-4 text-blue-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.micro}</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Cloud className="w-4 h-4 text-purple-300" aria-hidden />
                  <span className="text-sm font-medium text-white">{t.floats.cloud}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-white/90">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" aria-hidden />
              <span>{t.whySection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.whySection.headPre}<span className="gradient-text">{t.whySection.headHighlight}</span>
            </h2>
            <p className="section-subheading mx-auto">{t.whySection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.map((benefit, i) => {
              const Icon = BENEFIT_ICONS[i]
              return (
                <div key={benefit.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-orange-50 hover:shadow-lg transition-all border border-transparent hover:border-orange-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" aria-hidden />
              <span>{t.servicesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.servicesSection.headPre}<span className="gradient-text">{t.servicesSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i]
              return (
                <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="tech-stack" className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Terminal className="w-4 h-4" aria-hidden />
              <span>{t.stackSection.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.stackSection.headPre}<span className="text-orange-400">{t.stackSection.headHighlight}</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.stackSection.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.stack.map((tech, i) => {
              const Icon = STACK_ICONS[i]
              return (
                <div key={tech.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                      <p className="text-sm text-white/70">{tech.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                <Rocket className="w-4 h-4" aria-hidden />
                <span>{t.springSection.badge}</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                {t.springSection.headPre}<span className="gradient-text">{t.springSection.headHighlight}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">{t.springSection.sub}</p>

              <div className="grid grid-cols-2 gap-4">
                {t.frameworks.map((fw) => (
                  <div key={fw.name} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <div className="font-medium text-slate-900 text-sm">{fw.name}</div>
                      <div className="text-xs text-slate-500">{fw.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <h4 className="font-bold text-slate-900 mb-6 text-center">{t.arch.heading}</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">{t.arch.gateway}</div>
                </div>
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-slate-300" />
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-xs font-medium">{t.arch.svc1}</div>
                  <div className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-xs font-medium">{t.arch.svc2}</div>
                  <div className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-xs font-medium">{t.arch.svc3}</div>
                </div>
                <div className="flex justify-center gap-16">
                  <div className="w-px h-8 bg-slate-300" />
                  <div className="w-px h-8 bg-slate-300" />
                  <div className="w-px h-8 bg-slate-300" />
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="px-3 py-2 bg-green-100 text-green-700 rounded-lg text-xs font-medium">PostgreSQL</div>
                  <div className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">Kafka</div>
                  <div className="px-3 py-2 bg-red-100 text-red-700 rounded-lg text-xs font-medium">Redis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" aria-hidden />
              <span>{t.useCasesSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.useCasesSection.headPre}<span className="gradient-text">{t.useCasesSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {t.useCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white hover:bg-orange-50 hover:border-orange-200 border border-slate-100 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" aria-hidden />
                <span className="text-sm text-slate-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
              <Code className="w-4 h-4" aria-hidden />
              <span>{t.processSection.badge}</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              {t.processSection.headPre}<span className="gradient-text">{t.processSection.headHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < t.process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-transparent -z-10" />
                )}
                <div className="text-6xl font-bold text-orange-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" aria-hidden />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">{t.testimonial.quote}</blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600" />
              <div className="text-left">
                <div className="font-semibold text-white">{t.testimonial.author}</div>
                <div className="text-slate-400 text-sm">{t.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-orange-500 via-red-600 to-rose-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{t.lead.heading}</h2>
                <p className="text-lg text-white/90 mb-8">{t.lead.sub}</p>
                <ul className="space-y-3">
                  {t.lead.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-orange-200 flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadForm
                title={t.lead.title}
                subject={t.lead.subject}
                buttonText={t.lead.button}
                buttonClass="from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg shadow-orange-500/25"
                footnote={t.lead.footnote}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="jv-first" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.first}</label>
                    <input type="text" id="jv-first" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder={t.lead.firstPh} />
                  </div>
                  <div>
                    <label htmlFor="jv-last" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.last}</label>
                    <input type="text" id="jv-last" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder={t.lead.lastPh} />
                  </div>
                </div>
                <div>
                  <label htmlFor="jv-email" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.email}</label>
                  <input type="email" id="jv-email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder={t.lead.emailPh} />
                </div>
                <div>
                  <label htmlFor="jv-project" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.project}</label>
                  <select id="jv-project" name="projectType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors">
                    <option value="">{t.lead.projectPh}</option>
                    {t.lead.projectOpts.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="jv-desc" className="block text-sm font-medium text-slate-700 mb-1">{t.lead.desc}</label>
                  <textarea id="jv-desc" name="description" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder={t.lead.descPh} />
                </div>
              </LeadForm>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">{t.quick.heading}</h3>
              <p className="text-slate-400">{t.quick.sub}</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+31625580415" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                <Phone className="w-4 h-4" aria-hidden />
                +31 6 25580415
              </a>
              <a href="mailto:info@amoradigital.nl" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors">
                <Mail className="w-4 h-4" aria-hidden />
                {t.quick.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
