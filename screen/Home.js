import React ,{useState, useCallback,useEffect} from 'react';
import {Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import PalletePreview from '../component/PalletePreview';

const Home=({navigation,route})=>{
  const addcolorpallete = route.params ? route.params.addcolorpallete : undefined;
  const [ColorPalletes,setColorPalletes]=useState([]);
  const [isrefreshing,setisrefreshing]=useState(false);

  const fetchColorPalletes=useCallback(async ()=>{
    const result=await fetch (
      'https://color-palette-api.kadikraman.vercel.app/palettes'
    );
    if(result.ok){
      const palletes= await result.json();
      setColorPalletes(palletes);
    };
  });

  useEffect(()=>{
    fetchColorPalletes();
  },[]);
  const handlerefresh=useCallback(async ()=>{
    setisrefreshing(true);
    await fetchColorPalletes();
    setTimeout(() => {
      setisrefreshing(false);
    }, 500);
  });
  useEffect(()=>{
    if(addcolorpallete){
      setColorPalletes(palletes=>[addcolorpallete, ...palletes])
    }
  },[addcolorpallete]);
    return(
        <FlatList
        style={styles.list}
        data={ColorPalletes}
        keyExtractor={item=>item.paletteName}
        renderItem={({item})=>(
            <PalletePreview 
            handlepress={()=>{
                navigation.navigate('Colorpallete',item);
            }}
            colorpallete={item}
            /> 
        )}
        refreshing={isrefreshing}
        onRefresh={handlerefresh}
        ListHeaderComponent={
          <TouchableOpacity onPress={()=>{navigation.navigate('ColorPalleteModel')}}>
            <Text style={styles.buttontext}>Add a Color Scheme</Text>
          </TouchableOpacity>
        }
        />
    );
};
const styles=StyleSheet.create({
  list:{
    padding:10,
    backgroundColor:'white',
  },
  buttontext:{
    fontWeight:'bold',
    fontSize:18,
    color:'teal',
    marginBottom:10,
  },
});
export default Home;