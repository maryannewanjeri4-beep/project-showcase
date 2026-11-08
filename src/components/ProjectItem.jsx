export default function ProjectItem({project}) {

    //does project have title....if so the first character to index 0 then change it to upper case...if false it falls back to P to prevent crashing
    const firstLetter = project.title ? project.title.charAt(0).toUpperCase() : "P";
 {/* Visual thumbnail placeholder showing the first letter of the project */}
  return (
    <li>
      <div className="thumb" aria-hidden="true">
        {firstLetter}
      </div>
      
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </li>
  );
}
//this file is used to avoid the repetitive html we used to write
