const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling?.classList.contains('full')
  ) {
    idx--
  }

  smallCups.forEach((cup, index) => {
    if (index <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })

  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.height = 0
    percentage.innerText = ''
  } else {
    const percent = (fullCups / totalCups) * 100
    percentage.style.height = `${percent}%`
    percentage.innerText = `${percent}%`
  }

  const totalLiters = 2
  const remainingLiters = totalLiters - (0.25 * fullCups)
  liters.innerText = `${remainingLiters}L`

  if (remainingLiters === 0) {
    remained.style.display = 'none'
  } else {
    remained.style.display = 'flex'
  }
}