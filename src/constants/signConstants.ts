export const SIGN_IN = 'sign_in';
export const SIGN_UP = 'sign_up';
export const EMAIL_PLACEHOLDER = '이메일을 입력해 주세요.';
export const PW_PLACEHOLDER = '비밀번호를 입력해 주세요.';
export const PW_REPEAT_PLACEHOLDER = '비밀번호를 다시 입력해 주세요.';
export const PASSWORD_EMPTY_ERROR_MESSAGE = '비밀번호를 입력해주세요.';
export const PASSWORD_MISMATCH_ERROR_MESSAGE = '비밀번호가 일치하지 않습니다.';

const EMAIL_CHECK_MESSAGE = '이메일을 확인해 주세요.';
const PASSWORD_CHECK_MESSAGE = '비밀번호를 확인해 주세요.';

const PASSWORD_ERROR_MESSAGE =
  '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';

export const EMAIL_VALIDATE = {
  required: '이메일을 입력해 주세요.',
  pattern: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
    message: '올바른 이메일 주소가 아닙니다.', // 에러 메세지
  },
};

export const PASSWORD_VALIDATE = {
  required: PASSWORD_EMPTY_ERROR_MESSAGE,
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: PASSWORD_ERROR_MESSAGE,
  },
};

export const ERROR_INPUT_STYLE = {
  border: '1px solid var(--Linkbrary-red,#FF5B56)',
};

export const EMAIL_ERROR = {
  type: 'custom',
  message: EMAIL_CHECK_MESSAGE,
};
export const PASSWORD_ERROR = {
  type: 'custom',
  message: PASSWORD_CHECK_MESSAGE,
};
