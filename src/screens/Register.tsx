import React from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface User {
    accountName: string;
    password: string;
    email: string;
    userName: string;
    phoneNumber: string;
    address: string;
}

const Register = () => {
    const [user, setUser] = React.useState<User>({
        accountName: '',
        password: '',
        email: '',
        userName: '',
        phoneNumber: '',
        address: '',
    });

    const handleChange = (field: keyof User, value: string) => {
        setUser({ ...user, [field]: value });
    };

    const handleSubmit = async () => {
        try {
            const url = 'http://10.0.2.2:8080/create-ct-nhap-vaccine';

            const payload = {
                accountName: user.accountName,
                passWord: user.password,
                email: user.email,
                userName: user.userName,
                phoneNumber: user.phoneNumber,
                address: user.address,
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Lỗi yêu cầu API: ${response.status}`);
            }

            const data = await response.json();
            console.log('Dữ liệu phản hồi:', data); // In dữ liệu phản hồi khi thành công
        } catch (error) {
            console.error('Lỗi đăng ký:', error); // In lỗi khi xảy ra
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Tên tài khoản"
                onChangeText={(text) => handleChange('accountName', text)}
                value={user.accountName}
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                onChangeText={(text) => handleChange('password', text)}
                value={user.password}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => handleChange('email', text)}
                value={user.email}
            />
            <TextInput
                style={styles.input}
                placeholder="Tên người dùng"
                onChangeText={(text) => handleChange('userName', text)}
                value={user.userName}
            />
            <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                onChangeText={(text) => handleChange('phoneNumber', text)}
                value={user.phoneNumber}
            />
            <TextInput
                style={styles.input}
                placeholder="Địa chỉ"
                onChangeText={(text) => handleChange('address', text)}
                value={user.address}
            />
            <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 25 }} >Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnLogin: {
        margin: 30,
        backgroundColor: '#2596be',
        borderRadius: 30,
        alignItems: 'center',
        height: 60,
        padding: 10

    },
});

export default Register;