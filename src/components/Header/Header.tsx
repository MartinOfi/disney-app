import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Menu, Space, Button } from "antd";
import { Link } from "react-router-dom";

export const Header = ({ userName, handleLogout }) => {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <p className="mb-0">Cerrar Sesion</p>,
        },
      ]}
    />
  );
  return (
    <nav className="text-white d-flex justify-content-between align-items-center p-3">
      <img
        src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg"
        alt=""
        width={80}
      />

      <div className="ms-4 d-flex align-items-center ">
        <FontAwesomeIcon icon={faSearch} />
        <input
          id="inputSearch"
          className="mb-0 ps-1 ms-2 form-control bg-secondary text-white border-0"
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
              <Button className="bg-secondary text-white border-0">
                {userName}
              </Button>
            </Space>
          </a>
        </Dropdown>
      ) : (
        <Link to={"/login"}>
          <p>INICIAR SESION</p>
        </Link>
      )}
    </nav>
  );
};
/*  <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={handleShowDropdown}
            >
              {userName}
            </button>
            <ul
              className={`dropdown-menu list-group`}
              aria-labelledby="dropdownMenuButton1"
            >
              <li onClick={handleLogout}>
                <a className="dropdown-item text-danger" href="#">
                  Cerrar Sesion
                </a>
              </li>
            </ul>
          </div>  */
{
  /* <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu-show mb-0">
            <li>
              <a className="dropdown-item text-danger" href="#">
                Cerrar Sesion
              </a>
            </li>
          </ul>
        </div> */
}
