const passwords = ['abc', 'abc123', 'lk*7ityaiE', 'asdfghjjkl98786', 'asdfasdhfasdhjfashjdfafsdkjflasd93847589347589'];

const validatePasswords = passwords => {
  const regex = /^[a-zA-Z0-9]{8,20}$/;
  // console.log('here', regex.test('um'));
  passwords.forEach(password => {
    regex.test(password) ? console.log(`${password} is valid`) : console.log(`${password} is invalid`);
  });
};

validatePasswords(passwords);
