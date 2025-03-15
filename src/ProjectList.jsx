export default function ProjectList({ projects }) {
    const pList = projects.length ? (
      projects.map(p => <div key={p.id}>{p.content}</div>)
    ) : (
      <p>No Projects left</p>
    );
    return <div>{pList}</div>;
  }

  //================================================================================
   // delete on click
   //================================================================================

// Delete-Enabled Project List (Named Export)
export function DeleteFromList({ projects, deleter }) {
    if (!projects.length) return <p>No Projects left</p>;
  
    return (
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <span
              onClick={() => deleter(project.id)}
              style={{
                cursor: "pointer",
                color: "red",
                textDecoration: "underline",
                fontWeight: "bold",
                display: "inline-block",
                padding: "5px",
              }}
            >
              {project.content} ❌
            </span>
          </div>
        ))}
      </div>
    );
  }
