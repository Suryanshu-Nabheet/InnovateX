import React from "react";
import { Navbar } from "../ui/navbar"; // Correct relative path (up to components, then ui/navbar)
import { Mail, MapPin, Phone } from 'lucide-react'; // Icons for contact info (Send removed)

// Full Contacts Page Component (Form removed, real details + embedded map)
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar /> {/* Navbar for consistency */}
      <main className="pt-20 md:pt-24"> {/* Top padding to avoid navbar overlap */}
        {/* Inlined Full Contact Section */}
        <section id="contact" className="relative py-32 bg-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full filter blur-[200px]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Get In </span>
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Have questions? We'd love to hear from you. Reach out via the details below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information (Updated with Real Details) */}
              <div className="space-y-8">
                <div className="p-8 rounded-2xl bg-black border border-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Location</h4>
                        <p className="text-gray-400">Vitthal Complex, Ranjan path,<br />Gola Road (Danapur Cantt.),<br />Patna - 801503.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Phone</h4>
                        <p className="text-gray-400">06115 - 235117, 235525</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Email</h4>
                        <p className="text-gray-400">gnspatna@rediffmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map (Replaces Form) */}
              <div className="p-8 rounded-2xl bg-black border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-8">Our Location</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.123456789!2d85.052615!3d25.61988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzExLjY4Ik4gODVkw5AwMycxNS4zNCJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gyan Niketan Location Map"
                  className="rounded-xl w-full h-[400px] md:h-[500px]" // Responsive height
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;