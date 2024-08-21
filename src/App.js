//https://jsonplaceholder.typicode.com/posts
//https://jsonplaceholder.typicode.com/comments?postId=2


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import UserDetails from "./Component/UserDetails/UserDetails";
import Nopage from "./Component/Nopage/Nopage";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about/:id" element={<UserDetails/>}/>
      <Route path="*" element={<Nopage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
