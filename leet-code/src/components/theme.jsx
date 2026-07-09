import React from 'react'
import { useContext,createContext,useEffect,useState } from 'react'

const theme = () => {
    const ThemeContext = createContext();
    export function ThemeProvider({children}){
    const[darkMode,setDarkMode] = useState(() =>{
    const saved = localStorage.getItem('theme');
    if(saved){
        return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });
    useEffect (() =>{
        if(darkMode){
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } 
    })
    }
  return (
    <div>theme</div>
  )
}

export default theme