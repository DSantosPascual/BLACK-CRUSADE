const admin = require ('firebase-admin');
const auth = admin.auth();
const path = require ('path')

const UserController = {
        async register(req, res) {
        try {
            res.sendFile(path.join(__dirname, '../public/views', 'register.html'));
        } catch (error) {
            res.status(500).send('Error loading register page');
        }
    },
    async createUser (req, res) {
        const {email, password} = req.body;
            try {
                await auth.createUser({
                    email,
                    password
                })
                res.redirect('/login')
        } catch (error) {
            console.error(`error interno ${error}`);
            res.redirect('/register');
        }
    },
    async loginUser (req, res) {
        try {
            res.sendFile(path.join(__dirname, '../public/views', "login.html"))
        } catch (error) {
            
        }
    },
    async logedUser (req, res) {
        const {idToken} = req.body;
        try {
            // const decodedToken = await auth.verifyIdToken(idToken);
            res.cookie('token', idToken, {httpOnly: true, secure: false})
            res.json({success:true});
            // res.redirect('/dashboard');
        } catch (error) {
            console.log(`ha dado un error ${error}`)
        }
    },
    async dashboardAdmin (req,res){
        res.redirect('/dashboard')
    },
    async logout (req, res) {
        res.clearCookie('token')
        res.redirect('/login')
    }
}

module.exports = UserController;