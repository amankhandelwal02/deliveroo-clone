import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BottomSummery = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const backetTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;
  
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
        onPress={() => navigation.navigate("Basket")}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-3">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={backetTotal} currency="INR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSummery;

const styles = StyleSheet.create({});
