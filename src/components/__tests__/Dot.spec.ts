import { describe, expect, it } from 'vitest';

import Dot from '../Dot.vue';
import { mount } from '@vue/test-utils';

describe('Dot', () => {
  it('renders white properly', () => {
    const wrapper = mount(Dot, { props: { isWhite: true } });
    expect(wrapper).toContain('bg-white');
  });

  it('renders black properly', () => {
    const wrapper = mount(Dot, { props: { isWhite: false } });
    expect(wrapper).toContain('bg-black');
  });
});
