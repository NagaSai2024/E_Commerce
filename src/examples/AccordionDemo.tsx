import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const items = [
    {
        value: "item-1",
        trigger:"How do i reset the password",
        content: "Click on forgot password on the login page"
    },
    {
        value: "item-2",
        trigger:"Can i change my sub",
        content: "Yes"
    },
    {
        value: "item-3",
        trigger:"What payment methods do you accept",
        content: "All types payments acceptable"
    }
]

export default function AccordionDemo() {
  return (
    <Accordion type="multiple" defaultValue={["item-1"]} className="max-w-lg">
        {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
  )
}
