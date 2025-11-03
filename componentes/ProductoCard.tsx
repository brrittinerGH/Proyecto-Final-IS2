import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import { Producto } from "../servicio/Api";

type Props = {
  item: Producto;
  onPress?: () => void;
};

export default function ProductoCard({ item, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: item.image }} style={styles.imagen} />

        <View style={{ flex: 1 }}>
          <Text style={styles.nombre} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.precio}>${item.price}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a2738",
    padding: 18,
    borderRadius: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  imagen: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 6,
    backgroundColor: "#0f1115",
  },
  nombre: {
    color: "#eaeaea",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  precio: {
    color: "#b3c7ff",
    fontSize: 14,
    fontWeight: "500",
  },
});