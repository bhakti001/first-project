import React, { useReducer } from 'react'
function reducer (state , action) {
        switch (action.type) {
            case "TEMP_STORE": 
            return{...state ,tempStore: action.payload};
            case " CLEAR_FIELD":
                return{...state , tempStore : "" };
                case "ADD_TODO" : 
                return{...state  , todos:[...state.todos, {id: Date.now() , title:action.payload, completed:false}]}
                case "COMPLETE_TODO":
                    return{
                        ...state , todos:state.todos.map((todo) => {
                            if(todo.id === action.payload){
                                return{...todo,completed: !todo.completed}
                            }else{
                                return todo;
                            }
                        })
                    }
                    default : 
                    return state
        }
}
function UseReducer() {
    const[todos,dispatch] = useReducer(reducer,{tempStore: "" ,todos:[],});
    const handleTodo = () => {
        dispatch({type:"ADD_TODO",payload:todos.tempStore});
        dispatch({type:"CLEAR_FIELD"});
    }
    const onEnter = (e) => {
        if(e.keyCode === 13) {
            handleTodo();
        }
    }
  return (
      <>
      <div>UseReducer</div>
      <div style={{display:'flex' ,gap:'25px',alignItems:'center'}}>
        <input type="text"
        value={todos.tempStore} 
        onKeyDown={(e) => onEnter(e)}
        onChange={(e) => dispatch({type:"TEMP_STORE",payload: e.target.value})}
        />
        <button onClick={handleTodo}>add</button>
      </div>
      {
        todos.todos.map((todo) => (
            <div style={{display:"flex" ,gap:'25px',alignItems:'center'}}>
                <h3 style={{textDecoration: todo.completed && 'line-through'}}>
                    {todo.title}
                </h3>
                <input type="checkbox" onChange={() => dispatch({type:"COMPLETE_TODO",payload:todo.id})}  />
            </div>
        ))
      }
    </>
  )
}

export default UseReducer