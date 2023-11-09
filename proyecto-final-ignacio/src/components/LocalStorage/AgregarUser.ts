const AgregarUser = (estadoUser: string) => {
  localStorage.setItem('Usuario', estadoUser);
};

export default AgregarUser;
