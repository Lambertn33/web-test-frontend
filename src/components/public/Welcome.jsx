import React, {useEffect} from "react";

export default function Welcome() {
  useEffect(() => {
    const authenticatedUser = localStorage.getItem("currentUser");
    if (authenticatedUser) {
      window.location.href="/protected";
    }
  }, []);
  return (
    <div className="p-5 text-center bg-light">
      <h1 className="mb-3">Welcome</h1>
      <h4 className="mb-3">Home Page for non authenticated-users</h4>
    </div>
  );
}
