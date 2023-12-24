import { API_DOMAIN, METHOD } from "../utils";

export const uploadFile = async (postId: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file, file.name);
  try {
    const res = await fetch(`${API_DOMAIN}/posts/${postId}/files`, {
      method: METHOD.POST,
      body: formData,
    });

    return res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};
