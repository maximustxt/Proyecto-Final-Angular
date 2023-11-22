const ObtenerAdministrador = (): string => {
  const res = localStorage.getItem('Usuario');

  if (res) {
    return res;
  } else {
    return '';
  }
};

export default ObtenerAdministrador;
