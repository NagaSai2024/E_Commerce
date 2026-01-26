import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
export default function DropDownMenuDemo () {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuLabel>Profile</DropdownMenuLabel>
                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Team</DropdownMenuLabel>
                    <DropdownMenuLabel>Subscription</DropdownMenuLabel>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}