export interface ProgramItem {
  id: string;
  title: string;
  hindiTitle?: string;
  description: string;
  icon: string;
  fullDetails: string;
}

export interface InitiativeItem {
  id: string;
  title: string;
  description: string;
  location: string;
  impact: string;
  image: string;
  category: string;
}

export interface StoryItem {
  id: string;
  name: string;
  location: string;
  story: string;
  impact: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Education' | 'Community' | 'Volunteers' | 'Events' | 'Children' | 'Support Activities';
  image: string;
  date: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Stories' | 'Events' | 'Announcements' | 'Impact Updates' | 'Community Activities';
  date: string;
  summary: string;
  content: string;
  image: string;
}

export const NGO_INFO = {
  name: "World Help Foundation",
  hindiTagline: "हमारा संकल्प – सेवा, सहयोग और सशक्त समाज",
  tagline: "हर हाथ को सहायता, हर जीवन में आशा",
  location: "Dhanbad, Jharkhand, India",
  fullAddress: "Vanasthali Colony, Gali No.-6, Hanuman Vatika, Near Bhuifore Mandir, Dhanbad (Jharkhand)",
  registrationNo: "2026/DHAN/1126/BK4/107",
  establishedUnder: "Registered under Indian Trust Act 1882",
  founder: "Shri Govind Mohan (Govind Mishra)",
  founderRole: "Founder & Social Activist (Practitioner Tax Consultant)",
  founderImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
  phones: ["+91 7004451493", "+91 8969581492", "+91 7004299042"],
  emails: ["worldhelpfoundationdhanbad@gmail.com", "aashuhmaprasad101@yahoo.in"],
  upiId: "worldhelpfoundation@sbi / sbi.qr@sbi",
  bankDetails: {
    bankName: "State Bank of India (SBI Payments)",
    accountName: "World Help Foundation",
    accountNumber: "[Editable Account Number]",
    ifscCode: "[Editable IFSC Code]",
    branch: "Dhanbad Main Branch"
  },
  socialLinks: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#"
  }
};

export const PROGRAMS: ProgramItem[] = [
  {
    id: "health",
    title: "Health & Medical Support",
    hindiTitle: "स्वास्थ्य सेवा",
    description: "Rural health check-up camps, free medicine distribution, health awareness campaigns, and primary healthcare access for needy families.",
    icon: "HeartPulse",
    fullDetails: "Our health initiatives focus on reaching remote and economically disadvantaged rural pockets in Dhanbad. We organize regular medical camps where doctors examine patients, provide essential medicines free of cost, and spread vital health and hygiene awareness."
  },
  {
    id: "education",
    title: "Education Support",
    hindiTitle: "शिक्षा",
    description: "Providing books, notebooks, school uniforms, tuition support, and digital learning tools to underprivileged children.",
    icon: "BookOpen",
    fullDetails: "Education is the foundation of a bright future. We ensure that financial constraints do not stop children from learning. We distribute school kits, support higher-aspiring students, and bridge the educational divide in underserved neighborhoods."
  },
  {
    id: "cleanliness",
    title: "Community Cleanliness & Hygiene",
    hindiTitle: "स्वच्छता एवं सफाई",
    description: "Village and public space cleaning drives, sanitation awareness campaigns, and promoting clean environmental habits.",
    icon: "Sparkles",
    fullDetails: "A clean environment is essential for a healthy community. World Help Foundation organizes regular cleanliness drives in villages and public places, educating communities about waste management and disease prevention."
  },
  {
    id: "food",
    title: "Food & Essential Distribution",
    hindiTitle: "भोजन एवं आवश्यक सामान वितरण",
    description: "Free meals, ration kits, and daily essentials distribution for destitute individuals and vulnerable families.",
    icon: "Utensils",
    fullDetails: "No one should sleep hungry. We actively distribute nutritional food packages, grocery ration kits, and essential supplies to daily wage earners, elderly individuals, and families facing severe economic hardship."
  },
  {
    id: "winter",
    title: "Winter Warmth & Clothing Drive",
    hindiTitle: "वस्त्र एवं कंबल वितरण",
    description: "Distributing warm blankets, woolens, and clothes to protect vulnerable populations during harsh winter months.",
    icon: "ShieldAlert",
    fullDetails: "During biting winters, homeless and vulnerable villagers often suffer from lack of warm clothing. Our annual blanket and winter wear distribution drives bring comfort and warmth to hundreds of families across Jharkhand."
  },
  {
    id: "student",
    title: "Student Empowerment & Guidance",
    hindiTitle: "छात्र सहायता",
    description: "Career mentoring, laptops/tablets support for meritorious poor students, and educational guidance.",
    icon: "GraduationCap",
    fullDetails: "We empower talented students from underprivileged backgrounds by providing educational guidance, mentoring, and support with digital tools like tablets and computers to help them excel in competitive times."
  }
];

