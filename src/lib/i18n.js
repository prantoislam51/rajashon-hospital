export const L = (o) => `<span class="en">${o.en}</span><span class="bn">${o.bn}</span>`;
export const tel = (p) => 'tel:+88' + p.replace('-', '');
export const img = (f) => `background-image:url(/images/${f}),linear-gradient(135deg,#0b5d3b,#083b2a)`;
export const days = [{en:'Sat',bn:'শনি'},{en:'Sun',bn:'রবি'},{en:'Mon',bn:'সোম'},{en:'Tue',bn:'মঙ্গল'},{en:'Wed',bn:'বুধ'},{en:'Thu',bn:'বৃহ'},{en:'Fri',bn:'শুক্র'}];
export const u = {
  home:{en:'Home',bn:'হোম'}, about:{en:'About',bn:'পরিচিতি'}, doctors:{en:'Doctors',bn:'ডাক্তার'}, services:{en:'Services',bn:'সেবা'}, reports:{en:'Reports',bn:'রিপোর্ট'}, contact:{en:'Contact',bn:'যোগাযোগ'},
  book:{en:'Book appointment',bn:'অ্যাপয়েন্টমেন্ট নিন'}, serial:{en:'Call for serial',bn:'সিরিয়ালের জন্য কল'}, all:{en:'All',bn:'সব'},
  none:{en:'No doctor listed for this day.',bn:'এই দিনে কোনো ডাক্তার তালিকাভুক্ত নেই।'},
  deg:{en:'Degrees',bn:'ডিগ্রি'}, tm:{en:'Chamber time',bn:'চেম্বারের সময়'}, bmdc:{en:'BMDC reg.',bn:'বিএমডিসি নিবন্ধন'}, det:{en:'View details',bn:'বিস্তারিত দেখুন'},
  addr:{en:'Address',bn:'ঠিকানা'}, mail:{en:'Email',bn:'ইমেইল'}, map:{en:'Open in Google Maps',bn:'গুগল ম্যাপে দেখুন'},
  ap:{en:'Request an appointment',bn:'অ্যাপয়েন্টমেন্টের অনুরোধ'}, apn:{en:'Fill this in and send it on WhatsApp. We will confirm your serial.',bn:'ফর্মটি পূরণ করে হোয়াটসঅ্যাপে পাঠান। আমরা সিরিয়াল নিশ্চিত করব।'},
  an:{en:'Patient name',bn:'রোগীর নাম'}, ap2:{en:'Mobile number',bn:'মোবাইল নম্বর'}, ad:{en:'Doctor',bn:'ডাক্তার'}, ada:{en:'Preferred date',bn:'পছন্দের তারিখ'}, send:{en:'Send on WhatsApp',bn:'হোয়াটসঅ্যাপে পাঠান'},
  topdoc:{en:'Our doctors',bn:'আমাদের ডাক্তার'}, alld:{en:'See all doctors',bn:'সব ডাক্তার দেখুন'}, alls:{en:'See all services',bn:'সব সেবা দেখুন'}, more:{en:'Read more about us',bn:'আমাদের সম্পর্কে আরও জানুন'},
  svc:{en:'Our services',bn:'আমাদের সেবাসমূহ'}, rep:{en:'Tests and reports',bn:'যে পরীক্ষা ও রিপোর্ট হয়'}, inside:{en:'Inside our center',bn:'আমাদের সেবার ছবি'},
  dsub:{en:'Pick a day to see who sits. Open a card for full details.',bn:'বার বেছে দেখুন কে বসছেন। পুরো তথ্যের জন্য কার্ড খুলুন।'},
  ssub:{en:'What you can get at Rajashon Hospital & Diagnostic Center.',bn:'রাজাসন হসপিটাল এন্ড ডায়াগনস্টিক সেন্টারে যা যা পাবেন।'},
  rsub:{en:'Reports we prepare. Ask by phone for delivery time.',bn:'আমাদের এখানে যেসব রিপোর্ট তৈরি হয়। রিপোর্ট পাওয়ার সময় ফোনে জানুন।'},
  csub:{en:'Call, message on WhatsApp or visit us in Savar.',bn:'কল করুন, হোয়াটসঅ্যাপে লিখুন অথবা সাভারে সরাসরি আসুন।'},
};
Object.assign(u, {
  apt:{en:'Appointment',bn:'অ্যাপয়েন্টমেন্ট'}, age:{en:'Age',bn:'বয়স'}, cdays:{en:'Chamber days',bn:'চেম্বারের দিন'},
  s1:{en:'Choose a doctor',bn:'ডাক্তার বেছে নিন'}, s2:{en:'Choose a date',bn:'তারিখ বেছে নিন'}, s3:{en:'Your details',bn:'আপনার তথ্য'},
  avl:{en:'Doctor available',bn:'ডাক্তার আছেন'}, nav:{en:'Not available',bn:'ডাক্তার নেই'}, mo:{en:'Month',bn:'মাস'}, yr:{en:'Year',bn:'বছর'},
  asub:{en:'Pick a doctor, choose a green day and send your request.',bn:'ডাক্তার বেছে সবুজ দিনটি নির্বাচন করুন এবং অনুরোধ পাঠান।'},
  csub2:{en:'Need a serial? Use the appointment page.',bn:'সিরিয়াল লাগলে অ্যাপয়েন্টমেন্ট পেজে যান।'},
});
