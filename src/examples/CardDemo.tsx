import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardDemo() {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 mt-5 shadow">
            <img
                src="./vite.svg"
                alt="event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                    A practical talk on component APIs, accessibility, and shipping faster.
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">Open</Button>
            </CardFooter>
        </Card>
    )
}