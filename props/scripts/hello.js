class Hello extends React.Component{
    static defaultProps={
        from:"anonymous",
        data:1
    };
    render() {
        console.log(this.props);
        // console.log(this.props._proto_);  not works
        const props = this.props;
        const bang = "!".repeat(this.props.data);
        return (
             <div>
             <p>hey  {props.to} from {props.from} {bang}</p>
             <p>num {props.num} and true/false {props.onTrue} and {props.onFalse}</p>
              <img src ={props.img}/>
             </div>
        );
    }
}