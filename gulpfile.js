// always load Gulp - we need to have a global Gulp AND a local Gulp;
var gulp = require("gulp");
var browserSync = require("browser-sync").create();


// lets keep our development scss in a separate folder from our production css
// with these 'globbing' paths
var scssPath = "./styles/dev/**/*.scss";
var cssPath = "./styles/css/"



function reloadBrowserSync(done) {
    browserSync.reload();
    done();
}


function watching() {
    console.log("starting watch tasks now");

    browserSync.init({
        server: "./",
        port: 4000
    })

    // multiple watch tasks are fine...

    // watch any html file on the root level using the gulp method called 'watch'
    gulp.watch("*.html", reloadBrowserSync);
    // watch all scss in the scssPath variable


}

// lets make our watching functions public using exports
///// READY TO GO ///////////

exports.watch = watching;
// now run as "gulp watch" in the terminal

// OR, even better

// lets rebuild the scss from scratch just before we start "watching". 
// So put multiple tasks into an array and use the built-in Gulp parallel method called 'parallel'

// now run as "gulp sass_and_watch" in the terminal