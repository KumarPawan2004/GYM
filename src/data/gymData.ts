export interface TierPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  quarterlyPrice: number;
  popular?: boolean;
  vip?: boolean;
  description: string;
  features: string[];
  exclusivePerks: string[];
  badge: string;
}

export interface AmenityService {
  id: string;
  category: 'strength' | 'machines' | 'coaching' | 'functional' | 'recovery' | 'nutrition';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: string[];
  highlight: string;
}

export interface ClassSession {
  id: string;
  time: string;
  title: string;
  category: 'Strength' | 'Conditioning' | 'Boxing & Combat' | 'Mobility' | 'Hypertrophy';
  coach: string;
  intensity: 'Extreme' | 'High Intensity' | 'Technical' | 'All Levels';
  duration: string;
  zone: string;
}

export interface Trainer {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
  specialty: string[];
}

export interface Transformation {
  name: string;
  profession: string;
  achievement: string;
  timeframe: string;
  quote: string;
  stats: string;
}

export const MUSCLE_FITNESS_STATS = [
  { value: "5.0 ★", label: "Google Rating (50+ Reviews)", detail: "Ranked top fitness center in Kadma, Jamshedpur" },
  { value: "150 LBS", label: "Max Dumbbells & Barbells", detail: "Heavy iron dumbbells & Olympic calibrated weight plates" },
  { value: "Modern", label: "Machines & Cardio Zone", detail: "Full range of strength, aerobics, and fitness equipment" },
  { value: "6:30 AM", label: "To 10:00 PM Daily", detail: "Convenient morning & evening workout timings" }
];

export const GYM_LOCATION = {
  name: "Muscle Fitness Gym",
  owner: "Amit Kumar",
  rating: "5.0",
  reviewCount: 50,
  address: "Shani Mandir, near ECC Flats, Shiv Nagar, Bhatia Basti, Uliyan, Kadma, Jamshedpur, Jharkhand - 831005",
  shortAddress: "Shiv Nagar, Bhatia Basti, Kadma, Jamshedpur - 831005",
  plusCode: "R542+MP Jamshedpur, Jharkhand",
  phone: "+91 70045 84937",
  displayPhone: "070045 84937",
  email: "musclefitnessjsr@gmail.com",
  hours: "6:30 AM – 10:00 PM Daily",
  paymentMethods: ["Google Pay", "UPI", "Cash"],
  amenities: ["Restroom", "Google Pay", "Good for kids", "Cardio Zone", "Free Weights", "Personal Coaching", "Modern Equipment"]
};

export const MEMBERSHIP_TIERS: TierPlan[] = [
  {
    id: "standard",
    name: "Iron Access",
    tagline: "Full access to the gym floor, free weights, and cardio machines.",
    monthlyPrice: 120,
    quarterlyPrice: 320,
    annualPrice: 99,
    popular: false,
    description: "For dedicated lifters and fitness enthusiasts who want pure, uninterrupted access to quality strength equipment.",
    features: [
      "Access to complete gym floor and free weights section",
      "Full access to Olympic barbells and dumbbell racks",
      "Access to cardio and aerobic training zones",
      "Locker & restroom facilities",
      "Free initial fitness and body composition assessment",
      "Flexible workout schedule from 6:30 AM to 10:00 PM"
    ],
    exclusivePerks: [
      "1 Free Guest Workout Pass per month",
      "Google Pay & UPI instant contactless payments"
    ],
    badge: "Essential Gym Pass"
  },
  {
    id: "pro",
    name: "Muscle Pro Fitness",
    tagline: "Our most popular tier: complete training, diet chart & coach guidance.",
    monthlyPrice: 220,
    quarterlyPrice: 580,
    annualPrice: 180,
    popular: true,
    description: "Engineered for members who want structured progress, customized workout charts, and expert trainer guidance.",
    features: [
      "All features of the Iron Access gym tier",
      "Customized Workout & Diet Chart tailored to your goal",
      "Weekly trainer form check & progress tracking",
      "Aerobics & high-intensity fat loss conditioning",
      "Priority equipment access during peak hours",
      "Recovery guidance and posture alignment tips",
      "Complimentary locker service"
    ],
    exclusivePerks: [
      "2 Free Guest Workout Passes per month",
      "Direct guidance from Gym Owner & Senior Coaches",
      "10% off on all gym supplements & merchandise"
    ],
    badge: "Most Popular"
  },
  {
    id: "vip-black",
    name: "Muscle VIP Elite",
    tagline: "Personalized 1-on-1 coaching and VIP training care.",
    monthlyPrice: 450,
    quarterlyPrice: 1200,
    annualPrice: 380,
    vip: true,
    description: "The ultimate membership for those who demand dedicated 1-on-1 personal training, rapid physique transformation, and continuous support.",
    features: [
      "Dedicated 1-on-1 Personal Training with Senior Coach",
      "Personalized High-Protein Macro Diet & Supplement Plan",
      "Bi-weekly body measurement and fat percentage tracking",
      "Priority locker & shower suite access",
      "Direct WhatsApp access to Gym Owner & Head Coach",
      "Specialized Strength & Bodybuilding contest prep available",
      "Recovery & mobility stretching routines"
    ],
    exclusivePerks: [
      "Unlimited guest privileges anytime you train",
      "Complimentary gym kit storage",
      "VIP personal support desk"
    ],
    badge: "VIP Elite Tier"
  }
];

