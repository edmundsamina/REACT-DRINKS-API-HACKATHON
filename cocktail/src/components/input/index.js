export default function Input(props){

    return(
        <label>
        <input className = {props.className}onChange={props.onChange}/>
      
        </label>)
          
}