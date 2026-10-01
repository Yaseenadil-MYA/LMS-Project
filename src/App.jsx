// import React from "react";
import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Curses from "./pages/Curses";
import CourseDetails from "./pages/CourseDetails";
import Contect from "./pages/Contect";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import Mycourses from "./pages/Mycourses";
import Lessons from "./pages/Lessons";
import LessonDetails from "./pages/LessonDetails";
import Profile from "./pages/Profile";

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Curses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/my-courses" element={<Mycourses />} />
        <Route path="/lessons/:id" element={<Lessons />} />
        <Route
          path="/lessons/:courseId/lesson/:lessonId"
          element={<LessonDetails />}
        />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
};

export default App;
