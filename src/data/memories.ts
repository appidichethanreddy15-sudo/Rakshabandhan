export interface StoryMemory {
  id: number;
  sectionNumber: number;
  title: string;
  image: string;
  date?: string;
  story: string;
  buttonText: string;
  closingNote?: string;
  isNicknames?: boolean;
}

export interface MemoryItem {
  id: number;
  date: string;
  title: string;
  teaser?: string;
  story: string;
  image: string;
  cardType?: 'polaroid' | 'scrapbook' | 'large' | 'overlapping';
  tag?: string;
  rotation?: string;
  additionalImages?: string[];
}

export const sequentialMemories: StoryMemory[] = [
  {
    id: 1,
    sectionNumber: 1,
    title: "Our Journey",
    image: "/images/memory1.jpg",
    story: "We met approximately three years ago as two strangers who didn't even know what the other person's life looked like. We weren't connected by blood, but somewhere along the way, through endless daily conversations, shared emotions, petty arguments, and genuine understanding, you became my sister. We shared our routines, our fears, our happiness, and our hardest days. Through every misunderstanding, we always came back to each other and stayed together. Today, you are truly family to me, and one of the most irreplaceable people in my entire life.",
    buttonText: "Continue Our Story →"
  },
  {
    id: 2,
    sectionNumber: 2,
    title: "The Celebration I Never Made for Anyone... I Made for You (Myy Gaajubomma 🥺💕)",
    image: "/images/birthday1.jpg",
    date: "Birthday Celebration",
    story: "I had never planned or put together this kind of birthday celebration for anyone in my life before. But when it came to you, I wanted to do it with all my heart. Seeing the genuine happiness on your face, capturing your unfiltered smile, and watching you enjoy every single second of that day meant more to me than words can describe. That photograph isn't just a picture of a birthday; it preserves the warmth and pure joy of a sister I will always cherish.",
    buttonText: "Continue →"
  },
  {
    id: 3,
    sectionNumber: 3,
    title: "The 3 Days That Felt Like 3 Months",
    image: "/images/memory8.jpg",
    story: "Three days may sound like nothing to someone else, but for us, those three days of silence felt like three long months. Not talking to you, not sharing my daily routine, and seeing my phone without your messages felt completely strange and empty. It made me realize just how deeply I depend on your presence in my everyday life. When we finally spoke again, all the tension melted away in seconds, and it proved to me that our bond is far stronger than any temporary disagreement.",
    buttonText: "Continue →"
  },
  {
    id: 4,
    sectionNumber: 4,
    title: "The Night I Never Forgot",
    image: "/images/night-memory.jpg",
    date: "A Night of Comfort & Trust",
    story: "Spending that day at your home is a memory I keep very close to my heart—we talked, laughed, shared little things, and simply enjoyed being together. Later that night, while we were sleeping, we both held each other’s hands, a moment we both knew and shared. ❤️\n\nThe next morning, you were still asleep when you called me to sit beside you, and you held my hand tightly again while you were sleeping.\n\nI felt an indescribable happiness and comfort in that little moment, even though I couldn't put my feelings into words.\n\nLater that day, I became so emotional that I couldn't control what I was feeling.\n\nIt was such a simple moment, but I kept thinking about it for almost a week—it became one of those memories I never want to forget. ❤️",
    buttonText: "Continue →"
  },
  {
    id: 5,
    sectionNumber: 5,
    title: "A Bike Ride With You",
    image: "/images/memory7.jpg",
    date: "Evening Ride",
    story: "I still remember the bike ride we took together. The gentle evening breeze, the road ahead, our conversations over the wind, and laughing at the most ordinary little things along the way. That ride showed me that it doesn't take a grand occasion to make a memory. Simply sitting beside you, enjoying the journey, and sharing genuine moments turns everyday hours into something truly unforgettable.",
    buttonText: "Continue →"
  },
  {
    id: 6,
    sectionNumber: 6,
    title: "The Art You Drew On My Hand",
    image: "/images/hand_art.jpg",
    date: "A Precious Little Memory",
    story: "I still smile whenever I look at this picture of the art you drew on my palm. You sat with so much care, concentration, and sweet sibling affection, carefully placing every dot and circle on my hand. It didn't matter what design it was—what mattered was the warmth of your hands, the laughter we shared while you were drawing, and the little piece of your care you left with me. It’s one of those innocent, sweet moments that I will always treasure in my heart.",
    buttonText: "Continue →"
  },
  {
    id: 7,
    sectionNumber: 7,
    title: "A Video Call That Made My Whole Day",
    image: "/images/memory11.jpg",
    date: "Special Video Call",
    story: "Whenever I see your name pop up for a video call, no matter how exhausted, stressed, or drained I was feeling, everything instantly gets lighter. Watching you talk animatedly with your hands, laugh at silly things, make funny faces, and just share your unfiltered day with me brings a genuine smile to my face that stays for hours. Seeing you happy on that screen reminded me that some of the best moments with you don't need a grand plan—just seeing your genuine smile across the screen is enough to brighten my entire world.",
    buttonText: "Continue →"
  },
  {
    id: 8,
    sectionNumber: 8,
    title: "You Have So Many Names... ❤️",
    image: "/images/maa_wrist.png",
    date: "All The Names I Call You",
    story: "Over these years, you somehow collected so many names from me. Some came from random moments, some from our fights, some from my affection, and some... I don't even remember how they started. 😂 But every name has a little story behind it, and every time I call you by one of them, it feels like I'm talking to a different little part of the person you became in my life.",
    closingNote: "Those were only a few of the memories I never want to forget. ❤️",
    buttonText: "Continue To The Next Chapter →",
    isNicknames: true
  }
];

export const memories: MemoryItem[] = sequentialMemories.map(m => ({
  id: m.id,
  date: m.date || '',
  title: m.title,
  story: m.story,
  image: m.image
}));
