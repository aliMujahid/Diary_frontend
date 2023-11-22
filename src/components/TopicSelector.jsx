export default function TopicSeletctor() {
  const TOPICS = [
    { name: "Dream Journal", id: 1 },
    { name: "Diary", id: 2 },
    { name: "Thoughts", id: 3 },
    { name: "Auto-biography", id: 4 },
  ];

  return (
    <>
      <select name="topics" id="topics">
        {TOPICS.map((topic) => {
          return (
            <option key={topic.id} value="{topic.id}">
              {topic.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
