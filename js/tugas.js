// slide pertama muncul
$('#content').html(`
    <div class="definit">
        <div class="design"></div>
            <h2>Welcome</h2>
            <p>click the image above to see the material</p>
        </div>
    <div class="img">
        <img src="../img/lap.png" width="200">
    </div>
`);

// function ketika diklik
function slide($id, $id2, $data) {
    $($id).on('click', function() {
        $($id2).html($data);
    });
}

// materi
const materi1 = `<div class="definit">
                    <div class="design"></div>
                        <h2>Data Object</h2>
                        <p>Yang termasuk didalam data object dalam ILWIS adalah data spasial dan data atribut. Data 
                        spasial yang terdiri dari point map, segment map, polygon map dan raster map dapat di buat 
                        dan diedit di map window, sedangkan data atribut yang berbentuk tabel dapat dibuat dan 
                        diedit di table window.</p>
                    </div>
                    <div class="img">
                        <img src="../img/tugas/img1.png">
                    </div>
`;

const materi2 = `<div class="definit">
                    <div class="design"></div>
                        <h2>Container Object</h2>
                        <p>Container object adalah daftar yang berisikan referensi sejumlah data object. Umumnya file 
                        yang terdapat dalam container object berbentuk ASCII. Yang termasuk dalam container object
                        antaralain : map list, object collection, layout, annotation text, graph dan map view.</p>
                    </div>
                    <div class="img">
                        <img src="../img/tugas/img2.png">
                    </div>
`;

const materi3 = `<div class="definit">
                    <div class="design"></div>
                        <h2>Service Object</h2>
                        <p>Fasilitas dan aksesoris yang diperlukan dalam data object berada dalam service object. Salah 
                        satu fungsi service object adalah menentukan nilai data object seperti ID , value, class, dan 
                        menentukan koordinat data. Yang termasuk dalam service object antaralain : coordinate 
                        system, georeference, domain, dan representation.</p>
                    </div>
                    <div class="img">
                        <img src="../img/tugas/img3.png">
                    </div>
`;

const materi4 = `<div class="definit">
                    <div class="design"></div>
                        <h2>Special Object</h2>
                        <p>Yang termasuk ke dalam special object adalah histogram, sample sets, 2-dim tables, matrices, 
                        filters, function, scripts dan stereo pairs.</p>
                    </div>
                    <div class="img">
                        <img src="../img/tugas/img4.png">
                    </div>
`;

// jalankan function ketika gambar diklik
slide('#img1', '#content', materi1)
slide('#img2', '#content', materi2)
slide('#img3', '#content', materi3)
slide('#img4', '#content', materi4)



