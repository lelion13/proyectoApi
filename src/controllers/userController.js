import User from "../models/userModel.js";

//controladores: Actua como intermediario entre el cliente y la logica de la aplicacion.. Recibe solicitudes, las procesa y devuelve la respuesta.
//estos controladores incluyen a los servicios
export const create = async (req, res) => {
    try {
        //Tomar los datos del body enviados del post 
        const userData = new User(req.body)

        //desestrucuramos para obtener el mail
        const {email} = userData

        //validar que no exista el email
        const userExist = await User.findOne({email:email});
        //const userExist = await User.findOne({email}); xq las variables son iguales
        if (userExist){
            return res.status(400).json({message: `El ${email} ya existe`});
        }
        const savedUser = await userData.save();
        const {password, ...rest} =savedUser;
        res.status(201).json(rest);
    } catch (error) {
        res.status(500).json({message:`Internal server error ${error}`});
    }
};

export const get = async (req,res) => {
    try {
        const users = await User.find();
        if (users.length === 0){
            return res.status(204).json({message: `no hay usuarios`});
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: `algo fallo amigo ${error}`});
    }
};