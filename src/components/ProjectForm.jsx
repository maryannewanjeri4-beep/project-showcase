import { useState } from "react";

export default function ProjectForm({onAdd}) {
  //Use state for accepting string data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("")

  //handle submit function(the bouncer at a club)
  function handleSubmit(event) {
    event.preventDefault(); //prevents reloading

    const cleanTitle = title.trim();
    const cleanDescription = description.trim();

    if (cleanTitle.length === 0) {
      setError("Please enter a project title");
      return;
    }

    if (cleanDescription.length === 0) {
      setError("Please enter a project description.");
      return;
    }

    //SPECIAL FEATURE:  (regex)
    const allowedCharacters = /^[a-zA-Z0-9\s.,!\-]+$/;

    if (!allowedCharacters.test(cleanTitle)) {
      setError(" Please use only letters and numbers.");
      return;
    }

    //verifies the .trim worked
    console.log({ title: cleanTitle, description: cleanDescription });

    setTitle("");
    setDescription("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>ADD PROJECT</h2>

      {/* FIXED RENDERING LOGIC: Only render the div if 'error' has content */}
      {error && (
        <div style={{ color: "red", marginBottom: "1rem" }} role="alert">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}