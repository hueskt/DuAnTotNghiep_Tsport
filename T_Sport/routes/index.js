const productRouter = require("./product");
const homeRouter = require("./home");
const userRouter = require("./user");
const checkOutRouter = require("./checkOut");
const checkOutRouter2 = require("./checkOut2");

const chatBotRouter = require("./chatbot");

function route(app) {

  app.use("/home", homeRouter);

  app.use("/shop-grid", function (req, res) {
    res.render("shop-grid/");
  });
  app.use("/", userRouter);

  app.get("/shop-detail", function (req, res) {
    res.render("shop-detail/");
  });

  app.get("/shoping-cart", function (req, res) {
    res.render("shoping-cart/shoping-cart");
  });

  app.get("/blog", function (req, res) {
    res.render("blog/blog");
  });

  app.get("/blog-details", function (req, res) {
    res.render("blog-details/blog-details");
  });

  app.get("/contact", function (req, res) {
    res.render("contact/contact");
  });

  app.use("/checkout", checkOutRouter);



  //app.use("/webhook",chatBotRouter);
}

module.exports = route;
