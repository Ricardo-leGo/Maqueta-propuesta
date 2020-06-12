const mongoose = require('mongoose');

exports.DB = () => {

  mongoose.connect('mongodb://localhost/4f', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Conectado a la base de datos: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error al conectar a mongo', err)
  }) 
}

