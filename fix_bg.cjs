const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace bg-white or bg-slate-50 or gradient classes ONLY in <section> tags
  content = content.replace(/(<section[^>]*?className="[^"]*?)(bg-white|bg-slate-50|bg-gradient-to-b from-slate-50 to-white)\b/g, '$1bg-transparent');

  fs.writeFileSync(filePath, content);
});

// Fix App.tsx to apply the master gradient
const appPath = path.join(__dirname, 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');
appContent = appContent.replace(
  '<div className="min-h-screen bg-slate-50 text-slate-900">',
  '<div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 text-slate-900 relative">\n      <div className="absolute top-0 left-0 w-full h-[150vh] bg-blue-400/10 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/2 pointer-events-none fixed"></div>\n      <div className="absolute bottom-0 right-0 w-full h-[150vh] bg-orange-400/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none fixed"></div>'
);
fs.writeFileSync(appPath, appContent);

// Fix Hero.tsx to remove its hardcoded gradient so it inherits from App.tsx
const heroPath = path.join(dir, 'Hero.tsx');
let heroContent = fs.readFileSync(heroPath, 'utf8');
heroContent = heroContent.replace(
  '<div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">',
  '<div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">'
);
// Remove the explicit ambient glows from Hero since they are now global
heroContent = heroContent.replace(
  /\{\/\* Premium Ambient Background Glows \*\/\}[\s\S]*?<div className="max-w-7xl/m,
  '<div className="max-w-7xl'
);
fs.writeFileSync(heroPath, heroContent);

console.log('Backgrounds unified!');
