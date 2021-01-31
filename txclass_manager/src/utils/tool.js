function trimSpace (str) {
  return str.replace(/\s+/g, '');
}

function  getDatas (errorCode, data, history, callback) {
  if (errorCode === 0 && data && data.length > 0) {
    callback();
  } else {
    history.push('/404');
  }
}

export {
  trimSpace,
  getDatas
}