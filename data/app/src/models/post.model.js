const mongoose = require('mongoose')

/**
 * Correspond peu ou prou à la structure d'une table de base de données.
 *
 * ie. CREATE TABLE (id, field...) en SQL.
 *
 * @type {module:mongoose.Schema<Document, Model<any, any, any>, undefined>}
 */
const PostSchema = new mongoose.Schema({
    nickname: {type: String, maxlength: 32, validate:/[^\s]+/},
    text: {type: String, maxlength: 140},
    isActive: {type: Boolean, default: True},
}, {versionKey: false})

/**
 * Assigner le schéma à la connexion en cours vers Mongoose.
 *
 */
module.exports = mongoose.Model('Post', PostSchema)

