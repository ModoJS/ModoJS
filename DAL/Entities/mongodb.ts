var mongoose = require('mongoose');

const dbConnection = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_CNN,{
            'useNewUrlParser': true,
            'useUnifiedTopology': true,
            'useCreateIndex': true,
            'useFindAndModify': false
            
        })
        //conexión a la base de datos mongodb
        console.log(`Base de datos mongo en el puerto: ${27017} \x1b[36m%s\x1b[0m`, 'online');
    }catch(error){
        console.log(error);
        throw new Error("Error de conexion a la base de datos");
    }
}
export default dbConnection;