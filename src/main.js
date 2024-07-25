let toggler = document.querySelector(".burger-icon i");
let closeMoblieNavIcon = document.querySelector(".close-icon");

let featuresHeader = [
  "Bookmark in one click",
  "Intelligent search",
  "Share your bookmarks",
];

let featuresParagraph = [
  "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites",
  " Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all of your bookmarks",
  " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
];

let faqAnswers = [
  "Bookmark is a digital tool that allows you to save web pages for easy access later, helping you organize your favorite sites efficiently.",
  "To request a new browser, simply submit your suggestion through our feedback form on the website, and we'll consider it for future updates.",
  "Yes, a mobile app is currently in development. Stay tuned for updates on our progress and release dates!",
  "Our service is compatible with other Chromium-based browsers, offering you a seamless experience across different platforms.",
];

// Handle The mobile Nav Open And Close
toggler.addEventListener("click", function () {
  document.querySelector("header .mobile-nav").classList.remove("close");
});

closeMoblieNavIcon.addEventListener("click", function () {
  document.querySelector("header .mobile-nav").classList.add("close");
});

document.querySelectorAll("header nav.mobile-nav ul a").forEach((li) => {
  li.addEventListener("click", function () {
    document.querySelector("header .mobile-nav").classList.add("close");
  });
});

// Add The Functionalities to the Features Section
document.querySelectorAll("#features nav ul li").forEach((navEle) => {
  navEle.addEventListener("click", function () {
    // Change The Heading Content
    document.querySelector("#features .feature .content h2").textContent =
      featuresHeader[this.dataset.ind];

    // Change The Parahraph Content
    document.querySelector("#features .feature .content p").textContent =
      featuresParagraph[this.dataset.ind];

    // Change The Image
    document.querySelector(
      "#features .feature .image img"
    ).src = `../images/illustration-features-tab-${+this.dataset.ind + 1}.svg`;

    // Add The Active
    document.querySelectorAll("#features nav ul li").forEach((li) => {
      li.classList.remove("active");
    });

    this.classList.add("active");
  });
});

// Toggle The Hidden & Block For FAQ Answers
document.querySelectorAll("#faq ul li").forEach((liEle) => {
  liEle.addEventListener("click", function () {
    this.lastElementChild.classList.toggle("hidden");
  });
});
