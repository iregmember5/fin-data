import React from "react";

interface DeliverProps {
  isDark: boolean;
}

const Deliver: React.FC<DeliverProps> = ({ isDark }) => {
  return (
    <section
      className={`rounded-2xl border p-8 shadow-lg relative max-w-5xl mx-auto my-10 ${
        isDark ? "border-white/10 bg-white/5" : "border-gray-200 bg-gray-50"
      }`}
    >
      <h3 className="text-xl font-semibold">Deliver</h3>
      <p className="mt-2 text-sm leading-6 text-white/70">
        Streamlined Tax Document Delivery with TaxPilot. Deliver returns in
        minutes, not days.
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        <li>✅ Collect Payment Before Delivery</li>
        <li>✅ Automated Reminders for clients</li>
        <li>✅ Smart E-Signature Placement</li>
        <li>✅ Instant Client Portal Uploads</li>
        <li>✅ Paperless & Efficient</li>
      </ul>
      <p className="mt-4 text-cyan-400 font-medium">
        ➡️ Automate delivery from payment to e-signature — fast, secure, and
        client-friendly.
      </p>
    </section>
  );
};

export default Deliver;
