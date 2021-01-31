const pt = require('puppeteer');

module.exports = async function (options) {
  const bs = await pt.launch(),
        pg = await bs.newPage(),
        url = options.url;
    
  await pg.goto(url, {
    waitUntil: 'networkidle2'
  });

  let result = await pg.evaluate(options.callback);

  if (result && options.field === 'course') {
    await pg.waitForSelector('.page-btn.page-last');
    await pg.click('.page-btn.page-last');
    await pg.waitFor(2000);
    const res = await pg.evaluate(options.callback);
    await pg.waitFor(2000);
    for (var i = 0; i < res.length; i++) {
      await result.push(res[i]);
    }
  }

  await bs.close();

  process.send(result);

  setTimeout(() => {
    process.exit(0);
  }, 1000)
}