// IM/2021/034 -M.M.P.S. Wimalaweera

import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, View, Text } from 'react-native';
import CalKeyboard from '../components/calKeyboard';
import { styles } from '../styles/Styles';

export default function App() {
  // Initial states
  const [displayValue, setDisplayValue] = useState("");
  const [displayResultValue, setDisplayResultValue] = useState("");
  
  
  const scrollViewRef = useRef<ScrollView>(null);

  // Function to decide the font size based on how long the value is
  const calculateFontSize = (value: string): number => {
    const length = value.length;
    if (length <= 11) {
      return 48;
    } else if (length <= 30) {
      return 44;
    } else {
      return 36;
    }
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  }, [displayValue]);

  return (
    <View style={{ height: '100%', flexDirection: 'column', backgroundColor:'#E3E8EF'}}>
      {/* Area to show the current input and result */}
      <View style={[styles.displayContainerScreen, { flexDirection: 'column' }]}>
        {/* Scrollable area to show the main input value */}
        <ScrollView
          ref={scrollViewRef}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
        >
          <Text style={[styles.displayText, { fontSize: calculateFontSize(displayValue) }]} numberOfLines={1}>
            {displayValue}
          </Text>
        </ScrollView>
        {/* Area to show the calculated result */}
        <Text style={styles.result}>{displayResultValue}</Text>
      </View>
      {/* Area for the calculator buttons */}
      <View style={[styles.displayContainerKeyboard, { flexDirection: 'column', paddingRight:20, paddingLeft:20 }]}>
        <View style={{ alignItems: 'center' }}>
          <CalKeyboard
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            displayResultValue={displayResultValue}
            setDisplayResultValue={setDisplayResultValue}
          />
        </View>
      </View>
    </View>
  );
}
