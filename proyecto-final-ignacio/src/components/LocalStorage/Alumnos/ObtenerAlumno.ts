const ObtenerAlumno = () => {
  const res = localStorage.getItem('Alumno');

  if (res) {
    return JSON.parse(res);
  } else {
    return '';
  }
};

export default ObtenerAlumno;