export const INITIATIVES: InitiativeItem[] = [
  {
    id: "init-1",
    title: "Winter Blanket & Warm Clothes Distribution",
    description: "Reaching elderly citizens, women, and children in rural Dhanbad with warm woolen blankets and winter attire.",
    location: "Bhembad & Surrounding Villages, Jharkhand",
    impact: "500+ families provided with winter protection",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?auto=format&fit=crop&q=80&w=800",
    category: "Community Support"
  },
  {
    id: "init-2",
    title: "Child Education & School Kit Drive",
    description: "Equipping underprivileged children with school bags, notebooks, pencils, and uniforms for the new academic session.",
    location: "Dhanbad District",
    impact: "350+ children supported with learning materials",
    image: "/src/assets/images/regenerated_image_1790234492727.jpg",
    category: "Education"
  },
  {
    id: "init-3",
    title: "Rural Health & Medical Checkup Camp",
    description: "Free health screening, blood pressure monitoring, doctor consultations, and free medicines for rural communities.",
    location: "Hanuman Vatika & Rural Camps",
    impact: "400+ villagers examined and treated",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    category: "Health Care"
  },
  {
    id: "init-4",
    title: "Nutrition & Food Ration Distribution",
    description: "Providing monthly ration kits consisting of rice, pulses, cooking oil, and nutrition to daily-wage laborer families.",
    location: "Bhembad, Jharkhand",
    impact: "250+ households supported",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
    category: "Essential Assistance"
  }
];

