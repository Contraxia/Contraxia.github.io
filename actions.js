function randomPage() {
    let auxS = window.location.href;
    let str = auxS.substring(0, auxS.length-6);
    window.location.href = `${1 + Math.floor(Math.random() * 40)}.html`; 
  }

