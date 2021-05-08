import { reactive } from '@vue/reactivity';
import aardio from 'aardio';

import { Section } from '../types';
import { parseHosts } from '../utils';

export function useSections() {
  const sections = reactive<Section[]>([]);

  aardio.getAllSections().then((res) => {
    res.forEach((section) => {
      sections.push({
        name: section.name,
        status: section.status === 'on',
        items: parseHosts(section.hosts).map((v) => Object.assign({ editor: false }, v)),
        comment: '',
        loading: false,
      });
    });
  });

  return sections;
}
