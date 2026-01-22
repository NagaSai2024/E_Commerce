import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

type Input = {
    id: number;
    description: string;
};

export default function PaginationDemo() {
    const rowPerPage = 10;
    const [input, setInput] = useState<Input[]>([]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(rowPerPage);

    const getData = async () => {
        const { data , error} = await supabase
            .from("sampleadata")
            .select("id, description")
            .order("id", { ascending: true });

        setInput(data || []);
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Id</TableHead>
                        <TableHead>Description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {input.slice(startIndex, endIndex).map((item) => {
                        return (
                            <>
                                <TableRow key={item.id}>
                                    <TableCell className="text-left">{item.id}</TableCell>
                                    <TableCell className="text-left">{item.description}</TableCell>
                                </TableRow>
                            </>
                        )
                    })}
                </TableBody>
            </Table>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            className={startIndex === 0 ? "pointer-events-none opacity-50" : undefined}
                            onClick={() => {
                                setStartIndex(startIndex - rowPerPage);
                                setEndIndex(endIndex - rowPerPage);
                            }}
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext
                            className={endIndex === 80 ? "pointer-events-none opacity-50" : undefined}
                            onClick={() => {
                                setStartIndex(startIndex + rowPerPage);
                                setEndIndex(endIndex + rowPerPage);
                            }}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    )
}
