import * as fs from 'fs';

export async function changeVersionText(version) {
  console.log(version);
  return await new Promise((resolve) => {
    fs.readFile('README.md', 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      const result = data.replace(`v${process.env.npm_package_version}`, version.trim());

      fs.writeFile('README.md', result, 'utf8', (error) => {
        if (err) {
          return console.log(err);
        }
        resolve();
      });
    });
  });
}
