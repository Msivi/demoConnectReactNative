// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import axios from 'axios';
// // import setupProxy from '../setupProxy';

// const DataScreen = () => {
//     const [data, setData] = useState<any[]>([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             // const response = await axios.get('/api/get-all-khach-hang');
//             const response = await axios.get('https://reactnative.dev/movies.json');
//             setData(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     if (data.length === 0) {
//         return (
//             <View>
//                 <Text>Loading...</Text>
//             </View>
//         );
//     }

//     return (
//         <View>
//             {data.map((user, index) => (
//                 <View key={index}>
//                     <Text>UserID: {user.id}</Text>
//                     <Text>Password: {user.title}</Text>
//                     {/* <Text>Email: {user.email}</Text>
//                     <Text>Username: {user.userName}</Text>
//                     <Text>Phone Number: {user.phoneNumber}</Text>
//                     <Text>Address: {user.address}</Text> */}
//                 </View>
//             ))}
//         </View>
//     );
// };

// export default DataScreen;
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

interface Customer {
    accountName: string;
    passWord: string;
    email: string;
    userName: string;
    phoneNumber: string;
    address: string;
}

const DataScreen: React.FC = () => {
    const [data, setData] = useState<Customer[] | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://10.0.2.2:8080/get-all-khach-hang');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    if (data === null) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (!Array.isArray(data)) { // Check if data is not an array
        return (
            <View>
                <Text>Error: Invalid data format</Text>
            </View>
        );
    }

    if (data.length === 0) { // Check if data array is empty
        return (
            <View>
                <Text>No data available</Text>
            </View>
        );
    }

    return (
        <View>
            {data.map((customer: Customer, index) => (
                <View key={index}>
                    <Text>Account Name: {customer.accountName}</Text>
                    <Text>Password: {customer.passWord}</Text>
                    <Text>Email: {customer.email}</Text>
                    <Text>User Name: {customer.userName}</Text>
                    <Text>Phone Number: {customer.phoneNumber}</Text>
                    <Text>Address: {customer.address}</Text>
                </View>
            ))}
        </View>
    );
};

export default DataScreen;