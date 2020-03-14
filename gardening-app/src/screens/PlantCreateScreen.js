import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { Context as PlantContext } from "../context/PlantContext";
import PlantForm from "../components/PlantForm";

const PlantCreateScreen = () => {
  const { state, createPlant } = useContext(PlantContext);
  console.log(state);

  return (
    <View style={styles.container}>
      <PlantForm
        headerText="Create A Plant!"
        errorMessage={state.errorMessage}
        submitButtonText="Create PLant"
        onSubmit={createPlant}
      />
    </View>
  );
};

PlantCreateScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250
  }
});

export default PlantCreateScreen;
