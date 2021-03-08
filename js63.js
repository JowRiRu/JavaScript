var v = [9.98, 7.86, 4.53, 8.91, 5.76, 2.31];

if (v.length%2==0) {
    var pos1=v.length/2
    var pos2=pos1-1
    var elem1=v[pos1]
    var elem2=v[pos2]
    var mediana=(elem1+elem2)/2
} else {
    var pos_central=(v.length-1)/2
    var mediana=v[pos_central]
}
document.write("La mediana es:"+mediana)