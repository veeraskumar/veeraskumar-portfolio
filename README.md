# VeerasKumar K R — Portfolio

Personal portfolio website built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

🌐 **Live:** [veeraskumar-portfolio.vercel.app](https://veeraskumar-portfolio.vercel.app)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Contact Form:** EmailJS
- **Deployment:** Vercel

---

## Features

- Fully responsive — Mobile, Tablet, Desktop
- Smooth scroll animations with Framer Motion
- Typewriter effect in Hero section
- Sticky navbar with blur backdrop
- Hamburger menu for mobile
- Working contact form via EmailJS
- CV download button
- SEO ready — OpenGraph, sitemap, robots.txt

---

## Project Structure

```
veeraskumar-portfolio/
├── app/
│   ├── (main)/
│   │   ├── layout.tsx       # Navbar + Footer wrapper
│   │   └── page.tsx         # Main page
│   ├── error.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── globals.css
│   ├── layout.tsx           # Root layout + fonts + metadata
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── public/
    └── VeerasKumar_CV.pdf   # Add your CV here
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/veeraskumar/veeraskumar-portfolio.git

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Setup

This project uses **EmailJS** for the contact form.

1. Sign up free at [emailjs.com](https://www.emailjs.com)
2. Create a Gmail service → copy **Service ID**
3. Create an email template → copy **Template ID**
4. Go to Account → copy **Public Key**
5. Paste all 3 into `components/Contact.tsx`:

```ts
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
```
