import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

function getThemeFromLocalStorage() {
  return localStorage.getItem("theme") || "light";
}

function Navbar() {
  const [mode, setMode] = useState(getThemeFromLocalStorage);
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);
  const ChangeMode = () => {
    setMode((prev) => {
      return prev == "light" ? "dark" : "light";
    });
  };
  return (
    <div className="bg-gray-200 mb-10">
      <div className="align-element  flex-col gap-8 py-5 text-dark-blue flex  sm:flex-row">
        <div className="flex items-center  justify-between gap-5  mr-auto">
          <Link to={"/"} className="text-2xl font-bold  ">
            Movies of Hollywood
          </Link>
          <span className="cursor-pointer text-2xl" onClick={ChangeMode}>
            {mode == "light" ? <FaMoon /> : <FaSun />}
          </span>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-[250px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
