const { Schema, model } = require("mongoose");
import { db3 } from './../../databaseMongo';

const ComentarioSchema = Schema(
  {
    contenido: {
      type: String,
      required: true,
    },
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    publicacion: {
      type: Schema.Types.ObjectId,
      ref: "Publicacion",
      required: true,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
      },
    ],
    estado: {
      type: String,
      enum: ["publicado", "borrador"],
      required: true, 
    },
  },
  {
    timestamps: true,
  }
);


ComentarioSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = db3.model("Comentario", ComentarioSchema);
