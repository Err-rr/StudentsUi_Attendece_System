import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type NavbarProps = {
  name: string;
  roll: string;
  onHeight?: (h: number) => void;
};

export default function navbar({ name, roll, onHeight }: NavbarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      onLayout={(e) => onHeight?.(e.nativeEvent.layout.height)}
      style={{ paddingTop: insets.top + 16 }}
      className="
        absolute
        top-0
        left-0
        right-0
        z-50
        bg-white
        px-5
        pb-5
        flex-row
        items-center
        justify-between
        rounded-b-3xl
        shadow-md
      "
    >
      {/* Left */}
      <View>
        <Text className="text-xl font-bold text-black">
          {name}
        </Text>
        <Text className="text-sm text-gray-600 mt-0.5">
          {roll}
        </Text>
      </View>

      {/* Right */}
      <Image
        source={require("../assets/images/dtu.png")}
        className="w-14 h-14"
        resizeMode="contain"
      />
    </View>
  );
}
