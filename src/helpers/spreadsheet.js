import config from "../config";


export default function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Taulukko1!A1:D100"
      })
      .then(
        response => {
          const data = response.result.values;
          const posts = data.map(post => ({
            a: post[0],
            b: post[1],
            c: post[2]
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

