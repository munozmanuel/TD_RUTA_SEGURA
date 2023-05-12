# Talento Digital
### Proyecto 'Ruta Segura'
RutaSegura busca entregar información relevante para quienes están planificando un viaje dentro de Chile, mostrando datos como la distancia total, duración del viaje y  atractivos por región de destino.

## Funcionamiento General
Se cuenta con una vista index que muestra cabecera con opciones tipo select, una sección resumen que muestra la Tº actual según la ubicación del equipo (***navigator.geolocation***) pasándole datos de coordenadas a una api (weatherapi.com) para consumir esa información.
Al elegir una región de origen y una de destino, se pasan coordenadas una api que controla el mapa pero que además entrega información de distancias, duración, etc (Leafletjs.com)

### Login / Mantenedor
El login solo está funcionando como redireccionador a la vista de **Admin** (*cuando el usuario es 'admin'*) o a la vista de **Editor** cuando quien ingresa tiene cualquier nombre de usuario diferente a 'admin". Todo esto manejado por lógica condicional.
La función del mantenedor es crear, editar o eliminar los atractivos, que posteriormente se estarán mostrando en el index según la región de destino que se elija.
![image](https://github.com/munozmanuel/TD_RUTA_SEGURA/assets/108648624/df340d59-7f3a-42dd-a596-1461680aea9e)









### Tecnologías utilizadas:
Javascript, Html, Css, Postgres, Express, NodeJs




## Estructura general del proyecto
Para fines prácticos, se decidió dejar la aplicación y api dentro del mismo proyecto. En **API/server.js** se incluye tanto la configuración como las peticiones a la base de datos.
En  **routes** se encuentran tanto las rutas básicas, como las rutas para CRUD.

### Api estará escuchando en puerto 4000
```bash
  nodemon api/server.js
```
### APP estará escuchando en puerto 3000
```bash
  nodemon app.js
```
## Clonar repositorio
```bash
  git clone https://github.com/munozmanuel/TD_RUTA_SEGURA.git
```
## Instalar dependencias
### Para instalar los paquetes necesarios, usar:
```bash
npm i express pg hbs nodemon body-parser cors bcryptjs cookie-parser dotenv express-session jsonwebtoken method-override node-fetch pdfkit sweetalert2
```

## Base de datos / Postgres
La información correspondiente a la base de datos se encuentra en la carpeta **bdScripts** que contiene los scripts necesarios para la creación de bbdd, tablas y población de tablas con datos básicos. 

Correr proyecto
```bash
  npm run dev 
```
## Screenshots


## Rúbrica de evaluación: 
Links para poder evaluar de mejor manera:
#### Consultas base de datos
- Selección de columnas requeridas para presentar la información solicitada:
    API/server.js línea 35
- Uso de JOIN para relacionar la información de distintas tablas: 
    API/server.js línea 51
- Uso de WHERE para filtrar la información requerida: 
    API/server.js línea 91
- Uso de cláusulas de ordenamiento para presentar la información: 
    API/server.js línea 51
- Uso de cláusulas de agrupación de información para obtener datos agregados:
    API/server.js línea 100

#### Página Web 
- Uso de tags html:
    /views/ 
- Utilizacion de Framework css: 
    Bootstrap para la creación de navbar, footer, botones, entre otros.
- Responsividad: 
    /views/index.hbs
- Template y componentes: 
    - /views/partials/plantilla.hbs
    - /views/partials/navbar.hbs 
    - /views/partials/footer.hbs
    
#### Servicios
- Creacion de servicio REST: 
    - PORTAFOLIO-TALENTO-DIGITAL-API: /routes/routes.js

- Servicio de usuarios:
    - /views/login.hbs
    - /views/register.hbs
    - /views/admin.hbs
    - /views/editor.hbs

- Servicio de autorizacion: 
    - /controllers/authController.js
- Servicio de mantenedor: 
    - /routes/crud.js

#### Lenguaje Node




















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
