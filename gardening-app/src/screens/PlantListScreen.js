import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { NavigationEvents } from "react-navigation";
import { ListItem } from "react-native-elements";
import { Context as PlantContext } from "../context/PlantContext";
import { Feather } from "@expo/vector-icons";

const PlantListScreen = ({ navigation }) => {
  const { state, fetchPlants } = useContext(PlantContext);
  return (
    <>
      <NavigationEvents onWillFocus={fetchPlants} />
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <>
              <ListItem
                title={item.plantName}
                bottomDivider
                onPress={() =>
                  navigation.navigate("PlantDetail", { _id: item._id })
                }
              />
            </>
          );
        }}
      />
    </>
  );
};

PlantListScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity>
        <Feather
          onPress={() => navigation.navigate("PlantCreate")}
          style={styles.createButton}
          name="plus"
          size={30}
        />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  createButton: {
    marginRight: 20
  }
});

export default PlantListScreen;
