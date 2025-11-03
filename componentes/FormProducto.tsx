import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Producto } from "../servicio/Api";



export type ProductoEditable = {
  id?: number;
  title: string;
  price: number | string;
  description: string;
  category: string;
  image: string;
};

type Props = {
  producto: ProductoEditable;
  setProducto: (producto: ProductoEditable) => void;
  textoBoton: string;
  onSubmit: () => void;
};



export default function FormProducto({ producto, setProducto, textoBoton, onSubmit }: Props) {
  if (!producto) return null;

  return (
    <View style={styles.form}>
      

      <TextInput
        style={styles.input}
        value={producto.image}
        onChangeText={(t) => setProducto({ ...producto, image: t })}
        placeholder="URL de la imagen"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        value={producto.title}
        onChangeText={(t) => setProducto({ ...producto, title: t })}
        placeholder="Título"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        value={producto.price?.toString() ?? ""}
        onChangeText={(t) => setProducto({ ...producto, price: t })}
        placeholder="Precio"
        placeholderTextColor="#888"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={producto.category}
        onChangeText={(t) => setProducto({ ...producto, category: t })}
        placeholder="Categoría"
        placeholderTextColor="#888"
      />

      <TextInput
        style={[styles.input, styles.textarea]}
        value={producto.description}
        onChangeText={(t) => setProducto({ ...producto, description: t })}
        placeholder="Descripción"
        placeholderTextColor="#888"
        multiline
      />

      <TouchableOpacity style={styles.boton} onPress={onSubmit}>
        <Text style={styles.botonTexto}>{textoBoton}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    gap: 15,
  },
  input: {
    backgroundColor: "#141820",
    color: "#eaeaea",
    borderWidth: 1,
    borderColor: "#2a2f3a",
    padding: 12,
    borderRadius: 10,
  },
  textarea: {
    height: 90,
    textAlignVertical: "top",
  },
  boton: {
    backgroundColor: "#1e90ff",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  botonTexto: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});