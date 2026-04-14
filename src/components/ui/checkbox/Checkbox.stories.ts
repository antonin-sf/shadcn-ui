import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Checkbox } from '.'
import { Label } from '../label'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref<boolean>(false)
      return { checked, args }
    },
    template: '<Checkbox v-model="checked" v-bind="args" />',
  }),
}

export const Checked: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref<boolean>(true)
      return { checked, args }
    },
    template: '<Checkbox v-model="checked" v-bind="args" />',
  }),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref<boolean>(false)
      return { checked, args }
    },
    template: '<Checkbox v-model="checked" v-bind="args" />',
  }),
}

export const WithLabel: Story = {
  render: (args) => ({
    components: { Checkbox, Label },
    setup() {
      const checked = ref<boolean>(false)
      return { checked, args }
    },
    template: `
      <div class="flex items-center gap-2">
        <Checkbox id="terms" v-model="checked" v-bind="args" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>
    `,
  }),
}
