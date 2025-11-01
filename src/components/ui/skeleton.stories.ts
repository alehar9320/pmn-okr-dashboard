import type { Meta, StoryObj } from "@storybook/react"
import { Skeleton } from "./skeleton"
import { Card, CardContent, CardHeader } from "./card"

const meta: Meta<typeof Skeleton> = {
  title: "UI/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {
    className: "h-10 w-full",
  },
}

export const CardSkeleton: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </CardContent>
    </Card>
  ),
}
