const Post = require('../models/post.model')

/**
 * Posts business service.
 *
 * @type {PostService}
 */
module.exports = class PostService {

    /** Default constructor.
     *
     */
    constructor() {
    }

    /** Create a new post.
     *
     * @param nickname
     * @param text
     * @param isActive
     * @returns {Promise<Document<any, any>>}
     */
    static async create(nickname, text, isActive) {
        try {
        const post = new Post({nickname: nickname, text: text, isActive: isActive})
        return await post.save()
        } catch (err) {
            throw err
        }
    }

    /** Update an existing post.
     *
     * @param postId
     * @param nickname
     * @param text
     * @param isActive
     * @returns {Promise<Query<Document<any, any> | null, Document<any, any>, {}>>}
     */
    static async update(postId, nickname, text, isActive) {

    }

    /** Get post by identifier.
     *
     * @param postId
     * @returns {Promise<*>}
     */
    static async get(postId) {

    }

    /**
     * Filter posts.
     *
     * @param nickname
     * @param text
     * @param isActive
     * @param start
     * @param limit
     * @returns {Promise<Document<any, any>>}
     */
    static async filter(nickname, text, isActive, start, limit) {

    }

    static async all() {
        try {
            return await Post.find()
        } catch (err) {
            throw err
        }
    }

    /**
     * Delete post by identifier.
     *
     * @param postId
     * @returns {Promise<*>}
     */
    static async delete(postId) {

    }
}
