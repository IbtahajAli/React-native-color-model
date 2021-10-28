import React from 'react';
import { View,Text,StyleSheet} from 'react-native';
const Colorbox=({colorName,hexCode})=>{
    const boxcolor={
        backgroundColor:hexCode,
    };
    const textcolor={
        color: parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ?'black':'white'
    };
    return(
        <View style={[styles.box,boxcolor]}>
            <Text style={styles.text,textcolor}>{colorName}: {hexCode}</Text>
        </View>
    );
};  
const styles=StyleSheet.create({
    box:{
        marginTop:5,
        marginRight:5,
        marginLeft:5,
        paddingTop:5,
        paddingBottom:5,
        justifyContent:'center',
        alignItems:'center',
        
    },
    text:{
        color:'white',
        fontWeight:'bold',
    },
})
export default Colorbox;