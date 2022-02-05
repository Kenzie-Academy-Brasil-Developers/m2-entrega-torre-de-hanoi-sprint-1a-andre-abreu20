const body = document.querySelector("body")
const torre1 = document.createElement("div")
const torre2 = document.createElement("div")
const torre3 = document.createElement("div")
const disk1 = document.createElement("div")
const disk2 = document.createElement("div")
const disk3 = document.createElement("div")
const disk4 = document.createElement("div")
const pWinner = document.createElement("p")
const resetButton = document.createElement("button")


body.appendChild(resetButton)
body.appendChild(torre1)
body.appendChild(torre2)
body.appendChild(torre3)
body.appendChild(pWinner)
torre1.appendChild(disk1)
torre1.appendChild(disk2)
torre1.appendChild(disk3)
torre1.appendChild(disk4)

resetButton.classList.add("button")
pWinner.classList.add("winner")
torre1.classList.add("torre1")
torre2.classList.add("torre2")
torre3.classList.add("torre3")
disk1.classList.add("disk1")
disk2.classList.add("disk2")
disk3.classList.add("disk3")
disk4.classList.add("disk4")


resetButton.innerHTML = "Reset"


/*
Criar colunas e os discos
Adotar os discos e as colunas para o body
Fazer uma funcao com um evento de 2 clicks para que a coluna adote o disco porem ele nao pode ser maior q a menor coluna
*/

function moveDisk(torreAtual, torreAlvo) {
    let lastDisk = torreAtual.lastElementChild
    let targetDiskSize
    if (checkChild(torreAlvo) === 0 && lastDisk) {
        torreAlvo.appendChild(lastDisk)
    }
    if (lastDisk) {
        let lastDiskSize = lastDisk.clientWidth
        targetDiskSize = torreAlvo.lastElementChild.clientWidth
        if (targetDiskSize > lastDiskSize) {
            torreAlvo.appendChild(lastDisk)
        }
    }
}

let arrclicks = []
function checkChild(torreAlvo) {
    let child = torreAlvo.childElementCount
    return child
}
function highlight(element) {
    if (element) {
        let orig = element.style.border
        if (element && element.style) {
            element.style.border = 'solid 6px #fff'
            setTimeout(function () {
                if (element) {
                    element.style.border = orig
                }
            }, 100)
        }
    }
}
resetButton.addEventListener("click", () => {
    torre1.appendChild(disk1)
    torre1.appendChild(disk2)
    torre1.appendChild(disk3)
    torre1.appendChild(disk4)
    pWinner.style.display = "none"
})
torre1.addEventListener("click", () => {
    let LastChildTorre1 = torre1.lastElementChild
    arrclicks.push(torre1)
    highlight(LastChildTorre1)
    if (arrclicks.length === 2) {
        moveDisk(arrclicks[0], arrclicks[1])
        arrclicks.length = 0
    } else {
        return false
    }
})
torre2.addEventListener("click", () => {
    let LastChildTorre2 = torre2.lastElementChild
    arrclicks.push(torre2)
    highlight(LastChildTorre2)

    if (arrclicks.length === 2) {
        moveDisk(arrclicks[0], arrclicks[1])
        arrclicks.length = 0
    } else {
        return false
    }
})
torre3.addEventListener("click", () => {
    let LastChildTorre3 = torre3.lastElementChild
    let childsCount = torre3.childElementCount
    highlight(LastChildTorre3)
    arrclicks.push(torre3)
    if (arrclicks.length === 2) {
        moveDisk(arrclicks[0], arrclicks[1])
        arrclicks.length = 0
    }
    if (childsCount === 3) {
        pWinner.style.display = "flex"
        pWinner.innerText = "You Win!"
        pWinner.style.fontSize = "25px"
        pWinner.style.justifyContent = "center"
        pWinner.style.border = "4px solid black"
        pWinner.style.borderRadius = "15px"
    } else {
        return false
    }
})




