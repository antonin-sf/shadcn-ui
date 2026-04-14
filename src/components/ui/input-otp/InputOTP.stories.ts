import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '.'

const meta: Meta<typeof InputOTP> = {
  title: 'UI/InputOtp',
  component: InputOTP,
}

export default meta
type Story = StoryObj<typeof InputOTP>

export const Default: Story = {
  render: () => ({
    components: { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <InputOTP v-model="value" :maxlength="6">
        <InputOTPGroup>
          <InputOTPSlot :index="0" />
          <InputOTPSlot :index="1" />
          <InputOTPSlot :index="2" />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot :index="3" />
          <InputOTPSlot :index="4" />
          <InputOTPSlot :index="5" />
        </InputOTPGroup>
      </InputOTP>
    `,
  }),
}

export const FourDigits: Story = {
  render: () => ({
    components: { InputOTP, InputOTPGroup, InputOTPSlot },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <InputOTP v-model="value" :maxlength="4">
        <InputOTPGroup>
          <InputOTPSlot :index="0" />
          <InputOTPSlot :index="1" />
          <InputOTPSlot :index="2" />
          <InputOTPSlot :index="3" />
        </InputOTPGroup>
      </InputOTP>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator },
    template: `
      <InputOTP :maxlength="6" disabled>
        <InputOTPGroup>
          <InputOTPSlot :index="0" />
          <InputOTPSlot :index="1" />
          <InputOTPSlot :index="2" />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot :index="3" />
          <InputOTPSlot :index="4" />
          <InputOTPSlot :index="5" />
        </InputOTPGroup>
      </InputOTP>
    `,
  }),
}
