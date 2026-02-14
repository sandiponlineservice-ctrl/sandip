const leads = [
  {
    name: "Glow Haven Salon",
    industry: "Salon",
    city: "Toronto",
    country: "Canada",
    yearsInBusiness: 5,
    size: "small",
    description: "Boutique salon targeting young professionals.",
    platforms: {
      website: { has: true, link: "https://glowhaven.example.com" },
      instagram: {
        has: true,
        link: "https://instagram.com/glowhaven",
        followers: "8.3k",
        created: "2019-05-12",
        activity: "consistent",
      },
      facebook: {
        has: true,
        link: "https://facebook.com/glowhaven",
        followers: "2.1k",
        created: "2019-06-03",
        activity: "consistent",
      },
      youtube: { has: false },
      linkedin: { has: false },
      tiktok: {
        has: true,
        link: "https://tiktok.com/@glowhaven",
        followers: "5.7k",
        created: "2021-02-20",
        activity: "inconsistent",
      },
      snapchat: { has: false },
      x: { has: false },
    },
  },
  {
    name: "Skyline Grand Hotel",
    industry: "Hotel",
    city: "Dubai",
    country: "UAE",
    yearsInBusiness: 18,
    size: "famous",
    description: "Luxury hotel with global clientele and events.",
    platforms: {
      website: { has: true, link: "https://skylinegrand.example.com" },
      instagram: {
        has: true,
        link: "https://instagram.com/skylinegrand",
        followers: "126k",
        created: "2014-08-10",
        activity: "consistent",
      },
      facebook: {
        has: true,
        link: "https://facebook.com/skylinegrand",
        followers: "98k",
        created: "2012-03-05",
        activity: "consistent",
      },
      youtube: {
        has: true,
        link: "https://youtube.com/@skylinegrand",
        followers: "24k",
        created: "2016-11-01",
        activity: "consistent",
      },
      linkedin: {
        has: true,
        link: "https://linkedin.com/company/skylinegrand",
        followers: "44k",
        created: "2011-04-21",
        activity: "consistent",
      },
      tiktok: {
        has: true,
        link: "https://tiktok.com/@skylinegrand",
        followers: "66k",
        created: "2020-01-15",
        activity: "consistent",
      },
      snapchat: {
        has: true,
        link: "https://snapchat.com/add/skylinegrand",
        followers: "12k",
        created: "2019-07-18",
        activity: "inconsistent",
      },
      x: {
        has: true,
        link: "https://x.com/skylinegrand",
        followers: "71k",
        created: "2013-06-14",
        activity: "consistent",
      },
    },
  },
  {
    name: "City Bite Restaurant",
    industry: "Restaurant",
    city: "Lisbon",
    country: "Portugal",
    yearsInBusiness: 2,
    size: "small",
    description: "Fast-growing casual dining with strong food content.",
    platforms: {
      website: { has: true, link: "https://citybite.example.com" },
      instagram: {
        has: true,
        link: "https://instagram.com/citybite",
        followers: "12k",
        created: "2023-01-30",
        activity: "consistent",
      },
      facebook: { has: false },
      youtube: { has: false },
      linkedin: { has: false },
      tiktok: {
        has: true,
        link: "https://tiktok.com/@citybite",
        followers: "28k",
        created: "2023-03-02",
        activity: "consistent",
      },
      snapchat: {
        has: true,
        link: "https://snapchat.com/add/citybite",
        followers: "3k",
        created: "2023-04-19",
        activity: "inconsistent",
      },
      x: { has: false },
    },
  },
  {
    name: "Pearl Smile Dental",
    industry: "Dentist",
    city: "Sydney",
    country: "Australia",
    yearsInBusiness: 9,
    size: "small",
    description: "Family dental clinic with local awareness campaigns.",
    platforms: {
      website: { has: true, link: "https://pearlsmile.example.com" },
      instagram: {
        has: true,
        link: "https://instagram.com/pearlsmile",
        followers: "3.9k",
        created: "2018-09-10",
        activity: "inconsistent",
      },
      facebook: {
        has: true,
        link: "https://facebook.com/pearlsmile",
        followers: "4.4k",
        created: "2017-02-11",
        activity: "consistent",
      },
      youtube: {
        has: true,
        link: "https://youtube.com/@pearlsmile",
        followers: "870",
        created: "2020-06-07",
        activity: "inconsistent",
      },
      linkedin: {
        has: true,
        link: "https://linkedin.com/company/pearlsmile",
        followers: "1.2k",
        created: "2016-01-09",
        activity: "consistent",
      },
      tiktok: { has: false },
      snapchat: { has: false },
      x: { has: false },
    },
  },
  {
    name: "PrimeCoat Painting",
    industry: "Painting Company",
    city: "Chicago",
    country: "USA",
    yearsInBusiness: 13,
    size: "small",
    description: "Residential and commercial painting with high review score.",
    platforms: {
      website: { has: true, link: "https://primecoat.example.com" },
      instagram: { has: false },
      facebook: {
        has: true,
        link: "https://facebook.com/primecoat",
        followers: "1.8k",
        created: "2015-08-25",
        activity: "inconsistent",
      },
      youtube: {
        has: true,
        link: "https://youtube.com/@primecoat",
        followers: "2.3k",
        created: "2017-03-12",
        activity: "consistent",
      },
      linkedin: {
        has: true,
        link: "https://linkedin.com/company/primecoat",
        followers: "2.6k",
        created: "2014-11-20",
        activity: "consistent",
      },
      tiktok: { has: false },
      snapchat: { has: false },
      x: {
        has: true,
        link: "https://x.com/primecoat",
        followers: "980",
        created: "2016-09-03",
        activity: "inconsistent",
      },
    },
  },
  {
    name: "BlueRoute Travel Agency",
    industry: "Travel Agency",
    city: "Nairobi",
    country: "Kenya",
    yearsInBusiness: 7,
    size: "small",
    description: "Adventure-focused travel agency for African safaris.",
    platforms: {
      website: { has: false },
      instagram: {
        has: true,
        link: "https://instagram.com/blueroute",
        followers: "11k",
        created: "2019-10-01",
        activity: "consistent",
      },
      facebook: {
        has: true,
        link: "https://facebook.com/blueroute",
        followers: "8.2k",
        created: "2018-02-18",
        activity: "consistent",
      },
      youtube: {
        has: true,
        link: "https://youtube.com/@blueroute",
        followers: "4.7k",
        created: "2020-01-28",
        activity: "inconsistent",
      },
      linkedin: { has: false },
      tiktok: {
        has: true,
        link: "https://tiktok.com/@blueroute",
        followers: "19k",
        created: "2021-12-11",
        activity: "consistent",
      },
      snapchat: { has: false },
      x: {
        has: true,
        link: "https://x.com/blueroute",
        followers: "3.4k",
        created: "2018-06-30",
        activity: "inconsistent",
      },
    },
  },
];

