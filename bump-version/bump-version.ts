import { executeCommand } from './execute-command';
import { changeVersionText } from './change-version-text';

const versionArg = process.argv.slice(-1)[0];

export const bumpVersion = async() => {
  const version = await <any>executeCommand(`npm version ${versionArg} -f --no-git-tag-version`);
  await changeVersionText(version.output);
  console.warn('Version bumped!');
};
