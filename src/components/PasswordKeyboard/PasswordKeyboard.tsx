import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../App/store.ts';
import { addDigit, removeLastDigit, checkPin } from '../../App/passwordSlice.ts';

const PasswordKeyboard: React.FC = () => {
  const dispatch = useDispatch();
  const { enteredPin, pinStatus, message } = useSelector((state: RootState) => state.password);

  const maxLength = 4;

  const handleButtonClick = (digit: string) => {
    if (enteredPin.length < maxLength) {
      dispatch(addDigit(digit));
    }
  };

  const handleBackspace = () => {
    dispatch(removeLastDigit());
  };

  const handleSubmit = () => {
    dispatch(checkPin());
  };

  const inputClass = pinStatus === 'correct' ? 'bg-success' : pinStatus === 'incorrect' ? 'bg-danger' : '';

  return (
    <div className="container text-center">

      <div className={`mb-3`}>
        <input
          type="text"
          className={`form-control text-center ${inputClass}`}
          value={'*'.repeat(enteredPin.length)}
          readOnly
          placeholder="Enter pin"
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
          <button className="btn btn-primary btn-block" onClick={handleSubmit}>
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
            &lt;
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p><strong>{message}</strong></p>
      </div>
    </div>
  );
};

export default PasswordKeyboard;