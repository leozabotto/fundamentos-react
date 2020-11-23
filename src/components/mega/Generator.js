function random(min = 1, max = 61) {
  return Math.floor(Math.random() * (max - min)) + min
}

function sortfunction(a, b) {
  return (a - b)
}

export default function (qtd) {
  let megaNumbers = []

  for (let i = 0; i < qtd; i++) {

    let number = random()

    while (megaNumbers.includes(number)) {
      number = random()
    }
    megaNumbers.push(number)
  }

  return megaNumbers.sort(sortfunction)
}

