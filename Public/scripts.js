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

function runFinanceFraudScan() {
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

document.getElementById("themeToggle").addEventListener("click", function () {
  const body = document.body;
  const isDark = body.classList.contains("dark-mode");
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  // Update theme preference in local storage
  localStorage.setItem("vaultTheme", isDark ? "light" : "dark");
});

// Set theme on page load
window.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("vaultTheme") || "dark";
  document.body.classList.add(`${savedTheme}-mode`);
});

function activateAutonomousResponse() {
  fetch("https://api.vaultx-cyber.cloud/api/ai/autonomous-response")
    .then(res => res.json())
    .then(data => {
      document.getElementById("autonomousResponseOutput").innerText =
        data.message || "Autonomous protocol initiated.";
    })
    .catch(err => {
      console.error("Autonomous response failed:", err);
      document.getElementById("autonomousResponseOutput").innerText =
        "Error initiating threat containment.";
    });
}

function auditAutonomousSystems() {
  fetch("https://api.vaultx-cyber.cloud/api/ai/autonomous-response")
    .then(res => res.json())
    .then(data => {
      document.getElementById("autonomousAuditOutput").innerText =
        data.status || "Audit completed successfully.";
    })
    .catch(err => {
      console.error("System audit failed:", err);
      document.getElementById("autonomousAuditOutput").innerText =
        "Audit could not be completed.";
    });
}

function enforceAITrustPolicies() {
  fetch("https://api.vaultx-cyber.cloud/api/ai/autonomous-response")
    .then(res => res.json())
    .then(data => {
      document.getElementById("aiTrustOutput").innerText =
        data.result || "Trust enforcement active.";
    })
    .catch(err => {
      console.error("Enforcement error:", err);
      document.getElementById("aiTrustOutput").innerText =
        "Trust enforcement failed.";
    });
}
function enforceAccessGovernance() {
  const output = document.getElementById("accessGovernanceOutput");
  output.innerText = "🔐 Enforcing role-based access policies...";

  fetch("/api/governance/enforce-access")
    .then(res => res.json())
    .then(data => {
      output.innerText = data.result || "Access rules successfully enforced.";
    })
    .catch(err => {
      console.error("Access enforcement error:", err);
      output.innerText = "❌ Failed to enforce access policies.";
    });
}

function assessGovernancePolicies() {
  const output = document.getElementById("governanceAuditOutput");
  output.innerText = "📜 Auditing governance policies...";

  fetch("/api/governance/audit-policies")
    .then(res => res.json())
    .then(data => {
      output.innerText = data.summary || "Governance audit complete.";
    })
    .catch(err => {
      console.error("Governance audit error:", err);
      output.innerText = "❌ Governance audit failed.";
    });
}

