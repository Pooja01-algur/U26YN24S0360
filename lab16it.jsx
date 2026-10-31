import { createContext,useContext, useState } from "react";
const ThemeContext=createContext()
function App(){
  const [theme,setTheme]=useState('light')
  const toogleTheme=()=>{
    setTheme(theme==='light'?'dark':'light')
  }
  return(
    <ThemeContext.Provider value={{theme,toogleTheme}}>
      <Home/>
    </ThemeContext.Provider>
  )
}
function Home(){
  const {theme,toogleTheme}=useContext(ThemeContext)
  return(
    <div style={{
      height:'100vh',
      width:'1000px',
      background:theme==='light'?'white':'black',
      color:theme==='light'?'black':'white'
    }}>
  
      <h1>{theme} Theme</h1>
      <button style={{
        background:theme==='light'?'white':'black',
        color:theme==='light'?'black':'white'
      }}onClick={toogleTheme}>Change Theme</button>
    </div>
  )
}
export default App
