//EJERCICIOS CON EL INPUT = ENTRADA
//cin Permite la entrada de datos

#include<iostream>
using namespace std;

int main (){
    //1 DECLARACION DE VARIABLES
    int n1, n2, suma;

    //2 LECTURA DE DATOS
    cout << "SUMA DE DOS NUMMEROS" << endl;

    cout << "INGRESA UN NUMERO ==>";
    cin >> n1;

    cout << "INGRESE OTRO NUMEROS ==>";
    cin >> n2;

    //3 PROCESO
    suma = n1+n2;

    //4 SALIDA
    cout <<"resultado ==>" << suma;
}
