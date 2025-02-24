📁···**ProjectBreak2**···📁                                                                                                    
📖**Descripción**
ProjectBreak2 es una aplicación web diseñada para gestionar y mostrar un catálogo detallado de miniaturas de Warhammer. 
Permite a los usuarios explorar, buscar y obtener información sobre cada miniatura, incluyendo imágenes, descripciones y otros datos relevantes.
La aplicación está construida con tecnologías modernas, garantizando una experiencia de usuario fluida y eficiente.

📌**Características Principales**
✔️ Exploración y búsqueda avanzada de miniaturas: Navega y encuentra miniaturas fácilmente mediante filtros y criterios de búsqueda.
✔️ Información detallada: Cada miniatura cuenta con imágenes, descripciones y datos relevantes.
✔️ API REST: Gestión eficiente del catálogo a través de endpoints bien definidos.
✔️ Base de datos robusta: Implementación con MongoDB y modelado de datos mediante Mongoose.

🚀**Tecnologías Utilizadas**
🛠Backend:
Node.js ➡️ Entorno de ejecución para JavaScript en el servidor.
Express.js ➡️ Framework para construir aplicaciones web y APIs.
MongoDB & Mongoose ➡️ Base de datos NoSQL y herramienta de modelado de datos para JavaScript.

🛠Dependencias Principales:
express ➡️ Framework para la creación de servidores HTTP.
mongoose ➡️ ODM para la gestión de MongoDB.
mongodb ➡️ Driver oficial de MongoDB para Node.js.
dotenv ➡️ Gestión de variables de entorno.

🛠Herramientas Adicionales:
npm ➡️ Manejador de paquetes para Node.js.
Git & GitHub ➡️ Control de versiones y colaboración en el desarrollo.
Trello ➡️ Permite organizar tareas de forma visual, asignar responsables, establecer fechas de vencimiento y colaborar en equipo en tiempo real.
Slack ➡️ Facilita la colaboración en tiempo real, la integración con otras herramientas y la gestión eficiente de proyectos mediante chats, menciones y notificaciones.
Jitsi ➡️ Plataforma de videoconferencias de código abierto que permite realizar reuniones en línea sin necesidad de registrarse. 


📖**Uso de la API**
La API cuenta con los siguientes endpoints:

GET /miniaturas ➡️ Obtiene todas las miniaturas.
GET /miniaturas/:id ➡️ Obtiene una miniatura por ID.
POST /miniaturas ➡️ Crea una nueva miniatura.
PUT /miniaturas/:id ➡️ Actualiza los datos de una miniatura.
DELETE /miniaturas/:id ➡️ Elimina una miniatura.

🔐**Autenticación y Seguridad**
Actualmente, la API no implementa autenticación. Se recomienda añadir mecanismos de autenticación y validación de datos para garantizar la seguridad en futuras versiones.

✍️ **Autores**
👨‍💻 Adrián Garrido Luengo - [MajinDohko](https://github.com/MajinDohko)
👨‍💻 Adrián Pajuelo Momboisse - [Suribachi45](https://github.com/Suribachi45)
👨‍💻 Dámaso Adrián Santos Pascual - [DSantosPascual](https://github.com/DSantosPascual)

📜**Licencia**
Este proyecto está bajo la licencia MIT.