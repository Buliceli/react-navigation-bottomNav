import React,{Component} from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'

export default class first extends Component{
    render(){
        return <View style={styles.container}>
            <Text style={styles.textStyle}>First</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray',
       flex:1
    },
   textStyle:{
       marginTop:100
   }
});