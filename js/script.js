function cambiar(nombre) {
  var secciones = document.getElementsByClassName('seccion');
  var i = 0;
  while (i < secciones.length) {
    secciones[i].style.display = 'none';
    i = i + 1;
  }
  var seccionObjetivo = document.getElementById(nombre);
  if (seccionObjetivo) {
    seccionObjetivo.style.display = 'block';
    window.scrollTo(0, 0);
  }
  var pestanas = document.getElementsByClassName('pestana');
  var j = 0;
  while (j < pestanas.length) {
    pestanas[j].className = 'pestana';
    j = j + 1;
  }
  var pestanaActiva = document.getElementById('tab-' + nombre);
  if (pestanaActiva) {
    pestanaActiva.className = 'pestana pestana-activa';
  }
}