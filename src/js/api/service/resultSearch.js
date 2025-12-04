import { API_VARIABLES } from '../variables.js'
import { getResource } from '../api'

const urlParams = new URLSearchParams(window.location.search)
const rating = urlParams.get('rating')
const foodFilter = urlParams.get('foodTour')

const query = new URLSearchParams({ populate: '*' })
const filters = []

if (rating) {
  const ratingArray = rating.split(',').map(Number)
  ratingArray.forEach(r => query.append('filters[rating][$in]', r))
}

if (foodFilter) query.set('filters[food][$eq]', foodFilter)

if (filters.length) {
  query.set('filters[$or]', JSON.stringify(filters))
}

export async function getResultSearch() {
  try {
    const res = await getResource(`${API_VARIABLES.BASE_URL}/api/result-searches?${query.toString()}`)
    console.log(res.data)

    return res.data
  } catch (error) {
    console.error('Error fetching result saerch:', error)
  }
}
