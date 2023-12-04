const mongoose = require('./mongoose.service').mongoose;

exports.exit = ({ healthy = true } = {}) => {
    return healthy ? process.exit(0) : process.exit(1)
  };

exports.check = () => {
    return Promise.all([
        mongoose.connection.readyState
    ])
};

exports.handleSuccessfulConnection = (healthcheck) => {
    return () => {
        healthcheck({ healthy: true })
}};

exports.handleUnsuccessfulConnection = (healthcheck) => {
    return (e) => {
        healthcheck({ healthy: false })
}};