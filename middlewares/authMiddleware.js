//Middleware de autenticación
const admin = require('firebase-admin');
const auth = admin.auth();

const checkAuth = (req, res, next) => {
    const idTokenCookie = req.cookies.token;
    const publicRoutes = ["/", "/login", "/register", "/category/:category"];

    if (publicRoutes.includes(req.path)) {
        return next();
    }

    if (!idTokenCookie) {
       return res.redirect('/login')
    }

    auth.verifyIdToken(idTokenCookie)
    .then((decodedToken)=>{
        req.user = decodedToken;
        res.locals.user = decodedToken;
        next()
    })
    .catch((error)=>{
            console.error(`Error al verificar el token de las cookies: ${error}`);
            res.clearCookie('token');
            return res.redirect('/login');
    })
}

module.exports = checkAuth;