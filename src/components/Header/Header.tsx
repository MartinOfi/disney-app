import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Menu, Space } from "antd";
import { Link } from "react-router-dom";
import { HeaderProps } from "./stories";
import { InputStyled } from "./styles";

export const Header = ({ userName, handleLogout }: HeaderProps) => {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <p className="mb-0" onClick={handleLogout} role="button">
              Cerrar Sesion
            </p>
          ),
        },
      ]}
    />
  );
  return (
    <nav className="text-white d-flex justify-content-between align-items-center p-3">
      <img src={"../logo.png"} alt="" width={150} height={80} />

      <div className="ms-4 d-flex align-items-center ">
        <FontAwesomeIcon icon={faSearch} />
        <InputStyled
          id="inputSearch"
          className="ps-1 ms-2 form-control bg-secondary"
          placeholder="BÚSQUEDA"
          minLength={3}
        />
      </div>
      {userName ? (
        <Dropdown overlay={menu}>
          <a
            className="text-decoration-none text-white text-capitalize"
            onClick={(e) => e.preventDefault()}
          >
            <Space>
              <button className="btn bg-secondary text-white border-0">
                <p className="mb-0 text-capitalize">{userName}</p>
              </button>
            </Space>
          </a>
        </Dropdown>
      ) : (
        <Link
          to={"/login"}
          className="text-decoration-none text-white text-capitalize"
        >
          <p className=" mb-0">INICIAR SESION</p>
        </Link>
      )}
    </nav>
  );
};
