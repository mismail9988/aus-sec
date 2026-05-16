export default function AdminSettingsPage() {
  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-2xl font-black text-[#1a1a2e] uppercase mb-2">Settings</h1>
      <p className="text-gray-500 text-sm mb-8">Company settings and configuration.</p>
      <div className="bg-white border border-gray-200 p-8 space-y-6">
        {[
          { label: "Company Name", value: "Security Guard Company Melbourne" },
          { label: "Email", value: "info@securityguardcompanymelbourne.com" },
          { label: "Location", value: "Melbourne, Victoria, Australia" },
          { label: "Website", value: "securityguardcompanymelbourne.com" },
        ].map((f) => (
          <div key={f.label}>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">{f.label}</label>
            <input defaultValue={f.value} className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]" />
          </div>
        ))}
        <button className="bg-[#c8102e] text-white font-bold py-2.5 px-6 text-xs uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
          Save Settings
        </button>
      </div>
    </div>
  );
}
