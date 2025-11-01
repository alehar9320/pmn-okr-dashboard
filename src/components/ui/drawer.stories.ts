import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer"

const meta: Meta<typeof Drawer> = {
  title: "UI/Drawer",
  component: Drawer,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Drawer>

const DrawerComponent = (props: Story["args"]) => (
  <Drawer {...props}>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Drawer</Button>
    </DrawerTrigger>
    <DrawerContent className="max-h-[80vh] w-full sm:max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        <DrawerDescription>This action cannot be undone.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4">
        <p>This is the drawer content.</p>
      </div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
)

export const Default: Story = {
  render: (args) => <DrawerComponent {...args} />,
}

export const Top: Story = {
  render: (args) => <DrawerComponent {...args} direction="top" />,
}

export const Bottom: Story = {
  render: (args) => <DrawerComponent {...args} direction="bottom" />,
}

export const Left: Story = {
  render: (args) => <DrawerComponent {...args} direction="left" />,
}

export const Right: Story = {
  render: (args) => <DrawerComponent {...args} direction="right" />,
}
