import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import models from './../database/models/index'


export default {
    login: async (req, res) => {
        const { email, password } = req.body;

        let user = await models.User.findOne({
            where: { email: email }
        });

        if (!user) return res.status(401).json({ message: "Credenciales incorrectas" });
        
        //debemos comparar la contraseña
        const correcto = await bcrypt.compare(password, user.password);


        if (correcto) {
            //generar token
            const payload = {
                id: user.id,
                email: user.email,
                time:new Date()
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET || "MI_CODIGO_SECRETO_JWT", {expiresIn: 60*60} );

            return res.status(200).json({"acces_token": token,"user": user, "error": false})
        }
        return res.status(401).json({ message: "Credenciales incorrectas" });

    },
    registro: async (req, res) => {

        console.log(req.body);

        const { email, password } = req.body;   //con esto estoy capturando la informacion email y password en formato .json(req.bodyESTO SE DEBE DECLARAR EN EL INDEX PRINCIPAL)
        const hash = await bcrypt.hash(password, 12);  //cifrado bcrypt

        let user = await models.User.findOne({  //con esto estoy capturand la ruta y haciendo una consulta con findOne
            where: { email: email }
        })

        console.log(user);

        if (!user) {
            //crea una cuenta

            user = await models.User.create({ email, password: hash })
            return res.status(201).json({ message: "Usuario creado con exito", data: user })

        } else {

            return res.status(422).json({ message: "El correo ya existe" })

        }

    },
    perfil: (req, res) => {
        res.send("Mi perfil");

    },
    logout: (req, res) => {

    },
};
