export default class {
  constructor(level) {
    this.container = null
    this.drop = null
    this.level = level
  }

  draw(wrapper) {
    this.container = document.createElement('div')
    this.drop = new Image()
    this.container.classList.add('water-drop-box')
    this.drop.classList.add('water-drop')
    this.drop.src = `/assets/images/${this.level}.png`
    this.drop.onload = () => {
      this.container.appendChild(this.drop)
    }
    this.drop.onclick = this.levelUp.bind(this)
    
    wrapper.appendChild(this.container)
  }

  levelUp() {
    if (this.level === 4) {
      this.level = 0
    } else {
      this.level++
    }
    
    this.drop.src = `/assets/images/${this.level}.png`
  }
}