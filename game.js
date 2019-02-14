let gameBoard = document.querySelector('.gameBoard')
// let level = 1
let levelMap



render()

function render() {
    downloadMap()
}

function mapToBricks() {
    for (i = 0; i < levelMap.length; i++) {
        let brick = levelMap[i]
        let mapNode = document.createElement('div')
        let rowNode = document.createElement('div')
        rowNode.classList.add('rowNode')
        mapNode.classList.add('mapNode')
        if (brick === '#') {
            mapNode.classList.add('wallNode')
        }
        if (brick === '.') {
            mapNode.classList.add('pathNode')
        }
        if (brick === 'P') {
            mapNode.classList.add('playerNode')
        }
        if (brick === 'T') {
            mapNode.classList.add('treasureNode')
        }
        if (brick === '↵') {
            gameBoard.appendChild(rowNode)
            rowNode = document.createElement('div')
            rowNode.classList.add('rowNode')
        }
        rowNode.appendChild(mapNode)
        gameBoard.appendChild(rowNode)
    }
    //levelMap.forEach(brick =>{})
}

// function downloadMap() {
//     let currentMap = "map" + level
//     fetch(currentMap + '.txt').then(map => map.text()).then(map => {
//         levelMap = map.split('')
//         level++
//     }).then(mapToBricks)
// }