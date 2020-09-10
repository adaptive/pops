import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "esm",
      plugins: [terser()]
    }
  ]
};
