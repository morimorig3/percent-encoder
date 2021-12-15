import { useState } from 'react';
import percentEncode from 'functions';

type Props = [string, string, () => void, (event: React.ChangeEvent<HTMLTextAreaElement>) => void];

const useInputTextArea = (): Props => {
  const [value, setValue] = useState('');
  const [encodedValue, setEncodedValue] = useState(value);
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    setEncodedValue(percentEncode(event.target.value));
  };
  const clearValue = () => {
    setValue('');
    setEncodedValue('');
  };

  return [value, encodedValue, clearValue, handleOnChange];
};

export default useInputTextArea;
