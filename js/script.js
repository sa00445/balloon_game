function bloonmotion() {
    let boxwidth = (box.getBoundingClientRect().width)
    let boxheight = (box.getBoundingClientRect().height)
    let allbloon = document.querySelectorAll(".bloonclass")
    allbloon.forEach((element) => {
        element.directionY = 1;
        element.directionX = 1;
        element.style.left = (Math.round((Math.random(boxwidth) * 600))) + 'px'
        element.style.top = (Math.round((Math.random(boxheight) * 600))) + 'px'

    })
    let startkey = setInterval(() => {
        let addbloon = document.querySelectorAll(".bloonclass")
        addbloon.forEach((element) => {
            if (element.directionY == 1) {
                let upper = parseInt(element.style.top) + 1
                element.style.top = upper + 'px'
            }
            else {
                let upper = parseInt(element.style.top) - 1
                element.style.top = upper + 'px'
            }
            if (element.directionX == 1) {
                let leftSide = parseInt(element.style.left) + 1
                element.style.left = leftSide + 'px'

            }
            else {
                let leftSide = parseInt(element.style.left) - 1
                element.style.left = leftSide + 'px'
            }
            let boxx = box.getBoundingClientRect()
            let bloon = element.getBoundingClientRect();
            if (bloon.top + bloon.height >= boxx.bottom) {
                element.directionY = 0
            }
            if (bloon.top <= boxx.top) {
                element.directionY = 1


            }
            if (bloon.left <= boxx.left) {

                element.directionX = 1

            }
            if (bloon.right >= boxx.width) {
                element.directionX = 0


            }


        })



    }, 10)

}


function addbloon() {
    let blooncreate = document.createElement('img')
    blooncreate.setAttribute('src', 'images/bal' + Math.round(Math.random() * 2) + '.png')
    blooncreate.setAttribute("class", "bloonclass")

    blooncreate.style.left = (Math.round((Math.random(700) * 600))) + 'px'
    blooncreate.style.top = (Math.round((Math.random(700) * 600))) + 'px'

    blooncreate.setAttribute('width', '70')
    blooncreate.directionY = 1;
    blooncreate.directionX = 1
    let box = document.getElementById('box')
    box.appendChild(blooncreate)

}
