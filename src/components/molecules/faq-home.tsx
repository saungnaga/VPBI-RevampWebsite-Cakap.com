"use client"
import { useEffect } from "react";
import { Accordion } from "../atoms/accordion";
import { useFaqStore } from "@/stores/useFaqStore";

const FaqHome: React.FC = () => {
    const { general_faqs, fetchFaqs } = useFaqStore();

    useEffect(() => {
        fetchFaqs();
    }, [fetchFaqs]);

    return (
        <Accordion items={general_faqs} />
    )
}
export default FaqHome