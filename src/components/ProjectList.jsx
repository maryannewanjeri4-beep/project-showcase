import { useState } from "react";
import ProjectItem from "./ProjectItem.jsx";

export default function ProjectList({ projects = [], loading, error }) {
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();

  const filtered = projects.filter((project) => {
    const currentTitle = project.title.toLowerCase();
    const currentDescription = project.description.toLowerCase();

    if (currentTitle.includes(term)) {
      return true;
    }

    if (currentDescription.includes(term)) {
      return true;
    }

    return false;
  });

  return (
    <section className="panel list-panel">
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search Projects"
          aria-label="Search projects"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {loading && <p className="message">Loading projects...</p>}
      {error && <p className="message error">{error}</p>}
      
      {!loading && !error && filtered.length === 0 && (
        <p className="message">No projects found.</p>
      )}

      <ul>
        {!loading && !error && filtered.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