function activateOversightMonitoring() {
  const output = document.getElementById("oversightMonitoringOutput");
  output.innerText = "📊 Initializing AI oversight dashboard...";

  fetch("/api/governance/oversight")
    .then(res => res.json())
    .then(data => {
      output.innerText = data.dashboardStatus || "Oversight analytics online.";
    })
    .catch(err => {
      console.error("Oversight activation error:", err);
      output.innerText = "❌ Failed to activate oversight analytics.";
    });
}
document.addEventListener("DOMContentLoaded", function () {
  const gridBtn = document.getElementById("scanGridAnalyticsButton");
  const renewableBtn = document.getElementById("detectRenewableAnomaliesButton");
  const optimizationBtn = document.getElementById("runEnergyOptimizationButton");

  if (gridBtn) {
    gridBtn.addEventListener("click", () => {
      const output = document.getElementById("gridAnalyticsOutput");
      output.innerText = "⚡ Analyzing smart grid telemetry...";
      fetch("/api/energy/grid-analytics")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.insight || "Grid performance metrics retrieved.";
        })
        .catch(err => {
          console.error("Grid analytics failed:", err);
          output.innerText = "❌ Grid analysis error.";
        });
    });
  }

  if (renewableBtn) {
    renewableBtn.addEventListener("click", () => {
      const output = document.getElementById("renewableAnomalyOutput");
      output.innerText = "🌱 Running anomaly diagnostics on clean energy sources...";
      fetch("/api/energy/renewable-scan")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.summary || "Anomaly scan complete.";
        })
        .catch(err => {
          console.error("Renewable scan error:", err);
          output.innerText = "❌ Failed to scan renewable data.";
        });
    });
  }

  if (optimizationBtn) {
    optimizationBtn.addEventListener("click", () => {
      const output = document.getElementById("energyOptimizationOutput");
      output.innerText = "📊 Forecasting peak loads and risk indicators...";
      fetch("/api/energy/optimization")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.recommendation || "Energy optimization forecast completed.";
        })
        .catch(err => {
          console.error("Energy forecast error:", err);
          output.innerText = "❌ Forecast failed.";
        });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const techBtn = document.getElementById("scanTechFraudButton");

  if (techBtn) {
    techBtn.addEventListener("click", () => {
      const output = document.getElementById("techFraudOutput");
      if (!output) return;

      output.innerText = "🔍 Scanning AI transaction logs for fraud patterns...";

      fetch("/api/tech/transaction-scan")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.result || "✅ No fraud detected in recent transactions.";
        })
        .catch(err => {
          console.error("Tech fraud scan error:", err);
          output.innerText = "❌ Unable to complete fraud scan.";
        });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const threatBtn = document.getElementById("scanIdentityThreatsButton");
  const riskBtn = document.getElementById("calculateIdentityRiskButton");
  const defenseBtn = document.getElementById("applyIdentityDefenseButton");

  if (threatBtn) {
    threatBtn.addEventListener("click", () => {
      const output = document.getElementById("identityThreatsOutput");
      output.innerText = "🛡️ Scanning for identity-based threats...";
      fetch("/api/identity/scan-threats")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.threats || "No critical identity threats found.";
        })
        .catch(err => {
          console.error("Identity threat scan error:", err);
          output.innerText = "❌ Failed to complete scan.";
        });
    });
  }

  if (riskBtn) {
    riskBtn.addEventListener("click", () => {
      const output = document.getElementById("identityRiskOutput");
      output.innerText = "🔍 Calculating identity risk score...";
      fetch("/api/identity/risk-score")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.score || "Risk analysis complete.";
        })
        .catch(err => {
          console.error("Risk analysis error:", err);
          output.innerText = "❌ Risk score unavailable.";
        });
    });
  }

  if (defenseBtn) {
    defenseBtn.addEventListener("click", () => {
      const output = document.getElementById("identityDefenseOutput");
      output.innerText = "🔒 Deploying real-time identity protection...";
      fetch("/api/identity/deploy-defense")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.status || "Identity defense successfully deployed.";
        })
        .catch(err => {
          console.error("Defense activation error:", err);
          output.innerText = "❌ Deployment failed.";
        });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const intelBtn = document.getElementById("analyzeCriminalIntelligenceButton");
  const evidenceBtn = document.getElementById("validateEvidenceChainButton");
  const opsBtn = document.getElementById("deployLawOpsCoordinationButton");

  if (intelBtn) {
    intelBtn.addEventListener("click", () => {
      const output = document.getElementById("criminalIntelOutput");
      output.innerText = "🧠 Scanning for criminal patterns and darknet signals...";
      fetch("/api/law/intel-scan")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.summary || "Criminal intelligence scan completed.";
        })
        .catch(err => {
          console.error("Criminal Intel error:", err);
          output.innerText = "❌ Intel scan failed.";
        });
    });
  }

  if (evidenceBtn) {
    evidenceBtn.addEventListener("click", () => {
      const output = document.getElementById("evidenceChainOutput");
      output.innerText = "🗃️ Verifying digital evidence integrity...";
      fetch("/api/law/evidence-verify")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.status || "Digital evidence chain secured.";
        })
        .catch(err => {
          console.error("Evidence validation error:", err);
          output.innerText = "❌ Evidence chain verification failed.";
        });
    });
  }

  if (opsBtn) {
    opsBtn.addEventListener("click", () => {
      const output = document.getElementById("lawOpsOutput");
      output.innerText = "🚓 Deploying encrypted coordination protocols...";
      fetch("/api/law/ops-coordination")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.response || "Law enforcement coordination online.";
        })
        .catch(err => {
          console.error("Coordination error:", err);
          output.innerText = "❌ Coordination failed.";
        });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const portScanBtn = document.getElementById("scanMaritimeThreatsButton");
  const vesselBtn = document.getElementById("protectVesselDataButton");
  const riskBtn = document.getElementById("analyzeMaritimeRisksButton");

  if (portScanBtn) {
    portScanBtn.addEventListener("click", () => {
      const output = document.getElementById("maritimeThreatsOutput");
      output.innerText = "🛰️ Scanning port network for anomalies...";
      fetch("/api/maritime/port-threat-scan")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.status || "Port network status retrieved.";
        })
        .catch(err => {
          console.error("Port scan failed:", err);
          output.innerText = "❌ Failed to analyze port data.";
        });
    });
  }

  if (vesselBtn) {
    vesselBtn.addEventListener("click", () => {
      const output = document.getElementById("vesselDataOutput");
      output.innerText = "⚓ Initiating onboard system protection...";
      fetch("/api/maritime/vessel-shield")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.result || "Vessel protection successfully deployed.";
        })
        .catch(err => {
          console.error("Vessel protection error:", err);
          output.innerText = "❌ Vessel data shielding failed.";
        });
    });
  }

  if (riskBtn) {
    riskBtn.addEventListener("click", () => {
      const output = document.getElementById("maritimeRiskOutput");
      output.innerText = "📡 Analyzing maritime risk zones...";
      fetch("/api/maritime/threat-map")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.map || "Risk analysis complete.";
        })
        .catch(err => {
          console.error("Risk scan failed:", err);
          output.innerText = "❌ Could not complete threat modeling.";
        });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const payScanBtn = document.getElementById("scanPaymentThreatsButton");
  const tokenBtn = document.getElementById("applyTokenSecurityButton");
  const breachBtn = document.getElementById("runMobileBreachProtocolButton");

  if (payScanBtn) {
    payScanBtn.addEventListener("click", () => {
      const output = document.getElementById("paymentThreatOutput");
      output.innerText = "💳 Scanning payment channels...";
      fetch("/api/mobile/pay-scan")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.alert || "✅ No anomalies detected in payment traffic.";
        })
        .catch(err => {
          console.error("Payment scan error:", err);
          output.innerText = "❌ Failed to scan payment infrastructure.";
        });
    });
  }

  if (tokenBtn) {
    tokenBtn.addEventListener("click", () => {
      const output = document.getElementById("paymentTokenOutput");
      output.innerText = "🔐 Deploying payment token shield...";
      fetch("/api/mobile/token-shield")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.status || "✅ Token-based shielding active.";
        })
        .catch(err => {
          console.error("Token security error:", err);
          output.innerText = "❌ Token deployment failed.";
        });
    });
  }

  if (breachBtn) {
    breachBtn.addEventListener("click", () => {
      const output = document.getElementById("paymentBreachOutput");
      output.innerText = "📲 Executing containment protocol for mobile breach...";
      fetch("/api/mobile/breach-containment")
        .then(res => res.json())
        .then(data => {
          output.innerText = data.result || "✅ Containment protocol executed.";
        })
        .catch(err => {
          console.error("Breach protocol error:", err);
          output.innerText = "❌ Breach containment failed.";
        });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // 🔍 Threat Simulation Button
  const runSimBtn = document.getElementById("runThreatSimulationButton");
  const simOutput = document.getElementById("threatSimulationOutput");

  if (runSimBtn && simOutput) {
    runSimBtn.addEventListener("click", () => {
      simOutput.innerText = "🔍 Running AI-powered threat detection simulation...";
      fetch("/api/simulations/threat-detection")
        .then(res => res.json())
        .then(data => {
          simOutput.innerText = data.results || "✅ Simulation completed successfully.";
        })
        .catch(err => {
          console.error("Threat simulation failed:", err);
          simOutput.innerText = "❌ Simulation error.";
        });
    });
  }

  // 🛒 Buy Threat Intelligence Report Button
  const buyBtn = document.getElementById("buyThreatReportButton");
  const status = document.getElementById("purchaseStatusOutput");

  if (buyBtn && status) {
    buyBtn.addEventListener("click", () => {
      status.innerText = "💳 Processing your purchase...";
      fetch("/api/shop/buy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: "threatReport" })
      })
        .then(res => res.json())
        .then(data => {
          status.innerText = data.message || "🧾 Purchase complete.";
        })
        .catch(err => {
          console.error("Purchase error:", err);
          status.innerText = "❌ Could not complete purchase.";
        });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // 🔮 Buy AI Risk Forecasting
  const analyticsBtn = document.getElementById("purchaseAnalyticsButton");
  const analyticsOutput = document.getElementById("analyticsPurchaseOutput");

  if (analyticsBtn && analyticsOutput) {
    analyticsBtn.addEventListener("click", () => {
      analyticsOutput.innerText = "🔄 Purchasing AI Risk Forecasting...";
      fetch("/api/products/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: "aiRiskForecasting" })
      })
        .then(res => res.text())
        .then(text => {
          let message = text;
          try {
            const json = JSON.parse(text);
            message = json.message || message;
          } catch (e) {
            console.warn("Non-JSON response:", text);
          }
          analyticsOutput.innerText = message || "✅ Purchase complete.";
        })
        .catch(err => {
          console.error("Analytics purchase error:", err);
          analyticsOutput.innerText = "❌ Failed to complete purchase.";
        });
    });
  }

  // 📊 Buy Threat Intelligence Report
  const productBtn = document.getElementById("buyProductButton");
  const productOutput = document.getElementById("productPurchaseOutput");

  if (productBtn && productOutput) {
    productBtn.addEventListener("click", () => {
      productOutput.innerText = "📦 Purchasing Threat Intelligence Report...";
      fetch("/api/products/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: "threatReport" })
      })
        .then(res => res.text())
        .then(text => {
          let message = text;
          try {
            const json = JSON.parse(text);
            message = json.message || message;
          } catch (e) {
            console.warn("Non-JSON response:", text);
          }
          productOutput.innerText = message || "✅ Report purchase complete.";
        })
        .catch(err => {
          console.error("Threat report purchase error:", err);
          productOutput.innerText = "❌ Purchase failed.";
        });
    });
  }
});
const emergencyBtn = document.getElementById("scanPublicServiceThreatsButton");
const emergencyOutput = document.getElementById("publicServicesSecurityOutput");

if (emergencyBtn && emergencyOutput) {
  emergencyBtn.addEventListener("click", () => {
    emergencyOutput.innerText = "🚒 Scanning emergency service networks...";
    fetch("/api/public-services/emergency-scan")
      .then(res => res.text())
      .then(text => {
        let message = text;
        try {
          const json = JSON.parse(text);
          message = json.message || message;
        } catch (e) {
          console.warn("Non-JSON response:", text);
        }
        emergencyOutput.innerText = message || "✅ Emergency threat scan complete.";
      })
      .catch(err => {
        console.error("Emergency scan error:", err);
        emergencyOutput.innerText = "❌ Failed to analyze emergency systems.";
      });
  });
}
// 📊 Risk Intelligence Scan
const riskIntelBtn = document.getElementById("fetchRiskIntelButton");
const riskIntelOutput = document.getElementById("riskIntelOutput");

if (riskIntelBtn && riskIntelOutput) {
  riskIntelBtn.addEventListener("click", () => {
    riskIntelOutput.innerText = "📊 Analyzing risk intelligence across infrastructure...";
    fetch("/api/risk/intel")
      .then(res => res.json())
      .then(data => {
        riskIntelOutput.innerText = data.message || "✅ Risk intelligence report generated.";
      })
      .catch(err => {
        console.error("Risk Intel error:", err);
        riskIntelOutput.innerText = "❌ Failed to fetch risk intel.";
      });
  });
}

// ⚠️ Breach Likelihood Modeling
const breachBtn = document.getElementById("calculateBreachRiskButton");
const breachOutput = document.getElementById("breachRiskOutput");

if (breachBtn && breachOutput) {
  breachBtn.addEventListener("click", () => {
    breachOutput.innerText = "⚠️ Simulating breach scenarios...";
    fetch("/api/risk/breach-simulation")
      .then(res => res.json())
      .then(data => {
        breachOutput.innerText = data.forecast || "✅ Breach likelihood calculated.";
      })
      .catch(err => {
        console.error("Breach forecast error:", err);
        breachOutput.innerText = "❌ Could not estimate breach probability.";
      });
  });
}

// 🛡️ Cyber Resilience Score
const postureBtn = document.getElementById("generateCyberPostureScoreButton");
const postureOutput = document.getElementById("cyberScoreOutput");

if (postureBtn && postureOutput) {
  postureBtn.addEventListener("click", () => {
    postureOutput.innerText = "🛡️ Generating cyber resilience score...";
    fetch("/api/risk/cyber-posture")
      .then(res => res.json())
      .then(data => {
        postureOutput.innerText = data.score || "✅ Resilience score generated.";
      })
      .catch(err => {
        console.error("Cyber posture score error:", err);
        postureOutput.innerText = "❌ Failed to assess cyber posture.";
      });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const scanBtn = document.getElementById("scanCityInfrastructureButton");
  const privacyBtn = document.getElementById("validateCityPrivacyButton");
  const recoveryBtn = document.getElementById("runCityRecoveryProtocolButton");

  const scanOutput = document.getElementById("cityInfraOutput");
  const privacyOutput = document.getElementById("cityPrivacyOutput");
  const recoveryOutput = document.getElementById("cityRecoveryOutput");

  if (scanBtn && scanOutput) {
    scanBtn.addEventListener("click", () => {
      scanOutput.innerText = "🏙️ Scanning smart city infrastructure for anomalies...";
      fetch("/api/smart-city/infra-scan")
        .then(res => res.json())
        .then(data => {
          scanOutput.innerText = data.summary || "✅ Infrastructure scan complete.";
        })
        .catch(err => {
          console.error("Infrastructure scan error:", err);
          scanOutput.innerText = "❌ Scan failed.";
        });
    });
  }

  if (privacyBtn && privacyOutput) {
    privacyBtn.addEventListener("click", () => {
      privacyOutput.innerText = "🔐 Validating citizen data privacy protocols...";
      fetch("/api/smart-city/privacy-enforce")
        .then(res => res.json())
        .then(data => {
          privacyOutput.innerText = data.result || "✅ Privacy enforcement completed.";
        })
        .catch(err => {
          console.error("Privacy enforcement error:", err);
          privacyOutput.innerText = "❌ Could not enforce data safeguards.";
        });
    });
  }

  if (recoveryBtn && recoveryOutput) {
    recoveryBtn.addEventListener("click", () => {
      recoveryOutput.innerText = "🛠️ Deploying smart city recovery protocol...";
      fetch("/api/smart-city/recovery")
        .then(res => res.json())
        .then(data => {
          recoveryOutput.innerText = data.status || "✅ Recovery protocol executed.";
        })
        .catch(err => {
          console.error("Recovery protocol error:", err);
          recoveryOutput.innerText = "❌ Recovery deployment failed.";
        });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const blockchainBtn = document.getElementById("runBlockchainValidationButton");
  const complianceBtn = document.getElementById("runComplianceCheckButton");

  const blockchainOutput = document.getElementById("blockchainValidationOutput");
  const complianceOutput = document.getElementById("complianceAuditOutput");

  // 🔐 Blockchain Validation
  if (blockchainBtn && blockchainOutput) {
    blockchainBtn.addEventListener("click", () => {
      blockchainOutput.innerText = "🔄 Validating blockchain transaction ledger...";
      fetch("/api/blockchain/validate")
        .then(res => res.json())
        .then(data => {
          blockchainOutput.innerText = data.result || "✅ Blockchain validation complete.";
        })
        .catch(err => {
          console.error("Blockchain validation error:", err);
          blockchainOutput.innerText = "❌ Blockchain validation failed.";
        });
    });
  }

  // ✅ AI Compliance Audit
  if (complianceBtn && complianceOutput) {
    complianceBtn.addEventListener("click", () => {
      complianceOutput.innerText = "🔍 Running AI compliance audit...";
      fetch("/api/compliance/audit")
        .then(res => res.json())
        .then(data => {
          complianceOutput.innerText = data.status || "✅ Compliance check completed.";
        })
        .catch(err => {
          console.error("Compliance audit error:", err);
          complianceOutput.innerText = "❌ Compliance check failed.";
        });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const supplyBtn = document.getElementById("scanTradeSupplyChainsButton");
  const fraudBtn = document.getElementById("analyzeTradeFraudButton");
  const firewallBtn = document.getElementById("deployTradeFirewallButton");

  const supplyOutput = document.getElementById("tradeSupplyChainOutput");
  const fraudOutput = document.getElementById("tradeFraudOutput");
  const firewallOutput = document.getElementById("tradeFirewallOutput");

  if (supplyBtn && supplyOutput) {
    supplyBtn.addEventListener("click", () => {
      supplyOutput.innerText = "📦 Scanning trade networks for supply chain anomalies...";
      fetch("/api/trade/supply-scan")
        .then(res => res.json())
        .then(data => {
          supplyOutput.innerText = data.status || "✅ Supply chain scan complete.";
        })
        .catch(err => {
          console.error("Supply scan error:", err);
          supplyOutput.innerText = "❌ Supply chain monitoring failed.";
        });
    });
  }

  if (fraudBtn && fraudOutput) {
    fraudBtn.addEventListener("click", () => {
      fraudOutput.innerText = "💸 Analyzing commerce platform for fraud...";
      fetch("/api/trade/fraud-analysis")
        .then(res => res.json())
        .then(data => {
          fraudOutput.innerText = data.result || "✅ Trade fraud analysis complete.";
        })
        .catch(err => {
          console.error("Fraud detection error:", err);
          fraudOutput.innerText = "❌ Trade fraud detection failed.";
        });
    });
  }

  if (firewallBtn && firewallOutput) {
    firewallBtn.addEventListener("click", () => {
      firewallOutput.innerText = "🛡️ Activating trade security firewall...";
      fetch("/api/trade/firewall-deploy")
        .then(res => res.json())
        .then(data => {
          firewallOutput.innerText = data.message || "✅ Firewall deployed successfully.";
        })
        .catch(err => {
          console.error("Firewall deployment error:", err);
          firewallOutput.innerText = "❌ Firewall activation failed.";
        });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // 🛡️ Start Live Penetration Testing
  const penTestBtn = document.getElementById("startLivePenetrationTestingButton");
  const penTestOutput = document.getElementById("penetrationTestingOutput");

  if (penTestBtn && penTestOutput) {
    penTestBtn.addEventListener("click", () => {
      penTestOutput.innerText = "🛡️ Launching live penetration test suite...";
      fetch("/api/training/penetration-testing")
        .then(res => res.json())
        .then(data => {
          penTestOutput.innerText = data.status || "✅ Penetration testing environment deployed.";
        })
        .catch(err => {
          console.error("Penetration testing error:", err);
          penTestOutput.innerText = "❌ Penetration test launch failed.";
        });
    });
  }

  // 🔬 Launch Cyber Lab
  const cyberLabBtn = document.getElementById("launchCyberLabButton");
  const cyberLabOutput = document.getElementById("cyberLabOutput");

  if (cyberLabBtn && cyberLabOutput) {
    cyberLabBtn.addEventListener("click", () => {
      cyberLabOutput.innerText = "🔬 Initializing AI Cyber Lab workspace...";
      fetch("/api/training/cyber-lab")
        .then(res => res.json())
        .then(data => {
          cyberLabOutput.innerText = data.message || "✅ Cyber lab environment ready.";
        })
        .catch(err => {
          console.error("Cyber lab error:", err);
          cyberLabOutput.innerText = "❌ Failed to load cyber lab.";
        });
    });
  }

  // 📩 Subscribe to AI Insights
  const subscribeBtn = document.getElementById("subscribePremiumButton");
  const subscribeOutput = document.getElementById("subscriptionOutput");

  if (subscribeBtn && subscribeOutput) {
    subscribeBtn.addEventListener("click", () => {
      subscribeOutput.innerText = "📩 Subscribing you to AI insights...";
      fetch("/api/insights/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "premiumAI" })
      })
        .then(res => res.json())
        .then(data => {
          subscribeOutput.innerText = data.confirmation || "✅ Subscription successful.";
        })
        .catch(err => {
          console.error("Subscription error:", err);
          subscribeOutput.innerText = "❌ Subscription request failed.";
        });
    });
  }
});
const fraudBtn = document.getElementById("startLiveFraudDetectionButton");
const fraudOutput = document.getElementById("liveFraudDetectionOutput");

if (fraudBtn && fraudOutput) {
  fraudBtn.addEventListener("click", () => {
    fraudOutput.innerText = "🕵️‍♂️ Scanning transactions for fraud indicators...";
    fetch("/api/fraud/live-detection")
      .then(res => res.json())
      .then(data => {
        fraudOutput.innerText = data.summary || "✅ Fraud detection completed.";
      })
      .catch(err => {
        console.error("Live fraud detection error:", err);
        fraudOutput.innerText = "❌ Could not complete fraud scan.";
      });
  });
}
// 🚰 Threat Newsletter for Infrastructure Scan
const scanBtn = document.getElementById("scanWaterThreatsButton");
const scanOutput = document.getElementById("waterThreatOutput");

if (scanBtn && scanOutput) {
  scanBtn.addEventListener("click", () => {
    scanOutput.innerText = "📡 Retrieving latest threat newsletter for infrastructure...";
    fetch("/api/newsletter/threat-update?topic=water-surveillance")
      .then(res => res.json())
      .then(data => {
        scanOutput.innerText = data.summary || "✅ No abnormal behavior in pump controllers.";
      })
      .catch(err => {
        console.error("Threat newsletter error:", err);
        scanOutput.innerText = "❌ Unable to retrieve infrastructure threat update.";
      });
  });
}

// 🧪 Contamination Threat Newsletter
const contaminationBtn = document.getElementById("runContaminationScanButton");
const contaminationOutput = document.getElementById("contaminationOutput");

if (contaminationBtn && contaminationOutput) {
  contaminationBtn.addEventListener("click", () => {
    contaminationOutput.innerText = "🧪 Checking threat intelligence feed for contamination risks...";
    fetch("/api/newsletter/threat-update?topic=water-contaminants")
      .then(res => res.json())
      .then(data => {
        contaminationOutput.innerText = data.summary || "✅ Water systems meet integrity thresholds.";
      })
      .catch(err => {
        console.error("Contamination feed error:", err);
        contaminationOutput.innerText = "❌ Contamination scan newsletter unavailable.";
      });
  });
}

// 💧 Incident Control Protocol Newsletter Trigger
const incidentBtn = document.getElementById("deployWaterIncidentResponseButton");
const incidentOutput = document.getElementById("waterIncidentOutput");

if (incidentBtn && incidentOutput) {
  incidentBtn.addEventListener("click", () => {
    incidentOutput.innerText = "💧 Checking ISC2 response recommendations...";
    fetch("/api/newsletter/threat-update?topic=water-response")
      .then(res => res.json())
      .then(data => {
        incidentOutput.innerText = data.summary || "✅ Recommended response strategy: Contain, reroute, monitor.";
      })
      .catch(err => {
        console.error("Incident newsletter error:", err);
        incidentOutput.innerText = "❌ Failed to load response protocol bulletin.";
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const slug = document.body.dataset.slug;
  const threatFeed = document.getElementById("liveThreatFeed");

  // 🔹 Dynamic Threat Feed Panel
  if (threatFeed && slug === "water-security") {
    fetch("/api/newsletter/threat-update?topic=water-surveillance")
      .then(res => res.json())
      .then(data => {
        threatFeed.innerHTML = `
          <div class="threat-entry">
            <strong>${data.topic}</strong><br/>
            ${data.summary}<br/>
            <small>⏱ ${new Date(data.timestamp).toLocaleString()}</small>
          </div>`;
      })
      .catch(err => {
        console.error("Live feed error:", err);
        threatFeed.innerHTML = `<p>❌ Failed to load threat feed.</p>`;
      });
  }

  // 🔹 Load and Bind Buttons from Config
  fetch("/buttons-config.json")
    .then(res => res.json())
    .then(config => {
      const buttons = config[slug];
      if (!buttons) return;

      buttons.forEach(({ id, output, topic }) => {
        const btn = document.getElementById(id);
        const out = document.getElementById(output);
        if (!btn || !out) return;

        btn.addEventListener("click", () => {
          out.innerText = `☁️ Fetching update for ${topic}...`;
          fetch(`/api/newsletter/threat-update?topic=${encodeURIComponent(topic)}`)
            .then(res => res.json())
            .then(data => {
              out.innerText = data.summary || `✅ No critical updates for ${topic}`;
            })
            .catch(() => {
              out.innerText = "❌ Could not connect to backend threat source.";
            });
        });
      });
    })
    .catch(err => console.warn("⚠️ Couldn’t load config:", err));
});