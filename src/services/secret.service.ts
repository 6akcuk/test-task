export class SecretService {
  static fetch(content: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(content);
      }, 2000);
    });
  }
}
