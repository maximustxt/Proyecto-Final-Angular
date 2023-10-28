const ObtenerLocalStorageAdmin = () => {
  const adminObtenido = localStorage.getItem('Admin');

  if (adminObtenido) {
    return JSON.parse(adminObtenido);
  } else {
    return 'No se encontro el admin';
  }
};

export default ObtenerLocalStorageAdmin;
