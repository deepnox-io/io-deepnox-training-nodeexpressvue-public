const {Post} = require('../models/')

/**
 * Posts business service.
 *
 * @type {PostService}
 */


module.exports = class PostService {

    /** Default constructor.
     *
     */
    constructor() {}

    /** Create a new post.
     *
     * @param nickname
     * @param text
     * @param isActive
     * @returns {Promise<Document<any, any>>}
     */
    static async create(nickname, text, isActive) {
        try {
            const post = new Post({
                nickname: nickname,
                text: text,
                isActive: isActive
            })
            await post.save()
            return post
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
        try {
            const post = Post.findOne({
                _id: postId
            })
            await post.save()
            return post
        } catch (err) {
            throw err
        }
    }

    /** Get post by identifier.
     *
     * @param postId
     * @returns {Promise<*>}
     */
    static async getOne(postId) {
        try {
            const post = await Post.findOne({
                _id: postId
            })
            return post
        } catch (err) {
            throw err
        }
    }

    /** Get all posts.
     *
     * @param postId
     * @returns {Promise<*>}
     */
    static async get(skip, limit, nickname) {
        var query = []
        if (nickname) {
            query.push({
                $match: {
                    nickname: nickname
                }
            })
        }

        if (skip) {
            query.push({
                $skip: parseInt(skip)
            })
        }
        if (limit) {
            query.push({
                $limit: parseInt(limit)
            })
        }
        try {
            if (query && query.length) {
                var posts = await Post.aggregate(query)
            } else {
                var posts = await Post.find()
            }

            return posts
        } catch (err) {
            throw err
        }
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
        try {
            const post = new Post({
                nickname: nickname,
                text: text,
                isActive: isActive
            })
            return await post.save()
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
        try {
            const post = Post.findOne({
                _id: postId
            })
            if (post === undefined) {
                throw new Error(`Inexistant post (id=${postId}`)
            }
            return await post.deleteOne()
        } catch (err) {
            throw err
        }
    }
}
