import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '.'
import { Button } from '../button'

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => ({
    components: {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      Button,
    },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <Dialog v-model:open="open">
        <DialogTrigger as-child>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a description of the dialog content.
            </DialogDescription>
          </DialogHeader>
          <p class="text-sm text-muted-foreground">Dialog body content goes here.</p>
          <DialogFooter>
            <Button variant="outline" @click="open = false">Cancel</Button>
            <Button @click="open = false">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
}

export const WithForm: Story = {
  render: () => ({
    components: {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      Button,
    },
    setup() {
      const open = ref(false)
      const name = ref('')
      return { open, name }
    },
    template: `
      <Dialog v-model:open="open">
        <DialogTrigger as-child>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-3 py-2">
            <label class="text-sm font-medium" for="name">Name</label>
            <input
              id="name"
              v-model="name"
              class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Your name"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" @click="open = false">Cancel</Button>
            <Button @click="open = false">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
}

export const Destructive: Story = {
  render: () => ({
    components: {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      Button,
    },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <Dialog v-model:open="open">
        <DialogTrigger as-child>
          <Button variant="destructive">Delete Account</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" @click="open = false">Cancel</Button>
            <Button variant="destructive" @click="open = false">Delete Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
}
