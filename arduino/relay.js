const express = require('express');
const app = express()
const { Board, Relay } = require("johnny-five")
const cors = require('cors');
app.use(cors());
app.use(express.json())

const board = new Board({ port: "COM5" });

app.post('/arduino', (req, res) => {
  // { status : "ON", TIME_START: 50000 + 1000}
  const { status, time } = req.body
  console.log(status,time)
 // await board.on("ready", () => {

    var relay = new Relay({ pin: 10 });

    board.repl.inject({ relay });

    if (status === "ON") {
      console.log('Entro cuando esta en ON')
      setTimeout(function () {
        console.log("Entro al timeout en ON")
         relay.open()
        console.log("salio al timeout en ON")
      }, 4000);

      setTimeout(function () {
        console.log("Entro al timeout 2  en ON")
       relay.close()
        console.log("salio del timeout 2 en OFF")
      }, time + 12000);
    }
    else {
      console.log("Entro cuando esta en off")
      relay.close()
      console.log("salio cuando esta en off con OFF")
    }
  })
//})


function startServer(){

	app.listen(3002, () => console.log("conecto al arduino"))
}
board.on("ready", startServer)
// servidor
//app.listen(3002, () => console.log('conecto el arduino'))