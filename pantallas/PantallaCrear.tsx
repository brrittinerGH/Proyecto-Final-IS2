import { useState } from "react";
import {StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Api } from "../servicio/Api";
import { ProductoEditable } from "../componentes/FormProducto";
import FormProducto from "../componentes/FormProducto";
import BotonAtras from "../componentes/BotonAtras";
import AlertaCustom from "../componentes/AlertaCustom";

export default function PantallaCrear() {
  const navigation = useNavigation<any>();

  const [producto, setProducto] = useState<ProductoEditable>({
    id: 0,
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const [alertaCampos, setAlertaCampos] = useState(false);
  const [alertaCreado, setAlertaCreado] = useState(false);

  const crear = async () => {
    if (!producto.title || !producto.price || !producto.category || !producto.description) {
      setAlertaCampos(true);
      return;
    }

    await Api.crearProducto({
      ...producto,
      price: Number(producto.price),
    });    
setAlertaCreado(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BotonAtras destino="Home"/>
      
      <View style={{ marginTop: 60 }}> 
        <FormProducto
          producto={producto}
          setProducto={setProducto}
          textoBoton="CREAR PRODUCTO ➕"
          onSubmit={crear}
        />
      </View>

      <AlertaCustom
        visible={alertaCampos}
        mensaje="⚠️ Completa todos los campos"
        onCerrar={() => setAlertaCampos(false)}
      />

      <AlertaCustom
        visible={alertaCreado}
        mensaje="✅ Producto creado con éxito"
        onCerrar={() => {
          setAlertaCreado(false);
          navigation.navigate("ListaProductos");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1115",
    padding: 20,
  },
});

