import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Credentials from './Credentials';

function Navigator() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/credentials" element={<Credentials/>}/>

        </Routes>
    );
}

export default Navigator;