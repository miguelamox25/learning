//USAR LA INSTRUCCION CIN
// resta -
// multiplicacion *
// division /
#include<iostream>
using namespace std;

int main(){
    //1 DECLARACION DE VARIBLES
    int num1;
    int num2;
    int resultado;

    //2 ENTRADA DE DATOS cin
    cout << "INGRESA UN NUMERO ";
    cin >> num1;
    cout << endl << "INGRESA OTRO NUMERO ";
    cin >> num2;

    //3 OPERACION
    resultado = num1 + num2;

    //4 SALIDA
    cout << endl << "TE MUESTRO LA SUMA " << resultado;

    return 0;
}