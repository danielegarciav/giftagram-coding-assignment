import { existsSync, readFileSync, writeFileSync } from 'fs';

/**
 * The `swiper` dependency uses an `exports` property in its package.json,
 * which aliases import paths in code to different paths in the filesystem.
 *
 * When the `exports` property is present, only the names specified in it
 * can be imported by Node, bundlers and build tools.
 *
 * As of 27.5.1, Jest does not follow `exports` aliases when mocking modules.
 * For that reason, we add the real filesystem paths to the `exports` property
 * so that we can import them with no aliases and mock them properly in our tests.
 */
function fixSwiper() {
  const newExportNames = [
    'swiper.min.css',
    'react/swiper-react',
    'modules/lazy/lazy.min.css',
    'modules/navigation/navigation.min.css',
    'modules/pagination/pagination.min.css',
  ];

  // ['swiper.min.css'] => { './swiper.min.css': './swiper.min.css' }
  const newExports = Object.fromEntries(newExportNames.map(name => './' + name).map(name => [name, name]));

  const pkgJsonPath = './node_modules/swiper/package.json';
  const pkgJsonBakPath = pkgJsonPath + '.bak';

  const pkgJsonText = readFileSync(pkgJsonPath);
  if (!existsSync(pkgJsonBakPath)) {
    writeFileSync(pkgJsonBakPath, pkgJsonText);
  }

  const { exports: originalExports, ...originalPkgJson } = JSON.parse(pkgJsonText);
  const fixedExports = { ...originalExports, ...newExports };
  const fixedPkgJson = { ...originalPkgJson, exports: fixedExports };
  const fixedPkgJsonText = JSON.stringify(fixedPkgJson, null, 2);
  writeFileSync(pkgJsonPath, fixedPkgJsonText);
}

fixSwiper();
