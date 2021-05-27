const expect = require('expect')
const setup = require('./utils/mongoose-setup')

describe("Post", function () {
    let Post, Transaction

    setup(model => ({ Post } = model))

    it("create", async () => {
        const post = await Post.create({
            nickname: 'nickname_test',
            text: 'text_test',
            isActive: true,
        })
        expect(post).toMatchObject({
            nickname: 'nickname_test',
            text: 'text_test',
            isActive: true,
        })
    })
})