export const GYM_AMENITIES: AmenityService[] = [
  {
    id: "free-weights",
    category: "strength",
    title: "Heavy Iron & Olympic Arena",
    subtitle: "Heavy Lifting Ground for Serious Strength",
    description: "Equipped with custom Eleiko competition Olympic bars, calibrated steel plates, 8 heavy-duty power racks, deadlift platforms with band pegs, and dumbbells ranging from 5 lbs up to 150 lbs.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    specs: ["Eleiko IWF Certified Barbells", "Custom Urethane Dumbbells to 150 lbs", "8 Olympic Power Racks with Platforms", "Chalk stations & Deadlift Jacks"],
    highlight: "Zero Wait Time · Calibrated Iron"
  },
  {
    id: "machines-arsenal",
    category: "machines",
    title: "Arsenal Strength & Hammer Machines",
    subtitle: "Biomechanical Precision Hypertrophy",
    description: "Over 70 plate-loaded and pin-selected machines imported from Arsenal Strength, Prime Fitness, and Hammer Strength. Engineered for peak muscle isolation and zero joint strain.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
    specs: ["Arsenal Pendulum Squat & Hack Squat", "Prime Fitness Smart-Cam Cable Towers", "Hammer Strength Iso-Lateral Chest & Rows", "Glute Drive & Belt Squat Systems"],
    highlight: "World-Class Muscle Isolation"
  },
  {
    id: "personal-training",
    category: "coaching",
    title: "1-on-1 Elite Personal Training",
    subtitle: "Transformational Coaching Built Around You",
    description: "Our trainers are certified strength and conditioning specialists with proven track records in fat loss, muscle building, postural correction, and athletic conditioning.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
    specs: ["Personalized Workout Split Design", "Form Video Breakdown & Biomechanics", "Accountability & Weekly Check-ins", "Targeted Fat Loss & Hypertrophy"],
    highlight: "Guaranteed Measurable Results"
  },
  {
    id: "functional-turf",
    category: "functional",
    title: "High-Intensity Turf & Cardio Theatre",
    subtitle: "Speed, Stamina & Athletic Agility",
    description: "A 40-yard indoor sprint turf loaded with rogue dog sleds, battle ropes, plyo boxes, Woodway curved treadmills, Concept2 rowers, SkiErgs, and Assault air bikes.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    specs: ["40-Yard Sprint & Prowler Turf", "Woodway Curve Motorless Treadmills", "Concept2 Rowers, Bikes & SkiErgs", "Rogue Prowlers & Slam Balls"],
    highlight: "Explosive Athletic Conditioning"
  },
  {
    id: "recovery-spa",
    category: "recovery",
    title: "Post-Workout Steam & Sauna Spa",
    subtitle: "Deep Muscle Recovery & Detoxification",
    description: "Soothe sore muscle tissue and accelerate growth hormone release in our natural cedarwood Finnish sauna, eucalyptus-infused steam room, and hydrotherapy showers.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    specs: ["Cedarwood Finnish Dry Sauna (190°F)", "Eucalyptus Herbal Steam Chamber", "Cold Contrast Showers", "Private Executive Grooming Stations"],
    highlight: "Included in Pro & VIP Memberships"
  },
  {
    id: "fuel-bar",
    category: "nutrition",
    title: "Muscle Fitness Fuel & Shake Bar",
    subtitle: "Macro-Nutrient Smoothies & Supplements",
    description: "Refuel instantly after lifting. Gourmet whey isolate shakes, pre-workout elixirs, BCAA hydration, organic protein snacks, and chilled single-origin cold brews.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    specs: ["100% Whey Isolate Shakes", "Custom Macronutrient Blends", "Pre-Workout Stimulant & Pump Bar", "Healthy Meal Prep Grab & Go"],
    highlight: "Freshly Blended On Demand"
  }
];

export const SCHEDULE_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

