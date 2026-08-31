/**
 * DATA PORTFOLIO - HUSAIN AFRIZAL AMINULLAH
 * Fresh Graduate Teknik Manufaktur, Universitas Negeri Yogyakarta (UNY)
 */

const portfolioData = {
  profile: {
    fullName: "Husain Afrizal Aminullah",
    shortName: "Husain Afrizal",
    title: "Teknik Manufaktur",
    institution: "Universitas Negeri Yogyakarta (UNY)",
    statusBadge: "Fresh Graduate • Open to Opportunities",
    greeting: "Halo, Saya Husain Afrizal!",
    bio: "Lulusan Teknik Manufaktur Universitas Negeri Yogyakarta dengan pengalaman di bidang desain rekayasa, simulasi teknik, dan proses manufaktur. Memiliki kompetensi dalam CAD/CAE, CNC machining, reverse engineering, 3D printing, dan engineering problem solving, serta berpengalaman menerapkan kemampuan tersebut dalam proyek akademik dan lingkungan industri. Adaptif, analitis, dan berorientasi pada continuous improvement serta pengembangan solusi teknik yang efektif.",
    avatar: "assets/images/Profil.jpg",
    resumeLink: "#kontak",
    contactQuick: {
      email: "husainafrizal66@gmail.com",
      phone: "+62 819-0487-6856",
      location: "Yogyakarta, Indonesia",
      linkedin: "https://www.linkedin.com/in/husainafrizal/",
      github: "https://github.com/husainafrizal"
    }
  },

  sections: [
    { id: "latar-belakang",      label: "Latar Belakang",      color: "#0F172A", bgTone: "#FFFFFF", textTone: "#0F172A", icon: "home" },
    { id: "pendidikan",          label: "Pendidikan",           color: "#0F172A", bgTone: "#FFFFFF", textTone: "#0F172A", icon: "academic" },
    { id: "project-perkuliahan", label: "Project Perkuliahan",  color: "#0F172A", bgTone: "#FFFFFF", textTone: "#0F172A", icon: "cube" },
    { id: "magang-kerja",        label: "Magang Kerja",         color: "#0F172A", bgTone: "#FFFFFF", textTone: "#0F172A", icon: "briefcase" },
    { id: "studi-independen",    label: "Studi Independen",     color: "#0F172A", bgTone: "#FFFFFF", textTone: "#0F172A", icon: "sparkles" },
    { id: "sertifikat",          label: "Sertifikat",           color: "#0F172A", bgTone: "#FFFFFF", textTone: "#0F172A", icon: "badge" },
    { id: "kontak",              label: "Kontak",               color: "#0F172A", bgTone: "#FFFFFF", textTone: "#0F172A", icon: "mail" }
  ],

  education: [
    {
      id: "edu-01",
      degree: "S1 Teknik Manufaktur",
      institution: "Universitas Negeri Yogyakarta (UNY)",
      period: "Lulus Agustus 2026",
      gpa: "3.79 / 4.00",
      description: "Mempelajari proses dan sistem manufaktur yang mencakup perancangan produk, CAD/CAM, proses pemesinan dan CNC, perancangan jig dan fixture, metrologi, otomasi industri, perancangan sistem manufaktur, serta manajemen kualitas dan perbaikan proses.",
      highlights: [
        "Penegak Kedisiplinan dalam Pengenalan Kehidupan Kampus Mahasiswa Baru (PKKMB) Fakultas Teknik UNY",
        "Anggota Divisi Logistik dalam Kegiatan Heritage Trail Run",
        "Kompetensi Utama: Perancangan Produk, CAD/CAM, Pemesinan CNC, Jig & Fixture, Metrologi, Otomasi & Manajemen Kualitas",
        "Aktif dalam kegiatan kepanitiaan dan organisasi selama perkuliahan untuk menjaga ketertiban, mengelola kebutuhan perlengkapan, dan memastikan kegiatan berjalan dengan baik."
      ],
      details: {
        thesisTitle: "Rancang Bangun & Rekayasa Proses Manufaktur Presisi",
        activities: [
          {
            category: "Kepanitiaan & Organisasi Kampus",
            role: "Penegak Kedisiplinan — PKKMB Fakultas Teknik UNY",
            period: "Kepanitiaan Fakultas",
            image: "assets/Sertifikat/Penegak Kedisiplinan.jpg",
            desc: "Terlibat aktif dalam menjaga ketertiban, kedisiplinan, kepatuhan tata tertib, dan membantu memastikan kegiatan pengenalan kampus bagi mahasiswa baru Fakultas Teknik UNY berjalan dengan baik."
          },
          {
            category: "Kepanitiaan & Event",
            role: "Anggota Divisi Logistik — Heritage Trail Run",
            period: "Event Kepanitiaan",
            image: "assets/Sertifikat/Volunteer Panitia.jpg",
            desc: "Mengelola kebutuhan perlengkapan acara, distribusi logistik di sepanjang jalur event, dan membantu memastikan seluruh sarana kegiatan berjalan dengan lancar."
          }
        ]
      }
    }
  ],

  academicProjectCategories: [
    {
      id: "cat-cad",
      theme: "theme-blue",
      label: "CAD (Computer-Aided Design)",
      shortLabel: "CAD",
      desc: "Perancangan model 3D parametrik, assembly multi-komponen, tooling, jig & fixture, dan drawing kerja teknik presisi.",
      projects: [
        {
          id: "acad-cad-01",
          title: "Tool Design Project: Disc-Type Female Milling Cutter for Screw Rotor Compressor",
          category: "CAD (Computer-Aided Design)",
          shortDesc: "Perancangan disc-type female milling cutter untuk proses pemesinan female rotor pada screw rotor compressor, berfokus pada pemodelan geometri cutter dan penempatan 23 carbide inserts.",
          image: "assets/Projek Kuliah/CAD_Disc-type Milling Cutter_1.jpg",
          tag: "Tool Design & Precision CAD",
          year: "2024",
          details: {
            role: "CAD Designer / Perancang Perkakas",
            tools: ["Autodesk Inventor", "3D CAD"],
            fullDescription: "Merancang disc-type female milling cutter untuk proses pemesinan female rotor pada screw rotor compressor. Perancangan berfokus pada pemodelan geometri cutter dan penempatan 23 carbide inserts berdasarkan data koordinat kompleks yang telah ditentukan.\n\nTeknik pemodelan CAD digunakan untuk memastikan posisi insert, insert slot, geometri cutter, dan komponen pengikat tersusun secara presisi dalam satu assembly.",
            results: [
              "Menghasilkan model 3D dan assembly lengkap dari female milling cutter beserta 23 carbide inserts dan komponen pendukungnya.",
              "Proyek memberikan pengalaman dalam pemodelan komponen presisi dan penerapan CAD untuk desain perkakas industri."
            ],
            skills: ["Computer-Aided Design (CAD)", "Precision Modeling", "Assembly Modeling", "Mechanical Design", "Technical Drawing"],
            galleryImages: [
              "assets/Projek Kuliah/CAD_Disc-type Milling Cutter_1.jpg",
              "assets/Projek Kuliah/CAD_Disc-type Milling Cutter_2.jpg"
            ]
          }
        },
        {
          id: "acad-cad-02",
          title: "Jig & Fixture Cover ON-OFF",
          category: "CAD (Computer-Aided Design)",
          shortDesc: "Perancangan jig & fixture untuk komponen Cover ON-OFF pada sistem pengereman kereta menggunakan locator, stopper, dan toggle clamp.",
          image: "assets/Projek Kuliah/CAD_Jig & Fixture Cover On-Off_3.png",
          tag: "Jig & Fixture Design",
          year: "2025",
          details: {
            role: "Mechanical Designer / Perancang Jig & Fixture",
            tools: ["Autodesk Inventor", "3D CAD", "Toggle Clamp", "Locator", "Stopper"],
            fullDescription: "Merancang jig & fixture untuk komponen Cover ON-OFF pada sistem pengereman kereta. Desain menggunakan locator dan stopper untuk memastikan posisi benda kerja secara horizontal dan longitudinal, sedangkan toggle clamp digunakan untuk memberikan penjepitan yang stabil selama proses pengeboran atau pemotongan.\n\nDesain juga mempertimbangkan aspek manufacturability, efisiensi setup, ergonomi, dan keselamatan operator melalui penggunaan komponen standar serta mekanisme pengoperasian yang sederhana.",
            results: [
              "Menghasilkan desain fixture yang mendukung ketepatan posisi, repeatability, dan efisiensi proses setup.",
              "Desain juga memungkinkan pengoperasian dengan satu tangan dan menempatkan handle penjepit di luar area kerja untuk meningkatkan aspek ergonomi dan keselamatan."
            ],
            skills: ["Computer-Aided Design (CAD)", "Jig & Fixture Design", "Mechanical Design", "Design for Manufacturing (DFM)", "Ergonomic Design", "Problem Solving"],
            galleryImages: [
              "assets/Projek Kuliah/CAD_Jig & Fixture Cover On-Off_3.png",
              "assets/Projek Kuliah/CAD_Jig & Fixture Cover On-Off_2.png",
              "assets/Projek Kuliah/CAD_Jig & Fixture Cover On-Off_1.png"
            ]
          }
        },
        {
          id: "acad-cad-03",
          title: "Polygon Turning Attachment untuk Mesin Bubut Maximat",
          category: "CAD (Computer-Aided Design)",
          shortDesc: "Perancangan dan fabrikasi polygon turning attachment untuk mesin bubut Maximat yang memungkinkan pembentukan profil poligonal pada benda kerja silindris.",
          image: "assets/Projek Kuliah/CAD_Polygon Turning Attachment_1.png",
          tag: "Machine Tool Design",
          year: "2024",
          details: {
            role: "Mechanical Designer / Perancang Perkakas",
            tools: ["Autodesk Inventor", "Mesin Bubut Maximat", "Spur Gear", "Universal Joint", "TPMT0902 Carbide Insert"],
            fullDescription: "Merancang dan melakukan sebagian proses fabrikasi polygon turning attachment untuk mesin bubut Maximat yang memungkinkan pembentukan profil poligonal seperti persegi dan segi enam pada benda kerja silindris.\n\nAttachment menggunakan sistem transmisi roda gigi dengan rasio 2:1, universal joint, serta cutter body dengan tiga TPMT0902 carbide inserts. Sistem dirancang untuk menyinkronkan putaran pahat dan benda kerja selama proses pemesinan.",
            results: [
              "Menghasilkan desain polygon turning attachment dan melakukan sebagian proses fabrikasi komponen.",
              "Proyek memberikan pengalaman dalam desain mekanis, sistem transmisi, sinkronisasi gerakan, dan pengembangan perkakas untuk mesin manufaktur."
            ],
            skills: ["Computer-Aided Design (CAD)", "Mechanical Design", "Gear Transmission", "Machine Tool Design", "Manufacturing"],
            galleryImages: [
              "assets/Projek Kuliah/CAD_Polygon Turning Attachment_1.png",
              "assets/Projek Kuliah/CAD_Polygon Turning Attachment_2.jpg"
            ]
          }
        },
        {
          id: "acad-cad-04",
          title: "Model Vertical Axis Wind Turbine",
          category: "CAD (Computer-Aided Design)",
          shortDesc: "Pengembangan model 3D tiga konfigurasi Vertical Axis Wind Turbine (Savonius, Darrieus, dan Giromill) sebagai geometri dasar analisis CFD dan FEA.",
          image: "assets/Projek Kuliah/CAD_Vertikal Axis Wind Turbine.jpg",
          tag: "3D Modeling & Renewable Energy",
          year: "2025 – 2026",
          details: {
            role: "3D CAD Modeler / Mechanical Design",
            tools: ["Autodesk Inventor", "ANSYS Workbench", "3D CAD"],
            fullDescription: "Mengembangkan model 3D tiga konfigurasi Vertical Axis Wind Turbine (VAWT), yaitu Savonius, Darrieus, dan Giromill, sebagai geometri dasar untuk analisis CFD dan FEA. Ketiga model dibuat menggunakan parameter dimensi yang konsisten, meliputi diameter rotor 750 mm, tinggi 1000 mm, tiga bilah, dan material Aluminium 6061.\n\nModel disiapkan dengan mempertimbangkan konsistensi geometri serta kompatibilitas dengan proses simulasi numerik.",
            results: [
              "Menghasilkan tiga model VAWT dengan parameter geometris yang seragam untuk digunakan sebagai dasar simulasi aerodinamis dan struktural.",
              "Proyek memperkuat kemampuan dalam pemodelan 3D dan integrasi alur kerja CAD–CAE."
            ],
            skills: ["3D Modeling", "Computer-Aided Design (CAD)", "Parametric Modeling", "Mechanical Design", "CAD–CAE Workflow"],
            galleryImages: [
              "assets/Projek Kuliah/CAD_Vertikal Axis Wind Turbine.jpg"
            ]
          }
        }
      ]
    },
    {
      id: "cat-cae",
      theme: "theme-indigo",
      label: "CAE (Computer-Aided Engineering)",
      shortLabel: "CAE",
      desc: "Simulasi dan analisis rekayasa berbasis numerik: Finite Element Analysis (FEA) dan Computational Fluid Dynamics (CFD) untuk validasi aerodinamika dan struktur.",
      projects: [
        {
          id: "acad-cae-01",
          title: "Analisis Komparatif Performa Aerodinamis dan Struktur Tiga Vertical Axis Wind Turbine Berbasis CFD-FEA",
          category: "CAE (FEA & CFD)",
          shortDesc: "Studi komparatif 3 konfigurasi VAWT (Savonius, Darrieus, Giromill) mengevaluasi performa aerodinamis (CFD) dan respons struktural (FEA) pada kecepatan angin perkotaan.",
          image: "assets/Projek Kuliah/CAE_CFD Analysis Pressure & Streamline at 4 ms.jpg",
          tag: "CFD & FEA Coupling",
          year: "2025 – 2026",
          details: {
            role: "CAE / Engineering Simulation",
            tools: ["ANSYS Fluent", "ANSYS Mechanical", "ANSYS Workbench", "Autodesk Inventor"],
            fullDescription: "Melakukan studi komparatif terhadap tiga konfigurasi Vertical Axis Wind Turbine (VAWT), yaitu Savonius, Darrieus, dan Giromill, untuk mengevaluasi performa aerodinamis dan respons struktural pada kondisi angin perkotaan.\n\nSimulasi CFD dilakukan pada kecepatan angin 2, 3, dan 4 m/s dengan parameter model yang konsisten. Analisis mencakup RPM, torque, Tip Speed Ratio (TSR), dan Coefficient of Performance (Cp). Distribusi pressure hasil CFD kemudian digunakan sebagai beban pada FEA untuk mengevaluasi Total Deformation, Equivalent Stress, dan Safety Factor. Grid independence test dan validasi terhadap data eksperimen juga dilakukan untuk mengevaluasi keandalan hasil simulasi.",
            results: [
              "Validasi CFD menghasilkan rata-rata error sebesar 13,39%. Giromill menghasilkan RPM tertinggi pada seluruh variasi kecepatan, mencapai 166,9 RPM pada 4 m/s.",
              "Pada analisis struktural, Giromill menghasilkan respons tertinggi pada 4 m/s dengan Total Deformation sebesar 0,170 mm dan Equivalent Stress sebesar 1,18 MPa.",
              "Seluruh konfigurasi menghasilkan Safety Factor sebesar 15. Hasil menunjukkan Giromill memiliki potensi terbaik untuk operasi berkelanjutan, sedangkan Savonius memiliki keunggulan pada kondisi angin rendah dan karakteristik self-starting."
            ],
            skills: ["Computational Fluid Dynamics (CFD)", "Finite Element Analysis (FEA)", "ANSYS Fluent", "ANSYS Mechanical", "Engineering Analysis", "Simulation Validation"],
            galleryImages: [
              "assets/Projek Kuliah/CAE_CFD Analysis Pressure & Streamline at 4 ms.jpg",
              "assets/Projek Kuliah/CAE_FEA Analysis Total Deformation + Equivalent Stress at 4 ms.jpg"
            ]
          }
        },
        {
          id: "acad-cae-02",
          title: "Aerodynamic Performance Analysis of an Aircraft Model Using ANSYS Fluent",
          category: "CAE (FEA & CFD)",
          shortDesc: "Simulasi CFD menganalisis karakteristik aerodinamika model pesawat berfokus pada lift coefficient (Cl) dan drag coefficient (Cd).",
          image: "assets/Projek Kuliah/CAE_Streamline Pesawat .jpg",
          tag: "CFD — Aerodynamics",
          year: "2025",
          details: {
            role: "CFD Simulation",
            tools: ["ANSYS Fluent", "ANSYS Workbench", "3D CAD Model"],
            fullDescription: "Melakukan simulasi CFD untuk menganalisis karakteristik aerodinamika model pesawat dengan fokus pada lift coefficient (Cl) dan drag coefficient (Cd). Proses meliputi persiapan computational domain, pembuatan mesh, pengaturan boundary condition, konfigurasi solver, dan pemantauan konvergensi.\n\nHasil simulasi dianalisis melalui pressure contour, streamline, velocity vector, dan grafik distribusi tekanan untuk memahami karakteristik aliran di sekitar model.",
            results: [
              "Simulasi mencapai konvergensi pada sekitar 50–60 iterasi dengan hasil Cd = 0,087 dan Cl = 1,001.",
              "Hasil visualisasi memberikan pemahaman mengenai distribusi tekanan, kecepatan, dan pola aliran di sekitar model pesawat."
            ],
            skills: ["Computational Fluid Dynamics (CFD)", "ANSYS Fluent", "Aerodynamics Analysis", "Fluid Mechanics", "Simulation Setup", "Post-Processing"],
            galleryImages: [
              "assets/Projek Kuliah/CAE_Streamline Pesawat .jpg",
              "assets/Projek Kuliah/CAE_Pressure Pesawat .jpg"
            ]
          }
        }
      ]
    },
    {
      id: "cat-cam",
      theme: "theme-teal",
      label: "CAM (Computer-Aided Manufacturing)",
      shortLabel: "CAM",
      desc: "Pemrograman toolpath CNC Milling & Turning, interpretasi gambar kerja 2D/3D, dan simulasi proses pemesinan presisi via Mastercam.",
      projects: [
        {
          id: "acad-cam-01",
          title: "CNC Machining: PARTICOLARE FLANGE & Ford Sierra Rear Brake Disc Conversion (CNC Milling)",
          category: "CAM (Computer-Aided Manufacturing)",
          shortDesc: "Proyek CNC milling untuk dua komponen (PARTICOLARE FLANGE dan Ford Sierra Rear Brake Disc Conversion) mencakup pemodelan CAD, pembuatan toolpath, dan simulasi Mastercam X7.",
          image: "assets/Projek Kuliah/CAM_CNC Miling_2.jpg",
          tag: "CNC Milling & CAM",
          year: "2024",
          details: {
            role: "CAM / CNC Machining",
            tools: ["Mastercam X7", "CNC Milling Machine", "CAD/CAM"],
            fullDescription: "Melakukan proyek CNC milling untuk dua komponen, yaitu PARTICOLARE FLANGE dan Ford Sierra Rear Brake Disc Conversion. Proses mencakup pemodelan CAD 2D dan 3D, penentuan strategi pemesinan, pemilihan pahat, pembuatan toolpath, dan simulasi proses CNC menggunakan Mastercam X7.",
            results: [
              "Menghasilkan toolpath dan simulasi proses pemesinan untuk kedua komponen, dilengkapi dengan gambar kerja teknik dan CAM process plan.",
              "Proyek memberikan pengalaman dalam menerjemahkan geometri CAD menjadi proses manufaktur berbasis CNC."
            ],
            skills: ["Computer-Aided Manufacturing (CAM)", "Computer Numerical Control (CNC)", "CNC Programming", "Mastercam", "Toolpath Generation", "Machining Simulation"],
            galleryImages: [
              "assets/Projek Kuliah/CAM_CNC Miling_2.jpg",
              "assets/Projek Kuliah/CAM_CNC Miling_1.jpg",
              "assets/Projek Kuliah/CAM_CNC Miling_4.jpg",
              "assets/Projek Kuliah/CAM_CNC Miling_3.jpg"
            ]
          }
        },
        {
          id: "acad-cam-02",
          title: "CNC Machining: Chess Knight Piece (CNC Turning)",
          category: "CAM (Computer-Aided Manufacturing)",
          shortDesc: "Pemrograman dan pembuatan bidak kuda catur pada mesin CNC Turning berdasarkan gambar kerja 2D.",
          image: "assets/Projek Kuliah/CAM_CNC Turning_2.jpg",
          tag: "CNC Turning & G-code",
          year: "2024",
          details: {
            role: "CAM / CNC Turning",
            tools: ["Mastercam X7", "CNC Turning Machine", "Mesin Bubut CNC"],
            fullDescription: "Melakukan proses CNC turning untuk membuat bidak kuda catur berdasarkan gambar kerja 2D yang telah tersedia. Fokus proyek berada pada interpretasi gambar kerja, penentuan urutan operasi, pemilihan pahat dan parameter pemotongan, serta pembuatan program CNC.\n\nProgram yang dibuat kemudian diterapkan secara langsung pada mesin CNC turning untuk menghasilkan produk sesuai dengan bentuk yang ditentukan pada gambar kerja.",
            results: [
              "Menghasilkan program CNC turning dan menerapkannya secara langsung pada mesin untuk membuat bidak kuda catur.",
              "Proyek memberikan pengalaman dalam pemrograman CNC, pembacaan gambar kerja, penyusunan urutan pemesinan, dan pengoperasian mesin."
            ],
            skills: ["Computer Numerical Control (CNC)", "CNC Turning", "CNC Programming", "G-code", "Machining Process", "Machine Operation"],
            galleryImages: [
              "assets/Projek Kuliah/CAM_CNC Turning_2.jpg",
              "assets/Projek Kuliah/CAM_CNC Turning_1.jpg",
              "assets/Projek Kuliah/CAM_CNC Turning_3.jpg",
              "assets/Projek Kuliah/MP_CNC.jpg"
            ]
          }
        }
      ]
    },
    {
      id: "cat-mfg",
      theme: "theme-amber",
      label: "Manufacturing Processes",
      shortLabel: "Manufacturing",
      desc: "Praktik dan riset proses manufaktur: 3D Printing Pattern, perlakuan panas karburasi, laser cutting, dan pengecoran logam.",
      projects: [
        {
          id: "acad-mfg-01",
          title: "3D Printing Pattern untuk Pengecoran Logam",
          category: "Manufacturing Processes",
          shortDesc: "Pembuatan pola cetakan berbasis FDM 3D printing untuk proses pengecoran logam konvensional.",
          image: "assets/Projek Kuliah/MP_3D Print Cor_2.jpg",
          tag: "Metal Casting & 3D Printing",
          year: "2025",
          details: {
            role: "Manufacturing Process",
            tools: ["3D CAD", "3D Printer", "FDM 3D Printing", "Peralatan Pengecoran Logam"],
            fullDescription: "Membuat pola cetakan untuk proses pengecoran logam menggunakan teknologi 3D printing. Proses meliputi pembuatan desain pola menggunakan 3D CAD, pencetakan pola, serta proses finishing untuk memperbaiki kondisi permukaan sebelum digunakan dalam pembuatan cetakan.\n\nPola kemudian digunakan dalam rangkaian proses pengecoran yang meliputi persiapan cetakan, peleburan logam, penuangan, dan pembekuan.",
            results: [
              "Menghasilkan pola cetakan berbasis 3D printing yang dapat digunakan dalam proses pengecoran logam.",
              "Proyek memberikan pengalaman dalam integrasi teknologi additive manufacturing dengan proses pattern making dan pengecoran konvensional."
            ],
            skills: ["Metal Casting", "Pattern Making", "Additive Manufacturing", "3D Printing", "Manufacturing Process"],
            galleryImages: [
              "assets/Projek Kuliah/MP_3D Print Cor_2.jpg",
              "assets/Projek Kuliah/MP_3D Print Cor_1.jpg"
            ]
          }
        },
        {
          id: "acad-mfg-02",
          title: "Efek Penambahan Carbon pada Logam dengan Metode Karburasi terhadap Struktur dan Kekerasannya",
          category: "Manufacturing Processes",
          shortDesc: "Eksperimen perlakuan panas karburasi pada baja karbon rendah (850°C, 4 jam) untuk menganalisis perubahan struktur mikro dan kekerasan permukaan.",
          image: "assets/Projek Kuliah/MP_Carburizing_1.jpg",
          tag: "Heat Treatment & Carburizing",
          year: "2024",
          details: {
            role: "Materials Engineering / Heat Treatment",
            tools: ["Furnace", "Optical Microscope", "Vickers Hardness Tester"],
            fullDescription: "Melakukan eksperimen untuk mengetahui pengaruh proses karburasi terhadap struktur dan kekerasan baja karbon rendah. Spesimen dipanaskan pada temperatur 850°C selama 4 jam dalam lingkungan kaya karbon, kemudian didinginkan menggunakan udara.\n\nPerubahan material dianalisis melalui pengamatan struktur mikro menggunakan mikroskop optik dan pengujian kekerasan menggunakan metode Vickers.",
            results: [
              "Hasil pengujian menunjukkan peningkatan kekerasan permukaan dari 77,58 menjadi 141,75 kgf/mm² setelah proses karburasi.",
              "Proyek memberikan pemahaman mengenai proses difusi karbon, perlakuan panas, perubahan struktur mikro, dan pengaruhnya terhadap kekerasan material."
            ],
            skills: ["Heat Treatment", "Carburizing", "Material Characterization", "Metallography", "Hardness Testing"],
            galleryImages: [
              "assets/Projek Kuliah/MP_Carburizing_1.jpg",
              "assets/Projek Kuliah/MP_Struktur Mikro.jpg",
              "assets/Projek Kuliah/MP_Uji Vickers.jpg"
            ]
          }
        },
        {
          id: "acad-mfg-03",
          title: "Laser Cutting untuk Pembuatan Plakat",
          category: "Manufacturing Processes",
          shortDesc: "Praktikum pembuatan plakat berbasis desain digital menggunakan mesin laser cutting.",
          image: "assets/Projek Kuliah/MP_Leser Cutting_1.jpg",
          tag: "Laser Cutting & Digital Mfg",
          year: "2025",
          details: {
            role: "Manufacturing Process",
            tools: ["CAD Software", "Laser Cutting Machine"],
            fullDescription: "Melakukan praktikum laser cutting dengan produk akhir berupa plakat yang dirancang secara mandiri. Desain produk disiapkan dalam format yang sesuai untuk proses pemotongan, kemudian diproses menggunakan mesin laser cutting.",
            results: [
              "Menghasilkan plakat berdasarkan desain mandiri melalui proses laser cutting.",
              "Proyek memberikan pengalaman dalam menyiapkan desain digital untuk proses manufaktur dan memahami penerapan teknologi laser cutting dalam pembuatan produk."
            ],
            skills: ["Laser Cutting", "Digital Manufacturing", "CAD", "Product Design", "Manufacturing Process"],
            galleryImages: [
              "assets/Projek Kuliah/MP_Leser Cutting_1.jpg",
              "assets/Projek Kuliah/MP_Leser Cutting_3.jpg"
            ]
          }
        },
        {
          id: "acad-mfg-04",
          title: "Pengecoran Logam Membentuk Kepala Palu",
          category: "Manufacturing Processes",
          shortDesc: "Perancangan produk, pembuatan pola 3D printing finishing dempul, dan praktik pengecoran logam membentuk kepala palu.",
          image: "assets/Projek Kuliah/MP_Pengecoran_2.jpg",
          tag: "Foundry & Metal Casting",
          year: "2025",
          details: {
            role: "Manufacturing Process",
            tools: ["3D CAD", "3D Printer", "Pola Cetakan", "Peralatan Pengecoran Logam"],
            fullDescription: "Merancang dan membuat pola pengecoran untuk produk kepala palu. Proses dimulai dari pemilihan dan pemodelan produk secara mandiri, dilanjutkan dengan pembuatan pola menggunakan 3D printing.\n\nPola hasil cetak diperhalus menggunakan dempul dan proses finishing, kemudian ditempelkan pada papan untuk persiapan pembuatan cetakan sebelum dilakukan proses pengecoran secara langsung.",
            results: [
              "Menyelesaikan rangkaian proses mulai dari desain produk, pembuatan pola 3D printing, persiapan pola dan cetakan, hingga praktik pengecoran logam secara langsung.",
              "Proyek memberikan pengalaman dalam keseluruhan alur pattern making dan proses pengecoran."
            ],
            skills: ["Metal Casting", "Pattern Making", "3D Printing", "Product Design", "Manufacturing Process"],
            galleryImages: [
              "assets/Projek Kuliah/MP_Pengecoran_2.jpg",
              "assets/Projek Kuliah/MP_Pengecoran_1.jpg",
              "assets/Projek Kuliah/MP_Pengecoran_3.jpg"
            ]
          }
        }
      ]
    },
    {
      id: "cat-qc",
      theme: "theme-emerald",
      label: "Quality & Process Improvement",
      shortLabel: "Quality",
      desc: "Metodologi pengendalian mutu dan optimasi proses manufaktur berbasis statistik (Lean Six Sigma, DMAIC, Pareto, Fishbone, VSM).",
      projects: [
        {
          id: "acad-qc-01",
          title: "Peningkatan Kualitas pada Perusahaan Percetakan dengan Metode Lean Six Sigma",
          category: "Quality & Process Improvement",
          shortDesc: "Proyek peningkatan kualitas percetakan menggunakan metode Lean Six Sigma (DMAIC) dengan Pareto, Fishbone, Why-Why Analysis, dan VSM.",
          image: "assets/Projek Kuliah/Improve_Current Value Stream Mapping.jpg",
          tag: "Lean Six Sigma — DMAIC",
          year: "2024",
          details: {
            role: "Quality & Process Improvement",
            tools: ["Microsoft Excel", "Value Stream Mapping", "Pareto Analysis", "Fishbone Diagram", "Why-Why Analysis"],
            fullDescription: "Melakukan proyek peningkatan kualitas pada perusahaan percetakan menggunakan metode Lean Six Sigma dengan kerangka DMAIC (Define, Measure, Analyze, Improve, Control). Analisis berfokus pada ketidakefisienan proses dan cacat produk, termasuk ketidaksesuaian warna serta keterlambatan produksi akibat permasalahan material.\n\nAnalisis akar masalah dilakukan menggunakan Pareto, Fishbone, Why-Why Analysis, dan Value Stream Mapping untuk menentukan penyebab utama dan peluang perbaikan.",
            results: [
              "Menghasilkan usulan perbaikan berupa kalibrasi mesin, pemeliharaan berkala, dan peningkatan koordinasi dengan pemasok.",
              "Analisis menghasilkan process cycle efficiency yang lebih baik serta tingkat sigma sebesar 3,78."
            ],
            skills: ["Lean Manufacturing", "Lean Six Sigma", "Total Quality Management (TQM)", "Process Improvement", "Root Cause Analysis", "Data Analysis"],
            galleryImages: [
              "assets/Projek Kuliah/Improve_Current Value Stream Mapping.jpg",
              "assets/Projek Kuliah/Improve_Dokumentasi Lapangan.jpg",
              "assets/Projek Kuliah/Improve_Diagram Pareto.jpg",
              "assets/Projek Kuliah/Improve_Fishbone Diagram.jpg"
            ]
          }
        }
      ]
    },
    {
      id: "cat-hse",
      theme: "theme-rose",
      label: "Safety & Ergonomics",
      shortLabel: "Safety & Ergonomics",
      desc: "Perancangan keselamatan kerja (K3), analisis ergonomi tempat kerja (WISE), inspeksi bahaya bengkel pengelasan, dan tabel HIRARC.",
      projects: [
        {
          id: "acad-hse-01",
          title: "Evaluasi Penerapan Work Improvement for Small Enterprises (WISE) pada UMKM Percetakan",
          category: "Safety & Ergonomics",
          shortDesc: "Evaluasi ergonomi dan keselamatan kerja UMKM percetakan menggunakan metode WISE mencakup material handling, tata letak stasiun kerja, APD, dan K3.",
          image: "assets/Projek Kuliah/Safety_Wise_2.jpg",
          tag: "Industrial Ergonomics — WISE",
          year: "2024",
          details: {
            role: "Industrial Ergonomics / Safety Engineering",
            tools: ["WISE Methodology", "Workplace Assessment", "Risk Identification"],
            fullDescription: "Melakukan evaluasi ergonomi dan keselamatan kerja pada UMKM percetakan menggunakan metode Work Improvement for Small Enterprises (WISE). Evaluasi mencakup penanganan material, tata letak tempat kerja, penggunaan alat pelindung diri (APD), pemeliharaan mesin, penyimpanan, dan kondisi lingkungan kerja.\n\nPermasalahan dianalisis berdasarkan prinsip perbaikan tempat kerja yang praktis dan berbiaya rendah.",
            results: [
              "Mengidentifikasi 11 permasalahan utama dan menyusun usulan perbaikan, seperti penggunaan rak penyimpanan bertingkat, penghilangan peralatan yang tidak digunakan, dan penyediaan peralatan keselamatan.",
              "Proyek memperkuat kemampuan dalam identifikasi risiko dan penerapan prinsip ergonomi pada lingkungan kerja."
            ],
            skills: ["Industrial Ergonomics", "Workplace Safety", "WISE Methodology", "Risk Identification", "Problem Solving"],
            galleryImages: [
              "assets/Projek Kuliah/Safety_Wise_2.jpg",
              "assets/Projek Kuliah/Safety_Wise_1.jpg"
            ]
          }
        },
        {
          id: "acad-hse-02",
          title: "Inspeksi K3 untuk Bengkel Pengelasan",
          category: "Safety & Ergonomics",
          shortDesc: "Analisis K3 terhadap potensi bahaya pada lingkungan bengkel pengelasan (asap, panas, percikan api, bahaya listrik, kebakaran, dan penanganan material).",
          image: "assets/Projek Kuliah/Safety_Inspeksi K3.png",
          tag: "Safety Inspection & Hazard ID",
          year: "2024",
          details: {
            role: "Occupational Safety / Safety Engineering",
            tools: ["Safety Inspection Checklist", "Hazard Identification", "Risk Assessment"],
            fullDescription: "Melakukan analisis K3 terhadap potensi bahaya pada lingkungan bengkel pengelasan secara teoritis. Analisis tidak dilakukan melalui observasi lapangan secara langsung, tetapi berdasarkan aktivitas, peralatan, material, dan kondisi kerja yang umum terdapat pada bengkel pengelasan.\n\nPotensi bahaya dianalisis berdasarkan sumber dan kemungkinan dampaknya, seperti asap pengelasan, panas, percikan api, bahaya listrik, kebakaran, kebisingan, dan penanganan material.",
            results: [
              "Menghasilkan identifikasi terstruktur terhadap potensi bahaya serta kemungkinan dampaknya terhadap pekerja dan lingkungan kerja.",
              "Proyek memperkuat pemahaman mengenai identifikasi bahaya dan tindakan pencegahan pada aktivitas pengelasan."
            ],
            skills: ["Occupational Safety", "Hazard Identification", "Safety Inspection", "Risk Assessment", "Problem Solving"],
            galleryImages: [
              "assets/Projek Kuliah/Safety_Inspeksi K3.png"
            ]
          }
        },
        {
          id: "acad-hse-03",
          title: "Tabel HIRARC untuk Bengkel Pengelasan",
          category: "Safety & Ergonomics",
          shortDesc: "Penyusunan tabel HIRARC (Hazard Identification, Risk Assessment and Risk Control) untuk aktivitas dan stasiun kerja bengkel pengelasan.",
          image: "assets/Projek Kuliah/Safety_Tabel HIRARC.jpg",
          tag: "Risk Assessment — HIRARC",
          year: "2024",
          details: {
            role: "Safety Engineering / Risk Assessment",
            tools: ["HIRARC", "Risk Assessment Matrix", "Hazard Identification"],
            fullDescription: "Menyusun tabel Hazard Identification, Risk Assessment and Risk Control (HIRARC) untuk menganalisis potensi bahaya pada aktivitas bengkel pengelasan. Tugas dilakukan secara teoritis berdasarkan aktivitas dan kondisi kerja yang diperkirakan, bukan melalui survei atau observasi lapangan secara langsung.\n\nSetiap aktivitas dianalisis berdasarkan sumber bahaya, kemungkinan konsekuensi, tingkat kemungkinan dan keparahan risiko, serta tindakan pengendalian yang sesuai.",
            results: [
              "Menghasilkan tabel HIRARC yang memuat identifikasi bahaya, penilaian tingkat risiko, dan rekomendasi pengendalian untuk aktivitas pengelasan.",
              "Proyek meningkatkan kemampuan dalam melakukan penilaian risiko secara sistematis dan menentukan prioritas pengendalian."
            ],
            skills: ["HIRARC", "Hazard Identification", "Risk Assessment", "Risk Control", "Occupational Safety", "Problem Solving"],
            galleryImages: [
              "assets/Projek Kuliah/Safety_Tabel HIRARC.jpg"
            ]
          }
        }
      ]
    }
  ],

  internships: [
    {
      id: "magang-01",
      company: "PT. Kalbe Morinaga Indonesia",
      position: "CAD Intern",
      department: "MDP (Manufacturing Development and Planning)",
      period: "13 November 2025 - 10 Juli 2026 (8 Bulan)",
      location: "Jl. Raya Kawasan Industri Indotaisei, Sektor 1A, Blok Q1, Kalihurip, Cikampek, Karawang, West Java 41373",
      category: "MAGANG KERJA INDUSTRI",
      mainResponsibility: "Berperan sebagai CAD Engineering Intern dalam mendukung kebutuhan Manufacturing Development & Planning, khususnya pada machinery mapping, reverse engineering, design support, dan pengembangan komponen untuk kebutuhan produksi.",
      description: "Aktivitas dilakukan melalui kombinasi pengukuran langsung di area produksi (Genba), pembuatan dan revisi model 3D, pembuatan engineering drawing, geometry preparation untuk simulasi, serta pengembangan komponen melalui 3D printing.",
      summaryResults: "Menghasilkan berbagai 3D CAD models, technical drawings, simulation-ready geometries, serta prototipe komponen hasil reverse engineering. Pekerjaan mendukung kebutuhan dokumentasi mesin, persiapan simulasi CAE, design improvement, dan penyelesaian permasalahan komponen pada lingkungan produksi.",
      toolsGrouped: {
        cad: ["Autodesk Inventor", "AutoCAD"],
        manufacturing: ["3D Printing"],
        measurement: ["Engineering Measurement Tools", "Metrology Tools"],
        documentation: ["Engineering Drawing", "Technical Documentation"]
      },
      skills: ["Computer-Aided Design (CAD)", "Reverse Engineering", "3D Modeling", "Technical Drawing", "Manufacturing Engineering", "Problem Solving", "Engineering Support"],
      projectsCount: 16,
      categories: [
        {
          id: "intern-cat-cfd",
          theme: "theme-cyan",
          label: "CFD Design Support",
          shortLabel: "CFD Support",
          desc: "Geometry Preparation and Design Revision for Simulation. Mendukung kebutuhan simulasi CAE melalui persiapan dan revisi geometri CAD berdasarkan kondisi aktual mesin serta kebutuhan simulasi.",
          results: "Menghasilkan simulation-ready CAD geometry, meshing-ready geometry, internal detailed geometry, dan simplified CDT geometry. Pekerjaan membantu mengurangi permasalahan geometri pada tahap pre-processing serta memastikan model lebih sesuai dengan kebutuhan analisis.",
          projects: [
            {
              id: "intern-cfd-01",
              title: "Project Highlight 1 — Geometry: Internal vs CDT",
              category: "CFD Design Support",
              shortDesc: "Membuat dua tingkat representasi geometri untuk kebutuhan simulasi yang berbeda: Geometri Internal (detail) dan Geometri CDT (disederhanakan).",
              image: "assets/Magang/CFD Design Support_1.png",
              tag: "Geometry Preparation & Simplification",
              year: "2025 – 2026",
              details: {
                role: "CAD / CFD Design Support",
                tools: ["Autodesk Inventor", "CFD Pre-Processing Tools", "3D CAD"],
                fullDescription: "Membuat dua tingkat representasi geometri untuk kebutuhan simulasi yang berbeda. Geometri Internal mempertahankan detail yang diperlukan untuk analisis internal, sedangkan geometri CDT disederhanakan untuk memenuhi kebutuhan computational domain dan proses simulasi.\n\nPerbedaan geometri ditujukan untuk menyesuaikan kompleksitas model dengan tujuan analisis, bukan sebagai perbandingan hasil simulasi.",
                results: [
                  "Menghasilkan dua tingkat representasi geometri (Internal & CDT) yang disesuaikan dengan computational domain simulasi.",
                  "Memenuhi kebutuhan proses pre-processing dan analisis CFD tanpa kendala singularitas geometris."
                ],
                skills: ["CAD for CFD", "Geometry Preparation", "Geometry Cleanup", "Surface Repair", "CAD Simplification", "Design Revision", "Engineering Measurement"]
              }
            },
            {
              id: "intern-cfd-02",
              title: "Project Highlight 2 — Redesain Keong",
              category: "CFD Design Support",
              shortDesc: "Revisi geometri komponen Keong untuk mengatasi ketidaksesuaian antara diameter inlet dan ukuran top chamber.",
              image: "assets/Magang/CFD Design Support_2.png",
              tag: "Geometry Revision & CAD Repair",
              year: "2025 – 2026",
              details: {
                role: "CAD / CFD Design Support",
                tools: ["Autodesk Inventor", "CFD Pre-Processing Tools", "3D CAD"],
                fullDescription: "Melakukan revisi geometri pada komponen Keong setelah ditemukan ketidaksesuaian antara diameter inlet dan ukuran top chamber. Desain disesuaikan untuk memperbaiki hubungan geometris antarbagian serta menghasilkan model yang lebih representatif terhadap kebutuhan aktual dan simulasi.",
                results: [
                  "Memperbaiki hubungan geometris antara diameter inlet dan top chamber pada komponen Keong.",
                  "Menghasilkan model CAD yang presisi dan representatif untuk simulasi dan referensi fisik."
                ],
                skills: ["CAD for CFD", "Geometry Preparation", "Geometry Cleanup", "Surface Repair", "CAD Simplification", "Design Revision", "Engineering Measurement"]
              }
            },
            {
              id: "intern-cfd-03",
              title: "Project Highlight 3 — Redesain EFB",
              category: "CFD Design Support",
              shortDesc: "Pembaruan model CAD mesin External Fluidized Bed (EFB) berdasarkan kondisi dan dimensi aktual yang lebih akurat.",
              image: "assets/Magang/CFD Design Support_3.png",
              tag: "CAD Model Update & Verification",
              year: "2025 – 2026",
              details: {
                role: "CAD / CFD Design Support",
                tools: ["Autodesk Inventor", "CFD Pre-Processing Tools", "3D CAD"],
                fullDescription: "Memperbarui model CAD mesin External Fluidized Bed (EFB) berdasarkan kondisi dan dimensi yang lebih akurat. Proses dilakukan dengan mengoreksi sejumlah ukuran dan fitur geometri pada model sebelumnya sehingga dapat digunakan sebagai referensi engineering yang lebih representatif.",
                results: [
                  "Mengoreksi ukuran dan fitur geometri pada model CAD mesin EFB.",
                  "Menyediakan referensi engineering digital yang akurat untuk simulasi dan pemeliharaan."
                ],
                skills: ["CAD for CFD", "Geometry Preparation", "Geometry Cleanup", "Surface Repair", "CAD Simplification", "Design Revision", "Engineering Measurement"]
              }
            },
            {
              id: "intern-cfd-04",
              title: "Project Highlight 4 — Nozzle Spray Dryer",
              category: "CFD Design Support",
              shortDesc: "Pengembangan kembali model nozzle Spray Dryer dengan penambahan geometri bagian internal berbasis pengukuran langsung.",
              image: "assets/Magang/CFD Design Support_4.png",
              tag: "Internal Geometry Modeling",
              year: "2025 – 2026",
              details: {
                role: "CAD / CFD Design Support",
                tools: ["Autodesk Inventor", "CFD Pre-Processing Tools", "3D CAD", "Measurement Tools"],
                fullDescription: "Mengembangkan kembali model nozzle Spray Dryer dengan menambahkan geometri bagian internal yang sebelumnya belum tersedia. Dimensi internal diperoleh melalui pengukuran langsung terhadap komponen aktual, kemudian digunakan untuk membangun model CAD yang lebih lengkap.",
                results: [
                  "Menyelesaikan pemodelan 3D internal geometri Nozzle Spray Dryer dari hasil pengukuran Genba.",
                  "Menyediakan model CAD 3D utuh untuk keperluan simulasi aliran spray dryer."
                ],
                skills: ["CAD for CFD", "Geometry Preparation", "Geometry Cleanup", "Surface Repair", "CAD Simplification", "Design Revision", "Engineering Measurement"]
              }
            }
          ]
        },
        {
          id: "intern-cat-machinery",
          theme: "theme-slate",
          label: "Production Machinery Mapping",
          shortLabel: "Machinery Mapping",
          desc: "Digitalization of Production Machines for Improvement & Database. Melakukan digitalisasi komponen dan mesin produksi melalui pembuatan dokumentasi CAD berdasarkan kondisi aktual di lapangan (Genba).",
          results: "Menghasilkan dokumentasi 3D CAD dan 2D engineering drawing dari berbagai komponen mesin produksi. Data hasil mapping menjadi basis dokumentasi teknis yang dapat digunakan untuk mendukung kebutuhan engineering dan pengembangan improvement.",
          projects: [
            {
              id: "intern-map-01",
              title: "Project Highlight 1 — 3D Mapping FnP Machinery: Cartoner",
              category: "Production Machinery Mapping",
              shortDesc: "3D mapping komponen mesin Cartoner (Carton Magazine, Carton Feeder, dan Product Compression) berbasis pengukuran Genba.",
              image: "assets/Magang/Mapping 1_2.png",
              tag: "3D Machinery Mapping",
              year: "2025 – 2026",
              details: {
                role: "CAD Engineering / Machinery Mapping",
                tools: ["Autodesk Inventor", "AutoCAD", "Measurement Tools", "Engineering Drawing"],
                fullDescription: "Melakukan 3D mapping pada beberapa komponen mesin Cartoner, termasuk Carton Magazine, Carton Feeder, dan Product Compression. Pengukuran dilakukan terhadap komponen aktual untuk menghasilkan model CAD yang merepresentasikan kondisi mesin di lapangan.",
                results: [
                  "Menghasilkan model 3D CAD presisi dari komponen Carton Magazine, Carton Feeder, dan Product Compression.",
                  "Dokumentasi digunakan sebagai referensi digital pendukung kebutuhan produksi dan maintenance."
                ],
                skills: ["Production Machinery Mapping", "3D CAD Modeling", "Engineering Measurement", "Technical Drawing", "Digitalization", "Manufacturing Engineering"]
              }
            },
            {
              id: "intern-map-02",
              title: "Project Highlight 2 — 3D Mapping FnP Machinery: Cartoner — Table Box",
              category: "Production Machinery Mapping",
              shortDesc: "Pemetaan dan pemodelan 3D pada bagian Table Box mesin Cartoner berdasarkan kondisi aktual di lapangan.",
              image: "assets/Magang/Mapping 2_1.png",
              tag: "Cartoner Digital Twin",
              year: "2025 – 2026",
              details: {
                role: "CAD Engineering / Machinery Mapping",
                tools: ["Autodesk Inventor", "AutoCAD", "Measurement Tools", "Engineering Drawing"],
                fullDescription: "Melakukan pemetaan dan pemodelan 3D pada bagian Table Box mesin Cartoner berdasarkan kondisi aktual. Model digunakan sebagai dokumentasi digital untuk mendukung kebutuhan engineering dan referensi improvement.",
                results: [
                  "Menyelesaikan pemodelan digital 3D Table Box mesin Cartoner.",
                  "Menyediakan basis dokumentasi teknik untuk perencanaan perbaikan dan perawatan stasiun kerja."
                ],
                skills: ["Production Machinery Mapping", "3D CAD Modeling", "Engineering Measurement", "Technical Drawing", "Digitalization", "Manufacturing Engineering"]
              }
            },
            {
              id: "intern-map-03",
              title: "Project Highlight 3 — 3D Mapping FnP Machinery: Stepper",
              category: "Production Machinery Mapping",
              shortDesc: "3D mapping komponen mesin Stepper melalui pengukuran langsung di lapangan dan pemodelan CAD.",
              image: "assets/Magang/Mapping 3_1.png",
              tag: "Stepper Machinery Mapping",
              year: "2025 – 2026",
              details: {
                role: "CAD Engineering / Machinery Mapping",
                tools: ["Autodesk Inventor", "AutoCAD", "Measurement Tools", "Engineering Drawing"],
                fullDescription: "Melakukan 3D mapping pada komponen mesin Stepper melalui pengukuran langsung dan pemodelan CAD. Hasil model digunakan sebagai bagian dari dokumentasi digital mesin produksi.",
                results: [
                  "Menghasilkan model CAD 3D komponen mesin Stepper berbasis pengukuran aktual.",
                  "Memperkuat database digitalisasi mesin produksi pabrik."
                ],
                skills: ["Production Machinery Mapping", "3D CAD Modeling", "Engineering Measurement", "Technical Drawing", "Digitalization", "Manufacturing Engineering"]
              }
            }
          ]
        },
        {
          id: "intern-cat-re",
          theme: "theme-violet",
          label: "Reverse Engineering",
          shortLabel: "Reverse Engineering",
          desc: "Design Improvement and 3D-Printed Replacement Parts for Production Issues. Melakukan reverse engineering untuk membuat ulang, menyesuaikan, dan mengembangkan komponen ketika data desain asli tidak tersedia.",
          results: "Menghasilkan beberapa komponen hasil reverse engineering dan design improvement, termasuk prototipe 3D printed untuk kebutuhan produksi dan engineering. Proses membantu mempercepat pengembangan komponen serta menyediakan alternatif terhadap proses pengadaan komponen tertentu.",
          projects: [
            {
              id: "intern-re-01",
              title: "Project Highlight 1 — RE: Fork Pusher",
              category: "Reverse Engineering",
              shortDesc: "Reverse engineering komponen Fork Pusher yang mengalami kerusakan berulang, disesuaikan untuk diproduksi via 3D printing internal.",
              image: "assets/Magang/RE_1.png",
              tag: "Failure Resolution & 3D Print RE",
              year: "2025 – 2026",
              details: {
                role: "Reverse Engineering / CAD Engineering",
                tools: ["Autodesk Inventor", "3D Printer", "Measurement Tools", "Engineering Drawing"],
                fullDescription: "Melakukan reverse engineering pada komponen Fork Pusher yang mengalami kerusakan berulang. Desain dievaluasi dan disesuaikan untuk mengatasi permasalahan operasional serta mengurangi potensi frekuensi kerusakan.\n\nDesain akhir juga disesuaikan dengan kemampuan 3D printing yang tersedia di perusahaan sehingga komponen dapat diproduksi dengan tetap mempertahankan fungsi yang dibutuhkan.",
                results: [
                  "Menghasilkan redesign Fork Pusher yang mengeliminasi potensi kerusakan berulang pada mesin.",
                  "Komponen dapat diproduksi secara internal menggunakan 3D printer pabrik."
                ],
                skills: ["Reverse Engineering", "Design Improvement", "3D CAD Modeling", "3D Printing", "Prototyping", "Design Iteration", "Problem Solving"]
              }
            },
            {
              id: "intern-re-02",
              title: "Project Highlight 2 — RE: Gripper Robot Arm",
              category: "Reverse Engineering",
              shortDesc: "Reverse engineering dan konsep gripper baru untuk penanganan kaleng 2 lapis tanpa lepas saat gerakan robot.",
              image: "assets/Magang/RE_2.png",
              tag: "Robot Gripper Concept & RE",
              year: "2025 – 2026",
              details: {
                role: "Reverse Engineering / CAD Engineering",
                tools: ["Autodesk Inventor", "3D Printer", "Measurement Tools", "Engineering Drawing"],
                fullDescription: "Melakukan reverse engineering dan pengembangan konsep gripper baru untuk proses pengambilan kaleng. Desain clamp sebelumnya belum mampu menahan tutup kaleng secara aman selama proses handling.\n\nKonsep baru dikembangkan dengan mekanisme penjepitan pada bagian badan kaleng, dengan mempertimbangkan clearance antar kaleng dan karton, konfigurasi dua lapis, potensi interferensi saat membuka dan menutup, serta kebutuhan untuk meminimalkan modifikasi pada sistem robot yang sudah ada.\n\nPengembangan dibatasi pada tahap konsep dan prototyping.",
                results: [
                  "Mengembangkan konsep mekanisme gripper baru berbasis clamping badan kaleng untuk penanganan 2 lapis.",
                  "Membuat prototipe fisik 3D print untuk pengujian interferensi dan validasi konsep awal."
                ],
                skills: ["Reverse Engineering", "Design Improvement", "3D CAD Modeling", "3D Printing", "Prototyping", "Design Iteration", "Problem Solving"]
              }
            },
            {
              id: "intern-re-03",
              title: "Project Highlight 3 — Mounting Bracket",
              category: "Reverse Engineering",
              shortDesc: "Reverse engineering mounting bracket tipis 1 mm menggunakan carbon fiber reinforcement dan solid infill 3D printing.",
              image: "assets/Magang/RE_3.png",
              tag: "Carbon Fiber 3D Print Bracket",
              year: "2025 – 2026",
              details: {
                role: "Reverse Engineering / CAD Engineering",
                tools: ["Autodesk Inventor", "3D Printer", "Measurement Tools", "Engineering Drawing"],
                fullDescription: "Melakukan reverse engineering dan 3D printing mounting bracket berdasarkan engineering request dan dimensi referensi. Ketebalan desain awal sebesar 1 mm menjadi tantangan bagi proses 3D printing yang tersedia.\n\nDesain dan pendekatan pencetakan kemudian disesuaikan dengan menggunakan carbon fiber reinforcement dan solid infill untuk meningkatkan kemampuan struktural komponen hasil cetak.",
                results: [
                  "Mengatasi kendala struktural ketebalan 1 mm melalui penguatan Carbon Fiber reinforcement.",
                  "Menghasilkan prototipe mounting bracket yang kokoh dan presisi untuk uji pasang."
                ],
                skills: ["Reverse Engineering", "Design Improvement", "3D CAD Modeling", "3D Printing", "Prototyping", "Design Iteration", "Problem Solving"]
              }
            },
            {
              id: "intern-re-04",
              title: "Project Highlight 4 — U6 Wall Mount",
              category: "Reverse Engineering",
              shortDesc: "Reverse engineering dan redesain iteratif U6 Pro Wall Mount untuk penyempurnaan penguncian dan kekuatan struktur.",
              image: "assets/Magang/RE_4.png",
              tag: "Iterative Redesign & Product Fitting",
              year: "2025 – 2026",
              details: {
                role: "Reverse Engineering / CAD Engineering",
                tools: ["Autodesk Inventor", "3D Printer", "Measurement Tools", "Engineering Drawing"],
                fullDescription: "Melakukan reverse engineering dan iterative redesign pada U6 Pro Wall Mount untuk meningkatkan presisi pemasangan dan kemampuan penguncian. Beberapa iterasi dilakukan berdasarkan hasil pencetakan dan user feedback, dengan fokus pada jalur penguncian, kekuatan struktur, ketebalan komponen, dan kemudahan pemasangan.\n\nHasil iterasi akhir memberikan alignment yang lebih baik, pemasangan dan pelepasan yang lebih mudah, serta penguncian yang lebih kuat. Desain diterima oleh pengguna dan proses reverse engineering dinyatakan selesai.",
                results: [
                  "Menghasilkan desain U6 Pro Wall Mount presisi dengan mekanisme penguncian yang kokoh.",
                  "Desain iteratif disetujui pengguna dan berhasil dipasang sempurna."
                ],
                skills: ["Reverse Engineering", "Design Improvement", "3D CAD Modeling", "3D Printing", "Prototyping", "Design Iteration", "Problem Solving"]
              }
            },
            {
              id: "intern-re-05",
              title: "Project Highlight 5 — Controller Box",
              category: "Reverse Engineering",
              shortDesc: "Reverse engineering Controller Box dan evaluasi faktor printability proses 3D printing FDM.",
              image: "assets/Magang/RE_5.png",
              tag: "Enclosure RE & Printability Evaluation",
              year: "2025 – 2026",
              details: {
                role: "Reverse Engineering / CAD Engineering",
                tools: ["Autodesk Inventor", "3D Printer", "Measurement Tools", "Engineering Drawing"],
                fullDescription: "Melakukan reverse engineering dan penyesuaian desain Controller Box berdasarkan spesifikasi yang telah ditentukan. Dimensi model disesuaikan dengan kemampuan proses 3D printing yang tersedia.\n\nPada proses pencetakan terjadi kegagalan akibat permasalahan filament feeding, diikuti bagian hasil cetak yang terlewat ketika proses dilanjutkan kembali. Permasalahan kemudian dianalisis sebagai bagian dari evaluasi printability dan faktor desain yang dapat memengaruhi keberhasilan proses pencetakan.",
                results: [
                  "Menghasilkan model 3D CAD Controller Box yang disesuaikan dengan volume cetak printer.",
                  "Menganalisis root cause failure filament feeding untuk rekomendasi optimasi pencetakan berikutnya."
                ],
                skills: ["Reverse Engineering", "Design Improvement", "3D CAD Modeling", "3D Printing", "Prototyping", "Design Iteration", "Problem Solving"]
              }
            }
          ]
        },
        {
          id: "intern-cat-support",
          theme: "theme-emerald",
          label: "Engineering Support & Project Management",
          shortLabel: "Engineering Support",
          desc: "Cross-Functional Support for GA, CAE, and Company Projects. Memberikan dukungan teknis pada berbagai kebutuhan lintas departemen di luar proyek utama.",
          results: "Mendukung penyelesaian beberapa kebutuhan teknis lintas fungsi melalui pembuatan dan revisi CAD, persiapan geometri simulasi, serta pengembangan produk berbasis 3D printing.",
          projects: [
            {
              id: "intern-sup-01",
              title: "Project Highlight 1 — GA Support: Revisi Layout Area Perusahaan",
              category: "Engineering Support & Project Management",
              shortDesc: "Revisi denah layout pabrik (titik patroli satpam, lokasi tempat sampah, dan titik tanaman) di AutoCAD untuk audit perusahaan.",
              image: "assets/Magang/Titik.png",
              tag: "Plant Layout & Audit Support",
              year: "2025 – 2026",
              details: {
                role: "Engineering Support / Project Support",
                tools: ["AutoCAD", "Autodesk Inventor", "Engineering Drawing"],
                fullDescription: "Melakukan revisi titik patroli satpam, lokasi tempat sampah, dan titik tanaman pada denah perusahaan menggunakan AutoCAD. Revisi dilakukan untuk memperbarui dokumentasi layout dan mendukung kebutuhan audit perusahaan.",
                results: [
                  "Memperbarui gambar denah 2D AutoCAD perusahaan secara presisi.",
                  "Mendukung kelancaran proses audit fasilitas perusahaan."
                ],
                skills: ["Engineering Support", "AutoCAD", "3D Modeling", "Cross-Functional Collaboration", "Project Coordination", "3D Printing", "Technical Problem Solving"]
              }
            },
            {
              id: "intern-sup-02",
              title: "Project Highlight 2 — CAE Support: Geometry Revision for Dryer Area",
              category: "Engineering Support & Project Management",
              shortDesc: "Membantu intern CAE dalam membenahi dan menyesuaikan geometri jalur pipa area Dryer untuk persiapan simulasi.",
              image: "assets/Magang/Jalur Pipa_1.png",
              tag: "CAE Support & Piping Geometry",
              year: "2025 – 2026",
              details: {
                role: "Engineering Support / Project Support",
                tools: ["Autodesk Inventor", "AutoCAD", "Engineering Drawing"],
                fullDescription: "Membantu intern CAE dalam memperbaiki dan menyesuaikan geometri jalur pipa pada area Dryer untuk kebutuhan simulasi CAE. Dukungan difokuskan pada penyesuaian geometri agar model lebih sesuai dengan kebutuhan simulation preparation.",
                results: [
                  "Memperbaiki kekeliruan geometri pipa area Dryer untuk tim simulasi CAE.",
                  "Mempercepat alur kerja persiapan simulasi aliran/termal pabrik."
                ],
                skills: ["Engineering Support", "AutoCAD", "3D Modeling", "Cross-Functional Collaboration", "Project Coordination", "3D Printing", "Technical Problem Solving"]
              }
            },
            {
              id: "intern-sup-03",
              title: "Project Highlight 3 — Company Model: 3D-Printed Company Layout",
              category: "Engineering Support & Project Management",
              shortDesc: "Redesain dan 3D printing maket denah perusahaan (ukuran A3 & A4) untuk cenderamata perpisahan dan showcase.",
              image: "assets/Magang/Mockup_3.jpeg",
              tag: "3D Printed Layout Showcase",
              year: "2025 – 2026",
              details: {
                role: "Engineering Support / Project Support",
                tools: ["Autodesk Inventor", "3D Printing", "Engineering Drawing"],
                fullDescription: "Melakukan redesain maket denah perusahaan agar sesuai dengan batas toleransi dan kemampuan proses 3D printing. Model dikembangkan dalam ukuran A3 dan A4 untuk kebutuhan hadiah perpisahan karyawan serta showcase antarperusahaan.",
                results: [
                  "Menghasilkan 3D printed maket layout fisik pabrik berukuran A3 dan A4.",
                  "Digunakan sebagai kenang-kenangan perpisahan karyawan dan media showcase antarperusahaan."
                ],
                skills: ["Engineering Support", "AutoCAD", "3D Modeling", "Cross-Functional Collaboration", "Project Coordination", "3D Printing", "Technical Problem Solving"]
              }
            },
            {
              id: "intern-sup-04",
              title: "Project Highlight 4 — Koordinasi Tim Intern & Weekly Technical Review",
              category: "Engineering Support & Project Management",
              shortDesc: "Berpartisipasi dan memimpin koordinasi serta weekly technical review tim intern untuk monitoring progres dan sharing teknis.",
              image: "assets/Magang/Weekly Meeting.jpeg",
              tag: "Team Leadership & Technical Review",
              year: "2025 – 2026",
              details: {
                role: "Intern Team Coordination",
                tools: ["Presentation Tools", "Technical Documentation"],
                fullDescription: "Berpartisipasi dalam koordinasi dan weekly technical review bersama tim intern untuk membahas perkembangan pekerjaan, kendala teknis, serta rencana aktivitas berikutnya.\n\nKegiatan digunakan sebagai sarana untuk menyampaikan progres, melakukan pertukaran pengetahuan teknis, dan memastikan pekerjaan berjalan sesuai kebutuhan departemen.",
                results: [
                  "Menjaga kelancaran komunikasi dan monitoring progres seluruh anggota tim intern.",
                  "Mendukung penyelesaian tepat waktu seluruh tugas departemen MDP."
                ],
                skills: ["Teamwork", "Technical Communication", "Project Coordination", "Progress Monitoring", "Problem Solving"]
              }
            }
          ]
        }
      ]
    }
  ],

  independentStudies: [
    {
      id: "stupen-01",
      program: "Engineering Simulation #Bertaji by CADFEM Ansys : Finite Element Analysis (FEA)",
      company: "PT CADFEM Simulation Technology Indonesia",
      role: "Finite Element Analysis (FEA) Simulation Specialist",
      period: "6 September 2024 - 31 Desember 2024 (4 Bulan)",
      location: "Daring / Full Online",
      category: "STUDI INDEPENDEN BERSERTIFIKAT",
      summary: "Program Studi Independen Finite Element Analysis secara penuh daring di PT CADFEM Simulation Technology Indonesia melalui pembelajaran mingguan, tugas mandiri berbasis web, video pembelajaran, latihan soal, dan praktik simulasi menggunakan ANSYS. Mempelajari dasar hingga lanjutan analisis struktur, meliputi stress and strain, keseimbangan lokal, analisis linear dan nonlinear, analisis dinamik, thermal strain, serta analisis struktur tingkat lanjut. Menerapkan materi melalui Renewable Energy Capstone Project berbasis studi kasus nyata dan mendokumentasikan proses pembelajaran serta hasil simulasi dalam bentuk presentasi. Meraih Top 5 Nasional dalam presentasi proyek akhir.",
      projectsCount: 7,
      projects: [
        {
          id: "stupen-proj-assign-01",
          title: "Assignment 1 — Structural Analysis of Valve Body",
          category: "STUDI INDEPENDEN — ASSIGNMENT 1",
          shortDesc: "Analisis struktur pada valve body berbahan Gray Cast Iron untuk mengevaluasi respons komponen terhadap beban tekanan internal (3 MPa) dan gaya eksternal (9.600 N).",
          image: "assets/Studi Independent/Assignment 1_3.png",
          tag: "FEA • Static Structural",
          details: {
            role: "FEA Simulation",
            tools: ["ANSYS Mechanical", "ANSYS Workbench"],
            fullDescription: "Melakukan analisis struktur pada valve body berbahan Gray Cast Iron untuk mengevaluasi respons komponen terhadap beban tekanan internal dan gaya eksternal. Model diberikan fixed support pada kedua sisi, tekanan internal sebesar 3 MPa, serta gaya eksternal sebesar 9.600 N pada permukaan atas.\n\nAnalisis Static Structural digunakan untuk mengevaluasi distribusi Equivalent Stress dan Total Deformation serta membandingkan respons struktur terhadap karakteristik kekuatan material.",
            results: [
              "Hasil simulasi menunjukkan bahwa deformasi dan tegangan yang terjadi berada di bawah batas material yang digunakan sebagai acuan dalam analisis.",
              "Simulasi memberikan pemahaman mengenai distribusi tegangan dan deformasi pada komponen dengan kombinasi beban tekanan dan gaya eksternal."
            ],
            skills: ["Finite Element Analysis (FEA)", "Static Structural Analysis", "ANSYS Mechanical", "Stress Analysis", "Deformation Analysis"],
            galleryImages: [
              "assets/Studi Independent/Assignment 1_3.png",
              "assets/Studi Independent/Assignment 1_4.png",
              "assets/Studi Independent/Assignment 1_1.png",
              "assets/Studi Independent/Assignment 1_2.png"
            ]
          }
        },
        {
          id: "stupen-proj-assign-02",
          title: "Assignment 2 — Drop Test Analysis of an Aluminium Smartphone",
          category: "STUDI INDEPENDEN — ASSIGNMENT 2",
          shortDesc: "Simulasi drop test pada model ponsel aluminium alloy (kecepatan awal 20 m/s) untuk mengevaluasi deformasi plastis dan regangan benturan.",
          image: "assets/Studi Independent/Assignment 2_5.png",
          tag: "FEA • Drop Test & Plasticity",
          details: {
            role: "FEA Simulation",
            tools: ["ANSYS Mechanical", "ANSYS Workbench"],
            fullDescription: "Melakukan simulasi drop test pada model ponsel berbahan aluminium alloy untuk mengevaluasi respons struktur terhadap beban benturan. Model diberikan kecepatan awal sebesar 20 m/s dengan durasi simulasi 0,035 detik dan menggunakan material dengan yield strength 250 MPa serta tangent modulus 500 MPa.\n\nAnalisis difokuskan pada Total Deformation, Equivalent Elastic Strain, dan Equivalent Plastic Strain untuk mengidentifikasi area dengan respons deformasi dan regangan tertinggi.",
            results: [
              "Hasil simulasi menunjukkan Total Deformation maksimum sebesar 50,049 mm, Equivalent Elastic Strain sebesar 0,004338 mm/mm, dan Equivalent Plastic Strain sebesar 0,30971 mm/mm. Respons terbesar terjadi pada area tepi struktur yang mengalami kontak awal dengan permukaan.",
              "Hasil tersebut menunjukkan adanya deformasi plastis yang signifikan pada area benturan dan menjadi dasar untuk mengevaluasi ketahanan struktur terhadap beban impak."
            ],
            skills: ["Finite Element Analysis (FEA)", "Drop Test Simulation", "Dynamic Analysis", "Material Plasticity", "ANSYS Mechanical"],
            galleryImages: [
              "assets/Studi Independent/Assignment 2_5.png",
              "assets/Studi Independent/Assignment 2_4.png",
              "assets/Studi Independent/Assignment 2_3.png",
              "assets/Studi Independent/Assignment 2_2.png",
              "assets/Studi Independent/Assignment 2_1.png"
            ]
          }
        },
        {
          id: "stupen-proj-assign-03",
          title: "Assignment 3 — Structural Analysis of a Toy Drone Propeller",
          category: "STUDI INDEPENDEN — ASSIGNMENT 3",
          shortDesc: "Analisis struktur baling-baling drone mainan berbahan polycarbonate (tekanan 0,001 MPa) untuk mengidentifikasi distribusi tegangan dan defleksi ujung.",
          image: "assets/Studi Independent/Assignment 3_4.png",
          tag: "FEA • Stress & Deformation",
          details: {
            role: "FEA Simulation",
            tools: ["ANSYS Mechanical", "ANSYS Workbench"],
            fullDescription: "Melakukan analisis struktur pada baling-baling drone mainan berbahan polycarbonate untuk mengevaluasi respons terhadap beban tekanan eksternal. Bagian tengah lubang baling-baling ditetapkan sebagai fixed support, sedangkan tekanan sebesar 0,001 MPa diterapkan pada salah satu sisi kedua bilah.\n\nModel menggunakan ukuran elemen mesh sebesar 5 mm. Analisis difokuskan pada distribusi Total Deformation dan Equivalent Stress untuk mengidentifikasi area dengan respons struktural terbesar.",
            results: [
              "Total Deformation maksimum sebesar 46,077 mm terjadi pada ujung baling-baling, sedangkan Equivalent Stress maksimum sebesar 50,858 MPa terjadi di area sekitar lubang pusat.",
              "Hasil menunjukkan bahwa meskipun tegangan perlu dievaluasi terhadap yield strength material untuk menentukan keamanan struktural secara definitif, deformasi yang sangat besar menunjukkan bahwa kekakuan struktur menjadi aspek utama yang perlu diperhatikan dalam pengembangan desain."
            ],
            skills: ["Finite Element Analysis (FEA)", "Static Structural Analysis", "Mesh Generation", "Stress Analysis", "Deformation Analysis"],
            galleryImages: [
              "assets/Studi Independent/Assignment 3_4.png",
              "assets/Studi Independent/Assignment 3_3.png",
              "assets/Studi Independent/Assignment 3_2.png"
            ]
          }
        },
        {
          id: "stupen-proj-assign-04",
          title: "Assignment 4 — Transient Thermal Stress Analysis of PCB",
          category: "STUDI INDEPENDEN — ASSIGNMENT 4",
          shortDesc: "Analisis termal transien pada model PCB untuk mengevaluasi distribusi temperatur, deformasi termal (0,03 mm), dan tegangan termal (184,37 MPa).",
          image: "assets/Studi Independent/Assignment 4_6.png",
          tag: "FEA • Transient Thermal Stress",
          details: {
            role: "FEA Simulation",
            tools: ["ANSYS Mechanical", "ANSYS Workbench"],
            fullDescription: "Melakukan analisis termal transien pada model Printed Circuit Board (PCB) untuk mengevaluasi respons struktur terhadap internal heat generation. Dua komponen pada PCB diberikan sumber panas internal, sedangkan dua lubang PCB diberikan kondisi fixed support.\n\nAnalisis mencakup distribusi temperatur, Total Deformation, dan Equivalent Stress untuk mengidentifikasi respons termal serta area dengan konsentrasi tegangan tertinggi selama proses pemanasan.",
            results: [
              "Komponen 1 mencapai temperatur maksimum 87,74°C pada detik ke-37, sedangkan Komponen 2 mencapai 105,36°C pada detik ke-69. Total Deformation maksimum sebesar 0,03 mm terjadi pada ujung PCB yang tidak terfiksasi.",
              "Equivalent Stress maksimum sebesar 184,37 MPa terjadi di sekitar area fixed support. Hasil menunjukkan bahwa kondisi pengekangan menjadi faktor penting dalam pembentukan tegangan termal pada PCB."
            ],
            skills: ["Finite Element Analysis (FEA)", "Thermal Analysis", "Transient Analysis", "Thermal Stress Analysis", "ANSYS Mechanical"],
            galleryImages: [
              "assets/Studi Independent/Assignment 4_6.png",
              "assets/Studi Independent/Assignment 4_7.png",
              "assets/Studi Independent/Assignment 4_8.png",
              "assets/Studi Independent/Assignment 4_5.png",
              "assets/Studi Independent/Assignment 4_4.png",
              "assets/Studi Independent/Assignment 4_3.png",
              "assets/Studi Independent/Assignment 4_2.png",
              "assets/Studi Independent/Assignment 4_1.png"
            ]
          }
        },
        {
          id: "stupen-proj-assign-05",
          title: "Assignment 5 — Comparative Cold Rolling Analysis with and without Plasticity",
          category: "STUDI INDEPENDEN — ASSIGNMENT 5",
          shortDesc: "Simulasi cold rolling aluminium membandingkan model elastik murni vs bilinear isotropic hardening dengan kondisi frictionless contact.",
          image: "assets/Studi Independent/Assignment 5_4.png",
          tag: "FEA • Metal Forming & Plasticity",
          details: {
            role: "FEA Simulation",
            tools: ["ANSYS Mechanical", "ANSYS Workbench"],
            fullDescription: "Melakukan simulasi proses cold rolling pada aluminium untuk membandingkan respons material menggunakan dua model material, yaitu elastisitas isotropik tanpa plastisitas dan elastisitas isotropik dengan bilinear isotropic hardening.\n\nSimulasi menggunakan kondisi kontak frictionless dan dilakukan untuk mengevaluasi perbedaan Total Deformation, Equivalent Stress, serta Equivalent Elastic Strain akibat penerapan model material yang berbeda.",
            results: [
              "Model aluminium tanpa plastisitas menunjukkan respons elastis tanpa deformasi permanen. Sebaliknya, model dengan plastisitas menghasilkan deformasi permanen akibat tegangan yang melampaui yield strength material.",
              "Perbandingan kedua model menunjukkan bahwa pemilihan model material sangat memengaruhi prediksi deformasi, tegangan, dan regangan pada proses pembentukan logam."
            ],
            skills: ["Finite Element Analysis (FEA)", "Nonlinear Analysis", "Material Modeling", "Plasticity Analysis", "Metal Forming Simulation"],
            galleryImages: [
              "assets/Studi Independent/Assignment 5_4.png"
            ]
          }
        },
        {
          id: "stupen-proj-assign-06",
          title: "Assignment 6 — Explicit Dynamics Analysis of Billiard Ball Collision",
          category: "STUDI INDEPENDEN — ASSIGNMENT 6",
          shortDesc: "Simulasi dinamika tumbukan antarbola biliar menggunakan metode Explicit Dynamics dengan time step 0,0009–0,001 s dan multizone meshing.",
          image: "assets/Studi Independent/Assignment 6_3.png",
          tag: "Explicit Dynamics • Impact",
          details: {
            role: "FEA / Explicit Dynamics Simulation",
            tools: ["ANSYS Mechanical", "ANSYS Explicit Dynamics"],
            fullDescription: "Melakukan simulasi dinamika tumbukan antarbola biliar untuk memahami perilaku kontak dalam waktu yang sangat singkat. Metode Explicit Dynamics digunakan karena permasalahan melibatkan interaksi kontak dan perubahan kecepatan yang berlangsung secara cepat.\n\nModel menggunakan frictionless contact, gravitasi, kondisi meja yang diam, serta explicit time integration dengan time step pada kisaran 0,0009–0,001 detik. Mesh menggunakan ukuran global 10 mm dengan metode Multizone dan ukuran mesh meja sebesar 25 mm.",
            results: [
              "Simulasi menghasilkan Total Velocity maksimum sebesar 2617,8 mm/s.",
              "Analisis menunjukkan kemampuan metode Explicit Dynamics dalam menangkap respons dinamis, interaksi kontak, dan perubahan kecepatan pada peristiwa tumbukan berdurasi singkat."
            ],
            skills: ["Explicit Dynamics", "Finite Element Analysis (FEA)", "Contact Analysis", "Impact Analysis", "ANSYS Mechanical"],
            galleryImages: [
              "assets/Studi Independent/Assignment 6_3.png",
              "assets/Studi Independent/Assignment 6_2.png",
              "assets/Studi Independent/Assignment 6_1.png"
            ]
          }
        },
        {
          id: "stupen-proj-capstone",
          title: "CAPSTONE PROJECT: Aerodynamic Optimization of Vehicle Vortex Generator Using CFD-FEA",
          category: "STUDI INDEPENDEN — CAPSTONE PROJECT",
          shortDesc: "Simulasi CFD-FEA mengevaluasi & mengoptimalkan 3 desain vortex generator pada Honda Civic Type R (120 km/h) untuk reduksi hambatan aerodinamis & keandalan struktur ABS. Meraih Top 5 Nasional.",
          image: "assets/Studi Independent/Capstone_7.png",
          tag: "🏆 Top 5 Nasional • Capstone Project",
          details: {
            role: "CAE / Engineering Simulation",
            tools: ["ANSYS Fluent", "ANSYS Mechanical", "ANSYS Workbench"],
            fullDescription: "Melakukan simulasi CFD-FEA untuk mengevaluasi dan membandingkan tiga desain vortex generator pada model kendaraan sedan berdasarkan geometri Honda Civic Type R 2020. Analisis bertujuan mengevaluasi pengaruh variasi desain terhadap karakteristik aliran dan hambatan aerodinamis serta memastikan respons struktural komponen tetap berada pada kondisi yang dapat diterima.\n\nAnalisis CFD dilakukan pada kecepatan udara 120 km/h atau 33,33 m/s dengan kerapatan udara 1,225 kg/m³. Tiga desain dibandingkan berdasarkan Coefficient of Drag (Cd), distribusi kecepatan, dan pathlines. Analisis FEA dilakukan pada vortex generator berbahan ABS dengan fixed support pada bagian bawah dan tekanan 0,1 MPa pada bagian depan.",
            results: [
              "Hasil CFD menunjukkan nilai Cd sebesar 0,035 untuk Vortex 1, 0,058 untuk Vortex 2, dan 0,033 untuk Vortex 3. Vortex 3 menghasilkan Cd terendah, sedangkan Vortex 1 menunjukkan pola aliran yang lebih teratur dengan wake region yang lebih kecil.",
              "Berdasarkan kombinasi karakteristik aliran dan nilai Cd, Vortex 1 dipilih sebagai desain yang paling optimal secara keseluruhan, sementara hasil FEA menunjukkan bahwa tegangan yang terjadi masih berada dalam batas yang dapat diterima untuk material ABS berdasarkan kriteria yang digunakan dalam simulasi.",
              "🏆 Meraih Predikat TOP 5 NASIONAL dalam Presentasi Akhir Capstone Project CADFEM Ansys MSIB Batch 7."
            ],
            skills: ["Computational Fluid Dynamics (CFD)", "Finite Element Analysis (FEA)", "ANSYS Fluent", "ANSYS Mechanical", "Aerodynamic Analysis", "Design Optimization"],
            galleryImages: [
              "assets/Studi Independent/Capstone_7.png",
              "assets/Studi Independent/Capstone_8.jpg",
              "assets/Studi Independent/Capstone_1.png"
            ]
          }
        }
      ]
    }
  ],

  certificates: [
    // ── KELOMPOK 1: Sertifikasi Kompetensi Nasional (BNSP) ──────────────────
    {
      id: "cert-01",
      group: "bnsp",
      title: "BNSP Drafter CAD 3D",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      date: "2024",
      credentialId: "LOG 004 02901 2025",
      image: "assets/Sertifikat/CAD_BNSP_1.jpg",
      skills: ["3D CAD Modeling", "2D Technical Drawing", "GD&T", "SKKNI Drafter Manufaktur"],
      details: {
        category: "SERTIFIKASI KOMPETENSI NASIONAL (BNSP)",
        description: "Sertifikat kompetensi kerja resmi dari Badan Nasional Sertifikasi Profesi (BNSP) untuk skema Drafter CAD 3D berdasarkan Standar Kompetensi Kerja Nasional Indonesia (SKKNI). Memvalidasi keahlian pemodelan 3D solid, assembly multi-komponen, dan pembuatan gambar kerja 2D presisi berstandar ISO.",
        verificationUrl: "https://bnsp.go.id/",
        highlights: [
          "Dinyatakan Kompeten dalam seluruh unit uji pemodelan 3D CAD dan pembuatan drawing manufaktur.",
          "Penguasaan toleransi geometri (GD&T), fit & clearance, dan simbol standar permesinan.",
          "Kualifikasi resmi drafter profesional di industri manufaktur dan rekayasa mekanik."
        ]
      }
    },

    // ── KELOMPOK 2: Sertifikat Magang Kerja Industri ────────────────────────
    {
      id: "cert-08",
      group: "internship",
      title: "Certificate of Completion — Magang Industri PT. Kalbe Morinaga Indonesia",
      issuer: "PT. Kalbe Morinaga Indonesia (MDP Department)",
      date: "Juli 2026",
      credentialId: null,
      image: "assets/Sertifikat/CERTIFICATE OF COMPLETION INTERSHIP_1.jpg",
      skills: ["CAD Modeling", "Reverse Engineering", "CFD Support", "Machinery Mapping", "Internship Leadership"],
      details: {
        category: "SERTIFIKAT MAGANG KERJA INDUSTRI",
        description: "Sertifikat penyelesaian magang kerja resmi selama 8 bulan di PT. Kalbe Morinaga Indonesia pada Departemen MDP (Manufacturing Development and Planning). Mengesahkan kontribusi sebagai CAD Intern dan Koordinator Intern dalam mengeksekusi 17 proyek rekayasa manufaktur presisi.",
        highlights: [
          "Berhasil menyelesaikan dan menyerahterimakan 17 proyek rekayasa kepada user lini produksi.",
          "Memimpin koordinasi weekly meeting seluruh tim intern dengan manajemen departemen MDP.",
          "Mendapat evaluasi kinerja unggul dalam pemodelan CAD, reverse engineering, dan 3D printing."
        ]
      }
    },

    // ── KELOMPOK 3: Program MSIB & Studi Independen Bersertifikat ───────────
    {
      id: "cert-06",
      group: "msib",
      title: "Sertifikat MSIB #Bertaji by CADFEM Ansys Batch 7 — Husain Afrizal Aminullah",
      issuer: "PT CADFEM Simulation Technology Indonesia & Kemendikbudristek",
      date: "Desember 2024",
      credentialId: null,
      image: "assets/Sertifikat/Sertifikat MSIB_1.jpg",
      skills: ["Finite Element Analysis (FEA)", "Ansys Workbench", "Linear & Non-Linear", "Thermal Strain", "Dynamic Analysis"],
      details: {
        category: "SERTIFIKAT STUDI INDEPENDEN BERSERTIFIKAT (MSIB BATCH 7)",
        description: "Sertifikat kelulusan resmi program Studi Independen Bersertifikat MSIB Batch 7 dari PT CADFEM Simulation Technology Indonesia. Memvalidasi keahlian simulasi elemen hingga tingkat lanjut (FEA) menggunakan ANSYS Mechanical, mencakup analisis statik struktur, non-linear material & contact, analisis dinamik, dan regangan termal.",
        verificationUrl: "https://cadfem.net/",
        highlights: [
          "Menyelesaikan 100% kurikulum komprehensif FEA Ansys Mechanical dengan predikat Sangat Memuaskan.",
          "Penguasaan meshing quality metric (Skewness, Orthogonal Quality, Aspect Ratio).",
          "Diakui oleh mitra industri simulasi rekayasa global CADFEM & Ansys."
        ]
      }
    },
    {
      id: "cert-07",
      group: "msib",
      title: "Certificate of Appreciation — Top 5 Capstone Project Presentation",
      issuer: "PT CADFEM Simulation Technology Indonesia",
      date: "Desember 2024",
      credentialId: null,
      image: "assets/Sertifikat/Top 5.jpg",
      skills: ["Capstone Project Presentation", "Renewable Energy Simulation", "Structural Mass Optimization", "National Top 5"],
      details: {
        category: "PENGHARGAAN PRESTASI NASIONAL — MSIB BATCH 7",
        description: "Sertifikat apresiasi dan penghargaan atas pencapaian luar biasa meraih peringkat Top 5 Nasional pada sesi presentasi Final Capstone Project program MSIB Batch 7 CADFEM Ansys, dengan proyek simulasi FEA struktur energi terbarukan.",
        verificationUrl: "https://cadfem.net/",
        highlights: [
          "Meraih peringkat Top 5 Terbaik Nasional di antara ratusan peserta mahasiswa se-Indonesia.",
          "Optimasi struktur berhasil mereduksi 18% bobot material dengan Safety Factor > 2.0.",
          "Presentasi dan laporan teknis dinilai langsung oleh tim principal engineer CADFEM."
        ]
      }
    },

    // ── KELOMPOK 4: Sertifikat E-Learning & Track Ansys ─────────────────────
    {
      id: "cert-04",
      group: "elearning",
      title: "Ansys Track Completion — Foundations in Stress Analysis of Structures",
      issuer: "Ansys Innovation Courses",
      date: "2024",
      credentialId: null,
      image: "assets/Sertifikat/Foundations in Stress Analysis of Structures.jpg",
      skills: ["Stress-Strain Theory", "3D Equilibrium", "Finite Element Formulation", "Ansys Mechanical"],
      details: {
        category: "SERTIFIKAT TRACK COMPLETION — ANSYS INNOVATION COURSES",
        description: "Sertifikasi kelulusan learning track resmi dari Ansys Innovation Courses yang memfokuskan pada pemahaman fundamental teori tegangan dan regangan struktural, hukum kesetimbangan 3D, formulasi elemen hingga, serta implementasinya pada software Ansys Mechanical.",
        verificationUrl: "https://innovationspace.ansys.com/",
        highlights: [
          "Penguasaan teori tensor tegangan Von Mises, Tresca, dan tegangan utama (Principal Stress).",
          "Pemodelan kondisi batas (boundary conditions) dan formulasi matriks kekakuan elemen.",
          "Tervalidasi langsung oleh platform resmi Ansys Academy."
        ]
      }
    },
    {
      id: "cert-05",
      group: "elearning",
      title: "Ansys Track Completion — Understanding the Physics of Structural Mechanics",
      issuer: "Ansys Innovation Courses",
      date: "2024",
      credentialId: null,
      image: "assets/Sertifikat/Understanding the Physics of Structural Mechanics.jpg",
      skills: ["Continuum Mechanics", "Elasticity & Plasticity", "Numerical Physics", "Structural Mechanics"],
      details: {
        category: "SERTIFIKAT TRACK COMPLETION — ANSYS INNOVATION COURSES",
        description: "Sertifikasi kelulusan learning track Ansys Innovation Courses mengenai fisika mekanika struktur tingkat lanjut: governing equations mekanika kontinum, model konstitutif material elastis & plastis, serta komputasi numerik deformasi.",
        verificationUrl: "https://innovationspace.ansys.com/",
        highlights: [
          "Pemahaman model elastisitas linier isotropik, plastisitas bilinear, dan kriteria luluh material.",
          "Analisis konvergensi numerik non-linear dan kriteria stabilitas solusi elemen hingga.",
          "Tervalidasi resmi oleh Ansys Simulation Academy."
        ]
      }
    },
    {
      id: "cert-02",
      group: "elearning",
      title: "Project Management Foundations",
      issuer: "LinkedIn Learning",
      date: "2024",
      credentialId: null,
      image: "assets/Sertifikat/Project Management Foundations.jpg",
      skills: ["Project Planning", "Scope & Timeline", "Risk Management", "Agile Execution"],
      details: {
        category: "SERTIFIKAT E-LEARNING — LINKEDIN LEARNING",
        description: "Sertifikasi profesional dari LinkedIn Learning yang mencakup fondasi utama manajemen proyek: penentuan scope proyek, work breakdown structure (WBS), alokasi sumber daya, manajemen risiko, pelacakan timeline, serta komunikasi stakeholder.",
        verificationUrl: "https://linkedin.com/learning/",
        highlights: [
          "Penguasaan siklus hidup manajemen proyek dari inisiasi hingga project closure & handover.",
          "Penerapan teknik mitigasi bottleneck dan pengelolaan matriks risiko proyek.",
          "Diakui dengan kredit Continuing Professional Education (CPE)."
        ]
      }
    },

    // ── KELOMPOK 5: Sertifikat Seminar & Workshop ────────────────────────────
    {
      id: "cert-03",
      group: "seminar",
      title: "Passing Grade — Seminar Design of Mechanical Engineering",
      issuer: "Seminar Nasional Rekayasa Mesin & Manufaktur",
      date: "2024",
      credentialId: null,
      image: "assets/Sertifikat/Penegak Kedisiplinan.jpg",
      skills: ["Machine Design", "Mechanical Standards", "Tolerance Design", "Engineering Analysis"],
      details: {
        category: "SERTIFIKAT KELULUSAN SEMINAR & WORKSHOP TEKNIK",
        description: "Sertifikat pencapaian passing grade dan penguasaan materi pada Seminar & Workshop Nasional Design of Mechanical Engineering, memvalidasi pemahaman metodologi perancangan elemen mesin, kalkulasi beban, dan pemilihan material rekayasa.",
        highlights: [
          "Lolos evaluasi passing grade uji kompetensi desain elemen mekanik.",
          "Pemahaman mendalam mengenai standar ISO/DIN dalam perancangan poros, bantalan, dan roda gigi.",
          "Penerapan analisis kegagalan material (failure analysis) pada konstruksi mesin."
        ]
      }
    },

    // ── KELOMPOK 6: Sertifikat Kepanitiaan & Kegiatan Kampus ─────────────────
    {
      id: "cert-09",
      group: "activity",
      title: "Sertifikat Panitia Kedisiplinan — PKKMB Fakultas Teknik UNY",
      issuer: "Fakultas Teknik Universitas Negeri Yogyakarta",
      date: "Kepanitiaan Kampus",
      credentialId: null,
      image: "assets/Sertifikat/Penegak Kedisiplinan.jpg",
      skills: ["Penegakan Kedisiplinan", "Ketertiban Acara", "Manajemen Massa", "Kepemimpinan"],
      details: {
        category: "SERTIFIKAT KEPANITIAAN & ORGANISASI KAMPUS",
        description: "Sertifikat penghargaan atas kontribusi aktif sebagai Penegak Kedisiplinan dalam rangkaian Pengenalan Kehidupan Kampus Mahasiswa Baru (PKKMB) Fakultas Teknik Universitas Negeri Yogyakarta.",
        highlights: [
          "Menjaga ketertiban dan kepatuhan tata tertib ratusan mahasiswa baru Fakultas Teknik.",
          "Membantu memastikan seluruh agenda acara berlangsung tertib, aman, dan lancar.",
          "Berkoordinasi dengan tim kepanitiaan dan pimpinan fakultas dalam pengendalian kedisiplinan."
        ]
      }
    },
    {
      id: "cert-10",
      group: "activity",
      title: "Sertifikat Volunteer — Heritage Trail Run",
      issuer: "Panitia Penyelenggara Heritage Trail Run",
      date: "Kegiatan Kampus",
      credentialId: null,
      image: "assets/Sertifikat/Volunteer Panitia.jpg",
      skills: ["Manajemen Logistik", "Pengelolaan Perlengkapan", "Operasional Event", "Kerja Sama Tim"],
      details: {
        category: "SERTIFIKAT VOLUNTEER & KEPANITIAAN EVENT",
        description: "Sertifikat pengakuan atas peran aktif sebagai volunteer Divisi Logistik pada kegiatan olahraga Heritage Trail Run, bertanggung jawab dalam mengelola kebutuhan perlengkapan dan kelancaran sarana acara.",
        highlights: [
          "Mengelola inventaris dan distribusi perlengkapan pada titik pos jalur kegiatan.",
          "Memastikan seluruh sarana dan kebutuhan operasional event tersedia tepat waktu.",
          "Membantu memastikan kegiatan berjalan dengan lancar dan sukses."
        ]
      }
    }
  ]
};
