import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from 'component/Button';

describe('初期状態', () => {
  test('変換ボタンが非活性状態', () => {
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
});
