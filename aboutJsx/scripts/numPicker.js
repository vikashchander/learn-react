function  numGenerator(){
    let numPick = Math.floor(Math.random()*10+1);
    return numPick;
}

class NumPicker extends React.Component{
    render(){
        const num = numGenerator();
    return (
        <div>
        <p>The Random Number Generator : {num}</p>
       {
        num ==7 &&
        <div>
        <h2>this is heading</h2>
        <img src="https://images.unsplash.com/photo-1466129646777-494b376a670c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
       </div>
       }    
        </div>
    ) ; 
    }
}

