const baseUrl = "http://10.10.8.22:1337/api/auth/local";

export const useLogin = async (user) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("LOGIN API ERROR: ", error);
  }
};
