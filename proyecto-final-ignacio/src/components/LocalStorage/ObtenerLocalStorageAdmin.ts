const ObtenerLocalStorageAdmin = () => {
  const adminObtenido = localStorage.getItem('Admin');

  if (adminObtenido) {
    return JSON.parse(adminObtenido);
  }
};

export default ObtenerLocalStorageAdmin;
