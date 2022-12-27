import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Category = () => {

  const [category, setCategory] = React.useState([]);

  useEffect(() => {
    sanityClient.fetch(
      `
      *[_type == "category"]`
    ).then((data) => {
      setCategory(data);
    })
  }, [])
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: 10,
      }}
    >
      {/* {Array(10)
        .fill()
        .map((_, index) => (
          <CategoryCard
            imageUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
            title="Testing"
          />
        ))} */}

      {category?.map((category, index) => (
        <CategoryCard 
        key={category._id}
        imageUrl={urlFor(category.image).width(200).url()}
        title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({});
