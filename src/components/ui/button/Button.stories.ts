import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Button</Button>',
  }),
}

export const Outline: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Button</Button>',
  }),
  args: { variant: 'outline' },
}

export const Secondary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Button</Button>',
  }),
  args: { variant: 'secondary' },
}

export const Ghost: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Button</Button>',
  }),
  args: { variant: 'ghost' },
}

export const Destructive: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Button</Button>',
  }),
  args: { variant: 'destructive' },
}

export const Link: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Button</Button>',
  }),
  args: { variant: 'link' },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Button</Button>',
  }),
  args: { disabled: true },
}

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-3">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
        <Button disabled>Disabled</Button>
      </div>
    `,
  }),
}
