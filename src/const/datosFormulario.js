/* eslint-disable */
const ddDay = [];    
for(let i=1; i<32; i++){
  const dataFecha=i;
  ddDay.push(dataFecha);
} 

const ddData = [];    
for(let i=1990; i<2022; i++){
  const dataFecha=i;
  ddData.push(dataFecha);
} 

const ddMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre' , 'Diciembre'];

const ddGender = ['Masculino', 'Femenino', 'Otro'];

export {ddDay, ddData, ddMes, ddGender};