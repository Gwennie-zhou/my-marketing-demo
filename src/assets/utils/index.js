module.exports = {
  // getThis: function({content, getMethod}) {
  //   console.log("----------",content);
  //   // getMethod.apply(content)
  //   getMethod()
  // }
  getThis: function(getMethod) {
    getMethod()
  }
}

