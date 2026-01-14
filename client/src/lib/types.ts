export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Office {
  id: number;
  city: string;
  type: string;
  address: string;
  phones: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface ChinaMarket {
  id: number;
  name: string;
  location: string;
  region: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  details: string;
}
