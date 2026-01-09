import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Navbar from "../components/navbar";

const classes = [
  { title: "Visa OA", time: "12:00 PM" },
  { title: "Thermal Assign", time: "12:00 PM" },
  { title: "FAANG - Meet", time: "12:00 PM" },
  { title: "Me-209", time: "12:00 PM" },
];

export default function Home() {
  const [navHeight, setNavHeight] = useState(0);

  return (
    <View className="flex-1 bg-[#f5f5f5]">

      {/* Floating navbar */}
      <Navbar
        name="Shivam Kumar"
        roll="24/ME/265"
        onHeight={setNavHeight}
      />

      {/* Content pushed exactly below navbar */}
      <ScrollView
        contentContainerStyle={{
          paddingTop: navHeight + 16,
          paddingBottom: 24,
        }}
        className="px-4"
        showsVerticalScrollIndicator={false}
      >
        {classes.map((item, index) => (
          <View
            key={index}
            className="bg-white rounded-2xl mb-4 border border-gray-200"
          >
            <View className="flex-row items-center justify-between px-4 py-4">
              <Text className="text-base font-semibold text-gray-900">
                {item.title}
              </Text>

              <View className="flex-row items-center space-x-3">
                <Text className="text-sm text-gray-500">
                  {item.time}
                </Text>
                <Ionicons
                  name="ellipsis-vertical"
                  size={18}
                  color="#6b7280"
                />
              </View>
            </View>

            <View className="h-[1px] bg-gray-200" />
            <View className="h-12" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
