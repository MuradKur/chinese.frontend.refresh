module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Creating new react components',
    prompts: [
      {
        type: 'list',
        name: 'input',
        message: 'Choose your component',
        choices: ['component', 'page', 'shablon'],
      },
      {
        type: 'input',
        name: 'name',
      },
    ],
    actions: function (data) {
      const actions = [];
      if (data.input === 'component') {
        actions.push({
          type: 'add', //adding file to your propject
          templateFile: 'plop-templates/functional-component.hbs',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx', //component path
        });
      } else if (data.input === 'page') {
        actions.push({
          type: 'add',
          templateFile: 'plop-templates/functional-component.hbs',
          path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
        });
      } else {
        actions.push({
          type: 'add',
          templateFile: 'plop-templates/functional-component.hbs',
          path: 'src/shablons/{{pascalCase name}}/{{pascalCase name}}.tsx',
        });
      }
      return actions;
    },
  });
};
