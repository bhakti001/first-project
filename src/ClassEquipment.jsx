function ClassEquipment(props){
    return(
<div style={{textAlign:"left"}}>
    <label>{props.label}</label><br />
    <label>fan:</label>
    <span>{props.fan}</span><br />
    <label>white board:</label>
    <span>{props.whiteboard}</span><br />
    <label>banch:</label>
    <span>{props.banch}</span><br />
    <label>projecter:</label>
    <span>{props.projecter}</span><br />
    <label>watch:</label>
    <span>{props.watch}</span><br />
    <label>ac:</label>
    <span>{props.ac}</span><br />
    <label>laptop:</label>
    <span>{props.laptop}</span><br />
   
</div>
    )
}
export default ClassEquipment;