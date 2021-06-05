import React from 'react'; 

const buttonStyle = {
    backgroundColor: "#61DAFB",
    color: "black",
    fontSize: "14px",
    fontFamily: "verdana",
    padding: "5px 30px",
    borderRadius: "5px",
    border: "2px groove blue",
    margin: "10px 5px",
    cursor: "pointer"
}

function TodoCard(props){
    const {title, clickToRemove, index} = props 
    return (
        <li style={{color: "#61DAFB"}}>{title}
            <button style={ buttonStyle } onClick={()=> {clickToRemove(index)}}>Remove Todo</button>
        </li>
    )
}

export default TodoCard; 