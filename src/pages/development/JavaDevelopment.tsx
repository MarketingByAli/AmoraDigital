import { Link } from 'react-router-dom'
import LeadForm from '../../components/LeadForm'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Code,
  Layers,
  Rocket,
  Shield,
  Server,
  Database,
  Star,
  Phone,
  Mail,
  Box,
  GitBranch,
  Terminal,
  Cloud,
  Settings,
  Lock,
  Globe,
  Activity,
  Cog
} from 'lucide-react'

const services = [
  {
    icon: Server,
    title: 'Enterprise Applications',
    description: 'Large-scale business applications built to handle complex workflows and high volumes.'
  },
  {
    icon: Box,
    title: 'Microservices',
    description: 'Scalable, independently deployable services that grow with your business.'
  },
  {
    icon: Globe,
    title: 'REST & GraphQL APIs',
    description: 'Well-documented, secure APIs that power web and mobile applications.'
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Efficient data layer design with JPA, Hibernate, and optimized queries.'
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'AWS, Azure, and GCP deployments with Kubernetes and Docker.'
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Enterprise-grade security with Spring Security, OAuth2, and JWT.'
  }
]

const stats = [
  { value: '99.9%', label: 'Uptime', description: 'System reliability' },
  { value: '50+', label: 'Java Projects', description: 'Successfully delivered' },
  { value: '10M+', label: 'Requests/Day', description: 'Systems we\'ve built' },
  { value: '15+', label: 'Years Experience', description: 'Java expertise' }
]

const techStack = [
  { name: 'Spring Boot', description: 'Rapid application development framework', icon: Rocket },
  { name: 'Spring Cloud', description: 'Microservices & distributed systems', icon: Cloud },
  { name: 'Hibernate/JPA', description: 'Object-relational mapping', icon: Database },
  { name: 'Apache Kafka', description: 'Event streaming & messaging', icon: Activity },
  { name: 'Docker & K8s', description: 'Containerization & orchestration', icon: Box },
  { name: 'Maven/Gradle', description: 'Build automation & dependencies', icon: Cog },
]

const benefits = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Battle-tested security features trusted by banks, healthcare, and government.'
  },
  {
    icon: Activity,
    title: 'High Performance',
    description: 'Optimized JVM performance handling millions of transactions.'
  },
  {
    icon: Layers,
    title: 'Scalability',
    description: 'Horizontal scaling with microservices architecture for any load.'
  },
  {
    icon: GitBranch,
    title: 'Maintainability',
    description: 'Clean, well-structured code that teams can maintain for years.'
  },
]

const process = [
  {
    step: '01',
    title: 'Requirements Analysis',
    description: 'Deep dive into your business needs, scalability requirements, and technical constraints.'
  },
  {
    step: '02',
    title: 'Architecture Design',
    description: 'Design robust, scalable architecture with proper patterns and best practices.'
  },
  {
    step: '03',
    title: 'Agile Development',
    description: 'Iterative development with continuous integration and regular deliverables.'
  },
  {
    step: '04',
    title: 'Deploy & Monitor',
    description: 'Production deployment with monitoring, logging, and performance optimization.'
  }
]

const useCases = [
  'Banking & Finance Systems',
  'Healthcare Platforms',
  'E-commerce Backends',
  'ERP Systems',
  'Payment Processing',
  'Inventory Management',
  'CRM Applications',
  'Logistics & Supply Chain',
  'Insurance Platforms',
  'Government Systems',
  'Trading Platforms',
  'IoT Backends'
]

const frameworks = [
  { name: 'Spring Boot', description: 'Our primary framework for rapid development' },
  { name: 'Spring MVC', description: 'Web application framework' },
  { name: 'Spring Security', description: 'Authentication & authorization' },
  { name: 'Spring Data', description: 'Data access abstraction' },
  { name: 'Spring Cloud', description: 'Microservices patterns' },
  { name: 'Spring Batch', description: 'Batch processing' },
]

