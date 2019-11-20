import { createBEM, BEM } from './bem';
import { createComponent } from './component';
import { createI18N, Translate } from './i18n';

type CreateNamespaceReturn = [
  ReturnType<typeof createComponent>,
  BEM,
  Translate
];

export function createNamespace(name: string): CreateNamespaceReturn {
  const comname = 'jy-' + name;
  const stylename = 'van-' + name;
  return [createComponent(comname), createBEM(stylename), createI18N(name)];
}
