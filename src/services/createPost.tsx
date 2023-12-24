import { API_DOMAIN, METHOD } from "../utils";

export const createPost = async (payload: Record<string, any>) => {
  try {
    const res = await fetch(API_DOMAIN + "/posts", {
      method: METHOD.POST,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    console.log(res);
    return res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};
