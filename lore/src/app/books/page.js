"use client";
import BookTable from "@/components/tables/bookTable/BookTable";
import { useEffect, useState } from "react";
import { useBooks } from "@/hooks/useBooks";

export default function Books() {

    return (
        <main>
            <BookTable />
        </main>
    )
}
