const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const type = urlParams.get('type');
console.log(type);
// type = switchtab(type)


const swichTab = (element) => {
  console.log(element);
  if (element.id === 'fee')
  {
    document.querySelector('.tab-tracking-title-active').classList.remove('tab-tracking-title-active');
    element.classList.add('tab-tracking-title-active');
    document.getElementById('tariff').classList.remove('hidden');
    document.getElementById('track').classList.add('hidden');
    document.getElementById('office-point').classList.add('hidden');
    document.getElementById('price-list').classList.add('hidden');
    document.getElementById('prohibited-goods').classList.add('hidden');
  }

  if (element.id === 'status')
  {
    document.querySelector('.tab-tracking-title-active').classList.remove('tab-tracking-title-active');
    element.classList.add('tab-tracking-title-active');
    document.getElementById('track').classList.remove('hidden');
    document.getElementById('tariff').classList.add('hidden');
    document.getElementById('office-point').classList.add('hidden');
    document.getElementById('price-list').classList.add('hidden');
    document.getElementById('prohibited-goods').classList.add('hidden');
  }

  if (element.id === 'office')
  {
    document.querySelector('.tab-tracking-title-active').classList.remove('tab-tracking-title-active');
    element.classList.add('tab-tracking-title-active');
    document.getElementById('office-point').classList.remove('hidden');
    document.getElementById('tariff').classList.add('hidden');
    document.getElementById('track').classList.add('hidden');
    document.getElementById('price-list').classList.add('hidden');
    document.getElementById('prohibited-goods').classList.add('hidden');
  }

  if (element.id === 'price')
  {
    document.querySelector('.tab-tracking-title-active').classList.remove('tab-tracking-title-active');
    element.classList.add('tab-tracking-title-active');
    document.getElementById('price-list').classList.remove('hidden');
    document.getElementById('tariff').classList.add('hidden');
    document.getElementById('track').classList.add('hidden');
    document.getElementById('office-point').classList.add('hidden');
    document.getElementById('prohibited-goods').classList.add('hidden');
  }

  if (element.id === 'prohibited')
  {
    document.querySelector('.tab-tracking-title-active').classList.remove('tab-tracking-title-active');
    element.classList.add('tab-tracking-title-active');
    document.getElementById('prohibited-goods').classList.remove('hidden');
    document.getElementById('tariff').classList.add('hidden');
    document.getElementById('track').classList.add('hidden');
    document.getElementById('office-point').classList.add('hidden');
    document.getElementById('price-list').classList.add('hidden');
  }
}