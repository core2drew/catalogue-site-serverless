import { NavLink, useNavigate } from 'react-router-dom';
import styles from './header.module.scss';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Menu } from 'primereact/menu';
import { useEffect, useRef, useState } from 'react';

/* eslint-disable-next-line */
export interface HeaderProps {
  handleOnClickSearch?: () => void;
}

export function Header({ handleOnClickSearch }: HeaderProps) {
  const menuLeft = useRef<Menu>(null);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(
      'https://2i9eofhh2a.execute-api.ap-southeast-1.amazonaws.com/products/categories'
    )
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  const items = categories.map((category: string) => ({
    label: category,
    command: () => {
      navigate(`/products/${category}`);
    },
  }));

  return (
    <div className="p-5 bg-blue-500 flex">
      <p className="text-white text-xl">Catalogue.au</p>

      <div className="flex ml-20 gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            [isActive ? styles['active'] : ''].join(' ')
          }
        >
          Home
        </NavLink>
        <Menu
          pt={{
            menuitem: {
              className: 'capitalize',
            },
          }}
          model={items}
          popup
          ref={menuLeft}
          id="popup_menu_left"
        />
        <a
          className="mr-2 cursor-pointer"
          onClick={(event) => menuLeft.current?.toggle(event)}
          aria-controls="popup_menu_left"
          aria-haspopup
        >
          Category
        </a>
      </div>
      <div className="ml-auto">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </span>
        <Button
          className="ml-5"
          label="search"
          onClick={() => {
            navigate(`/products?searchText=${searchText}`);
          }}
        />
      </div>
    </div>
  );
}

export default Header;
