"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`servidor iniciado en: http://localhost:${PORT}`);
});