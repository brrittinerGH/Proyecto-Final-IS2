import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./pantallas/HomeScreen";
import PantallaListaProductos from "./pantallas/PantallaListaProductos";
import PantallaDetalle from "./pantallas/PantallaDetalle";
import PantallaModificar from "./pantallas/PantallaModificar";
import PantallaCrear from "./pantallas/PantallaCrear";
import PantallaBorrar from "./pantallas/PantallaBorrar";


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListaProductos" component={PantallaListaProductos} />
        <Stack.Screen name="Detalle" component={PantallaDetalle} />
        <Stack.Screen name="Modificar" component={PantallaModificar} />
        <Stack.Screen name="Crear" component={PantallaCrear} />
        <Stack.Screen name="Borrar" component={PantallaBorrar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
