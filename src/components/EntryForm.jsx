import { useState } from "react";
import TopicSeletctor from "./TopicSelector";
import Popup from "reactjs-popup";
import CreateTopic from "./CreateTopic";

export default function EntryForm() {
  // the default topic should be the latest updated topic
  const [topic, setTopic] = useState(1);

  const [entry, setEntry] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("topic:", topic, "\n", "entry:", entry);
  };

  //substitute textarea with an inbrowser text editor.
  return (
    <form onSubmit={handelSubmit} action="#">
      <TopicSeletctor onChange={(e) => setTopic(e.target.value)} />
      <Popup
        trigger={<button id="createTopic">+</button>}
        position="center center"
      >
        <CreateTopic />
      </Popup>
      <textarea
        onChange={(e) => setEntry(e.target.value)}
        name="entry"
        id="entry"
        cols="30"
        rows="10"
      ></textarea>
      <input type="submit" value="Save" />
    </form>
  );
}
