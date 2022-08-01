const baseUrl = "http://10.10.8.22:1337/api/upload/";

export const uploadImage = async (form) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: form,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("UPLOAD API ERROR: ", error);
  }
};
