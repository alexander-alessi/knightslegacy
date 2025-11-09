# Knights Legacy Fund – Official Website

**Forever in our hearts. Forever giving back.**  
*Las Lomas High School – Knights Legacy Fund*

## About the Fund

The **Knights Legacy Fund** is a student-founded 501(c)(3) nonprofit dedicated to **removing financial barriers** for Las Lomas High School graduates pursuing higher education — whether college, trade school, or military service.

Founded in 2025 by a group of passionate seniors, we award **life-changing scholarships** to students who demonstrate resilience, kindness, and community impact. Our flagship award is the **Dominic Paul Maron Ferrell Memorial Scholarship**, honoring a beloved classmate who embodied selflessness and inclusion.

> **Every dollar donated goes directly to scholarships.**  
> **Every student deserves a chance.**

## Features

- **Live Progress Tracker** – See how close we are to our $50,000 goal  
- **Scholarship Details** – Learn about our awards and application process  
- **Meet the Team** – Executive Board + Chair Members with photos and bios  
- **Memorial Scholarship** – Dedicated page for Dominic Paul Maron Ferrell  
- **Partners & Sponsors** – Community businesses supporting our mission  
- **Mobile-First Design** – Built with React, Vite, and Tailwind CSS  

## Tech Stack

- **Frontend**: React + Vite  
- **Styling**: Tailwind CSS  
- **Icons**: Font Awesome  
- **Routing**: React Router DOM  
- **Deployment**: AWS S3 + CloudFront with HTTPS (SSL/TLS via AWS Certificate Manager)  

## Getting Started

Follow these steps to clone the repository and set up your local development environment.

### 1. Clone the Repository
```bash
git clone https://github.com/alexander-alessi/knightslegacy.git
cd knightslegacy

# Install modules
npm install

# Start the dev server
npm run dev
```

### 2. Automated Deployment (GitHub Actions → AWS)

Every push to the `main` branch automatically builds and deploys the site in under 60 seconds — no manual uploads ever again.

#### How it works
- **Trigger**: `git push` to `main`  
- **Build**: `npm install` → `npm run build` (Vite outputs to `dist/`)  
- **Deploy**: Files are synced to an S3 bucket (website hosting enabled)  
- **Cache bust**: CloudFront cache is invalidated (`/*`) so visitors instantly see the latest version

#### AWS Setup Summary
1. **IAM OIDC Identity Provider**  
   - Provider: GitHub (`token.actions.githubusercontent.com`)  
   - Restricted to: `repo:alexander-alessi/knightslegacy:ref:refs/heads/main`

2. **IAM Role** (`GitHub-KnightsLegacy`)  
   - Trusted entity: The GitHub OIDC provider above  
   - Permissions:  
     - `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` on the site bucket  
     - `cloudfront:CreateInvalidation` on the CloudFront distribution

3. **GitHub Actions Workflow**  
   - File: `.github/workflows/deploy.yml`  
   - Uses Node 22, `aws-actions/configure-aws-credentials@v4` with OIDC (no secrets stored)  
   - Runs `aws s3 sync dist/ s3://<bucket> --delete`  
   - Runs `aws cloudfront create-invalidation --distribution-id <id> --paths "/*"`

**Result**: Zero-touch deploys. Commit → push → done. The live site updates worldwide in seconds.
