import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  destino?: string;  
};

export default function BotonAtras({ destino }: Props) {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  const volver = () => {
    if (destino) {
      navigation.navigate(destino); 
    } else {
      navigation.goBack(); 
    }
  };

  return (
    <TouchableOpacity
      style={[styles.boton, { top: insets.top + 10 }]}
      onPress={volver}
    >
      <Text style={styles.flecha}>←</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    position: "absolute",
    left: 15,
    backgroundColor: "#1a2738",
    padding: 14,
    borderRadius: 30,
    zIndex: 10,
    elevation: 10,
  },
  flecha: {
    color: "#eaeaea",
    fontSize: 20,
    fontWeight: "bold",
  },
});

