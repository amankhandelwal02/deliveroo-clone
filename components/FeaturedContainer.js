import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";
import sanityClient from "../sanity";


const FeaturedContainer = ({ id, title, description, FeaturedCategory }) => {

  const [resturants, setResturants] = React.useState([]);

  useEffect(() => {
    sanityClient.fetch(
      `
      *[_type == "featured" && _id == $id] {
        ...,
        resturants[]-> {
          ...,
          dishes[]->,
          type-> {
            name
          }
        },
      }[0]
      `, { id }
    ).then((data) => {
      setResturants(data?.resturants);
    })
  }, []);


  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>  
        <TouchableOpacity>
          <ArrowRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {/* {Array(10)
          .fill()
          .map((_, index) => (
            <ResturantCard
              id="1"
              imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
              title="Testing"
              rating="4.5"
              genre="Sushi"
              address="123 Main St"
              description="This is a description"
              dishes="Sushi, Sushi, Sushi"
              long="-122.4207"
              lat="37.7858"
            />
          ))} */}

          {
            resturants?.map((resturant, index) => (
              <ResturantCard 
                key={resturant._id}
                id={resturant._id}
                imgUrl={resturant.image}
                title={resturant.name}
                rating={resturant.rating}
                genre={resturant.type?.name}
                address={resturant.address}
                description={resturant.description}
                dishes={resturant.dishes}
                long={resturant.lng}
                lat={resturant.lat}
              />
            ))
          }
      </ScrollView>
    </View>
  );
};

export default FeaturedContainer;

const styles = StyleSheet.create({});
