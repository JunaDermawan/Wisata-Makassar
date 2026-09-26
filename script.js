function lihatDetail(tempat) {

    let judul = "";
    let gambar = "";
    let deskripsi = "";

    // MASJID 99 KUBAH
    if (tempat === "masjid") {
        judul = "Masjid 99 Kubah 🕌";
        gambar = "Masjid99Kubah.jpg";

        deskripsi =
            "Masjid 99 Kubah merupakan salah satu ikon wisata religi " +
            "yang berada di kawasan Center Point of Indonesia (CPI), " +
            "Makassar, Sulawesi Selatan. Masjid ini memiliki desain " +
            "arsitektur yang sangat khas dengan kubah-kubah berwarna-warni " +
            "yang menjadi daya tarik utamanya. Nama 99 Kubah terinspirasi " +
            "dari Asmaul Husna, yaitu 99 nama Allah dalam Islam.\n\n" +

            "Bangunan masjid memiliki tampilan yang unik dan mencolok, " +
            "terutama ketika dilihat dari kawasan sekitar CPI. Selain " +
            "digunakan sebagai tempat ibadah, kawasan ini juga menjadi " +
            "salah satu tujuan masyarakat untuk menikmati pemandangan, " +
            "mengambil foto, dan mengenal salah satu bangunan ikonik " +
            "Kota Makassar.\n\n" +

            "Dengan perpaduan arsitektur yang modern, warna kubah yang " +
            "beragam, dan lokasinya yang berada di kawasan tepi laut, " +
            "Masjid 99 Kubah menjadi salah satu tempat yang menarik " +
            "untuk dikunjungi ketika berada di Makassar.";
    }


    // PANTAI LOSARI
    if (tempat === "losari") {
        judul = "Pantai Losari 🏖️";
        gambar = "PantaiLosari.jpg";

        deskripsi =
            "Pantai Losari merupakan salah satu ikon wisata terkenal " +
            "di Kota Makassar, Sulawesi Selatan. Tempat ini berada di " +
            "kawasan pusat kota dan dikenal sebagai salah satu tempat " +
            "yang sering dikunjungi masyarakat maupun wisatawan.\n\n" +

            "Pantai Losari memiliki pemandangan laut yang menarik dan " +
            "menjadi tempat yang cocok untuk menikmati suasana kota. " +
            "Pengunjung dapat bersantai, menikmati pemandangan, serta " +
            "mengabadikan momen ketika berada di kawasan ini.\n\n" +

            "Salah satu daya tarik Pantai Losari adalah suasana sore " +
            "dan pemandangan matahari terbenam. Kawasan ini juga menjadi " +
            "salah satu tempat yang dapat digunakan untuk mengenal " +
            "suasana dan ikon Kota Makassar.";
    }


    // KAPAL PINISI
    if (tempat === "kapalpinisi") {
        judul = "Kapal Pinisi ⛵";
        gambar = "KapalPinisi.jpg";

        deskripsi =
            "Wisata Kapal Pinisi merupakan salah satu wisata bahari " +
            "yang menarik di Kota Makassar. Kapal Pinisi adalah kapal " +
            "tradisional khas masyarakat Bugis-Makassar yang telah menjadi " +
            "bagian dari sejarah maritim Indonesia.\n\n" +

            "Di Makassar, kapal Pinisi dapat ditemukan di kawasan seperti " +
            "Pelabuhan Paotere. Pengunjung dapat menikmati pemandangan " +
            "kapal-kapal tradisional sekaligus mengenal budaya maritim " +
            "masyarakat Sulawesi Selatan.\n\n" +

            "Wisata menggunakan kapal Pinisi juga dapat memberikan pengalaman " +
            "menikmati pemandangan laut dan suasana Kota Makassar dari atas kapal. " +
            "Beberapa perjalanan wisata bahkan menawarkan rute menuju pulau-pulau " +
            "di sekitar Makassar.\n\n" +

            "Kapal Pinisi menjadi salah satu daya tarik wisata yang menunjukkan " +
            "kekayaan budaya dan tradisi maritim Indonesia.";
    }


    // BENTENG ROTTERDAM
    if (tempat === "Benteng") {
        judul = "Benteng Rotterdam";
        gambar = "BentengRotterdam.jpg";

        deskripsi =
            "Benteng Rotterdam merupakan salah satu bangunan bersejarah " +
            "yang berada di Kota Makassar, Sulawesi Selatan.\n\n" +

            "Benteng ini memiliki nilai sejarah yang penting dan menjadi " +
            "salah satu peninggalan sejarah yang masih terawat hingga sekarang. " +
            "Arsitekturnya memiliki dinding yang kokoh dan kawasan yang luas.\n\n" +

            "Di dalam kompleks benteng terdapat beberapa bangunan bersejarah " +
            "yang dapat dikunjungi. Tempat ini cocok bagi wisatawan yang ingin " +
            "mengenal lebih jauh sejarah dan budaya Kota Makassar.\n\n" +

            "Benteng Rotterdam juga menjadi salah satu tempat menarik untuk " +
            "berfoto dan menikmati suasana kawasan bersejarah di Kota Makassar.";
    }


    // Masukkan data ke popup
    document.getElementById("detailTitle").textContent = judul;
    document.getElementById("detailImage").src = gambar;
    document.getElementById("detailDescription").textContent = deskripsi;

    // Tampilkan popup
    document.getElementById("detailPopup").style.display = "flex";
}


// Fungsi untuk menutup popup
function tutupDetail() {
    document.getElementById("detailPopup").style.display = "none";
}