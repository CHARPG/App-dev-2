import React, { useState } from 'react';
import { TouchableOpacity, TouchableHighlight, Text, View, Alert, StyleSheet, Image} from 'react-native';

const Workoutulator = (props) => { //creates all the variables 

  const [calories, setcalories] = useState(0);
  const [situps, setsitups] = useState(0);
  const [pushups, setpushups] = useState(0);
  const [crunches, setcrunches] = useState(0);
  const [squats, setsquats] = useState(0);
  const [starjump, setstarjump] = useState(0);
  const [burpee, setburpee] = useState(0);
  const [ten, setten] = useState(false);
  const [mulitpletitle, setmultipletitle] =useState ("x1")

  return (
    
    <View style = {{alignItems: "center", paddingTop: 100, paddingBottom: 100}}>

    <View style={styles.container}>
      <TouchableOpacity style={{width: 130, height: 100, backgroundColor: '#B1DEFF', alignItems: "center", paddingTop: 20, borderRadius: 10, margin: 3}}
        onPress={() => {
            if(ten == false)
            {      
            setcalories(calories + 9)
            setsitups(situps + 1)
            }
            else if(ten == true){
            setcalories(calories + 90)
            setsitups(situps + 10)
          }

        }}>
        <Text style={styles.text}>Situp</Text>
            </TouchableOpacity>

      <TouchableOpacity style={{width: 130, height: 100, backgroundColor: '#B1DEFF', alignItems: "center", paddingTop: 20, borderRadius: 10, margin: 3}}
        onPress={() => {
            if(ten == false)
            {
            setcalories(calories + 7)
            setpushups(pushups + 1)
            }
            else if(ten == true)
            {
              setcalories(calories + 70)
              setpushups(pushups + 10)
            }       
        }}>
        <Text style={styles.text}>Pushup</Text>
            </TouchableOpacity>

      <TouchableOpacity style={{width: 130, height: 100, backgroundColor: '#B1DEFF', alignItems: "center", paddingTop: 20, borderRadius: 10, margin: 3}}
        onPress={() => {
            if(ten == false)
            {
            setcalories(calories + 8)
            setstarjump(starjump + 1)
            }
            else if(ten == true)
            {
              setcalories(calories + 80)
              setstarjump(starjump + 10)
            }    
        }}>
        <Text style={styles.text}>StarJump</Text>
            </TouchableOpacity>
            
            </View>

            <View style={styles.container}>
            <TouchableOpacity style={{width: 130, height: 100, backgroundColor: '#B1DEFF', alignItems: "center", paddingTop: 20, borderRadius: 10, margin: 3}}
        onPress={() => {
            if(ten == false)
            {
            setcalories(calories + 3)
            setcrunches(crunches + 1)
            }
            else if(ten == true)
            {
            setcalories(calories + 30)
            setcrunches(crunches + 10)
              
            }
        }}>
        <Text style={styles.text}>Crunch</Text>
            </TouchableOpacity>

        <TouchableOpacity style={{width: 130, height: 100, backgroundColor: '#B1DEFF', alignItems: "center", paddingTop: 20, borderRadius: 10, margin: 3}}
        onPress={() => {
            if(ten == false)
            {
            setcalories(calories + 8)
            setsquats(squats + 1)
            }
            else if(ten == true)
            {
              setcalories(calories + 80)
              setsquats(squats + 10)
            }
        }}>
        <Text style={styles.text}>Squat</Text>
            </TouchableOpacity>

        <TouchableOpacity style={{width: 130, height: 100, backgroundColor: '#B1DEFF', alignItems: "center", paddingTop: 20, borderRadius: 10, margin: 3}}
        onPress={() => {
            if(ten == false)
            {
            setcalories(calories + 9)
            setburpee(burpee + 1)
            }
            else if(ten == true)
            {
              setcalories(calories + 90)
              setburpee(burpee + 10)
            }
        }}>
        <Text style={styles.text}>Burpee</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.container}>
        <TouchableOpacity style={{width: 195, height: 100, backgroundColor: '#D0ADD2', alignItems: "center", paddingTop: 20, borderRadius: 10, margin: 3}}
        onPress={() => {
           if(ten == false)
          {
            setmultipletitle("x10") 
            setten(true)
          }else if(ten == true){
            setmultipletitle("x1") 
            setten(false)
          } 
        }}>
        <Text style={styles.text}>{mulitpletitle}</Text>
            </TouchableOpacity>     

            
        <TouchableOpacity style={{width: 195, height: 100, backgroundColor: '#D0ADD2', alignItems: "center", paddingTop: 20, borderRadius: 10, margin: 3}}
        onPress={() => {
          setcalories(0)
          setsitups(0)
          setpushups(0)
          setstarjump(0)
          setcrunches(0)
          setsquats(0)
          setburpee(0)
        }}>
        <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
        </View>           
      
    <View>
      <Text style={{width: 390, height: 80, backgroundColor: '#FFD5B4', textAlign: "center", fontSize: 27}}>
      Calories Burned: {calories}
      </Text>
      <Text style={{width: 390, height: 210, backgroundColor: '#FFD5B4', textAlign: "center", fontSize: 27}}>
      Situps({situps}) Pushups({pushups}) Crunches({crunches}) Squats({squats}) StarJumps({starjump}) Burpees({burpee})
      </Text>
      </View>
    </View>    
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  text: {
    color: 'black',
    fontSize: 27
  }
});

export default Workoutulator;