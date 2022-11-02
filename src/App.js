
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content } from './styles';
import { useState } from 'react';


const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };


  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }


  const handleRmvNumber = () => {
    setCurrentNumber(prev => `${prev === '0' ? '0' : prev.substring(0, prev.length-1)}`)
  }


  const handleSumNumbers = () => {
    if (firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }


  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(minus))
      setOperation('')
    }
  }


  const handleMultiNumbers = () => {
    if (firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    } else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(multi))
      setOperation('')
    }
  }


  const handleDiviNumbers = () => {
    if (firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    } else {
      const divi = Number(firstNumber) / Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(divi))
      setOperation('')
    }
  }


  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
        switch(operation) {
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleMultiNumbers();
            break;
          case '/':
            handleDiviNumbers();
            break;
          default: 
            break;
        }
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <table>
          <tr>
            <td><Button label="C" onClick={handleOnClear}/></td>
            <td><Button label="<" onClick={handleRmvNumber}/></td>
            <td><Button label="/" onClick={handleDiviNumbers}/></td>
            <td><Button label="x" onClick={handleMultiNumbers}/></td>
          </tr>
          <tr>
            <td><Button label="7" onClick={() => handleAddNumber('7')}/></td>
            <td><Button label="8" onClick={() => handleAddNumber('8')}/></td>
            <td><Button label="9" onClick={() => handleAddNumber('9')}/></td>
            <td><Button label="-" onClick={handleMinusNumbers}/></td>
          </tr>
          <tr>
            <td><Button label="4" onClick={() => handleAddNumber('4')}/></td>
            <td><Button label="5" onClick={() => handleAddNumber('5')}/></td>
            <td><Button label="6" onClick={() => handleAddNumber('6')}/></td>
            <td><Button label="+" onClick={handleSumNumbers}/></td>
          </tr>
          <tr>
            <td><Button label="1" onClick={() => handleAddNumber('1')}/></td>
            <td><Button label="2" onClick={() => handleAddNumber('2')}/></td>
            <td><Button label="3" onClick={() => handleAddNumber('3')}/></td>
            <td rowSpan="2"><Button height={182} label="=" onClick={handleEquals}/></td>
          </tr>
          <tr>
            <td colSpan="2"><Button width={182} label="0" onClick={() => handleAddNumber('0')}/></td>
            <td><Button label="." onClick={() => handleAddNumber('.')}/></td>
          </tr>
        </table>
      </Content>
    </Container>
  );
}


export default App;