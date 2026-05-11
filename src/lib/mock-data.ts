import room01 from "@/assets/real-rooms/room-01.jpeg";
import room02 from "@/assets/real-rooms/room-02.jpeg";
import room03 from "@/assets/real-rooms/room-03.jpeg";
import room04 from "@/assets/real-rooms/room-04.jpeg";
import room05 from "@/assets/real-rooms/room-05.jpeg";
import room06 from "@/assets/real-rooms/room-06.jpeg";
import room07 from "@/assets/real-rooms/room-07.jpeg";
import room08 from "@/assets/real-rooms/room-08.jpeg";
import room09 from "@/assets/real-rooms/room-09.jpeg";
import room10 from "@/assets/real-rooms/room-10.jpeg";
import room11 from "@/assets/real-rooms/room-11.jpeg";
import room12 from "@/assets/real-rooms/room-12.jpeg";

export const IMAGES = {
  hero: room01,
  lobby: room10,
  spa: room06,
  dining: room08,
  pool: room03,
  room1: room01,
  room2: room02,
  room3: room03,
  lounge: room11,
  gym: room09,
  events: room05,
  butler: room12,
};

export type Room = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  amenities: string[];
  originalPrice: number;
  offerPrice: number;
  price: number;
  size: string;
  guests: number;
  beds: string;
  view: string;
  limitedTag: string;
};

const baseRooms: Omit<Room, "price">[] = [
  {
    id: "royal-amber",
    name: "Royal Amber Room",
    tagline: "Calm elegance with warm wood tones",
    description:
      "A thoughtfully styled king room with curated lighting, handcrafted bed detailing and a quiet premium ambiance.",
    image: room01,
    amenities: ["King Bed", "Wi-Fi", "Smart TV", "AC", "Room Service", "Work Desk"],
    originalPrice: 2000,
    offerPrice: 1300,
    size: "280 sq ft",
    guests: 2,
    beds: "1 King",
    view: "City",
    limitedTag: "Only 3 rooms left",
  },
  {
    id: "lavender-premium",
    name: "Lavender Premium",
    tagline: "Soft pastel palette and deep rest",
    description:
      "A serene premium room ideal for couples looking for comfort, privacy and a refined stay experience.",
    image: room02,
    amenities: ["King Bed", "Wi-Fi", "TV", "AC", "Wardrobe", "Tea Setup"],
    originalPrice: 2000,
    offerPrice: 1300,
    size: "300 sq ft",
    guests: 2,
    beds: "1 King",
    view: "Courtyard",
    limitedTag: "Limited rooms available",
  },
  {
    id: "azure-signature",
    name: "Azure Signature",
    tagline: "Bright space with modern lines",
    description:
      "A signature modern room balancing style and practicality with premium bedding and cinematic interior lighting.",
    image: room03,
    amenities: ["King Bed", "AC", "Smart TV", "Fast Wi-Fi", "Private Bath", "Mirror Desk"],
    originalPrice: 2000,
    offerPrice: 1300,
    size: "320 sq ft",
    guests: 2,
    beds: "1 King",
    view: "Street",
    limitedTag: "Only 2 rooms left",
  },
  {
    id: "skyline-deluxe",
    name: "Skyline Deluxe",
    tagline: "Luxury essentials with calm blue design",
    description:
      "A deluxe room with polished finishes, spacious layout and all comforts for business and leisure stays.",
    image: room07,
    amenities: ["King Bed", "AC", "TV", "Hot Water", "Wi-Fi", "Storage"],
    originalPrice: 2000,
    offerPrice: 1300,
    size: "330 sq ft",
    guests: 3,
    beds: "1 King",
    view: "City",
    limitedTag: "Selling fast",
  },
  {
    id: "rosewood-studio",
    name: "Rosewood Studio",
    tagline: "Warm pink tones with intimate comfort",
    description:
      "A cozy studio-style luxury room, designed for short premium stays with refined textures and mood lighting.",
    image: room08,
    amenities: ["Queen Bed", "AC", "TV", "Wi-Fi", "Room Service", "Private Bath"],
    originalPrice: 2000,
    offerPrice: 1300,
    size: "260 sq ft",
    guests: 2,
    beds: "1 Queen",
    view: "Interior",
    limitedTag: "Best deal today",
  },
  {
    id: "ivory-prestige",
    name: "Ivory Prestige",
    tagline: "Minimal luxury with premium bedding",
    description:
      "A clean, luxurious room curated for guests who appreciate understated design and excellent rest quality.",
    image: room12,
    amenities: ["King Bed", "High-Speed Wi-Fi", "AC", "TV", "Mirror", "Luggage Rack"],
    originalPrice: 2000,
    offerPrice: 1300,
    size: "290 sq ft",
    guests: 2,
    beds: "1 King",
    view: "City",
    limitedTag: "Limited time discount",
  },
];

