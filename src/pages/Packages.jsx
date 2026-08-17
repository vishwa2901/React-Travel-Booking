import { NavLink, Outlet, useSearchParams } from "react-router-dom";

function Packages() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  function handleSearch(event) {
    const value = event.target.value;

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  }

  return (
    <section className="section">
      <div className="section-title">
        <h1>Travel Packages</h1>
        <p>Find the perfect package for your next journey.</p>
      </div>

      <div className="package-tools">
        <input
          type="text"
          placeholder="Search packages..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="category-nav">
        <NavLink to="/packages/all">All</NavLink>

        <NavLink to="/packages/domestic">
          Domestic
        </NavLink>

        <NavLink to="/packages/international">
          International
        </NavLink>
      </div>

      <Outlet />
    </section>
  );
}

export default Packages;