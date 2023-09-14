// ProjectList.js
import React, { useState, useEffect } from 'react';
//import axios from 'axios'; // Import Axios
import MyButton from './MyButton.js';

function ProjectList(props) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    console.log('useEffect:', projects);
  })
  
  useEffect(() => {
    // Fetch projects from an API
    setProjects(props.projects);
    // axios.get('https://example.com/api/projects')
    //   .then((response) => setProjects(response.data))
    //   .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Current Projects</h2>
      <MyButton />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
