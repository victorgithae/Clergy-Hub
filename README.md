# Clergy-Hub
Building a website for a team I'll acting as the Chief Marketing Officer.

# Clergy Hub Website

> **Know your flock. Lead with clarity.**
> 
> Clergy Hub is the umbrella for purpose-built technology that serves every side of church leadership. This repository contains the front-end source code for the public-facing marketing website, highlighting our flagship product, **Church Pilot**.

---

## Overview

This project is a static, highly responsive, and interactive front-end application built with vanilla web technologies. It is designed to be lightweight, performant, and easily maintainable. The site introduces church leaders to Clergy Hub, provides deep dives into product features (like Church Pilot), outlines the company's impact, and captures leads through an interactive contact modal and newsletter signup.

---

## Features

### Product & Content
*   **Church Pilot Showcase:** Detailed breakdown of features including People & Visitors, Smart Communication, Giving & Finance, Church Pilot AI, Events, and Insights.
*   **Impact & Leadership:** Dedicated sections to highlight the mission, approach, and people behind Clergy Hub.
*   **Lead Generation:** Interactive, modal-based contact forms with dynamic message pre-filling based on user intent (e.g., "Request a Demo").

### Technical & UI/UX
*   **Zero Dependencies:** Built entirely with vanilla HTML5, CSS3, and JavaScript. No heavy frameworks or build tools are required to run the site.
*   **Dynamic Navigation:** A smart navbar that transitions from a transparent, inverted state over dark hero sections to a solid, glassmorphism-styled state upon scrolling.
*   **Interactive Micro-interactions:** Features a custom "Dodge Effect" where hero text dynamically pushes away from the user's cursor.
*   **Accessible Modals:** Fully functional, accessible modal architecture for the contact form, including keyboard navigation (`Escape` key to close) and backdrop click-to-close functionality.
*   **Design Token Architecture:** CSS custom properties (variables) strictly define the brand palette (`Ink`, `Parchment`, and `Brand Blue`) for instantaneous global theming.

---

## Project Structure

```text
clergy-hub-website/
├── index.html          # Homepage
├── products.html       # Church Pilot & feature showcase
├── about.html          # Company mission and leadership
├── impact.html         # Impact report and statistics
├── privacy.html        # Privacy policy and terms
├── styles.css          # Global stylesheet & design tokens
├── main.js             # Shared interactivity logic
└── /images             # Directory for assets (logos, placeholders, avatars)
    ├── logo1.png       # Primary logo
    ├── logo2.png       # Secondary/inverted logo
    └── logo-mark.jpg   # Favicon
