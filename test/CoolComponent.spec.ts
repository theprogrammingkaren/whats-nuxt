import { mount } from '@vue/test-utils'
import CoolComponent from '~/components/CoolComponent.vue'

describe('CoolComponent', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CoolComponent)
    expect(wrapper.vm).toBeTruthy()
  })
})
