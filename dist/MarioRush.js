// const Matrix = require('../dist/Matrix')
class MarioRush extends Matrix {

    constructor(x, y) {
        super(x, y)
        this.bottomIndex = y - 1
        this.rightIndex = x - 1
        this.length = x
        this.height = y
        this.playerOne = { symbol: 'player1', score: 0 }
        this.playerTwo = { symbol: 'player2', score: 0 }
        this.empty = '.'
        this.coin = 'c'
        this.megaCoin = 'm'
        this.wall = 'x'
        this.generatePlayerStart(x, y)
        this.generateCoins()
        this.generateWalls()
    }

    generatePlayerStart(x, y) {
        this.alter(0, 0, this.playerOne.symbol)
        this.alter(y - 1, x - 1, this.playerTwo.symbol)
    }

    movePlayer(player, direction) {
        let pos = this.findCoordinate(player)
        if (this.isWall(pos.y, pos.x, direction)) { return }
        if (direction === 'up' && this.isInbounds(pos.y, direction)) {
            this.checkCoin(player, pos.x, pos.y - 1)
            this.alter(pos.y - 1, pos.x, player)
            this.alter(pos.y, pos.x, this.empty)
        }
        else if (direction === 'down' && this.isInbounds(pos.y, direction)) {
            this.checkCoin(player, pos.x, pos.y + 1)
            this.alter(pos.y + 1, pos.x, player)
            this.alter(pos.y, pos.x, this.empty)
        }
        else if (direction === 'left' && this.isInbounds(pos.x, direction)) {
            this.checkCoin(player, pos.x - 1, pos.y)
            this.alter(pos.y, pos.x - 1, player)
            this.alter(pos.y, pos.x, this.empty)
        }
        else if (direction === 'right' && this.isInbounds(pos.x, direction)) {
            this.checkCoin(player, pos.x + 1, pos.y)
            this.alter(pos.y, pos.x + 1, player)
            this.alter(pos.y, pos.x, this.empty)
        }
        else {
            return 
        }
    }

    isWall(y, x, direction) {
        if (direction === 'up' && this.matrix[y - 1][x] === this.wall) { return true }
        if (direction === 'down' && this.matrix[y + 1][x] === this.wall) { return true }
        if (direction === 'left' && this.matrix[y][x - 1] === this.wall) { return true }
        if (direction === 'right' && this.matrix[y][x + 1] === this.wall) { return true }
        { return false }
    }

    isInbounds(pos, direction) {
        if (direction === 'up' && pos !== 0) { return true }
        if (direction === 'down' && pos !== this.bottomIndex) { return true }
        if (direction === 'left' && pos !== 0) { return true }
        if (direction === 'right' && pos !== this.rightIndex) { return true }
        { return false }
    }

    generateNum(dimension) {
        return Math.floor(Math.random() * dimension)
    }

    generateCoins() {
        let numCoins = Math.floor(this.bottomIndex * this.rightIndex)
        let placedCoins = 0
        let placedMegaCoin = 2
        while (placedCoins < numCoins) {
            let x = this.generateNum(this.length)
            let y = this.generateNum(this.height)
            if (placedMegaCoin !== 0 && this.matrix[y][x] === this.empty) {
                this.alter(y, x, this.megaCoin)
                placedMegaCoin--
            }
            if (this.matrix[y][x] === this.empty) {
                this.alter(y, x, this.coin)
                placedCoins++
            }
        }
    }

    checkCoin(player, x, y) {
        if (this.matrix[y][x] === this.coin) {
            player === "player1" ? this.playerOne.score++ : this.playerTwo.score++
        }
        if (this.matrix[y][x] === this.megaCoin) {
            player === "player1" ? this.playerOne.score += 5 : this.playerTwo.score += 5
        }
    }

    generateWalls() {
        for (let x = 0; x < this.matrix.length; x++) {
            for (let y = 0; y < this.matrix[x].length; y++) {
                if (this.matrix[y][x] === this.empty) {
                    this.alter(y, x, this.wall)
                }
            }
        }
    }

    printScore() {
        console.log(`Player1 score: ${this.playerOne.score} Player2 score: ${this.playerTwo.score}`)
    }
}



