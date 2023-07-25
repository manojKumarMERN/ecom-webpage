import { useState } from 'react';
import { MDBDataTable } from 'mdbreact';

function YourComponent() {
    const [wishBuyData, setWishBuyData] = useState([
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        // ... add more items
    ]);

    const [wishCareData, setWishCareData] = useState([
        { id: 1, name: 'Item 3', price: 30 },
        { id: 2, name: 'Item 4', price: 40 },
        // ... add more items
    ]);

    const [wishToBuyData, setWishToBuyData] = useState([
        { id: 1, name: 'Item 5', price: 50 },
        { id: 2, name: 'Item 6', price: 60 },
        // ... add more items
    ]);

    const handleDelete = (itemId, category) => {
        if (category === 'wishbuy') {
            const updatedData = wishBuyData.filter((item) => item.id !== itemId);
            setWishBuyData(updatedData);
        } else if (category === 'wishcare') {
            const updatedData = wishCareData.filter((item) => item.id !== itemId);
            setWishCareData(updatedData);
        } else if (category === 'wishtobuy') {
            const updatedData = wishToBuyData.filter((item) => item.id !== itemId);
            setWishToBuyData(updatedData);
        }
    };

    const convertDataToRows = (data, category) => {
        return data.map((item) => ({
            id: item.id,
            name: item.name,
            price: `$${item.price}`,
            delete: (
                <button onClick={() => handleDelete(item.id, category)}>
                    Delete
                </button>
            ),
        }));
    };

    const wishBuyColumns = [
        {
            label: 'ID',
            field: 'id',
        },
        {
            label: 'Name',
            field: 'name',
        },
        {
            label: 'Price',
            field: 'price',
        },
        {
            label: 'Delete',
            field: 'delete',
        },
    ];

    const wishCareColumns = [
        // Same structure as wishBuyColumns
    ];

    const wishToBuyColumns = [
        // Same structure as wishBuyColumns
    ];

    const wishBuyRows = convertDataToRows(wishBuyData, 'wishbuy');
    const wishCareRows = convertDataToRows(wishCareData, 'wishcare');
    const wishToBuyRows = convertDataToRows(wishToBuyData, 'wishtobuy');

    const wishBuyTableData = { columns: wishBuyColumns, rows: wishBuyRows };
    const wishCareTableData = { columns: wishCareColumns, rows: wishCareRows };
    const wishToBuyTableData = { columns: wishToBuyColumns, rows: wishToBuyRows };

    return (
        <div>
            <h2>Wish Buy Data</h2>
            <MDBDataTable responsive striped bordered data={wishBuyTableData} />

            <h2>Wish Care Data</h2>
            <MDBDataTable responsive striped bordered data={wishCareTableData} />

            <h2>Wish to BuyData</h2>
            <MDBDataTable responsive striped bordered data={wishToBuyTableData} />
        </div>
    );
}
