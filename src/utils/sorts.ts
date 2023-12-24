export const sortByCreatedAt = (arr: any[]) =>
  // @ts-expect-error cast type
  arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
