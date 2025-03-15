
//@@@@@@@@@@@@@  Version 1: Using if-else (Best for Beginners)@@@@@@@@@@@ 
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

{/*projects.map(p => … ) is a JavaScript method that creates a new array by calling a function 
  on each element of the original array.In this the array is projects and the function is an arrow function.
map() loops over the projects array.
For each p (each project object), it executes the arrow function.
The arrow function returns a JSX <div> for each project.
*/}

{/*  Why do we need a new array each time?
-React renders JSX elements by returning a new UI structure whenever the state changes.
-The original projects array contains objects, but JSX needs React elements (<div>s in this case).
-.map() creates a new array of JSX elements, which React can then efficiently update and render.
*/}

{/*What happens if we don’t create a new array?
React relies on re-rendering when state updates. 
If we mutate the original array instead of mapping to a new one, 
React may not detect the changes correctly, leading to unpredictable UI updates. */}

{/*
  Alternative: Using forEach (❌ Wrong Approach)
  If we mistakenly use forEach instead of map, it won’t return a new array, and React won’t render correctly:
  ========================================================================
  This works but is not the React way. .map() is preferred because:
  It’s functional programming (doesn’t mutate state).
  It returns the new JSX structure React expects.
  ========================================================================
  let pList = [];
  projects.forEach(p => {
    pList.push(<div key={p.id}>{p.content}</div>);
  });
  return <div>{pList}</div>;
  ========================================================================
  */}

  {/*
    .map() is used to transform data (convert an array of objects → array of JSX elements).
    React’s rendering requires a new JSX structure every update.
    Modifying the original array (forEach, push) is not ideal in React.
    Always return a new array of elements when rendering lists in React.

    In functional programming, we avoid modifying (mutating) existing data and 
    instead create new copies with updates. This is crucial in React because React's state management
    relies on immutability to detect changes and trigger re-renders efficiently.
    */}
{/*
================================================================================
    // version 1 code This component receives "projects" as a prop from the parent (App component).
export default function ProjectList({ projects }) {
  let pList; // Declare a variable to store the list of projects.

  // Check if the projects array has at least one project
  if (projects.length > 0) {
    // If there are projects, map over them to generate a <div> for each project
    pList = projects.map(p => <div key={p.id}>{p.content}</div>);
  } else {
    // If no projects exist, show a message
    pList = <p>No Projects left</p>;
  }

  // Return a <div> containing either the project list or the message
  return <div>{pList}</div>;
}
================================================================================
*/}
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@  Version 2: Using if-else @@@@@@@@@@@ 
//@@@@@@@@ Return Early (Slightly Shorter), Avoids storing pList in a variable,
//More readable than the previous version, but still uses if-else.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// export default function ProjectList({ projects }) {
//   if (projects.length === 0) {
//     return <p>No Projects left</p>;
//   }
//   return (
//     <div>
//       {projects.map(p => <div key={p.id}>{p.content}</div>)}
//     </div>
//   );
// }

//================================================================================

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
   
  //  {/* The deleter function (passed from App.jsx) is used inside an inline arrow function in Projectlist .JSX*/}
  //  export default function ProjectList({ projects, deleter }) {


  //   const pList = projects.length ? (
  //     projects.map(project => {
  //       return (
  //         <div key={project.id}>
  //           <span onClick={() => deleter(project.id)}>{project.content}</span>
  //         </div>
  //       );
  //     })
  //   ) : (
  //     <p>No projects left. You won bcoz you did all !</p>
  //   );
  //   return <div>{pList}</div>;
  // }

// Named export (❌ No default keyword)
export function DeleteFromList({ projects, deleter }) {
  if (!projects) {
    console.error("Error: projects prop is undefined.");
    return <p>Error: No projects available.</p>;
  }

  if (!deleter || typeof deleter !== "function") {
    console.error("Error: deleter function is missing or not a function.");
    return <p>Error: Unable to delete projects.</p>;
  }

  console.log("✅ ProjectList received projects:", projects);
  console.log("✅ ProjectList received deleter function:", deleter);

  const pList = projects.length ? (
    projects.map((project) => {
      return (
        <div key={project.id}>
          <span
            onClick={() => {
              console.log("🗑️ Deleting project with ID:", project.id);
              deleter(project.id);
            }}
            style={{
              cursor: "pointer",
              color: "red",
              textDecoration: "underline", // Add underline to indicate it's clickable
              fontWeight: "bold",
              display: "inline-block",
              padding: "5px",
            }}
          >
            {project.content} ❌
          </span>
        </div>
      );
    })
  ) : (
    <p>No projects left. You won because you completed all! 🎉</p>
  );

  return <div>{pList}</div>;
}
//================================================================================