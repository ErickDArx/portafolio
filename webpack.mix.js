const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js(
    'resources/js/app.js', 'public/js').vue()
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [
        require('postcss-import'),
        require('@tailwindcss/jit'),
        require('autoprefixer'),
        
        ],
    });

mix.disableNotifications();