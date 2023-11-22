import { useState } from "react";

export default function CreateTopic() {
  const [topic, setTopic] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(topic);
  };

  return (
    <form action="#" onSubmit={handelSubmit}>
      <input type="text" onChange={(e) => setTopic(e.target.value)} />
      <input type="submit" value="Add" />
    </form>
  );
}
