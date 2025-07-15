export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type Accomplishment = {
  title: string;
  description: string;
  year?: string;
};

export type Education = {
  degree: string;
  institution: string;
  year?: string;
  description?: string;
};

export type TeamMember = {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: SocialLink[];
  accomplishments: Accomplishment[];
  education: Education[];
}; 