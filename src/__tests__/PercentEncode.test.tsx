import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('データ”アイウエオ”が入力されている', () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<PercentEncode />);
  });
  afterEach(() => {
    renderResult.unmount();
  });
  test('正しい変換結果が表示されている', () => {
    const { getByTestId } = renderResult;
    userEvent.type(getByTestId('input-data'), 'アイウエオ');
    expect(getByTestId('input-data')).toHaveValue('アイウエオ');
    expect(getByTestId('output-data')).toHaveValue('%E3%82%A2%E3%82%A4%E3%82%A6%E3%82%A8%E3%82%AA');
  });
  test('クリア押下で入力値がクリアされる', () => {
    const { getByRole, getByTestId } = renderResult;
    const inputData = getByTestId('input-data');
    const outputData = getByTestId('output-data');
    const button = getByRole('button', { name: 'クリア' });
    userEvent.type(inputData, 'アイウエオ');
    expect(inputData).toHaveValue();
    expect(outputData).toHaveValue();
    userEvent.click(button);
    expect(inputData).not.toHaveValue();
    expect(outputData).not.toHaveValue();
  });

  test('バックスペースで一文字削除した後、データが変換結果に動的に反映される', () => {
    const { getByTestId } = renderResult;
    const inputData = getByTestId('input-data');
    const outputData = getByTestId('output-data');
    userEvent.type(inputData, 'アイウエオ');
    expect(inputData).toHaveValue('アイウエオ');
    expect(outputData).toHaveValue('%E3%82%A2%E3%82%A4%E3%82%A6%E3%82%A8%E3%82%AA');
    userEvent.type(inputData, '{backspace}');
    expect(inputData).toHaveValue('アイウエ');
    expect(outputData).toHaveValue('%E3%82%A2%E3%82%A4%E3%82%A6%E3%82%A8');
  });
});