export const STORIES: StoryItem[] = [
  {
    id: "story-1",
    name: "Sunita Kumari (Verified Beneficiary)",
    location: "Bhembad, Jharkhand",
    story: "Sunita is a bright 10-year-old student whose family faced severe financial hardship after losing regular agricultural work. With school supplies and ongoing mentorship from World Help Foundation, she returned to school with renewed confidence and is now top of her class.",
    impact: "Continued uninterrupted education for 2 consecutive years.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "story-2",
    name: "Ramesh Mahto & Family",
    location: "Dhanbad Rural",
    story: "During the biting winter cold, Ramesh's elderly parents lacked sufficient warm clothing. The winter blanket distribution drive by World Help Foundation provided immediate relief and warmth during the harshest weeks of the year.",
    impact: "Secured health and dignity during winter.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "story-3",
    name: "Aakash Soren",
    location: "Jharkhand",
    story: "Aspiring to become a science teacher, Aakash lacked textbooks and guidance. Through our student assistance program, he received books and career counseling that paved his way toward higher secondary education.",
    impact: "Achieved 88% in board examinations with foundation support.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Official Campaign Banner & Registration Details",
    category: "Events",
    image: "/src/assets/images/regenerated_image_1790234492727.jpg",
    date: "2026"
  },
  {
    id: "gal-2",
    title: "Winter Blanket & Warm Clothing Distribution Camp in Dhanbad",
    category: "Support Activities",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?auto=format&fit=crop&q=80&w=800",
    date: "January 2026"
  },
  {
    id: "gal-3",
    title: "Founder Shri Govind Mohan Distributing Blankets at Community Center",
    category: "Community",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
    date: "January 2026"
  },
  {
    id: "gal-4",
    title: "Underprivileged Children Receiving School Kits & Books",
    category: "Education",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    date: "February 2026"
  },
  {
    id: "gal-5",
    title: "Classroom Study Session with Students on Mats",
    category: "Education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    date: "February 2026"
  },
  {
    id: "gal-6",
    title: "Founder Interacting and Distributing Aid Packs to Children",
    category: "Children",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    date: "March 2026"
  },
  {
    id: "gal-7",
    title: "Volunteer Team with Community Women & Families",
    category: "Volunteers",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800",
    date: "March 2026"
  },
  {
    id: "gal-8",
    title: "Heartwarming Beneficiary Moments in Rural Jharkhand",
    category: "Community",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    date: "April 2026"
  },
  {
    id: "gal-9",
    title: "Rural Health & Medical Awareness Camp",
    category: "Support Activities",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    date: "May 2026"
  },
  {
    id: "gal-10",
    title: "Ration Kit & Essential Food Distribution",
    category: "Support Activities",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
    date: "June 2026"
  },
  {
    id: "gal-11",
    title: "Youth Volunteer Meeting & Community Planning at Hanuman Vatika",
    category: "Volunteers",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    date: "July 2026"
  },
  {
    id: "gal-12",
    title: "Smile and Joy on Children's Faces During Notebook Distribution",
    category: "Children",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800",
    date: "August 2026"
  },
  {
    id: "gal-13",
    title: "Village Cleanliness & Environmental Sanitation Drive",
    category: "Community",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800",
    date: "September 2026"
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-1",
    title: "World Help Foundation Expands Rural Education Support Across 10 Villages",
    category: "Impact Updates",
    date: "September 15, 2026",
    summary: "Our dedicated volunteer team successfully distributed educational kits and notebooks to over 350 children in remote Dhanbad villages.",
    content: "World Help Foundation has successfully expanded its educational outreach to 10 additional rural villages in Jharkhand. Over 350 children received complete school kits including notebooks, stationery, and learning guides. Founder Shri Govind Mohan emphasized that sustained education is the most powerful tool to eradicate poverty and build self-reliant communities.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "news-2",
    title: "Annual Winter Warmth Campaign Reaches 500+ Vulnerable Households",
    category: "Community Activities",
    date: "January 20, 2026",
    summary: "Bringing warmth and dignity to elderly citizens and daily wage laborers through our annual blanket distribution drive.",
    content: "The biting winter cold in rural Jharkhand poses severe health risks to elderly citizens and vulnerable families. World Help Foundation organized a massive blanket and warm clothing distribution drive in Bhembad and nearby areas, ensuring more than 500 households stayed warm and protected.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "news-3",
    title: "Free Medical Health Camp Organised at Hanuman Vatika Center",
    category: "Events",
    date: "August 10, 2026",
    summary: "Over 400 villagers benefited from free clinical examinations, blood pressure tests, and essential medicine distribution.",
    content: "In partnership with volunteer medical professionals, World Help Foundation hosted a comprehensive health checkup camp. Villagers received expert consultations, diagnosis, and free medicines for common seasonal ailments and chronic health management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  }
];

export const FAQS = [
  {
    question: "What does World Help Foundation do?",
    answer: "World Help Foundation is a registered NGO based in Dhanbad, Jharkhand, dedicated to supporting underprivileged children, helpless individuals, and vulnerable families through education support, health camps, winter clothing drives, food distribution, and community welfare initiatives."
  },
  {
    question: "Where is World Help Foundation located?",
    answer: "Our main office and activity center is located at Vanasthali Colony, Gali No.-6, Hanuman Vatika, Near Bhuifore Mandir, Dhanbad, Jharkhand, India."
  },
  {
    question: "How can I donate or support your initiatives?",
    answer: "You can support our mission by making a direct contribution via UPI, bank transfer, or online payment. All funds are transparently utilized for education, child welfare, winter relief, and medical camps as outlined in our donation transparency section."
  },
  {
    question: "How can I become a volunteer?",
    answer: "We welcome passionate individuals, students, and professionals to join us as volunteers. You can fill out our online Volunteer Registration form on the 'Get Involved' or 'Volunteer' page to select your area of interest and availability."
  },
  {
    question: "Is World Help Foundation a registered organization?",
    answer: "Yes, World Help Foundation is officially registered under the Indian Trust Act 1882 with Registration Number: 2026/DHAN/1126/BK4/107."
  },
  {
    question: "How can my company or CSR organization partner with you?",
    answer: "We actively collaborate with corporate entities, educational institutions, CSR foundations, and community groups. Visit our 'Partner With Us' page or contact us directly at our official phone numbers or email addresses."
  },
  {
    question: "Who is the founder of World Help Foundation?",
    answer: "The organization was founded by Shri Govind Mohan (Govind Mishra), a dedicated social activist and practitioner tax consultant committed to community service and social upliftment."
  }
];
