class Machine extends React.Component{
    render() {
        const {s1,s2,s3} = this.props;
        const winner =((s1==s2) && (s2==s3));
        const colors ={
            fontSize :'50px',
            backgroundColor :"blue"
        }

        return (
            <div className="machine">
            <p style={colors}>{s1} {s2} {s3} </p>
            <p className={winner?'win':'lose'}>
            {winner?"Win The Game":"Lose The Game"}
            </p>
            </div>
             
            
        );
    }
}