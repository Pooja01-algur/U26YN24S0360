import { useReducer } from "react";
const initialState={
  name:'',
  email:''
}
function reducer(state,action){
  return{
    ...state,
    [action.field]:action.value
  }
}
function App(){
  const [state,dispatch]=useReducer(reducer,initialState)
  return(
    <div>
      <h1 style={{color:"green"}}>Student details</h1>
      <input type="text" value={state.name} placeholder="please enter name"
      onChange={(e)=>dispatch({field:'name',value:e.target.value})}/><br/>
      <input type="text" value={state.email} placeholder="please enter email"
      onChange={(e)=>dispatch({field:'email',value:e.target.value})}/>
      <h2 style={{color:"blue"}}>Name={state.name}</h2>
      <h2 style={{color:"blue"}} >Email={state.email}</h2>
    </div>
  )
}
export default App