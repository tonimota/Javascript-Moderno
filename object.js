const object1 = {}

object1.name = "Toni"
object1.idade = 13

const object2 = {
  desc_prod: 'Cuveiro',
  valor_prod: 13.50
}

console.log(object1)
console.log(object2)

// json ///
console.log(JSON.parse('{ "desc_prod": "Cuveiro", "valor_prod": 13.5 }').desc_prod)
