import {Component} from "react";
import * as React from "react";

interface CounterButtonProps {
    onIncrease:Function
}

function CounterButton({onIncrease}: CounterButtonProps) {
    return (
        <button type="button" onClick={onIncrease}>+</button>
);
}

interface CounterDisplayProps {
    counter:number
}

function CounterDisplay(props: CounterDisplayProps) {
    return (
        <div>
            <b>{props.counter}</b>
    </div>
);
}

interface CounterState {
    counter:number
}

export class Counter extends Component<{}, CounterState> {
    constructor(props, context) {
        super(props, context);
        this.state = { counter : 0 };
    }

    increase() {
        this.setState({
            counter: this.state.counter+1
        });
    }

    render() {
        return (
            <div>
                <CounterDisplay counter={this.state.counter} />
        <CounterButton onIncrease={() => this.increase()}/>
        </div>
    );
    }
}