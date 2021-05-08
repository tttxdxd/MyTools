import { SectionItem } from '../types';

export function checkIP(data: string): boolean {
  const reg = /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/g;

  return reg.test(data);
}
export function checkDomain(data: string): boolean {
  return false;
}

export function parseHosts(hosts: string): SectionItem[] {
  const ACTIVE = '(#[ |\t]*)?';
  const IP = '(((25[0-5]|2[0-4]\\d|((1\\d{2})|([1-9]?\\d))).){3}(25[0-5]|2[0-4]\\d|((1\\d{2})|([1-9]?\\d))))';
  const DOMAIN = '([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\\.?)';
  const COMMENT = '(# (.*))?';
  const SPACE = '[ |\\t]*?';
  const regex = new RegExp(`^${ACTIVE}${IP}${SPACE}${DOMAIN}${SPACE}${COMMENT}$`, 'gm');
  const result = [];
  let m;

  while ((m = regex.exec(hosts)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    // m.forEach((v, i) => {
    //   console.log(i, v);
    // });
    if (m && m.length > 14) {
      result.push({
        ip: m[2],
        domain: m[12],
        comment: m[15] || '',
        status: m[1] === 'on',
      });
    }
  }

  return result;
}
