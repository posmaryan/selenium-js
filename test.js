const { Builder, By, Key, until } = require('selenium-webdriver');

async function example() {
  // open Chrome
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://google.com');
    await driver.findElement(By.name('q')).sendKeys('Selenium JavaScript', Key.RETURN);

    await driver.wait(until.titleContains('Selenium'), 3000);
  } finally {
    await driver.quit();
  }
}

example();

