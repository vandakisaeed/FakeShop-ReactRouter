import { index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/Approot.jsx", [
    index("routes/home.jsx"),
    route("/about", "routes/about.jsx"),
    route("/contact", "routes/contact.jsx"),
    route("/cart", "routes/cart.jsx"),
    route("/checkout", "routes/checkout.jsx"),
    route("/profile", "routes/profile.jsx"),
    route("/tanks", "routes/tanks.jsx"),
  ]),
];
