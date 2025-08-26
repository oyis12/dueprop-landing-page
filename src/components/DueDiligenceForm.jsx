import { useState } from "react";

export default function DueDiligence() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  // Test Types Data
  const tests = {
    basic: {
      title: "Basic Due Diligence Test",
      points: [
        "The Location of the Property",
        "The title of the property and its nexus with the property at location",
      ],
      time: "Typically reports back in 3 days",
      note: "Report results on Company report sheet",
      formLink: "https://forms.gle/yourBasicFormLink", // Replace with real link
    },
    main: {
      title: "Main Due Diligence Test",
      points: [
        "The Location of the Property",
        "The Title of the property and the authenticity of the title",
        "The wellness, state, size details and features of the property",
      ],
      time: "Typically reports back in 3 days",
      note: "Report results on Company report sheet and attachments (e.g. FCDA endorsed report)",
      formLink: "https://forms.gle/yourMainFormLink", // Replace with real link
    },
    pro: {
      title: "Professional Due Diligence Test",
      points: [
        "The Location of the Property",
        "The Title of the property and the authenticity of the title",
        "The status and features of the property",
        "Check for Indebtedness, encumbrances, possible property history index, purpose and possible change or commitment",
      ],
      time: "Typically reports back in 1–2 weeks",
      note: "Report results on Company report sheet and attachments (Land Administrators office & Partnering Legal firm)",
      formLink: "https://forms.gle/yourProFormLink", // Replace with real link
    },
  };

  return (
    <>
      {/* ✅ Reusable Get Started button (put anywhere in your site) */}
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition"
      >
        Get Started
      </button>

      {/* ✅ Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Modal box */}
          <div className="bg-white w-full max-w-4xl rounded-2xl p-6 shadow-xl absolute">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => {
                setOpen(false);
                setSelected(null);
              }}
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">
              Choose a Due Diligence Test
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.keys(tests).map((key) => (
                <div
                  key={key}
                  onClick={() => setSelected(key)}
                  className={`border rounded-xl p-5 shadow cursor-pointer transition hover:shadow-lg ${
                    selected === key ? "border-green-600" : "border-gray-200"
                  }`}
                >
                  <h3 className="font-bold text-lg">
                    {tests[key].title.split(" ")[0]} Test
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{tests[key].time}</p>
                </div>
              ))}
            </div>

            {/* Selected Details */}
            {selected && (
              <div className="mt-8 border-t pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  {tests[selected].title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {tests[selected].points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <p className="mt-3 text-gray-600">{tests[selected].time}</p>
                <p className="text-sm text-gray-500 italic">
                  {tests[selected].note}
                </p>

                <button
                  onClick={() => window.open(tests[selected].formLink, "_blank")}
                  className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition"
                >
                  Start with this
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
