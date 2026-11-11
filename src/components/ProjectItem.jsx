export default function ProjectItem({ project, onDelete }) {
  const firstLetter = project.title ? project.title.charAt(0).toUpperCase() : "P";

  return (
    <li>
      <div className="thumb" aria-hidden="true">
        {firstLetter}
      </div>

      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete?.(project.id)}
        aria-label={`Delete ${project.title}`}
      >
        Delete
      </button>
    </li>
  );
}
