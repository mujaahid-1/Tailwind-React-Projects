const cartButtonStyle = {
  width: "32px",
  height: "32px",
};

function ProductList({ products }) {
  return (
    <div className="grid xl:grid-cols-6  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-6 p-3 ">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-300 rounded-xl p-2 flex flex-col gap-8 cursor-pointer
             transition-transform duration-300 hover:scale-105 hover:shadow-md"
        >
          <img src={product.images[0]} alt={product.title} />
          <div>
            <p className="text-xl text-olive-950 min-h-[56px]">
              {product.title}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-zinc-800 text-2xl mt-2">${product.price}</p>

              <button className="hover:cursor-pointer">
                <svg
                  style={cartButtonStyle}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 hover:stroke-slate-950"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
