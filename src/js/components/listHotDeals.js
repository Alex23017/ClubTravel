if (document.querySelector('[data-component="listHotDeals"]')) {
  import("/styles/components/listHotDeals.scss");
    import("/styles/base/reset.scss");
}

const hotDealsList = [
  {
    data: "25 июня 2020",
    from: "Хельсинки",
    to: "Rethymnon, Kreeta",
    duration: "7 дней",
    price: "480€",
    openlist: [
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
    ],
  },
  {
    data: "26 июня 2020",
    from: "Хельсинки",
    to: "Rethymnon, Kreeta",
    duration: "7 дней",
    price: "480€",
    openlist: [
      {
        hotel: "Марилиана, Платанья2",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья2",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
      {
        hotel: "Марилиана, Платанья",
        category: "★★★★",
        food: "Завтраки",
        tour: "Только перелет",
        price: "645€",
      },
    ],
  },
];


  const hotDealsContainer = document.getElementById("hotdeals__render");

  function renderList(hotDealsList) {
    hotDealsContainer.innerHTML = hotDealsList
      .map(
        ({ data, from, to, duration, price, openlist }) => `
        <div class="list__container">
        <div class="list__body">
        <p class="list__data">${data}</p>
        <p class="list__from">${from}</p>
        <p class="list__to">${to}</p>
        <p class="list__duration">${duration}</p>
        <p class="list__price">от <strong>${price}</strong>/чел.</p>
        <p class="list__button">Открыть</p>
        </div>
        <div class="list__open"> 
        <div class="list__body">
        <p class="list__data">${data}</p>
        <p class="list__from">${from}</p>
        <p class="list__to">${to}</p>
        <p class="list__duration">${duration}</p>
        <p class="list__price">от <strong>${price}</strong>/чел.</p>
        <p class="list__button-close">Закрыть</p>
        </div>
        <div class="list__openlist">
          <div class="list__opendeals">
    <div class="hotdeals__header">
        <h3 class="hotdeals__data">Отель</h3>
        <h3 class="hotdeals__from">Категория</h3>
        <h3 class="hotdeals__to">Питание</h3>
        <h3 class="hotdeals__duration">Состав тура</h3>
        <h3 class="hotdeals__price">Цена</h3>
    </div>
    </div>
  </div>  
        ${openlist
          .map(
            ({ hotel, category, food, tour, price }) => `
            <div class="list__body">
          <p class="list__hotel">${hotel}</p>
          <p class="list__category">${category}</p>
          <p class="list__food">${food}</p>
          <p class="list__tour">${tour}</p>
          <p class="list__price list__price--open">от <strong>${price}</strong>/чел.</p>
          <p class="list__button_select">Выбрать</p>
        </div>
        `,
          )
          .join("")}
        </div>
        </div>
    `,
      )
      .join("");
    const listContainer = document.querySelectorAll(".list__container");
    const listButton = document.querySelectorAll(".list__button");
    const listButtonClose = document.querySelectorAll(".list__button-close");

    if (listButtonClose) {
      listButtonClose.forEach((el) => {
        el.addEventListener("click", () => {
          const currentContainer = el.closest(".list__container");
          if (currentContainer) {
            currentContainer.classList.remove("active");
          }
          el.classList.remove("active");
        });
      });
    }

    if (listButton) {
      listButton.forEach((el) => {
        el.addEventListener("click", () => {
          listButton.forEach((item) => item.classList.remove("active"));
          listContainer.forEach((item) => item.classList.remove("active"));

          const currentContainer = el.closest(".list__container");
          if (currentContainer) {
            currentContainer.classList.add("active");
            el.classList.add("active");
          }
        });
      });
    }
  }

  renderList(hotDealsList);

