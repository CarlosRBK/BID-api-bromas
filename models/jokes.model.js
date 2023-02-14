const mongoose = require("mongoose");

const BromaSchema = new mongoose.Schema({
	setup: {
        type: String,
        require:[true, "Campo obligatorio"]},
    punchline: {
        type: String,
        require:[true, "Campo obligatorio"]},
    }, { timestamps: true });

const Broma = mongoose.model("jokes", BromaSchema);

module.exports = Broma;