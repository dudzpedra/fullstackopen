
const dummy = blogs => 1

const totalLikes = (array) => {
    const reducer = (sum, item) => {
        return sum + item.likes
    }

    return array.length === 0 ? 0 : array.reduce(reducer, 0)
}

const favouriteBlog = (array) => {
    const reducer = (prev, current) => (prev.likes > current.likes) ? prev : current
    return array.length === 0 ? 0 : array.reduce(reducer, 0)
}

module.exports = { dummy, totalLikes, favouriteBlog }