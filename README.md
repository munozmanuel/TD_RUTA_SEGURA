$ nodemon api/server.js
$ nodemon app.js

# Talento Digital - Proyecto 'Ruta Segura'
RutaSegura busca entregar información relevante para personas que están planificando un viaje dentro de Chile.
Permite elegir una región de origen y una de destino, mostrando automaticamente un trazado en mapa, información como la distancia total
y duración aproximada del viaje.

## Clonar proyecto
```bash
  git clone https://github.com/nash99/PORTAFOLIO-TALENTO-DIGITAL
```

## Herramientas utilizadas:
Javascript, HTML, CSS, MYSQL, EXPRESS, NODE JS, HBS, EXPRESS

## REQUISITOS MINIMOS
```bash
  1.NODE JS
```
## Accesos
```bash
  Usuario normal: juanperezmusic@gmail.com / password
  Administrador: admin@gmail.com / 123
```
## Instalación BASE DE DATOS LOCAL
Ejecutar codigo en mysqlworkbench ubicado en cualquiera de los dos proyectos al igual que agregar el codigo de procedimiento y procedimiento 2 a un nuevo procedimiento almacenado por separado para crearlos de forma correcta
```bash
  ubicacion: db/database.sql
  ubicacion: db/procedimiento.sql
  ubicacion: db/procedimiento2.sql
```
## Instalación PORTAFOLIO-TALENTO-DIGITAL
https://github.com/nash99/PORTAFOLIO-TALENTO-DIGITAL

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
