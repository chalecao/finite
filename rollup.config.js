import buble from 'rollup-plugin-buble'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es';

export default [{
    input: 'src/finite.js',
    output: {
        file: 'bin/finite.js',
        format: 'es'
    },
    banner: '// finite state runner',
    footer: "",
    external: [],
    paths: {
        pjson: '../package.json'
    },
    plugins: [
        babel({
            "presets": [[
                "env",
                {
                    "modules": false
                }
            ]]
        }),
        buble(),
        uglify({ mangle: { toplevel: true } }, minify)
    ]
}]
