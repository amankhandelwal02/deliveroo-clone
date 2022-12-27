import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBacket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { useDispatch } from "react-redux";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { SafeAreaView } from "react-native-safe-area-context";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);

  const basketTotal = useSelector(selectBasketTotal);
  const deliveryFees = 45;

  const dispatch = useDispatch();

  const [groupItemInBasket, setGroupItemInBasket] = React.useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupItemInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-gray-400 text-center">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon height={50} width={50} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 20-30 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-300">
          {Object.entries(groupItemInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 px-2 py-5 bg-white"
            >
              <Text className="">{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="INR" />
              </Text>

              <TouchableOpacity
                className="text-[#00CCBB] text-xs"
                onPress={() => dispatch(removeFromBacket({ id: key }))}
              >
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 mt-5 space-y-4 bg-white">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="INR" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fees</Text>
            <Text className="text-gray-400">
              <Currency quantity={deliveryFees} currency="INR" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Grand Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + deliveryFees} currency="INR" />
            </Text>
          </View>

          <TouchableOpacity
            className="rounded-lg bg-[#00CCBB] p-4"
            onPress={() => navigation.navigate("PreparingOrder")}
          >
            <Text className="text-center font-bold text-white text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({});
