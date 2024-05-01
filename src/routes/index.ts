import { Router } from 'express';
import { readdirSync } from 'fs';

// Dynamic import of all routes contained in the files of the routes directory

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: String) => {
  return fileName.replace('.ts', '');
};

readdirSync(PATH_ROUTER).forEach((fileName: String) => {
  const cleanedName = cleanFileName(fileName);

  if (cleanedName !== 'index') {
    import(`./${cleanedName}`).then((routerModule) => {
      router.use(routerModule.router);
    });
  }
});

export { router };
