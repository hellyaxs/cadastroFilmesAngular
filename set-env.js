const fs = require( "fs" ); 
// targetPath deve refletir onde o arquivo .env deve ir 
const targetPath = "./src/environments/environment.ts" ; 
const envConfigFile = ` 
export  const environment = { 
  production: true , 
  // o nome deve corresponder à(s) chave(s) de ambiente do Netlify
   TMDB_API_KEY: ' ${process.env.TMDB_API_KEY} ' , 
  
 }; 
`; 
fs.writeFileSync(targetPath, envConfigFile); 
console.log(`Saída gerada em ${targetPath}`);