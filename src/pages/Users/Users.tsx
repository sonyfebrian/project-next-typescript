import { CSSProperties } from 'react';
import {
    useDisclosure,
    FlexProps,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import { VariableSizeGrid as Grid, GridChildComponentProps } from 'react-window';
import Dashboard from '@/components/Dashboard';
import { getDataUsers, } from '@/services/api';

interface User {
    id: string;
    name: string;
    email: string;
    country_name: string;
    device_id: string;
    bitcoin_address: string;
    avatar: string;
    login_ip: string;
    active_device_mac: string;
    notes: string;
    age: number;
    referral_id: number;
    locale: string;
    favorite_music: string;
    phone_number: string;
    twitter_username: string;
    job: string;
    invoice_email_address: string;
    hmac_secret: string;
    favorite_quote: string;
    primary_color: string;
    secondary_color: string;
    material: string;
    shipping_address: string;
    zip_code: string;
    latitude: string;
    longitude: string;
    favorite_animal: string;
    app_version: string;
    timezone: string;
}
interface ApiResponse {
    data: User[];

}
const User = () => {


    const { data: userData, isLoading, isError } = useQuery<ApiResponse | null>({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const response = await axios.get<ApiResponse>(`https://delman-fe-api.fly.dev/users`);
                const res = response.data
                return res;
            } catch (error) {
                throw new Error('Failed to fetch users data');
            }
        },
    });


    const data: User[] = userData?.data || [];



    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError || !userData) {
        return <p>Error: Failed to fetch data</p>;
    }

    const columnWidths = [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 60, 100, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150]

    const Cell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {

        const cellStyle: CSSProperties = {
            ...style,
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            padding: "10px",
            fontWeight: rowIndex === 0 ? 'bold' : 'normal',
            backgroundColor: rowIndex === 0 ? '#f0f0f0' : 'white',
            whiteSpace: 'nowrap', // Prevent text wrapping
            overflow: 'hidden', // Hide overflowed content
            textOverflow: 'ellipsis', // Show ellipsis for overflowed text

        };

        const rowData = rowIndex === 0 ? data[0] : data[rowIndex - 1];
        const columnNames = Object.keys(rowData) as (keyof User)[];

        const cellData = rowIndex === 0 ? columnNames[columnIndex] : rowData[columnNames[columnIndex]];
        const handleClick = () => {
            const rowData = rowIndex === 0 ? data[0] : data[rowIndex - 1];
            const columnNames = Object.keys(rowData) as (keyof User)[];

            const cellData = rowIndex === 0 ? columnNames[columnIndex] : rowData[columnNames[columnIndex]];

            console.log(`Cell ${cellData} at row ${rowIndex}, column ${columnIndex} was clicked!`);

        };


        return (
            <div style={cellStyle} onClick={handleClick}>
                {cellData}
            </div>
        );
    };
    return (
        <div> <Dashboard >

            <Grid
                columnCount={columnWidths.length}
                columnWidth={(index) => {
                    console.log(`Column index: ${index}, Width: ${columnWidths[index]}`);
                    return columnWidths[index];
                }}
                height={550}
                rowCount={data.length + 1}
                rowHeight={(index) => (index === 0 ? 50 : 30)}
                width={950}
            >
                {Cell}
            </Grid>


        </Dashboard></div>
    )
}

export default User