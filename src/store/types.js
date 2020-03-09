export default [
  'SAVE_TOKEN',
  'REMOVE_TOKEN',
  'CHANGE_LANG'
].reduce((o, key) => ({ ...o, [key]: key }), {})
