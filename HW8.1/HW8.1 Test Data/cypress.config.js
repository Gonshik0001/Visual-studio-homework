const { defineConfig } = require("cypress");
const mysql = require("mysql");

function queryTestDb(query, config) {
  const connection = mysql.createConnection(config.env.db);
  connection.connect();
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        resolve(results);
      }
    });
  });
}

module.exports = defineConfig({
  projectId: "odtwnb",

  env: {
    db: {
      host: "db4free.net",
      user: "oksana",
      password: "password",
      database: "it_switcher",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
        },
      });
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
