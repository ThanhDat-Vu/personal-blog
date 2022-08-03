import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { IoSunnyOutline } from "react-icons/io5";

export default function Layout({ title, children }) {
    return (
        <>
            <Head title={title} />
            <div className="max-w-7xl mx-auto py-4">
                <div className="flex justify-between items-center">
                    <div className="space-x-4">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-orange-800"
                        >
                            BitterCoffee
                        </Link>
                        <Link href="/about" className="text-lg">
                            About
                        </Link>
                    </div>
                    <span className="text-2xl">
                        <IoSunnyOutline />
                    </span>
                </div>
                <div className="py-8">{children}</div>
            </div>
        </>
    );
}
