# Knights Legacy Fund – Official Website

**Forever in our hearts. Forever giving back.**  
*Las Lomas High School – Knights Legacy Fund*

## About the Fund

The **Knights Legacy Fund** is a student-founded 501(c)(3) nonprofit dedicated to **removing financial barriers** for Las Lomas High School graduates pursuing higher education — whether college, trade school, or military service.

Founded in 2025 by a group of passionate seniors, we award **life-changing scholarships** to students who demonstrate resilience, kindness, and community impact. Our flagship award is the **Dominic Paul Maron Ferrell Memorial Scholarship**, honoring a beloved classmate who embodied selflessness and inclusion.

> **Every dollar donated goes directly to scholarships.**  
> **Every student deserves a chance.**

## Features

- **Live Progress Tracker** – See how close we are to our goal  
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
Now you should be able to view the local development server in a web browser at https://localhost:5173

### 2. Automated Deployment (GitHub Actions → AWS)

Every push to the `main` branch automatically builds and deploys the site in about 30 seconds. Ensure that <repo>/.github/workflows/deploy.yml is in place to activate the GitHub actions.

#### How it works
- **Trigger**: `git push` to `main`  
- **Build**: `npm install` → `npm run build` (Vite outputs to `dist/`)  
- **Deploy**: Files are synced to the S3 bucket  
- **Cache bust**: CloudFront cache is invalidated (`/*`) so visitors instantly see the latest version

#### AWS Setup Summary
1. **IAM OIDC Identity Provider**  
   - Provider: `https://token.actions.githubusercontent.com`
   - Audience: `sts.amazonaws.com`

2. **IAM Role** (`GitHub-KnightsLegacy`) - Trust relationship (Web identity)
    - Trusted entity type: `Web identity`
    - Identity provider: `token.actions.githubusercontent.com`
    - Audience: `sts.amazonaws.com`
    - GitHub organization: `<github_username>`
    - Github repository: `<github_repo>`
    - Github branch: `main`

This should produce the following JSON automatically:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "<ARN_of_OIDC_Provider"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringEquals": {
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                },
                "StringLike": {
                    "token.actions.githubusercontent.com:sub": "repo:<github_username>/<github_repo>:ref:refs/heads/main"
                }
            }
        }
    ]
}
```

3. **IAM Role** (`GitHub-KnightsLegacy`) - InlinePolicy (KnightsLegacy-CF-Access) 

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "cloudfront:CreateInvalidation",
            "Resource": "<CloudFront_ARN>"
        }
    ]
}
```

4. **IAM Role** (`GitHub-KnightsLegacy`) - InlinePolicy (KnightsLegacy-S3-Access) 

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:DeleteObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::<S3_Bucket_Name>",
                "arn:aws:s3:::<S3_Bucket_Name>/*"
            ]
        }
    ]
}
```

4. **GitHub Actions Workflow**  

As long as you have the deploy.yml in place and properly configured, the automated pushes should work on every checking to `main` as follows:

   - Runs `aws s3 sync dist/ s3://<bucket> --delete`  
   - Runs `aws cloudfront create-invalidation --distribution-id <id> --paths "/*"`

**Result**: Zero-touch deploys. Commit → push → done. The live site updates worldwide in seconds.

## Authors

**Alexander Alessi** – Developer  
**Nicolas Alessi** – Developer

## Live Site

[https://knightslegacy.org](https://knightslegacy.org)
