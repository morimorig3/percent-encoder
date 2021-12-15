import percentEncode from 'functions';

test('正常に変換ができる', () => {
  const target = 'アイウエ\nオ';
  const expectResult = '%E3%82%A2%E3%82%A4%E3%82%A6%E3%82%A8%0A%E3%82%AA';
  expect(percentEncode(target)).toBe(expectResult);
});
