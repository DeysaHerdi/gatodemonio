const a = {}
const b = {__proto__:a}
const c = {__proto__:b}
const d = {__proto__:c}
const e = {__proto:d}

c.nome = 'existo'
console.log(a.nome)
console.log(b.nome)
console.log(c.nome)
console.log(d.nome)
console.log(e.nome)