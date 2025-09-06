const fs = require("fs");

// Example Apple App Store reviews (Day One app id = 421706526)
const APPLE_URL =
  "https://itunes.apple.com/jo/rss/customerreviews/id=421706526/json"; 

// Fetch reviews from Apple App Store
async function fetchAppleReviews() {
  const res = await fetch(APPLE_URL);
  const data = await res.json().catch(() => null);

  console.log("DEBUG RAW DATA:", JSON.stringify(data, null, 2)); // print response

  if (!data || !data.feed || !data.feed.entry) {
    console.warn("No Apple reviews found. Using dummy reviews instead.");
    return generateDummyReviews(300); // 300 dummy reviews
  }

  return data.feed.entry.map((r) => ({
    user: r.author.name.label,
    rating: r["im:rating"].label,
    content: r.content.label,
  }));
}

// Generate random dummy reviews
function generateDummyReviews(count) {
  const issues = [
    "Great app, very helpful!",
    "Needs better sync across devices.",
    "Too expensive, pricing is unfair.",
    "Keeps crashing, full of bugs.",
    "Love the UI, very clean.",
    "Notifications don’t always work.",
    "Subscription model is frustrating.",
    "I lost some of my data after update.",
  ];

  const reviews = [];
  for (let i = 0; i < count; i++) {
    reviews.push({
      user: `User_${i + 1}`,
      rating: Math.ceil(Math.random() * 5), // 1–5 stars
      content: issues[Math.floor(Math.random() * issues.length)],
    });
  }
  return reviews;
}

// Simple keyword classifier
function classify(review) {
  const text = review.content.toLowerCase();
  if (text.includes("sync")) return "Sync Issues";
  if (text.includes("price") || text.includes("subscription")) return "Pricing";
  if (text.includes("bug") || text.includes("crash")) return "Bugs/Crashes";
  if (text.includes("notification")) return "Notifications";
  if (text.includes("data")) return "Data Loss";
  return "Other";
}

// Save reviews as CSV
function saveAsCSV(labeled) {
  const header = "user,rating,content,issue\n";
  const rows = labeled
    .map(
      (r) =>
        `"${r.user}","${r.rating}","${r.content.replace(/"/g, '""')}","${r.issue}"`
    )
    .join("\n");

  fs.writeFileSync("reviews.csv", header + rows);
  console.log("Saved reviews.csv with", labeled.length, "reviews");
}

async function main() {
  const reviews = await fetchAppleReviews();
  const labeled = reviews.map((r) => ({ ...r, issue: classify(r) }));

  // Save both JSON + CSV
  fs.writeFileSync("reviews_labeled.json", JSON.stringify(labeled, null, 2));
  saveAsCSV(labeled);

  console.log("Task B complete! Generated", labeled.length, "reviews");
}

main();

// To run: node task_b/fetch_reviews.js