import swal from "sweetalert";
export const loadingLoginAlert = () => {
  swal({
    title: "Agurde un momento...",
    text: "Estamos iniciando su sesion.",
    icon: "info",
    buttons: [false],
    closeOnClickOutside: false,
    closeOnEsc: false,
    timer: 2000,
  });
};
export const successLoginAlert = (navigate) => {
  swal({
    title: "Bienvenido",
    text: "Inicio de sesión exitoso",
    icon: "success",
    buttons: [false],
    timer: 2000,
  }).then(() => {
    navigate();
  });
};
export const errorLoginAlert = () => {
  swal({
    title: "Error",
    text: "Usuario o contraseña incorrectos",
    icon: "error",
    buttons: [false],
    timer: 2000,
  });
};
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