export const ROOMS: Room[] = baseRooms.map((r) => ({ ...r, price: r.offerPrice }));

export type Service = {
  id: string;
  name: string;
  short: string;
  description: string;
  image: string;
  hours: string;
};
export const SERVICES: Service[] = [
  {
    id: "spa",
    name: "Luxury Spa",
    short: "Rejuvenation",
    description: "Signature therapies and recovery rituals.",
    image: room06,
    hours: "07:00 — 22:00",
  },
  {
    id: "dining",
    name: "Fine Dining",
    short: "Chef-curated",
    description: "Elegant dining crafted with local ingredients.",
    image: room08,
    hours: "12:00 — 23:00",
  },
  {
    id: "pool",
    name: "Infinity Pool",
    short: "Skyline vibe",
    description: "A cinematic waterline for sunset moments.",
    image: room03,
    hours: "06:00 — 21:00",
  },
  {
    id: "lounge",
    name: "Rooftop Lounge",
    short: "Evening leisure",
    description: "Comfort cocktails and ambient music nights.",
    image: room11,
    hours: "17:00 — 00:00",
  },
];

export const GALLERY = [room04, room05, room06, room09, room10, room11, room02, room03];

export type Testimonial = { quote: string; author: string; role: string };
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Beautifully maintained rooms and an incredibly smooth booking experience. Feels premium from first click.",
    author: "Riya Sharma",
    role: "Weekend Traveler",
  },
  {
    quote:
      "The interiors are classy, the service is warm, and the value at this offer price is outstanding.",
    author: "Aditya Mehra",
    role: "Business Guest",
  },
  {
    quote:
      "One of the most elegant stays in this budget segment. The vibe feels far above the price point.",
    author: "Naina Kapoor",
    role: "Lifestyle Creator",
  },
];

export const STATS = [
  { value: 12, suffix: "+", label: "Luxury room layouts" },
  { value: 40, suffix: "%", label: "Offer savings" },
  { value: 24, suffix: "/7", label: "Guest support" },
  { value: 4.8, suffix: "/5", label: "Average rating" },
];

export const TIMELINE = [
  {
    year: "2018",
    title: "Hotel Sanraj Inn launches",
    text: "Opened with a mission to deliver affordable luxury stays.",
  },
  {
    year: "2021",
    title: "Rooms upgraded",
    text: "Complete interior redesign with modern premium finishes.",
  },
  {
    year: "2024",
    title: "Guest-first booking",
    text: "Introduced streamlined digital-first booking experience.",
  },
];

export const FAQS = [
  {
    q: "What time is check-in and check-out?",
    a: "Check-in starts at 1:00 PM and check-out is by 11:00 AM.",
  },
  {
    q: "Is this price inclusive of taxes?",
    a: "The room offer price is ₹1300 per night before taxes. Taxes are shown in booking summary.",
  },
  {
    q: "Do you offer early check-in?",
    a: "Early check-in is subject to availability. You can request it during booking confirmation.",
  },
];
