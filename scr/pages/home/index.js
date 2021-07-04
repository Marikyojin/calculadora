
import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Button, Text } from 'react-native';
import Botao from '../../componente/botao';

const Home = () => {
    const [n1, setN1] = useState("")
    const [n2, setN2] = useState("")
    const [op, setOp] = useState(null)
    const [resultado, setResultado] = useState(0)


    function Somar() {
        setResultado(parseInt(n1) + parseInt(n2))
    };

    function Subtrair() {
        setResultado(parseInt(n1) - parseInt(n2))
    };

    function Dividir() {
        setResultado(parseInt(n1) / parseInt(n2))
    };

    function Multiplicar() {
        setResultado(parseInt(n1) * parseInt(n2))
    };



    function setNumero(n) {
        if (op == null) {
            setN1((ant) => ant + n);
        }
        else
            setN2((ant) => ant + n);
        setResultado((ant) => (ant==0?"" : ant) + n);
    };

    function setOperador(o) {
        setOp(o);
        setResultado((ant)=>ant+ " "+o+" ");
    };
    function calcular() {
        if (op == "+") {
            Somar();
        }
        else if(op=="-"){
            Subtrair();
        }
        else if(op=="*"){
            Multiplicar();
        }
        else if(op=="/"){
            Dividir();
        }    
    };

    function limparConsole(){
        setN1("");
        setN2("");
        setOp(null);
        setResultado(0);
    
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>{resultado}</Text>
            </View>

            <View style={{ 'flexDirection': 'row' }}>
                <Botao
                    handlePress={limparConsole}
                    title={"C"}
                />
                <Botao
                    handlePress={setOperador}
                    title={"/"}
                />
                <Botao
                    handlePress={setOperador}
                    title={"*"}
                />
                <Botao
                    handlePress={setOperador}
                    title={"-"}
                />
            </View>

            <View style={{ 'flexDirection': 'row' }}>
                <Botao
                    handlePress={setNumero}
                    title={"7"}
                />
                <Botao
                    handlePress={setNumero}
                    title={"8"}
                />
                <Botao
                    handlePress={setNumero}
                    title={"9"}
                />
                <Botao
                    handlePress={setOperador}
                    title={"+"}
                />
            </View>

            <View style={{ 'flexDirection': 'row' }}>
                <Botao
                    handlePress={setNumero}
                    title={"4"}
                />
                <Botao
                    handlePress={setNumero}
                    title={"5"}
                />
                <Botao
                    handlePress={setNumero}
                    title={"6"}
                />
                <Botao
                    handlePress={setNumero}
                    title={"0"}
                />
            </View>

            <View style={{ 'flexDirection': 'row' }}>
                <Botao
                    handlePress={setNumero}
                    title={"1"}
                />
                <Botao
                    handlePress={setNumero}
                    title={"2"}
                />
                <Botao
                    handlePress={setNumero}
                    title={"3"}
                />
                <Botao
                    handlePress={calcular}
                    title={"Enter"}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        width: 362,
        height: 180,
        backgroundColor:"#ddd",
        borderRadius:10,
        alignItems: "flex-end",        
        justifyContent: "flex-end",
    },
    title:{
        padding: 10
    }
})

export default Home;
