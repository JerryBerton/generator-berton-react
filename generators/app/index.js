'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  prompting() {
    // Have Yeoman greet the user.
    let greetWord = 'Welcome to Use ' + chalk.red.bold('generator-berton-react') + ' ' +
      chalk.blue('JerryBerton ');
    this.log(yosay(greetWord));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message : 'Your project name',
        default: 'generator-berton-react'
      },
      {
        type: 'input',
        name: 'version',
        message : 'Your project version',
        default: '0.0.1'
      },
      {
        type: 'input',
        name: 'description',
        message : 'Your project description',
        default: 'this is react project'
      },
      {
        type: 'input',
        name: 'author',
        message : 'Your project author',
        default: 'JerryBerton'
      },
      {
        type: 'list',
        name: 'option',
        message: 'The state of data management framework',
        choices: ['redux', 'mobx']
      }
    ];
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }
  writing() {
    const option = this.props.option;
    this.fs.copyTpl(
      this.templatePath(`${option}/package.json`),
      this.destinationPath('package.json'),
      {
        name: this.props.name,
        version: this.props.version,
        description: this.props.description,
        author: this.props.author,
      }
    );
    this.fs.copy(
      this.templatePath('public/webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('public/.babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath(`${option}/src`),
      this.destinationPath('src')
    );
    this.fs.copy(
      this.templatePath('public/index.html'),
      this.destinationPath('src/index.html')
    )
  }
  install() {
    this.installDependencies();
  }
};
