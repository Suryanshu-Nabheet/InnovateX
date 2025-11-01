// Leadership data
export interface LeadershipProfile {
  name: string;
  role: string;
  bio: string;
  category: 'school' | 'alumni';
  qualifications?: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

export const SCHOOL_LEADERS: LeadershipProfile[] = [
  {
    name: 'Mr. Shailendra Mohan Jha',
    role: 'Principal',
    qualifications: 'M.A. (Economics), B.Ed, C.S Inter',
    bio: 'Ensuring academic excellence and maintaining the highest standards of education and student development.',
    category: 'school',
    image: '/Leaders/principal.jpg',
    linkedin: 'https://www.linkedin.com/in/shailendra-mohan-jha-3710899b?originalSubdomain=in',
  },
  {
    name: 'Mrs. Ranjana',
    role: 'Vice Principal',
    qualifications: 'M.A. (Sociology), M.Ed',
    bio: 'Innovative pedagogy and hands-on learning to inspire curiosity and results.',
    category: 'school',
    image: '/Leaders/vice-principle-mam.png',
  },
  {
    name: 'Mr. Amit Kumar',
    role: 'Vice Principal',
    qualifications: 'M.A. (Geography), B.Ed, M.B.A',
    bio: 'Driving culture, discipline, and student growth through collaborative leadership.',
    category: 'school',
    image: '/Leaders/vice-principle.png',
    linkedin: 'https://www.linkedin.com/in/amit-sinha-a11a9b122/',
    twitter: 'https://x.com/amitsinhajharia?t=JBUj67xvgHgJk3_6Uj-4FA&s=03',
  },
];

export const ALUMNI_LEADERS: LeadershipProfile[] = [
  {
    name: 'Suryanshu Nabheet',
    role: 'Leader in the Group',
    bio: 'As the President of InnovateX, Suryanshu took the initiative to build a vibrant CS community, empowering peers in coding and tech innovation. A passionate developer, he organizes hackathons and mentors on AI projects, bridging school learning with real-world applications.',
    category: 'alumni',
  },
  {
    name: 'Rakshit Ranjan',
    role: 'Group Leader',
    bio: 'As a Group Leader in InnovateX, Rakshit works with peers to convince principals and lead collaborative tech events and workshops. With expertise in web development and cybersecurity, he supports group initiatives and alumni networks, ensuring the club\'s growth and sustainability.',
    category: 'alumni',
  },
];

