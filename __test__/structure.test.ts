import fs from 'fs';
import path from 'path';

describe('Folder structure is completed', () => {
  it('The proper folder scrtructure exists', (done) => {
    try {
      if (!fs.existsSync(path.join(process.cwd(), 'src/config'))) {
        throw new Error('The config folder does not exist.');
      }
      done();
    } catch (error: any) {
      done(new Error(error.message));
    }
  });
});
