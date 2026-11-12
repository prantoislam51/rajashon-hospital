// ===== সব তথ্য এখানে বদলান / EDIT ALL CONTENT HERE (en + bn) =====
// Photos go in /public/images. Missing photos show a green block.
export const site = {
  name: { en: 'Rajashon Hospital & Diagnostic Center', bn: 'রাজাসন হসপিটাল এন্ড ডায়াগনস্টিক সেন্টার' },
  short: { en: 'Rajashon Hospital', bn: 'রাজাসন হসপিটাল' },
  phones: ['01334-945270', '01334-945271', '01334-945272'], // verify with signboard
  email: 'rajashonhospital@gmail.com',
  whatsapp: '8801334945270',
  address: {
    en: 'Holding No-163, Moddho Rajashon, Birulia Road, Savar, Dhaka (beside Rajashon Government Primary School)',
    bn: 'হোল্ডিং নং-১৬৩ মধ্য রাজাসন, বিরুলিয়া রোড, সাভার, ঢাকা। (রাজাসন সরকারী প্রাইমারী স্কুল সংলগ্ন)',
  },
  mapQuery: 'Rajashon Hospital & Diagnostic Center Birulia Road Savar Dhaka',
  hero: {
    title: { en: 'Trusted diagnostics and care in the heart of Savar', bn: 'সাভারের প্রাণকেন্দ্রে নির্ভরযোগ্য ডায়াগনস্টিক ও চিকিৎসাসেবা' },
    text: { en: 'Rajashon Hospital & Diagnostic Center brings doctors, tests and reports under one roof. Book a serial by phone or WhatsApp.', bn: 'রাজাসন হসপিটাল এন্ড ডায়াগনস্টিক সেন্টারে ডাক্তার, পরীক্ষা ও রিপোর্ট এক জায়গায়। ফোন বা হোয়াটসঅ্যাপে সিরিয়াল নিন।' },
  },
  slides: [ // replace with your photos
    { img: 'slide-1.jpg', en: 'Our hospital building', bn: 'আমাদের হাসপাতাল ভবন' },
    { img: 'slide-2.jpg', en: 'Diagnostic laboratory', bn: 'ডায়াগনস্টিক ল্যাবরেটরি' },
    { img: 'slide-3.jpg', en: 'Patient waiting area', bn: 'রোগীদের অপেক্ষাকক্ষ' },
  ],
  about: {
    img: 'building.jpg',
    title: { en: 'Care for Savar, close to home', bn: 'সাভারবাসীর জন্য, আপনার কাছেই' },
    text: { en: 'We provide consultation with doctors and diagnostic services for patients of Savar and nearby areas. Replace this paragraph with your own story, founding year and mission.', bn: 'আমরা সাভার ও আশপাশের রোগীদের ডাক্তারের পরামর্শ ও ডায়াগনস্টিক সেবা দিয়ে থাকি। এই অংশে আপনার নিজের পরিচিতি, প্রতিষ্ঠার সাল ও লক্ষ্য লিখুন।' },
    points: [{ en: 'Experienced doctors', bn: 'অভিজ্ঞ ডাক্তারগণ' }, { en: 'Modern diagnostic tests', bn: 'আধুনিক ডায়াগনস্টিক পরীক্ষা' }, { en: 'Easy serial by phone', bn: 'ফোনে সহজ সিরিয়াল' }],
  },
  // SAMPLE doctors: replace with real data. `bmdc` shows only if filled.
  doctors: [
    // d = chamber days: 0 Sat, 1 Sun, 2 Mon, 3 Tue, 4 Wed, 5 Thu, 6 Fri. SAMPLE data: replace with real doctors.
    { name: { en: 'Dr. Sample Name', bn: 'ডা. নমুনা নাম' }, degrees: { en: 'MBBS, FCPS (add real degrees)', bn: 'এমবিবিএস, এফসিপিএস (আসল ডিগ্রি দিন)' }, specialty: { en: 'Medicine', bn: 'মেডিসিন' }, bmdc: '', d: [0,1,2,3,4,5], time: { en: '5:00 PM – 9:00 PM', bn: 'বিকাল ৫টা – রাত ৯টা' }, img: 'doctor-1.jpg' },
    { name: { en: 'Dr. Sample Name', bn: 'ডা. নমুনা নাম' }, degrees: { en: 'MBBS, DGO (add real degrees)', bn: 'এমবিবিএস, ডিজিও (আসল ডিগ্রি দিন)' }, specialty: { en: 'Gynecology', bn: 'গাইনি' }, bmdc: '', d: [1,3,5], time: { en: '4:00 PM – 8:00 PM', bn: 'বিকাল ৪টা – রাত ৮টা' }, img: 'doctor-2.jpg' },
    { name: { en: 'Dr. Sample Name', bn: 'ডা. নমুনা নাম' }, degrees: { en: 'MBBS, DCH (add real degrees)', bn: 'এমবিবিএস, ডিসিএইচ (আসল ডিগ্রি দিন)' }, specialty: { en: 'Child specialist', bn: 'শিশু বিশেষজ্ঞ' }, bmdc: '', d: [0,2,4], time: { en: '3:00 PM – 7:00 PM', bn: 'বিকাল ৩টা – সন্ধ্যা ৭টা' }, img: 'doctor-3.jpg' },
  ],
  services: [ // keep only what you offer
    { en: 'Doctor consultation', bn: 'ডাক্তারের পরামর্শ' }, { en: 'Pathology & lab tests', bn: 'প্যাথলজি ও ল্যাব টেস্ট' },
    { en: 'X-Ray', bn: 'এক্স-রে' }, { en: 'Ultrasonography', bn: 'আল্ট্রাসনোগ্রাফি' },
    { en: 'ECG', bn: 'ইসিজি' }, { en: 'Emergency support', bn: 'জরুরি সহায়তা' },
  ],
  reports: [ // add `time:{en,bn}` per item to show delivery time
    { en: 'Blood tests (CBC, sugar, lipid)', bn: 'রক্ত পরীক্ষা (সিবিসি, সুগার, লিপিড)' },
    { en: 'Urine & stool tests', bn: 'প্রস্রাব ও পায়খানা পরীক্ষা' },
    { en: 'X-Ray reports', bn: 'এক্স-রে রিপোর্ট' },
    { en: 'Ultrasonography reports', bn: 'আল্ট্রাসনোগ্রাফি রিপোর্ট' },
    { en: 'ECG reports', bn: 'ইসিজি রিপোর্ট' },
  ],
  // TESTS & PRICES. DEMO DATA: replace with your real tests, prices (taka) and times.
  // price: null shows "Call for price". Set testsDemo to false to hide the "demo" notice on the page.
  testsDemo: true,
  // Groups and categories for the tests filter. Add as many as you need; empty categories stay hidden.
  testGroups: {
    path: { en: 'Pathology', bn: 'প্যাথলজি' },
    img: { en: 'Imaging & scans', bn: 'ইমেজিং ও স্ক্যান' },
    heart: { en: 'Heart', bn: 'হার্ট' },
  },
  testCats: {
    blood: { g: 'path', en: 'Blood', bn: 'রক্ত' },
    diabetes: { g: 'path', en: 'Diabetes', bn: 'ডায়াবেটিস' },
    lipid: { g: 'path', en: 'Cholesterol & lipid', bn: 'কোলেস্টেরল ও লিপিড' },
    liver: { g: 'path', en: 'Liver', bn: 'লিভার' },
    kidney: { g: 'path', en: 'Kidney', bn: 'কিডনি' },
    thyroid: { g: 'path', en: 'Thyroid & hormone', bn: 'থাইরয়েড ও হরমোন' },
    urine: { g: 'path', en: 'Urine & stool', bn: 'প্রস্রাব ও পায়খানা' },
    chest: { g: 'img', en: 'Chest', bn: 'বুক' },
    abdomen: { g: 'img', en: 'Abdomen', bn: 'পেট' },
    head: { g: 'img', en: 'Head & brain', bn: 'মাথা ও মস্তিষ্ক' },
    bone: { g: 'img', en: 'Bones & joints', bn: 'হাড় ও জোড়া' },
    cardiac: { g: 'heart', en: 'Heart tests', bn: 'হার্টের পরীক্ষা' },
  },
  tests: [
    { cat: 'blood', en: 'CBC', bn: 'সিবিসি (CBC)', price: 400, report: { en: 'Same day', bn: 'একই দিন' }, prep: { en: 'No preparation needed', bn: 'প্রস্তুতি লাগে না' } },
    { cat: 'urine', en: 'Urine R/E', bn: 'ইউরিন আর/ই', price: 200, report: { en: 'Same day', bn: 'একই দিন' }, prep: { en: 'First morning urine preferred', bn: 'সকালের প্রথম প্রস্রাব ভালো' } },
    { cat: 'diabetes', en: 'Blood sugar (fasting)', bn: 'ব্লাড সুগার (ফাস্টিং)', price: 120, report: { en: '1 hour', bn: '১ ঘণ্টা' }, prep: { en: '8–12 hours fasting', bn: '৮–১২ ঘণ্টা খালি পেটে' } },
    { cat: 'diabetes', en: 'HbA1c', bn: 'এইচবিএ১সি (HbA1c)', price: 900, report: { en: 'Same day', bn: 'একই দিন' }, prep: { en: 'No preparation needed', bn: 'প্রস্তুতি লাগে না' } },
    { cat: 'lipid', en: 'Lipid profile', bn: 'লিপিড প্রোফাইল', price: 1000, report: { en: 'Same day', bn: 'একই দিন' }, prep: { en: '10–12 hours fasting', bn: '১০–১২ ঘণ্টা খালি পেটে' } },
    { cat: 'chest', en: 'X-Ray chest', bn: 'বুকের এক্স-রে', price: 600, report: { en: '30 minutes', bn: '৩০ মিনিট' }, prep: { en: 'Remove metal items', bn: 'ধাতব জিনিস খুলে রাখুন' } },
    { cat: 'abdomen', en: 'USG whole abdomen', bn: 'আল্ট্রাসনোগ্রাফি (সম্পূর্ণ পেট)', price: 900, report: { en: 'Same day', bn: 'একই দিন' }, prep: { en: 'Full bladder, as advised', bn: 'পূর্ণ মূত্রথলি, নির্দেশমতো' } },
    { cat: 'cardiac', en: 'ECG', bn: 'ইসিজি', price: 300, report: { en: 'Immediately', bn: 'তাৎক্ষণিক' }, prep: { en: 'No preparation needed', bn: 'প্রস্তুতি লাগে না' } },
  ],
};
