import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Credentials from './Credentials';
import ProjectDetails from './ProjectDetails';

function Navigator() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/:id" element={<ProjectDetails/>} />
            <Route path="/credentials" element={<Credentials/>}/>
        </Routes>
    );
}

export default Navigator;