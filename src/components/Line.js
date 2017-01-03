import React, {Component} from 'react';

export default class Line extends Component {


    componentWillMount(){
        this.state={
            lineColor:null
        }
    }

    setColor=()=>()=>{
        this.setState({lineColor:this.getRandomColor()});
    }
    getIntRand(){
        return parseInt(Math.random() * 255,10);
    }
    getRandomColor() {
        return `rgb(${this.getIntRand()},${this.getIntRand()},${this.getIntRand()})`;
    }
    render() {
        let {width = 1, height = '100%', color = null} = this.props;
        let{lineColor=null} = this.state;
        let style = {
            width,
            height,
            backgroundColor: lineColor?lineColor:(color?color:this.getRandomColor())
        }

        return <div className="line" style={style} onClick={this.setColor()}></div>
    }
}