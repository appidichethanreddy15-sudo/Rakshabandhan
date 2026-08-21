export interface MeaningItem {
  id: string;
  icon: string;
  title: string;
  shortSnippet: string;
  description: string;
  bgGradient: string;
  accentColor: string;
}

export const meaningCards: MeaningItem[] = [
  {
    id: "sister",
    icon: "❤️",
    title: "My Sister",
    shortSnippet: "Chosen by the heart, proven by time.",
    description: "We don't share the same blood, but you are my sister in every true sense of the word.",
    bgGradient: "from-[#FDF2F4] to-[#F7E6E8]",
    accentColor: "#C87D88"
  },
  {
    id: "safe-place",
    icon: "🫂",
    title: "My Safe Place",
    shortSnippet: "Where I never have to wear a mask.",
    description: "With you, I never have to wear a mask, pretend, or measure my words.",
    bgGradient: "from-[#FAF6F0] to-[#F5EFEB]",
    accentColor: "#A75360"
  },
  {
    id: "daily-person",
    icon: "📱",
    title: "My Daily Person",
    shortSnippet: "The first person I want to tell everything.",
    description: "You are always the very first person I instinctively text about anything that happens.",
    bgGradient: "from-[#FFFDF9] to-[#FBF4DE]",
    accentColor: "#D4AF37"
  },
  {
    id: "partner-in-nonsense",
    icon: "😂",
    title: "My Partner in Nonsense",
    shortSnippet: "The only one who matches my exact level of crazy.",
    description: "No one else in this world can make me laugh over silly things the way you do.",
    bgGradient: "from-[#EFEBF7] to-[#E3DCF2]",
    accentColor: "#8D72B8"
  },
  {
    id: "secret-keeper",
    icon: "🤫",
    title: "My Secret Keeper",
    shortSnippet: "A vault of things I would never tell anyone else.",
    description: "You know the deepest thoughts and fears I would never dare to share with anyone else.",
    bgGradient: "from-[#FDF2F4] to-[#FAF6F0]",
    accentColor: "#6C2231"
  },
  {
    id: "support-system",
    icon: "🤝",
    title: "My Support System",
    shortSnippet: "Standing strong whenever things wobble.",
    description: "Whenever I doubt myself, you remind me of who I am and stand faithfully by my side.",
    bgGradient: "from-[#FFFDF9] to-[#F3D5D9]",
    accentColor: "#C87D88"
  },
  {
    id: "family",
    icon: "🏠",
    title: "My Family",
    shortSnippet: "Home is not a place; it's people.",
    description: "You are the truest family I chose and discovered with my heart.",
    bgGradient: "from-[#FBF4DE] to-[#F7E6E8]",
    accentColor: "#B26673"
  },
  {
    id: "light-in-dark-days",
    icon: "✨",
    title: "The Light in My Dark Days",
    shortSnippet: "A steady flame during the stormy seasons.",
    description: "Your voice and presence bring warmth and strength whenever things feel heavy.",
    bgGradient: "from-[#FAF6F0] to-[#EFEBF7]",
    accentColor: "#D4AF37"
  }
];
