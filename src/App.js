// import "./App.css";
// import Header from "./Components/Header";
// import MovieList from "./Components/MovieList";
// import Footer from "./Components/Footer";
// import MovieDetail from "./Components/MovieDetail";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Router>

//         <Header />
//         <MovieList />
//         <Routes>
//         <Route path="/" element={<MovieList />} />
//           <Route path="/movie/:id" element={<MovieDetail />} />
//           </Routes>
//         <Footer />

//       </Router>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import MovieList from "./Components/MovieList";
import Footer from "./Components/Footer";
import MovieDetail from "./Components/MovieDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
