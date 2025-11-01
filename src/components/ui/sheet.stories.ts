import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet"
import { Label } from "./label"
import { Input } from "./input"

const meta: Meta<typeof Sheet> = {
  title: "UI/Sheet",
  component: Sheet,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Sheet>

const SheetComponent = (props: Story["args"]) => (
  <Sheet {...props}>
    <SheetTrigger asChild>
      <Button variant="outline">Open Sheet</Button>
    </SheetTrigger>
    <SheetContent side={props.side}>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 p-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" value="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" value="@peduarte" className="col-span-3" />
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
)

export const Default: Story = {
  render: (args) => <SheetComponent {...args} />,
}

export const Top: Story = {
  render: (args) => <SheetComponent {...args} side="top" />,
}

export const Bottom: Story = {
  render: (args) => <SheetComponent {...args} side="bottom" />,
}

export const Left: Story = {
  render: (args) => <SheetComponent {...args} side="left" />,
}

export const Right: Story = {
  render: (args) => <SheetComponent {...args} side="right" />,
}
