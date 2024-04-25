export const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('텍스트가 클립보드에 복사되었습니다:', text);
    })
    .catch((err) => {
      console.error('클립보드 복사 중 오류 발생:', err);
    });
};
