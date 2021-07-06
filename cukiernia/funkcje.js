function zamowienie()
{
	 var paczki_ch = document.getElementById('paczek_ch').checked;
	 var tort_ch = document.getElementById('tort_ch').checked;
	 var ciasto_ch = document.getElementById('ciasto_ch').checked;
	 var praliny_ch = document.getElementById('praliny_ch').checked;
	 if(paczki_ch)
	 {
	 	var ile_paczki = document.getElementById('paczek').value;
	 	var suma_p = ile_paczki*9;

	 }
	else
	{
		suma_p = 0;
	}	 
	 if(tort_ch)
	 {
	 	var ile_tort = document.getElementById('tort').value;
	 	var suma_t = ile_tort*50;

	 }
	else
	{
		suma_t = 0;
	}
	 if(ciasto_ch)
	 {
	 	var ile_ciasto = document.getElementById('ciasto').value;
	 	var suma_c = ile_ciasto*30;

	 }
	else
	{
		suma_c = 0;
	}
	 if(praliny_ch)
	 {
	 	var ile_praliny = document.getElementById('praliny').value;
	 	var suma_pr = ile_praliny*15;

	 }
	else
	{
		suma_pr = 0;
	}	 
	 var suma = suma_t+suma_pr+suma_p+suma_c

	 document.getElementById("wypisz").innerHTML = "Wartość zamówienia: "+suma;
}