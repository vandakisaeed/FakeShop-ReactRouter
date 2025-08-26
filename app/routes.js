import { index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/root.jsx", [
    index("routes/home.jsx"),
    route("/about", "routes/about.jsx"),
    route("/contact", "routes/contact.jsx"),
    route("/products", "routes/products.jsx"),
  ]),
];
