const fs = require("fs");

const files = ["index.html", "projects.html", "contact.html"];

let errors = 0;

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");

  const images = html.match(/<img\b[^>]*>/gi) || [];

  for (const img of images) {
    if (!/\balt\s*=/i.test(img)) {
      console.log(`${file}: Image is missing alt text: ${img}`);
      errors++;
    }
  }
}

if (errors === 0) {
  console.log("Check complete: No images missing alt attributes.");
} else {
  console.log(`Check complete: ${errors} image(s) need alt text.`);
}