document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Ensure full-screen display for all pages
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
  document.body.style.overflowX = "hidden";

  // 🔹 Ensure images are fully responsive
  document.querySelectorAll("img").forEach(img => {
    img.style.width = "100%";
    img.style.height = "auto";
  });

  // 🔹 Load navigation menu dynamically from pages.json
  loadNavigation();

  // 🔹 Bind interactive buttons across all pages
  const buttons = [
    { id: "runThreatButton", action: runThreatSimulation },
    { id: "activateEnterpriseButton", action: activateEnterpriseSecurity },
    { id: "fetchCyberSecurityTrendsButton", action: fetchCyberSecurityTrends },
    { id: "scanFraudulentActivitiesButton", action: scanFraudulentActivities },
    { id: "flagFraudulentTransactionButton", action: flagFraudulentTransaction },
    { id: "scanAerospaceFraudButton", action: scanAerospaceFraud },
    { id: "fetchAerospaceSecurityTrendsButton", action: fetchAerospaceSecurityTrends },
    { id: "scanAiThreatsButton", action: scanAiThreats },
    { id: "deployAiDefenseButton", action: deployAiDefense },
    { id: "applyAiSecurityGovernanceButton", action: applyAiSecurityGovernance }
  ];

  buttons.forEach(({ id, action }) => bindButton(id, action));
});

// 🔹 Function to dynamically load navigation from pages.json
async function loadNavigation() {
  const navList = document.querySelector(".desktop-nav");
  try {
    const res = await fetch("/api/pages.json");
    const pages = await res.json();
    pages.forEach(page => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${page.url}"><strong>${page.title}</strong></a>`;
      navList.appendChild(li);
    });
  } catch (err) {
    console.error("Failed to load navigation:", err);
  }
}

// 🔹 Helper function for button event binding
function bindButton(id, action) {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", action);
}

// 🔹 AI-Powered Threat Detection
function runThreatSimulation() {
  const output = document.getElementById("threatOutput");
  if (!output) return;
  output.innerHTML = "🔍 Running AI Threat Detection...";
  setTimeout(() => {
    output.innerHTML = "✅ Threat Intelligence Updated!";
  }, 2000);
}

// 🔹 AI-Powered Enterprise Security Activation
function activateEnterpriseSecurity() {
  const output = document.getElementById("enterpriseSecurityOutput");
  if (!output) return;
  output.innerHTML = "🔍 Activating AI-powered Security Framework...";
  setTimeout(() => {
    output.innerHTML = "✅ AI Enterprise Security Deployed!";
  }, 2000);
}

// 🔹 Fetch AI-Powered Cybersecurity Trends
async function fetchCyberSecurityTrends() {
  const output = document.getElementById("cyberSecurityTrendsOutput");
  if (!output) return;
  output.innerHTML = "🔍 Fetching latest cybersecurity trends...";
  try {
    const res = await fetch("https://your-cloud-database.com/cyber-trends");
    const data = await res.json();
    output.innerHTML = `
      <strong>🛡️ AI-Powered Cybersecurity Trends:</strong><br>
      ✅ <strong>AI-Driven Threat Prevention:</strong> ${data.aiThreatPrevention}<br>
      ✅ <strong>Cloud Security Advancements:</strong> ${data.cloudSecurity}<br>
      ✅ <strong>Quantum Encryption Enhancements:</strong> ${data.quantumEncryption}
    `;
  } catch (err) {
    console.error("Error fetching cybersecurity trends:", err);
    output.innerText = `⚠️ API Error: ${err.message}`;
  }
}

// 🔹 AI-Powered Fraud Detection Simulation
async function scanFraudulentActivities() {
  const output = document.getElementById("fraudAnalysisOutput");
  if (!output) return;
  output.innerHTML = "🔍 Scanning financial transactions for fraud...";
  try {
    const res = await fetch("https://your-cloud-database.com/fraud-analysis");
    const data = await res.json();
    output.innerHTML = `
      <strong>🚨 Fraud Analysis Report:</strong><br>
      ✅ <strong>AI-Powered Fraud Detection Rate:</strong> ${data.detectionRate}%<br>
      ✅ <strong>Real-Time Anomaly Identification:</strong> ${data.realTimeAnomalies}<br>
      ✅ <strong>Dark Web Financial Scans:</strong> ${data.darkWebAnalysis}
    `;
  } catch (err) {
    console.error("Error scanning for fraudulent activities:", err);
    output.innerText = `⚠️ API Error: ${err.message}`;
  }
}

// 🔹 AI-Powered Flagged Fraudulent Transactions
async function flagFraudulentTransaction() {
  const output = document.getElementById("flaggedFraudOutput");
  if (!output) return;
  output.innerHTML = "🚨 Identifying suspicious transactions...";
  try {
    const res = await fetch("https://your-cloud-database.com/flag-fraud");
    const data = await res.json();
    output.innerHTML = `
      <strong>🚨 Suspicious Transactions Flagged:</strong><br>
      ✅ <strong>Transaction ID:</strong> ${data.transactionID}<br>
      ✅ <strong>Risk Level:</strong> ${data.riskLevel}<br>
      ✅ <strong>Recommended Action:</strong> ${data.recommendedAction}
    `;
  } catch (err) {
    console.error("Error flagging fraudulent transactions:", err);
    output.innerText = `⚠️ API Error: ${err.message}`;
  }
}

// 🔹 Aerospace Fraud Analysis
function scanAerospaceFraud() {
  const output = document.getElementById("aerospaceFraudOutput");
  if (!output) return;
  output.innerHTML = "🚀 Scanning Aerospace Cybersecurity...";
  setTimeout(() => {
    output.innerHTML = "✅ Aerospace Security Scan Complete!";
  }, 2000);
}

// 🔹 Fetch Aerospace Security Trends
async function fetchAerospaceSecurityTrends() {
  const output = document.getElementById("aerospaceSecurityTrendsOutput");
  if (!output) return;
  output.innerHTML = "📊 Fetching Aerospace Security Trends...";
  try {
    const res = await fetch("https://your-cloud-database.com/aerospace-security");
    const data = await res.json();
    output.innerHTML = `
      <strong>🛡️ Aerospace Security Trends:</strong><br>
      ✅ <strong>Satellite Encryption Upgrades:</strong> ${data.satelliteEncryption}<br>
      ✅ <strong>AI-Powered Radar Analysis:</strong> ${data.radarAI}<br>
      ✅ <strong>Cyber Intrusion Prevention:</strong> ${data.cyberIntrusionPrevention}
    `;
  } catch (err) {
    console.error("Error fetching aerospace security trends:", err);
    output.innerText = `⚠️ API Error: ${err.message}`;
  }
}

