import { Image, StyleSheet, Text, View } from "react-native";

interface BudgetProps {
    title: string;
    budget: number;
}

export default function CardBudget({title, budget}: BudgetProps) {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.container}>
                <Image source={require('../../assets/images/circulo-usd.png')}
                    style={{width: 40, height: 40,}}
                />
                <Text style={styles.textBudget}>R$ {budget}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontFamily: 'Roboto-Regular',
        color: "#e9e9e9",
        marginBottom: 8
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#7A15E4',
        borderRadius: 18,
        // paddingVertical: "3%",
        paddingVertical: 10,
        // width: '60%',
        width: 200,
        marginRight:20,
        marginLeft:2,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        marginVertical: 5
        

    },
    textBudget: {
        color: '#fff',
        fontFamily: 'Roboto-Bold',
        fontWeight: '800',
        fontSize: 25
    }
  });