const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.scripts([
    'resources/layouts/sb-admin/vendor/jquery/jquery.min.js',
    'resources/layouts/sb-admin/vendor/bootstrap/js/bootstrap.bundle.min.js',
    'resources/layouts/sb-admin/vendor/jquery-easing/jquery.easing.min.js',
    'resources/layouts/sb-admin/vendor/chart.js/Chart.min.js',
    'resources/layouts/sb-admin/vendor/datatables/jquery.dataTables.js',
    'resources/layouts/sb-admin/vendor/datatables/dataTables.bootstrap4.js',
    'resources/layouts/sb-admin/js/sb-admin.min.js',
    'resources/layouts/sb-admin/js/demo/datatables-demo.js',
    'resources/layouts/sb-admin/js/demo/chart-area-demo.js'
],'public/js/master.js')
    .styles([
    'resources/layouts/sb-admin/vendor/fontawesome-free/css/all.min.css',
    'resources/layouts/sb-admin/vendor/datatables/dataTables.bootstrap4.css',
    'resources/layouts/sb-admin/css/sb-admin.css',
], 'public/css/master.css');
