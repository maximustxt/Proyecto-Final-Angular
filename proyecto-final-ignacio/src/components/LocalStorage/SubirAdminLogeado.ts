const SubirAdminLogeado = (Admin: {
  id: string;
  nombre: string;
  email: string;
}) => {
  localStorage.setItem('Admin', JSON.stringify(Admin));
};

export default SubirAdminLogeado;
