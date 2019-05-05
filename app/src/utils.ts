// this is not necessarily a good password generator
export function generatePassword() {
  return new Array(20)
    .join()
    .replace(/(.|$)/g, () => ((Math.random() * 36) | 0).toString(36));
}
