import AXRequest from "..";

export function getGoodPriceData() {
  return AXRequest.get({
    url: "/home/goodprice",
  });
}

export function getHighScoreData() {
  return AXRequest.get({
    url: "/home/highscore",
  });
}
