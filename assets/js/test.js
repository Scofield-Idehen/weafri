
function showOverBar() {
    const overBar = document.getElementById('overBar');
    if (overBar) {
      overBar.classList.add('active'); // Add the 'active' class to the element
    } else {
      console.error('Element with class "OverBar" not found');
    }
  }