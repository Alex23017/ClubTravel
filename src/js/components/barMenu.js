if (document.querySelector('[data-component="barMenu"]')) {
  import('/styles/components/barMenu.scss')
  import('/styles/base/reset.scss')
}

// ВЫБОР В ИНПУТАХ ЗНАЧЕНИЯ
function setupDropdown(dropdownId) {
  const btn = document.getElementById(dropdownId)
  if (!btn) return

  const menu = btn.parentElement.querySelector('.dropdown-menu')
  if (!menu) return

  const items = menu.querySelectorAll('.dropdown-item')
  if (!items) return

  items.forEach(item => {
    item.addEventListener('click', () => {
      btn.textContent = item.textContent
    })
  })
}
setupDropdown('dropdownBarPrice')
setupDropdown('dropdownBarLow')

