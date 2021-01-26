import React, { useState, useEffect } from 'react';
import {AsyncStorage} from 'react-native';  
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity, TouchableHighlight, Text, View, Alert, StyleSheet, Image, Modal, module} from 'react-native';
import Workoutulator from "./Workoutulator.js";
import Presets from "./Presets.js"; 

const MyTheme = {
  colors: {
    background: '#FFFF',
  },
};

const MyTheme2 = {
  colors: {
    background: '#3F414E',
  },
};

const Tab = createBottomTabNavigator()

const App = (props) => {
  const [ytheme, setytheme] = useState(MyTheme);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalbackground, setmodalbackground] = useState('#FFFF');

  return (
    <NavigationContainer
    theme={ytheme}>
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#3F414E",
        tabStyle: { backgroundColor: "#D0ADD2" },
        labelStyle: { fontSize: 18, paddingBottom: 15 },
      }}
      >
      <Tab.Screen name="Workoutulator" component={Workoutulator} />
      <Tab.Screen name="Preset" component={Presets} />
      </Tab.Navigator>    
      <View>
      <TouchableOpacity //button that opens the modal when pressed
        onPress={() => {
          setModalVisible(true);
        }}>
          <Text style={{width: 420, height: 30, backgroundColor: '#B1DEFF', textAlign: "center", fontSize: 15}}>Settings</Text>
        </TouchableOpacity>

      <Modal //creates the modal
        animationType="slide"
        backgroundColor = '#B1DEFF'
        visible={modalVisible}>
          <View style = {{backgroundColor: modalbackground, height: 2000}}>
           <TouchableOpacity //button that closes the modal
        onPress={() => {
          setModalVisible(false);
        }}>
          <Text style={{width: 420, height: 30, backgroundColor: '#B1DEFF', textAlign: "center", fontSize: 15}}>Close Settings</Text>
        </TouchableOpacity>
        
        <View style = {{alignItems: "center", paddingTop: 10}}>
        <TouchableOpacity style={{width: 400, height: 60, backgroundColor: '#D0ADD2', alignItems: "center", paddingTop: 15}}
        onPress={() => {
          if(ytheme == MyTheme)
          {
            setytheme(MyTheme2)
            setmodalbackground('#3F414E')
          }
          if(ytheme == MyTheme2)
          {
            setytheme(MyTheme)
            setmodalbackground('#FFFF')
          }
          
        }}>
        <Text style={{width: 420, height: 30, textAlign: "center", fontSize: 20}}>Dark Mode</Text>
            </TouchableOpacity>

            <Text style={{width: 400, height: 140, textAlign: "center", fontSize: 20, backgroundColor: '#FFD5B4', paddingTop: 10}}>Use the calculator to work out how many calories you have lost during your workout and create a preset so you can refer back to it during your next workout!</Text>
            <Text style={{width: 400, height: 140, textAlign: "center", fontSize: 20, backgroundColor: '#FFD5B4', paddingTop: 10}}>Input how many minutes you have done each exercise for</Text>
            </View>
            </View>
        </Modal> 
            </View>
      </NavigationContainer>
      
  )
}

export default App;