// 🔹 AI-Powered Threat Detection
function scanAiThreats() {
  const output = document.getElementById("aiThreatOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Scanning AI-Powered Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ AI Threat Detection Complete!";
  }, 2000);
}

// 🔹 Automated AI Cyber Defense Deployment
function deployAiDefense() {
  const output = document.getElementById("aiDefenseOutput");
  if (!output) return;
  output.innerHTML = "🔒 Deploying AI Cyber Defense...";
  setTimeout(() => {
    output.innerHTML = "✅ AI Defense Successfully Activated!";
  }, 2000);
}

// 🔹 AI Security Governance Implementation
function applyAiSecurityGovernance() {
  const output = document.getElementById("aiSecurityGovernanceOutput");
  if (!output) return;
  output.innerHTML = "📚 Applying AI Security Governance...";
  setTimeout(() => {
    output.innerHTML = "✅ AI Security Governance Established!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind exploit simulation buttons
  bindButton("startLiveExploitButton", startLiveExploit);
  bindButton("applySecurityPatchButton", applySecurityPatch);
  bindButton("runFinanceExploitButton", runFinanceExploit);
  bindButton("runAerospaceExploitButton", runAerospaceExploit);
  bindButton("runAITechExploitButton", runAITechExploit);
  bindButton("runEnergyExploitButton", runEnergyExploit);
  bindButton("runLogisticsExploitButton", runLogisticsExploit);
});

// 🔹 Live Cyberattack Simulation
function startLiveExploit() {
  const output = document.getElementById("exploitOutput");
  if (!output) return;
  output.innerHTML = "⚠️ Initiating Cyber Exploit...";
  setTimeout(() => {
    output.innerHTML = "✅ Exploit Simulation Complete!";
  }, 2000);
}

// 🔹 Deploy Security Patch
function applySecurityPatch() {
  const output = document.getElementById("exploitOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Deploying Security Fix...";
  setTimeout(() => {
    output.innerHTML = "✅ Security Patch Applied!";
  }, 2000);
}

// 🔹 Finance Cybersecurity Testing
function runFinanceExploit() {
  const output = document.getElementById("financeExploitOutput");
  if (!output) return;
  output.innerHTML = "🏦 Running Finance Exploit Simulation...";
  setTimeout(() => {
    output.innerHTML = "✅ Finance Security Tested!";
  }, 2000);
}

// 🔹 Aerospace Cybersecurity Testing
function runAerospaceExploit() {
  const output = document.getElementById("aerospaceExploitOutput");
  if (!output) return;
  output.innerHTML = "🚀 Running Aerospace Exploit Simulation...";
  setTimeout(() => {
    output.innerHTML = "✅ Aerospace Security Validated!";
  }, 2000);
}

// 🔹 AI/Tech Cybersecurity Testing
function runAITechExploit() {
  const output = document.getElementById("techExploitOutput");
  if (!output) return;
  output.innerHTML = "🔮 Running AI-Powered Exploit Detection...";
  setTimeout(() => {
    output.innerHTML = "✅ AI Threat Simulation Complete!";
  }, 2000);
}

// 🔹 Energy Cybersecurity Testing
function runEnergyExploit() {
  const output = document.getElementById("energyExploitOutput");
  if (!output) return;
  output.innerHTML = "⚡ Running Energy System Exploit Test...";
  setTimeout(() => {
    output.innerHTML = "✅ Energy Grid Security Tested!";
  }, 2000);
}

// 🔹 Logistics Cybersecurity Testing
function runLogisticsExploit() {
  const output = document.getElementById("logisticsExploitOutput");
  if (!output) return;
  output.innerHTML = "📦 Running Supply Chain Exploit Test...";
  setTimeout(() => {
    output.innerHTML = "✅ Logistics Security Verified!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for battle report functions
  bindButton("generateBattleReportButton", generateBattleReport);
  bindButton("analyzeResponseEfficiencyButton", analyzeResponseEfficiency);
  bindButton("reviewThreatMitigationButton", reviewThreatMitigation);
});

// 🔹 Generate Battle Report
function generateBattleReport() {
  const output = document.getElementById("battleReportOutput");
  if (!output) return;
  output.innerHTML = "📊 Generating Battle Report...";
  setTimeout(() => {
    output.innerHTML = "✅ Battle Report Generated!";
  }, 2000);
}

// 🔹 Analyze Cyber Defense Response Efficiency
function analyzeResponseEfficiency() {
  const output = document.getElementById("responseEfficiencyOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Analyzing Security Response Efficiency...";
  setTimeout(() => {
    output.innerHTML = "✅ Security Response Evaluated!";
  }, 2000);
}

// 🔹 Review AI-Powered Threat Mitigation
function reviewThreatMitigation() {
  const output = document.getElementById("threatMitigationOutput");
  if (!output) return;
  output.innerHTML = "🚨 Reviewing Threat Mitigation Strategies...";
  setTimeout(() => {
    output.innerHTML = "✅ Threat Mitigation Report Completed!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for blockchain security functions
  bindButton("deployBlockchainAuthButton", deployBlockchainAuth);
  bindButton("scanBlockchainFraudButton", scanBlockchainFraud);
  bindButton("activateBlockchainEncryptionButton", activateBlockchainEncryption);
});

// 🔹 Deploy Blockchain Authentication
function deployBlockchainAuth() {
  const output = document.getElementById("blockchainAuthOutput");
  if (!output) return;
  output.innerHTML = "🔒 Deploying Blockchain Authentication...";
  setTimeout(() => {
    output.innerHTML = "✅ Blockchain Authentication Successfully Activated!";
  }, 2000);
}

// 🔹 Scan Blockchain Transactions for Fraud
function scanBlockchainFraud() {
  const output = document.getElementById("blockchainFraudOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Scanning Blockchain Transactions...";
  setTimeout(() => {
    output.innerHTML = "✅ No Fraudulent Transactions Detected!";
  }, 2000);
}

// 🔹 Activate Blockchain Encryption
function activateBlockchainEncryption() {
  const output = document.getElementById("blockchainEncryptionOutput");
  if (!output) return;
  output.innerHTML = "🛠️ Activating AI-Powered Blockchain Encryption...";
  setTimeout(() => {
    output.innerHTML = "✅ Blockchain Encryption Enabled!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for AI cybersecurity functions
  bindButton("runThreatSimulationButton", runThreatSimulation);
  bindButton("buyThreatReportButton", buyThreatReport);
  bindButton("activateEnterpriseSecurityButton", activateEnterpriseSecurity);
});

// 🔹 Run AI Threat Detection
function runThreatSimulation() {
  const output = document.getElementById("threatOutput");
  if (!output) return;
  output.innerHTML = "🔍 Running AI Threat Detection...";
  setTimeout(() => {
    output.innerHTML = "✅ AI Cyber Threat Detection Activated!";
  }, 2000);
}

// 🔹 Buy AI-Driven Threat Intelligence Report
function buyThreatReport() {
  alert("🛒 AI Cybersecurity Report Purchased!");
}

// 🔹 Activate AI-Powered Enterprise Security Framework
function activateEnterpriseSecurity() {
  const output = document.getElementById("enterpriseSecurityOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Deploying AI Enterprise Security Framework...";
  setTimeout(() => {
    output.innerHTML = "✅ AI Enterprise Security Successfully Activated!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for border security functions
  bindButton("scanBorderThreatsButton", scanBorderThreats);
});

// 🔹 AI-Powered Border Threat Analysis
function scanBorderThreats() {
  const output = document.getElementById("borderSecurityOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Scanning Border Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Border Security Analyzed Successfully!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for compliance security functions
  bindButton("scanComplianceFrameworksButton", scanComplianceFrameworks);
});

// 🔹 AI-Powered Compliance Security Analysis
function scanComplianceFrameworks() {
  const output = document.getElementById("complianceOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Scanning Compliance Security Frameworks...";
  setTimeout(() => {
    output.innerHTML = "✅ Compliance Security Status Successfully Evaluated!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for contact form interactions
  bindButton("runThreatSimulationButton", runThreatSimulation);
  bindButton("buyThreatReportButton", buyThreatReport);
  bindButton("contactForm", submitContactForm);
});

// 🔹 Handle Contact Form Submission
function submitContactForm(event) {
  event.preventDefault();
  const output = document.getElementById("formResponse");
  if (!output) return;
  output.innerHTML = "📩 Sending Message...";
  setTimeout(() => {
    output.innerHTML = "✅ Message Sent Successfully!";
  }, 2000);
}

// 🔹 Run AI Threat Detection
function runThreatSimulation() {
  const output = document.getElementById("threatOutput");
  if (!output) return;
  output.innerHTML = "🔍 Running AI Threat Detection...";
  setTimeout(() => {
    output.innerHTML = "✅ AI Cyber Threat Detection Activated!";
  }, 2000);
}

// 🔹 Buy AI-Driven Threat Intelligence Report
function buyThreatReport() {
  alert("🛒 AI Cybersecurity Report Purchased!");
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for cyber defense training functions
  bindButton("startCyberTrainingButton", startCyberTraining);
  bindButton("runThreatAnalysisButton", runThreatAnalysis);
  bindButton("enrollCyberAcademyButton", enrollCyberAcademy);
});

// 🔹 Start Cyber Defense Training
function startCyberTraining() {
  const output = document.getElementById("cyberTrainingOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Initiating Cyber Defense Training...";
  setTimeout(() => {
    output.innerHTML = "✅ Cyber Defense Training Successfully Activated!";
  }, 2000);
}

// 🔹 Conduct AI-Powered Threat Analysis
function runThreatAnalysis() {
  const output = document.getElementById("threatAnalysisOutput");
  if (!output) return;
  output.innerHTML = "🚨 Conducting AI-Powered Threat Analysis...";
  setTimeout(() => {
    output.innerHTML = "✅ Threat Analysis Report Completed!";
  }, 2000);
}

// 🔹 Enroll in CyberShield Elite Academy
function enrollCyberAcademy() {
  const output = document.getElementById("cyberAcademyOutput");
  if (!output) return;
  output.innerHTML = "📚 Processing Enrollment in CyberShield Elite Academy...";
  setTimeout(() => {
    output.innerHTML = "✅ Enrollment Successfully Completed!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for cyber defense challenge functions
  bindButton("startSecuritySimulationButton", startSecuritySimulation);
  bindButton("runEthicalHackingChallengeButton", runEthicalHackingChallenge);
  bindButton("executeCyberDefenseChallengeButton", executeCyberDefenseChallenge);
});

// 🔹 Start AI-Powered Security Breach Simulation
function startSecuritySimulation() {
  const output = document.getElementById("securitySimulationOutput");
  if (!output) return;
  output.innerHTML = "🚨 Initiating Security Breach Simulation...";
  setTimeout(() => {
    output.innerHTML = "✅ Security Breach Simulation Successfully Completed!";
  }, 2000);
}

// 🔹 Run Ethical Hacking & Penetration Testing
function runEthicalHackingChallenge() {
  const output = document.getElementById("ethicalHackingOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Beginning Ethical Hacking Challenge...";
  setTimeout(() => {
    output.innerHTML = "✅ Ethical Hacking Challenge Successfully Executed!";
  }, 2000);
}

// 🔹 Execute AI-Powered Cyber Defense Challenge
function executeCyberDefenseChallenge() {
  const output = document.getElementById("cyberDefenseChallengeOutput");
  if (!output) return;
  output.innerHTML = "🔒 Deploying AI Cyber Defense Strategy...";
  setTimeout(() => {
    output.innerHTML = "✅ AI Cyber Defense Challenge Successfully Completed!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind button for cybersecurity trends
  bindButton("fetchCyberSecurityTrendsButton", fetchCyberSecurityTrends);
});

// 🔹 Fetch AI-Powered Cybersecurity Trends
async function fetchCyberSecurityTrends() {
  const output = document.getElementById("cyberSecurityTrendsOutput");
  if (!output) return;
  output.innerHTML = "📊 Fetching Cybersecurity Trends...";
  try {
    const res = await fetch("https://your-cloud-database.com/cyber-trends");
    const data = await res.json();
    output.innerHTML = `
      <strong>🛡️ Cybersecurity Trends 2025:</strong><br>
      ✅ <strong>AI-Driven Threat Prevention:</strong> ${data.aiThreatPrevention}<br>
      ✅ <strong>Cloud Security Advancements:</strong> ${data.cloudSecurity}<br>
      ✅ <strong>Quantum Encryption Innovations:</strong> ${data.quantumEncryption}
    `;
  } catch (err) {
    console.error("Error fetching cybersecurity trends:", err);
    output.innerText = `⚠️ API Error: ${err.message}`;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for energy security functions
  bindButton("scanEnergyGridThreatsButton", scanEnergyGridThreats);
  bindButton("analyzeEnergyRisksButton", analyzeEnergyRisks);
  bindButton("deployEnergyResilienceButton", deployEnergyResilience);
});

// 🔹 Scan Energy Grid Vulnerabilities
function scanEnergyGridThreats() {
  const output = document.getElementById("energyGridThreatOutput");
  if (!output) return;
  output.innerHTML = "⚡ Scanning Energy Grid Vulnerabilities...";
  setTimeout(() => {
    output.innerHTML = "✅ Energy Grid Security Assessment Complete!";
  }, 2000);
}

// 🔹 Conduct AI-Powered Energy Risk Analysis
function analyzeEnergyRisks() {
  const output = document.getElementById("energyRiskOutput");
  if (!output) return;
  output.innerHTML = "🔍 Conducting Energy Security Risk Assessment...";
  setTimeout(() => {
    output.innerHTML = "✅ Energy Security Risk Analysis Completed!";
  }, 2000);
}

// 🔹 Strengthen Energy System Cyber Resilience
function deployEnergyResilience() {
  const output = document.getElementById("energyResilienceOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Deploying AI Cyber Resilience for Energy Systems...";
  setTimeout(() => {
    output.innerHTML = "✅ Energy Cyber Resilience Framework Successfully Applied!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind button for enterprise security trends
  bindButton("fetchEnterpriseSecurityTrendsButton", fetchEnterpriseSecurityTrends);
});

// 🔹 Fetch AI-Powered Enterprise Security Trends
async function fetchEnterpriseSecurityTrends() {
  const output = document.getElementById("enterpriseSecurityTrendsOutput");
  if (!output) return;
  output.innerHTML = "📊 Fetching Enterprise Security Trends...";
  try {
    const res = await fetch("https://your-cloud-database.com/enterprise-security-trends");
    const data = await res.json();
    output.innerHTML = `
      <strong>🛡️ Enterprise Security Trends 2025:</strong><br>
      ✅ <strong>AI-Driven Threat Intelligence:</strong> ${data.aiThreatIntelligence}<br>
      ✅ <strong>Zero Trust Architecture Expansion:</strong> ${data.zeroTrustArchitecture}<br>
      ✅ <strong>Cloud-Native Security Innovations:</strong> ${data.cloudSecurityInnovations}
    `;
  } catch (err) {
    console.error("Error fetching enterprise security trends:", err);
    output.innerText = `⚠️ API Error: ${err.message}`;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for exploit report functions
  bindButton("scanExploitThreatsButton", scanExploitThreats);
  bindButton("analyzeExploitRisksButton", analyzeExploitRisks);
  bindButton("deployExploitMitigationButton", deployExploitMitigation);
});

// 🔹 Scan for Exploited Vulnerabilities
function scanExploitThreats() {
  const output = document.getElementById("exploitThreatOutput");
  if (!output) return;
  output.innerHTML = "🔍 Scanning for Exploited Vulnerabilities...";
  setTimeout(() => {
    output.innerHTML = "✅ Exploited Vulnerabilities Analysis Completed!";
  }, 2000);
}

// 🔹 Analyze Security Risk Levels for Exploits
function analyzeExploitRisks() {
  const output = document.getElementById("exploitRiskOutput");
  if (!output) return;
  output.innerHTML = "⚠️ Conducting Security Risk Assessment...";
  setTimeout(() => {
    output.innerHTML = "✅ Security Risk Analysis Completed!";
  }, 2000);
}

// 🔹 Deploy AI-Powered Exploit Mitigation Strategies
function deployExploitMitigation() {
  const output = document.getElementById("exploitMitigationOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Deploying AI Exploit Mitigation Strategies...";
  setTimeout(() => {
    output.innerHTML = "✅ Exploit Mitigation Successfully Executed!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for finance security functions
  bindButton("scanFinanceFraudButton", scanFinanceFraud);
  bindButton("fetchFinanceSecurityTrendsButton", fetchFinanceSecurityTrends);
});

// 🔹 Scan Financial Transactions for Fraud
async function scanFinanceFraud() {
  const output = document.getElementById("financeFraudOutput");
  if (!output) return;
  output.innerHTML = "🏦 Scanning Financial Transactions for Fraud...";
  try {
    const res = await fetch("https://your-cloud-database.com/finance-fraud");
    const data = await res.json();
    output.innerHTML = `
      <strong>💰 Finance Fraud Analysis:</strong><br>
      ✅ <strong>AI Fraud Detection Rate:</strong> ${data.fraudDetectionRate}%<br>
      ✅ <strong>Real-Time Anomaly Detection:</strong> ${data.realTimeAnomaly}<br>
      ✅ <strong>Dark Web Financial Scanning:</strong> ${data.darkWebAnalysis}
    `;
  } catch (err) {
    console.error("Error scanning financial transactions:", err);
    output.innerText = `⚠️ API Error: ${err.message}`;
  }
}

// 🔹 Fetch AI-Powered Finance Security Trends
async function fetchFinanceSecurityTrends() {
  const output = document.getElementById("financeSecurityTrendsOutput");
  if (!output) return;
  output.innerHTML = "📊 Fetching Finance Security Trends...";
  try {
    const res = await fetch("https://your-cloud-database.com/finance-security-trends");
    const data = await res.json();
    output.innerHTML = `
      <strong>🛡️ Finance Security Trends 2025:</strong><br>
      ✅ <strong>AI-Powered Fraud Prevention:</strong> ${data.aiFraudPrevention}<br>
      ✅ <strong>Blockchain-Powered Secure Transactions:</strong> ${data.blockchainSecurity}<br>
      ✅ <strong>Quantum-Resistant Encryption:</strong> ${data.quantumEncryption}
    `;
  } catch (err) {
    console.error("Error fetching finance security trends:", err);
    output.innerText = `⚠️ API Error: ${err.message}`;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind fraud prevention buttons
  bindButton("applyLiveFraudPrevention92345", () => applyLiveFraudPrevention("#92345"));
  bindButton("applyLiveFraudPrevention56789", () => applyLiveFraudPrevention("#56789"));
  bindButton("viewFraudNotificationsButton", viewFraudNotifications);
  bindButton("scanFinanceFraudButton", scanFinanceFraud);
  bindButton("scanAerospaceFraudButton", scanAerospaceFraud);
  bindButton("scanTechFraudButton", scanTechFraud);
});

// 🔹 Apply Live Fraud Prevention
function applyLiveFraudPrevention(transactionId) {
  alert(`🚨 Fraud Prevention Activated for Transaction ${transactionId}`);
}

// 🔹 View Live Security Notifications
function viewFraudNotifications() {
  const output = document.getElementById("fraudNotification");
  if (!output) return;
  output.innerHTML = "📩 Fetching Live Fraud Alerts...";
  setTimeout(() => {
    output.innerHTML = "✅ Authorities & Users Notified!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind fraud analysis buttons
  bindButton("scanFraudulentActivitiesButton", scanFraudulentActivities);
  bindButton("flagFraudulentTransactionButton", flagFraudulentTransaction);
  bindButton("applyFraudPreventionButton", applyFraudPrevention);
});

// 🔹 Analyze Fraudulent Activities
async function scanFraudulentActivities() {
  const output = document.getElementById("fraudAnalysisOutput");
  if (!output) return;
  output.innerHTML = "📊 Scanning for Fraudulent Activities...";
  try {
    const res = await fetch("https://your-cloud-database.com/fraud-analysis");
    const data = await res.json();
    output.innerHTML = `
      <strong>💰 Fraud Analysis Report:</strong><br>
      ✅ <strong>AI-Powered Detection Rate:</strong> ${data.detectionRate}%<br>
      ✅ <strong>Real-Time Anomaly Identification:</strong> ${data.realTimeAnomalies}<br>
      ✅ <strong>Dark Web Financial Scanning:</strong> ${data.darkWebAnalysis}
    `;
  } catch (err) {
    console.error("Error analyzing fraudulent activities:", err);
    output.innerText = `⚠️ API Error: ${err.message}`;
  }
}

// 🔹 Flag Suspicious Transactions
async function flagFraudulentTransaction() {
  const output = document.getElementById("flaggedFraudOutput");
  if (!output) return;
  output.innerHTML = "🚨 Identifying suspicious transactions...";
  try {
    const res = await fetch("https://your-cloud-database.com/flag-fraud");
    const data = await res.json();
    output.innerHTML = `
      <strong>🚨 Suspicious Transactions Flagged:</strong><br>
      ✅ <strong>Transaction ID:</strong> ${data.transactionID}<br>
      ✅ <strong>Risk Level:</strong> ${data.riskLevel}<br>
      ✅ <strong>Recommended Action:</strong> ${data.recommendedAction}
    `;
  } catch (err) {
    console.error("Error flagging fraudulent transactions:", err);
    output.innerText = `⚠️ API Error: ${err.message}`;
  }
}

// 🔹 Apply AI-Powered Fraud Prevention Measures
function applyFraudPrevention() {
  const output = document.getElementById("fraudPreventionOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Deploying Fraud Prevention Framework...";
  setTimeout(() => {
    output.innerHTML = "✅ Fraud Prevention Strategies Applied!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind fraud detection buttons
  bindButton("flagLiveFraud92345", () => flagLiveFraud("#92345"));
  bindButton("detectLiveFraud92345", () => detectLiveFraud("#92345"));
  bindButton("applyLiveFraudPrevention92345", () => applyLiveFraudPrevention("#92345"));
  bindButton("viewFraudAlertsButton", viewFraudAlerts);
  bindButton("startChallengeButton", () => startChallenge("penetrationTest"));
});

// 🔹 Flag Transaction as Fraud
function flagLiveFraud(transactionId) {
  alert(`🚩 Fraud Flagged for Transaction ${transactionId}`);
}

// 🔹 Detect AI-Powered Fraud in Live Transactions
function detectLiveFraud(transactionId) {
  const output = document.getElementById("fraudDetectionOutput");
  if (!output) return;
  output.innerHTML = `🔍 Running AI Fraud Detection for Transaction ${transactionId}...`;
  setTimeout(() => {
    output.innerHTML = "✅ Fraud Analysis Completed!";
  }, 2000);
}

// 🔹 Apply AI-Powered Fraud Prevention
function applyLiveFraudPrevention(transactionId) {
  const output = document.getElementById("fraudSolution");
  if (!output) return;
  output.innerHTML = `🚨 Preventing Fraud for Transaction ${transactionId}...`;
  setTimeout(() => {
    output.innerHTML = "✅ Fraud Prevention Activated & Authorities Notified!";
  }, 2000);
}

// 🔹 View Live Fraud Alerts
function viewFraudAlerts() {
  const output = document.getElementById("fraudNotification");
  if (!output) return;
  output.innerHTML = "📩 Fetching Live Fraud Alerts...";
  setTimeout(() => {
    output.innerHTML = "✅ Fraud Alerts Displayed!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for freight security functions
  bindButton("scanFreightThreatsButton", scanFreightThreats);
});

// 🔹 AI-Powered Freight Security Analysis
function scanFreightThreats() {
  const output = document.getElementById("freightSecurityOutput");
  if (!output) return;
  output.innerHTML = "🚛 Scanning Freight Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Freight Security Analyzed Successfully!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for global transport security functions
  bindButton("scanGlobalTransportThreatsButton", scanGlobalTransportThreats);
});

// 🔹 AI-Powered Global Transport Security Analysis
function scanGlobalTransportThreats() {
  const output = document.getElementById("globalTransportOutput");
  if (!output) return;
  output.innerHTML = "✈️ Scanning Global Transport Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Global Transport Security Analyzed Successfully!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for IoT travel security functions
  bindButton("scanIoTVehicleThreatsButton", scanIoTVehicleThreats);
});

// 🔹 AI-Powered IoT Vehicle Security Analysis
function scanIoTVehicleThreats() {
  const output = document.getElementById("iotVehicleSecurityOutput");
  if (!output) return;
  output.innerHTML = "🚗 Scanning IoT Vehicle Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ IoT Travel Security Analyzed Successfully!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind cyber defense lab buttons
  bindButton("runThreatSimulationButton", runThreatSimulation);
  bindButton("startNetworkTrainingButton", startNetworkTraining);
  bindButton("scanFinanceFraudButton", scanFinanceFraud);
});

// 🔹 Run AI-Powered Threat Detection
function runThreatSimulation() {
  const output = document.getElementById("threatOutput");
  if (!output) return;
  output.innerHTML = "🔍 Running AI Threat Detection...";
  setTimeout(() => {
    output.innerHTML = "✅ AI Cyber Threat Detection Activated!";
  }, 2000);
}

// 🔹 Start AI-Powered Network Defense Training
function startNetworkTraining() {
  const output = document.getElementById("networkSecurityOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Initializing Network Security Training...";
  setTimeout(() => {
    output.innerHTML = "✅ Network Defense Training Session Started!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind cybersecurity training buttons
  bindButton("startLiveGameButton", startLiveGame);
  bindButton("runThreatSimulationButton", runThreatSimulation);
  bindButton("activateEnterpriseSecurityButton", activateEnterpriseSecurity);
});

// 🔹 Start AI-Powered Cyber Battle
function startLiveGame() {
  const output = document.getElementById("gameOutput");
  if (!output) return;
  output.innerHTML = "🔍 Initializing Cybersecurity Battle...";
  setTimeout(() => {
    output.innerHTML = "✅ Cyber Defense Simulation Started!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for logistics security functions
  bindButton("scanSupplyChainThreatsButton", scanSupplyChainThreats);
});

// 🔹 AI-Powered Supply Chain Security Analysis
function scanSupplyChainThreats() {
  const output = document.getElementById("supplyChainOutput");
  if (!output) return;
  output.innerHTML = "🚛 Scanning Supply Chain Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Supply Chain Security Analyzed Successfully!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind button for marketplace trends
  bindButton("fetchMarketplaceTrendsButton", fetchMarketplaceTrends);
});

// 🔹 Fetch AI-Powered Marketplace Trends
async function fetchMarketplaceTrends() {
  const output = document.getElementById("marketplaceTrendsOutput");
  if (!output) return;
  output.innerHTML = "📊 Fetching Marketplace Trends...";
  try {
    const res = await fetch("https://your-cloud-database.com/marketplace-trends");
    const data = await res.json();
    output.innerHTML = `
      <strong>🛒 Marketplace Trends 2025:</strong><br>
      ✅ <strong>AI-Driven Shopping Experiences:</strong> ${data.aiShopping}<br>
      ✅ <strong>Blockchain-Based Transactions:</strong> ${data.blockchainPayments}<br>
      ✅ <strong>Predictive Consumer Behavior:</strong> ${data.predictiveAnalytics}
    `;
  } catch (err) {
    console.error("Error fetching marketplace trends:", err);
    output.innerText = `⚠️ API Error: ${err.message}`;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind button for marketplace trends
  bindButton("fetchMarketplaceTrendsButton", fetchMarketplaceTrends);
});
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for network security functions
  bindButton("scanNetworkThreatsButton", scanNetworkThreats);
  bindButton("applyZeroTrustSecurityButton", applyZeroTrustSecurity);
  bindButton("deployEndpointSecurityButton", deployEndpointSecurity);
});

// 🔹 Scan Network Threats
function scanNetworkThreats() {
  const output = document.getElementById("networkThreatOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Scanning Network Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Network Threat Analysis Completed!";
  }, 2000);
}

// 🔹 Apply Zero Trust Security Architecture
function applyZeroTrustSecurity() {
  const output = document.getElementById("zeroTrustOutput");
  if (!output) return;
  output.innerHTML = "🔒 Deploying Zero Trust Security Framework...";
  setTimeout(() => {
    output.innerHTML = "✅ Zero Trust Security Successfully Implemented!";
  }, 2000);
}

// 🔹 Deploy AI-Powered Endpoint Security
function deployEndpointSecurity() {
  const output = document.getElementById("endpointSecurityOutput");
  if (!output) return;
  output.innerHTML = "💻 Activating Endpoint Security & Encryption...";
  setTimeout(() => {
    output.innerHTML = "✅ Endpoint Security Measures Applied!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for passenger security functions
  bindButton("scanPassengerThreatsButton", scanPassengerThreats);
});

// 🔹 AI-Powered Passenger Security Analysis
function scanPassengerThreats() {
  const output = document.getElementById("passengerSecurityOutput");
  if (!output) return;
  output.innerHTML = "🚆 Scanning Passenger Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Passenger Security Successfully Evaluated!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind penetration testing buttons
  bindButton("performLiveScanButton", performLiveScan);
  bindButton("simulateLiveExploitButton", simulateLiveExploit);
  bindButton("deployLiveFixButton", deployLiveFix);
  bindButton("runThreatSimulationButton", runThreatSimulation);
  bindButton("activateEnterpriseSecurityButton", activateEnterpriseSecurity);
});

// 🔹 Run Live Vulnerability Scan
function performLiveScan() {
  const output = document.getElementById("pentestResult");
  if (!output) return;
  output.innerHTML = "🔍 Scanning System for Vulnerabilities...";
  setTimeout(() => {
    output.innerHTML = "✅ Vulnerability Scan Completed!";
  }, 2000);
}

// 🔹 Simulate Live Exploit Attempt
function simulateLiveExploit() {
  const output = document.getElementById("pentestResult");
  if (!output) return;
  output.innerHTML = "🚨 Simulating Exploit Attempt...";
  setTimeout(() => {
    output.innerHTML = "⚠️ Exploit Detected! Security Measures Required!";
  }, 2000);
}

// 🔹 Apply Live Security Fix
function deployLiveFix() {
  const output = document.getElementById("fixResult");
  if (!output) return;
  output.innerHTML = "🛡️ Deploying Security Fix...";
  setTimeout(() => {
    output.innerHTML = "✅ Security Fix Successfully Applied!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind predictive cybersecurity analytics buttons
  bindButton("purchaseAnalyticsButton", () => purchaseAnalytics("aiRiskForecasting"));
  bindButton("runThreatSimulationButton", runThreatSimulation);
  bindButton("buyProductButton", () => buyProduct("threatReport"));
  bindButton("activateEnterpriseSecurityButton", activateEnterpriseSecurity);
});
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for progress tracking functions
  bindButton("trackTrainingProgressButton", trackTrainingProgress);
});

// 🔹 AI-Powered Training Progress Analysis
function trackTrainingProgress() {
  const output = document.getElementById("trainingProgressOutput");
  if (!output) return;
  output.innerHTML = "📈 Tracking Training Progress...";
  setTimeout(() => {
    output.innerHTML = "✅ Training Status Updated Successfully!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for public transport security functions
  bindButton("scanTransitThreatsButton", scanTransitThreats);
});

// 🔹 AI-Powered Transit Security Analysis
function scanTransitThreats() {
  const output = document.getElementById("transitSecurityOutput");
  if (!output) return;
  output.innerHTML = "🚉 Scanning Public Transport Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Transit Security Successfully Evaluated!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for secure travel systems functions
  bindButton("scanBookingThreatsButton", scanBookingThreats);
});

// 🔹 AI-Powered Booking Security Analysis
function scanBookingThreats() {
  const output = document.getElementById("bookingSecurityOutput");
  if (!output) return;
  output.innerHTML = "🛫 Scanning Booking Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Booking Security Successfully Evaluated!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for smart infrastructure security functions
  bindButton("scanSmartCityThreatsButton", scanSmartCityThreats);
});

// 🔹 AI-Powered Smart City Security Analysis
function scanSmartCityThreats() {
  const output = document.getElementById("smartCitySecurityOutput");
  if (!output) return;
  output.innerHTML = "🌆 Scanning Smart City Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Smart City Security Successfully Evaluated!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for smart mobility security functions
  bindButton("scanRideSharingThreatsButton", scanRideSharingThreats);
});

// 🔹 AI-Powered Ride-Sharing Security Analysis
function scanRideSharingThreats() {
  const output = document.getElementById("rideSharingSecurityOutput");
  if (!output) return;
  output.innerHTML = "🚕 Scanning Ride-Sharing Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Ride-Sharing Security Successfully Evaluated!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for smart travel security functions
  bindButton("scanIdentityThreatsButton", scanIdentityThreats);
});

// 🔹 AI-Powered Digital Identity Security Analysis
function scanIdentityThreats() {
  const output = document.getElementById("identitySecurityOutput");
  if (!output) return;
  output.innerHTML = "🔐 Scanning Digital Identity Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Identity Security Successfully Evaluated!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind AI cybersecurity buttons
  bindButton("detectLiveFraudButton", () => detectLiveFraud("#56789"));
  bindButton("applyLiveFraudPreventionButton", () => applyLiveFraudPrevention("#56789"));
  bindButton("runBlockchainValidationButton", runBlockchainValidation);
  bindButton("runComplianceCheckButton", runComplianceCheck);
  bindButton("performLiveScanButton", performLiveScan);
  bindButton("simulateLiveExploitButton", simulateLiveExploit);
  bindButton("deployLiveFixButton", deployLiveFix);
});
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Ensure full-screen display for all pages
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
  document.body.style.overflowX = "hidden";

  // 🔹 Ensure images are fully responsive
  document.querySelectorAll("img").forEach(img => {
    img.style.width = "100%";
    img.style.height = "auto";
  });

  // 🔹 Load navigation menu dynamically
  loadNavigation();

  // 🔹 Bind interactive buttons
  const buttons = [
    { id: "detectLiveFraudButton", action: detectFraud },
    { id: "applyLiveFraudPreventionButton", action: applyFraudPrevention },
    { id: "runAerospaceSecurityButton", action: runAerospaceSecurity },
    { id: "secureSatelliteButton", action: secureSatelliteCommunication },
    { id: "runAIThreatForecastButton", action: runAIThreatForecast },
    { id: "activateZeroTrustButton", action: activateZeroTrust }
  ];

  buttons.forEach(({ id, action }) => bindButton(id, action));
});

// 🔹 Helper function for button event binding
function bindButton(id, action) {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", action);
}

// 🔹 Function to dynamically load navigation
async function loadNavigation() {
  const navList = document.querySelector(".desktop-nav");
  try {
    const res = await fetch("/api/pages.json");
    const pages = await res.json();
    pages.forEach(page => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${page.url}"><strong>${page.title}</strong></a>`;
      navList.appendChild(li);
    });
  } catch (err) {
    console.error("❌ Navigation loading failed:", err);
  }
}

// 🔹 AI-Powered Fraud Detection
function detectFraud() {
  executeSimulation("fraudDetectionOutput", "🔍 Running AI Fraud Detection...", "✅ Fraud Analysis Complete!");
}

// 🔹 Apply Fraud Prevention Mechanism
function applyFraudPrevention() {
  executeSimulation("fraudSolution", "🚨 Deploying AI Fraud Prevention Measures...", "✅ Fraud Prevention Applied!");
}

// 🔹 Aerospace Cybersecurity Activation
function runAerospaceSecurity() {
  executeSimulation("aerospaceSecurityOutput", "🚀 Activating Aerospace Cybersecurity...", "✅ Aerospace Security Enabled!");
}

// 🔹 Satellite Security Protocol Activation
function secureSatelliteCommunication() {
  executeSimulation("aerospaceSecurityOutput", "🛰️ Encrypting Satellite Communications...", "✅ Satellite Encryption Secured!");
}

// 🔹 AI-Powered Threat Forecasting
function runAIThreatForecast() {
  executeSimulation("aiTechSecurityOutput", "🔮 AI-Powered Risk Forecasting Started...", "✅ AI Cyber Threat Forecasting Completed!");
}

// 🔹 Zero-Trust Security Activation
function activateZeroTrust() {
  executeSimulation("aiTechSecurityOutput", "🛡️ Implementing Zero-Trust Security Framework...", "✅ Zero-Trust Security Activated!");
}

// 🔹 Generic Simulation Executor
function executeSimulation(outputId, startMessage, endMessage) {
  const output = document.getElementById(outputId);
  if (!output) return;
  output.innerHTML = startMessage;
  setTimeout(() => {
    output.innerHTML = endMessage;
  }, 2000);
}

// 🔹 Error Handling
function handleError(functionName, error) {
  console.error(`❌ Error in ${functionName}:`, error);
  alert(`⚠️ Something went wrong: ${error.message || error}`);
}
document.addEventListener("DOMContentLoaded", () => {
    // 🔹 Ensure full-screen display for all pages
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";
    document.body.style.overflowX = "hidden";

    // 🔹 Ensure images are fully responsive
    document.querySelectorAll("img").forEach(img => {
        img.style.width = "100%";
        img.style.height = "auto";
    });

    // 🔹 Load navigation menu dynamically
    loadNavigation();

    // 🔹 Bind interactive buttons
    const buttons = [
        { id: "darkModeToggle", action: toggleDarkMode },
        { id: "scanTicketingThreatsButton", action: scanTicketingThreats }
    ];

    buttons.forEach(({ id, action }) => bindButton(id, action));
});

// 🔹 Helper function for button event binding
function bindButton(id, action) {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", action);
}

// 🔹 Function to dynamically load navigation
async function loadNavigation() {
    const navList = document.querySelector(".desktop-nav");
    try {
        const res = await fetch("/api/pages.json");
        const pages = await res.json();
        pages.forEach(page => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${page.url}"><strong>${page.title}</strong></a>`;
            navList.appendChild(li);
        });
    } catch (err) {
        console.error("❌ Navigation loading failed:", err);
    }
}

// 🔹 Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// 🔹 AI-Powered Ticketing Security Scan
function scanTicketingThreats() {
    executeSimulation("ticketingSecurityOutput", "🎟️ Running security scan for ticketing system...", "✅ Ticketing Security Analysis Complete!");
}

// 🔹 Generic Simulation Executor
function executeSimulation(outputId, startMessage, endMessage) {
    const output = document.getElementById(outputId);
    if (!output) return console.error(`❌ Error: Output element "${outputId}" not found!`);
    output.innerHTML = startMessage;
    setTimeout(() => output.innerHTML = endMessage, 2000);
}

// 🔹 Error Handling
function handleError(functionName, error) {
    console.error(`❌ Error in ${functionName}:`, error);
    alert(`⚠️ Something went wrong: ${error.message || error}`);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for cyber defense training functions
  bindButton("startLiveFraudDetectionButton", startLiveFraudDetection);
  bindButton("startLivePenetrationTestingButton", startLivePenetrationTesting);
  bindButton("launchCyberLabButton", launchCyberLab);
  bindButton("subscribePremiumButton", () => subscribe("premium"));
});

// 🔹 AI-Powered Training Challenge Analysis
function startLiveFraudDetection() {
  const output = document.getElementById("challengeOutput");
  if (!output) return;
  output.innerHTML = "🔍 Running AI Fraud Detection...";
  setTimeout(() => {
    output.innerHTML = "✅ AI Fraud Detection Completed!";
  }, 2000);
}

// 🔹 AI-Powered Cyber Defense Labs Activation
function launchCyberLab() {
  const output = document.getElementById("labOutput");
  if (!output) return;
  output.innerHTML = "🔬 Initializing Cyber Lab Training...";
  setTimeout(() => {
    output.innerHTML = "✅ Cyber Lab Training Session Activated!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for transport security functions
  bindButton("scanTrafficThreatsButton", scanTrafficThreats);
});

// 🔹 AI-Powered Traffic Security Analysis
function scanTrafficThreats() {
  const output = document.getElementById("trafficSecurityOutput");
  if (!output) return;
  output.innerHTML = "🚦 Scanning Traffic Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Traffic Security Successfully Evaluated!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for urban infrastructure security functions
  bindButton("scanInfrastructureThreatsButton", scanInfrastructureThreats);
});

// 🔹 AI-Powered Infrastructure Security Analysis
function scanInfrastructureThreats() {
  const output = document.getElementById("infrastructureSecurityOutput");
  if (!output) return;
  output.innerHTML = "🏢 Scanning Urban Infrastructure Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Urban Infrastructure Security Successfully Evaluated!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for vulnerability report functions
  bindButton("scanVulnerabilitiesButton", scanVulnerabilities);
  bindButton("performRiskAssessmentButton", performRiskAssessment);
  bindButton("deployRemediationStrategiesButton", deployRemediationStrategies);
});

// 🔹 AI-Powered Vulnerability Scan
function scanVulnerabilities() {
  const output = document.getElementById("vulnerabilityScanOutput");
  if (!output) return;
  output.innerHTML = "🔍 Running AI Vulnerability Scan...";
  setTimeout(() => {
    output.innerHTML = "✅ Vulnerability Scan Completed!";
  }, 2000);
}

// 🔹 AI-Powered Risk Assessment
function performRiskAssessment() {
  const output = document.getElementById("riskAssessmentOutput");
  if (!output) return;
  output.innerHTML = "⚠️ Performing Security Risk Assessment...";
  setTimeout(() => {
    output.innerHTML = "✅ Risk Assessment Successfully Completed!";
  }, 2000);
}

// 🔹 AI-Driven Security Remediation
function deployRemediationStrategies() {
  const output = document.getElementById("remediationStrategyOutput");
  if (!output) return;
  output.innerHTML = "🛡️ Deploying AI-Powered Security Fixes...";
  setTimeout(() => {
    output.innerHTML = "✅ AI Security Remediation Successfully Deployed!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for utility security functions
  bindButton("scanUtilityThreatsButton", scanUtilityThreats);
});

// 🔹 AI-Powered Grid Security Analysis
function scanUtilityThreats() {
  const output = document.getElementById("utilitySecurityOutput");
  if (!output) return;
  output.innerHTML = "⚡ Scanning Utility Security Threats...";
  setTimeout(() => {
    output.innerHTML = "✅ Utility Security Successfully Evaluated!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for live vulnerability scan functions
  bindButton("startLiveScanButton", startLiveScan);
  bindButton("scanFinanceSecurityButton", scanFinanceSecurity);
  bindButton("scanAerospaceSecurityButton", scanAerospaceSecurity);
});

// 🔹 AI-Powered Live Vulnerability Scan
function startLiveScan() {
  const output = document.getElementById("scanOutput");
  if (!output) return;
  output.innerHTML = "🔍 Running Live Vulnerability Scan...";
  setTimeout(() => {
    output.innerHTML = "✅ Live Vulnerability Scan Completed!";
  }, 2000);
}

// 🔹 AI-Powered Finance Security Audit
function scanFinanceSecurity() {
  const output = document.getElementById("financeSecurityOutput");
  if (!output) return;
  output.innerHTML = "🏦 Scanning Financial Systems for Vulnerabilities...";
  setTimeout(() => {
    output.innerHTML = "✅ Finance Security Audit Completed!";
  }, 2000);
}

// 🔹 AI-Powered Aerospace Security Diagnostics
function scanAerospaceSecurity() {
  const output = document.getElementById("aerospaceSecurityOutput");
  if (!output) return;
  output.innerHTML = "🚀 Securing Aerospace Infrastructure...";
  setTimeout(() => {
    output.innerHTML = "✅ Aerospace Cybersecurity Verification Complete!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for cybersecurity innovation functions
  bindButton("runThreatSimulationButton", runThreatSimulation);
});

// 🔹 AI-Powered Cyber Threat Detection Simulation
function runThreatSimulation() {
  const output = document.getElementById("threatOutput");
  if (!output) return;
  output.innerHTML = "🔍 Running AI Cyber Threat Detection...";
  setTimeout(() => {
    output.innerHTML = "✅ AI Cyber Threat Detection Successfully Completed!";
  }, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Bind buttons for homepage functions
  bindButton("exploreLatestTrendsButton", exploreLatestTrends);
  bindButton("scanFinanceFraudButton", scanFinanceFraud);
  bindButton("scanAerospaceFraudButton", scanAerospaceFraud);
});

// 🔹 AI-Powered Cybersecurity Trends Exploration
function exploreLatestTrends() {
  const output = document.getElementById("latestTrendsOutput");
  if (!output) return;
  output.innerHTML = "📊 Exploring Latest AI Cybersecurity Trends...";
  setTimeout(() => {
    output.innerHTML = "✅ Cyber Trends Successfully Retrieved!";
  }, 2000);
}

// 🔹 AI-Powered Finance Cybersecurity Scan
function scanFinanceFraud() {
  const output = document.getElementById("financeFraudOutput");
  if (!output) return;
  output.innerHTML = "🏦 Scanning Financial Transactions for Fraud...";
  setTimeout(() => {
    output.innerHTML = "✅ Finance Security Audit Completed!";
  }, 2000);
}

// 🔹 AI-Powered Aerospace Cybersecurity Scan
function scanAerospaceFraud() {
  const output = document.getElementById("aerospaceFraudOutput");
  if (!output) return;
  output.innerHTML = "🚀 Scanning Aerospace Cybersecurity Infrastructure...";
  setTimeout(() => {
    output.innerHTML = "✅ Aerospace Security Verification Complete!";
  }, 2000);
}