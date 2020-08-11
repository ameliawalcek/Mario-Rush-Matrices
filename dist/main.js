const renderer = new Renderer()
let board

const initGame = function(){
    renderer.renderBoard(board.matrix)
    renderer.renderPlayerOneScore(board.playerOne)
    renderer.renderPlayerTwoScore(board.playerTwo)
}

$('#enter-btn').on('click', function () {
    let x = $(this).closest("#bottom-bar").find(".x-input").val()
    let y = $(this).closest("#bottom-bar").find(".y-input").val()
    
    if (x && y) {
        board = new MarioRush(x, y)
        board.print()

        initGame()
    }
})


$(document).keydown(function (e) {
    if (e.which === 87) {
        board.movePlayer("player1", "up")
        initGame()
    } else if (e.which === 83) {
        board.movePlayer("player1", "down")
        initGame()
    } else if (e.which === 68) {
        board.movePlayer("player1", "right")
        initGame()
    } else if (e.which === 65) {
        board.movePlayer("player1", "left")
        initGame()
    }

})


$(document).keydown(function (e) {
    if (e.which === 38) {
        board.movePlayer("player2", "up")
        initGame()    
    } else if (e.which === 40) {
        board.movePlayer("player2", "down")
        initGame()
    } else if (e.which === 39) {
        board.movePlayer("player2", "right")
        initGame()
    } else if (e.which === 37) {
        board.movePlayer("player2", "left")
        initGame()
    }

})