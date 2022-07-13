import webpack from "webpack-stream"

export const js = () => {
    return app.gulp.src(app.path.src.js, {sourceMap: app.isDev})
        .pipe(app.plugins.plumber())
        .pipe(webpack({
            mode: app.isDev ? "production" : "development",
            output:{
                filename: "app.min.js"
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream())
}

