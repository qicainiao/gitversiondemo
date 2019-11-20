import { createBEM } from './bem';
import { createComponent } from './component';
import { createI18N } from './i18n';
export function createNamespace(name) {
  var comname = 'jy-' + name;
  var stylename = 'van-' + name;
  return [createComponent(comname), createBEM(stylename), createI18N(name)];
}