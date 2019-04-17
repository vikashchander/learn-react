class App extends React.Component{
    render() {
        return (
        <div>
       <Images></Images>
       <Mood></Mood>
        <NumPicker></NumPicker>
        </div> 
             
             
        );
    }
}
ReactDOM.render(<App></App>,document.getElementById('root'));