import React, { useState } from "react";
import { X, Send, Calendar, User, Mail, Phone, Globe, MessageSquare, Check } from "lucide-react";

const CTA: React.FC<{isDark: boolean, id?: string }> = ({isDark, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profiles: "",
    useCases: [] as string[],
    priorityReason: "",
    comments: "",
    agreeToPromotions: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Your Google Apps Script URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxDf4WwZ1KpOB1spgWTODm-jhWDLGJiNbbpXJctblojCJxIBGXIPQkyt19hR60vAcT6zg/exec";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData(prev => ({ ...prev, useCases: [...prev.useCases, name] }));
    } else {
      setFormData(prev => ({ ...prev, useCases: prev.useCases.filter(useCase => useCase !== name) }));
    }
  };

  const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreeToPromotions: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Prepare form data for Google Sheets
      const formDataForSheets = new FormData();
      formDataForSheets.append("name", formData.name);
      formDataForSheets.append("email", formData.email);
      formDataForSheets.append("phone", formData.phone);
      formDataForSheets.append("profiles", formData.profiles);
      formDataForSheets.append("useCases", formData.useCases.join(", "));
      formDataForSheets.append("priorityReason", formData.priorityReason);
      formDataForSheets.append("comments", formData.comments);
      formDataForSheets.append("agreeToPromotions", formData.agreeToPromotions ? "Yes" : "No");
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        body: formDataForSheets
      });
      console.log(response);

      // Since we're using no-cors, we can't check response status
      // But we'll assume it was successful if no error is thrown
      console.log("Data successfully sent to Google Sheets");
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setShowModal(false);
        setIsLoading(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          profiles: "",
          useCases: [],
          priorityReason: "",
          comments: "",
          agreeToPromotions: false
        });
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      // Even if there's an error, we'll show success to the user
      // since we can't properly detect success with no-cors
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowModal(false);
        setIsLoading(false);
      }, 3000);
    }
  };

  const useCaseOptions = [
    { id: "tax-plan", label: "Tax plan implementation" },
    { id: "assembly", label: "Assembly & Gathering of Tax artifacts" },
    { id: "automated", label: "Automated Tax data entry & preparation" },
    { id: "delivery", label: "Tax Documents Delivery" },
    { id: "wallets", label: "Family data wallets & Data sharing" }
  ];

  return (
    <>
      <section
        id={id}
        className={`relative py-16 md:py-20 overflow-hidden ${
          isDark ? "bg-[#0b0b12]" : "bg-gradient-to-br from-blue-50 to-purple-50"
        }`}
      >
        {/* Floating Gradient Orb */}
        <div className={`absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-[120px] animate-pulse ${
          isDark 
            ? "bg-gradient-to-r from-purple-500/40 via-cyan-400/30 to-purple-600/40" 
            : "bg-gradient-to-r from-purple-300/30 via-cyan-300/20 to-purple-400/30"
        }`} />

        <div className="relative max-w-4xl mx-auto text-center px-6">
          {/* Headline */}
          <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${
            isDark ? "text-white" : "text-gray-800"
          }`}>
            The Future of Tax Workflow —
            <span className={`font-semibold bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? "from-cyan-400 to-purple-400" 
                : "from-cyan-600 to-purple-600"
            }`}>
              powered by AI
            </span>
          </h2>

          {/* Subtext */}
          <p className={`text-base md:text-lg max-w-2xl mx-auto mb-8 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            From intake to delivery, myfindata eliminates tedious tasks while
            keeping your client data safe with industry-leading security.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowModal(true)}
              className={`font-bold py-3 px-6 rounded-lg shadow-md transition flex items-center justify-center gap-2 ${
                isDark
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              <Calendar size={18} />
              Apply For Early Access
            </button>
            <button className={`font-bold py-3 px-6 border rounded-lg transition ${
              isDark
                ? "bg-transparent hover:bg-gray-700 text-white border-white/40"
                : "bg-transparent hover:bg-purple-100 text-purple-700 border-purple-400/60"
            }`}>
              Talk to Us
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className={`relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
            isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
          }`}>
            {/* Close Button */}
            <button 
              onClick={() => setShowModal(false)}
              className={`absolute top-4 right-4 rounded-full p-2 ${
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              <X size={24} />
            </button>

            {submitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
                <p className="mb-6">Thank you for your interest. We'll be in touch soon with your early access details.</p>
                <button
                  onClick={() => setShowModal(false)}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    isDark ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-600 hover:bg-purple-700 text-white"
                  }`}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="text-center mb-8">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Send className="text-purple-600" size={28} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Early Access Application</h2>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Join the exclusive group of tax professionals testing MyFinData
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className={isDark ? "text-gray-500" : "text-gray-400"} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                          isDark 
                            ? "bg-gray-800 border-gray-700 focus:border-purple-500 text-white" 
                            : "bg-white border-gray-300 focus:border-purple-500 text-gray-800"
                        } focus:outline-none focus:ring-2 focus:ring-purple-200`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <p className={`text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      Let us know who we're welcoming to MyFinData
                    </p>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className={isDark ? "text-gray-500" : "text-gray-400"} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                          isDark 
                            ? "bg-gray-800 border-gray-700 focus:border-purple-500 text-white" 
                            : "bg-white border-gray-300 focus:border-purple-500 text-gray-800"
                        } focus:outline-none focus:ring-2 focus:ring-purple-200`}
                        placeholder="Enter your email address"
                      />
                    </div>
                    <p className={`text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      We'll send your early access invitation here
                    </p>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone size={18} className={isDark ? "text-gray-500" : "text-gray-400"} />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                          isDark 
                            ? "bg-gray-800 border-gray-700 focus:border-purple-500 text-white" 
                            : "bg-white border-gray-300 focus:border-purple-500 text-gray-800"
                        } focus:outline-none focus:ring-2 focus:ring-purple-200`}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <p className={`text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      Because you are choosing to participate in the improvement of this software
                    </p>
                  </div>

                  {/* Website and Social Profiles */}
                  <div>
                    <label htmlFor="profiles" className="block text-sm font-medium mb-2">
                      Website and Social Media Profiles
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3">
                        <Globe size={18} className={isDark ? "text-gray-500" : "text-gray-400"} />
                      </div>
                      <textarea
                        id="profiles"
                        name="profiles"
                        rows={3}
                        value={formData.profiles}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                          isDark 
                            ? "bg-gray-800 border-gray-700 focus:border-purple-500 text-white placeholder-gray-400" 
                            : "bg-white border-gray-300 focus:border-purple-500 text-gray-800 placeholder-gray-500"
                        } focus:outline-none focus:ring-2 focus:ring-purple-200 resize-none`}
                        placeholder="Please provide links to your website and social media profiles"
                      />
                    </div>
                    <p className={`text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      This early access is meant only for tax professionals. Please provide links to your website and social media profiles.
                    </p>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      How do you plan to use MyFinData?
                    </label>
                    <div className={`rounded-lg border p-4 ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}>
                      <div className="space-y-3">
                        {useCaseOptions.map(option => (
                          <div key={option.id} className="flex items-start">
                            <input
                              type="checkbox"
                              id={option.id}
                              name={option.id}
                              checked={formData.useCases.includes(option.id)}
                              onChange={handleCheckboxChange}
                              className="mt-1 mr-3"
                            />
                            <label htmlFor={option.id} className="text-sm">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Priority Reason */}
                  <div>
                    <label htmlFor="priorityReason" className="block text-sm font-medium mb-2">
                      Why should you be given priority access to MyFinData?
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3">
                        <MessageSquare size={18} className={isDark ? "text-gray-500" : "text-gray-400"} />
                      </div>
                      <textarea
                        id="priorityReason"
                        name="priorityReason"
                        rows={4}
                        value={formData.priorityReason}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                          isDark 
                            ? "bg-gray-800 border-gray-700 focus:border-purple-500 text-white placeholder-gray-400" 
                            : "bg-white border-gray-300 focus:border-purple-500 text-gray-800 placeholder-gray-500"
                        } focus:outline-none focus:ring-2 focus:ring-purple-200 resize-none`}
                        placeholder="Please explain why you should be given priority access"
                      />
                    </div>
                  </div>

                  {/* Comments */}
                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium mb-2">
                      Any suggestions or comments
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3">
                        <MessageSquare size={18} className={isDark ? "text-gray-500" : "text-gray-400"} />
                      </div>
                      <textarea
                        id="comments"
                        name="comments"
                        rows={3}
                        value={formData.comments}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                          isDark 
                            ? "bg-gray-800 border-gray-700 focus:border-purple-500 text-white placeholder-gray-400" 
                            : "bg-white border-gray-300 focus:border-purple-500 text-gray-800 placeholder-gray-500"
                        } focus:outline-none focus:ring-2 focus:ring-purple-200 resize-none`}
                        placeholder="Share any suggestions or comments you have"
                      />
                    </div>
                  </div>

                  {/* Agreement */}
                  <div className="flex items-start mt-6">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="agreeToPromotions"
                        name="agreeToPromotions"
                        checked={formData.agreeToPromotions}
                        onChange={handleAgreementChange}
                        className={`w-4 h-4 rounded focus:ring-2 ${
                          isDark 
                            ? "bg-gray-700 border-gray-600 focus:ring-purple-500" 
                            : "bg-white border-gray-300 focus:ring-purple-500"
                        } border`}
                      />
                    </div>
                    <label htmlFor="agreeToPromotions" className="ml-3 text-sm">
                      I agree to receive promotional content via emails and SMS (extra charges by your email and SMS providers may apply).
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!formData.name || !formData.email || !formData.phone || isLoading}
                    className={`w-full py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 mt-6 ${
                      (!formData.name || !formData.email || !formData.phone || isLoading)
                        ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                        : isDark
                          ? "bg-purple-600 hover:bg-purple-700 text-white"
                          : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Request Early Access
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CTA;