import SanityBody from "./base";

interface Image {
  _type: "image";
  assert: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  backgroundInfo: string;
  email: string;
  name: string;
  phoneNumber: string;
  role: string;
  additionalRole: string;
  quote1: string;
  quote2: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
  category: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: Boolean;
  jobTitle: string;
  technologies: Technology[];
  points: string[];
}
