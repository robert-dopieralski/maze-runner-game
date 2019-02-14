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
window.addEventListener('keyup', move(event))

function move(event) {
    console.log(event.code)

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