import mongoose from "mongoose"
const env = require("dotenv");
env.config();

export default function dbconnect() {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(process.env.DB_IP, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log(
        "Houve um erro ao se conectar ao banco de dados MongoDB" + err
      );
    });
    console.log("foi")
}


