export const offerAccordions = () => {
  const acPanels = document.querySelectorAll('.accordion__panel');
  const openPanels = document.querySelectorAll('.panel__open');

  for (let acPanel of acPanels) {
    acPanel.addEventListener('click', function () {
      acPanel.classList.toggle('active');
      openPanels.forEach(elem => {
        elem.classList.toggle('active');
      });
    });
  }
  ;
};



