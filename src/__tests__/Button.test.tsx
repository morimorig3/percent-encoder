import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from 'component/Button';

test('ボタンが非活性状態', () => {
  const onClick = jest.fn();
  const { getByRole } = render(
    <Button onClick={onClick} isClickable={false}>
      ボタン
    </Button>,
  );
  userEvent.click(getByRole('button'));
  expect(onClick).toHaveBeenCalledTimes(0);
  expect(getByRole('button')).toHaveClass('pointer-events-none');
});
test('ボタンが活性状態の時にクリックでコールバックが呼ばれる', () => {
  const onClick = jest.fn();
  const { getByRole } = render(
    <Button onClick={onClick} isClickable>
      ボタン
    </Button>,
  );
  userEvent.click(getByRole('button'));
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(getByRole('button')).not.toHaveClass('pointer-events-none');
});
