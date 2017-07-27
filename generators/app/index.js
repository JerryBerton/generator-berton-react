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
        default: 'berton-test'
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
        name: 'relay',
        message: 'The state of data management framework',
        choices: ['redux', 'mobx']
      }
    ];
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }
  writingBasic() {
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    )
  }
  writingPackage() {
    const relay = this.props.relay;
    this.fs.copyTpl(
      this.templatePath(`${relay}.json`),
      this.destinationPath('package.json'),
      {
        name: this.props.name,
        version: this.props.version,
        description: this.props.description,
        author: this.props.author,
      }
    );
  }
  writingWebpack() {
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
  }
  writingMain() {
    const relay = this.props.relay;
    this.fs.copyTpl(
      this.templatePath('src/main.js'),
      this.destinationPath('src/main.js'),
      {
        relay
      }
    );
    this.fs.copy(
      this.templatePath(`src/${relay}`),
      this.destinationPath('src')
    )
  }
  writingStyle() {
    this.fs.copy(
      this.templatePath(`src/styles/index.scss`),
      this.destinationPath('src/styles/index.scss')
    );
  }
  writing() {
    this.fs.copy(
      this.templatePath('src/index.html'),
      this.destinationPath('src/index.html')
    )
  }
  // // install() {
  // //   this.installDependencies();
  // }
};
