import "./button.css";

function Button(props){
    return(
        <div className="Btn">
            <button >{ props.content}</button>

        </div>
    )
    
}
export default Button;