const Broma = require("../models/jokes.model")

const listarBromas = async (req, res)=>{
    const jokes = await Broma.find();
    res.json( { resultado:'ok', jokes } )
};

const buscarBroma = async (req, res)=>{
    const bromaEncontrada = await Broma.findOne({_id: req.params.id});
    res.json( { resultado:'ok', broma:bromaEncontrada , parametro: req.params.id } );
};

const crearBroma = async (req, res)=>{
    try {
        const nuevaBroma = await Broma.create(req.body);
        res.json( { resultado:'ok', nueva_broma:nuevaBroma } );
    } catch (error) {
        res.json(error);
    }
};


const actualizarBroma = async (req, res)=>{
    const bromaActualizada = await Broma.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
    res.json( { resultado:'ok', broma:bromaActualizada , parametro: req.params.id } );

};

const eliminarBroma = async (req, res)=>{
    const bromaEliminada = await Broma.deleteOne({_id: req.params.id});
    res.json( { resultado:'ok', broma:bromaEliminada , parametro: req.params.id } );

};

module.exports = {
    listarBromas,
    buscarBroma,
    crearBroma,
    actualizarBroma,
    eliminarBroma
};