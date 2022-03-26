const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
  card.addEventListener('dragstart', dragStart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragEnd)
})

function dragStart() {
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

  //this = card
  this.classList.add('is-dragging')
}

function drag() {}

function dragEnd() {
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

  //this = card
  this.classList.remove('is-dragging')
}

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragEnter)
  dropzone.addEventListener('dragover', dragOver)
  dropzone.addEventListener('dragleave', dragLeave)
  dropzone.addEventListener('drop', drop)
})

function dragEnter() {}

function dragOver() {
  //this = dropzone
  this.classList.add('over')

  const cardBeingDragged = document.querySelector('.is-dragging')

  //this = dropzone
  this.appendChild(cardBeingDragged)
}

function dragLeave() {
  //this = dropzone
  this.classList.remove('over')
}

function drop() {
  //preventing bug
  this.classList.remove('over')
}
