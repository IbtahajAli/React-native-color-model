import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,FlatList} from "react-native";

const PalletePreview=({handlepress,colorpallete})=>{
    return(
        <TouchableOpacity onPress={handlepress}>
            <Text style={styles.text}>{colorpallete.paletteName}</Text>
            <FlatList
                style={styles.list}
                horizontal={true}
                data={colorpallete.colors.slice(0,5)}
                keyExtractor={item=>item.colorName}
                renderItem={({item})=>(
                    <View style={[styles.box,{backgroundColor:item.hexCode}]}/>
                )}
            />
        </TouchableOpacity>
    );

};
const styles = StyleSheet.create({
    text: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 10,
    },
    box: {
      height: 30,
      width: 30,
      marginRight: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 1,
      elevation: 2,
    },
    list: {
      marginBottom: 20,
      flexDirection: 'row',
    },
  });
  export default PalletePreview;