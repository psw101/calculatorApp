// IM/2021/034 -M.M.P.S. Wimalaweera

import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";
import { re } from "mathjs";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const math = require('mathjs');


type CalKeyboardProps = {
  displayValue: string;
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
  displayResultValue: string;
  setDisplayResultValue:  React.Dispatch<React.SetStateAction<string>>;
};

let display: string;
let result: string = "";


const CalKeyboard: React.FC<CalKeyboardProps> = ({
  displayValue,
  setDisplayValue,
  displayResultValue,
  setDisplayResultValue
}) => {
  // Event listener for number button press
  const onNumberPress = (num: string): void => {
    const display = displayValue === "" ? num : displayValue + num;
    if (display.length <= 90) {
      setDisplayValue(display);
      onAnyButtonPressEvaluation(display);
    }
  };

  // Handles when an operation button is pressed
  const onOperationPress = (operation: string): void => {
    const lastChar = displayValue[displayValue.length - 1];
    const basicOperators = ["+", "-", "x", "÷","%",".","√"];
    const parentheses = ["(",")"];
    
    // If the display is empty, start with the operation
    if (displayValue === "") {
      display = operation;
    } else if (basicOperators.includes(lastChar) && basicOperators.includes(operation)) {
      // Prevent entering two operators one after another
      return;
    } else if (displayValue === "." && displayValue.includes(".")) {
      // Prevent multiple decimals in the same number
      return;
    } else if (parentheses.includes(operation)) {
      
      display = displayValue + operation;
    } else {
      // Add the operation to the current display if within length limit
      if (displayValue.length < 90) {
        display = displayValue + operation;
      }
    }
    setDisplayValue(display);
    onAnyButtonPressEvaluation(display);
  };

  // Handles clearing the entire display and result
  const onClearPress = (): void => {
    setDisplayValue("");
    setDisplayResultValue("");
  };

  // Handles removing the last character from the display value
  const onBackspacePress = (): void => {
    if (displayValue.length > 0) {
      const updatedDisplay = displayValue.slice(0, -1);
      setDisplayValue(updatedDisplay);
      if (updatedDisplay.length > 0) {
        onAnyButtonPressEvaluation(updatedDisplay);
      } else {
        setDisplayResultValue("");
      }
    }
  };

  // Handles changing the sign of the current value (+/-)
  const onToggleSignPress = (): void => {
    if (displayValue) {
      const currentValue = parseFloat(displayValue);
      const toggledValue = currentValue * -1;
      setDisplayValue(toggledValue.toString());
      onAnyButtonPressEvaluation(toggledValue.toString());
    }
  };

  // Handles adding a square root to the current display
  const onSqrtPress = (): void => {
    if (displayValue === "") {
      display = "√";
    } else {
      display = displayValue + "√";
    }
    setDisplayValue(display);
    onAnyButtonPressEvaluation(display);
  };

  // Handles evaluating the current expression in the display
  const onAnyButtonPressEvaluation = (displayValue: string) => {
    try {
      // Replace symbols with valid math operations for evaluation
      const sanitizedExpression = displayValue
        .replace(/x/g, "*")
        .replace(/÷/g, "/")
        .replace(/√([0-9.]+)/g, "sqrt($1)");
  
      result = math.evaluate(sanitizedExpression);
  
      // If result is NaN or Infinity
      if (isNaN(Number(result)) || !isFinite(Number(result))) {
        result = "Error";
        setDisplayResultValue(result);
      } else {
        setDisplayResultValue(result.toString());
      }
    } catch (error) {
      
      result = "Error";
      setDisplayResultValue(result);
    }
  };

  // Handles pressing the equals button to show the result
  const onEqualsPress = (str:string): void => {
    setDisplayValue(str.toString());
    setDisplayResultValue("");
    // console.log("Hi");
  };
  
  //Keyboard butons 
  return (
    <>
      
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button} onPress={() => onClearPress()}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onOperationPress("(")}>
          <Text style={styles.buttonText}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => onNumberPress("7")}>
          <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => onNumberPress("4")}>
          <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => onNumberPress("1")}>
          <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => onOperationPress("%")}>
          <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.column}>
        <TouchableOpacity style={styles.button} onPress={() => onOperationPress("÷")}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onOperationPress(")")}>
          <Text style={styles.buttonText}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => onNumberPress("8")}>
          <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => onNumberPress("5")}>
          <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => onNumberPress("2")}>
          <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => onNumberPress("0")}>
          <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>


          
        </View>
        <View style={styles.column}>
        <TouchableOpacity style={styles.button} onPress={() => onOperationPress("x")}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onToggleSignPress}>
          <Text style={styles.buttonText}>±</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => onNumberPress("9")}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => onNumberPress("6")}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => onNumberPress("3")}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => onOperationPress(".")}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
          
          

        </View>
        <View style={styles.column}>
        <TouchableOpacity style={styles.button} onPress={() => onBackspacePress()}>
          <Text style={styles.buttonText}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onOperationPress("+")}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onOperationPress("-")}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onSqrtPress}>
          <Text style={styles.buttonText}>√</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => onEqualsPress(result)}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        </View>
      </View>

      
    </>
  );
};

export default CalKeyboard;