const platforms = [
  "website",
  "instagram",
  "facebook",
  "youtube",
  "linkedin",
  "tiktok",
  "snapchat",
  "x",
];

const filterElements = {
  industry: document.getElementById("industryFilter"),
  city: document.getElementById("cityFilter"),
  country: document.getElementById("countryFilter"),
  age: document.getElementById("ageFilter"),
  size: document.getElementById("sizeFilter"),
  website: document.getElementById("websiteFilter"),
  activity: document.getElementById("activityFilter"),
};

const leadContainer = document.getElementById("leadContainer");
const resultCount = document.getElementById("resultCount");
const leadTemplate = document.getElementById("leadTemplate");

function ageBucket(yearsInBusiness) {
  if (yearsInBusiness <= 3) return "new";
  if (yearsInBusiness <= 10) return "growing";
  return "established";
}

function hasConsistentActivity(lead) {
  return platforms.some(
    (platform) =>
      lead.platforms[platform]?.has &&
      lead.platforms[platform]?.activity === "consistent",
  );
}

function hasInconsistentActivity(lead) {
  return platforms.some(
    (platform) =>
      lead.platforms[platform]?.has &&
      lead.platforms[platform]?.activity === "inconsistent",
  );
}

function applyFilters() {
  const industry = filterElements.industry.value;
  const city = filterElements.city.value.trim().toLowerCase();
  const country = filterElements.country.value.trim().toLowerCase();
  const age = filterElements.age.value;
  const size = filterElements.size.value;
  const website = filterElements.website.value;
  const activity = filterElements.activity.value;

  const filtered = leads.filter((lead) => {
    const matchesIndustry = industry === "all" || lead.industry === industry;
    const matchesCity = !city || lead.city.toLowerCase().includes(city);
    const matchesCountry = !country || lead.country.toLowerCase().includes(country);
    const matchesAge = age === "all" || ageBucket(lead.yearsInBusiness) === age;
    const matchesSize = size === "all" || lead.size === size;
    const matchesWebsite =
      website === "all" ||
      (website === "yes" ? lead.platforms.website.has : !lead.platforms.website.has);

    const matchesActivity =
      activity === "all" ||
      (activity === "consistent"
        ? hasConsistentActivity(lead)
        : hasInconsistentActivity(lead));

    return (
      matchesIndustry &&
      matchesCity &&
      matchesCountry &&
      matchesAge &&
      matchesSize &&
      matchesWebsite &&
      matchesActivity
    );
  });

  renderLeads(filtered);
}

function formatPlatform(name, data) {
  const title = name.charAt(0).toUpperCase() + name.slice(1);

  if (!data?.has) {
    return `<div class="platform"><strong>${title}</strong>: <span class="no">No</span></div>`;
  }

  const details = [
    `<a href="${data.link}" target="_blank" rel="noreferrer">${data.link}</a>`,
  ];

  if (data.followers) details.push(`followers: ${data.followers}`);
  if (data.created) details.push(`created: ${data.created}`);
  if (data.activity) details.push(`activity: ${data.activity}`);

  return `<div class="platform"><strong>${title}</strong>: <span class="yes">Yes</span> — ${details.join(
    " | ",
  )}</div>`;
}

function renderLeads(data) {
  leadContainer.innerHTML = "";
  resultCount.textContent = `${data.length} businesses found`;

  data.forEach((lead) => {
    const clone = leadTemplate.content.cloneNode(true);

    clone.querySelector(".business-name").textContent = lead.name;
    clone.querySelector(".size-badge").textContent = lead.size;
    clone.querySelector(
      ".meta",
    ).textContent = `${lead.industry} • ${lead.city}, ${lead.country} • ${lead.yearsInBusiness} years in business`;
    clone.querySelector(".description").textContent = lead.description;

    const presence = clone.querySelector(".presence");
    presence.innerHTML = platforms
      .map((platform) => formatPlatform(platform, lead.platforms[platform]))
      .join("");

    leadContainer.appendChild(clone);
  });
}

function populateIndustryFilter() {
  const industries = [...new Set(leads.map((lead) => lead.industry))].sort();
  industries.forEach((industry) => {
    const option = document.createElement("option");
    option.value = industry;
    option.textContent = industry;
    filterElements.industry.appendChild(option);
  });
}

Object.values(filterElements).forEach((element) => {
  element.addEventListener("input", applyFilters);
  element.addEventListener("change", applyFilters);
});

populateIndustryFilter();
renderLeads(leads);
