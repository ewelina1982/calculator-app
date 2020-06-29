import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { InputContainer } from "./components/InputContainer";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";

class App extends Component {

    state = {
      input: "",
      result: ""
    }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  toggleSign = () => {
    const { input } = this.state
    if(input) {
      const newValue = parseFloat(input) * -1
      this.setState({
        input: String(newValue)
      })
    }
  }

  inputPercent = () => {
    const { input } = this.state
    const currentValue = parseFloat(input)

    if (currentValue === 0)
      return
    if(input) {
      const newValue = parseFloat(input) / 100

      this.setState({
        input: String(newValue)
      })
    }
  }

  handleEqual = () => {
    this.setState({ result: math.eval(this.state.input) });
  };

  handleClear = () => {
    this.setState({
      input: "",
      result: ""
    })
  }

  render() {
    const {input, result} = this.state;
    return (
      <div className="container">
        <div className="calculatorWrapper">
          <InputContainer mathematicalOperation={input} result={result} />
          <div className="row">
            <Button onHandleClick={this.inputPercent}>%</Button>
            <Button onHandleClick={this.toggleSign}>-/+</Button>
            <ClearButton onHandleClear={this.handleClear}>C</ClearButton>
            <Button onHandleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button onHandleClick={this.addToInput}>7</Button>
            <Button onHandleClick={this.addToInput}>8</Button>
            <Button onHandleClick={this.addToInput}>9</Button>
            <Button onHandleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button onHandleClick={this.addToInput}>4</Button>
            <Button onHandleClick={this.addToInput}>5</Button>
            <Button onHandleClick={this.addToInput}>6</Button>
            <Button onHandleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button onHandleClick={this.addToInput}>1</Button>
            <Button onHandleClick={this.addToInput}>2</Button>
            <Button onHandleClick={this.addToInput}>3</Button>
            <Button onHandleClick={this.addToInput}>+</Button>
          </div>
          <div className="lastRow">
            <Button onHandleClick={this.addToInput}>0</Button>
            <Button onHandleClick={this.addToInput}>.</Button>
            <Button onHandleClick={ this.handleEqual}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
