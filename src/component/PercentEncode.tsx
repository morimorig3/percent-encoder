import React, { VFC, useState } from 'react';
import Button from 'component/Button';
import useEncodeValue from 'hooks/useEncodeValue';
import { TiArrowDownThick } from 'react-icons/ti';
import { AiOutlineCopy } from 'react-icons/ai';

const PercentEncode: VFC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, encodedValue, clearValue, handleOnChange] = useEncodeValue();
  const showNotice = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 1500);
  };
  const copyToClipBoard = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await navigator.clipboard.writeText(encodedValue);
    showNotice();
  };

  return (
    <>
      {value.length ? (
        <Button onClick={clearValue} isClickable className="bg-blue-400 hover:bg-blue-500 text-white">
          クリア
        </Button>
      ) : (
        <Button onClick={clearValue} isClickable={false} className="bg-blue-400 hover:bg-blue-500 text-white">
          クリア
        </Button>
      )}
      <div className="grid py-4 justify-center gap-4 grid-cols-1">
        <textarea
          className="text-sm"
          data-testid="input-data"
          onChange={handleOnChange}
          value={value}
          placeholder="ここに変換したい文字を入力"
        />
        <TiArrowDownThick size="1.5em" className="m-auto" />
        <div className="relative">
          <textarea className="text-sm w-full" data-testid="output-data" value={encodedValue} readOnly />
          <button
            onClick={value.length ? copyToClipBoard : (event) => event.preventDefault()}
            className="absolute right-1 p-1 hover:opacity-50"
            type="button"
          >
            <div
              className={`animate-fadeUp font-bold fixed top-0 left-0 grid place-items-center w-screen h-screen ${
                isVisible ? 'block' : 'hidden'
              }`}
            >
              コピーしました
            </div>
            <AiOutlineCopy size="1.5em" className=" text-gray-400" />
          </button>
        </div>
      </div>
    </>
  );
};

export default PercentEncode;
