export const fetchGitHubData = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });
    return response.json();
  };