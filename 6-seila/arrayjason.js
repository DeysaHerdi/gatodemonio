const objetoEmJSON = `[
    {
      "id": 1,
      "nome": "TV LCD 42",
      "preco": 2000.00
    },
    {
      "id": 2,
      "nome": "XBOX 360",
      "preco": 800.00
    },
    {
      "id": 3,
      "nome": "Maquina Fotografica Nikon",
      "preco": 2600.00
    },
    {
      "id": 4,
      "nome": "Smartphone Samsung Galaxy S6",
      "preco": 3000.00
    },
    {
      "id": 5,
      "nome": "Teclado Multilaser",
      "preco": 30.00
    },
    {
      "id": 6,
      "nome": "Monitor AOC",
      "preco": 400.00
    }
  ]`

const listaDeProdutos = JSON.parse(objetoEmJSON)
console.log(listaDeProdutos)