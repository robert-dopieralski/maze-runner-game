let gameBoard = document.querySelector('.gameBoard')

const maze = [
    '#########',
    '#.....#.#',
    '#.###..T#',
    '#..#..#.#',
    '#.#######',
    '#..#..P.#',
    '#.##.##.#',
    '#.....#.#',
    '#########',
]

//launcher
renderMap()
window.addEventListener('keyup', function (event) {
    let key = event.key
    move(key)
    console.log(gameBoard.parentElement)
})

function restartGame(){
    let drop = gameBoard.parentElement
    drop.removeChild(gameBoard)
    gameBoard = document.createElement('div')
    gameBoard.classList.add('gameBoard')
    drop.appendChild(gameBoard)
    renderMap()
}

function checkIfTreasure(xxx) {
    if (xxx.classList.contains('treasureNode')) {
        xxx.classList.remove('treasureNode')
        alert('You have WON, next maps are not ready Yet :( Feel free to play again')
        restartGame()
    }
}

function move(x) {
    let player = document.querySelector('.playerNode')
    let currentRow = Array.from(player.parentElement.childNodes)
    let plIndex = currentRow.indexOf(player)
    console.log(plIndex)
    if (x === "a") {
        let previousNode = player.previousElementSibling
        if (previousNode.classList.contains('wallNode')) {
            //do nothing :D
        }
        else {
            player.classList.remove('playerNode')
            previousNode.classList.add('playerNode')
            checkIfTreasure(previousNode)
        }
    }
    if (x === "d") {
        let nextNode = player.nextElementSibling
        if (nextNode.classList.contains('wallNode')) {
            //do nothing :D
        }
        else {
            player.classList.remove('playerNode')
            nextNode.classList.add('playerNode')
            checkIfTreasure(nextNode)
        }
    }
    if (x === "w") {
        let aboveNode = player.parentElement.previousElementSibling.childNodes[plIndex]
        if (aboveNode.classList.contains('wallNode')) {
            //do nothing :D
        }
        else {
            player.classList.remove('playerNode')
            aboveNode.classList.add('playerNode')
            checkIfTreasure(aboveNode)
        }
    }
    if (x === "s") {
        let belowNode = player.parentElement.nextElementSibling.childNodes[plIndex]
        if (belowNode.classList.contains('wallNode')) {
            //do nothing :D
        }
        else {
            player.classList.remove('playerNode')
            belowNode.classList.add('playerNode')
            checkIfTreasure(belowNode)
        }
    }
}

function renderMap() {
    for (i = 0; i < maze.length; i++) {
        let a = maze[i].slice('')
        let row = document.createElement('div')
        row.classList.add('rowNode')
        for (j = 0; j < a.length; j++) {
            let x = a[j]
            let elementNode = document.createElement('div')
            if (x === "#") {
                elementNode.classList.add('wallNode')
                elementNode.classList.add('mapNode')
            }
            if (x === ".") {
                elementNode.classList.add('pathNode')
                elementNode.classList.add('mapNode')
            }
            if (x === "P") {
                elementNode.classList.add('pathNode')
                elementNode.classList.add('playerNode')
                elementNode.classList.add('mapNode')
            }
            if (x === "T") {
                elementNode.classList.add('pathNode')
                elementNode.classList.add('treasureNode')
                elementNode.classList.add('mapNode')
            }
            row.appendChild(elementNode)
        }
        gameBoard.appendChild(row)
    }
}