export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubLink?: string;
  liveLink?: string;
};

export type MessagePayload = {
  name: string;
  email: string;
  message: string;
};

export type myprofile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
};
