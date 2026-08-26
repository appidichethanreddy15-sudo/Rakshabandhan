export interface MemoryItem {
  id: number;
  date: string;
  title: string;
  image: string;
  description: string;
  tag: string;
  story?: string;
  teaser?: string;
  cardType?: 'polaroid' | 'large' | 'tall' | 'wide' | 'split';
  rotation?: string;
  additionalImages?: string[];
}

export interface StoryMemory {
  id: number;
  sectionNumber: number;
  title: string;
  image: string;
  story: string;
  date?: string;
  buttonText: string;
  closingNote?: string;
  isNicknames?: boolean;
  storyHighlight?: string; // A sentence within story to be rendered with emotional accent styling
}

// Full 7 Sequential Scrapbook Memories for Chapter 3
export const sequentialMemories: StoryMemory[] = [
  {
    id: 1,
    sectionNumber: 1,
    title: "Our Journey",
    image: "/images/image.png",
    story: "We met approximately three years ago as two strangers who didn't even know what the other person's life looked like. We weren't connected by blood, but somewhere along the way, through endless daily conversations, shared emotions, petty arguments, and genuine understanding, you became my sister. We shared our routines, our fears, our happiness, and our hardest days. Through every misunderstanding, we always came back to each other and stayed together. Today, you are truly family to me, and one of the most irreplaceable people in my entire life.",
    buttonText: "Continue Our Story"
  },
  {
    id: 2,
    sectionNumber: 2,
    title: "The Celebration I Never Made for Anyone... I Made for You (Naa Gaajubomma 🥺💕)",
    image: "/images/Birthday.png",
    date: "Birthday Celebration",
    story: "I had never planned or put together this kind of birthday celebration for anyone in my life before. But when it came to you, I wanted to do it with all my heart. Seeing the genuine happiness on your face, capturing your unfiltered smile, and watching you enjoy every single second of that day meant more to me than words can describe. That photograph isn't just a picture of a birthday; it preserves the warmth and pure joy of a sister I will always cherish.",
    buttonText: "Continue"
  },
  {
    id: 3,
    sectionNumber: 3,
    title: "A Name I Could Never Forget",
    image: "/images/chalk.jpeg",
    story: "I wrote your name on a simple piece of chalk, but for me, it was never just a piece of art. ❤️\n\nEvery stroke carried a little piece of my love, because your name holds countless memories and emotions in my heart.\n\nIt may look small and ordinary to others, but I made it with feelings I could never fully put into words.\n\nSometimes, the simplest things we create with love become the memories we hold closest to our hearts. 🥹❤️",
    buttonText: "Continue"
  },
  {
    id: 4,
    sectionNumber: 4,
    title: "A Bike Ride With You",
    image: "/images/ride.png",
    date: "Evening Ride",
    story: "I still remember the bike ride we took together. The gentle evening breeze, the road ahead, our conversations over the wind, and laughing at the most ordinary little things along the way. That ride showed me that it doesn't take a grand occasion to make a memory. Simply sitting beside you, enjoying the journey, and sharing genuine moments turns everyday hours into something truly unforgettable.",
    buttonText: "Continue"
  },
  {
    id: 5,
    sectionNumber: 5,
    title: "The Art You Drew On My Hand",
    image: "/images/handart.jpeg",
    date: "A Precious Little Memory",
    story: "I still smile whenever I look at this picture of the art you drew on my palm. You sat with so much care, concentration, and sweet sibling affection, carefully placing every dot and circle on my hand. It didn't matter what design it was—what mattered was the warmth of your hands, the laughter we shared while you were drawing, and the little piece of your care you left with me. It’s one of those innocent, sweet moments that I will always treasure in my heart.",
    buttonText: "Continue"
  },
  {
    id: 6,
    sectionNumber: 6,
    title: "Just Seeing You Was Enough to Make My Day ❤️",
    image: "/images/vc.png",
    date: "Special Video Call",
    story: "For the past month, our little video calls have become one of the sweetest parts of my day. We don't even need audio sometimes—we just look at each other, chat, smile, and somehow that alone makes everything feel a little better. I know I keep asking you for a VC because there is something about seeing you that I can never really explain; for a moment, everything feels peaceful, and I just want to keep looking at you forever. You always tell me that if we do this every day, we might get too attached and eventually find it difficult to sleep without each other, and maybe you're right. But if I ever have to choose between my own sadness and seeing you suffer or miss me, I'll always choose my own. Nenu ayina badha paduthanu kani, ninnu matram badha padanivvanu. ❤️",
    storyHighlight: "Nenu ayina badha paduthanu kani, ninnu matram badha padanivvanu.",
    buttonText: "Continue"
  },
  {
    id: 7,
    sectionNumber: 7,
    title: "You Have So Many Names... ❤️",
    image: "/images/maaname.jpeg",
    date: "All The Names I Call You",
    story: "Over these years, you somehow collected so many names from me. Some came from random moments, some from our fights, some from my affection, and some... I don't even remember how they started. 😂 But every name has a little story behind it, and every time I call you by one of them, it feels like I'm talking to a different little part of the person you became in my life.",
    closingNote: "Those were only a few of the memories I never want to forget. ❤️",
    buttonText: "Continue To The Next Chapter",
    isNicknames: true
  }
];

export const memories: MemoryItem[] = sequentialMemories.map(m => ({
  id: m.id,
  date: m.date || '',
  title: m.title,
  image: m.image,
  description: m.story,
  tag: 'Special Memory'
}));
