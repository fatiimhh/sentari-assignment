const fs = require("fs");

// Load labeled reviews (JSON)
const data = JSON.parse(fs.readFileSync("reviews_labeled.json", "utf-8"));

// Count frequency of each issue
const freq = {};
data.forEach((review) => {
  const issue = review.issue;
  freq[issue] = (freq[issue] || 0) + 1;
});

// Calculate percentages
const total = data.length;
console.log("Issue Frequency Counts:");
for (const [issue, count] of Object.entries(freq)) {
  const pct = ((count / total) * 100).toFixed(1);
  console.log(`${issue}: ${count} (${pct}%)`);
}
