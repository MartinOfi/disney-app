export const Login = () => {
  return (
    <div>
      <form>
        <h1>Inicia sesión con tu correo</h1>
        <input
          type="text"
          name="email"
          id=""
          placeholder="Correo electrónico"
        />
        <br />
        <button>CONTINUAR</button>
        <p>
          ¿Primera vez en la WikiTincho? <a href="/register">Registrate</a>
        </p>
      </form>
    </div>
  );
};
