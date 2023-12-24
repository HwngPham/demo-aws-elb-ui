import { Image } from ".";

export const sortImageByCreatedAt = (images: Image[]) =>
  // @ts-expect-error cast type
  images.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
