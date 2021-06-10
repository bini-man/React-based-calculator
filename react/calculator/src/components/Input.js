
import { makeStyles, TextField  } from "@material-ui/core"
import { useState } from "react";
const styles= makeStyles((theme)=>({

    root:{
        color:"black"
    },
    textarea:{
        // resize:"none",
        // overflowY: "hidden",
      paddingLeft:"20px",
      marginTop:"15px",
    margin:"15x",
       width:"270px",
        background:"black",
        direction: 'rtl'
    },
    input:{
        color:'#fff'
      },
}));


const Input = (props) => {
// const show = () =>{
// return props.num;

// }
// const [val,setVal]=useState('');
// //  val=props.op+""+props.num
// setVal(props.op+""+props.num
const val=props.num
// const val2=val+props.num
    const classes = styles();
    console.log(props.res)
    return ( 
        <div>
           
                <TextField
                
                className={classes.textarea}
                autofocus="autofocus" 
            variant="outlined" 
            InputProps={{
                className:classes.input,
              value:val
            }}
            />
       
           {/* <TextField className={classes.textarea} InputLabelProps={{ shrink: true }} /> */}
                   {/* <TextareaAutosize    rows="3" rowsMax="3" cols="75"/>  */}
                  
        </div>
     );
}
 
export default Input;