var Compile = require('../base-compiler');

function compileXC(info, env) {
    var compiler = new Compile(info, env);
    compiler.optionsForFilter = function (filters, outputFilename, userOptions) {
        return ['-g', '-o', this.filename(outputFilename)];
    };
    return compiler.initialise();
}

module.exports = compileXC;
