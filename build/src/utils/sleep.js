var sleep = function (ms) {
    if (ms === void 0) { ms = 2000; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
export default sleep;
