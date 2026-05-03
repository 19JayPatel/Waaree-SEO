# Waaree Energies SEO Website

This project is a multi-page static corporate website built for Waaree Energies, focused on SEO-ready page structure, clear user flow, and responsive behavior.

## Project Overview

The website presents Waaree Energies' brand, services, products, projects, sustainability initiatives, and career opportunities through dedicated pages.

It includes:
- 9 HTML pages with content-specific metadata
- Shared CSS for consistent design
- Shared JavaScript for navigation, form validation, and UI interactions
- Image assets used across product, project, and branding sections

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla)
- Bootstrap 5 (CDN)
- Font Awesome 6 (CDN)

## Pages and Flow

Primary navigation appears on all pages:
- Home -> Services -> Products -> About -> Contact Us

Secondary navigation is available in the "More" dropdown:
- Projects
- Solutions
- Careers
- Sustainability

### 1. Home (`index.html`)
- SEO-rich metadata and hero section
- Company stats, about summary, featured solutions, featured products
- Newsletter form and CTA blocks
- Entry point to all key sections

### 2. About (`about.html`)
- Company journey, vision and mission
- Core values and global presence
- Careers CTA

### 3. Services (`services.html`)
- Detailed service portfolio:
	- Rooftop installation
	- EPC
	- O&M
	- Consultancy
- Service process and service models
- Why choose Waaree section

### 4. Products (`products.html`)
- Product categories:
	- Solar modules
	- Inverters and converters
	- Energy storage
	- Specialty products
- Technical certifications and quote CTAs

### 5. Contact (`contact.html`)
- Contact information and regional office details
- Contact form (`#contactForm`) with client-side validation
- FAQ section, map embed, and consultation CTA

### 6. Projects (`projects.html`)
- Project achievement stats
- Featured case studies
- Sector distribution overview
- Project kickoff CTA

### 7. Solutions (`solutions.html`)
- Solution breakdown by segment:
	- Residential
	- Commercial
	- Industrial
	- Utility-scale
- Benefits, use-cases, and support model

### 8. Careers (`careers.html`)
- Work culture and benefits
- Role-wise openings across functions
- Employee testimonials
- Application process steps

### 9. Sustainability (`sustainability.html`)
- Environmental impact metrics
- ESG framework (environmental, social, governance)
- Climate action, manufacturing sustainability, social impact, and certifications

## SEO Implementation

The pages are written with SEO-oriented elements such as:
- Unique `<title>` tags per page
- Meta descriptions and keyword metadata per page
- Semantic content sections and headings
- Internal linking across all pages through navbar and footer
- `robots` meta tag used on home page

## Shared Styling and Behavior

### CSS (`css/style.css`)
- Global design tokens via CSS variables
- Reusable components:
	- Hero sections
	- Cards (stats, feature, product, service)
	- Buttons and forms
	- Footer and testimonials
- Responsive breakpoints for tablet and mobile
- Custom mobile menu and dropdown styling

### JavaScript (`js/script.js`)
- Mobile hamburger menu toggle
- Smooth scroll for anchor links
- Contact form validation and error rendering
- Success alert handling for contact form submit
- Scroll-based reveal animations for cards
- Newsletter form UX feedback
- Active link highlighting logic for current page
- Custom "More" dropdown toggle behavior

## Folder Structure

```
waaree-website/
|- index.html
|- about.html
|- services.html
|- products.html
|- contact.html
|- projects.html
|- solutions.html
|- careers.html
|- sustainability.html
|- README.md
|- css/
|  |- style.css
|- js/
|  |- script.js
|- assets/
	 |- images/
			|- (brand logos, product images, project images, favicon)
```

## How to Run

Since this is a static website, you can run it in either way:

1. Open `index.html` directly in a browser.
2. Or use a local server (recommended):
	 - VS Code Live Server extension, or
	 - any static server command.

Example (if Node.js is installed):

```bash
npx serve .
```

Then open the local URL shown in your terminal.

## Notes

- Forms are front-end validated only; no backend/API submission is configured.
- Most pages include favicon, but `solutions.html` currently does not include a favicon link tag.
- Bootstrap classes are used together with custom CSS for layout and styling.