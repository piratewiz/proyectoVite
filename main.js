import './style.css'

const products = [
  {
    name: 'White Basic Shirt',
    price: 29.95,
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
    price: 29.95,
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
    price: 99.95,
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
    price: 45.95,
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
    price: 45.95,
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
    price: 60.95,
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
    price: 45.95,
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
    price: 60.95,
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
    price: 30.95,
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
    price: 120.95,
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
    price: 199.95,
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
    price: 199.95,
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
const GENDERS = ['All', 'Male', 'Female']

let GENDER = 'All'
let SELLER = ''

const filter = () => {
  const filtered = []
  const searchPrice = parseFloat(document.getElementById('price-input').value)
  const maxPrice = 200

  for (const product of products) {
    const isMatch = product.name.toLowerCase().includes(searchPrice)
    const isWithinPriceRange = product.price <= maxPrice
    const isGenderMatch = GENDER === 'All' || GENDER === product.gender

    if (
      isWithinPriceRange &&
      isGenderMatch &&
      (SELLER === '' || SELLER === product.seller)
    ) {
      if (isNaN(searchPrice) || product.price <= searchPrice) {
        filtered.push(product)
      }
    }
  }
  showProducts(filtered)
}

const fillSellers = (shirts) => {
  SELLERS.splice(0)
  for (const product of shirts) {
    if (!SELLERS.includes(product.seller)) {
      SELLERS.push(product.seller)
    }
  }
}

fillSellers(products)

const createSelect = () => {
  const divFilters = document.querySelector('.filter')
  const h2 = document.createElement('h2')
  h2.textContent = 'Product Categories'
  const inputPrice = document.createElement('input')
  inputPrice.id = 'price-input'
  inputPrice.type = 'text'
  inputPrice.placeholder = 'Max price is 200'
  inputPrice.max = 200

  const gendersFilter = document.createElement('select')
  gendersFilter.className = 'gender-filter'

  const btnReset = document.createElement('button')
  btnReset.id = 'reset-products'
  btnReset.textContent = 'Reset Filters'
  btnReset.addEventListener('click', filter)

  const btnPrice = document.createElement('button')
  btnPrice.id = 'button-price'
  btnPrice.textContent = 'Find Product'

  const selectModel = document.createElement('select')
  selectModel.className = 'selecter'

  const defaultOption = document.createElement('option')
  defaultOption.value = ''
  defaultOption.textContent = 'All Sellers'
  selectModel.appendChild(defaultOption)

  for (const seller of SELLERS) {
    const option = document.createElement('option')
    option.value = seller
    option.textContent = seller
    selectModel.appendChild(option)
  }

  for (const gender of GENDERS) {
    const option = document.createElement('option')
    option.value = gender
    option.textContent = gender
    gendersFilter.appendChild(option)
  }

  divFilters.appendChild(h2)
  divFilters.appendChild(selectModel)
  divFilters.appendChild(gendersFilter)
  divFilters.appendChild(inputPrice)
  divFilters.appendChild(btnPrice)
  divFilters.appendChild(btnReset)

  btnPrice.addEventListener('click', filter)
  btnReset.addEventListener('click', resetFilters)
  selectModel.addEventListener('change', (event) => {
    SELLER = event.target.value
    filter()
  })

  gendersFilter.addEventListener('change', (event) => {
    GENDER = event.target.value
    filter()
  })
}

const showProducts = (shirts) => {
  const productsSection = document.querySelector('.products')
  productsSection.innerHTML = ''

  shirts.forEach((product) => {
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

const resetFilters = () => {
  document.getElementById('price-input').value = ''
  document.querySelector('.selecter').value = ''
  document.querySelector('.gender-filter').value = 'All'
  SELLER = ''
  GENDER = 'All'
  filter()
}

const nav = document.querySelector('.nav')
const open = document.querySelector('#open')
const close = document.querySelector('#close')

open.addEventListener('click', () => {
  nav.classList.add('visible')
  open.classList.add('hidden')
})
close.addEventListener('click', () => {
  nav.classList.remove('visible')
  open.classList.remove('hidden')
})

showProducts(products)
createSelect()
