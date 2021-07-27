const platos_db = require('../data/platosdb'); //Requerimos platosdb para poder filtrarlo y usarlo con JS y EJS.

module.exports = {
    index: (req, res) => {
        return res.render('index', {
            platos : platos_db // Asociamos el segundo parametro con la "db" de platos.
        })
    },
    detail : (req, res) => {
        //let id = req.params.id; // Esto es un string. 

        let plato = platos_db.find(function(plato){ //recorremos el JSON
            //return (element.id) === Number(id); //ATENCION: siempre poner Number(), ya que estamos comparando un Number (element.id) con un String (id).
            return plato.id === +req.params.id; // "+" lo convierte en tipo number.
        });

        return res.render('detail', {
            plato,
        }); //Retorna la renderizacion de la vista "detail". Y por segundo parametro, envia el objeto plato.
    }
}