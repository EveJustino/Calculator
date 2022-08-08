//Entre no link abaixo e continue a desenvolver a nossa calculadora
//Você deve criar as funções de cada button para disparar a operação no click
//Sua calculadora deve ter um button para limpar o resultado da tela e limpar os inputs
//Você deve buscar a solução para a operação de soma ("+" deve somar e não concatenar)
//Aproveite para praticar o styled-component no desafio!!


import React, { Component } from "react";
import * as S from "./Components/style.js"

export class Calc extends Component {
  state = {
    number1: "",
    number2: "",
    result: "",
    simbol: "+",
    showNumber1:0,
    showNumber2:0,
  };

  handleChange1 = (event) => {
    this.setState({
      number1: Number(event.target.value),
      showNumber1: Number(event.target.value)
    });
  };

  handleChange2 = (event) => {
    this.setState({
      number2: Number(event.target.value),
      showNumber2: Number(event.target.value)
    });
  };

  somar = () => {
    this.setState({
      result: this.state.number1 + this.state.number2,
      simbol: "+"
    })
  }

  subtrair = () => {
    this.setState({
      result: this.state.number1 - this.state.number2,
      simbol: "-"
    })
  }

  multiplicar = () => {
    this.setState({
      result: this.state.number1 * this.state.number2,
      simbol:"*",
    })
  }

  dividir = () => {
    this.setState({
      result: this.state.number1 / this.state.number2,
      simbol: "/" 
    })
  }

  delete = () => {
    this.setState({
      result: "0",
      number1: "",
      number2: "",
      showNumber1: 0,
      showNumber2:0
    })
  }

  render() {
    return (
      <S.Section>
        <S.Title>CALC</S.Title>
        <p>{this.state.showNumber1} {this.state.simbol} {this.state.showNumber2} = {this.state.result}</p>
        <S.Input value={this.state.number1} onChange={this.handleChange1} type="number" />
        <S.Input value={this.state.number2} onChange={this.handleChange2} type="number" />
        <S.Buttons>
          <S.Button onClick={this.somar}>+</S.Button>
          <S.Button onClick={this.subtrair}>-</S.Button>
          <S.Button onClick={this.multiplicar}>*</S.Button>
          <S.Button onClick={this.dividir}>/</S.Button>
        </S.Buttons>
        <S.Delete onClick={this.delete}>DEL</S.Delete>        
      </S.Section>
    );
  }
}

export default Calc;
