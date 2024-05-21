export interface PersonFormFields {
  fullName: string;
  rating: number;
  hasAccreditation: boolean;
  expectedAmount: string;
  category: string;
  comment: string;
  files: {id: number, value: string}[];
}