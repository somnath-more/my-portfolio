import { useState } from "react";
import SectionTitle from "../../atoms/section/SectionTitle";
import Card from "../../atoms/Card/Card";
import Button from "../../atoms/button/Button";
import { Mail } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <Card className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <label className="block text-white mb-2 font-semibold">Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-white mb-2 font-semibold">Email</label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-white mb-2 font-semibold">Message</label>
              <textarea 
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            
            <Button variant="primary" className="w-full" onClick={handleSubmit}>
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex justify-center gap-8">
            <a href="mailto:john@example.com" className="flex items-center gap-2 text-white/70 hover:text-purple-400 transition-colors">
              <Mail size={20} />
              <span>john@example.com</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};
export default ContactSection