  import React, {useState, useEffect} from 'react';
  import api from './services/api';
  import './App.css';
  
  import Header from './components/Header'


  function App() {

    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    useEffect(() =>{
      api.get('./projects').then(response =>{
        console.log(response);
      });
    }, []);

     

    function handAddProject() {
    

      setProjects([...projects, `Novo projeto ${Date.now()}`]);


        
      console.log(projects);
    }
    

    return (
    
    
    <>
   
        <Header title="Projects"/>

<ul>
  {projects.map(projetc => <li key={projetc}>{projetc}</li>)}
</ul>

  <button type="button" onClick={handAddProject}>Adicionar projeto</button>
      
    </>
    );
  }

  export default App;