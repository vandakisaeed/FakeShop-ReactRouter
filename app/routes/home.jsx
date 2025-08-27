import { useDemoContext } from "./context/Usecontext";
import { useColorMode } from "./Mode";
export function meta() {
  return [
    { title: "Fake Shop" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const hydrateFallback = () => {
  return <div>loading ...</div>;
};

const Home = () => {
  // filters
  const{category,setCategory,incart,setIncart,counter,setCounter,sumPrice,setSumPrice,filteredProducts,handleFn}=useDemoContext()
  const { mode, changeMode, backgroundDark, backgroundLight } = useColorMode();
  return (
    <div className="p-4" style={{ backgroundColor: mode ? backgroundDark : backgroundLight }} >
      {/* Filter buttons */}
      <div className="flex gap-4 mb-6">
        {["all", "men's clothing", "women's clothing", "electronics", "jewelery"].map((cat) => (
          <button
            key={cat}
            className="btn btn-ghost"
            onClick={() => setCategory(cat)}
          >
            {cat === "all" ? "All" : cat}
          </button>
        ))}
      </div>

      {/* Cart summary */}
      <div className="mb-6 font-bold">
        Items: {counter} | Total: ${sumPrice}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const item = incart.find((i) => i.id === product.id);
          const count = item ? item.count : 0;

          return (
            <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
              <figure className="h-60 flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="line-clamp-2">{product.description}</p>
                <div className="card-actions justify-end">
                  {count === 0 ? (
                    <button
                      className="btn btn-primary w-full"
                      onClick={() => handleFn(product, "increase")}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex gap-3 items-center w-full justify-between">
                      <button
                        className="btn btn-outline btn-secondary"
                        onClick={() => handleFn(product, "decrease")}
                      >
                        -
                      </button>
                      <span className="font-medium">{count}</span>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleFn(product, "increase")}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
