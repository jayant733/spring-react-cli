import api from "../api/axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    api.get("/api/hello")
      .then(res => setMsg(res.data))
      .catch(() => setMsg("Unauthorized"));
  }, []);

  return <h1 className="p-4">{msg}</h1>;
}
