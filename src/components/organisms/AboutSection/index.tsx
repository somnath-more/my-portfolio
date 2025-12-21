import type React from "react";
import SectionTitle from "../../atoms/section/SectionTitle";
import Button from "../../atoms/button/Button";
import Card from "../../atoms/Card/Card";
import { Code, ExternalLink, Palette, Zap } from "lucide-react";

const AboutSection: React.FC = () => (
  <section className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle>About Me</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xl text-white/80 leading-relaxed">
            I'm a passionate developer who loves turning complex problems into simple, beautiful, and intuitive solutions. With years of experience in full-stack development, I bring ideas to life through clean code and elegant design.
          </p>
          
          <p className="text-xl text-white/80 leading-relaxed">
            My expertise spans across modern web technologies, and I'm constantly learning and adapting to new tools and frameworks to stay at the cutting edge of development.
          </p>

          <div className="flex gap-4 pt-6">
            <Button variant="primary">Download CV</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Card hover={false} className="text-center">
            <Code size={40} className="text-purple-400 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2">2+</h3>
            <p className="text-white/70">Years Experience</p>
          </Card>
          
          <Card hover={false} className="text-center">
            <Palette size={40} className="text-pink-400 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2">20+</h3>
            <p className="text-white/70">Projects Completed</p>
          </Card>
          
          <Card hover={false} className="text-center">
            <Zap size={40} className="text-blue-400 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
            <p className="text-white/70">Client Satisfaction</p>
          </Card>
          
          <Card hover={false} className="text-center">
            <ExternalLink size={40} className="text-green-400 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2">10+</h3>
            <p className="text-white/70">Happy Clients</p>
          </Card>
        </div>
      </div>
    </div>
  </section>
);
export default AboutSection