export default function JavaDevelopment() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-600 to-rose-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm mb-8">
                <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                <span className="text-white/40">/</span>
                <Link to="/development" className="text-white/60 hover:text-white transition-colors">Development</Link>
                <span className="text-white/40">/</span>
                <span className="text-white">Java</span>
              </nav>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Enterprise-Grade{' '}
                <span className="text-orange-200">Java Solutions</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Build robust, scalable, and secure enterprise applications with Java. 
                From microservices to monoliths—we architect Java systems that handle 
                millions of transactions with 99.9% uptime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-red-700 bg-white rounded-xl hover:bg-slate-100 transition-all shadow-lg group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#tech-stack" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  View Tech Stack
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-200" />
                  <span className="text-sm text-white/70">Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-orange-200" />
                  <span className="text-sm text-white/70">99.9% Uptime</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Java Code */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-400/30 rounded-full blur-3xl" />
              
              {/* Code editor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                  {/* Editor header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-slate-400">UserService.java</span>
                  </div>
                  {/* Code content */}
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
              
              {/* Floating elements */}
              <div className="absolute top-4 left-4 animate-float z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 backdrop-blur-sm">
                  <Rocket className="w-4 h-4 text-orange-300" />
                  <span className="text-sm font-medium text-white">Spring Boot</span>
                </div>
              </div>
              
              <div className="absolute top-16 right-0 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <Shield className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">Secure</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 left-0 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                  <Box className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-white">Microservices</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <Cloud className="w-4 h-4 text-purple-300" />
                  <span className="text-sm font-medium text-white">Cloud Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-white/90">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Java Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Why Java</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Why Choose{' '}
              <span className="gradient-text">Java?</span>
            </h2>
            <p className="section-subheading mx-auto">
              Java powers the world's most critical systems. Here's why enterprises trust it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl bg-slate-50 hover:bg-orange-50 hover:shadow-lg transition-all border border-transparent hover:border-orange-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Java Development{' '}
              <span className="gradient-text">Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              <Terminal className="w-4 h-4" />
              <span>Tech Stack</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Java{' '}
              <span className="text-orange-400">Ecosystem</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We leverage the full power of the Java ecosystem for enterprise solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                    <p className="text-sm text-white/70">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spring Framework Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                <Rocket className="w-4 h-4" />
                <span>Spring Framework</span>
              </div>
              <h2 className="section-heading text-slate-900 mb-6">
                Spring Boot{' '}
                <span className="gradient-text">Experts</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Spring Boot is our framework of choice for building production-ready Java applications. 
                We leverage the entire Spring ecosystem to deliver robust, maintainable solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {frameworks.map((fw) => (
                  <div key={fw.name} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900 text-sm">{fw.name}</div>
                      <div className="text-xs text-slate-500">{fw.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Architecture diagram */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h4 className="font-bold text-slate-900 mb-6 text-center">Microservices Architecture</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">API Gateway</div>
                </div>
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-slate-300" />
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-xs font-medium">User Service</div>
                  <div className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-xs font-medium">Order Service</div>
                  <div className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-xs font-medium">Payment Service</div>
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

      {/* Use Cases */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>Use Cases</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              Industries We{' '}
              <span className="gradient-text">Serve</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white hover:bg-orange-50 hover:border-orange-200 border border-slate-100 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
              <Code className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-heading text-slate-900 mb-4">
              How We{' '}
              <span className="gradient-text">Deliver Excellence</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
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

      {/* Testimonial */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
              "They rebuilt our entire payment processing system in Java. It now handles 
              10x the volume with zero downtime. Exceptional enterprise expertise."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600" />
              <div className="text-left">
                <div className="font-semibold text-white">Hans de Groot</div>
                <div className="text-slate-400 text-sm">CTO, FinTech Solutions B.V.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-orange-500 via-red-600 to-rose-700 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready for Enterprise Java?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Let's discuss your enterprise application needs and create a solution 
                  that scales with your business.
                </p>
                <ul className="space-y-3">
                  {['Free architecture consultation', 'Technical feasibility assessment', 'Scalability planning', 'No obligation proposal'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-orange-200 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Lead Form */}
              <LeadForm
                title="Start Your Java Project"
                subject="Java Development Inquiry"
                buttonText="Get Free Consultation"
                buttonClass="from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg shadow-orange-500/25"
                footnote="Free consultation. We'll respond within 24 hours."
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                  <select id="projectType" name="projectType" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors">
                    <option value="">Select project type</option>
                    <option value="Enterprise Application">Enterprise Application</option>
                    <option value="Microservices Architecture">Microservices Architecture</option>
                    <option value="API Development">API Development</option>
                    <option value="Legacy Migration">Legacy Migration</option>
                    <option value="System Integration">System Integration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">Project Description</label>
                  <textarea id="description" name="description" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Tell us about your project..." />
                </div>
              </LeadForm>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">Ready for enterprise-grade Java?</h3>
              <p className="text-slate-400">Let's discuss your Java project today.</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+31625580415"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +31 6 25580415
              </a>
              <a 
                href="mailto:info@amoradigital.nl"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
