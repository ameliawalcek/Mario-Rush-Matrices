class Renderer {
    constructor() {

    }
    renderBoard(board) {
        $("#board-container").empty()
        for (let i = 0; i < board.length; i++) {
            let currentRow = board[i]

            let source = $("#board-template").html()
            let template = Handlebars.compile(source)
            let newHTML = template({ currentRow })

            $("#board-container").append(newHTML)
        }

        $("#board-container").css("grid-template-rows", `repeat(${board.length}, 5fr)`)
        $(".row").css("grid-template-columns", `repeat(${board[0].length}, 5fr)`)
    }

    renderPlayerOneScore(playerOneScore) {
        let source = $("#score-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(playerOneScore)

        $("#player1-score").empty().append(newHTML)
    }

    renderPlayerTwoScore(playerTwoScore) {
        let source = $("#score-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(playerTwoScore)

        $("#player2-score").empty().append(newHTML)
    }
}