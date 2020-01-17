let a = process.argv;
let s = 0;

for (i = 2; i < a.length; i++) {
    s+=+a[i];
}

console.log('N ====>s',s);