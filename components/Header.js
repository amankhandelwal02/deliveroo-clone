import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";

const Header = () => {
  return (
    <View className="flex-row items-center space-x-3 p-2">
      <Image
        source={{
          uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <View className="flex-row items-center space-x-1">
          <Text className="font-bold text-xl">Current Location</Text>
          <TouchableOpacity>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <UserIcon size={30} color="#00CCBB" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
