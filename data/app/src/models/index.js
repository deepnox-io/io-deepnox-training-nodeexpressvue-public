module.exports = (connection) => {
    return {
        Post: connection.model('Post', require('./post.schema'))
    }
}
