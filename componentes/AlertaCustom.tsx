import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  visible: boolean;
  mensaje: string;
  onCerrar: () => void;
}

export default function AlertaCustom({ visible, mensaje, onCerrar }: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.fondo}>
        <View style={styles.caja}>
          <Text style={styles.texto}>{mensaje}</Text>
          <TouchableOpacity style={styles.boton} onPress={onCerrar}>
            <Text style={styles.botonTexto}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  caja: {
    backgroundColor: "#141820",
    padding: 25,
    borderRadius: 12,
    width: "75%",
    alignItems: "center",
  },
  texto: {
    color: "#eaeaea",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  boton: {
    backgroundColor: "#b3c7ff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  botonTexto: {
    color: "#0f1115",
    fontWeight: "bold",
  },
});
