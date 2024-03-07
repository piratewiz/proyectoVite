import './style.css'

const products = [
  {
    name: 'White Basic Shirt',
    price: 289,
    nature: {
      color: ['White']
    },
    gender: 'Male',
    seller: 'Zara',
    image:
      'https://static.zara.net/assets/public/6a6a/23c5/4ffd46768d15/a2b272e97155/00962458251-a1/00962458251-a1.jpg?ts=1707477943829&w=824'
  },
  {
    name: 'Polo Marine Style',
    price: 289,
    nature: {
      color: ['White', 'Black']
    },
    gender: 'Male',
    seller: 'Zara',
    image:
      'https://static.zara.net/assets/public/3488/b1fa/d0e942a4b35e/5a65b31d66c9/1684935592365/1684935592365.jpg?ts=1704328686958&w=364'
  },
  {
    name: 'Nappa Brown Jacket',
    price: 289,
    nature: {
      color: ['Brown']
    },
    gender: 'Male',
    seller: 'Massimo Dutti',
    image:
      'https://i.pinimg.com/564x/b2/44/57/b244578290908b744b0253e9c76027f4.jpg'
  },
  {
    name: 'Syntetic Black Jacket',
    price: 289,
    nature: {
      color: ['Black']
    },
    gender: 'Female',
    seller: 'Massimo Dutti',
    image:
      'https://i.pinimg.com/564x/d4/0c/cd/d40ccda1d767dc96a5b2b597b201bf74.jpg'
  },
  {
    name: 'White Cotton Shirt',
    price: 289,
    nature: {
      color: ['White']
    },
    gender: 'Female',
    seller: 'Massimo Dutti',
    image:
      'https://i.pinimg.com/564x/ca/33/33/ca33333ac77289a7a90a9e643577a21d.jpg'
  },
  {
    name: 'Reversible Bomber Jacket',
    price: 289,
    nature: {
      color: ['Brown', 'Black']
    },
    gender: 'Male',
    seller: 'Levis',
    image:
      'https://i.pinimg.com/564x/1a/ed/af/1aedaf327c569cb2a6dc6f72faf9827f.jpg'
  },
  {
    name: 'Battery Crewneck Sweater',
    price: 289,
    nature: {
      color: ['Blue', 'Black', 'White']
    },
    gender: 'Male',
    seller: 'Levis',
    image:
      'https://i.pinimg.com/564x/27/8d/02/278d02b5ce2561e9de9d1a548cd1945a.jpg'
  },
  {
    name: 'Wilder Flower Trucker Jacket',
    price: 289,
    nature: {
      color: 'Blue'
    },
    gender: 'Female',
    seller: 'Levis',
    image:
      'https://i.pinimg.com/564x/12/94/b7/1294b72b2c661f8e73ca596f93626c54.jpg'
  },
  {
    name: 'Womans ColdGear Shirt',
    price: 289,
    nature: {
      color: 'Black'
    },
    gender: 'Female',
    seller: 'Under Armour',
    image:
      'https://i.pinimg.com/564x/d8/49/b0/d849b0401e83c008d60cc269c13183ad.jpg'
  },
  {
    name: 'Trek Polar Fleece Full Zip',
    price: 289,
    nature: {
      color: ['Black', 'Blue', 'White']
    },
    gender: 'Female',
    seller: 'Under Armour',
    image:
      'https://i.pinimg.com/564x/42/8f/97/428f97422e10bb5afc0f7623c3c5db88.jpg'
  },
  {
    name: 'Autumn Beis Coat',
    price: 289,
    nature: {
      color: 'Beis'
    },
    gender: 'Female',
    seller: 'Massimo Dutti',
    image:
      'https://i.pinimg.com/564x/a3/c3/2a/a3c32af68598a512f886a852946962c9.jpg'
  },
  {
    name: 'Autumn Black Coat',
    price: 289,
    nature: {
      color: ['Blue', 'Black']
    },
    gender: 'Male',
    seller: 'Massimo Dutti',
    image:
      'https://i.pinimg.com/564x/4e/53/cd/4e53cdae5f5c198afcf1115f1dbd8bd8.jpg'
  }
]

const SELLERS = []

let SELLER = ''

const filter = () => {
  const filtered = []

  for (const product of products) {
    if (SELLER.includes(product.seller)) {
      filtered.push(product)
    }
  }
  showProducts(filtered)
}

const fillSellers = (shirts) => {
  SELLERS.splice(0)
  for (const product of products) {
    if (!SELLERS.includes(product.seller)) {
      SELLERS.push(product.seller)
    }
  }
}

fillSellers(products)

const createSelect = () => {
  const divFilters = document.querySelector('.filter')
  const selectModel = document.createElement('select')
  selectModel.className = 'selecter'

  for (const seller of SELLERS) {
    const option = document.createElement('option')

    option.value = seller
    option.textContent = seller

    selectModel.appendChild(option)
  }
  divFilters.appendChild(selectModel)

  selectModel.addEventListener('change', (event) => {
    SELLER = event.target.value
    filter()
  })
}

const showProducts = (shirts) => {
  const productsSection = document.querySelector('.products')
  productsSection.innerHTML = ''

  products.forEach((product) => {
    const productDiv = document.createElement('div')
    productDiv.className = 'product'
    const productImg = document.createElement('img')
    const productName = document.createElement('h3')
    const price = document.createElement('p')

    productImg.src = product.image
    productName.textContent = product.name
    price.textContent = product.price + '€'

    productDiv.appendChild(productImg)
    productDiv.appendChild(productName)
    productDiv.appendChild(price)
    productsSection.appendChild(productDiv)
  })
}

showProducts(products)
createSelect()
