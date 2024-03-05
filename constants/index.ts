// NAVIGATION
export const NAV_LINKS = [
  { href: "/product", key: "product", label: "Product" },
  { href: "/keyboards", key: "keyboards", label: "Keyboards" },
  { href: "/accessories", key: "accessories", label: "Accessories" },
  { href: "/about", key: "About", label: "About" },
];

export const STORES = [
  {
    title: "Mong Kok",
    image: "/store1.png",
    variant: "green",
    description: "",
  },
  {
    title: "Bankstown",
    image: "/store3.png",
    variant: "green",
    description: "",
  },
  {
    title: "Mascot",
    image: "/store2.png",
    variant: "green",
    description: "",
  },
  {
    title: "Tuen Mun",
    image: "/store4.png",
    variant: "orange",
    description: "",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Community",
    links: ["HKCCF", "TECHSPO", "CSE", "GeekForums"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Phone", value: "+00 0000-0000" },
    { label: "Email", value: "GeekKeys@mail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: ["/facebook.svg", "/instagram.svg", "/twitter.svg", "/youtube.svg"],
};

export const FAQS = [
  {
    id: 1,
    title: "What is the difference between different keyboard switches",
    text: "Red or Black switches are linear, Brown or Clear switches are tactile, while Blue or Green switches are clicky.",
    active: true,
  },
  {
    id: 2,
    title: "what is the difference between different keyboard sizes",
    text: "The size of the keyboard is determined by the number of keys it has. The most common sizes are 60%, 65%, 75%, 80%, and 100%.",
    active: false,
  },
  {
    id: 3,
    title: "Can I try one of your keyboards before I buy?",
    text: "Sure, you can visit our store to try out our keyboards. We have a store in various locations.",
    active: false,
  },
  {
    id: 4,
    title: "Can I DIY my own keyboard?",
    text: "Of course! We have a wide range of DIY kits and parts for you to choose from. You can also visit our store to get help from our staff.",
    active: false,
  },
  {
    id: 5,
    title: "Can the staff help me to decide which keyboard is best for me?",
    text: "Yes, our staff are well-trained and knowledgeable about our products. They can help you to choose the best keyboard for you.",
    active: false,
  },
  {
    id: 6,
    title: "What is your return policy?",
    text: "We have a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.",
    active: false,
  },
  {
    id: 7,
    title: "I have another question!",
    text: "If you have any other questions, feel free to contact us at GeekKeys@mail.com. We are happy to help you!",
    active: false,
  },
];

export const brand = [
  { id: "1", title: "Paper", selected: false },
  { id: "2", title: "Metal", selected: false },
  { id: "3", title: "John's", selected: false },
  { id: "4", title: "Fiber", selected: false },
  { id: "5", title: "Rohan", selected: false },
];

export const KeyboardSize = [
  { id: "S1", title: "60%", selected: false },
  { id: "S2", title: "65%", selected: false },
  { id: "S3", title: "75%", selected: false },
  { id: "S4", title: "80%", selected: false },
  { id: "S5", title: "100%", selected: false },
];

export const Connectivity = [
  { id: "C1", title: "Wired", selected: false },
  { id: "C2", title: "Wireless", selected: false },
];
