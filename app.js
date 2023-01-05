const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)


function checkBoxes() {
    const triggerPoint = (window.innerHeight * 0.8)

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerPoint) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
checkBoxes()