import clear from 'rollup-plugin-clear';
import cleanup from 'rollup-plugin-cleanup';
// import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
// import generatePackageJson from 'rollup-plugin-generate-package-json';
import json from '@rollup/plugin-json';
// import replace from 'rollup-plugin-replace';
// import obfuscatorPlugin from 'rollup-plugin-javascript-obfuscator';
// import * as pkgson from "../../package.json";
// import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/lib.js',
            format: 'cjs',
            strict: false
        },
        plugins: [
            clear({
            	   targets: ['dist'],
            }),
            // typescript({
            //     exclude: ['node_modules/**']
            // }),
            json({
                include: ['node_modules/**', 'src/**', 'package.json'],
            }),
            resolve(),
            commonJS({
                include: ['node_modules/**', 'src/parser.js'],
            }),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'runtime' 
            }),
            cleanup(),
            // terser({'toplevel': false}),
        ],
        external: ['core-decorators', 'util', 'net', 'crypto', 'tls', 'dns', 'events', 'domain'],
        treeshake: false
    }
];

