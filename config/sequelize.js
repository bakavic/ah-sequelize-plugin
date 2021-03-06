exports.default = {
    sequelize: function(api){
        return {
            "autoMigrate" : true,
            "loadFixtures": false,
            "database"    : "DEVELOPMENT_DB",
            "dialect"     : "mysql",
            "port"        : 3306,
            "host"        : "127.0.0.1",
            "username"    : "root",
            "password"    : ""
        };
    }
};

// For sequelize-cli
// Add to the exports below, if you have setup additional environment-specific settings

exports.development = exports.default.sequelize();
//exports.test = merge(exports.test);
//exports.production = merge(exports.production);

function merge(overlayFn) {
    var mergeObj = {};
    for (var attrname in exports.default.sequelize()) { mergeObj[attrname] = exports.default.sequelize()[attrname]; }
    if (typeof(overlayFn) !== 'undefined') for (var attrname in overlayFn.sequelize()) { mergeObj[attrname] = overlayFn.sequelize()[attrname]; }
    return mergeObj;
}

// You can define even more elaborate configurations (including replication).
// See http://sequelize.readthedocs.org/en/latest/api/sequelize/index.html for more information
// For example:

// exports.production = {
//   sequelize: function(api){
//     return {
//       "autoMigrate" : false,
//       "loadFixtures": false,
//       "logging"     : false,
//       "database"    : "PRODUCTION_DB",
//       "dialect"     : "mysql",
//       "port"        : 3306,
//       "replication" : {
//         "write": {
//           "host"     : "127.0.0.1",
//           "username" : "root",
//           "password" : "",
//           "pool"     : {}
//         },
//         "read": [
//           {
//             "host"     : "127.0.0.1",
//             "username" : "root",
//             "password" : "",
//             "pool"     : {}
//           }
//         ]
//       }
//     }
//   }
// }
