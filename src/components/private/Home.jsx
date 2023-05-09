import React, { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const authenticatedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (authenticatedUser) {
      setUser(authenticatedUser);
    }
  }, []);
  return (
    <div className="p-5 text-center bg-light">
      <h1 className="mb-3">Welcome {user.names}</h1>
      <h4 className="mb-3">Users Page</h4>
    </div>
  );
}
