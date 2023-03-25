const acPanels = document.querySelectorAll('.accordion__panel');
console.log(acPanels)
for (let acPanel of acPanels) {
  acPanel.addEventListener('click', function () {
    acPanel.classList.toggle('active');
  });
};
