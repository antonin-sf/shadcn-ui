import type { Meta, StoryObj } from '@storybook/vue3'
import { Label } from '.'

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  render: () => ({
    components: { Label },
    template: '<Label>Email address</Label>',
  }),
}
