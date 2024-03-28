import './style.css'
import { products } from './products'

const SELLERS = []
const GENDERS = ['All', 'Male', 'Female']

let GENDER = 'All'
let SELLER = ''

const filter = () => {
  const filtered = []
  const searchPrice = parseFloat(document.getElementById('price-input').value)
  const maxPrice = 200

  for (const product of products) {
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

  function addOptionsToSelect(optionsArray, selectNode) {
    for (const optionValue of optionsArray) {
      const option = document.createElement('option')
      option.value = optionValue
      option.textContent = optionValue
      selectNode.appendChild(option)
    }
  }

  addOptionsToSelect(SELLERS, selectModel)
  addOptionsToSelect(GENDERS, gendersFilter)

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

  if (shirts.length === 0) {
    const noResultsMessage = document.createElement('p')
    noResultsMessage.className = 'message'
    noResultsMessage.textContent = 'No search results...'
    productsSection.appendChild(noResultsMessage)
  } else {
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
