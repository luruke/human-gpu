const puppeteer = require("puppeteer");

const delay = (t) => {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
};

(async () => {
  const browser = await puppeteer.launch({
    dumpio: true,
    headless: false,
    args: ["--headless", "--hide-scrollbars", "--mute-audio"],
  });
  const page = await browser.newPage();

  const genScreenshot = async (url, filename) => {
    await page.goto(url, {
      waitUntil: "networkidle2",
    });

    await delay(50);

    await await page.pdf({
      path: filename,
      format: "A4",
      pageRanges: "1",
    });
  };

  const genExercise = i => {
    const name = i.toString().padStart(4, "0");
    const url = `http://127.0.0.1:8080/index.html?n=${i}`;
    const excercise = `../exercises/${name}.pdf`;
    const solution = `../solutions/${name}.pdf`;

    console.log(excercise);

    await genScreenshot(url + "&hide", excercise);
    await genScreenshot(url, solution);
  }

  for (let i = 1; i < 11; i++) {
    genExercise(i);
  }

  await browser.close();
})();
