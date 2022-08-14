import swal from "sweetalert";
export const loadingRegisterAlert = () => {
  swal({
    title: "Registrando",
    text: "Espere un momento",
    icon: "info",
    buttons: [false],
  });
};

export const errorRegisterAlert = () => {
  swal({
    title: "Error",
    text: "No se pudo registrar",
    icon: "error",
    buttons: [false],
    timer: 2000,
  });
};
export const successRegisterAlert = (navigation) => {
  swal({
    title: "Registro Exitoso",
    text: "Ahora puedes iniciar sesion",
    icon: "success",
    buttons: [false],
    timer: 2000,
  }).then(() => {
    navigation();
  });
};
