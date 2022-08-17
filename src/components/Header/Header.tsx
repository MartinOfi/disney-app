import { Dropdown, Menu, Space } from "antd";
import { Link } from "react-router-dom";
import { HeaderProps } from "./stories";
import { NavStyled } from "./styles";
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
    <NavStyled>
      <Link to={"/"}>
        <img src={"../logo.png"} alt="logo" />
      </Link>
      {userName ? (
        <Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <button className="btn bg-secondary border-0">
                <p>{userName}</p>
              </button>
            </Space>
          </a>
        </Dropdown>
      ) : (
        <Link to={"/login"}>
          <p className=" mb-0">INICIAR SESION</p>
        </Link>
      )}
    </NavStyled>
  );
};
