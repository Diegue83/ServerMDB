import { Schema, model } from "mongoose";

const cargoSchema=new Schema(
    {
        nomCargo:{
            type:String
        }
    },
    {
        versionKey: false,
    }
)

const cargo=model('cargo',cargoSchema,'Cargo');
export default cargo;