import React, {Component} from 'react';
import Line from './Line'
export default class Preview extends Component {


    componentWillMount() {
        this.state = {
            lines: 8
        };
    }
    getIntRand(){
        return parseInt(Math.random() * 255,10);
    }

    getColor(i) {
        const {count} = this.props;
        return (i + 2 === count) ? 'rgb(255, 99, 71)' : (i % 2 ? 'white' : 'silver')
    }

    render() {
        let {width = 300, height = 300, count = 1, randomColor = false} = this.props;
        let style = {
            width, height
        };
        let lineWidth = (count > 0) ? width / (count) : 1;
        let redPosition = 0;
        if (randomColor) {
            redPosition = parseInt(Math.random() * (count - 1),10)
        }
        let lineComponents = [];

        for (let i = 0; i < count; i++) {
            lineComponents.push(<Line width={lineWidth} key={i}
                                      color={randomColor ? ((i === redPosition)?'rgb(255, 99, 71)':null) : this.getColor(i)}/>);
        }
        return <div style={style}>{lineComponents}</div>
    }
}