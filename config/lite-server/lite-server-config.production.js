module.exports = {
  "injectChanges": false,
  //"host": "xxx.xxx.xxx.x",
  "port": 8000,
  "files": [
    "./build/production/**/*.{html,htm,css,js}"
  ],
  "server": {
    "baseDir": "./build/production" //,
  //  "middleware": [
  //    function (req, res, next) {
  //      /** First middleware handler **/
  //    },
  //    function (req, res, next) {
  //      /** Second middleware handler **/
  //    }
  //  ]
  }
}