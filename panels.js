// panels.js

function closeWindow() {
    document.getElementById('myWindow').style.display = 'none';
  }
  
  function makeDraggable(element, handle) {
    let offsetX = 0, offsetY = 0, isDragging = false;
  
    handle.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - element.offsetLeft;
      offsetY = e.clientY - element.offsetTop;
      document.body.classList.add('noselect');
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', stopDrag);
    });
  
    function drag(e) {
      if (!isDragging) return;
      element.style.position = 'absolute';
      element.style.left = `${e.clientX - offsetX}px`;
      element.style.top = `${e.clientY - offsetY}px`;
    }
  
    function stopDrag() {
      isDragging = false;
      document.body.classList.remove('noselect');
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', stopDrag);
    }
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const windowEl = document.getElementById('myWindow');
    const titlebar = windowEl.querySelector('.titlebar');
    const resizeHandle = windowEl.querySelector('.resize-handle');

    makeDraggable(windowEl, titlebar);
    makeResizable(windowEl, resizeHandle);
  });
  function makeResizable(element, handle) {
    let isResizing = false;
  
    handle.addEventListener('mousedown', (e) => {
      isResizing = true;
      document.body.classList.add('noselect');
      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', stopResize);
      e.preventDefault();
    });
  
    function resize(e) {
      if (!isResizing) return;
      const newWidth = e.clientX - element.offsetLeft;
      const newHeight = e.clientY - element.offsetTop;
      element.style.width = `${Math.max(newWidth, 150)}px`;
      element.style.height = `${Math.max(newHeight, 100)}px`;
    }
  
    function stopResize() {
      isResizing = false;
      document.body.classList.remove('noselect');
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResize);
    }
  }
    