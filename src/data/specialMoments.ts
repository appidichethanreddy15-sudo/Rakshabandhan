export interface SpecialMoment {
  id: string;
  icon: string;
  badge: string;
  title: string;
  preview: string;
  fullStory: string;
  isNightMemory?: boolean;
  image?: string;
}

export const specialMoments: SpecialMoment[] = [
  {
    id: "night-memory",
    icon: "🌙",
    badge: "Special Memory",
    title: "One night I'll never forget",
    preview: "Spending that day at your home is a memory I keep very close to my heart...",
    fullStory: "Spending that day at your home is a memory I keep very close to my heart—we talked, laughed, shared little things, and simply enjoyed being together. Later that night, while we were sleeping, we both held each other’s hands, a moment we both knew and shared. ❤️ The next morning, you were still asleep when you called me to sit beside you, and you held my hand tightly again while you were sleeping. I felt an indescribable happiness and comfort in that little moment, even though I couldn't put my feelings into words. Later that day, I became so emotional that I couldn't control what I was feeling. It was such a simple moment, but I kept thinking about it for almost a week—it became one of those memories I never want to forget. ❤️",
    isNightMemory: true,
    image: "/images/night-memory.jpg"
  },
  {
    id: "never-told",
    icon: "❤️",
    badge: "Unspoken Words",
    title: "I never told you this...",
    preview: "There were days when your random message saved me from drowning in my thoughts.",
    fullStory: "There were times over these past three years when I was dealing with heavy things that I didn't have the energy to explain to anyone. But just seeing your name pop up on my screen, or listening to a 30-second silly voice note about what happened to you, pulled me straight out of my own head. You didn't even know you were rescuing me, but you did. Every single time.",
    image: "/images/sunset_siblings_evening.jpg"
  },
  {
    id: "silly-fight",
    icon: "😂",
    badge: "Sibling Moments",
    title: "You probably don't remember this fight...",
    preview: "We argued so fiercely over something so utterly meaningless.",
    fullStory: "We once had this huge argument where both of us refused to back down. We were typing in capital letters, throwing dramatic one-liners, and acting like we were enemies in a courtroom drama. And then literally two hours later, you texted me asking if I had eaten dinner yet. That's our relationship in a nutshell—we can fight fiercely, but the love and care never drops for a second.",
    image: "/images/memory3.jpg"
  },
  {
    id: "became-family",
    icon: "🫂",
    badge: "Turning Point",
    title: "This is when I knew you were family.",
    preview: "It wasn't a grand event; it was a quiet moment of absolute trust.",
    fullStory: "People often ask how someone you aren't related to by blood can become your sister. For me, it happened when I realized I never had to filter myself around you. I didn't have to pretend to be happy when I wasn't, I didn't have to hide my flaws, and I didn't have to apologize for having a rough day. The moment you accepted me completely as I am, you stopped being a friend and permanently became my sister.",
    image: "/images/siblings_sunset_walk.jpg"
  },
  {
    id: "everyday-talks",
    icon: "📱",
    badge: "Everyday Magic",
    title: "Our everyday conversations.",
    preview: "From morning greetings to late-night rants, you are my daily person.",
    fullStory: "In approximately three years, there have only been about 10 days where we didn't talk. Think about that for a second. Across more than a thousand days, almost every single day has included you. From the most mundane updates like what we had for lunch, to deep emotional talks about life and fears, you are the person I instinctively reach for first.",
    image: "/images/memory4.jpg"
  }
];

export interface HiddenCard {
  id: number;
  prompt: string;
  revealedText: string;
  sealColor: string;
}

export const hiddenCards: HiddenCard[] = [
  {
    id: 1,
    prompt: "“I never told you this...”",
    revealedText: "Whenever you share your worries or cry about something, I feel it deeply in my chest. I may not always find the perfect words to comfort you, but I always silently pray that life treats you with nothing but softness and immense happiness.",
    sealColor: "from-[#F7E6E8] to-[#F3D5D9]"
  },
  {
    id: 2,
    prompt: "“You probably don't remember this...”",
    revealedText: "That one time you called me out on a mistake and told me the bitter truth without sugarcoating it. Most people just agree to be polite, but you cared enough about me to correct me. That's when I knew you were a true sister for life.",
    sealColor: "from-[#FAF6F0] to-[#F5EFEB]"
  },
  {
    id: 3,
    prompt: "“There is one thing I wish I had said that day...”",
    revealedText: "Thank you for choosing to stay in my life and for never giving up on our bond, even when things were chaotic or misunderstood. Having you as my Bangarammmm is one of the best gifts life has ever given me.",
    sealColor: "from-[#FBF4DE] to-[#F3E8C4]"
  }
];
