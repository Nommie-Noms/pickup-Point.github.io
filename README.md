# FastText Courier Service Website

A modern, mobile-friendly website for **FastText Courier Service**, where customers can place courier orders by sending a text message.  
The site includes sections for service details, terms of use, and employees with clickable **copy phone number** buttons.

---

## 📂 Project Structure


---

## 🚀 Features
- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile.
- **Top Navigation Bar** – Collapses into a hamburger menu on mobile.
- **Hero Section** – Quick introduction to the service.
- **How It Works** – Step-by-step explanation of the courier process.
- **Terms of Use** – Legal terms and conditions.
- **Employees Section** – Employee profiles with photos, roles, and copy phone number buttons.
- **Copy Phone Number Buttons** – Instantly copies contact details to the clipboard.

---

## 🛠️ Setup Instructions

1. **Download / Clone Project**  
   - Download as `.zip` and extract  
   - Or clone with Git:
     ```bash
     git clone https://github.com/yourusername/fasttext-website.git
     ```

2. **File Placement**  
   - Ensure `index.html`, `style.css`, and `script.js` are in the root folder.  
   - Place employee profile photos in the `images/` folder.  

3. **Run Locally**  
   - Open `index.html` in your browser.  
   - No server setup required (static site).  

4. **Deploy Online**  
   You can deploy easily to:
   - [GitHub Pages](https://pages.github.com/)  
   - [Netlify](https://www.netlify.com/)  
   - [Vercel](https://vercel.com/)  
   - Or your own hosting provider.  

---

## 📸 Customization

- **Colors** → Update `style.css`, main brand color is `#7C94C4`.  
- **Employees** → Edit `index.html` inside the `#employees` section. Update name, role, phone number, and image path. Example:
  ```html
  <div class="employee">
    <img src="images/jane.jpg" alt="Jane Smith">
    <h3>Jane Smith</h3>
    <p>Customer Support</p>
    <button class="copy-btn" onclick="copyNumber('+1 111 222 3333')">Copy Number</button>
  </div>


---

👉 With this, your project is **fully documented** and easy to hand off or deploy.  

Would you like me to also give you a **GitHub-ready version** (with `.gitignore` and deployment instructions for GitHub Pages)?
