import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import PercentEncode from 'component/PercentEncode';

describe('初期状態', () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<PercentEncode />);
  });
  afterEach(() => {
    renderResult.unmount();
  });
  test('両方のテキストボックスが空', () => {
    const { getByTestId } = renderResult;
    expect(getByTestId('input-data')).not.toHaveValue();
    expect(getByTestId('output-data')).not.toHaveValue();
  });
  test('クリアボタンが非活性状態', () => {
    const { getByRole } = renderResult;
    const button = getByRole('button', { name: 'クリア' });
    expect(button).toHaveClass('pointer-events-none');
  });
});
