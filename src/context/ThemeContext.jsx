// ThemeContext.js
import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [isOpen, setIsOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState("")
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])



  useEffect(() => {
    setTimeout(() => {
      setSuccessMsg("")
    },1000)
  }, [todos,successMsg])
  

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isOpen, setIsOpen, successMsg, setSuccessMsg, todos, setTodos }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
