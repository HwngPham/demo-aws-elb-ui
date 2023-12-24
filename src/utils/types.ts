export interface Image {
  url: string;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  images: Image[];
  createdAt: string;
  updatedAt: string;
}
