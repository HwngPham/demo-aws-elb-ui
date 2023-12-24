import { API_DOMAIN, METHOD } from "../utils";

export const deletePost = async (postId: string) => {
  try {
    const res = await fetch(API_DOMAIN + "/posts/" + postId, {
      method: METHOD.DELETE,
    });
    const data = await res.json();

    return data.result ?? {};
  } catch (e) {
    console.error(e);
    return {};
  }
};
