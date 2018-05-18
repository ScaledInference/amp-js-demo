function geoLocation() {
  const countries = ['United States', 'Great Britain', 'Russia', 'Ukraine', 'Israel', 'India', 'China', 'Turkey'];
  const regions = {
    'United States': ['Arizona', 'California', 'Idaho', 'Oregon', 'Utah', 'Washington'],
    'Great Britain': ['England', 'Northern Ireland', 'Scotland', 'Wales'],
    'Russia': ['Adygea', 'Altai Republic', 'Bashkortostan', 'Buryatia', 'Dagestan'],
    'Ukraine': ['Autonomous Republic of Crimea','Cherkasy Region', 'Kharkiv Region', 'Kyiv Region', 'Sumy Region'],
    'Israel': ['Jerusalem District', 'Northern District', 'Haifa District', 'Tel Aviv District', 'Judea and Samaria'],
    'India': ['Ajmer-Merwara', 'Assam', 'Baluchistan', 'Bengal', 'Bihar', 'Bombay'],
    'China': ['Beijing Municipality', 'Tianjin Municipality', 'Jilin Province', 'Shanghai Municipality', 'Jiangsu Province'],
    'Turkey': ['Adana', 'Ankara', 'Balıkesir', 'Bursa', 'Edirne', 'Istanbul', 'Ordu', 'Batman']
  };

  const country = countries[Math.floor(Math.random() * countries.length)];
  const region = regions[country][Math.floor(Math.random() * Object.keys(regions).length)];

  return { country, region };
}