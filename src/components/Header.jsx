import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="text-2xl bg-base-200 fixed left-0 top-0 bottom-0">
      <a className="mt-6 btn btn-primary text-2xl ml-6">IQRO Admin</a>
      <ul className="menu w-72 rounded-box text-xl gap-4 mt-5">
        <li>
          <details>
            <summary>Users</summary>
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink to="/users">Statistika</NavLink>
              </li>
              <li>
                <a>O'chirish</a>
              </li>
              <li>
                <a>Qo'shish</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Testlar</summary>
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink to="/alltest">Barcha testlar</NavLink>
              </li>
              <li>
                <NavLink to="/addtest">Test qo'shish</NavLink>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>Test natijalari</summary>
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink to="/">Barcha natijalar</NavLink>
              </li>
              <li>
                <a>Natijalar qo'shish</a>
              </li>
              <li>
                <a>Natijalarni o'chirish</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar absolute bottom-14 left-3">
        <div className="w-14 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
        <p>Ism Familiya</p>
      </div>
    </div>
  );
}

export default Header;
