$ node server.js

## RutaSegura.

Aplicación que entrega información relevante sobre estados de las ruta, combustibles, clima, etc.

#### Ubicación
La aplicación usa la ubicación entregada por el navegador y la pasa a una api de clima que entrega el clima en tiempo real.

#### Distancias / Consumo
En el header es posible seleccionar una región de origen y destino. Cada región contiene coordenadas pre-definidas que al ser seleccionadas y hacer click al botón "vamos",  muestra un modal con información interesante, como la distancia total, tiempo estimado para automovil/bus/camión, además del consumo de combustibles.

#### Usuarios
Los usuarios podrán contar con una ventana de login, que les permite reportar incidentes en la ruta (estado del camino, accidentes, etc). Estos mensajes aparecen junto a la información de clima como cajas de comentarios, con el nombre del usuario, región, y el reporte.

##### Tecnologías
Se utilizó Html, Css/Bootstrap y Javascript.
Para animaciónes se utilizará https://lottiefiles.com/ . Un formato basado en archivos JSON que permite importar animaciones a un muy bajo peso, renderizadas previamente desde softwares como After Effects.
