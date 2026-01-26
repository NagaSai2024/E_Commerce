import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function NagivationDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuItem>
                <NavigationMenuLink href="/docs" className={navigationMenuTriggerStyle()}>
                    Documenation
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenu>
    )
}