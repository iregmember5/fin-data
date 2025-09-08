import React, { useState } from "react";
import { X, Send, Calendar, User, Mail, Phone, Globe, MessageSquare, Check, AlertCircle, Clock, Bell } from "lucide-react";

const CTA: React.FC<{isDark: boolean, id?: string }> = ({isDark, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [_selectedTime, setSelectedTime] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profiles: "",
    useCases: [] as string[],
    priorityReason: "",
    comments: "",
    agreeToPromotions: false,
    appointmentDate: "",
    appointmentTime: "",
    reminder24h: true,
    reminder1h: true,
    reminder30m: false,
    reminder10m: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Your Google Apps Script URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwknL4h5troWlq8WIUVqCE9M96z_M1I3T6aqSE5UJ0ioPC3Yneu47ThWZUuix7eDcFSbg/exec";
  // Generate time slots (9 AM to 5 PM in 30-minute increments)
  const generateTimeSlots = () => {
    const times = [];
    for (let hour = 9; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        times.push(timeString);
      }
    }
    return times;
  };

  const timeSlots = generateTimeSlots();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData(prev => ({ ...prev, useCases: [...prev.useCases, name] }));
    } else {
      setFormData(prev => ({ ...prev, useCases: prev.useCases.filter(useCase => useCase !== name) }));
    }
    setError("");
  };

  const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreeToPromotions: e.target.checked }));
  };

  const handleReminderToggle = (reminderType: string) => {
    setFormData(prev => ({ ...prev, [reminderType]: !prev[reminderType as keyof typeof prev] as boolean }));
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setFormData(prev => ({ ...prev, appointmentDate: date }));
    setShowCalendar(false);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData(prev => ({ ...prev, appointmentTime: time }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setError("");
  
  try {
    // Prepare form data for Google Sheets
    const formDataForSheets = new URLSearchParams();
    formDataForSheets.append("name", formData.name); // REMOVE ()
    formDataForSheets.append("email", formData.email); // REMOVE ()
    formDataForSheets.append("phone", formData.phone); // REMOVE ()
    formDataForSheets.append("profiles", formData.profiles); // REMOVE ()
    formDataForSheets.append("useCases", formData.useCases.join(", "));
    formDataForSheets.append("priorityReason", formData.priorityReason); // REMOVE ()
    formDataForSheets.append("comments", formData.comments); // REMOVE ()
    formDataForSheets.append("agreeToPromotions", formData.agreeToPromotions ? "Yes" : "No");
    formDataForSheets.append("reminder24h", formData.reminder24h ? "Yes" : "No");
    formDataForSheets.append("reminder1h", formData.reminder1h ? "Yes" : "No");
    formDataForSheets.append("reminder30m", formData.reminder30m ? "Yes" : "No");
    formDataForSheets.append("reminder10m", formData.reminder10m ? "Yes" : "No");
    
    // Add appointment data if selected
    if (formData.appointmentDate && formData.appointmentTime) {
      formDataForSheets.append("appointmentDate", formData.appointmentDate); // REMOVE ()
      formDataForSheets.append("appointmentTime", formData.appointmentTime); // REMOVE ()
    }
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formDataForSheets.toString()
    });
      
      if (response.ok) {
        const result = await response.json();
        if (result.result === 'success') {
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
              agreeToPromotions: false,
              appointmentDate: "",
              appointmentTime: "",
              reminder24h: true,
              reminder1h: true,
              reminder30m: false,
              reminder10m: false
            });
            setSelectedDate("");
            setSelectedTime("");
          }, 3000);
        } else {
          throw new Error(result.error || 'Unknown error');
        }
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error("Error:", error);
      setError("There was a problem submitting your application. Please try again or contact us directly.");
      setIsLoading(false);
    }
  };

  const useCaseOptions = [
    { id: "tax-plan", label: "Tax plan implementation" },
    { id: "assembly", label: "Assembly & Gathering of Tax artifacts" },
    { id: "automated", label: "Automated Tax data entry & preparation" },
    { id: "delivery", label: "Tax Documents Delivery" },
    { id: "wallets", label: "Family data wallets & Data sharing" }
  ];

  // Generate dates for the next 2 weeks (excluding weekends)
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const availableDates = generateDates();

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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className={`relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
            isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
          }`}>
            {/* Close Button */}
            <button 
              onClick={() => {
                setShowModal(false);
                setShowCalendar(false);
                setError("");
              }}
              className={`absolute top-4 right-4 rounded-full p-2 z-10 ${
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
                {formData.appointmentDate && (
                  <div className={`p-4 rounded-lg mb-6 ${isDark ? "bg-gray-800" : "bg-blue-50"}`}>
                    <h4 className="font-semibold mb-2 flex items-center justify-center gap-2">
                      <Clock size={18} /> Appointment Scheduled
                    </h4>
                    <p>
                      {new Date(formData.appointmentDate).toLocaleDateString()} at {formData.appointmentTime}
                    </p>
                    <p className="text-sm mt-2">
                      You'll receive reminder emails based on your preferences before your appointment.
                    </p>
                  </div>
                )}
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 rounded-lg font-medium bg-purple-600 hover:bg-purple-700 text-white"
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

                {error && (
                  <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    isDark ? "bg-red-900/30 border border-red-700" : "bg-red-100 border border-red-200"
                  }`}>
                    <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className={isDark ? "text-gray-500" : "text-gray-400"} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`block w-full pl-10 pr-3 py-3 rounded-lg border ${
                          isDark 
                            ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" 
                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                        }`}
                        placeholder="John Smith"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className={isDark ? "text-gray-500" : "text-gray-400"} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`block w-full pl-10 pr-3 py-3 rounded-lg border ${
                          isDark 
                            ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" 
                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone size={18} className={isDark ? "text-gray-500" : "text-gray-400"} />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`block w-full pl-10 pr-3 py-3 rounded-lg border ${
                          isDark 
                            ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" 
                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                        }`}
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  {/* Current Profiles Field */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      Website and Social Media Profiles
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Globe size={18} className={isDark ? "text-gray-500" : "text-gray-400"} />
                      </div>
                      <input
                        type="text"
                        name="profiles"
                        value={formData.profiles}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-3 py-3 rounded-lg border ${
                          isDark 
                            ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" 
                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                        }`}
                        placeholder="Please Provide link to your website and social media profiles"
                      />
                    </div>
                  </div>

                  {/* Use Cases Checkboxes */}
                  <div>
                    <label className={`block text-sm font-medium mb-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      How do you plan to use MyFinData? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {useCaseOptions.map(option => (
                        <label key={option.id} className="flex items-center">
                          <input
                            type="checkbox"
                            name={option.id}
                            checked={formData.useCases.includes(option.id)}
                            onChange={handleCheckboxChange}
                            className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <span className={`ml-2 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Priority Reason */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      Why should you be given priority access to MyFinData?
                    </label>
                    <textarea
                      name="priorityReason"
                      value={formData.priorityReason}
                      onChange={handleInputChange}
                      rows={3}
                      className={`block w-full px-3 py-3 rounded-lg border ${
                        isDark 
                          ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" 
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                      placeholder="Tell us about your practice, current pain points, or why you need early access..."
                    />
                  </div>

                  {/* Schedule Appointment */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      Schedule a Demo (Optional)
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <button
                          type="button"
                          onClick={() => setShowCalendar(!showCalendar)}
                          className={`w-full py-3 px-4 rounded-lg border flex items-center justify-center gap-2 ${
                            selectedDate
                              ? "bg-purple-100 border-purple-300 text-purple-700"
                              : isDark 
                                ? "bg-gray-800 border-gray-700 hover:bg-gray-700 text-white" 
                                : "bg-white border-gray-300 hover:bg-gray-50 text-gray-700"
                          }`}
                        >
                          <Calendar size={16} />
                          {selectedDate 
                            ? new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                            : "Select Date"
                          }
                        </button>
                      </div>
                      <div>
                        <select
                          name="appointmentTime"
                          value={formData.appointmentTime}
                          onChange={(e) => handleTimeSelect(e.target.value)}
                          className={`w-full py-3 px-4 rounded-lg border ${
                            isDark 
                              ? "bg-gray-800 border-gray-700 text-white" 
                              : "bg-white border-gray-300 text-gray-900"
                          }`}
                          disabled={!selectedDate}
                        >
                          <option value="">Select Time</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>
                              {new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true
                              })}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Calendar Date Picker */}
                    {showCalendar && (
                      <div className={`mt-4 p-4 rounded-lg border ${
                        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
                      }`}>
                        <h4 className="font-medium mb-3">Select a Date (Weekdays Only)</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {availableDates.map(date => (
                            <button
                              key={date}
                              type="button"
                              onClick={() => handleDateSelect(date)}
                              className={`py-2 px-3 rounded text-sm transition ${
                                selectedDate === date
                                  ? "bg-purple-600 text-white"
                                  : isDark
                                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                              }`}
                            >
                              {new Date(date).toLocaleDateString('en-US', { 
                                weekday: 'short',
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </button>
                          ))}
                        </div>
                        <p className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                          All appointments are 45 minutes and include a live demo + Q&A
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Reminder Settings - Only show if appointment is scheduled */}
                  {(formData.appointmentDate && formData.appointmentTime) && (
                    <div>
                      <label className={`block text-sm font-medium mb-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        <Bell size={16} className="inline mr-2" />
                        Reminder Preferences
                      </label>
                      <div className={`p-4 rounded-lg border ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">24 hours before</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.reminder24h}
                                onChange={() => handleReminderToggle('reminder24h')}
                                className="sr-only peer"
                              />
                              <div className={`w-11 h-6 rounded-full peer ${
                                formData.reminder24h 
                                  ? "bg-purple-600" 
                                  : "bg-gray-300"
                              } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">1 hour before</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.reminder1h}
                                onChange={() => handleReminderToggle('reminder1h')}
                                className="sr-only peer"
                              />
                              <div className={`w-11 h-6 rounded-full peer ${
                                formData.reminder1h 
                                  ? "bg-purple-600" 
                                  : "bg-gray-300"
                              } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">30 minutes before</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.reminder30m}
                                onChange={() => handleReminderToggle('reminder30m')}
                                className="sr-only peer"
                              />
                              <div className={`w-11 h-6 rounded-full peer ${
                                formData.reminder30m 
                                  ? "bg-purple-600" 
                                  : "bg-gray-300"
                              } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">10 minutes before</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.reminder10m}
                                onChange={() => handleReminderToggle('reminder10m')}
                                className="sr-only peer"
                              />
                              <div className={`w-11 h-6 rounded-full peer ${
                                formData.reminder10m 
                                  ? "bg-purple-600" 
                                  : "bg-gray-300"
                              } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Comments Field */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      Any suggestions or comments
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare size={18} className={isDark ? "text-gray-500" : "text-gray-400"} />
                      </div>
                      <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        rows={3}
                        className={`block w-full pl-10 pr-3 py-3 rounded-lg border ${
                          isDark 
                            ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" 
                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                        }`}
                        placeholder="Share any suggestions or comments you have"
                      />
                    </div>
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="agreeToPromotions"
                      checked={formData.agreeToPromotions}
                      onChange={handleAgreementChange}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className={`ml-2 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      I agree to receive promotional content via emails and SMS (extra charges by your email and SMS providers may apply).
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!formData.name || !formData.email || !formData.phone || isLoading}
                    className={`w-full py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 mt-6 ${
                      (!formData.name || !formData.email || !formData.phone || isLoading)
                        ? "bg-gray-400 text-gray-700 cursor-not-allowed"
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
                        {formData.appointmentDate ? "Submit & Schedule Demo" : "Request Early Access"}
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
