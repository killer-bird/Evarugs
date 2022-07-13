import svgSprite from "gulp-svg-sprite"
import gulpCheerio from "gulp-cheerio"
import gulpSvgmin from "gulp-svgmin"


export const svgSprive = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
        .pipe(app.plugins.plumber())
    
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    example: true
                }
            }
        }))
        .on('error', (error)=>{
            console.log(error);
        })
        .pipe(app.gulp.dest(`${app.path.build.images}`))
}