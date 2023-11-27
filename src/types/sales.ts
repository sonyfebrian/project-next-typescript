export type Sales = {
    message: string;
    data: {
        id: number;
        name: string;
        sales_id: string;
        item_id: number;
        qty: number;
        consumen_name: string;
        transaction_date: string;
    }[];
}