export const MASTER_SCHEDULE: Record<string, ClassSession[]> = {
  Monday: [
    { id: "m1", time: "06:00 AM", title: "Morning Power MetCon", category: "Conditioning", coach: "Amit (Founder)", intensity: "High Intensity", duration: "50 min", zone: "Functional Turf" },
    { id: "m2", time: "07:30 AM", title: "Heavy Barbell Squat & Deadlift Clinic", category: "Strength", coach: "Coach Arjun", intensity: "Extreme", duration: "60 min", zone: "Olympic Arena" },
    { id: "m3", time: "12:30 PM", title: "Lunch-Hour Hypertrophy: Upper Body Blast", category: "Hypertrophy", coach: "Coach Vikram", intensity: "High Intensity", duration: "45 min", zone: "Arsenal Machine Bay" },
    { id: "m4", time: "06:00 PM", title: "Combat Boxing Conditioning & Pads", category: "Boxing & Combat", coach: "Coach Rohit", intensity: "High Intensity", duration: "50 min", zone: "Combat Zone" },
    { id: "m5", time: "07:30 PM", title: "Post-Work Heavy Push (Chest & Delts)", category: "Strength", coach: "Coach Arjun", intensity: "Extreme", duration: "60 min", zone: "Free Weight Zone" }
  ],
  Tuesday: [
    { id: "t1", time: "06:30 AM", title: "HIIT Sled & Sprint Circuit", category: "Conditioning", coach: "Coach Rohit", intensity: "High Intensity", duration: "45 min", zone: "Functional Turf" },
    { id: "t2", time: "09:00 AM", title: "Glute & Hamstring Hypertrophy Lab", category: "Hypertrophy", coach: "Coach Simran", intensity: "Extreme", duration: "55 min", zone: "Arsenal Machine Bay" },
    { id: "t3", time: "01:00 PM", title: "Spine Mobility & Deep Hip Decompression", category: "Mobility", coach: "Coach Simran", intensity: "Technical", duration: "40 min", zone: "Recovery Deck" },
    { id: "t4", time: "06:30 PM", title: "Heavy Back & Biceps Power Builder", category: "Strength", coach: "Amit (Founder)", intensity: "Extreme", duration: "60 min", zone: "Olympic Arena" }
  ],
  Wednesday: [
    { id: "w1", time: "06:00 AM", title: "Full-Body Functional Strength Engine", category: "Strength", coach: "Coach Arjun", intensity: "High Intensity", duration: "50 min", zone: "Functional Turf" },
    { id: "w2", time: "08:00 AM", title: "Bench Press & Shoulder Armor Masterclass", category: "Strength", coach: "Coach Vikram", intensity: "Extreme", duration: "60 min", zone: "Olympic Arena" },
    { id: "w3", time: "12:30 PM", title: "Cardio Shred: Assault Bike & Sled Prowler", category: "Conditioning", coach: "Coach Rohit", intensity: "High Intensity", duration: "40 min", zone: "Cardio Theatre" },
    { id: "w4", time: "07:00 PM", title: "Boxing Footwork & Core Strength", category: "Boxing & Combat", coach: "Coach Rohit", intensity: "Technical", duration: "50 min", zone: "Combat Zone" }
  ],
  Thursday: [
    { id: "th1", time: "06:30 AM", title: "Lower Body Quad Focus & Pendulum Squat", category: "Hypertrophy", coach: "Amit Kumar (Owner)", intensity: "Extreme", duration: "60 min", zone: "Strength Bay" },
    { id: "th2", time: "09:00 AM", title: "Metabolic Kettlebell Conditioning", category: "Conditioning", coach: "Coach Simran", intensity: "High Intensity", duration: "45 min", zone: "Functional Area" },
    { id: "th3", time: "06:00 PM", title: "Deadlift Mechanics & Posterior Power", category: "Strength", coach: "Coach Arjun", intensity: "Extreme", duration: "60 min", zone: "Free Weight Zone" }
  ],
  Friday: [
    { id: "f1", time: "06:30 AM", title: "Power Arm Farm & Shoulder Sculpt", category: "Hypertrophy", coach: "Coach Vikram", intensity: "High Intensity", duration: "50 min", zone: "Free Weight Zone" },
    { id: "f2", time: "12:30 PM", title: "Express Lunch Sweat: 30-Min EMOM", category: "Conditioning", coach: "Coach Rohit", intensity: "High Intensity", duration: "35 min", zone: "Cardio Zone" },
    { id: "f3", time: "06:30 PM", title: "Friday Night Power Hour & Primal Lifting", category: "Strength", coach: "Amit Kumar (Owner)", intensity: "Extreme", duration: "75 min", zone: "Barbell Arena" }
  ],
  Saturday: [
    { id: "sa1", time: "08:30 AM", title: "Muscle Fitness Super-Saturday Team Battle", category: "Conditioning", coach: "All Head Coaches", intensity: "Extreme", duration: "75 min", zone: "Entire Gym Floor" },
    { id: "sa2", time: "10:30 AM", title: "Weightlifting Technique & Squat Clinic", category: "Strength", coach: "Coach Arjun", intensity: "Technical", duration: "60 min", zone: "Barbell Arena" },
    { id: "sa3", time: "04:00 PM", title: "Full-Body Mobility, Core & Posture", category: "Mobility", coach: "Coach Simran", intensity: "All Levels", duration: "50 min", zone: "Recovery Deck" }
  ],
  Sunday: [
    { id: "su1", time: "09:00 AM", title: "Sunday Active Recovery & Core Stabilization", category: "Mobility", coach: "Coach Simran", intensity: "All Levels", duration: "50 min", zone: "Cardio Area" },
    { id: "su2", time: "11:00 AM", title: "Open Gym Lifters Showcase & Heavy Singles", category: "Strength", coach: "Amit Kumar (Owner)", intensity: "High Intensity", duration: "90 min", zone: "Free Weight Zone" }
  ]
};

