import { render } from '@testing-library/react';

import App from '../App';

describe('Style', () => {
  it('should render CSS correctly in JSDOM', () => {
    render(<App />);
    // console.log(document.documentElement.outerHTML);
    // vanilla CSS
    // Global CSS
    // TODO: Global CSS is saved into the `.cache` folder, so we can't assert it directly within the JSDOM
    // Imported CSS
    expect(document.documentElement.outerHTML).toContain(
      '<link rel="stylesheet" href="/demo/App.css">',
    );
    expect(document.documentElement.outerHTML).toContain(
      '<link rel="stylesheet" href="/demo/assets/css/App.css">',
    );

    // styled-components
    expect(document.documentElement.outerHTML).toContain(
      '<style data-styled="active" data-styled-version="5.3.5">.dgihId{color:red;}</style>',
    );

    // emotion
    expect(document.documentElement.outerHTML).toContain(
      '<style data-emotion="css" data-s="">.css-2m18qq{color:orange;}</style>',
    );

    // CSS Modules
    // Global
    // TODO: not implemented yet
    // Import
    expect(
      document.documentElement.outerHTML.replace(/\r\n|\n|\r/g, ''),
    ).toContain(
      `<style type=\"text/css\">._cssModule_1gc0y_1 {  color: green;}</style>`,
    );

    // Sass
    // Global
    // TODO: Global SCSS is saved into the `.cache` folder, not in the JSDOM, need to find a way to test it
    // Import
    expect(document.documentElement.outerHTML)
      .toContain(`header .imported-sass {
  text-transform: uppercase;
}`);
    expect(document.documentElement.outerHTML)
      .toContain(`header .imported-sass {
  color: pink;
}</style>`);
    // import ~
    // TODO: Not implemented yet
    // loadPaths
    // TODO: Not implemented yet
  });
});
