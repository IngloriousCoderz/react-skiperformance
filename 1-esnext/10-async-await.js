async function fetchDataInSeries() {
  try {
    const response1 = await $.ajax(url1);
    console.log(response1);
    const response2 = await $.ajax(url2);
    console.log(response2);
    return [response1, response2];
  } catch (error) {
    console.error(error);
  } finally {
  }
}

const fetchDataInSeries = async () => {};

fetchDataInSeries().then(([response1, response2]) => {});

async function fetchDataInParallel() {
  try {
    const [response1, response2] = await Promise.all([
      $.ajax(url1),
      $.ajax(url2),
    ]);
    return [response1, response2];
  } catch (error) {
    console.error(error);
  } finally {
  }
}
