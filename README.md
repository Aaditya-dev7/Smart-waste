# 🌱 ECO-SORTER OS | Autonomous Smart Waste Segregation

A clean, modern, high-craft one-page web application explaining the science, optical sensor pipeline, and circular economy benefits of **Autonomous Smart Waste Segregation**.

Built with a curated **Bio-Digital Emerald Design System**, smooth micro-animations, clean intentional spacing, and ready for instant deployment on **GitHub Pages**.

---

## ✨ Features & Architecture

1. **Live Interactive AI Sorter Chamber**:
   - Hands-on specimen test bay (PET bottles, Lithium batteries, Banana peels, Corrugated cardboard, PCB circuitry, dirty pizza boxes).
   - Real-time simulated hyperspectral scan beam, resin identification code, contamination risk index, and pneumatic air-jet actuation routing.
   - Dynamic search filter to test items instantly.

2. **The 4-Stage Autonomous Optical & Robotics Pipeline**:
   - **Stage 01: Hyperspectral NIR Vision** (750–2500nm polymer molecular identification).
   - **Stage 02: Eddy Current & Induction Bed** (Metal separation & conductivity rating).
   - **Stage 03: High-Speed Pneumatic Air Jets** (8.5-bar micro-valves diverting items at 4 m/s).
   - **Stage 04: IoT Telemetry & Cryptographic Ledger** (Landfill diversion logging & ESG carbon credits).

3. **The 4 Pure Material Streams Reference**:
   - Detailed specifications, accepted vs. prohibited criteria, and circular manufacturing products for:
     - 🍏 **Stream A: Bio-Organics & Compostables**
     - ♻️ **Stream B: Dry Technical Recyclables**
     - 🔋 **Stream C: E-Waste & Critical Minerals**
     - 🗑️ **Stream D: Residual / Refuse-Derived Fuel (RDF)**

4. **Dynamic Environmental & Financial ROI Calculator**:
   - Interactive sliders for daily facility throughput (Tons/Day) and segregation accuracy rate (%).
   - Live calculations based on EPA WARM methane diversion models: CO₂e greenhouse gas avoided, municipal tipping fees saved, recirculated raw materials, and compost yield.
   - One-click "Copy Impact Report" summary with toast feedback.

5. **Aesthetics & Technology**:
   - Zero external framework dependencies — pure modern HTML5, CSS3, and ES6+ JavaScript.
   - Curated Bio-Digital Emerald color palette with dark glassmorphism, glowing ambient aura, and custom responsive typography.
   - Accessible keyboard navigation and WCAG-compliant contrast ratios.

---

## 🚀 How to Deploy on GitHub Pages

This project is 100% static and requires zero build steps or complex configurations.

### Option A: Standard Branch Deployment (Simplest - 1 Minute)

1. **Initialize and Push to your GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial smart waste segregation webpage"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Activate GitHub Pages**:
   - Go to your repository on GitHub.
   - Navigate to **Settings** ➔ **Pages** (under the "Code and automation" sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` and `/ (root)`.
   - Click **Save**.

3. **Your Live URL**:
   Your site will be live within 30–60 seconds at:
   `https://<your-username>.github.io/<your-repo-name>/`

---

### Option B: Automated GitHub Actions (Included in `.github/workflows/deploy.yml`)

- A ready-to-run GitHub Actions workflow has already been created for you at `.github/workflows/deploy.yml`.
- Under **Settings** ➔ **Pages** ➔ **Source**, select **GitHub Actions**.
- Any commit pushed to the `main` branch will automatically build and publish to GitHub Pages!

---

## 💻 Local Preview

You can open `index.html` directly in any web browser, or launch a quick local server:

```powershell
# Using Python
python -m http.server 8000

# Or using Node / npx
npx serve .
```

Then visit `http://localhost:8000` in your browser.
