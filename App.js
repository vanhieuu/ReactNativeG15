import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
  Alert,
  Image,
  ImageBackground,
  FlatList
} from 'react-native';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image source = {require('./assets/favicon.png')}
    style ={{
        width: 100,
        height: 100
      }}
      />
       <Image source={{
          uri:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
    style ={{
        width: 100,
        height: 100
      }}
      />

      <ImageBackground 
        source ={{uri: "https://reactjs.org/logo-og.png"}}
        style ={{
          width: 200,
          height: 200,
          backgroundColor:'red'
        }}
        resizeMode = {"cover"}
        />
  </View>
);

export default function App() {
  // const renderItem = ({ item }) => ( // Biến là 1 object 
  //   <Item title={item.title} />
  // ); // => Đây là viết tắt 
  const renderItem = ({ item }) => {
    return <Item title={item.title} />
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ActivityIndicator size="small" color="#0000ff" />
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <StatusBar style="auto" />
      <FlatList
        data={DATA} // Tối thiểu cần 3 tham số 
        renderItem={renderItem}
        keyExtractor={item => item.id} // cái này để return ra 1 cái key => gán cho mỗi item 1 key để tránh trùng nhau 
      />
    </View>

  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  item: {
    width:200,
    backgroundColor: 'green',
    marginBottom:16,
    textAlign: 'center'
  },
  title: {
    fontSize: 10,
    color: 'red'
  },
});
