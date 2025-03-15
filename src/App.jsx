
import './App.css'
import { useState } from 'react'; // Import useState

import ProjectList from './ProjectList';   //{/*Think of <ProjectList /> like a reusable box that we place inside our UI.*/}
import { DeleteFromList } from "./ProjectList"; // Named export (Correct!)

export default function App() {  // parent component
{/* 
  •	Components can have state and/or props or neither.
  •	Props are read-only. They are passed to the component.
  •	State is mutable, but there are rules you must follow to mutate properly:
  o	NEVER modify state directly, use the setters!
  o	If you need to set the state based off of the current state, pass a function to your setter that takes in the current state. (You can find the reasons why in the React documentation; for now, just do it.)
  •	The parent (App.jsx) holds the state (projects).
  •	The child (ProjectList.jsx) receives projects as a prop.
  •	Props allow data to "flow down" from parent to child.
  •	The child cannot modify the state directly—it can only display it.
*/} 

   {/*Create a state variable called "projects" and a setter function called "setProjects"
    This stores array of objects, each with an id and content*/}
  const [projects, setProjects] = useState([
    {id: 1, content: 'DIP with Python'},
    {id: 2, content: 'FYP with undergrads'},
  ]);

   // Delete function: Removes a project by filtering out the matching ID
  function deleteProject(id) {
     setProjects(projects => projects.filter(project => project.id !== id));
  }

  // return (
  //   <>
  //     <h1>Capstone Projects List</h1> 
  //     {/* Pass the projects state to the child component */}
  //     {/* Passing projects and deleteProject function as props. Note here deletro is a prop */}
  //     <ProjectList projects={projects}   deleter={deleteProject}/> 
      
  //   </>
  // );

  return (
    <>
      <h1>Capstone Projects List</h1>
      {/* / Only Display Projects → Pass only projects.        Display + Delete Projects → Pass both projects and deleter */}
      <ProjectList projects={projects} />                                  
      <DeleteFromList projects={projects} deleter={deleteProject} />
    </>
  );
}