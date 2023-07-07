function Premier(nombre) {
    if (nombre < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
      if (nombre % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function NombreValide(nombre) {
    return !isNaN(nombre) && nombre >= 0 && Number.isInteger(Number(nombre));
  }
  
  const nombre = 19;
  
  if (!NombreValide(nombre)) {
    console.log("-1");
  } else {
       let premier = nombre + 1;
    while (!Premier(premier)) {
      premier++;
    }
    console.log(premier);
}