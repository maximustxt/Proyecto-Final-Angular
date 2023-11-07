const SubirAdminLogeado = (Verificacion: string) => {
  localStorage.setItem('Admin', JSON.stringify(Verificacion));
};

export default SubirAdminLogeado;
