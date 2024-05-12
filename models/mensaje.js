const { Schema, model } = require("mongoose");
import { db3 } from './../../databaseMongo';
const MensajeSchema = Schema(
  {
    mensaje: {
      type: String,
      required: true,
    },
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


MensajeSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  return object;
});

module.exports = db3.model("Mensaje", MensajeSchema);