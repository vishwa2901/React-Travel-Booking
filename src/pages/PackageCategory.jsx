import { useSearchParams } from "react-router-dom";
import packages from "../data/packages";
import PackageCard from "../components/PackageCard";

function PackageCategory({ type }) {
  const [searchParams] = useSearchParams();

  const search = (
    searchParams.get("search") || ""
  ).toLowerCase();

  let filteredPackages = packages;

  if (type !== "all") {
    filteredPackages = filteredPackages.filter(
      (item) => item.category === type
    );
  }

  if (search) {
    filteredPackages = filteredPackages.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.location.toLowerCase().includes(search)
    );
  }

  return (
    <div>
      {filteredPackages.length === 0 ? (
        <div className="message">
          No packages found.
        </div>
      ) : (
        <div className="package-grid">
          {filteredPackages.map((item) => (
            <PackageCard
              key={item.id}
              packageItem={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PackageCategory;