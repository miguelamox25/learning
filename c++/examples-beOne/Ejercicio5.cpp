#include<iostream>
using namespace std;

int main(){
    //1 DECLARACION DE VARIABLES
    int n;

    //2 INGRESAR DATOS
    cout << "DETERMINAR SI UN NUMERO ES MAYOR A CERO" << endl;
    cout << "INGRESA UN NUMERO: ";
    cin >> n;

    //3 PROCESO
    if(n>0){
        //4 SALIDA
        cout << "ES MAYOR A CERO";
    }else{
        //4 SALIDA
        cout << "ES MENOR A CERO";
    }
}