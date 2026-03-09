# Chatbot Analytics Dashboard

A simple, good-looking dashboard that shows you how your chatbot is actually performing. Built with plain HTML, CSS, and Chart.js — no frameworks, no build step, no nonsense.

![Dashboard Preview](https://img.shields.io/badge/status-ready-green)

## What It Tracks

- **Total conversations** — how many chats your bot handled
- **Average response time** — how fast your bot replies
- **Satisfaction score** — are users happy with the answers?
- **Conversion rate** — how many chats led to an action (booking, signup, etc.)
- **Messages per day** — line chart showing daily volume
- **Top questions** — table of the most common things people ask

## Quick Start

1. Clone this repo
2. Open `index.html` in your browser
3. That's it

The dashboard loads from `sample-data.json` so you can see it working straight away. Swap in your own data to make it real.

## Files

| File | What it does |
|------|-------------|
| `index.html` | Page structure |
| `style.css` | Dark theme styling |
| `app.js` | Fetches data, builds charts and tables |
| `sample-data.json` | Example metrics to demo the dashboard |

## Using Your Own Data

Replace `sample-data.json` with your actual chatbot metrics. Keep the same JSON structure and everything just works.

## Tech

- Plain HTML/CSS/JS
- [Chart.js](https://www.chartjs.org/) via CDN
- No dependencies to install

## About Hand On Web
We build AI chatbots, voice agents, and automation tools for businesses.
- 🌐 [handonweb.com](https://www.handonweb.com)
- 📧 outreach@handonweb.com
- 📍 Chester, UK

## Licence
MIT
