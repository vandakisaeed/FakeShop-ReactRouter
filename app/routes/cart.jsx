import { useDemoContext } from './context/Usecontext';

export function meta() {
  return [
    { title: "Fake Shop" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Cart() {
  const {
    incart,
    counter,
    sumPrice,
    handleFn
  } = useDemoContext();

  if (incart.length === 0) {
    return <div className="p-6 text-xl">Your cart is empty </div>;
  }

  return (
    <div className="p-4">
      {/* Cart summary */}
      <div className="mb-6 font-bold">
        Items: {counter} | Total: ${sumPrice}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {incart.map((product) => {
          const count = product.count || 0;

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
}
