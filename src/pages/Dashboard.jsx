import { useState } from "react";
import AIAssistant from "../components/AIAssistant";

function Dashboard() {
  const [formData, setFormData] = useState({
    hcp_name: "",
    interaction_type: "Meeting",
    interaction_date: "",
    interaction_time: "",
    attendees: "",
    topics_discussed: "",
    materials_shared: "",
    samples_distributed: "",
    sentiment: "Neutral",
    outcome: "",
    follow_up: "",
  });

  return (
    <div className="min-h-screen bg-slate-100 p-2 md:p-6">
      <div className="max-w-5xl mx-auto flex justify-center">
        <AIAssistant setFormData={setFormData} />
      </div>
    </div>
  );
}

export default Dashboard;