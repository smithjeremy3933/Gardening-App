import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const PlantForm = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText
}) => {
  const [plantName, setPlantName] = useState("");
  console.log(plantName);

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input
          value={plantName}
          onChangeText={setPlantName}
          placeholder="Enter Plant Name"
        />
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
      </Spacer>
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ plantName })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15
  }
});

export default PlantForm;
