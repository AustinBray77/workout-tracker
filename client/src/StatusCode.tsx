enum StatusCode {
  Passwords_Do_Not_Match = 0,
  Username_Invalid = 1,
  Email_Invalid = 2,
  Success = 200,
  Connection_Error = 404,
}

export default StatusCode;

const codeToString = (code: StatusCode): string => {
  let codeStrings: string[] = new Array(200);

  codeStrings[StatusCode.Passwords_Do_Not_Match] = 'Passwords Do Not Match';
  codeStrings[StatusCode.Username_Invalid] =
    'Username is Invalid or Already Taken';
  codeStrings[StatusCode.Email_Invalid] = 'Email is Invalid or Already Taken';
  codeStrings[StatusCode.Success] = 'Success';

  return codeStrings[code];
};

export {codeToString};
