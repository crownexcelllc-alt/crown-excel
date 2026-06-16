import { updatePageFiles } from './src/lib/cms-parser.js';

const sections = [
  {
    sectionId: 'trustedpartner',
    sectionName: 'TrustedPartner',
    filePath: 'src/app/_components/Trusted Partner/TrustedPartner.js',
    fields: {
      heading: {
        type: 'text',
        value: '<a href="https://www.grabatoz.ae/" target="_blank" rel="noopener noreferrer">Trusted Partner for Tech Solutions</a>',
        originalValue: 'Trusted Partner for Tech Solutions',
        tag: 'h2',
        label: 'Heading 1'
      }
    }
  }
];

try {
  console.log('Running updatePageFiles...');
  updatePageFiles(sections);
  console.log('Done.');
} catch (err) {
  console.error('Error during updatePageFiles:', err);
}
