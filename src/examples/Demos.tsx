import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/lib/supabase";
import React from "react";
import { useEffect, useState } from "react";

type Input = {
    id: number;
    description: string;
};

export default function Demos() {

    const [input, setInput] = useState<Input[]>([]);

    const getData = async () => {
        const { data } = await supabase
            .from("sampleadata")
            .select("id, description")
            .order("id", { ascending: true });

        setInput(data || []);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <ScrollArea className="h-72 w-150 rounded-md border shadow-lg">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium">About TS</h4>
                {input.map((item) =>
                <React.Fragment key={item.id}>
                    <div className="text-sm">{item.description}</div>
                    <Separator className="my-2" />
                </React.Fragment>
                )}
            </div>
        </ScrollArea>
    )
}