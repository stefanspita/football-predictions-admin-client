/*eslint no-process-env: "off"*/
// Rollup plugins
import babel from "rollup-plugin-babel"
import eslint from "rollup-plugin-eslint"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import replace from "rollup-plugin-replace"
import uglify from "rollup-plugin-uglify"
import postcss from "rollup-plugin-postcss"
import livereload from "rollup-plugin-livereload"
import serve from "rollup-plugin-serve"

// PostCSS plugins
import simplevars from "postcss-simple-vars"
import nested from "postcss-nested"
import cssnext from "postcss-cssnext"
import cssnano from "cssnano"

export default {
  entry: "src/main.js",
  dest: "build/main.min.js",
  format: "iife",
  sourceMap: "inline",
  plugins: [
    postcss({
      extensions: [".css"],
      plugins: [
        simplevars(),
        nested(),
        cssnext({warnForDuplicates: false}),
        cssnano(),
      ],
    }),
    commonjs({
      include: ["node_modules/**"],
      exclude: [
        "node_modules/lodash-es/**",
        "node_modules/symbol-observable/**",
      ],
      namedExports: {
        "node_modules/react/react.js": [
          "Children", "Component", "createElement",
        ],
        "node_modules/redux-logger/dist/redux-logger.js": [
          "createLogger",
        ],
      },
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    eslint({
      exclude: [
        "src/main.css",
      ],
    }),
    babel({
      exclude: "node_modules/**",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
    }),
    (process.env.NODE_ENV === "production" && uglify()),
    (process.env.NODE_ENV !== "production" && livereload({
      watch: "build",
    })),
    (process.env.NODE_ENV !== "production" && serve({
      contentBase: "",
      host: "localhost",
      port: 10001,
    })),
  ],
}
