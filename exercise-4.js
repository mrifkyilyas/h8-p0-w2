var tanggal = 19;
var bulan = 12;
var tahun  = 1950;

if(tanggal < 32 && tanggal > 0 && tahun <= 2200 && tahun >= 1200)// sortir tanggal & tahun
{
   
          switch(bulan){//switch case bulan

          case 1: {
            var bulan = ' Januari ';
            rconsole.log(tanggal + bulan +  tahun);
            break;
          }
          case 2: {
            var bulan = ' Februari ';
            console.log(tanggal + bulan +  tahun);
            break;
          }
          case 3: {
            var bulan = ' Maret ';
            console.log(tanggal + bulan +  tahun);
            break;
          }
          case 4: {
            var bulan = ' April ';
            console.log(tanggal + bulan +  tahun);
            break;
          }
          case 5: {
            var bulan = ' Mei ';
            console.log(tanggal + bulan +  tahun);
            break;
          }
          case 6: {
            var bulan = ' Juni ';
            console.log(tanggal + bulan +  tahun);
            break;
          }
          case 7: {
            var bulan = ' Juli ';
            console.log(tanggal + bulan +  tahun);
            break;
          }
          case 8: {
            var bulan = ' Agustus ';
            console.log(tanggal + bulan +  tahun);
            break;
          }
          case 9: {
            var bulan = ' September ';
            console.log(tanggal + bulan +  tahun);
            break;
          }
          case 10: {
            var bulan = ' Oktober ';
            console.log(tanggal + bulan +  tahun);
            break;
          }
          case 11: {
            var bulan = ' November ';
            console.log(tanggal + bulan +  tahun);
            break;
          }
          case 12: {
            var bulan = ' Desember ';
            console.log(tanggal + bulan +  tahun);
            break;
          }
          default: {
            console.log('format yang dimasukan salah');
            break;
          }

        }



    

    }



else {
  console.log('format yang dimasukan salah')
}

