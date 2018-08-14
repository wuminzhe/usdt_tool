const OmniClient = require('./OmniClient.js').OmniClient;

const rpc = {
  host: '13.209.75.234',
  port: 8332,
  user: 'buleusdtrpc',
  pass: 'U2FsdGVkX18NO+Us2zUKb1TEVuLEmp8QJRbuETMVgYW64LfKke57U+vptAN3zzSn',
}
const client = new OmniClient(rpc);

(async function(){
  const address = '1KT9JtXZnXcMmZ9UGZCVZVdDw6qMsqLLkY'
  const omniBalance = (await client.omniGetBalance(address, 31)).balance;

  console.log(omniBalance)
})();
