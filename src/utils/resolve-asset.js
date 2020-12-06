export function resolveAsset(path) {
  try {
    return require(`@/assets/${path}`);
  } catch (e) {
    return require(`@/assets/img/users/default-user.png`);
  }
}