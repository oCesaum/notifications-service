import { Content } from './content';

describe('Notification content', () => {
  it('shold be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('shold not be able to create a notification content with less then 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('shold not be able to create a notification content with more then 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
