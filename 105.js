//exerci

const array = [10,9,8,7,6,5,4,3,2,1,0]
array.sort()
console.log(array)
array.push(11)
array.shift()
array.unshift('Lista')
console.log(array)

const fatia = array.slice(0, 2)
console.log(fatia)
 array.splice(0, 2, 'Lista', 1)
 console.log(array)