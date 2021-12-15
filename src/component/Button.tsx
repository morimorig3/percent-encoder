import { VFC, ReactNode } from 'react';

type Props = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
};

const Button: VFC<Props> = ({ children = 'OK', onClick = () => undefined, className = '' }) => (
  <button
    className={`border-2 transition-colors font-bold py-2 px-4 rounded ${className}`}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default Button;
