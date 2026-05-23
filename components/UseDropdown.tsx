"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UseDropdown = () => {
    const router = useRouter();
    const handleSignOut = async () => {
        router.push("/sign-in");
    }

    const user = { name: "shehan", email: "contact@singalist.com" }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/153423955?s=280&v=4s" />
                        <AvatarFallback
                            className="bg-yellow-500 text-yellow-900 text-sm font-bold"
                        >
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-3 text-gray-400 flex flex-col gap-2">
                <DropdownMenuLabel className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/153423955?s=280&v=4s" />
                        <AvatarFallback
                            className="bg-yellow-500 text-yellow-900 text-sm font-bold"
                        >
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col leading-tight">
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                        <span className="text-sm text-gray-500 break-all">{user.email}</span>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-600" />
                <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
                    LogOut
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />
                <nav className="sm:hidden">
                    <NavItems />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UseDropdown
