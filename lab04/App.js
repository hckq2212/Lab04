import { Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity,View, Image} from 'react-native';



export default function App() {


const data = [
  {
    image: require("./assets/ca_nau_lau.png"),
    title: "Ca nấu lẩu, nấu mì mini",
    shop:"Shop Devang",
  }
]

const Item = ({image,title,shop}) => {
  return(
  <View style={styles.container}>
    <Image source={image} style={{width:70, height: 70}} />
    <View style={styles.detail}>
      <Text>{title}</Text>
      <Text style={{color:'red'}}>{shop}</Text>
    </View>
      <TouchableOpacity style={styles.button}>Chat</TouchableOpacity>
  </View>);
}


  return (
    <SafeAreaView style={styles.container}>
          <FlatList
            data={data}
            renderItem={({item}) => <Item {...item}/>}
            keyExtractor={item => item.title}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    flexDirection:'row'
  },
  detail:{
    flex:1,
    alignItems:'center'
  },
  button:{
    backgroundColor:'red',
    color:'white',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:10,
    height:40,
    alignSelf:'center'
  }

});
