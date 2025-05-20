import { Routes, Route } from 'react-router-dom';
import Home from './Home';


function Navigator() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

        </Routes>
    );
}

export default Navigator;