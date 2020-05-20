const products = [
  {
    id: 1234,
    is_promotion: true,
    has_video: true
  },
  {
    id: 345,
    is_promotion: true,
    has_video: false
  },
  {
    id: 457,
    is_promotion: false,
    has_video: false
  },
  {
    id: 765,
    is_promotion: true,
    has_video: true
  }
]

// const result = products.filter(item => item.is_promotion === true && item.has_video === true)
// console.log(result)
const filterData = {
  is_promotion: false,
  has_video: false
}

const result = products.filter(item => {
  let x = false
  for (let key in filterData) {
    if (filterData[key] === item[key]) x = true
    else {
        x = false
        break;
    }
  }
  return x
})

console.log(result)
