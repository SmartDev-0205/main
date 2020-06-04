export interface Project {
  id?: string;
  userId?: string;
  vendors?: {
    items: Array<any>
  };
  sourceLanguage?: string;
  targetLanguage?: string;
  serviceType?: string;
  dueDate?: string;
  status?: string;
  quoteStatus?: string;
  developmentStatus?: string;
  paymentStatus?: string;
  user?: any
  budget?: number;
  description?: string;
  fileUrl?: string;
  name?: string;
  translators?: Array<string>;
  workUrls?: Array<string>;
}
