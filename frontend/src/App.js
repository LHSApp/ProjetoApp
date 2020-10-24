  import React, {useState} from 'react';
  import './App.css';
  import backgroundImage from './assets/background.jpeg';
  import Header from './components/Header'


  function App() {

    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
     

    function handAddProject() {
    

      setProjects([...projects, `Novo projeto ${Date.now()}`]);


        
      console.log(projects);
    }
    

    return (
    
    
    <>
   
        <Header title="Projects"/>

        <img width={100}src={backgroundImage}/>
<ul>
  {projects.map(projetc => <li key={projetc}>{projetc}</li>)}
</ul>

  <button type="button" onClick={handAddProject}>Adicionar projeto</button>
      
    </>
    );
  }

  export default App;