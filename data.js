const cpuData = [
  // 1st Gen (Nehalem/Westmere, 2008-2010)
  { brand: "Intel", generation: 1, model: "Core i3-530", cores: 2, threads: 4, base_clock: "2.93 GHz", boost_clock: "-", tdp: "73 W", process: "45 nm", cache: "4 MB", price: "$113" },
  { brand: "Intel", generation: 1, model: "Core i3-540", cores: 2, threads: 4, base_clock: "3.06 GHz", boost_clock: "-", tdp: "73 W", process: "45 nm", cache: "4 MB", price: "$133" },
  { brand: "Intel", generation: 1, model: "Core i5-650", cores: 2, threads: 4, base_clock: "3.2 GHz", boost_clock: "3.46 GHz", tdp: "73 W", process: "45 nm", cache: "4 MB", price: "$176" },
  { brand: "Intel", generation: 1, model: "Core i5-760", cores: 4, threads: 4, base_clock: "2.8 GHz", boost_clock: "-", tdp: "95 W", process: "45 nm", cache: "8 MB", price: "$196" },
  { brand: "Intel", generation: 1, model: "Core i7-860", cores: 4, threads: 8, base_clock: "2.8 GHz", boost_clock: "3.46 GHz", tdp: "95 W", process: "45 nm", cache: "8 MB", price: "$284" },
  { brand: "Intel", generation: 1, model: "Core i7-975", cores: 4, threads: 8, base_clock: "3.33 GHz", boost_clock: "-", tdp: "130 W", process: "45 nm", cache: "8 MB", price: "$999" },

  // 2nd Gen (Sandy Bridge, 2011)
  { brand: "Intel", generation: 2, model: "Core i3-2100", cores: 2, threads: 4, base_clock: "3.1 GHz", boost_clock: "-", tdp: "65 W", process: "32 nm", cache: "3 MB", price: "$117" },
  { brand: "Intel", generation: 2, model: "Core i3-2120", cores: 2, threads: 4, base_clock: "3.3 GHz", boost_clock: "-", tdp: "65 W", process: "32 nm", cache: "3 MB", price: "$138" },
  { brand: "Intel", generation: 2, model: "Core i5-2400", cores: 4, threads: 4, base_clock: "3.1 GHz", boost_clock: "3.4 GHz", tdp: "95 W", process: "32 nm", cache: "6 MB", price: "$184" },
  { brand: "Intel", generation: 2, model: "Core i5-2500K", cores: 4, threads: 4, base_clock: "3.3 GHz", boost_clock: "3.7 GHz", tdp: "95 W", process: "32 nm", cache: "6 MB", price: "$216" },
  { brand: "Intel", generation: 2, model: "Core i7-2600", cores: 4, threads: 8, base_clock: "3.4 GHz", boost_clock: "3.8 GHz", tdp: "95 W", process: "32 nm", cache: "8 MB", price: "$294" },
  { brand: "Intel", generation: 2, model: "Core i7-2600K", cores: 4, threads: 8, base_clock: "3.4 GHz", boost_clock: "3.8 GHz", tdp: "95 W", process: "32 nm", cache: "8 MB", price: "$317" },

  // 3rd Gen (Ivy Bridge, 2012)
  { brand: "Intel", generation: 3, model: "Core i3-3220", cores: 2, threads: 4, base_clock: "3.3 GHz", boost_clock: "-", tdp: "55 W", process: "22 nm", cache: "3 MB", price: "$117" },
  { brand: "Intel", generation: 3, model: "Core i3-3240", cores: 2, threads: 4, base_clock: "3.4 GHz", boost_clock: "-", tdp: "55 W", process: "22 nm", cache: "3 MB", price: "$138" },
  { brand: "Intel", generation: 3, model: "Core i5-3470", cores: 4, threads: 4, base_clock: "3.2 GHz", boost_clock: "3.6 GHz", tdp: "77 W", process: "22 nm", cache: "6 MB", price: "$184" },
  { brand: "Intel", generation: 3, model: "Core i5-3570K", cores: 4, threads: 4, base_clock: "3.4 GHz", boost_clock: "3.8 GHz", tdp: "77 W", process: "22 nm", cache: "6 MB", price: "$225" },
  { brand: "Intel", generation: 3, model: "Core i7-3770", cores: 4, threads: 8, base_clock: "3.4 GHz", boost_clock: "3.9 GHz", tdp: "77 W", process: "22 nm", cache: "8 MB", price: "$294" },
  { brand: "Intel", generation: 3, model: "Core i7-3770K", cores: 4, threads: 8, base_clock: "3.5 GHz", boost_clock: "3.9 GHz", tdp: "77 W", process: "22 nm", cache: "8 MB", price: "$332" },

  // 4th Gen (Haswell, 2013)
  { brand: "Intel", generation: 4, model: "Core i3-4130", cores: 2, threads: 4, base_clock: "3.4 GHz", boost_clock: "-", tdp: "54 W", process: "22 nm", cache: "3 MB", price: "$122" },
  { brand: "Intel", generation: 4, model: "Core i3-4330", cores: 2, threads: 4, base_clock: "3.5 GHz", boost_clock: "-", tdp: "54 W", process: "22 nm", cache: "4 MB", price: "$138" },
  { brand: "Intel", generation: 4, model: "Core i5-4570", cores: 4, threads: 4, base_clock: "3.2 GHz", boost_clock: "3.6 GHz", tdp: "84 W", process: "22 nm", cache: "6 MB", price: "$192" },
  { brand: "Intel", generation: 4, model: "Core i5-4670K", cores: 4, threads: 4, base_clock: "3.4 GHz", boost_clock: "3.8 GHz", tdp: "84 W", process: "22 nm", cache: "6 MB", price: "$242" },
  { brand: "Intel", generation: 4, model: "Core i7-4770", cores: 4, threads: 8, base_clock: "3.4 GHz", boost_clock: "3.9 GHz", tdp: "84 W", process: "22 nm", cache: "8 MB", price: "$303" },
  { brand: "Intel", generation: 4, model: "Core i7-4770K", cores: 4, threads: 8, base_clock: "3.5 GHz", boost_clock: "3.9 GHz", tdp: "84 W", process: "22 nm", cache: "8 MB", price: "$339" },

  // 5th Gen (Broadwell, 2014-2015)
  { brand: "Intel", generation: 5, model: "Core i3-5010U", cores: 2, threads: 4, base_clock: "2.1 GHz", boost_clock: "-", tdp: "15 W", process: "14 nm", cache: "3 MB", price: "$281" },
  { brand: "Intel", generation: 5, model: "Core i3-5005U", cores: 2, threads: 4, base_clock: "2.0 GHz", boost_clock: "-", tdp: "15 W", process: "14 nm", cache: "3 MB", price: "$275" },
  { brand: "Intel", generation: 5, model: "Core i5-5350U", cores: 2, threads: 4, base_clock: "1.8 GHz", boost_clock: "2.9 GHz", tdp: "15 W", process: "14 nm", cache: "3 MB", price: "$315" },
  { brand: "Intel", generation: 5, model: "Core i5-5675C", cores: 4, threads: 4, base_clock: "3.1 GHz", boost_clock: "3.6 GHz", tdp: "65 W", process: "14 nm", cache: "4 MB", price: "$276" },
  { brand: "Intel", generation: 5, model: "Core i7-5775C", cores: 4, threads: 8, base_clock: "3.3 GHz", boost_clock: "3.7 GHz", tdp: "65 W", process: "14 nm", cache: "6 MB", price: "$366" },
  { brand: "Intel", generation: 5, model: "Core i7-5950HQ", cores: 4, threads: 8, base_clock: "2.9 GHz", boost_clock: "3.8 GHz", tdp: "47 W", process: "14 nm", cache: "6 MB", price: "$623" },

  // 6th Gen (Skylake, 2015)
  { brand: "Intel", generation: 6, model: "Core i3-6100", cores: 2, threads: 4, base_clock: "3.7 GHz", boost_clock: "-", tdp: "51 W", process: "14 nm", cache: "3 MB", price: "$117" },
  { brand: "Intel", generation: 6, model: "Core i3-6300", cores: 2, threads: 4, base_clock: "3.8 GHz", boost_clock: "-", tdp: "51 W", process: "14 nm", cache: "4 MB", price: "$147" },
  { brand: "Intel", generation: 6, model: "Core i5-6400", cores: 4, threads: 4, base_clock: "2.7 GHz", boost_clock: "3.3 GHz", tdp: "65 W", process: "14 nm", cache: "6 MB", price: "$182" },
  { brand: "Intel", generation: 6, model: "Core i5-6600K", cores: 4, threads: 4, base_clock: "3.5 GHz", boost_clock: "3.9 GHz", tdp: "91 W", process: "14 nm", cache: "6 MB", price: "$243" },
  { brand: "Intel", generation: 6, model: "Core i7-6700", cores: 4, threads: 8, base_clock: "3.4 GHz", boost_clock: "4.0 GHz", tdp: "65 W", process: "14 nm", cache: "8 MB", price: "$303" },
  { brand: "Intel", generation: 6, model: "Core i7-6700K", cores: 4, threads: 8, base_clock: "4.0 GHz", boost_clock: "4.2 GHz", tdp: "91 W", process: "14 nm", cache: "8 MB", price: "$350" },

  // 7th Gen (Kaby Lake, 2016-2017)
  { brand: "Intel", generation: 7, model: "Core i3-7100", cores: 2, threads: 4, base_clock: "3.9 GHz", boost_clock: "-", tdp: "51 W", process: "14 nm", cache: "3 MB", price: "$117" },
  { brand: "Intel", generation: 7, model: "Core i3-7300", cores: 2, threads: 4, base_clock: "4.0 GHz", boost_clock: "-", tdp: "51 W", process: "14 nm", cache: "4 MB", price: "$147" },
  { brand: "Intel", generation: 7, model: "Core i5-7400", cores: 4, threads: 4, base_clock: "3.0 GHz", boost_clock: "3.5 GHz", tdp: "65 W", process: "14 nm", cache: "6 MB", price: "$182" },
  { brand: "Intel", generation: 7, model: "Core i5-7600K", cores: 4, threads: 4, base_clock: "3.8 GHz", boost_clock: "4.2 GHz", tdp: "91 W", process: "14 nm", cache: "6 MB", price: "$243" },
  { brand: "Intel", generation: 7, model: "Core i7-7700", cores: 4, threads: 8, base_clock: "3.6 GHz", boost_clock: "4.2 GHz", tdp: "65 W", process: "14 nm", cache: "8 MB", price: "$303" },
  { brand: "Intel", generation: 7, model: "Core i7-7700K", cores: 4, threads: 8, base_clock: "4.2 GHz", boost_clock: "4.5 GHz", tdp: "91 W", process: "14 nm", cache: "8 MB", price: "$339" },

  // 8th Gen (Coffee Lake, 2017-2018)
  { brand: "Intel", generation: 8, model: "Core i3-8100", cores: 4, threads: 4, base_clock: "3.6 GHz", boost_clock: "-", tdp: "65 W", process: "14 nm", cache: "6 MB", price: "$117" },
  { brand: "Intel", generation: 8, model: "Core i3-8300", cores: 4, threads: 4, base_clock: "3.7 GHz", boost_clock: "-", tdp: "62 W", process: "14 nm", cache: "8 MB", price: "$138" },
  { brand: "Intel", generation: 8, model: "Core i5-8400", cores: 6, threads: 6, base_clock: "2.8 GHz", boost_clock: "4.0 GHz", tdp: "65 W", process: "14 nm", cache: "9 MB", price: "$182" },
  { brand: "Intel", generation: 8, model: "Core i5-8600K", cores: 6, threads: 6, base_clock: "3.6 GHz", boost_clock: "4.3 GHz", tdp: "95 W", process: "14 nm", cache: "9 MB", price: "$257" },
  { brand: "Intel", generation: 8, model: "Core i7-8700", cores: 6, threads: 12, base_clock: "3.2 GHz", boost_clock: "4.6 GHz", tdp: "65 W", process: "14 nm", cache: "12 MB", price: "$303" },
  { brand: "Intel", generation: 8, model: "Core i7-8700K", cores: 6, threads: 12, base_clock: "3.7 GHz", boost_clock: "4.7 GHz", tdp: "95 W", process: "14 nm", cache: "12 MB", price: "$359" },

  // 9th Gen (Coffee Lake Refresh, 2018-2019)
  { brand: "Intel", generation: 9, model: "Core i3-9100F", cores: 4, threads: 4, base_clock: "3.6 GHz", boost_clock: "4.2 GHz", tdp: "65 W", process: "14 nm", cache: "6 MB", price: "$122" },
  { brand: "Intel", generation: 9, model: "Core i3-9350KF", cores: 4, threads: 4, base_clock: "4.0 GHz", boost_clock: "4.6 GHz", tdp: "91 W", process: "14 nm", cache: "8 MB", price: "$173" },
  { brand: "Intel", generation: 9, model: "Core i5-9400F", cores: 6, threads: 6, base_clock: "2.9 GHz", boost_clock: "4.1 GHz", tdp: "65 W", process: "14 nm", cache: "9 MB", price: "$182" },
  { brand: "Intel", generation: 9, model: "Core i5-9600K", cores: 6, threads: 6, base_clock: "3.7 GHz", boost_clock: "4.6 GHz", tdp: "95 W", process: "14 nm", cache: "9 MB", price: "$262" },
  { brand: "Intel", generation: 9, model: "Core i7-9700", cores: 8, threads: 8, base_clock: "3.0 GHz", boost_clock: "4.7 GHz", tdp: "65 W", process: "14 nm", cache: "12 MB", price: "$323" },
  { brand: "Intel", generation: 9, model: "Core i7-9700K", cores: 8, threads: 8, base_clock: "3.6 GHz", boost_clock: "4.9 GHz", tdp: "95 W", process: "14 nm", cache: "12 MB", price: "$374" },
  { brand: "Intel", generation: 9, model: "Core i9-9900K", cores: 8, threads: 16, base_clock: "3.6 GHz", boost_clock: "5.0 GHz", tdp: "95 W", process: "14 nm", cache: "16 MB", price: "$488" },
  { brand: "Intel", generation: 9, model: "Core i9-9900KF", cores: 8, threads: 16, base_clock: "3.6 GHz", boost_clock: "5.0 GHz", tdp: "95 W", process: "14 nm", cache: "16 MB", price: "$463" },

  // 10th Gen (Comet Lake, 2020)
  { brand: "Intel", generation: 10, model: "Core i3-10100", cores: 4, threads: 8, base_clock: "3.6 GHz", boost_clock: "4.3 GHz", tdp: "65 W", process: "14 nm", cache: "6 MB", price: "$122" },
  { brand: "Intel", generation: 10, model: "Core i3-10320", cores: 4, threads: 8, base_clock: "3.8 GHz", boost_clock: "4.6 GHz", tdp: "65 W", process: "14 nm", cache: "8 MB", price: "$154" },
  { brand: "Intel", generation: 10, model: "Core i5-10400", cores: 6, threads: 12, base_clock: "2.9 GHz", boost_clock: "4.3 GHz", tdp: "65 W", process: "14 nm", cache: "12 MB", price: "$182" },
  { brand: "Intel", generation: 10, model: "Core i5-10600K", cores: 6, threads: 12, base_clock: "4.1 GHz", boost_clock: "4.8 GHz", tdp: "125 W", process: "14 nm", cache: "12 MB", price: "$262" },
  { brand: "Intel", generation: 10, model: "Core i7-10700", cores: 8, threads: 16, base_clock: "2.9 GHz", boost_clock: "4.8 GHz", tdp: "65 W", process: "14 nm", cache: "16 MB", price: "$323" },
  { brand: "Intel", generation: 10, model: "Core i7-10700K", cores: 8, threads: 16, base_clock: "3.8 GHz", boost_clock: "5.1 GHz", tdp: "125 W", process: "14 nm", cache: "16 MB", price: "$374" },
  { brand: "Intel", generation: 10, model: "Core i9-10900", cores: 10, threads: 20, base_clock: "2.8 GHz", boost_clock: "5.2 GHz", tdp: "65 W", process: "14 nm", cache: "20 MB", price: "$439" },
  { brand: "Intel", generation: 10, model: "Core i9-10900K", cores: 10, threads: 20, base_clock: "3.7 GHz", boost_clock: "5.3 GHz", tdp: "125 W", process: "14 nm", cache: "20 MB", price: "$488" },

  // 11th Gen (Rocket Lake, 2021)
  { brand: "Intel", generation: 11, model: "Core i3-10100F", cores: 4, threads: 8, base_clock: "3.6 GHz", boost_clock: "4.3 GHz", tdp: "65 W", process: "14 nm", cache: "6 MB", price: "$97" },
  { brand: "Intel", generation: 11, model: "Core i3-11100", cores: 4, threads: 8, base_clock: "3.6 GHz", boost_clock: "4.4 GHz", tdp: "65 W", process: "14 nm", cache: "8 MB", price: "$122" },
  { brand: "Intel", generation: 11, model: "Core i5-11400", cores: 6, threads: 12, base_clock: "2.6 GHz", boost_clock: "4.4 GHz", tdp: "65 W", process: "14 nm", cache: "12 MB", price: "$182" },
  { brand: "Intel", generation: 11, model: "Core i5-11600K", cores: 6, threads: 12, base_clock: "3.9 GHz", boost_clock: "4.9 GHz", tdp: "125 W", process: "14 nm", cache: "12 MB", price: "$262" },
  { brand: "Intel", generation: 11, model: "Core i7-11700", cores: 8, threads: 16, base_clock: "2.5 GHz", boost_clock: "4.9 GHz", tdp: "65 W", process: "14 nm", cache: "16 MB", price: "$323" },
  { brand: "Intel", generation: 11, model: "Core i7-11700K", cores: 8, threads: 16, base_clock: "3.6 GHz", boost_clock: "5.0 GHz", tdp: "125 W", process: "14 nm", cache: "16 MB", price: "$374" },
  { brand: "Intel", generation: 11, model: "Core i9-11900", cores: 8, threads: 16, base_clock: "2.5 GHz", boost_clock: "5.2 GHz", tdp: "65 W", process: "14 nm", cache: "16 MB", price: "$439" },
  { brand: "Intel", generation: 11, model: "Core i9-11900K", cores: 8, threads: 16, base_clock: "3.5 GHz", boost_clock: "5.3 GHz", tdp: "125 W", process: "14 nm", cache: "16 MB", price: "$539" },

  // 12th Gen (Alder Lake, 2021-2022)
  { brand: "Intel", generation: 12, model: "Core i3-12100", cores: 4, threads: 8, base_clock: "3.3 GHz", boost_clock: "4.3 GHz", tdp: "60 W", process: "10 nm", cache: "12 MB", price: "$129" },
  { brand: "Intel", generation: 12, model: "Core i3-12300", cores: 4, threads: 8, base_clock: "3.5 GHz", boost_clock: "4.4 GHz", tdp: "60 W", process: "10 nm", cache: "12 MB", price: "$143" },
  { brand: "Intel", generation: 12, model: "Core i5-12400", cores: 6, threads: 12, base_clock: "2.5 GHz", boost_clock: "4.4 GHz", tdp: "65 W", process: "10 nm", cache: "18 MB", price: "$192" },
  { brand: "Intel", generation: 12, model: "Core i5-12600K", cores: 10, threads: 16, base_clock: "3.7 GHz", boost_clock: "4.9 GHz", tdp: "125 W", process: "10 nm", cache: "20 MB", price: "$289" },
  { brand: "Intel", generation: 12, model: "Core i7-12700", cores: 12, threads: 20, base_clock: "2.1 GHz", boost_clock: "4.9 GHz", tdp: "65 W", process: "10 nm", cache: "25 MB", price: "$339" },
  { brand: "Intel", generation: 12, model: "Core i7-12700K", cores: 12, threads: 20, base_clock: "3.6 GHz", boost_clock: "5.0 GHz", tdp: "125 W", process: "10 nm", cache: "25 MB", price: "$409" },
  { brand: "Intel", generation: 12, model: "Core i9-12900", cores: 16, threads: 24, base_clock: "2.4 GHz", boost_clock: "5.1 GHz", tdp: "65 W", process: "10 nm", cache: "30 MB", price: "$489" },
  { brand: "Intel", generation: 12, model: "Core i9-12900K", cores: 16, threads: 24, base_clock: "3.2 GHz", boost_clock: "5.2 GHz", tdp: "125 W", process: "10 nm", cache: "34 MB", price: "$589" },

  // 13th Gen (Raptor Lake, 2022-2023)
  { brand: "Intel", generation: 13, model: "Core i3-13100", cores: 4, threads: 8, base_clock: "3.4 GHz", boost_clock: "4.5 GHz", tdp: "60 W", process: "10 nm", cache: "12 MB", price: "$134" },
  { brand: "Intel", generation: 13, model: "Core i3-13100F", cores: 4, threads: 8, base_clock: "3.4 GHz", boost_clock: "4.5 GHz", tdp: "58 W", process: "10 nm", cache: "12 MB", price: "$109" },
  { brand: "Intel", generation: 13, model: "Core i5-13400", cores: 10, threads: 16, base_clock: "2.5 GHz", boost_clock: "4.6 GHz", tdp: "65 W", process: "10 nm", cache: "20 MB", price: "$207" },
  { brand: "Intel", generation: 13, model: "Core cherry-pick13600K", cores: 14, threads: 20, base_clock: "3.5 GHz", boost_clock: "5.1 GHz", tdp: "125 W", process: "10 nm", cache: "24 MB", price: "$319" },
  { brand: "Intel", generation: 13, model: "Core i7-13700", cores: 16, threads: 24, base_clock: "2.1 GHz", boost_clock: "5.2 GHz", tdp: "65 W", process: "10 nm", cache: "30 MB", price: "$384" },
  { brand: "Intel", generation: 13, model: "Core i7-13700K", cores: 16, threads: 24, base_clock: "3.4 GHz", boost_clock: "5.4 GHz", tdp: "125 W", process: "10 nm", cache: "30 MB", price: "$439" },
  { brand: "Intel", generation: 13, model: "Core i9-13900", cores: 24, threads: 32, base_clock: "2.0 GHz", boost_clock: "5.6 GHz", tdp: "65 W", process: "10 nm", cache: "36 MB", price: "$549" },
  { brand: "Intel", generation: 13, model: "Core i9-13900K", cores: 24, threads: 32, base_clock: "3.0 GHz", boost_clock: "5.8 GHz", tdp: "125 W", process: "10 nm", cache: "36 MB", price: "$589" },

  // 14th Gen (Raptor Lake Refresh, 2023-2024)
  { brand: "Intel", generation: 14, model: "Core i3-14100", cores: 4, threads: 8, base_clock: "3.5 GHz", boost_clock: "4.7 GHz", tdp: "60 W", process: "10 nm", cache: "12 MB", price: "$139" },
  { brand: "Intel", generation: 14, model: "Core i3-14100F", cores: 4, threads: 8, base_clock: "3.5 GHz", boost_clock: "4.7 GHz", tdp: "58 W", process: "10 nm", cache: "12 MB", price: "$114" },
  { brand: "Intel", generation: 14, model: "Core i5-14400", cores: 10, threads: 16, base_clock: "2.5 GHz", boost_clock: "4.7 GHz", tdp: "65 W", process: "10 nm", cache: "20 MB", price: "$221" },
  { brand: "Intel", generation: 14, model: "Core i5-14600K", cores: 14, threads: 20, base_clock: "3.5 GHz", boost_clock: "5.3 GHz", tdp: "125 W", process: "10 nm", cache: "24 MB", price: "$329" },
  { brand: "Intel", generation: 14, model: "Core i7-14700", cores: 20, threads: 28, base_clock: "2.1 GHz", boost_clock: "5.4 GHz", tdp: "65 W", process: "10 nm", cache: "33 MB", price: "$384" },
  { brand: "Intel", generation: 14, model: "Core i7-14700K", cores: 20, threads: 28, base_clock: "3.4 GHz", boost_clock: "5.6 GHz", tdp: "125 W", process: "10 nm", cache: "33 MB", price: "$449" },
  { brand: "Intel", generation: 14, model: "Core i9-14900", cores: 24, threads: 32, base_clock: "2.0 GHz", boost_clock: "5.8 GHz", tdp: "65 W", process: "10 nm", cache: "36 MB", price: "$554" },
  { brand: "Intel", generation: 14, model: "Core i9-14900K", cores: 24, threads: 32, base_clock: "3.2 GHz", boost_clock: "6.0 GHz", tdp: "125 W", process: "10 nm", cache: "36 MB", price: "$589" },

  // 15th Gen (Arrow Lake, 2024-2025)
  { brand: "Intel", generation: 15, model: "Core Ultra 5 225", cores: 6, threads: 6, base_clock: "3.2 GHz", boost_clock: "4.3 GHz", tdp: "65 W", process: "3 nm", cache: "10 MB", price: "$149" },
  { brand: "Intel", generation: 15, model: "Core Ultra 5 245K", cores: 10, threads: 10, base_clock: "3.8 GHz", boost_clock: "4.8 GHz", tdp: "125 W", process: "3 nm", cache: "18 MB", price: "$329" },
  { brand: "Intel", generation: 15, model: "Core Ultra 5 245KF", cores: 10, threads: 10, base_clock: "3.8 GHz", boost_clock: "4.8 GHz", tdp: "125 W", process: "3 nm", cache: "18 MB", price: "$309" },
  { brand: "Intel", generation: 15, model: "Core Ultra 7 265", cores: 12, threads: 12, base_clock: "3.9 GHz", boost_clock: "5.5 GHz", tdp: "65 W", process: "3 nm", cache: "22 MB", price: "$394" },
  { brand: "Intel", generation: 15, model: "Core Ultra 7 265F", cores: 12, threads: 12, base_clock: "3.9 GHz", boost_clock: "5.5 GHz", tdp: "65 W", process: "3 nm", cache: "22 MB", price: "$374" },
  { brand: "Intel", generation: 15, model: "Core Ultra 7 265KF", cores: 12, threads: 12, base_clock: "3.9 GHz", boost_clock: "5.5 GHz", tdp: "125 W", process: "3 nm", cache: "22 MB", price: "$429" },
  { brand: "Intel", generation: 15, model: "Core Ultra 9 285", cores: 14, threads: 14, base_clock: "4.0 GHz", boost_clock: "5.7 GHz", tdp: "65 W", process: "3 nm", cache: "26 MB", price: "$549" },
  { brand: "Intel", generation: 15, model: "Core Ultra 9 285K", cores: 14, threads: 14, base_clock: "4.0 GHz", boost_clock: "5.7 GHz", tdp: "125 W", process: "3 nm", cache: "26 MB", price: "$589" },

  // ... [Previous entries for 1st to 14th Gen unchanged, omitted for brevity] ...

  // 15th Gen (Arrow Lake for desktop, Meteor Lake for mobile, 2024-2025)
  { brand: "Intel", generation: 15, model: "Core Ultra 3 115H", cores: 10, threads: 10, base_clock: "1.9 GHz", boost_clock: "4.5 GHz", tdp: "28 W", process: "7 nm", cache: "12 MB", price: "$139" }, // Mobile, Meteor Lake
  { brand: "Intel", generation: 15, model: "Core Ultra 5 225", cores: 6, threads: 6, base_clock: "3.2 GHz", boost_clock: "4.3 GHz", tdp: "65 W", process: "3 nm", cache: "10 MB", price: "$149" }, // Desktop
  { brand: "Intel", generation: 15, model: "Core Ultra 5 235", cores: 8, threads: 8, base_clock: "3.4 GHz", boost_clock: "4.5 GHz", tdp: "65 W", process: "3 nm", cache: "14 MB", price: "$199" }, // Desktop
  { brand: "Intel", generation: 15, model: "Core Ultra 5 245K", cores: 10, threads: 10, base_clock: "3.8 GHz", boost_clock: "4.8 GHz", tdp: "125 W", process: "3 nm", cache: "18 MB", price: "$329" }, // Desktop
  { brand: "Intel", generation: 15, model: "Core Ultra 5 245KF", cores: 10, threads: 10, base_clock: "3.8 GHz", boost_clock: "4.8 GHz", tdp: "125 W", process: "3 nm", cache: "18 MB", price: "$309" }, // Desktop, no iGPU
  { brand: "Intel", generation: 15, model: "Core Ultra 5 125H", cores: 12, threads: 12, base_clock: "1.2 GHz", boost_clock: "4.5 GHz", tdp: "28 W", process: "7 nm", cache: "14 MB", price: "$279" }, // Mobile, Meteor Lake
  { brand: "Intel", generation: 15, model: "Core Ultra 7 265", cores: 12, threads: 12, base_clock: "3.9 GHz", boost_clock: "5.5 GHz", tdp: "65 W", process: "3 nm", cache: "22 MB", price: "$394" }, // Desktop
  { brand: "Intel", generation: 15, model: "Core Ultra 7 265F", cores: 12, threads: 12, base_clock: "3.9 GHz", boost_clock: "5.5 GHz", tdp: "65 W", process: "3 nm", cache: "22 MB", price: "$374" }, // Desktop, no iGPU
  { brand: "Intel", generation: 15, model: "Core Ultra 7 265KF", cores: 12, threads: 12, base_clock: "3.9 GHz", boost_clock: "5.5 GHz", tdp: "125 W", process: "3 nm", cache: "22 MB", price: "$429" }, // Desktop, no iGPU
  { brand: "Intel", generation: 15, model: "Core Ultra 7 165H", cores: 16, threads: 16, base_clock: "1.4 GHz", boost_clock: "5.0 GHz", tdp: "28 W", process: "7 nm", cache: "24 MB", price: "$409" }, // Mobile, Meteor Lake
  { brand: "Intel", generation: 15, model: "Core Ultra 9 285", cores: 14, threads: 14, base_clock: "4.0 GHz", boost_clock: "5.7 GHz", tdp: "65 W", process: "3 nm", cache: "26 MB", price: "$549" }, // Desktop
  { brand: "Intel", generation: 15, model: "Core Ultra 9 285K", cores: 14, threads: 14, base_clock: "4.0 GHz", boost_clock: "5.7 GHz", tdp: "125 W", process: "3 nm", cache: "26 MB", price: "$589" }, // Desktop
  { brand: "Intel", generation: 15, model: "Core Ultra 9 185H", cores: 16, threads: 16, base_clock: "1.8 GHz", boost_clock: "5.1 GHz", tdp: "45 W", process: "7 nm", cache: "24 MB", price: "$539" }, // Mobile, Meteor Lake
  
  // 1st Gen Ryzen (Zen, 2017)
  { brand: "AMD", generation: 1, model: "Ryzen 3 1200", cores: 4, threads: 4, base_clock: "3.1 GHz", boost_clock: "3.4 GHz", tdp: "65 W", process: "14 nm", cache: "8 MB", price: "$109" },
  { brand: "AMD", generation: 1, model: "Ryzen 3 1300X", cores: 4, threads: 4, base_clock: "3.5 GHz", boost_clock: "3.7 GHz", tdp: "65 W", process: "14 nm", cache: "8 MB", price: "$129" },
  { brand: "AMD", generation: 1, model: "Ryzen 5 1400", cores: 4, threads: 8, base_clock: "3.2 GHz", boost_clock: "3.4 GHz", tdp: "65 W", process: "14 nm", cache: "8 MB", price: "$169" },
  { brand: "AMD", generation: 1, model: "Ryzen 5 1600X", cores: 6, threads: 12, base_clock: "3.6 GHz", boost_clock: "4.0 GHz", tdp: "95 W", process: "14 nm", cache: "16 MB", price: "$249" },
  { brand: "AMD", generation: 1, model: "Ryzen 7 1700", cores: 8, threads: 16, base_clock: "3.0 GHz", boost_clock: "3.7 GHz", tdp: "65 W", process: "14 nm", cache: "16 MB", price: "$329" },
  { brand: "AMD", generation: 1, model: "Ryzen 7 1800X", cores: 8, threads: 16, base_clock: "3.6 GHz", boost_clock: "4.0 GHz", tdp: "95 W", process: "14 nm", cache: "16 MB", price: "$499" },
  { brand: "AMD", generation: 1, model: "Ryzen Threadripper 1950X", cores: 16, threads: 32, base_clock: "3.4 GHz", boost_clock: "4.0 GHz", tdp: "180 W", process: "14 nm", cache: "32 MB", price: "$999" },

  // 2nd Gen Ryzen (Zen+, 2018)
  { brand: "AMD", generation: 2, model: "Ryzen 3 2200G", cores: 4, threads: 4, base_clock: "3.5 GHz", boost_clock: "3.7 GHz", tdp: "65 W", process: "12 nm", cache: "4 MB", price: "$99" },
  { brand: "AMD", generation: 2, model: "Ryzen 3 2300X", cores: 4, threads: 4, base_clock: "3.5 GHz", boost_clock: "4.0 GHz", tdp: "65 W", process: "12 nm", cache: "8 MB", price: "$139" },
  { brand: "AMD", generation: 2, model: "Ryzen 5 2600", cores: 6, threads: 12, base_clock: "3.4 GHz", boost_clock: "3.9 GHz", tdp: "65 W", process: "12 nm", cache: "16 MB", price: "$199" },
  { brand: "AMD", generation: 2, model: "Ryzen 5 2600X", cores: 6, threads: 12, base_clock: "3.6 GHz", boost_clock: "4.2 GHz", tdp: "95 W", process: "12 nm", cache: "16 MB", price: "$229" },
  { brand: "AMD", generation: 2, model: "Ryzen 7 2700", cores: 8, threads: 16, base_clock: "3.2 GHz", boost_clock: "4.1 GHz", tdp: "65 W", process: "12 nm", cache: "16 MB", price: "$299" },
  { brand: "AMD", generation: 2, model: "Ryzen 7 2700X", cores: 8, threads: 16, base_clock: "3.7 GHz", boost_clock: "4.3 GHz", tdp: "105 W", process: "12 nm", cache: "16 MB", price: "$329" },
  { brand: "AMD", generation: 2, model: "Ryzen Threadripper 2950X", cores: 16, threads: 32, base_clock: "3.5 GHz", boost_clock: "4.4 GHz", tdp: "180 W", process: "12 nm", cache: "32 MB", price: "$899" },

  // 3rd Gen Ryzen (Zen 2, 2019)
  { brand: "AMD", generation: 3, model: "Ryzen 3 3200G", cores: 4, threads: 4, base_clock: "3.6 GHz", boost_clock: "4.0 GHz", tdp: "65 W", process: "7 nm", cache: "4 MB", price: "$99" },
  { brand: "AMD", generation: 3, model: "Ryzen 5 3600", cores: 6, threads: 12, base_clock: "3.6 GHz", boost_clock: "4.2 GHz", tdp: "65 W", process: "7 nm", cache: "32 MB", price: "$199" },
  { brand: "AMD", generation: 3, model: "Ryzen 5 3600X", cores: 6, threads: 12, base_clock: "3.8 GHz", boost_clock: "4.4 GHz", tdp: "95 W", process: "7 nm", cache: "32 MB", price: "$249" },
  { brand: "AMD", generation: 3, model: "Ryzen 7 3700X", cores: 8, threads: 16, base_clock: "3.6 GHz", boost_clock: "4.4 GHz", tdp: "65 W", process: "7 nm", cache: "32 MB", price: "$329" },
  { brand: "AMD", generation: 3, model: "Ryzen 7 3800X", cores: 8, threads: 16, base_clock: "3.9 GHz", boost_clock: "4.5 GHz", tdp: "105 W", process: "7 nm", cache: "32 MB", price: "$399" },
  { brand: "AMD", generation: 3, model: "Ryzen 9 3900X", cores: 12, threads: 24, base_clock: "3.8 GHz", boost_clock: "4.6 GHz", tdp: "105 W", process: "7 nm", cache: "64 MB", price: "$499" },
  { brand: "AMD", generation: 3, model: "Ryzen 9 3950X", cores: 16, threads: 32, base_clock: "3.5 GHz", boost_clock: "4.7 GHz", tdp: "105 W", process: "7 nm", cache: "64 MB", price: "$749" },
  { brand: "AMD", generation: 3, model: "Ryzen Threadripper 3960X", cores: 24, threads: 48, base_clock: "3.8 GHz", boost_clock: "4.5PMD", tdp: "280 W", process: "7 nm", cache: "128 MB", price: "$1399" },

  // 4th Gen Ryzen (Zen 3, 2020)
  { brand: "AMD", generation: 4, model: "Ryzen 5 5600G", cores: 6, threads: 12, base_clock: "3.9 GHz", boost_clock: "4.4 GHz", tdp: "65 W", process: "7 nm", cache: "16 MB", price: "$259" },
  { brand: "AMD", generation: 4, model: "Ryzen 5 5600X", cores: 6, threads: 12, base_clock: "3.7 GHz", boost_clock: "4.6 GHz", tdp: "65 W", process: "7 nm", cache: "32 MB", price: "$299" },
  { brand: "AMD", generation: 4, model: "Ryzen 7 5800X", cores: 8, threads: 16, base_clock: "3.8 GHz", boost_clock: "4.7 GHz", tdp: "105 W", process: "7 nm", cache: "32 MB", price: "$449" },
  { brand: "AMD", generation: 4, model: "Ryzen 7 5800X3D", cores: 8, threads: 16, base_clock: "3.4 GHz", boost_clock: "4.5 GHz", tdp: "105 W", process: "7 nm", cache: "96 MB", price: "$449" },
  { brand: "AMD", generation: 4, model: "Ryzen 9 5900X", cores: 12, threads: 24, base_clock: "3.7 GHz", boost_clock: "4.8 GHz", tdp: "105 W", process: "7 nm", cache: "64 MB", price: "$549" },
  { brand: "AMD", generation: 4, model: "Ryzen 9 5950X", cores: 16, threads: 32, base_clock: "3.4 GHz", boost_clock: "4.9 GHz", tdp: "105 W", process: "7 nm", cache: "64 MB", price: "$799" },
  { brand: "AMD", generation: 4, model: "Ryzen Threadripper 5975WX", cores: 32, threads: 64, base_clock: "3.6 GHz", boost_clock: "4.5 GHz", tdp: "280 W", process: "7 nm", cache: "128 MB", price: "$3299" },

  // 5th Gen Ryzen (Zen 4, 2022)
  { brand: "AMD", generation: 5, model: "Ryzen 5 7600X", cores: 6, threads: 12, base_clock: "4.7 GHz", boost_clock: "5.3 GHz", tdp: "105 W", process: "5 nm", cache: "32 MB", price: "$299" },
  { brand: "AMD", generation: 5, model: "Ryzen 7 7700X", cores: 8, threads: 16, base_clock: "4.5 GHz", boost_clock: "5.4 GHz", tdp: "105 W", process: "5 nm", cache: "32 MB", price: "$399" },
  { brand: "AMD", generation: 5, model: "Ryzen 7 7800X3D", cores: 8, threads: 16, base_clock: "4.2 GHz", boost_clock: "5.0 GHz", tdp: "120 W", process: "5 nm", cache: "96 MB", price: "$449" },
  { brand: "AMD", generation: 5, model: "Ryzen 9 7900", cores: 12, threads: 24, base_clock: "3.7 GHz", boost_clock: "5.4 GHz", tdp: "65 W", process: "5 nm", cache: "64 MB", price: "$429" },
  { brand: "AMD", generation: 5, model: "Ryzen 9 7950X", cores: 16, threads: 32, base_clock: "4.5 GHz", boost_clock: "5.7 GHz", tdp: "170 W", process: "5 nm", cache: "64 MB", price: "$699" },
  { brand: "AMD", generation: 5, model: "Ryzen 9 7950X3D", cores: 16, threads: 32, base_clock: "4.2 GHz", boost_clock: "5.7 GHz", tdp: "120 W", process: "5 nm", cache: "128 MB", price: "$699" },
  { brand: "AMD", generation: 5, model: "Ryzen Threadripper 7960X", cores: 24, threads: 48, base_clock: "4.2 GHz", boost_clock: "5.3 GHz", tdp: "350 W", process: "5 nm", cache: "128 MB", price: "$1499" },

  // 6th Gen Ryzen (Zen 5, 2024-2025)
  { brand: "AMD", generation: 6, model: "Ryzen 5 9600X", cores: 6, threads: 12, base_clock: "3.9 GHz", boost_clock: "5.4 GHz", tdp: "65 W", process: "4 nm", cache: "38 MB", price: "$279" },
  { brand: "AMD", generation: 6, model: "Ryzen 7 9700X", cores: 8, threads: 16, base_clock: "3.8 GHz", boost_clock: "5.5 GHz", tdp: "65 W", process: "4 nm", cache: "40 MB", price: "$359" },
  { brand: "AMD", generation: 6, model: "Ryzen 7 9800X3D", cores: 8, threads: 16, base_clock: "4.7 GHz", boost_clock: "5.2 GHz", tdp: "120 W", process: "4 nm", cache: "96 MB", price: "$480" },
  { brand: "AMD", generation: 6, model: "Ryzen 9 9900X", cores: 12, threads: 24, base_clock: "4.4 GHz", boost_clock: "5.6 GHz", tdp: "120 W", process: "4 nm", cache: "64 MB", price: "$499" },
  { brand: "AMD", generation: 6, model: "Ryzen 9 9950X", cores: 16, threads: 32, base_clock: "4.3 GHz", boost_clock: "5.7 GHz", tdp: "170 W", process: "4 nm", cache: "64 MB", price: "$649" },
  { brand: "AMD", generation: 6, model: "Ryzen 9 9950X3D", cores: 16, threads: 32, base_clock: "4.3 GHz", boost_clock: "5.6 GHz", tdp: "120 W", process: "4 nm", cache: "128 MB", price: "$699" },
  { brand: "AMD", generation: 6, model: "Ryzen Threadripper 7970X", cores: 32, threads: 64, base_clock: "4.0 GHz", boost_clock: "5.3 GHz", tdp: "350 W", process: "5 nm", cache: "128 MB", price: "$2499" },

  // Mobile (Zen 4, 2023-2024, selected models)
  { brand: "AMD", generation: 5, model: "Ryzen 5 7640U", cores: 6, threads: 12, base_clock: "3.5 GHz", boost_clock: "4.9 GHz", tdp: "15 W", process: "4 nm", cache: "16 MB", price: "$249" },
  { brand: "AMD", generation: 5, model: "Ryzen 7 7840HS", cores: 8, threads: 16, base_clock: "3.8 GHz", boost_clock: "5.1 GHz", tdp: "35 W", process: "4 nm", cache: "16 MB", price: "$399" },
  { brand: "AMD", generation: 5, model: "Ryzen 9 7945HX", cores: 16, threads: 32, base_clock: "2.5 GHz", boost_clock: "5.4 GHz", tdp: "55 W", process: "5 nm", cache: "64 MB", price: "$599" },

  // Mobile (Zen 5, 2024-2025, selected models)
  { brand: "AMD", generation: 6, model: "Ryzen AI 9 HX 370", cores: 12, threads: 24, base_clock: "2.0 GHz", boost_clock: "5.1 GHz", tdp: "28 W", process: "4 nm", cache: "24 MB", price: "$499" },


];