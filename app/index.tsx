import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Navbar from "../components/navbar";

const events = [
  {
    title: "Visa OA",
    time: "12:00 PM",
    description: "Online assessment for Visa internship hiring.",
  },
  {
    title: "Thermal Assign",
    time: "12:00 PM",
    description: "Thermal Engineering assignment discussion.",
  },
  {
    title: "FAANG - Meet",
    time: "12:00 PM",
    description: "Career guidance session with FAANG engineers.",
  },
  {
    title: "Me-209",
    time: "12:00 PM",
    description: "Mechanical lab orientation and safety briefing.",
  },
];

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <View className="flex-1 bg-[#f5f5f5]">
      {/* Navbar is now NORMAL */}
      <Navbar name="Shivam Kumar" roll="24/ME/265" />

      {/* Scrollable content */}
      <ScrollView
        className="px-4 pt-4"
        showsVerticalScrollIndicator={false}
      >
        {events.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.85}
            onPress={() => setSelectedEvent(item)}
            className="bg-white rounded-2xl mb-4 border border-gray-200"
          >
            <View className="flex-row items-center justify-between px-4 py-4">
              <Text className="text-base font-semibold text-gray-900">
                {item.title}
              </Text>

              <View className="flex-row items-center space-x-3">
                <Text className="text-sm text-gray-500">{item.time}</Text>
                <Ionicons
                  name="ellipsis-vertical"
                  size={18}
                  color="#6b7280"
                />
              </View>
            </View>

            <View className="h-[1px] bg-gray-200" />
            <View className="h-12" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* CENTER MODAL */}
      <EventPopup
        visible={!!selectedEvent}
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </View>
  );
}


function EventPopup({
  visible,
  event,
  onClose,
}: {
  visible: boolean;
  event: any;
  onClose: () => void;
}) {
  if (!event) return null;

  return (
    <Modal transparent visible={visible} animationType="fade">
      {/* Overlay */}
      <View className="flex-1 bg-black/40 justify-center items-center px-6">
        {/* Popup card */}
        <View className="bg-white w-full rounded-2xl p-5">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-semibold text-gray-900">
              {event.title}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={22} color="#374151" />
            </TouchableOpacity>
          </View>

          <Text className="text-sm text-gray-500 mb-2">
            Time: {event.time}
          </Text>

          <Text className="text-base text-gray-700 leading-6">
            {event.description}
          </Text>
        </View>
      </View>
    </Modal>
  );
}
