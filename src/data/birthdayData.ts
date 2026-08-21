export interface BirthdayPhoto {
  id: number;
  image: string;
  caption: string;
  date: string;
  story: string;
  rotation: string;
}

export const birthdayData = {
  title: "I still remember your birthday.",
  subtitle: "Some photographs don't just capture a moment. They preserve a feeling.",
  reflection: "Being there with you to celebrate your birthday was one of those days where everything felt genuinely special. Seeing your smile, seeing you genuinely happy, and sharing those laughs together meant more to me than words can describe. We took these pictures, talked about everything, and enjoyed every single second of the day. Whenever I look at these photos, I don't just see a birthday—I see the warmth, the joy, and the pure happiness of my sister that I will always cherish.",
  photos: [
    {
      id: 1,
      image: "/images/birthday1.jpg",
      caption: "Your bright, genuine birthday smile",
      date: "Birthday Celebration",
      story: "The moment you lit up and smiled for the camera. There was so much genuine warmth in the room that day.",
      rotation: "-rotate-2"
    },
    {
      id: 2,
      image: "/images/birthday2.jpg",
      caption: "The candid moment between conversations",
      date: "Special Moments",
      story: "We were laughing about something in the middle of talking, and I managed to capture this candid picture. These unposed moments are always my absolute favorites.",
      rotation: "rotate-3"
    },
    {
      id: 3,
      image: "/images/birthday3.jpg",
      caption: "A keepsake memory from the celebration",
      date: "Memories to Keep",
      story: "A snapshot of the celebration that I kept close. Days like this remind me how grateful I am to have you in my life.",
      rotation: "-rotate-1"
    }
  ]
};
