import type { Meta, StoryObj } from "@storybook/react"
import { Bold } from "lucide-react"
import { Toggle } from "./toggle"

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    children: <Bold className="size-4" />,
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: <Bold className="size-4" />,
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: <Bold className="size-4" />,
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: <Bold className="size-4" />,
  },
}

export const WithText: Story = {
  args: {
    children: (
      <>
        <Bold className="size-4" />
        <span>Bold</span>
      </>
    ),
  },
}
