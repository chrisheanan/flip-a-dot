import { describe, expect, it } from 'vitest';

import Dot from '../Dot.vue';
import { mount } from '@vue/test-utils';

describe('Dot', () => {
  it('renders white properly', () => {
    const wrapper = mount(Dot, { props: { isWhite: true, row: 1, column: 1 } });
    expect(wrapper).toContain('bg-white');
  });

  it('renders black properly', () => {
    const wrapper = mount(Dot, { props: { isWhite: false, row: 1, column: 1 } });
    expect(wrapper).toContain('bg-black');
  });
});
