import config from "../config";

export default function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Taulukko1!A2:D100"
      })
      .then(
        response => {
          const data = response.result.values;
          const posts =
            data.map(post => ({
              id: post[0],
              date: post[1],
              title: post[2],
              post: post[3]
            })) || [];
          callback({
            posts
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
