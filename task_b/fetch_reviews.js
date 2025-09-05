import fetch from "node-fetch";
import fs from "fs";

// Example Apple App Store reviews (Day One app id = 421706526)
const APPLE_URL = "https://itunes.apple.com/rss/customerreviews/id=421706526/json";

async function fetchAppleReviews() {
  const res = await fetch(APPLE_URL);
  const data = await res.json();
  const reviews = data.feed.entry.map((r) => ({
    user: r.author.name.label,
    rating: r["im:rating"].label,
    content: r.content.label,
  }));
  return reviews;
}

// Simple keyword classifier
function classify(review) {
  const text = review.content.toLowerCase();
  if (text.includes("sync")) return "Sync Issues";
  if (text.includes("price") || text.includes("subscription")) return "Pricing";
  if (text.includes("bug")) return "Bugs/Crashes";
  return "Other";
}

async function main() {
  const reviews = await fetchAppleReviews();
  const labeled = reviews.map((r) => ({ ...r, issue: classify(r) }));
  fs.writeFileSync("reviews_labeled.json", JSON.stringify(labeled, null, 2));
  console.log("✅ Saved reviews_labeled.json");
}

main();
