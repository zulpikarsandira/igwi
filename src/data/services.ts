export interface ServiceContent {
    slug: string;
    title: string;
    heroTitle: string;
    heroDescription: string;
    heroImages: string[];
    stats: { label: string; value: string }[];
    journey: { year: string; title: string; description: string }[];
    coreValues: { title: string; description: string; icon: string }[];
    quote: { text: string; author: string; role: string };
    awards: string[];
}

export const servicesContent: Record<string, ServiceContent> = {
    "bahasa-budaya": {
        slug: "bahasa-budaya",
        title: "Bahasa & Budaya Kerja",
        heroTitle: "Kuasai Bahasa, Pahami Budaya, Raih Karier Global",
        heroDescription: "Program pelatihan bahasa intensif dan pembekalan budaya kerja internasional untuk mempersiapkan Anda menjadi tenaga kerja yang kompetitif dan cepat beradaptasi di luar negeri.",
        heroImages: ["/service-bahasa-hero.png", "/hero-image.png"],
        stats: [
            { value: "500+", label: "Alumni Sukses" },
            { value: "95%", label: "Tingkat Kelulusan" },
            { value: "10+", label: "Instruktur Native" },
            { value: "24/7", label: "Dukungan Belajar" },
            { value: "100%", label: "Fokus Karir" },
        ],
        journey: [
            { year: "Bulan 1", title: "Dasar Bahasa & Fonetik", description: "Pengenalan tata bahasa dasar, kosakata harian, dan pelafalan yang benar." },
            { year: "Bulan 2", title: "Percakapan Intensif", description: "Latihan berbicara dalam situasi kerja nyata dan simulasi wawancara." },
            { year: "Bulan 4", title: "Persiapan Sertifikasi", description: "Latihan soal dan strategi untuk lulus ujian sertifikasi bahasa (JLPT/N-level)." },
            { year: "Bulan 6", title: "Budaya Kerja & Etos", description: "Pembekalan mendalam tentang disiplin, etika, dan tata krama di tempat kerja global." },
        ],
        coreValues: [
            { title: "Komunikasi Intensif", description: "Interaksi aktif setiap hari untuk mempercepat penguasaan bahasa.", icon: "/icon.png" },
            { title: "Adaptasi Kultur", description: "Bukan hanya bahasa, kami mengajarkan cara hidup dan bekerja di negara tujuan.", icon: "/icon-1.png" },
            { title: "Evaluasi Berkala", description: "Ujian mingguan untuk memastikan setiap peserta mencapai target kompetensi.", icon: "/icon-2.png" },
            { title: "Mental Juara", description: "Pembangunan karakter disiplin dan tangguh menghadapi tantangan global.", icon: "/icon-3.png" },
        ],
        quote: {
            text: "Bahasa adalah kunci, tapi budaya adalah pintu menuju kesuksesan jangka panjang di kancah internasional.",
            author: "Adhi Brata",
            role: "Direktur LPK IGWI",
        },
        awards: ["/vector-1.svg", "/vector-2.svg", "/vector-3.svg", "/vector-4.svg"],
    },
    "manufaktur-industri": {
        slug: "manufaktur-industri",
        title: "Manufaktur & Industri",
        heroTitle: "Keahlian Teknis Standar Internasional",
        heroDescription: "Pelatihan teknis manufaktur yang disesuaikan dengan kebutuhan industri modern di Jepang dan Eropa.",
        heroImages: ["/service-manufaktur-hero.png", "/hero-image.png"],
        stats: [
            { value: "300+", label: "Mitra Industri" },
            { value: "1000+", label: "Penempatan Kerja" },
            { value: "50+", label: "Peralatan Praktik" },
            { value: "10+", label: "Instruktur Ahli" },
            { value: "90%", label: "Kepuasan User" },
        ],
        journey: [
            { year: "Tahap 1", title: "Keselamatan Kerja (K3)", description: "Dasar-dasar keselamatan kerja dan prosedur operasional standar." },
            { year: "Tahap 2", title: "Pelatihan Teknis Dasar", description: "Pengenalan mesin, alat ukur, dan pembacaan gambar teknik." },
            { year: "Tahap 3", title: "Simulasi Produksi", description: "Praktik langsung dalam alur produksi simulasi industri." },
            { year: "Tahap 4", title: "Sertifikasi Kompetensi", description: "Ujian sertifikasi untuk pengakuan keahlian teknis internasional." },
        ],
        coreValues: [
            { title: "Presisi & Detail", description: "Menanamkan ketelitian tinggi dalam setiap proses manufaktur.", icon: "/icon.png" },
            { title: "Standardisasi 5S", description: "Penerapan konsep Seiri, Seiton, Seiso, Seiketsu, Shitsuke.", icon: "/icon-1.png" },
            { title: "Inovasi Berkelanjutan", description: "Memperkenalkan teknologi industri terbaru kepada peserta.", icon: "/icon-2.png" },
            { title: "Kerja Sama Tim", description: "Membangun koordinasi yang solid antar anggota tim produksi.", icon: "/icon-3.png" },
        ],
        quote: {
            text: "Industri masa depan membutuhkan tangan yang terampil dan pikiran yang disiplin.",
            author: "Management Team",
            role: "Operations Manager",
        },
        awards: ["/vector-1.svg", "/vector-2.svg", "/vector-3.svg", "/vector-4.svg"],
    },
    "caregiver-kaigo": {
        slug: "caregiver-kaigo",
        title: "Caregiver / Kaigo",
        heroTitle: "Menjadi Tenaga Medis Profesional di Jepang",
        heroDescription: "Program khusus pelatihan caregiver (kaigo) dengan standar kurikulum Jepang, mencakup bahasa medis dan keterampilan perawatan lansia.",
        heroImages: ["/service-caregiver-hero.png", "/hero-image.png"],
        stats: [
            { value: "200+", label: "Penempatan Kaigo" },
            { value: "100%", label: "Lulus Ujian" },
            { value: "5+", label: "Fasilitas Praktik" },
            { value: "N3", label: "Target Bahasa" },
            { value: "100%", label: "Bebas Biaya" },
        ],
        journey: [
            { year: "Tahap 1", title: "Bahasa Medis Dasar", description: "Penguasaan kosakata khusus kedokteran dan perawatan lansia." },
            { year: "Tahap 2", title: "Keterampilan Perawatan", description: "Praktik cara membantu mobilitas, memberi makan, dan kebersihan pasien." },
            { year: "Tahap 3", title: "Pemahaman Lansia", description: "Mempelajari psikologi dan cara berkomunikasi dengan lansia di Jepang." },
            { year: "Tahap 4", title: "Persiapan Keberangkatan", description: "Simulasi kerja di panti jompo (Roujin Home) yang sesungguhnya." },
        ],
        coreValues: [
            { title: "Empati Tinggi", description: "Menanamkan rasa kasih sayang dan kesabaran dalam merawat.", icon: "/icon.png" },
            { title: "Higienis Standar", description: "Ketaatan pada protokol kesehatan dan kebersihan yang ketat.", icon: "/icon-1.png" },
            { title: "Komunikasi Santun", description: "Tata krama bahasa Jepang (Keigo) untuk profesi medis.", icon: "/icon-2.png" },
            { title: "Ketangguhan Mental", description: "Siap menghadapi tantangan kerja di bidang sosial-medis.", icon: "/icon-3.png" },
        ],
        quote: {
            text: "Merawat dengan hati, melayani dengan profesionalisme standar dunia.",
            author: "Instruktur Kaigo",
            role: "Lead Trainer",
        },
        awards: ["/vector-1.svg", "/vector-2.svg", "/vector-3.svg", "/vector-4.svg"],
    },
    "hospitality-service": {
        slug: "hospitality-service",
        title: "Hospitality & Service",
        heroTitle: "Karier Cemerlang di Industri Perhotelan Dunia",
        heroDescription: "Pelatihan layanan prima untuk perhotelan, restoran, dan industri jasa internasional.",
        heroImages: ["/service-hospitality-hero.png", "/hero-image.png"],
        stats: [
            { value: "150+", label: "Mitra Hotel" },
            { value: "500+", label: "Alumni Bekerja" },
            { value: "Gold", label: "Standar Layanan" },
            { value: "4", label: "Bahasa Asing" },
            { value: "100%", label: "Jaminan Kerja" },
        ],
        journey: [
            { year: "Bulan 1", title: "Service Mindset", description: "Membangun mentalitas melayani yang proaktif and ramah." },
            { year: "Bulan 2", title: "English for Hospitality", description: "Fokus pada komunikasi bahasa Inggris di bidang perhotelan." },
            { year: "Bulan 3", title: "Keterampilan Teknis", description: "Housekeeping, F&B service, dan Front Office management." },
            { year: "Bulan 4", title: "On-the-Job Training", description: "Magang langsung di hotel atau restoran mitra." },
        ],
        coreValues: [
            { title: "Penampilan Prima", description: "Kerapihan dan profesionalisme dalam presentasi diri.", icon: "/icon.png" },
            { title: "Multikulturalisme", description: "Kemampuan berinteraksi dengan tamu dari berbagai negara.", icon: "/icon-1.png" },
            { title: "Kualitas Tanpa Batas", description: "Memberikan layanan yang melebihi ekspektasi pelanggan.", icon: "/icon-2.png" },
            { title: "Keandalan", description: "Konsistensi dalam memberikan layanan terbaik setiap saat.", icon: "/icon-3.png" },
        ],
        quote: {
            text: "Kunci dari hospitality adalah membuat tamu merasa di rumah meskipun mereka sedang jauh dari rumah.",
            author: "Hospitality Lead",
            role: "Ex-General Manager",
        },
        awards: ["/vector-1.svg", "/vector-2.svg", "/vector-3.svg", "/vector-4.svg"],
    },
    "konstruksi-teknik": {
        slug: "konstruksi-teknik",
        title: "Konstruksi & Teknik",
        heroTitle: "Membangun Infrastruktur Masa Depan",
        heroDescription: "Pelatihan tenaga ahli bidang konstruksi, pengelasan, dan teknik sipil untuk proyek internasional.",
        heroImages: ["/service-konstruksi-hero.png", "/hero-image.png"],
        stats: [
            { value: "100+", label: "Proyek Terlibat" },
            { value: "400+", label: "Tenaga Ahli" },
            { value: "SAFE", label: "Sertifikasi K3" },
            { value: "12", label: "Modul Teknik" },
            { value: "98%", label: "Lulus Uji Fisik" },
        ],
        journey: [
            { year: "Tahap 1", title: "Fisik & Disiplin", description: "Pembentukan fisik dan mental untuk kerja lapangan yang berat." },
            { year: "Tahap 2", title: "Gambar Teknik & Ukur", description: "Kemampuan membaca cetak biru dan menggunakan alat ukur presisi." },
            { year: "Tahap 3", title: "Spesialisasi Teknik", description: "Pelatihan khusus: pengelasan, scaffolding, atau perakitan besi." },
            { year: "Tahap 4", title: "Sertifikasi Lapangan", description: "Ujian praktik langsung di medan konstruksi simulasi." },
        ],
        coreValues: [
            { title: "Safety First", description: "Nol insiden kerja adalah prioritas utama kami.", icon: "/icon.png" },
            { title: "Daya Tahan Tinggi", description: "Mental dan fisik yang kuat menghadapi cuaca dan beban kerja.", icon: "/icon-1.png" },
            { title: "Ketelitian Sipil", description: "Akurasi tinggi dalam perhitungan dan pengerjaan konstruksi.", icon: "/icon-2.png" },
            { title: "Keamanan Proyek", description: "Menghormati kerahasiaan dan keamanan area kerja.", icon: "/icon-3.png" },
        ],
        quote: {
            text: "Bangunan yang kokoh dimulai dari pondasi disiplin yang kuat.",
            author: "Construction Expert",
            role: "Project Supervisor",
        },
        awards: ["/vector-1.svg", "/vector-2.svg", "/vector-3.svg", "/vector-4.svg"],
    },
    "kuliah-sambil-kerja": {
        slug: "kuliah-sambil-kerja",
        title: "Kuliah Sambil Kerja",
        heroTitle: "Dapatkan Gelar Sambil Membangun Karier",
        heroDescription: "Program inovatif yang memungkinkan Anda menempuh pendidikan tinggi sembari bekerja paruh waktu di luar negeri.",
        heroImages: ["/service-kuliah-hero.png", "/hero-image.png"],
        stats: [
            { value: "80+", label: "Universitas Mitra" },
            { value: "200+", label: "Mahasiswa Aktif" },
            { value: "100%", label: "Beasiswa Parsial" },
            { value: "3", label: "Negara Tujuan" },
            { value: "Grad", label: "Jaminan Lulus" },
        ],
        journey: [
            { year: "Persiapan", title: "Akademik & Bahasa", description: "Penyetaraan kualifikasi akademik dan persiapan ujian masuk." },
            { year: "Tahun 1", title: "Adaptasi Budaya", description: "Menyeimbangkan jadwal kuliah dan jam kerja paruh waktu." },
            { year: "Tahun 2", title: "Magang Industri", description: "Mulai bekerja di bidang yang relevan dengan jurusan kuliah." },
            { year: "Tahun 4", title: "Kelulusan & Karir", description: "Wisuda dan transisi menjadi tenaga kerja profesional penuh waktu." },
        ],
        coreValues: [
            { title: "Manajemen Waktu", description: "Keahlian mengatur jadwal belajar dan bekerja secara efisien.", icon: "/icon.png" },
            { title: "Kemandirian Finansial", description: "Mampu membiayai kuliah sendiri melalui kerja keras.", icon: "/icon-1.png" },
            { title: "Intelektualitas", description: "Mengedepankan wawasan luas dan cara berpikir kritis.", icon: "/icon-2.png" },
            { title: "Visi Masa Depan", description: "Memiliki rencana karir jangka panjang yang terukur.", icon: "/icon-3.png" },
        ],
        quote: {
            text: "Pendidikan adalah investasi terbaik, dan pengalaman kerja adalah guru terbaik.",
            author: "Academic Coordinator",
            role: "Education Advisor",
        },
        awards: ["/vector-1.svg", "/vector-2.svg", "/vector-3.svg", "/vector-4.svg"],
    },
};
