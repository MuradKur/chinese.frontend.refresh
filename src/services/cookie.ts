export function getCookie(name: string) {
  let matches = document.cookie.match(
    new RegExp(
      //eslint-disable-next-line
      '(?:^|; )' +
        //eslint-disable-next-line
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)',
    ),
  );

  return matches ? matches[1] : undefined;
}

export function setCookie(
  name: string,
  value: string,
  options: any = { expires: new Date(Date.now() + 1006400e3) },
) {
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = name + '=' + value;

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }
  console.log(updatedCookie, options);
  document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
  setCookie(name, '', {
    'max-age': -1,
  });
}
