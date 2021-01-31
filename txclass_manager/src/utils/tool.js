function trimSpace (str) {
  return str.replace(/\s+/g, '');
}

function  getDatas (errorCode, data, history, callback) {
  if (errorCode === 0 && data) {
    callback();
  } else {
    history.push('/404');
  }
}

export {
  trimSpace,
  getDatas
}