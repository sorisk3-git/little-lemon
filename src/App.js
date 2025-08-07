import React, { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import { TaskList } from "./components/TaskList";
import BookingForm from "./components/BookingForm";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {lemon_logo} from "./assets/little-lemon.png"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import { Link as RouterLink } from "react-router-dom";



function App() {

  const [tasks, setTasks] = useState([
    { id: 1, task: "Go shopping", done: true },
    { id: 2, task: "Wash dishes", done: false },
  ]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;
