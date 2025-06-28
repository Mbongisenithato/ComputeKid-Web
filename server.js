const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// 🔐 Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Serves all frontend files

// 📡 Simulated cloud threat data source
const threatIntel = {
  "water-surveillance": "🛰️ Remote valve override detected in Eastern sector. Suspected MITM vector.",
  "water-contaminants": "☣️ Zone C shows synthetic chemical anomalies. AI signature flagged: HX-9b.",
  "water-response": "💧 Containment protocol dispatched. Clean reroute initiated to Line 12.",
  "ai-model-poisoning": "🤖 Adversarial payload attempt blocked in Model VaultVision. Source IP quarantined.",
  "scada-firewall": "🛠️ New exploit fingerprint discovered in Modbus protocol relay buffers (CVE pending)."
};

// 🎯 Button-based intel feed
app.get("/api/newsletter/threat-update", (req, res) => {
  const { topic } = req.query;
  const summary =
    threatIntel[topic] || `ℹ️ No active threat data available for: "${topic}"`;
  res.json({ topic, summary, timestamp: new Date().toISOString() });
});

// 🔍 Default route for quick test
app.get("/", (req, res) => {
  res.send("✅ VaultX backend is live. ThreatLens API is operational.");
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🧠 VaultX server running at: http://localhost:${PORT}`);
});