import { Text, StyleSheet, Button, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Api } from "../servicio/Api";
import { useState } from "react";
import AlertaCustom from "../componentes/AlertaCustom";
import { SafeAreaView } from "react-native-safe-area-context";     

export default function PantallaBorrar() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { id } = route.params;

  const [alertaEliminado, setAlertaEliminado] = useState(false);
  const [alertaError, setAlertaError] = useState(false);

  const eliminar = async () => {
    try {
      await Api.eliminarProducto(id);
      setAlertaEliminado(true);
    } catch (error) {
      setAlertaError(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>     

      <Text style={styles.titulo}>¿Seguro que deseas eliminar este producto?</Text>

      <Button title="Eliminar" color="#b80000" onPress={eliminar} />
      <View style={{ height: 12 }} />
      <Button title="Cancelar" onPress={() => navigation.goBack()} />

      <AlertaCustom
        visible={alertaEliminado}
        mensaje="🗑️ Producto eliminado"
        onCerrar={() => {
          setAlertaEliminado(false);
          navigation.navigate("ListaProductos");
        }}
      />

      <AlertaCustom
        visible={alertaError}
        mensaje="❌ Error al eliminar el producto"
        onCerrar={() => setAlertaError(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1115",
    justifyContent: "center",
    padding: 24,
  },
  titulo: {
    color: "#eaeaea",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
});


