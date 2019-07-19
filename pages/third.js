import React,{Component} from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'

export default class third extends Component{
    render(){
        return <View>
            <Text style={styles.textStyle}>Third</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    textStyle:{
        marginTop:100
    }
});