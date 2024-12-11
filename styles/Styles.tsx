// IM/2021/034 -M.M.P.S. Wimalaweera

import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
          
        button: {
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#007BFF',
          borderRadius: 30,
          margin: 8
        },

        button2: {
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#808080',
          borderRadius: 30,
          margin: 8
        },
        button3: {
          width: 60,
          height: 135,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#007BFF',
          borderRadius: 30,
          margin: 8
        },

        buttonText: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold',
        },
        result: {
          position: 'absolute',
          fontSize: 28,
          top:150,
          color: '#9E9E9E',
          textAlign: 'right',
          width: '100%'
        },
        row: {
          maxWidth: '100%',
          flexDirection: "row",
          justifyContent: 'space-around'
        },
        displayContainerScreen: {
          width: '100%', 
          height: '30%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          backgroundColor: '#E3E8EF',
          padding: 10,

        },
        displayContainerKeyboard: {
          position: 'absolute',
          width: '100%', 
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          backgroundColor: '#F5F8F9',
          padding: 10,
          bottom:0
        },
        
        displayText: {
          position: 'relative',
          fontSize: 48,
          color: '#333',
          textAlign: 'right',
          writingDirection: 'rtl',
          width: '100%',
          marginTop:20
        },
        column: {
          flexDirection: 'column',
          alignItems: 'center',
          marginVertical: 5,
          flex: 1,
        },
        displayContainer: {
          width: '100%',
          height: 150, // Increased size of display container
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
          padding: 10,
          marginBottom: 20, // Increase the margin to push the keyboard down
        },
        displayTextContainer: {
          alignItems: 'flex-start',
          justifyContent: 'center',
        },
});
