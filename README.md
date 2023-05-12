# Talento Digital
### Proyecto 'Ruta Segura'
RutaSegura busca entregar información relevante para quienes están planificando un viaje dentro de Chile, mostrando datos como la distancia total, duración del viaje y  atractivos por región de destino.

## Funcionamiento General
Se cuenta con una vista index que muestra cabecera con opciones tipo select, una sección resumen que muestra la Tº actual según la ubicación del equipo (***navigator.geolocation***) pasándole datos de coordenadas a una api (weatherapi.com) para consumir esa información.
Al elegir una región de origen y una de destino, se pasan coordenadas una api que controla el mapa pero que además entrega información de distancias, duración, etc (Leafletjs.com)

### Login / Mantenedor
El login solo está funcionando como redireccionador a la vista de **Admin** (*cuando el usuario es 'admin'*) o a la vista de **Editor** cuando quien ingresa tiene cualquier nombre de usuario diferente a 'admin". Todo esto manejado por lógica condicional.
La función del mantenedor es crear, editar o eliminar los atractivos, que posteriormente se estarán mostrando en el index según la región de destino que se elija.
##### **En caso de no visualizar la siguiente imagen, buscar en: /public/imgs/assets/loginMantenedor.jpg**
![image](https://github.com/munozmanuel/TD_RUTA_SEGURA/blob/master/public/imgs/assets/loginMantenedor.jpg)


### Tecnologías utilizadas:
Javascript, Html, Css, Postgres, Express, NodeJs

## Estructura general del proyecto
Para fines prácticos, se decidió dejar la aplicación y api dentro del mismo proyecto. En **API/server.js** se incluye tanto la configuración como las peticiones a la base de datos.
En **routes** se encuentran tanto las rutas básicas, como las rutas para CRUD.

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
La información correspondiente a la base de datos se encuentra en la carpeta **bdScripts** que contiene los scripts necesarios para la creación de bbdd, tablas y población de tablas con datos genéricos. 


### Api estará escuchando en puerto 4000
```bash
  nodemon api/server.js
```
### APP estará escuchando en puerto 3000
```bash
  nodemon app.js
```

# Rúbrica de evaluación: 

#### Consultas base de datos
- Selección de columnas requeridas para presentar la información solicitada:
    - API/server.js línea 35
- Uso de JOIN para relacionar la información de distintas tablas: 
    - API/server.js línea 51
- Uso de WHERE para filtrar la información requerida: 
    - API/server.js línea 91
- Uso de cláusulas de ordenamiento para presentar la información: 
    - API/server.js línea 51
- Uso de cláusulas de agrupación de información para obtener datos agregados:
    - API/server.js línea 100

#### Algorítmo de cálculo y manipulación de archivos de texto
- Uso general del lenguaje, sintáxis, selección de tipos de dato,
  sentencias lógicas, expresiones, operaciones y comparaciones:
    - /routes/crud.js
    - /routes/routes.js
    - /controllers/authController.js 
    - /controllers/listadoController.js 
- Uso de sentencias repetitivas:
    - /public/src/js/regiones.js 
- Convenciones y estilos de programación:
    - /public/src/js
    - /controllers
    - /routes
- Utilización correcta de estructuras de datos:
    - /routes/routes.js
    - /controllers/listadoController.js 
- Manipulación de archivos: 
    - Creación y descarga automatica de PDF a coninformación de BD.
    - Uso de dependencia 'pdfKit'
    - /views/partials/listadoTotal.hbs -> Botón 'Crear pdf'
    - /controllers/pdfController.js

#### Página Web 
- Uso de tags html:
    - /views/ 
- Utilizacion de Framework css:
    - /public/src/css/
    - Bootstrap para la creación de navbar, footer, botones, entre otros.
- Responsividad: 
    - /views/index.hbs
- Template y componentes: 
    - /views/partials/plantilla.hbs
    - /views/partials/navbar.hbs 
    - /views/partials/footer.hbs
    
#### Servicios
- Creacion de servicio REST: 
    - /routes/routes.js

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
- Inclusión de paquetes y librerías de usuario: 
    - /package.json

- Agrupación del código y separación por funcionalidad:
    - /routes/crud.js para agrupar funcionalidades de mantenedor.
    - carpeta /controllers que agrupa funcionalidad para listar,
      autorizar y creación de archivo Pdf. 

- Utilización de funciones asíncronas:
    - Carpeta /controllers
    - Carpeta /routes

- Lectura de parámetros de entrada:
    - /routes/crud.js *línea 28*  <->  /views/partials/mantenedor.hbs *línea 23*

