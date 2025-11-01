import type { Meta, StoryObj } from "@storybook/react"
import { toast } from "sonner"
import { Button } from "./button"
import { Toaster } from "./sonner"

const meta: Meta<typeof Toaster> = {
  title: "UI/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() => {
          toast("This is a sonner toast.")
        }}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.info("This is an info toast.")
        }}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.success("This is a success toast.")
        }}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.warning("This is a warning toast.")
        }}
      >
        Warning
      </Button>
      <Button
        variant="destructive"
        onClick={() => {
          toast.error("This is an error toast.")
        }}
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.loading("This is a loading toast.")
        }}
      >
        Loading
      </Button>
    </div>
  ),
}
