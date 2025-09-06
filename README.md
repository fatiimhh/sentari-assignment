# Sentari AI Internship — Starter Repo

## Tasks
- **Task A**: Simulates IG outreach safely, with rate-limiting (React).
- **Task B**: Collects reviews from Apple App Store + classifies issues (Node.js).
- **Task C**: Dashboard visualizing common issues (React + Recharts).

## Trade-offs & Next Steps
I chose JavaScript/React/Node for consistency across frontend + backend. For **task A**, simulated Instagram outreach ethically with a simple rate-limited approach rather than integrating real APIs, which avoids privacy concerns but limits real-world testing. **Task B** uses dummy reviews to classify app feedback instead of collecting 500–1,000 live reviews, which ensures consistent and fast testing but does not fully capture real user sentiment. **Task C** clusters review themes in a local dashboard using the labeled dataset, providing visual insights quickly, though it may miss nuances present in larger real datasets. Next steps could include integrating real APIs for outreach and reviews, adding dynamic configuration for messages and cluster categories, and improving the dashboard with interactive charts and filtering to make the simulation and insights more robust.


## How to run
- Task A: `cd task_a && npm install && npm start`
- Task B: `cd task_b && node fetch_reviews.js`
- Task C: `cd task_c && npm install && npm start`
