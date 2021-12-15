import { VFC, ReactNode } from 'react';

type Props = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  isClickable?: boolean;
};

const Button: VFC<Props> = ({ children = 'OK', onClick = () => undefined, className = '', isClickable = false }) => (
  <button
    className={`border-2 transition-colors font-bold py-2 px-4 rounded ${className} ${
      isClickable ? '' : 'pointer-events-none opacity-50'
    }`}
    onClick={isClickable ? onClick : (e) => e.preventDefault()}
    type="button"
  >
    {children}
  </button>
);

export default Button;
