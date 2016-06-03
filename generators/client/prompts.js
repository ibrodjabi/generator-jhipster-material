'use strict';

module.exports = {
    askForModuleName,
    askForClientSideOpts,
    askFori18n
};

function askForModuleName() {

    if (this.baseName) return;

    this.jhipsterFunc.askModuleName(this);
}

function askForClientSideOpts() {
    if (this.existingProject) return;

    var done = this.async();
    var getNumberedQuestion = this.jhipsterFunc.getNumberedQuestion.bind(this);
    var prompts = [
        {
            type: 'confirm',
            name: 'useSass',
            message: function (response) {
                return getNumberedQuestion('Would you like to use the LibSass stylesheet preprocessor for your CSS?', true);
            },
            default: false
        }
    ];
    this.prompt(prompts, function (props) {
        this.useSass = props.useSass;
        done();
    }.bind(this));
}

function askFori18n() {
    if (this.existingProject || this.configOptions.skipI18nQuestion) return;

    this.jhipsterFunc.aski18n(this);
}
