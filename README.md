#  Proyecto Final IS2

Aplicación móvil desarrollada con React Native + Expo como proyecto final para la materia Ingeniería de Software II.
La app permite gestionar productos consumiendo una API externa: crear, listar, ver detalles, modificar y eliminar productos.

# Instalación y Ejecución

```bash
# Clonar repositroio
git clone https://github.com/brrittinerGH/Proyecto-Final-IS2.git

# Instalar dependencias
npm install

# Ejecutar la aplicación
npx expo start

```

# API Utilizada

Se utilizó la API pública FakeStore API para obtener y administrar productos.

URL: <https://fakestoreapi.com/docs#tag/Products>

# ¿Cómo funciona la aplicación?

## Flujo de uso:

### Pantalla de Inicio

Desde aquí se puede acceder al listado de productos.

### Listado de Productos

Se muestran todos los productos obtenidos desde la API.

Cada tarjeta incluye imagen, nombre y precio.

Tocando un producto se accede a su detalle.

### Detalle del Producto

Se visualiza la información completa del producto.

Desde esta pantalla se puede:

Modificar el producto

Eliminar el producto

### Modificar Producto

Se reutiliza el mismo formulario usado para la creación.

Se pueden editar todos los campos.

Al guardar, la actualización se envía a la API.

### Crear Producto

Permite agregar nuevos productos usando el mismo formulario.

Al confirmar, el producto se envía a la API y vuelve a la lista.

### Eliminar Producto

Se muestra una pantalla de confirmación antes de borrar.

Una vez confirmado, se elimina el producto de la API.

# Estructura de Carpetas

```bash

Proyecto-Final-IS2/
│
├── App.tsx
├── AppNavigation.tsx (Se me olvido ponerlo en una carpeta)
│
├── pantallas/
│   ├── HomeScreen.tsx
│   ├── PantallaListaProductos.tsx
│   ├── PantallaDetalle.tsx
│   ├── PantallaCrear.tsx
│   ├── PantallaModificar.tsx
│   └── PantallaBorrar.tsx
│
├── componentes/
│   ├── ProductoCard.tsx
│   ├── FormProducto.tsx
│   ├── BotonAtras.tsx
│   └── AlertaCustom.tsx
│
└── servicio/
    └── Api.ts


```

## /pantallas 

Contiene todas las pantallas principales de la aplicación.
Cada pantalla representa una vista en la navegación.

HomeScreen:	Pantalla inicial donde se presentan opciones para navegar.
PantallaListaProductos:	Muestra la lista completa de productos obtenidos desde la API.
PantallaDetalle:	Muestra la información detallada de un producto seleccionado.
PantallaCrear:	Permite crear un nuevo producto mediante un formulario.
PantallaModificar: Permite editar un producto existente utilizando el mismo formulario reutilizable.
PantallaBorrar:	Pantalla de confirmación para eliminar el producto.

## /componentes 

Componentes reutilizables de la UI.

ProductoCard:	Tarjeta visual para mostrar cada producto en la lista (imagen, título y precio).
FormProducto:	Formulario reutilizable para Crear y Modificar productos. Maneja campos como imagen, título, precio, categoría y descripción.
BotonAtras:	Botón flotante para volver atrás o navegar a una pantalla específica.
AlertaCustom:	Modal personalizado para mostrar mensajes de éxito o error.

## /servicio 

Contiene la lógica para interactuar con la API.

Api: Define las funciones para obtener, crear, modificar y eliminar productos utilizando la FakeStore API.

## Otros archivos importantes

AppNavigation: Configura la navegación entre pantallas utilizando React Navigation.

# Información Adicional 

Durante el desarrollo del proyecto se aplicaron buenas prácticas de modularización, reutilización de componentes y organización del código. Se crearon componentes reutilizables como el formulario (FormProducto), la tarjeta de producto (ProductoCard) y el botón de navegación (BotonAtras), lo que permitió mantener el código más limpio y fácil de mantener.

Además, se utilizó Inteligencia Artificial como herramienta de apoyo, principalmente para:

Obtener sugerencias de diseño visual y estructura de interfaces. (aunque quedo humilde)

Resolver dudas puntuales y mejorar la claridad de algunas funciones.

Optimizar fragmentos de código redundante.






