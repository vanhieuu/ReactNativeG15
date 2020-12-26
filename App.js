import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
  Alert,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
// import { getStatusBarHeight } from "react-native-iphone-x-helper";
const width = Dimensions.get("window").width;
const scaleImg = 375 / 272;
const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <TouchableOpacity style={styles.btnHeader}>
        <Image source={require("./assets/ic_back.png")} />
      </TouchableOpacity>
      <Text style={styles.txtTitle}>On the Menu</Text>
      <TouchableOpacity style={styles.btnHeader}>
        <Image source={require("./assets/Shape.png")} />
      </TouchableOpacity>
    </View>
  );
};
const dataImg = [
  {
    id: 0,
    source: require("./assets/img_recipe.png"),
  },
  {
    id: 1,
    source: require("./assets/img_recipe.png"),
  },
  {
    id: 2,
    source: require("./assets/img_recipe.png"),
  },
];
const Sumary = () => {
  return (
    <>
      <View style={styles.rowSumary}>
        <View style={styles.itemSumary}>
          <Image source={require("./assets/Clock2.png")} />
          <Text style={styles.txtSumary}>
            Takes <Text style={{ fontWeight: "bold" }}>15</Text> mins
          </Text>
        </View>
        <View style={styles.itemSumary}>
          <Image source={require("./assets/Service.png")} />
          <Text style={styles.txtSumary}>
            <Text style={{ fontWeight: "bold" }}>2 </Text>serving
          </Text>
        </View>
      </View>
      <View style={styles.rowSumary}>
        <View style={styles.itemSumary}>
          <Image source={require("./assets/Location.png")} />
          <Text style={styles.txtSumary}>Mexico Cuisine</Text>
        </View>
        <View style={styles.itemSumary}>
          <Image source={require("./assets/Fire.png")} />
          <Text style={styles.txtSumary}>
            <Text style={{ fontWeight: "bold" }}>234</Text> cal/serving*
          </Text>
        </View>
      </View>
    </>
  );
};
const Rating = () => {
  return (
    <View style={styles.containerRating}>
      <Image
        source={require("./assets/ic_rate_full.png")}
        style={{ marginRight: 4 }}
      />
      <Image
        source={require("./assets/ic_rate_full.png")}
        style={{ marginRight: 4 }}
      />
      <Image
        source={require("./assets/ic_rate_full.png")}
        style={{ marginRight: 4 }}
      />
      <Image
        source={require("./assets/ic_rate_full.png")}
        style={{ marginRight: 4 }}
      />
      <Image
        source={require("./assets/ic_rate_full.png")}
        style={{ marginRight: 4 }}
      />
      <Text style={styles.numberRating}>
        <Text style={{ fontWeight: "bold" }}>1693</Text>
        <Text> reviews</Text>
      </Text>
    </View>
  );
};
const ReviewandMaterial = () => {
  return (
    <>
      <View style={styles.containerViewDetail}>
        <Text style={styles.txtViewDetail}>View Details</Text>
        <Image source={require("./assets/ic_arrow_rightfull.png")} />
      </View>
      <View style={styles.line} />
      <Text style={styles.txtIntro}>Introductions</Text>
      <Text style={styles.txtContentIntro}>
        Strips of chicken breast fillet are marinated in soy sauce, fresh chilli
        and classic Chinese hoisin sauce and then quickly stir fried. More…
      </Text>
      <View style={styles.line} />
      <Text style={styles.txtIntro}>Ingredients</Text>
      <Text style={styles.inTheBox}>In the box</Text>
      <Text style={styles.txtContentIntro}>
        Ingredients for 2 people (double for 4)
      </Text>
      <View style={styles.wrapInput}>
        {Datafood.map((item, index) => {
          return (
            <View
              style={[
                styles.itemFood,
                { marginHorizontal: index % 3 === 1 ? 16 : 0 },
              ]}
            >
              <Image source={item.source} />
              <Text style={styles.nameFood}>{item.name}</Text>
            </View>
          );
        })}
      </View>
      <View>
        <Text
          style={{
            lineHeight: 20,
            fontWeight: "bold",
            fontSize: 16,
            marginHorizontal: 24,
          }}
        >
          From your pantry
        </Text>
        <View style={styles.wrapInput}>
          {dataFoodPantry.map((item, index) => {
            return (
              <View
                style={[
                  styles.itemFood,
                  {
                    marginHorizontal: index % 3 === 1 ? 16 : 0,
                  },
                ]}
              >
                <Image source={item.source} />
                <Text style={styles.nameFood}>{item.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};
const Datafood = [
  {
    id: 0,
    source: require("./assets/ChickenBreast.png"),
    name: "1 large British chicken breast fillet",
  },
  {
    id: 1,
    source: require("./assets/gem_lettuce.png"),
    name: "1 little gem lettuce",
  },
  {
    id: 2,
    source: require("./assets/red_onion.png"),
    name: "1 red onion",
  },
  {
    id: 3,
    source: require("./assets/rep_pepper.png"),
    name: "1 red pepper",
  },
  {
    id: 4,
    source: require("./assets/ground_cumin.png"),
    name: "2 tsp ground cumin",
  },
  {
    id: 5,
    source: require("./assets/lime.png"),
    name: "1 lime",
  },
  {
    id: 6,
    source: require("./assets/yoghurt.png"),
    name: "80g natural yoghurt†",
  },
  {
    id: 7,
    source: require("./assets/smoked_paprika.png"),
    name: "2 tsp smoked paprika",
  },
  {
    id: 8,
    source: require("./assets/tomato.png"),
    name: "1 tomato",
  },
  {
    id: 9,
    source: require("./assets/coriander.png"),
    name: "5g coriander",
  },
  {
    id: 10,
    source: require("./assets/ground_coriander.png"),
    name: "1 tsp ground coriander",
  },
];
const dataFoodPantry = [
  {
    id: 0,
    source: require("./assets/dried_cranberries.png"),
    name: "30g dried cranberries",
  },
  {
    id: 1,
    source: require("./assets/blanched_almonds†.png"),
    name: "1 bag of blanched almonds†",
  },
];
const Line = () => {
  return <View style={styles.line}></View>;
};
const Alllergens = () => {
  return (
    <>
      <View>
        <Text style={styles.Alllergens}>Allergens</Text>
        <Text style={[styles.Alllergens, { marginTop: 16 }]}>
          Gluten, Sesame, Soya, Sulphites
        </Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 28,
            color: "#7D8699",
            marginHorizontal: 24,
          }}
        >
          Produced in a facility that processes milk, eggs, fish, shellfish,
          tree nuts, peanuts, wheat, and soybean.
        </Text>
      </View>
    </>
  );
};
const widthItemFood = parseInt((width - 80) / 3);
const heightItemFood = (widthItemFood / 98) * 126;
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.slider}>
          <ScrollView horizontal pagingEnabled>
            {dataImg.map((item, index) => {
              return (
                <Image source={item.source} style={styles.slider} key={index} />
              );
            })}
          </ScrollView>
        </View>
        <Text style={styles.containerTittle}>
          Chicken Fajitas With Seeded Tortilla Wraps & Salsa
        </Text>
        <Rating />
        <Sumary />
        <ReviewandMaterial />
        <Line />
        <Alllergens/>
        <Line />
        <View>
            <Text style={{
              marginTop:40,
              fontWeight:500,
              fontSize:24,
              lineHeight:24,
            }}>
            Tips from Home Chefs
            </Text>
            <Rating />
            <Text style={{
              marginHorizontal:17,
              fontSize:14,
              lineHeight:28,
            }}>
                  Read helpful tips from other BA customers who have cooked the same recipe, or post your own.
            </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flexDirection: "row",
    height: 88,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    // paddingTop:getStatusBarHeight(),
  },
  btnHeader: {
    justifyContent: "center",
    paddingHorizontal: 16,
    height: "100%",
  },
  txtTitle: {
    fontSize: 16,
    lineHeight: 20,
    color: "#1d1e2c",
  },
  slider: {
    width: width,
    height: width / scaleImg,
  },
  containerRating: {
    flexDirection: "row",
    marginHorizontal: 24,
    marginTop: 12,
    alignItems: "center",
  },
  numberRating: {
    fontSize: 14,
    lineHeight: 17,
    color: "#1d1e2c",
    marginLeft: 8,
  },
  containerTittle: {
    fontSize: 28,
    lineHeight: 36,
    color: "#1D1E2C",
    fontWeight: "600",
    marginTop: 16,
    marginHorizontal: 24,
  },
  txtSumary: {
    marginLeft: 12,
    fontSize: 14,
    lineHeight: 17,
    color: "#1D1E2C",
  },
  itemSumary: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rowSumary: {
    flexDirection: "row",
    marginHorizontal: 24,
    marginTop: 22,
  },
  containerViewDetail: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: 42,
    marginTop: 9,
  },
  txtViewDetail: {
    fontSize: 12,
    lineHeight: 15,
    color: "#fe9870",
    marginRight: 3,
  },
  line: {
    height: 1,
    marginVertical: 16,
    marginHorizontal: 24,
    backgroundColor: "#f7f7fb",
  },
  txtIntro: {
    fontSize: 20,
    lineHeight: 24,
    color: "#1d1e2c",
    margin: 24,
    marginBottom: 16,
  },
  txtContentIntro: {
    fontSize: 14,
    lineHeight: 28,
    color: "#1d1e2c",
    marginHorizontal: 24,
  },
  inTheBox: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 24,
    fontWeight: "bold",
  },
  itemFood: {
    width: widthItemFood,
    alignItems: "center",
    height: heightItemFood,
    marginBottom: 6,
  },
  nameFood: {
    fontSize: 10,
    lineHeight: 18,
    marginTop: 8,
    textAlign: "center",
  },
  wrapInput: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 24,
  },

  Alllergens: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 24,
    marginHorizontal: 24,
  },
});
