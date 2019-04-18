class App extends React.Component{
    render() {
        return (
            <div>
             <Hello 
             to="vikash"
             from ="chander"
            num = {3}
            data ={4}
            img ="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
           // onTrue 
           onTrue ={true} 
           onFalse ={false}
             />
             <Hello 
             to="Rahul"
             />
             <Friends 
             name="vikash" 
             hobbies = {['cricket','football','chess']}
             />
             <Friends 
             name="rahul" 
             hobbies = {['cricket','boxing','dancing']}
             />
             </div>
             
        );
    }
}

ReactDOM.render(<App/>,(document.getElementById('root')));