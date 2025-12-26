import { getHotelById, getHotelByIdSearch } from '../api/service/hotels'
import OneHotelInfo from '../../html/components/oneHotel/oneHotelInfo.html'
// const dataHotel = {
//   hotelName: 'AMBASSADOR',
//   address: 'Болгария, Золотые Пески',
//   from: 'Таллинна',
//   food: 'Завтраки',
//   houses: 'Стандарт',
//   night: 6,
//   date: '18 июня 2020 г.',
//   rating: 4,
//   prices: 429,

//   title: 'Рекомендуем для семейного и молодёжного отдыха.',
//   description: 'Гости города Золотые пески, приехавшие в город по делам бизнеса или для отдыха, могут остановиться в гостинце Ambassador (Амбассадор). Отель прекрасно сочетает в себе как современный комфорт, так и высокий уровень обслуживания. Каждый номер оснащен всем необходимым для комфортного отдыха (кондиционер, телевизор, письменный стол, сейф и утренняя газета). Вы сможете воспользоваться услугами массажиста, баром, лифтом, спа, сауной, рестораном, отдохнуть у бассейна, посетить фитнес зал и прогуляться по саду. Ваш отдых в отеле Ambassador (Амбассадор) будет ярким и запоминающимся, вас не оставят равнодушными первоклассный сервис и великолепное обслуживание. Отель находится в 27 км от Международного аэропорта Варна (Varna International Airport), в 900 метрах от центра курорта Золотые пески и в 150 метрах от пляжа. Отель принимает отдыхающих круглый год и является прекрасным местом для отдыха, спорта и развлечений. В бальнеологическом центре «Амбассадор» предлагаются свыше 100 видов услуг: таласотерапия, ванные, массаж, электротерапия, грязелечение, водолечение, акупунктура, медицинская косметика, сауна, открытый и крытый бассейны, фитнес зал, солярий и много других.',
//   infoList: [
//     {
//       infoTitle: 'Пляж',
//       infoSubList: [
//         'Расстояние до пляжа (60 м.)',
//         'Зонтики (платно)',
//         'Шезлонги (платно)',
//       ],
//     },
//     {
//       infoTitle: 'Для детей',
//       infoSubList: [
//         'детская площадка',
//         'детский бассейн',
//       ],
//     },
//     {
//       infoTitle: 'Номера',
//       infoSubList: [
//         '181 номеров',
//         'душ',
//         'туалет',
//         'умывальник',
//         'балкон',
//         'ТВ спутниковое',
//         'кондиционер',
//         'телефон',
//         'холодильник',
//       ],
//     },
//     {
//       infoTitle: 'Рестораны и бары',
//       infoSubList: [
//         'бары',
//         'кафе',
//         'рестораны',
//       ],
//     },
//     {
//       infoTitle: 'Развлечения и спорт',
//       infoSubList: [
//         'бассейн крытый',
//         'бассейн открытый',
//         'массаж',
//         'салон красоты',
//         'сауна',
//         'фитнес центр',
//         'велосипеды',
//         'прокат',
//         'теннис настольный'
//       ],
//     },
//     {
//       infoTitle: 'Сервис',
//       infoSubList: [
//         'парковка',
//         'прокат автомобилей',
//         'мобмен валют',
//         ' сейф',
//       ],
//     },
//   ],
//   hotelPosition: {
//     infoTitle: 'Месторасположение',
//     infoText: 'Гостиница находится в южной части курортного комплекса «Золотые пески» в нескольких минутах ходьбы от моря.',
//   },

// };
const params = new URLSearchParams(window.location.search)
const hotelId = params.get('id')

let dataHotel = null
let dataSearch = null

const type = params.get('type')

if (type === 'hotel') {
  dataHotel = await getHotelById(hotelId)
}
if (type === 'search') {
  dataSearch = await getHotelByIdSearch(hotelId)
}

function renderInfo() {
  const container = document.querySelector('.hotel__info')
  if (!container) return

  const source = dataHotel || dataSearch
  if (!source) return

  const lists = source.serviceLists?.list ?? []
  const leftList = lists.slice(0, 3)
  const rightList = lists.slice(3)

  function createInfoBlocks(list) {
    return list
      .map(item => {
        const ul = item.subServices?.map(li => `<li>${li.name}</li>`).join('') ?? ''
        return `
          <div class="hotel__info-item">
            <div class="hotel__info-title">${item.title ?? ''}</div>
            <ul class="hotel__info-ul">${ul}</ul>
          </div>
        `
      })
      .join('')
  }

  const hotelInfo = OneHotelInfo({
    title: source.serviceLists?.position?.name ?? source.tittle ?? 'Без назви',
    description: source.serviceLists?.position?.description ?? source.description ?? 'Опис відсутній',
    itemTitle: source.serviceLists?.listPosition?.name ?? source.tittle ?? '',
    itemDescription: source.serviceLists?.listPosition?.description ?? '',
    leftList: createInfoBlocks(leftList),
    rightList: createInfoBlocks(rightList),
  })

  container.appendChild(hotelInfo)
}

renderInfo()
