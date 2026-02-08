import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
  if (err.response?.status === 401) {
    alert("Invalid email or password");
  } else {
    alert("Server error. Try again later.");
    console.error(err);
  }
}

  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-64"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border p-2 w-64"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
}
