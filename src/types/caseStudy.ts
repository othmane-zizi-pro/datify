type Company = {
  name: string;
  logo: string;
  industry: string;
};

export type CaseStudy = {
  id: number;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  company: Company;
  tags: string[];
  publishDate: string;
}; 