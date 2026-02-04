import { useState } from "react";
import SectionTitle from "../../atoms/section/SectionTitle";
import Card from "../../atoms/Card/Card";
import Button from "../../atoms/button/Button";
import { Mail } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen flex items-center py-24 px-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto w-full">
        <SectionTitle>Get In Touch</SectionTitle>

        <Card className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg 
              bg-white dark:bg-zinc-900
              border border-zinc-300 dark:border-zinc-700
              text-zinc-900 dark:text-zinc-100
              placeholder:text-zinc-400
              focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg 
              bg-white dark:bg-zinc-900
              border border-zinc-300 dark:border-zinc-700
              text-zinc-900 dark:text-zinc-100
              placeholder:text-zinc-400
              focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Message
              </label>
              <textarea
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-lg resize-none
              bg-white dark:bg-zinc-900
              border border-zinc-300 dark:border-zinc-700
              text-zinc-900 dark:text-zinc-100
              placeholder:text-zinc-400
              focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
              />
            </div>

            <Button variant="primary" className="w-full" onClick={handleSubmit}>
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex justify-center">
            <a
              href="mailto:somnathmore8383@gmail.com"
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
            >
              <Mail size={18} />
              <span>somnathmore8383@gmail.com</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};
export default ContactSection;
