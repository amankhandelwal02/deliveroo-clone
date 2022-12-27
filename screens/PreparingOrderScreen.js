import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import gif from "../assets/Order_Preparing_GIF_AdobeExpress.gif";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryOrder");
    }, 5000);
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center pb-20">
      <Animatable.Image
        source={gif}
        animation="slideInUp"
        iterationCount={1}
        className="h-80 w-80"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-5 font-bold text-center"
      >
        Waiting for the restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={50} indeterminate={true} color="#00CCBB" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({});
