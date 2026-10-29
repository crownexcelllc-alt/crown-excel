import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

// Inventory Product WebP Images
import Img24B3HA2_89 from '@/Components/Images/24B3HA2-89.webp';
import Img25B36H_89 from '@/Components/Images/25B36H-89.webp';
import Img83F30082AX from '@/Components/Images/83F30082AX.webp';
import Img83M4000YGP from '@/Components/Images/83M4000YGP.webp';
import Img83RR0040PS from '@/Components/Images/83RR0040PS.webp';
import Img83S0007FUS from '@/Components/Images/83S0007FUS.png';
import Img90NB10J1_M04TK0 from '@/Components/Images/90NB10J1-M04TK0.webp';
import Img90NB10J1_M04TL0 from '@/Components/Images/90NB10J1-M04TL0.webp';
import Img90NB10T1_M01YX0 from '@/Components/Images/90NB10T1-M01YX0.webp';
import Img90NB10T2_M01YY0 from '@/Components/Images/90NB10T2-M01YY0.webp';
import Img90NB14Q2_M003W0 from '@/Components/Images/90NB14Q2-M003W0.webp';
import Img90NB16G2_M00230 from '@/Components/Images/90NB16G2-M00230.png';
import Img90NX0801_M04XV0 from '@/Components/Images/90NX0801-M04XV0.webp';
import ImgD78MQEA_BH5 from '@/Components/Images/D78MQEA_BH5.webp';
import ImgNH_QVUEM_002 from '@/Components/Images/NH.QVUEM.002.png';
import ImgNH_QX5EM_003 from '@/Components/Images/NH.QX5EM.003.png';
import ImgNX_BSQEM_001 from '@/Components/Images/NX.BSQEM.001.png';
import ImgNX_DGJEM_002 from '@/Components/Images/NX.DGJEM.002.png';
import ImgNX_DTGEM_001 from '@/Components/Images/NX.DTGEM.001.png';

function getTwoLineTitle(name) {
  const words = name.trim().split(/\s+/);
  if (words.length <= 1) return { line1: name, line2: '\u00A0' };

  if (name.startsWith('Lenovo V15')) return { line1: 'Lenovo V15', line2: 'Gen 6' };
  if (name.startsWith('ACER TRAVELMATE')) return { line1: 'ACER TRAVELMATE', line2: 'P214-56' };
  if (name.startsWith('ASUS EXPERTBOOK')) return { line1: 'ASUS EXPERTBOOK', line2: 'B1503CV' };
  if (name.startsWith('LENOVO IDEAPAD')) return { line1: 'LENOVO IDEAPAD', line2: 'SLIM 3I' };
  if (name.startsWith('ACER ASPIRE ALITE15-54P')) return { line1: 'ACER ASPIRE', line2: 'ALITE15-54P' };
  if (name.startsWith('Lenovo Legion Pro 5i')) return { line1: 'Lenovo Legion Pro 5i', line2: '(16", 10)' };

  let splitIndex = Math.ceil(words.length / 2);
  let line1 = words.slice(0, splitIndex).join(' ');
  let line2 = words.slice(splitIndex).join(' ');

  if (line1.length > 22 && splitIndex > 1) {
    splitIndex = splitIndex - 1;
    line1 = words.slice(0, splitIndex).join(' ');
    line2 = words.slice(splitIndex).join(' ');
  }

  return { line1, line2 };
}

