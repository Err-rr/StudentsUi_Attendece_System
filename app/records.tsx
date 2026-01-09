import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Navbar from "../components/navbar";

const records = [
  {
    title: "Visa OA",
    status: "Present",
    date: "1-Jan-2025",
    time: "12:00 PM",
  },
  {
    title: "Meet",
    status: "Absent",
    date: "1-Jan-2025",
    time: "12:00 PM",
  },
];

export default function Records() {
  const [navHeight, setNavHeight] = useState(0);

  return (
    <View className="flex-1 bg-[#f5f5f5]">
      {/* Floating Navbar */}
      <Navbar
        name="Shivam Kumar"
        roll="24/ME/265"
        onHeight={setNavHeight}
      />

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={{
          paddingTop: navHeight + 16,
          paddingBottom: 24,
        }}
        className="px-4"
        showsVerticalScrollIndicator={false}
      >
        {records.map((item, index) => {
          const isPresent = item.status === "Present";

          return (
            <View
              key={index}
              className="
                bg-white
                rounded-2xl
                mb-4
                overflow-hidden
                border
                border-gray-200
              "
            >
              {/* Top row */}
              <View className="flex-row items-center justify-between px-4 py-4">
                <Text className="text-base font-semibold text-gray-900">
                  {item.title}
                </Text>

                <View className="flex-row items-center space-x-3">
                  <Text
                    className={`text-sm font-semibold ${
                      isPresent ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </Text>
                  <Ionicons
                    name="ellipsis-vertical"
                    size={18}
                    color="#6b7280"
                  />
                </View>
              </View>

              {/* Divider */}
              <View className="h-[1px] bg-gray-200" />

              {/* Bottom row */}
              <View className="flex-row justify-between px-4 py-3">
                <Text className="text-sm text-gray-500">
                  {item.date}
                </Text>
                <Text className="text-sm text-gray-500">
                  {item.time}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
