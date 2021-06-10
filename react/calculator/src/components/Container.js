import { makeStyles, Paper } from "@material-ui/core";
import Input from "./Input"
import Numbers from "./Numbers"
import { useState} from 'react'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(40),
        height: theme.spacing(49),
        background: "#4e5191",
        alignItems:"center"
      },
    },
  }));
const Container = (props) => {
  const [numbers,setNumbers]=useState('');
 // const [operation,setOperation]=useState('');
 // const [eth,setEth]=useState(`${operation}${numbers}`);
  // setEth(operation+""+numbers)
   //const eth=operation+numbers;
  if (props.num=="AC") {
    setNumbers('')
    
  }

 
 

    const classes = useStyles();
   
    return ( 
        <div className={classes.root}>
         <Paper>
         <Input  num={numbers}  />
         <Numbers  setnum={setNumbers} num={numbers} />
         
         </Paper>
            
        </div>
        // <div>
        //   <h1> {props.eth}</h1> 
        // </div>
     );
}
 
export default Container;