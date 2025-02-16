import { AIIcon, ChatbotIcon, IntegrationIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Skills: React.FC = () => {
    return (
      <section className="py-20 px-4 bg-forest-light">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Comprehensive Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Automation */}
          <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
            <div className="mb-6">
              <AIIcon />
            </div>
            <h3 className="text-xl font-bold mb-4">AI Automation Solutions</h3>
            <p className="text-white/60 mb-4">
              Streamline your business operations with intelligent automation solutions powered by cutting-edge AI technology.
            </p>
            <ul className="text-white/60 mb-4 list-disc pl-5">
              <li>Intelligent data entry & processing</li>
              <li>Marketing campaign automation</li>
              <li>Customer support workflow automation</li>
              <li>Document analysis & processing</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">OpenAI</Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Python</Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Automation</Badge>
            </div>
          </div>

          {/* Web Development */}
          <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
            <div className="mb-6">
              <IntegrationIcon />
            </div>
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p className="text-white/60 mb-4">
              Custom web solutions tailored to your business needs with modern technology stack and best practices.
            </p>
            <ul className="text-white/60 mb-4 list-disc pl-5">
              <li>Responsive website development</li>
              <li>E-commerce platforms</li>
              <li>Progressive web applications</li>
              <li>API development & integration</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">React</Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Node.js</Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">PHP</Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Tailwindcss</Badge>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
            <div className="mb-6">
              <ChatbotIcon />
            </div>
            <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
            <p className="text-white/60 mb-4">
              Comprehensive digital marketing solutions to boost your online presence and drive growth.
            </p>
            <ul className="text-white/60 mb-4 list-disc pl-5">
              <li>SEO optimization</li>
              <li>PPC campaign management</li>
              <li>Social media marketing</li>
              <li>Content strategy</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">SEO</Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Analytics</Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">AdWords</Badge>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
            <div className="mb-6">
              <IntegrationIcon />
            </div>
            <h3 className="text-xl font-bold mb-4">Mobile Development</h3>
            <p className="text-white/60 mb-4">
              Native and cross-platform mobile applications with seamless user experience.
            </p>
            <ul className="text-white/60 mb-4 list-disc pl-5">
              <li>iOS and Android development</li>
              <li>Cross-platform solutions</li>
              <li>App maintenance & updates</li>
              <li>Mobile UI/UX design</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">React Native</Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Flutter</Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Swift</Badge>
            </div>
          </div>

          {/* Chatbot Solutions */}
          <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
            <div className="mb-6">
              <ChatbotIcon />
            </div>
            <h3 className="text-xl font-bold mb-4">Chatbot Solutions</h3>
            <p className="text-white/60 mb-4">
              Intelligent conversational AI solutions for enhanced customer engagement.
            </p>
            <ul className="text-white/60 mb-4 list-disc pl-5">
              <li>Custom chatbot development</li>
              <li>NLP integration</li>
              <li>Multi-platform deployment</li>
              <li>24/7 customer support automation</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Dialogflow</Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Rasa</Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">NLP</Badge>
            </div>
          </div>

          {/* Technical Consulting */}
          <div className="p-8 rounded-xl border border-mint/10 bg-forest hover:border-mint/30 transition-colors">
            <div className="mb-6">
              <AIIcon />
            </div>
            <h3 className="text-xl font-bold mb-4">Technical Consulting</h3>
            <p className="text-white/60 mb-4">
              Expert guidance on technology implementation and digital transformation.
            </p>
            <ul className="text-white/60 mb-4 list-disc pl-5">
              <li>Technology stack assessment</li>
              <li>Architecture planning</li>
              <li>Performance optimization</li>
              <li>Security consulting</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Architecture</Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">DevOps</Badge>
              <Badge variant="secondary" className="bg-mint/10 text-mint border-mint/20">Security</Badge>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => window.open("https://calendly.com/kapcho99/30min", "_blank")} 
            className="bg-mint hover:bg-mint/90 text-forest font-medium px-6 py-3 text-lg transition-transform duration-300 hover:scale-105 w-full max-w-xs mx-auto"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
    );
}

export default Skills;