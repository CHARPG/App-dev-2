import React, { useState } from 'react';
import { TouchableOpacity, TouchableHighlight, Text, View, Alert, StyleSheet, Image, Modal} from 'react-native';

const Workoutulator = (props) => { //creates all the variables 

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
            setsitups(situps + 1)
            }
            else if(ten == true)
            {
            setsitups(situps + 10)
            }
        }}>
        <Text style={styles.text}>Situp</Text>
            </TouchableOpacity>

      <TouchableOpacity style={{width: 130, height: 100, backgroundColor: '#B1DEFF', alignItems: "center", paddingTop: 20, borderRadius: 10, margin: 3}}
        onPress={() => {
            if(ten == false)
            {
            setpushups(pushups + 1)
            }
            else if(ten == true)
            {
              setpushups(pushups + 10)
            }
        }}>
        <Text style={styles.text}>Pushup</Text>
            </TouchableOpacity>

      <TouchableOpacity style={{width: 130, height: 100, backgroundColor: '#B1DEFF', alignItems: "center", paddingTop: 20, borderRadius: 10, margin: 3}}
        onPress={() => {
            if(ten == false)
            {
            setstarjump(starjump + 1)
            }
            else if(ten == true)
            {
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
            setcrunches(crunches + 1)
            }
            else if(ten == true)
            {
              setcrunches(crunches + 10)
            } 
        }}>
        <Text style={styles.text}>Crunch</Text>
            </TouchableOpacity>

        <TouchableOpacity style={{width: 130, height: 100, backgroundColor: '#B1DEFF', alignItems: "center", paddingTop: 20, borderRadius: 10, margin: 3}}
        onPress={() => {
            if(ten == false)
            {
            setsquats(squats + 1)
            }
            else if(ten == true)
            {
              setsquats(squats + 10)
            }
        }}>
        <Text style={styles.text}>Squat</Text>
            </TouchableOpacity>

        <TouchableOpacity style={{width: 130, height: 100, backgroundColor: '#B1DEFF', alignItems: "center", paddingTop: 20, borderRadius: 10, margin: 3}}
        onPress={() => {
            if(ten == false)
            {
            setburpee(burpee + 1)
            }
            else if(ten == true)
            {
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
      <Text style={{width: 390, height: 290, backgroundColor: '#FFD5B4', textAlign: "center", fontSize: 27}}>
      Preset 1 = Situps({situps}) Pushups({pushups}) Crunches({crunches}) Squats({squats}) StarJumps({starjump}) Burpees({burpee})Total Calories({situps * 9 + pushups * 7 + crunches * 3 + squats * 8 + starjump * 8 + burpee * 9}) {"\n"}
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