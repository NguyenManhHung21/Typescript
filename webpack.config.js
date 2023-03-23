const path = require("path");

module.exports = {
  entry: "./src/index.ts", // chỉ định file chạy đầu tiên
  mode: "development", // chuyển cách trình bày ở bundle.js thành dạng dev để sau này fixbug dễ dàng hơn
  watch: true, //khi chạy webpack trên 1 file nào thì khi có lệnh này, webpack.config sẽ build lại ở bundle.js cho mình
  module: {
    rules: [
      {
        use: "ts-loader",
        exclude: /node_modules/, // bỏ qua những file .ts ở trong node_modules
      },
    ],
  },
  resolve: {
    extensions: [".ts"], // tìm những file .ts để build sang .js
  },
  output: {
    filename: "bundle.js", //tên file sẽ build thành
    path: path.resolve(__dirname, "dist"), //nơi build cuối cùng của js
  },
};
