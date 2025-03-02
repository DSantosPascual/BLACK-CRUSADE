# 📁···**BLACK CRUSADE**···📁

## 📖**Descripción**
BLACK CRUSADE es una aplicación web diseñada para gestionar y mostrar un catálogo detallado de miniaturas de Warhammer. Permite a los usuarios explorar, buscar y obtener información sobre cada miniatura, incluyendo imágenes, descripciones y otros datos relevantes. La aplicación está construida con tecnologías modernas, garantizando una experiencia de usuario fluida y eficiente.

---

## 📌**Características Principales**
- ✔️ **Exploración y búsqueda avanzada de miniaturas**: Navega y encuentra miniaturas fácilmente mediante filtros y criterios de búsqueda.
- ✔️ **Información detallada**: Cada miniatura cuenta con imágenes, descripciones y datos relevantes.
- ✔️ **API REST**: Gestión eficiente del catálogo a través de endpoints bien definidos.
- ✔️ **Base de datos robusta**: Implementación con MongoDB y modelado de datos mediante Mongoose.
- ✔️ **Autenticación con Firebase**: Protección de rutas y gestión de usuarios mediante Firebase Authentication.
- ✔️ **Documentación con Swagger**: Interfaz interactiva para explorar y probar la API.
- ✔️ **Pruebas automatizadas**: Implementación de pruebas unitarias y de integración con Jest.

---

## 🚀**Tecnologías Utilizadas**

### 🛠Backend:
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework para construir aplicaciones web y APIs.
- **MongoDB & Mongoose**: Base de datos NoSQL y herramienta de modelado de datos para JavaScript.
- **Firebase Authentication**: Sistema de autenticación para gestionar usuarios y proteger rutas.

### 🛠Dependencias Principales:
- **express**: Framework para la creación de servidores HTTP.
- **mongoose**: ODM para la gestión de MongoDB.
- **mongodb**: Driver oficial de MongoDB para Node.js.
- **dotenv**: Gestión de variables de entorno.
- **firebase-admin**: SDK de Firebase para la autenticación y gestión de usuarios.
- **swagger-ui-express**: Integración de Swagger para documentación de la API.
- **jest**: Framework para pruebas unitarias y de integración.

### 🛠Herramientas Adicionales:
- **npm**: Manejador de paquetes para Node.js.
- **Git & GitHub**: Control de versiones y colaboración en el desarrollo.
- **Trello**: Organización de tareas y colaboración en equipo.
- **Slack**: Comunicación en tiempo real y gestión de proyectos.
- **Jitsi**: Plataforma de videoconferencias para reuniones en línea.

---

## 📖**Uso de la API**

### Endpoints disponibles:

#### Públicos (sin autenticación):
- **GET /products**: Obtiene todas las miniaturas.
- **GET /category/:category**: Obtiene miniaturas por categoría.
- **GET /products/:productId**: Obtiene una miniatura por su ID.
- **GET /inicio**: Muestra la página de inicio.

#### Protegidos (requieren autenticación):
- **GET /dashboard**: Muestra todas las miniaturas (ruta protegida).
- **GET /dashboard/new**: Muestra el formulario para crear una nueva miniatura (ruta protegida).
- **POST /dashboard**: Crea una nueva miniatura (ruta protegida).
- **GET /dashboard/:productId/edit**: Muestra el formulario para editar una miniatura (ruta protegida).
- **GET /dashboard/:productId**: Muestra una miniatura específica por su ID (ruta protegida).
- **POST /dashboard/:productId**: Actualiza una miniatura existente (ruta protegida).
- **DELETE /dashboard/:productId/delete**: Elimina una miniatura por su ID (ruta protegida).

### Documentación con Swagger:
Accede a la documentación interactiva de la API en [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

---

## 🔐**Autenticación y Seguridad**
La API implementa autenticación basada en **Firebase Authentication**. Para acceder a rutas protegidas, los usuarios deben proporcionar un token de Firebase válido en el encabezado de la solicitud (`Authorization: Bearer <token>`). Las rutas protegidas incluyen la creación, actualización y eliminación de miniaturas.

---

## 🧪**Pruebas**
El proyecto incluye pruebas automatizadas con **Jest** para garantizar la calidad del código. Las pruebas cubren tanto funcionalidades básicas como casos de uso complejos.

### Ejecución de pruebas:
Para ejecutar las pruebas, utiliza el siguiente comando:
npm test 

---

## 🌐**Despliegue**
El proyecto ha sido desplegado exitosamente en Render y está accesible en el siguiente enlace:

URL de la aplicación: https://black-crusade.onrender.com



✍️ **Autores**
👨‍💻 Adrián Garrido Luengo - [MajinDohko](https://github.com/MajinDohko)
👨‍💻 Adrián Pajuelo Momboisse - [Suribachi45](https://github.com/Suribachi45)
👨‍💻 Dámaso Adrián Santos Pascual - [DSantosPascual](https://github.com/DSantosPascual)

📜**Licencia**
Este proyecto está bajo la licencia MIT.