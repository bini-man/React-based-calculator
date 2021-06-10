import { Button,makeStyles, responsiveFontSizes } from "@material-ui/core"
const styles= makeStyles((theme)=>({
        operations:{
            backgroundColor:"#e0558f",
            margin: "5px",
            height:"50px",
            width:"30px"
        },
        numbers:{
            backgroundColor:"#ded5d5",
            margin: "5px",
            height:"50px",
            width:"30px",
        },
        zero:{
            backgroundColor:"#ded5d5",
            margin: "5px",
            height:"50px",
            width:"139px"
        },
        AC:{
            backgroundColor:"#eb1563",
            margin: "5px",
            height:"50px",
            width:"139px"
        },
        equal:{
            backgroundColor:"#ffb508",
            margin: "5px",
            height:"110px",
            width:"30px",
            marginLeft:"230px",
            marginTop:"-55px"
            
        },
        threenumbers:{
            marginRight:"80px"
        },
        twonumbers:{
            marginRight: "85px",
            marginTop:"-58px"
        }
}));
const Numbers = (props) => {
    
   
    const classes = styles();
    // useEffect(()=>{
       
       const bini=(val)=>{
           
props.setnum(props.num+""+val);

if(val=="AC"){
    props.setnum('')
}
if(val=="="){
    let res=props.num;
    console.log(res);
}

}

// const op=(ope)=>{
//    props.setop(ope);
// }
    // }
    // );
  
    return ( 
        <div className="container">
            <div>
                 <Button className={classes.AC} onClick={()=>bini("AC")}>AC</Button>
                 <Button className={classes.operations} onClick={()=>bini("/")}>/</Button>
                 <Button className={classes.operations} onClick={()=>bini("*")}>*</Button>
            </div>
            <div>
                 <Button className={classes.numbers} onClick={() => bini(7)}>7</Button>
                 <Button className={classes.numbers} onClick={() => bini(8)}>8</Button>
                 <Button className={classes.numbers} onClick={() => bini(9)}>9</Button>
                 <Button className={classes.operations} onClick={()=>bini("-")}>-</Button>
            </div>
            <div>
                 <Button className={classes.numbers} onClick={() => bini(4)}>4</Button>
                 <Button className={classes.numbers} onClick={() => bini(5)}>5</Button>
                 <Button className={classes.numbers} onClick={() => bini(6)}>6</Button>
                 <Button className={classes.operations} onClick={()=>bini("+")}>+</Button>
            </div>
            <div className={classes.threenumbers}>
                 <Button className={classes.numbers} onClick={() => bini(1)}>1</Button>
                 <Button className={classes.numbers} onClick={() => bini(2)}>2</Button>
                 <Button className={classes.numbers} onClick={() => bini(3)}>3</Button>
                
            </div>
            <Button className={classes.equal} onClick={()=>bini("=")}>=</Button>
            <div className={classes.twonumbers}>
                <Button className={classes.zero}  onClick={() => bini(0)}>0</Button>
                 <Button className={classes.numbers} onClick={()=>bini("-")}>.</Button>
                
                
            </div>
          
        </div>
     );
}
 
export default Numbers;