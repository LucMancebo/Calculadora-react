
import { Container, Content, Row } from "./styles";
import Input from "./components/input";
import Button from "./components/button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleDoClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev =>
      prev === "0"
        ? String(number)
        : prev + String(number)
    );
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation(`+`)
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation(`-`)
    } else {
      const minus = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(minus))
      setOperation('')
    }
  }

  const handleMultiNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation(`x`)
    } else {
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }

  const handleDivisionNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation(`÷`)
    } else {
      const mult = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers()
          break
        default:
          break

        case '-':
          handleMinusNumbers()
          break

        case 'x':
          handleMultiNumbers()
          break

        case '÷':
          handleDivisionNumbers()
          break
      }
    }
  }

  return (


    <Container>
      <h1
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "36px",
          fontWeight: 700,
          color: "#ffffffff",
          textAlign: "center",
          margin: "0  0 20px",

        }}
      >
        Calculadora
      </h1>

      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label="×" onClick={handleMultiNumbers} />
          <Button label="÷" onClick={handleDivisionNumbers} />
          <Button label="C" onClick={handleDoClear} />
          <Button label="X" />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>

        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
        </Row>



      </Content>

    </Container>
  );
}

export default App