# Sentari Assignment
------

## Task A – IG Outreach Simulator
A simple React app that simulates safe outreach messages with a delay to mimic rate limiting.
- Add IG handles manually
- Send auto-messages with simulated delay
- Clear messages when needed
👉 **Found in task_a/**

## Task B – Review Insights Script
A Node.js script that fetches or uses fallback app reviews, classifies them into categories, and saves them into a labeled JSON file.
- Fetches reviews (or uses dummy data fallback)
- Categorizes reviews by keywords (e.g., sync issues, pricing, bugs)
- Outputs reviews_labeled.json with results
👉 **Found in task_b/**

## Task C – Review Issues Dashboard
A React dashboard that visualizes categorized review issues using a bar chart.
- Reads from reviews_labeled.json (saved in public/)
- Displays issue counts in a bar chart (Recharts)
👉 **Found in task_c/**


## Trade-offs & Next Steps
I chose JavaScript/React/Node for consistency across frontend + backend. For **task A**, simulated Instagram outreach ethically with a simple rate-limited approach rather than integrating real APIs, which avoids privacy concerns but limits real-world testing. **Task B** uses dummy reviews to classify app feedback instead of collecting 500–1,000 live reviews, which ensures consistent and fast testing but does not fully capture real user sentiment. **Task C** clusters review themes in a local dashboard using the labeled dataset, providing visual insights quickly, though it may miss nuances present in larger real datasets. Next steps could include integrating real APIs for outreach and reviews, adding dynamic configuration for messages and cluster categories, and improving the dashboard with interactive charts and filtering to make the simulation and insights more robust.


## How to run
- Task A: `cd task_a && npm install && npm start`
- Task B: `cd task_b && node fetch_reviews.js`
- Task C: `cd task_c && npm install && npm start`
