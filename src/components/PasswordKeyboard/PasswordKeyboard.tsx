import React, { useState } from 'react';

const PasswordKeyboard: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const maxLength = 4;

  const handleButtonClick = (digit: string) => {
    if (password.length < maxLength) {
      setPassword(password + digit);
    }
  };

  const handleBackspace = () => {
    setPassword(password.slice(0, -1));
  };

  const handleSubmit = () => {
    alert(`Пароль: ${password}`);
  };

  return (
    <div className="container text-center">

      <div className="mb-3">
        <input
          type="password"
          className="form-control text-center"
          value={password}
          readOnly
          placeholder="Введите пароль"
        />
      </div>

      <div className="row mb-3">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
          <div className="col-4 mb-2" key={digit}>
            <button
              className="btn btn-success btn-block"
              onClick={() => handleButtonClick(digit)}
            >
              {digit}
            </button>
          </div>
        ))}
        <div className="col-4 mb-2">
          <button className="btn btn-danger btn-block" onClick={handleSubmit}>
            E
          </button>
        </div>
        <div className="col-4 mb-2">
          <button
            className="btn btn-success btn-block"
            onClick={() => handleButtonClick('0')}
          >
            0
          </button>
        </div>
        <div className="col-4 mb-2">
          <button className="btn btn-warning btn-block" onClick={handleBackspace}>
            ⌫
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordKeyboard;