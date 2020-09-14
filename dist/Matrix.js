class Matrix {
    constructor(x, y) {
        this.matrix = []
        this.generateMatrix(x, y)
    }

    generateMatrix(x, y) {
        let counter = 1
        for (let i = 0; i < y; i++) {
            let row = []
            for (let j = 0; j < x; j++) {
                row.push(".")
            }
            this.matrix.push(row)
        }
        return this.matrix
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
        }
    }

    alter(y, x, val) {
        this.matrix[y][x] = val
    }

    get(x, y) {
        return this.matrix[y][x]
    }

    printColumn(x) {
        for (let y = 0; y < this.matrix.length; y++) {
            console.log(this.matrix[y][x])
        }
    }

    printRow(y) {
        for (let x = 0; x < this.matrix[y].length; x++) {
            console.log(this.matrix[y][x])
        }
    }

    findCoordinate(val) {
        for (let y = 0; y < this.matrix.length; y++) {
            for (let x = 0; x < this.matrix[y].length; x++) {
                if (this.matrix[y][x] === val) return { x, y }
            }
        }
    }
}

// module.exports = Matrix
