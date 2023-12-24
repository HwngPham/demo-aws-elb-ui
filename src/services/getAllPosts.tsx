import { API_DOMAIN } from "../utils";

export const getAllPosts = async () => {
  try {
    const res = await fetch(API_DOMAIN + "/posts");
    const data = await res.json();

    return data.result ?? [];
  } catch (e) {
    console.error(e);
    return [];
  }
};
