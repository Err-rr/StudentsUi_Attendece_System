import { View, Text, ScrollView, Switch, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Navbar from "../components/navbar";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  return (
    <View className="flex-1 bg-[#f5f5f5]">
      {/* Floating Navbar */}
      <Navbar name="Shivam Kumar" roll="24/ME/265" />

      <ScrollView
        contentContainerStyle={{ paddingTop: 120, paddingBottom: 24 }}
        className="px-4"
        showsVerticalScrollIndicator={false}
      >
        {/* ACCOUNT */}
        <Text className="text-gray-500 text-sm mb-2 ml-1">
          Account
        </Text>

        <View className="bg-white rounded-2xl mb-6 overflow-hidden">
          <SettingItem icon="person-outline" label="Profile" />
          <Divider />
          <SettingItem icon="shield-checkmark-outline" label="Security" />
          <Divider />
          <SettingItem icon="lock-closed-outline" label="Privacy" />
        </View>

        {/* PREFERENCES */}
        <Text className="text-gray-500 text-sm mb-2 ml-1">
          Preferences
        </Text>

        <View className="bg-white rounded-2xl mb-6 overflow-hidden">
          <SwitchItem
            icon="notifications-outline"
            label="Notifications"
            value={notifications}
            onChange={setNotifications}
          />
          <Divider />
          <SwitchItem
            icon="moon-outline"
            label="Dark Mode"
            value={darkMode}
            onChange={setDarkMode}
          />
          <Divider />
          <SettingItem icon="language-outline" label="Language" />
        </View>

        {/* DATA */}
        <Text className="text-gray-500 text-sm mb-2 ml-1">
          Data
        </Text>

        <View className="bg-white rounded-2xl overflow-hidden">
          <SwitchItem
            icon="cloud-outline"
            label="Auto Backup"
            value={autoBackup}
            onChange={setAutoBackup}
          />
          <Divider />
          <SettingItem icon="download-outline" label="Export Data" />
          <Divider />
          <SettingItem icon="trash-outline" label="Clear Cache" danger />
        </View>
      </ScrollView>
    </View>
  );
}

/* ----------------- Components ----------------- */

function SettingItem({
  icon,
  label,
  danger = false,
}: {
  icon: any;
  label: string;
  danger?: boolean;
}) {
  return (
    <TouchableOpacity className="flex-row items-center justify-between px-4 py-4">
      <View className="flex-row items-center space-x-3">
        <Ionicons
          name={icon}
          size={22}
          color={danger ? "#ef4444" : "#374151"}
        />
        <Text
          className={`text-base ${
            danger ? "text-red-500" : "text-gray-800"
          }`}
        >
          {label}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
    </TouchableOpacity>
  );
}

function SwitchItem({
  icon,
  label,
  value,
  onChange,
}: {
  icon: any;
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <View className="flex-row items-center justify-between px-4 py-4">
      <View className="flex-row items-center space-x-3">
        <Ionicons name={icon} size={22} color="#374151" />
        <Text className="text-base text-gray-800">{label}</Text>
      </View>

      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ false: "#e5e7eb", true: "#86efac" }}
        thumbColor={value ? "#10b981" : "#f3f4f6"}
      />
    </View>
  );
}

function Divider() {
  return <View className="h-[1px] bg-gray-200 ml-14" />;
}
