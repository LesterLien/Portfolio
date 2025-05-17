import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1 className="text-2xl font-bold">Home</h1>;
}

function About() {
  return <h1 className="text-2xl font-bold">About</h1>;
}

function App() {
  return (
    <div className="p-4">
      <nav className="mb-4 space-x-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/about" className="text-blue-500">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
