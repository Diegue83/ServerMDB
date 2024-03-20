import { Schema, model } from "mongoose";

const ciudadSchema=new Schema(
    {
        nomCiudad:{
            type:String
        }
    },
    {
        versionKey: false,
    }
)

const ciudad=model('ciudad',ciudadSchema,'Ciudad')
export default ciudad;