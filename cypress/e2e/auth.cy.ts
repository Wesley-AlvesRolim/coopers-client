interface FillInputsParams {
  inputType?: 'login' | 'register';
  fields: {
    username: string;
    password: string;
  };
}

const fillInputs = ({
  fields: { username, password },
  inputType = 'login',
}: FillInputsParams) => {
  cy.getByTestId(`username-${inputType}-input`).type(username);
  cy.getByTestId(`password-${inputType}-input`).type(password, {
    log: false,
  });
};

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('/api/todo-data').as('todo-data');
    cy.wait('@todo-data');
    cy.getByTestId('open-login-modal').click();
  });

  it('should can login', () => {
    cy.intercept('/auth/login').as('login-req');

    cy.fixture('auth').then((auth: FillInputsParams['fields']) => {
      fillInputs({ fields: { ...auth } });
      cy.getByTestId('sign-in-button').click();
      cy.wait('@login-req')
        .its('request.body')
        .should('eql', { ...auth });
    });

    cy.get('[role="dialog"] [role="status"]').contains('You are logged in!');
  });

  it('should show error messages', () => {
    cy.intercept('/auth/login', {
      statusCode: 400,
      body: {
        statusCode: 400,
        message: 'some error message',
      },
    }).as('login-req');

    cy.fixture('auth').then((auth: FillInputsParams['fields']) => {
      fillInputs({ fields: { ...auth } });
      cy.getByTestId('sign-in-button').click();
    });

    cy.wait('@login-req');
    cy.get('[role="dialog"] [role="status"]').contains('some error message');
  });

  it('should can register', () => {
    cy.intercept('/auth/register', {
      statusCode: 201,
      body: {
        statusCode: 201,
      },
    }).as('register-req');

    cy.getByTestId('sign-up-link').click();
    cy.fixture('auth').then((auth: FillInputsParams['fields']) => {
      fillInputs({ fields: { ...auth }, inputType: 'register' });
      cy.getByTestId('sign-up-button').click();
      cy.wait('@register-req')
        .its('request.body')
        .should('eql', { ...auth });
    });

    cy.get('[role="dialog"] [role="status"]').contains('Account created!');
  });
});