export const TRAINERS: Trainer[] = [
  {
    name: "Amit Kumar",
    role: "Gym Owner & Head Strength Coach",
    credentials: "Elite Coaching Specialist · Kadma, Jamshedpur",
    bio: "Amit established Muscle Fitness Gym in Shiv Nagar, Bhatia Basti, Kadma with a mission to bring dedicated strength training, modern equipment, and real physique transformations to the community.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    specialty: ["Hypertrophy & Strength", "Body Transformations", "Personalized Coaching"]
  },
  {
    name: "Arjun Rawat",
    role: "Senior Strength & Power Coach",
    credentials: "State Powerlifting Record Holder · 8+ Years Coaching",
    bio: "Arjun specializes in building raw strength and bulletproof movement mechanics for beginners and experienced lifters alike.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    specialty: ["Barbell Biomechanics", "Squat & Deadlift Form", "Joint Resilience"]
  },
  {
    name: "Simran Kaur",
    role: "Head of Female Fitness & Aerobics",
    credentials: "ACE Certified · Certified Aerobics & Functional Trainer",
    bio: "Simran has trained hundreds of dedicated women and men, guiding them through body recomp, fat loss conditioning, postural correction, and aerobics.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    specialty: ["Fat Loss Conditioning", "Aerobics & Cardio", "Spine & Mobility"]
  },
  {
    name: "Vikram Sengupta",
    role: "Master Transformation & Diet Specialist",
    credentials: "Sports Nutritionist · Advanced Strength Coach",
    bio: "Vikram bridges the gap between intense training and clinical nutrition, ensuring every client achieves lean muscle without starvation diets.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    specialty: ["Metabolic Recomp", "Targeted Macro Dieting", "Advanced Muscle Isolation"]
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    name: "Devendra Mehta",
    profession: "Business Professional, Jamshedpur",
    achievement: "Lost 18kg Fat & Added 5kg Lean Muscle in 6 Months",
    timeframe: "6 Months with Coach Amit",
    quote: "Muscle Fitness Gym is the best gym in Kadma. Top-quality machines, clean environment, and coaches who actually guide your daily workout routines.",
    stats: "Body Fat: 28% → 12%"
  },
  {
    name: "Rhea Singhania",
    profession: "Working Professional & Runner",
    achievement: "Cured Chronic Back Pain & Gained 8kg Dense Muscle",
    timeframe: "4 Months with Coach Simran",
    quote: "The atmosphere here is respectful, clean, and motivating. The trainers pay real attention to form and the results speak for themselves.",
    stats: "Squat 1RM: 40kg → 95kg"
  },
  {
    name: "Karan Malhotra",
    profession: "Local Entrepreneur",
    achievement: "Transformed from Skinny-Fat to Chiseled 12% Bodyfat",
    timeframe: "5 Months with Coach Arjun",
    quote: "Muscle Fitness Gym became my daily anchor in Jamshedpur. Outstanding energy, supportive staff, and great equipment.",
    stats: "Deadlift: 100kg → 210kg"
  }
];

export const FAQS = [
  {
    question: "Where is Muscle Fitness Gym located?",
    answer: "We are conveniently located at Shani Mandir, near ECC Flats, Shiv Nagar, Bhatia Basti, Kadma, Jamshedpur - 831005."
  },
  {
    question: "What are the gym operating hours?",
    answer: "Muscle Fitness Gym is open daily from 6:30 AM to 10:00 PM (Monday through Sunday) for morning and evening training sessions."
  },
  {
    question: "Do you offer a Free Trial or Day Pass?",
    answer: "Yes! Prospective members can claim a complimentary 1-Day Trial Pass through our website. You get full access to the gym floor, weights, and cardio machines."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept Google Pay, UPI, Bank Transfer, and Cash for hassle-free membership payments."
  },
  {
    question: "Is personal training and diet support available?",
    answer: "Yes. Our Gym Owner Amit Kumar and certified trainers provide 1-on-1 personal coaching, customized workout charts, and personalized diet plans."
  }
];
