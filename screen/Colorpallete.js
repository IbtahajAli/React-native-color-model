import React from 'react';
import {FlatList,StyleSheet,Text} from 'react-native';
import Colorbox from '../component/Colorbox';

const Colorpallete=({route})=>{
  const {colors,palleteName}=route.params;
    return (
      <FlatList
        style={styles.container}
          data={colors}
          keyExtractor={item => item.hexCode}
          renderItem={({ item }) => (
            <Colorbox colorName={item.colorName} hexCode={item.hexCode} 
          />
        )}
        ListHeaderComponent={<Text style={styles.Text}>{palleteName}</Text>}
      />
    );
};
const styles=StyleSheet.create({
  container:{
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor:'white',
  },
  Text:{
    color:'white',
    fontWeight:'bold',
  },
});
export default Colorpallete;