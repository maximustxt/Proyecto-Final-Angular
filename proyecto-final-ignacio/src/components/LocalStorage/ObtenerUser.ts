const ObtenerUser = (): string => {
  const res = localStorage.getItem('Usuario');

  if (res) {
    return res;
  } else {
    return '';
  }
};

export default ObtenerUser;
