const mongoose = require('mongoose')

/**
 * Correspond peu ou prou à la structure d'une table de base de données.
 *
 * ie. CREATE TABLE (id, field...) en SQL.
 *
 * @type {module:mongoose.Schema<Document, Model<any, any, any>, undefined>}
 */
const PostSchema = new mongoose.Schema({
    nickname: {type: String, maxlength: 32, validate:/[^\s]+/, required: true},
    text: {type: String, maxlength: 140, required: true},
    isActive: {type: Boolean, default: true, required: true},
}, {versionKey: false})

/**
 * Assigner le schéma à la connexion en cours vers Mongoose.
 *
 */
module.exports = PostSchema

