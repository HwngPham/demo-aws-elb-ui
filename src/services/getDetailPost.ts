import { API_DOMAIN } from "../utils";

export const getDetailPost = async (postId: string) => {
  try {
    const res = await fetch(API_DOMAIN + "/posts/" + postId, {});
    const data = await res.json();

    return data.result ?? {};
  } catch (e) {
    console.error(e);
    return {};
  }
};
