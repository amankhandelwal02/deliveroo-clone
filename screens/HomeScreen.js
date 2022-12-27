import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Header from "../components/Header";
import Search from "../components/Search";
import Category from "../components/Category";
import FeaturedContainer from "../components/FeaturedContainer";
import sanityClient from "../sanity";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [featuredCategory, setFeaturedCategory] = React.useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        resturants[]->{
          ...,
          dihses[]->
        }
      }
      `
      )
      .then((data) => {
        setFeaturedCategory(data);
      });
  }, []);


  return (
    <SafeAreaView className="bg-white h-full">
      {/* Header */}
      <Header />

      {/* Search */}
      <Search />

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      >
        {/* Category */}
        <Category />

        {featuredCategory?.map((category, index) => (
          <FeaturedContainer
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.description}
          />
        ))}

        {/* Featured */}
        {/* <FeaturedContainer
            id="1"
            title="Featured Containers"
            description="Featured containers are the most popular containers in the world"
            FeaturedCategory="featured"
          /> */}
        {/* Tasty Discounts */}
        {/* <FeaturedContainer
            id="2"
            title="Featured Containers"
            description="Featured containers are the most popular containers in the world"
            FeaturedCategory="discount"
          /> */}
        {/* Offers for you */}
        {/* <FeaturedContainer
            id="3"
            title="Featured Containers"
            description="Featured containers are the most popular containers in the world"
            FeaturedCategory="offer"
          /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
