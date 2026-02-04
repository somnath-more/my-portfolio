import type React from "react";
// import SectionTitle from "../../atoms/section/SectionTitle";
import Button from "../../atoms/button/Button";
import Card from "../../atoms/Card/Card";
import { Code, ExternalLink, Palette, Zap } from "lucide-react";

const AboutSection: React.FC = () => (
  <section
    className="
  min-h-screen flex items-center py-20 px-6
  bg-[#f5f5f5] dark:bg-zinc-950
  text-zinc-900 dark:text-zinc-100
"
  >
    <div className="max-w-6xl mx-auto">
      {/* Section Title */}
      <h2
        className="
      text-4xl md:text-5xl font-semibold mb-16 text-center
      text-zinc-900 dark:text-zinc-100
    "
      >
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p
            className="
          text-lg leading-relaxed
          text-zinc-700 dark:text-zinc-300
        "
          >
            I'm a passionate developer who loves turning complex problems into
            simple, beautiful, and intuitive solutions. With years of experience
            in full-stack development, I bring ideas to life through clean code
            and elegant design.
          </p>

          <p
            className="
          text-lg leading-relaxed
          text-zinc-700 dark:text-zinc-300
        "
          >
            My expertise spans across modern web technologies, and I'm
            constantly learning and adapting to new tools and frameworks to stay
            at the cutting edge of development.
          </p>

          <div className="flex gap-4 pt-6">
            <Button variant="primary"
            onClick={() => window.open("https://drive.google.com/file/d/1AveJ7htfCG-OzJuI10aTVT7kbzcywiu1/view?usp=sharing", "_blank")}
            >Download CV</Button>
            <Button variant="secondary"
            onClick={() => window.open("https://www.linkedin.com/in/somnathmore83/", "_blank")}
            
            >Learn More</Button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-6">
          <Card
            hover={false}
            className="
          text-center
          bg-white dark:bg-zinc-900
          border border-zinc-200 dark:border-zinc-800
        "
          >
            <Code
              size={40}
              className="mx-auto mb-4 text-zinc-700 dark:text-zinc-300"
            />
            <h3 className="text-3xl font-semibold mb-1">2+</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Years Experience
            </p>
          </Card>

          <Card
            hover={false}
            className="
          text-center
          bg-white dark:bg-zinc-900
          border border-zinc-200 dark:border-zinc-800
        "
          >
            <Palette
              size={40}
              className="mx-auto mb-4 text-zinc-700 dark:text-zinc-300"
            />
            <h3 className="text-3xl font-semibold mb-1">20+</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Projects Completed
            </p>
          </Card>

          <Card
            hover={false}
            className="
          text-center
          bg-white dark:bg-zinc-900
          border border-zinc-200 dark:border-zinc-800
        "
          >
            <Zap
              size={40}
              className="mx-auto mb-4 text-zinc-700 dark:text-zinc-300"
            />
            <h3 className="text-3xl font-semibold mb-1">100%</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Client Satisfaction
            </p>
          </Card>

          <Card
            hover={false}
            className="
          text-center
          bg-white dark:bg-zinc-900
          border border-zinc-200 dark:border-zinc-800
        "
          >
            <ExternalLink
              size={40}
              className="mx-auto mb-4 text-zinc-700 dark:text-zinc-300"
            />
            <h3 className="text-3xl font-semibold mb-1">10+</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Happy Clients
            </p>
          </Card>
        </div>
      </div>
    </div>
  </section>
);
export default AboutSection;
