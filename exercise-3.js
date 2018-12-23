var nama = 'udin'
var peran = 'ksatria'
if (nama !== '' && peran ==='') {
  console.log('halo ' + nama + ', pilih peranmu untuk main game!')
}
else
if (nama !== '' && peran ==='ksatria') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama)
  console.log('halo ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
}
else if (nama !== '' && peran ==='tabib') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama)
  console.log('halo tabib ' + nama + ', kamu akan membantu temanmu yang terluka!')
}
else if (nama !== '' && peran ==='penyihir') {
  console.log('Selamat datang di Dunia Proxytia, '+ nama)
  console.log('halo penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
}
else {
  console.log('nama harus diisi')

}
