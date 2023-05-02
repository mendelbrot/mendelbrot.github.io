const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const HTML_PATH = '_site/resume/index.html'
const PDF_PATH = 'assets/downloads/resume.pdf'
const CSS_PATH = '_site/css/styles.css'

module.exports = async function() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // const filePath = path.resolve(HTML_PATH);
  await page.goto(`https://mendelbrot.github.io/resume`);
  // await page.goto(`file://${filePath}`);

  // // Read the CSS stylesheet
  // const cssFilePath = path.resolve(CSS_PATH);
  // const css = fs.readFileSync(cssFilePath, 'utf8');

  // Inject CSS stylesheet into the page to make the odf respect 0 margin
  // const css = `
  // @page { 
  //   margin: 0; 
  //   size: letter;
  // }`

  // await page.addStyleTag({ content: css });

  // // xhr.open('GET', '${path.resolve('_site')}' + image.src.replace(/^file\:\/\//, ''));

  // // Inject a script that converts image URLs to data URLs
  // await page.addScriptTag({
  //   content: `
  //     const images = document.querySelectorAll('img[src^="/assets"]');
  //     for (let i = 0; i < images.length; i++) {
  //       const image = images[i];
  //       console.log('image.src');
  //       const xhr = new XMLHttpRequest();
  //       xhr.onload = function() {
  //         const reader = new FileReader();
  //         reader.onloadend = function() {
  //           image.src = reader.result;
  //         };
  //         reader.readAsDataURL(xhr.response);
  //       };
  //       xhr.open('GET', 'file:///home/greg/repos/mendelbrot.github.io/_site/assets/icons/resume/slate-600/globe-web.svg');
  //       xhr.responseType = 'blob';
  //       xhr.send();
  //     }
  //   `
  // });
  
  const pdfOptions = {
    path: PDF_PATH,
    format: 'Letter',
    // printBackground: false,
    // margin: 0,
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    },
    preferCSSPageSize: true
  };
  
  await page.pdf(pdfOptions);
  
  await browser.close();
}()