class Friends extends React.Component{
    render() {
        const {name, hobbies} =this.props;
        const lis = <ul>
            {hobbies.map(fields=><li>{fields}</li>)}
            </ul>
        return (
           <div>
            <h2>Name is {name}</h2>
            <p>{lis}</p> 
            </div>
        );
    }
}