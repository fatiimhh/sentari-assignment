# Task B – Competitor Review Mining

**Description:**  
This task collects and classifies app reviews for Day One, Journey, and Daily. Due to assignment constraints, I used **dummy reviews** to simulate real feedback. Each review is labeled into categories such as Sync Issues, Notifications, Data Loss, Pricing, Bugs/Crashes, and Other.

**Files in this folder:**  
- `reviews_labeled.json` – JSON file with all labeled reviews  
- `reviews.csv` – CSV version of labeled reviews for analysis or dashboard  
- `TaskB_InsightsBrief.md` – One-page insights brief summarizing top issues and recommendations  
- `fetch_reviews.js` – Script to generate dummy reviews and classify them  
- `review_insights.js` – Script to compute frequency counts for each category  

**How to Run:**  
1. `cd task_b`  
2. `npm install` (if you add any dependencies; otherwise, just Node.js is enough)  
3. `node fetch_reviews.js` – Generates `reviews_labeled.json` and `reviews.csv`  
4. `node review_insights.js` – Prints frequency counts for each issue category  

