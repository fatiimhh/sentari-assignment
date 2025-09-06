# Sentari AI Internship — Starter Repo

## Tasks
- **Task A**: Simulates IG outreach safely, with rate-limiting (React).
- **Task B**: Collects reviews from Apple App Store + classifies issues (Node.js).
- **Task C**: Dashboard visualizing common issues (React + Recharts).

## Trade-offs
I chose JavaScript/React/Node for consistency across frontend + backend. 
For review classification, I used keyword-based tagging instead of ML because it’s simple, fast, and transparent, but less nuanced than NLP. I also avoided scraping Google Play since it violates terms, focusing instead on Apple’s official feed and Reddit API. Next steps 
could add machine learning for deeper themes and Android reviews through compliant APIs.

## How to run
- Task A: `cd task_a && npm install && npm start`
- Task B: `cd task_b && node fetch_reviews.js`
- Task C: `cd task_c && npm install && npm start`
