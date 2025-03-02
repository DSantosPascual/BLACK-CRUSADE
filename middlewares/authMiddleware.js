//Middleware de autenticación
const admin = require('firebase-admin');
const auth = admin.auth();

const checkAuth = (req, res, next) => {
    // Cambiar la búsqueda del token a los encabezados
    const idTokenHeader = req.headers['authorization'];

    // Si el token no está presente, redirigir al login
    if (!idTokenHeader || !idTokenHeader.startsWith('Bearer ')) {
        return res.redirect('/login');
    }

    // Obtener el token desde el encabezado Authorization
    const idToken = idTokenHeader.split('Bearer ')[1];

    auth.verifyIdToken(idToken)
    .then((decodedToken) => {
        req.user = decodedToken; // Guardar los datos del usuario autenticado
        res.locals.user = decodedToken;
        next(); // Continuar con la siguiente función
    })
    .catch((error) => {
        console.error(`Error al verificar el token de Firebase: ${error}`);
        return res.redirect('/login');
    });
}

module.exports = checkAuth;