export default function WholesaleProductsSection({
  openProductInquiryModal,
  getWhatsAppUrl,
  handleWhatsAppRedirect,
}) {
  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2
            className="font-anton font-normal uppercase text-center text-3xl sm:text-4xl lg:text-[46px] tracking-[-0.035em] leading-[1.05]"
            style={{
              fontFamily: "'Anton', Impact, sans-serif",
              fontWeight: 400,
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
            }}
          >
            <span className="text-[#171717] block not-italic">
              <span className="block sm:inline">Power Your Business With</span>{' '}
              <span className="block sm:inline">Crown Excel</span>
            </span>
            <span
              className="text-[#147A5F] italic block mt-1 sm:mt-1.5"
              style={{ fontStyle: 'italic' }}
            >
              Contact Now
            </span>
          </h2>
          <p className="text-gray-600 font-jakarta text-xs sm:text-sm md:text-base leading-relaxed mt-4 max-w-2xl sm:max-w-3xl mx-auto font-normal">
            Discover the latest laptops, desktops, all-in-ones, monitors, and tablets for every business need. Explore a wide selection of trusted technology and tailored IT solutions, delivered across Dubai and the UAE. Find your perfect business tech with Crown Excel today!
          </p>
        </div>

        {/* 19 Product Cards in a Responsive Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5 lg:gap-6 items-stretch">
          {[
            {
              brand: 'ACER',
              category: 'Aspire Lite Series',
              barcode: 'NX.DGJEM.002',
              name: 'ACER ASPIRE LITE AL15-36P-36UJ',
              particular: 'ACER ASPIRE LITE AL15-36P-36UJ INTEL CORE 3 N350, 8GB RAM, 256GB SSD, INTEL SHARED, 15.6 FHD, DOS, ENGLISH KEYBOARD, SILVER',
              image: ImgNX_DGJEM_002,
              imageClassName: 'scale-[1.28]'
            },
            {
              brand: 'ACER',
              category: 'Aspire Lite Series',
              barcode: 'NX.DTGEM.001',
              name: 'ACER ASPIRE ALITE15-54P',
              particular: 'ACER ASPIRE ALITE15-54P, INTEL® CORE™ ULTRA 5-115U,8GB RAM,512GB SSD, 15.6" FHD, INTEL® SHARED,DOS,ENGLISH KEYBOARD,SILVER',
              image: ImgNX_DTGEM_001,
              imageClassName: 'scale-[1.28]'
            },
            {
              brand: 'ACER',
              category: 'Predator Series',
              barcode: 'NH.QX5EM.003',
              name: 'Acer Predator Helios Neo PHN16-73-94ZR',
              particular: "Acer Predator Helios Neo PHN16-73-94ZR, Intel® Core™ Ultra 9 275HX, 16GB 6400MHZ, 1TB SSD, 16''WQXGA IPS 240Hz, NVIDIA® GeForce® RTX™ 5070 8GB, DOS, RGB 4 ZONE BACKLITE ENGLISH KB, BLACK",
              image: ImgNH_QX5EM_003,
              imageClassName: 'scale-[1.38]'
            },
            {
              brand: 'ACER',
              category: 'Predator Series',
              barcode: 'NH.QVUEM.002',
              name: 'Predator Helios Neo 16 AI PHN16-73-97BP',
              particular: "Predator Helios Neo 16 AI PHN16-73-97BP Intel® Core™ Ultra 9 275HX, 16GB 6400MHZ, 1TB SSD, 16''WQXGA IPS 180Hz, 8GB NVIDIA RTX 5060, DOS, RGB 4 ZONE BACKLITE ENGLISH KB, BLACK",
              image: ImgNH_QVUEM_002,
              imageClassName: 'scale-[1.38]'
            },
            {
              brand: 'ACER',
              category: 'Travelmate',
              barcode: 'NX.BSQEM.001',
              name: 'ACER TRAVELMATE P214-56',
              particular: 'ACER TRAVELMATE P214-56,INTEL® CORE™ ULTRA 5 225U,8GB RAM,512GB SSD,14” WUXGA IPS, INTEL® SHARED MEMORY,DOS,ENGLISH KEYBOARD,BACKLIT,SILVER',
              image: ImgNX_BSQEM_001,
              imageClassName: 'scale-[1.36]'
            },
            {
              brand: 'AOC',
              category: 'MONITOR',
              barcode: '24B3HA2-89',
              name: 'AOC MONITOR-23.8" flat wide monitor',
              particular: 'AOC MONITOR-23.8" flat wide monitor',
              image: Img24B3HA2_89
            },
            {
              brand: 'AOC',
              category: 'MONITOR',
              barcode: '25B36H-89',
              name: 'AOC 25" IPS FHD 100Hz Monitor 25B36H-89',
              particular: 'AOC| 25"|IPS|FHD|100Hz|HDMI&VGA|GameMode|VESAMount',
              image: Img25B36H_89
            },
            {
              brand: 'ASUS',
              category: 'Expertbook Series',
              barcode: '90NX0801-M04XV0',
              name: 'ASUS EXPERTBOOK B1503CV',
              particular: 'ASUS EXPERTBOOK B1503CV, INTEL CORE I3-1315U, 8GB DDR5, 256GB SSD M.2 2280 PCIE 4.0, 15.6" FHD 60HZ, WIN 11 HOME, ENG KEYBOARD, GENTLE GREY',
              image: Img90NX0801_M04XV0,
              imageClassName: 'scale-[1.44]'
            },
            {
              brand: 'ASUS',
              category: 'VivoBook Series',
              barcode: '90NB10J1-M04TL0',
              name: 'ASUS VIVOBOOK X1504VA-BQ4675 (English)',
              particular: 'ASUS VIVOBOOK X1504VA-BQ4675 I3-1315U , 8GB RAM, 512GB SSD, 15.6-INCH, FHD , INTEL® UHD GRAPHICS,DOS,ENGLISH KEYBOARD,QUIET BLUE.',
              image: Img90NB10J1_M04TL0,
              imageClassName: 'scale-[0.92]'
            },
            {
              brand: 'ASUS',
              category: 'VivoBook Series',
              barcode: '90NB10T1-M01YX0',
              name: 'ASUS VIVOBOOK A1502VA-BQ1385',
              particular: 'ASUS VIVOBOOK A1502VA-BQ1385, INTEL CORE I7-13620H, 16GB RAM, 512GB SSD, 15.6 FHD (1920 X 1080), INTEL UHD GRAPHICS, DOS, ENGLISH KEYBOARD, QUIET BLUE',
              image: Img90NB10T1_M01YX0,
              imageClassName: 'scale-[0.92]'
            },
            {
              brand: 'ASUS',
              category: 'VivoBook Series',
              barcode: '90NB10J1-M04TK0',
              name: 'ASUS VIVOBOOK X1504VA-BQ4675 (Arabic)',
              particular: 'ASUS VIVOBOOK X1504VA-BQ4675 I3-1315U , 8GB RAM, 512GB SSD, 15.6-INCH, FHD , INTEL® UHD GRAPHICS,DOS,ARABIC KEYBOARD,QUIET BLUE',
              image: Img90NB10J1_M04TK0,
              imageClassName: 'scale-[0.92]'
            },
            {
              brand: 'ASUS',
              category: 'VivoBook Series',
              barcode: '90NB10T2-M01YY0',
              name: 'ASUS VIVOBOOK A1502VA-BQ1386',
              particular: 'ASUS VIVOBOOK A1502VA-BQ1386, INTEL CORE I7-13620H, 16GB RAM, 512GB SSD, 15.6 FHD (1920 X 1080), INTEL UHD GRAPHICS, DOS, ENGLISH KEYBOARD, COOL SILVER',
              image: Img90NB10T2_M01YY0,
              imageClassName: 'scale-[0.92]'
            },
            {
              brand: 'ASUS',
              category: 'VivoBook Series',
              barcode: '90NB14Q2-M003W0',
              name: 'ASUS VIVOBOOK S5507QA-MA007W OLED',
              particular: 'ASUS VIVOBOOK S5507QA-MA007W SNAPDRAGON X PLUS X1P42100, 16GB RAM, 1TB SSD, 15.6 OLED (2880 X 1620), QUALCOMM ADRENO X1-45, WIN 11 HOME, RGB 1 ZONE BACKLIT ENGLISH KEYBOARD, COOL SILVER',
              image: Img90NB14Q2_M003W0,
              imageClassName: 'scale-[0.92]'
            },
            {
              brand: 'ASUS',
              category: 'ZENBOOK SERIES',
              barcode: '90NB16G2-M00230',
              name: 'ASUS ZENBOOK A14 X3407RA-QD004W',
              particular: 'ASUS ZENBOOK A14 X3407RA-QD004W, SNAPDRAGON X ELITE X1E-78-100,16GB RAM,1TB SSD, 14 WUXGA OLED, INTEGRATED GRAPHICS,WINDOWS 11 HOME,BACKLIT ENGLISH KEYBOARD, ICELAND GRAY',
              image: Img90NB16G2_M00230
            },
            {
              brand: 'HP',
              category: 'OmniBook',
              barcode: 'D78MQEA#BH5',
              name: 'HP OmniBook 3 Laptop 16-bu0065nia',
              particular: 'HP OmniBook 3 Laptop 16-bu0065nia,Intel® Core™ 5 120U,16 GB DDR5-5200,512 GB PCIe® Gen4 NVMe,16" Diagonal 2K (1920 x 1200) IPS,Integrated,Intel® Graphics,DOS 3.0,English Backlit KB,Silver',
              image: ImgD78MQEA_BH5,
              imageClassName: 'scale-[1.24]'
            },
            {
              brand: 'LENOVO',
              category: 'IdeaPad Series',
              barcode: '83RR0040PS',
              name: 'LENOVO IDEAPAD SLIM 3I',
              particular: 'LENOVO IDEAPAD SLIM 3I,INTEL CORE™ 3 304,8GB RAM,512GB SSD, INTEGRATED INTEL® GRAPHICS, 15.3" WUXGA IPS,DOS,BACKLIT, ENGLISH KEYBOARD, LUNA GREY',
              image: Img83RR0040PS,
              imageClassName: 'scale-[1.36]'
            },
            {
              brand: 'LENOVO',
              category: 'LEGION SERIES',
              barcode: '83F30082AX',
              name: 'Lenovo Legion Pro 5i (16", 10)',
              particular: 'Lenovo Legion Pro 5i (16", 10) Intel Core™ Ultra 7 255HX, 2x 16GB SODIMM DDR5-5600, 1TB SSD M.2 2280, 16" WQXGA OLED 500nits 165Hz, NVIDIA GeForce RTX™ 5070 8GB GDDR7, DOS, 24-Zone RGB Backlit Arabic Keyboard, Eclipse Black',
              image: Img83F30082AX
            },
            {
              brand: 'LENOVO',
              category: 'LOQ SERIES',
              barcode: '83S0007FUS',
              name: 'Lenovo LOQ Gaming Laptop 15.6"',
              particular: 'Lenovo LOQ Gaming Laptop, AMD Ryzen 7 170 2025, 16GB Memory, 512GB Storage, 15.6" 2K, NVIDIA GeForce RTX 4050, Luna Grey',
              image: Img83S0007FUS
            },
            {
              brand: 'LENOVO',
              category: 'V Series',
              barcode: '83M4000YGP',
              name: 'Lenovo V15 Gen 6',
              particular: 'Lenovo V15 Gen 6 ,Intel® N100,8GB SODIMM DDR5-4800,256GB SSD M.2,15.6" FHD (1920x1080),Integrated Intel® UHD Graphics,Dos,Non-backlit English,Business Black',
              image: Img83M4000YGP,
              imageClassName: 'scale-[1.26]'
            }
          ].map((product, index) => {
            const { line1, line2 } = getTwoLineTitle(product.name);
            return (
              <div
                key={product.barcode}
                className="group relative bg-white p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-[#147A5F] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden min-h-[295px] sm:min-h-[375px] lg:min-h-[395px]"
              >
                {/* Product Image Showcase on Pure White Background */}
                <div className="relative w-full h-28 xs:h-32 sm:h-48 lg:h-52 bg-white flex items-center justify-center overflow-hidden rounded-lg sm:rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority={index < 4}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className={`object-contain ${product.imageClassName ? `p-0 ${product.imageClassName}` : 'p-1 sm:p-2'
                      }`}
                  />
                </div>

                {/* Separate container below the image for product text, barcode, and buttons */}
                <div className="w-full flex flex-col flex-grow justify-end pt-2 pb-0.5 sm:pb-1 px-0.5 sm:px-1.5">
                  {/* Content: Exactly 2-Line Product Name & Plain Barcode Text */}
                  <div className="w-full flex flex-col items-center text-center">
                    <h3
                      className="w-full font-montserrat font-bold text-[11.5px] xs:text-[13px] sm:text-[15px] text-[#171717] leading-[1.3] sm:leading-[1.35] h-[32px] xs:h-[35px] sm:h-[42px] mb-1 sm:mb-1.5 text-center overflow-hidden flex flex-col justify-center"
                      title={product.particular}
                    >
                      <span className="block truncate">{line1}</span>
                      <span className="block truncate">{line2}</span>
                    </h3>

                    <p className="w-full font-mono text-[9.5px] xs:text-[10.5px] sm:text-[12px] text-gray-500 tracking-tight sm:tracking-wider mb-2 sm:mb-2.5 text-center truncate">
                      {product.barcode}
                    </p>
                  </div>

                  {/* Action Buttons: Inquire Now & WhatsApp Inline Side-by-Side */}
                  <div className="w-full grid grid-cols-2 gap-1 xs:gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={() => openProductInquiryModal(product)}
                      className="w-full py-1.5 sm:py-2.5 px-1 sm:px-2 bg-[#147A5F] hover:bg-[#0f5f4a] text-white text-[9px] xs:text-[10px] sm:text-xs font-bold font-montserrat tracking-tight sm:tracking-wide uppercase flex items-center justify-center gap-0.5 sm:gap-1.5 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md active:scale-[0.99] rounded-md sm:rounded-lg whitespace-nowrap"
                    >
                      <span>
                        <span className="hidden xs:inline">Inquire Now</span>
                        <span className="xs:hidden">Inquire</span>
                      </span>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                    </button>

                    <a
                      href={getWhatsAppUrl(`Hello Crown Excel, I am inquiring about wholesale pricing for ${product.name} (Barcode: ${product.barcode}).`)}
                      onClick={(e) => handleWhatsAppRedirect(e, `Hello Crown Excel, I am inquiring about wholesale pricing for ${product.name} (Barcode: ${product.barcode}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-1.5 sm:py-2.5 px-1 sm:px-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-[9px] xs:text-[10px] sm:text-xs font-bold font-montserrat tracking-tight sm:tracking-wide uppercase flex items-center justify-center gap-0.5 sm:gap-1.5 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md active:scale-[0.99] rounded-md sm:rounded-lg whitespace-nowrap"
                    >
                      <FaWhatsapp className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
