import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = username;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
      }
    ); 
    return response.data.items;
    } catch {
    return null;
    }
    };
