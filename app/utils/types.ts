
export interface Blog {
  id: string,
  title: string,
  author: string,
  date: string;
  views: number;
  content: string;
  excerpt?: string;
  status: string,
  likes?: number,
  comments?: number
}

export interface TestSeries {
  data: string;
  response: string;
}

export interface Schedule {
  data: string;
  response: string;
}

export interface Course {
  id: string | number;
  text?: string;        
  title?: string;
  image?: string;       
  thumbnail?: string;
  type?: string;        
  link?: string ;
  price?: number;
  priceInWords?: string;
  moderators?: CourseModerator[];
  rating?: number;
  reviews?: number;
  enrolled?: number;
  duration?: string;
  features?: string[];
  qualification?: string; 
  description?: string;
  module?: string;
  weblink?: string;
  docs?: string;
  testseries?: TestSeries | null; 
  schedules?: Schedule[];
  alreadyPurchased?: string;
}

export interface CourseModerator {
  id: string | number;
  name?: string;
  fullName?: string;
  image?: string;
  expertise?: string;
  experience?: string;
  qualification?: string;
}

export type CourseApiResponse = Course[] | Course;