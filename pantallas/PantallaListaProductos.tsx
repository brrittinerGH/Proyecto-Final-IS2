import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Api, Producto } from "../servicio/Api";
import BotonAtras from "../componentes/BotonAtras";

export default function PantallaListaProductos() {
  const navigation = useNavigation<any>();

  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    setCargando(true);
    const data = await Api.getProductos();
    setProductos(data);
    setCargando(false);
  };

  if (cargando) {
    return (
      <View style={styles.cargando}>
        <ActivityIndicator size="large" color="#b3c7ff" />
        <Text style={styles.texto}>Cargando productos...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <BotonAtras destino="Home" />

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingTop: 60 }} // ← deja espacio para el botón
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Detalle", { id: item.id })}
          >
            <View style={styles.row}>
              <Image source={{ uri: item.image }} style={styles.imagen} />

              <View style={{ flex: 1 }}>
                <Text style={styles.nombre} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.precio}>${item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1115",
  },
  item: {
    backgroundColor: "#1a2738",
    padding: 18,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 15,
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
  cargando: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f1115",
  },
  texto: {
    color: "#eaeaea",
    marginTop: 10,
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
});

