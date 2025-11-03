import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Api } from "../servicio/Api";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductoEditable } from "../componentes/FormProducto";
import BotonAtras from "../componentes/BotonAtras";
import FormProducto from "../componentes/FormProducto";
import AlertaCustom from "../componentes/AlertaCustom";

export default function PantallaModificar() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { id } = route.params;

  const [producto, setProducto] = useState<ProductoEditable | null>(null);
  const [cargando, setCargando] = useState(true);
  const [alertaModificado, setAlertaModificado] = useState(false);

  useEffect(() => {
    Api.getProductosPorId(id).then((data) => {
      setProducto({
            ...data,
            price: data.price.toString(), 
          });      
    setCargando(false);
    });
  }, []);

  const guardarCambios = async () => {
    if (!producto) return;

    await Api.actualizarProducto(id, {
      title: producto.title,
      price: Number(producto.price),
      description: producto.description,
      category: producto.category,
      image: producto.image, 
    });

    setAlertaModificado(true);
  };

  if (cargando || !producto) {
    return (
      <SafeAreaView style={styles.cargando}>
        <ActivityIndicator size="large" color="#b3c7ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <BotonAtras />

       <View style={{ marginTop: 70 }}> 
          <FormProducto
            producto={producto}
            setProducto={setProducto}
            textoBoton="GUARDAR CAMBIOS ✏️"
            onSubmit={guardarCambios}
          />
        </View>

      <AlertaCustom
        visible={alertaModificado}
        mensaje="✏️ Producto modificado con éxito"
        onCerrar={() => {
          setAlertaModificado(false);
          navigation.navigate("Detalle", { id });
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1115",
    paddingHorizontal: 20,
  },
  cargando: {
    flex: 1,
    backgroundColor: "#0f1115",
    justifyContent: "center",
    alignItems: "center",
  },
});


