const baseUrl = "http://10.10.8.22:1337/api/upload/";
const tripUrl = "http://10.10.8.22:1337/api/images";

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

export const createTrip = async (data, token) => {
  try {
    const response = await fetch(tripUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("CREATE-TRIP API ERROR: ", error);
  }
};
