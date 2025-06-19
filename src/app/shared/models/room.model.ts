export interface Room {
  id: number; 
  title: string;
  description: string;
  images: string[]; 
  price: number;
  location: string;
  roomsLeft: number;
  rating: number;
}