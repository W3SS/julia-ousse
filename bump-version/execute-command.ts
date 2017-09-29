import { exec } from 'child_process';

export const executeCommand = (command, verbose = true) => {
  const cmdProccess = exec(command, {maxBuffer: 1024 * 500});
  let output;
  if (verbose) {
    cmdProccess.stdout.on('data', (data) => {
      output = data.toString();
      console.log('stdout: ' + data.toString());
    });
    cmdProccess.stderr.on('data', (data) => {
      console.log('stderr: ' + data.toString());
    });
  }
  return new Promise((resolve, reject) => {
    cmdProccess.on('exit', (code) => {
      resolve({code, output});
    });
  });
};
