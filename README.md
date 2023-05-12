# Talento Digital
### Proyecto 'Ruta Segura'
RutaSegura busca entregar información relevante para quienes están planificando un viaje dentro de Chile, mostrando datos como la distancia total, duración del viaje y  atractivos por región de destino.

## Funcionamiento General
Se cuenta con una vista index que muestra cabecera con opciones tipo select, una sección resumen que muestra la Tº actual según la ubicación del equipo (***navigator.geolocation***) pasándole datos de coordenadas a una api (weatherapi.com) para consumir esa información.
Al elegir una región de origen y una de destino, se pasan coordenadas una api que controla el mapa pero que además entrega información de distancias, duración, etc (Leafletjs.com)

### Login / Mantenedor
El login solo está funcionando como redireccionador a la vista de **Admin** (*cuando el usuario es 'admin'*) o a la vista de **Editor** cuando quien ingresa tiene cualquier nombre de usuario diferente a 'admin". Todo esto manejado por lógica condicional.

En la vista de ***Admin*** se cuenta con selectores para mostrar los atractivos por región:

A la izquierda del mantenedor están todas las opciones para agregar un atractivo. Por otro lado, existen filtros que muestran el total de atractivos según la categoría que se selecciona.








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
Se incluye una carpeta dbScripts que contiene los scripts necesarios para la creación de bbdd, tablas y población de tablas con datos básicos. 
```bash
 FALTAN LOS SCRIPTS
```



POR DEFECTO UTILIZARA EL PUERTO 3000

.env
```bash
PORT=3000
apiURL=http://localhost:3001/api
```
Clonar proyecto
```bash
  git clone https://github.com/nash99/PORTAFOLIO-TALENTO-DIGITAL
```

Instalar proyecto con npm
```bash
  npm install 
```
Correr proyecto
```bash
  npm run dev 
```
    
## Instalación PORTAFOLIO-TALENTO-DIGITAL API
https://github.com/nash99/PORTAFOLIO-TALENTO-DIGITAL-API


SI NO SE DEFINEN LAS VARIABLES DE ENTORNO (.env) , POR DEFECTO UTILIZARA EL PUERTO 3001 Y ESTARA CONECTADO A LA BASE DE DATOS EN LÍNEA.

.env
```bash
PORT=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_DATABASE=
DB_PORT=
```

Clonar proyecto
```bash
  git clone https://github.com/nash99/PORTAFOLIO-TALENTO-DIGITAL-API
```
Instalar proyecto con npm
```bash
  npm install 
```
Correr proyecto
```bash
  npm run dev 
```
## Screenshots

![App Screenshot](https://raw.githubusercontent.com/nash99/PORTAFOLIO-TALENTO-DIGITAL-API/main/screenshots/1.png)
![App Screenshot](https://github.com/nash99/PORTAFOLIO-TALENTO-DIGITAL-API/blob/main/screenshots/5.png?raw=true)
![App Screenshot](https://github.com/nash99/PORTAFOLIO-TALENTO-DIGITAL-API/blob/main/screenshots/8.png?raw=true)
![App Screenshot](https://github.com/nash99/PORTAFOLIO-TALENTO-DIGITAL/blob/main/screenshots/modelo.png?raw=true)

## Rúbrica de evaluación: 
Links para poder evaluar de mejor manera:
#### Consultas base de datos
- Selección de columnas requeridas para presentar la información solicitada: 
    - [PORTAFOLIO-TALENTO-DIGITAL-API: src/controllers/generos.controllers.js lineas 6/19]
    - [PORTAFOLIO-TALENTO-DIGITAL-API: src/controllers/top.controllers.js lineas 6/17/28/39/50/61/72/83/94/105]
    - [PORTAFOLIO-TALENTO-DIGITAL-API: src/controllers/usuarios.controllers.js lineas 6/17/29/45/60/81/99/116]
- Uso de JOIN para relacionar la información de distintas tablas: 
    - [PORTAFOLIO-TALENTO-DIGITAL-API: src/controllers/top.controllers.js linea 6]
- Uso de WHERE para filtrar la información requerida: 
    - [PORTAFOLIO-TALENTO-DIGITAL-API: src/controllers/usuarios.controllers.js linea 29]
- Uso de cláusulas de ordenamiento para presentar la información: 
    - [PORTAFOLIO-TALENTO-DIGITAL-API: src/controllers/top.controllers.js linea 6]
- Uso de cláusulas de agrupación de información para obtener datos agregados: 
    - [PORTAFOLIO-TALENTO-DIGITAL-API: src/controllers/top.controllers.js linea 6]
#### Página Web 
- Uso de tags html: 
    - [PORTAFOLIO-TALENTO-DIGITAL: /views/partials/plantilla.hbs todo el documento]
- Utilizacion de Framework css: 
    - [PORTAFOLIO-TALENTO-DIGITAL: /views/public/css/index.css todo el documento]
- Responsividad: 
    - [PORTAFOLIO-TALENTO-DIGITAL: /views/public/css/index.css todo el documento]
- Template y componentes: 
    - [PORTAFOLIO-TALENTO-DIGITAL: /views/partials/plantilla.hbs todo el documento]
    - [PORTAFOLIO-TALENTO-DIGITAL: /views/partials/navbar.hbs todo el documento]
    - [PORTAFOLIO-TALENTO-DIGITAL: /views/partials/footer.hbs todo el documento]
    
#### Servicios
- Creacion de servicio REST: 
    - [PORTAFOLIO-TALENTO-DIGITAL-API: src/routes/generos.routes.js todo el documento]
    - [PORTAFOLIO-TALENTO-DIGITAL-API: src/routes/top.routes.js todo el documento]
    - [PORTAFOLIO-TALENTO-DIGITAL-API: src/routes/usuarios.routes.js todo el documento]

- Servicio de usuarios:
    - [PORTAFOLIO-TALENTO-DIGITAL: /views/mantenedor/index.hbs todo el documento]
    - [PORTAFOLIO-TALENTO-DIGITAL: /router.js desde linea 285 hasta 368]
- Servicio de autorizacion: 
    - [PORTAFOLIO-TALENTO-DIGITAL: /index.js desde linea 47 hasta 90]
- Servicio de mantenedor: 
    - [PORTAFOLIO-TALENTO-DIGITAL: /router.js desde linea 299 hasta 314]

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/nash99)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ignacio-alvarado-marzan/)




















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
