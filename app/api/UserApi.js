const baseUrl = "http://10.10.8.22:1337/api/users";

export const getUsers = async (token) => {
  try {
    const response = await fetch(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("GETUSERS API ERROR: ", error);
  }
};

export const getImage = async (token) => {
  try {
    const response = await fetch(`${baseUrl}/me?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("GETUSERS API ERROR: ", error);
  }
};
