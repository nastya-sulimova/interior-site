const filterSelect = document.querySelector('.form-select');
const filterButton = document.getElementById('order');

filterButton.addEventListener('click', () => {
  filterSelect.classList.toggle('form-select_hidden');
});