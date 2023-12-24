import { API_DOMAIN, METHOD } from "../utils";

export const createPost = async (payload: Record<string, any>) => {
  try {
    const res = await fetch(API_DOMAIN + "/posts", {
      method: METHOD.POST,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log(data);
    return data.result ?? {};
  } catch (e) {
    console.error(e);
    return {};
  }
};
