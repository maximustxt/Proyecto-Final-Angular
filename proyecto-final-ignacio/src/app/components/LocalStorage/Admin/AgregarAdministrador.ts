const AgregarAdministrador = (estadoUser: string) => {
  localStorage.setItem('Usuario', estadoUser);
};

export default AgregarAdministrador;
