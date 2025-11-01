import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./input"
import { Label } from "./label"

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Enter your email",
  },
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input {...args} type="email" id="email" placeholder="Email" />
    </div>
  ),
}
