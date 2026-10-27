# IK Clothing — Premium Garments Website

A responsive 3-page static website concept for a clothing brand, built with HTML, CSS and vanilla JavaScript.

## Pages
- `index.html` — Home / brand introduction
- `collections.html` — Product grid with working category filters and WhatsApp enquiry links
- `about.html` — Brand story and contact form that opens WhatsApp with a prefilled enquiry

## Folder structure
```text
ik-clothing-website/
├── index.html
├── collections.html
├── about.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Install the **Live Server** extension, if needed.
4. Right-click `index.html` → **Open with Live Server**.

You can also open `index.html` directly in a browser. Live Server is recommended for testing.

## Before showing this to a real client
1. Replace the demo brand name, story, product names and prices with approved content.
2. The WhatsApp links are configured for the number supplied for this demo. Confirm it is correct before publishing.
3. Replace `hello@example.com` in `assets/js/main.js` and in `about.html` with the real business email.
4. Replace demo images with the client's licensed/approved product photos.
5. Confirm sizes, stock, pricing, shipping and return policy with the business.
6. Test all pages and links on mobile and desktop.
7. Do not claim the newsletter form stores subscriptions; it is a front-end demo only.

## Free deployment with GitHub + Vercel
1. Create a GitHub repository and upload the contents of this folder (not the ZIP file alone).
2. Sign in to Vercel with GitHub.
3. Choose **Add New → Project**, import the repository.
4. Framework preset: **Other**. Build command: leave blank. Output directory: leave blank / root (`.`).
5. Deploy. Vercel will provide a public URL.
6. Open the live URL on mobile and test all three pages.

## Notes
- This is a static demo, not a checkout-enabled e-commerce application.
- Images and Google Fonts load from external services and require an internet connection.
- Product data and prices are illustrative placeholders, not real inventory.
