import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg animate-fade-in delay-200">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up delay-300">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/25">
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation. Feel free to reach out!
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">nikhileshmarali7@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+91 98765 43210</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Bengaluru - Available for Remote Work</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-5 pt-8 border-t border-slate-700/50">
                <p className="text-gray-400 mb-4">Follow me on</p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/cxxc7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Github size={30} className="text-black" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nikhilesh-marali-215136315/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Linkedin size={30} className="text-[#0077B5]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Info Boxes */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/25 animate-slide-up delay-400">
            <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
            <div className="space-y-6">
              <div className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-300">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Professional</h4>
                <p className="text-gray-300">Open to internships, collaborations, and full-time opportunities in web development and AI/ML.</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-300">
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Projects</h4>
                <p className="text-gray-300">Interested in contributing to open source projects and building innovative solutions.</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-300">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Learning</h4>
                <p className="text-gray-300">Always eager to learn new technologies and share knowledge with the community.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-700/50">
          <p className="text-gray-400 animate-fade-in delay-500">
              Built with React & Tailwind CSS · © 2025 Nikhilesh Marali  · All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
