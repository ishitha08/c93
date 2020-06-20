import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';

import * as firebase from 'firebase'
export default class HomeScreen extends React.Component {
render(){
    return(
        <View>
             <View>
          <Image
            source={require("../assets/swimming.png")}
            style={{width:200, height: 200}}/>
            <TouchableOpacity>
            <Text style={{textAlign: 'center', fontSize: 30}}>swimming</Text>
            </TouchableOpacity>
          
        </View>
        <View>
          <Image
            source={require("../assets/gym.png")}
            style={{width:200, height: 200}}/>
            <TouchableOpacity>
            <Text style={{textAlign: 'center', fontSize: 30}}>gym</Text>
            </TouchableOpacity>
                
         </View>
         <View>
          <Image
            source={require("../assets/exercise.png")}
            style={{width:200, height: 200}}/>
            <TouchableOpacity>
            <Text style={{textAlign: 'center', fontSize: 30}}>exercise</Text>
            </TouchableOpacity>
                
                
         </View>
         <View>
          <Image
            source={require("../assets/zumba.jpeg")}
            style={{width:200, height: 200}}/>
            <TouchableOpacity>
            <Text style={{textAlign: 'center', fontSize: 30}}>zumba</Text>
            </TouchableOpacity>
                
         </View>
         <View>
          <Image
            source={require("../assets/yoga.jpg")}
            style={{width:200, height: 200}}/>
            <TouchableOpacity>
            <Text style={{textAlign: 'center', fontSize: 30}}>yoga</Text>
            </TouchableOpacity>
               
         </View>
        </View>
        
      
   )
  }
}
