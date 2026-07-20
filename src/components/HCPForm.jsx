

function HCPForm({ formData, setFormData }) {


const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const handleSubmit = (e) => {
    e.preventDefault();

   console.log(formData);

    alert("Interaction Saved Successfully");
  };

  return (

<form
onSubmit={handleSubmit}
className="space-y-6 max-h-[82vh] overflow-y-auto pr-2"
>

{/* ===================== */}
{/* Interaction Details */}
{/* ===================== */}

<div className="border rounded-xl p-5 bg-white shadow-sm">

<h2 className="text-xl font-bold mb-5">
Interaction Details
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

{/* HCP */}

<div>

<label className="block text-sm font-semibold mb-2">
HCP Name
</label>

<div className="flex gap-2">

<input
type="text"
name="hcp_name"
value={formData.hcp_name}
onChange={handleChange}
placeholder="Search or select HCP..."
className="w-full border rounded-md px-3 py-2"
/>

 

</div>

</div>

{/* Interaction */}

<div>

<label className="block text-sm font-semibold mb-2">
Interaction Type
</label>

<select
name="interaction_type"
value={formData.interaction_type}
onChange={handleChange}
className="w-full border rounded-lg px-3 py-2"
>

<option>Meeting</option>

<option>Call</option>

<option>Email</option>

<option>Conference</option>

<option>Webinar</option>

</select>

</div>

{/* Date */}

<div>

<label className="block text-sm font-semibold mb-2">
Date
</label>

<input
type="date"
name="interaction_date"
value={formData.interaction_date}
onChange={handleChange}
className="w-full border rounded-lg px-3 py-2"
/>

</div>

{/* Time */}

<div>

<label className="block text-sm font-semibold mb-2">
Time
</label>

<input
type="time"
name="interaction_time"
value={formData.interaction_time}
onChange={handleChange}
className="w-full border rounded-lg px-3 py-2"
/>

</div>

</div>

{/* Attendees */}

<div className="mt-5">

<label className="block text-sm font-semibold mb-2">
Attendees
</label>

<input
type="text"
name="attendees"
value={formData.attendees}
onChange={handleChange}
placeholder="Enter names or search..."
className="w-full border rounded-lg px-3 py-2"
/>

</div>

{/* Topics */}

<div className="mt-5">

<label className="block text-sm font-semibold mb-2">
Topics Discussed
</label>

<textarea
rows="4"
name="topics_discussed"
value={formData.topics_discussed}
onChange={handleChange}
placeholder="Enter key discussion points..."
className="w-full border rounded-lg px-3 py-2"
/>

</div>

{/* Voice */}

<div className="mt-4">

<button
type="button"
className="text-blue-600 text-sm font-semibold hover:underline"
>

🎤 Summarize from Voice Note (Requires Consent)

</button>

</div>

</div>

{/* =========================== */}
{/* Materials Shared */}
{/* =========================== */}

<div className="border rounded-xl p-5 bg-white shadow-sm">

  <h2 className="text-lg font-bold mb-4">
    Materials Shared / Samples Distributed
  </h2>

  <div className="space-y-5">

    {/* Materials */}

    <div>

      <label className="block font-semibold mb-2">
        Materials Shared
      </label>

      <div className="flex gap-2">

        <input
          type="text"
          name="materials_shared"
          value={formData.materials_shared}
          onChange={handleChange}
          placeholder="No materials added..."
          className="flex-1 border rounded-lg px-3 py-2"
        />

        <button
          type="button"
          className="border px-4 py-2 rounded-md bg-white hover:bg-blue-100 text-gray-700"
        >
          🔍 Search / Add
        </button>

      </div>

    </div>

    {/* Samples */}

    <div>

      <label className="block font-semibold mb-2">
        Samples Distributed
      </label>

      <div className="flex gap-2">

        <input
          type="text"
          name="samples_distributed"
          value={formData.samples_distributed}
          onChange={handleChange}
          placeholder="No samples added..."
          className="flex-1 border rounded-lg px-3 py-2"
        />

        <button
          type="button"
          className="border px-4 py-2 rounded-md bg-white hover:bg-blue-100 text-gray-700"
        >
          + Add Sample
        </button>

      </div>

    </div>

  </div>

</div>

{/* =========================== */}
{/* Sentiment */}
{/* =========================== */}

<div className="border rounded-xl p-5 bg-white shadow-sm">

<h2 className="text-lg font-bold mb-4">
Observed / Inferred HCP Sentiment
</h2>

<div className="flex flex-wrap gap-8">

<label className="flex items-center gap-2">

<input
type="radio"
name="sentiment"
value="Positive"
checked={formData.sentiment==="Positive"}
onChange={handleChange}
/>

😊 Positive

</label>

<label className="flex items-center gap-2">

<input
type="radio"
name="sentiment"
value="Neutral"
checked={formData.sentiment==="Neutral"}
onChange={handleChange}
/>

😐 Neutral

</label>

<label className="flex items-center gap-2">

<input
type="radio"
name="sentiment"
value="Negative"
checked={formData.sentiment==="Negative"}
onChange={handleChange}
/>

☹️ Negative

</label>

</div>

</div>

{/* =========================== */}
{/* Outcome */}
{/* =========================== */}

<div>

<label className="block font-semibold mb-2">
Outcomes
</label>

<textarea
rows="3"
name="outcome"
value={formData.outcome}
onChange={handleChange}
placeholder="Key outcomes or agreements..."
className="w-full border rounded-lg px-3 py-2"
/>

</div>

{/* =========================== */}
{/* Follow-up */}
{/* =========================== */}

<div>

<label className="block font-semibold mb-2">
Follow-up Actions
</label>

<textarea
rows="3"
name="follow_up"
value={formData.follow_up}
onChange={handleChange}
placeholder="Enter next steps..."
className="w-full border rounded-lg px-3 py-2"
/>

</div>

{/* =========================== */}
{/* AI Suggestions */}
{/* =========================== */}

<div className="bg-green-50 border border-green-200 rounded-xl p-5">

<h3 className="font-bold text-green-700 mb-3">

🤖 AI Suggested Follow-ups

</h3>

<ul className="text-sm text-gray-700 space-y-2">

<li>• Schedule follow-up meeting in 2 weeks</li>

<li>• Share Product Brochure PDF</li>

<li>• Invite HCP to upcoming Webinar</li>

</ul>

</div>

<div className="pt-4">

 

</div>

</form>
);
}

export default HCPForm;