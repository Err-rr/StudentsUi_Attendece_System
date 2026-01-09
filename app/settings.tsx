import { View, Text, Switch } from "react-native";
import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);

  return (
    <View className="flex-1 bg-[#f5f5f5] px-4 pt-12">
      <View className="bg-white rounded-2xl p-4 mb-6">
        <Text className="text-xl font-bold">Anubhav</Text>
        <Text className="text-gray-500">faculty</Text>
      </View>

      <View className="bg-white rounded-2xl p-4 mb-4">
        <Text className="font-semibold mb-3">Preferences</Text>
        <View className="flex-row justify-between">
          <Text>Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
          />
        </View>
      </View>
    </View>
  );
}
