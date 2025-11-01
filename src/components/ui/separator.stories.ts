import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "./separator"

const meta: Meta<typeof Separator> = {
  title: "UI/Separator",
  component: Separator,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <span>Item 1</span>
      <Separator {...args} orientation="vertical" className="h-4" />
      <span>Item 2</span>
      <Separator {...args} orientation="vertical" className="h-4" />
      <span>Item 3</span>
    </div>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <div className="flex h-20 items-center space-x-4">
      <span>Item 1</span>
      <Separator {...args} orientation="vertical" />
      <span>Item 2</span>
      <Separator {...args} orientation="vertical" />
      <span>Item 3</span>
    </div>
  ),
}
