import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    let query = username;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const data = await fetchUserData(query);
    if (data) {
      setUsers(data);
    } else {
      setError(true);
      setUsers([]);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          className="w-full p-2 border rounded"
          placeholder="Min Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Search
        </button>
      </form>
      {loading && <p className="mt-4">Loading...</p>}
      {error && (
        <p className="mt-4 text-red-500">Looks like we cant find the user.</p>
      )}
      <div className="mt-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded mb-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <h2 className="text-lg font-bold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;