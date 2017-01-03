import React, {Component} from 'react';
import Preview from './Preview'
export default class Main extends Component {
    componentWillMount() {
        this.state = {
            count: 8,
            containerWidth: 300
        };
    }

    clickHandler = (direction) => () => {
        let {count, containerWidth} = this.state;
        count += direction;
        if (count < 1) count = 1;
        if (count > containerWidth) count = containerWidth;
        this.setState({count})
    }


    render() {
        let {count} = this.state;
        return <div>
            <div className="col-fl">
                <div className="main-container">
                    <Preview count={count}/>
                    <div className="btn-container">
                        <div className="col text-center">
                            <button className="btn" onClick={this.clickHandler(+1)}>+</button>
                        </div>
                        <div className="col text-center">
                            <button className="btn" onClick={this.clickHandler(-1)}>-</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-fl text-center">
                <div className="total">Total Lines: {count}</div>
                <div>
                    <div className="col text-center">
                        <Preview count={count} width={100} height={100} randomColor={true}/>
                    </div>
                    <div className="col text-center">
                        <Preview count={count} width={100} height={100} randomColor={true}/>
                    </div>
                </div>
                <div>
                    <div className="col text-center">
                        <Preview count={count} width={100} height={100} randomColor={true}/>
                    </div>
                    <div className="col text-center">
                        <Preview count={count} width={100} height={100} randomColor={true}/>
                    </div>
                </div>
            </div>
        </div>
    }
}