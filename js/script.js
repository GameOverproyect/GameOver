function togglePanel(id) {
  const panel = document.getElementById(id);
  
  if (!panel) return;
  
  const allPanels = document.querySelectorAll('.panel');
  allPanels.forEach(p => {
    if (p !== panel) p.style.display = 'none';
  });

  if (panel.style.display === 'block') {
    panel.style.display = 'none';
  } else {
    panel.style.display = 'block';
  }
}
