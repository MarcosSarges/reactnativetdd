describe('Criando mensagem', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it('Usuario adicionando uma mensagem na lista', async () => {
    const msg = 'Nova mensagem';
    await element(by.id('messageText')).tap();
    await element(by.id('messageText')).typeText(msg);
    await element(by.id('sendButton')).tap();

    await expect(element(by.id('messageText'))).toHaveText('');
    await expect(element(by.label(msg))).toBeVisible();
  });
});
