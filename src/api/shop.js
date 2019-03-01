const products1 = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "iphone 6", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "mi 8", "price": 19.99, "inventory": 5}
]

const products2 = [
  {"id": 1, "title": "only T-SHIRT", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]

export default {
  getProducts (type) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (type == 1) {
          resolve(products1)
        } else if (type == 2) {
          resolve(products2)
        } else {
          reject('no type products')
        }
      }, 1000)
    })
  },
  buyProducts () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: 0,
          msg: '购买成功'
        })
      }, 1000)
    })
  }
}
