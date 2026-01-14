export interface ContactInquiry {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  description: string;
  status: 'new' | 'read' | 'contacted' | 'closed';
  createdAt: Date;
}

export type NewContactInquiry = Omit<ContactInquiry, 'id' | 'status' | 'createdAt'>;
