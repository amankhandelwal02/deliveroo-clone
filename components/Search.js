import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const Search = () => {
  return (
    <View className="flex-row items-center space-x-2 mx-2 pb-2">
      <View className="flex-row items-center space-x-2 flex-1 bg-gray-200 p-2">
        <SearchIcon color="gray" size={20} />
        <TextInput
          placeholder="Search for the food..."
          keyboardType="default"
        />
      </View>
      <TouchableOpacity>
        <AdjustmentsIcon color="#00CCBB" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
