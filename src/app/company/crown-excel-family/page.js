'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FamilyPhoto from '@/Components/Images/familyphoto.png';

// Import Value Components
import ValueTrust from './components/ValueTrust';
import ValueCompanyFirst from './components/ValueCompanyFirst';
import ValueExcellence from './components/ValueExcellence';
import ValueInternalMatters from './components/ValueInternalMatters';
import ValueContinuousGrowth from './components/ValueContinuousGrowth';
import ValueSustainability from './components/ValueSustainability';

// Import Member Components
import MemberIlyas from './components/MemberIlyas';
import MemberWais from './components/MemberWais';
import MemberSaqib from './components/MemberSaqib';
import MemberVishal from './components/MemberVishal';
import MemberKhurram from './components/MemberKhurram';
import MemberBrian from './components/MemberBrian';
import MemberRauf from './components/MemberRauf';
import MemberNadeem from './components/MemberNadeem';
import MemberTarun from './components/MemberTarun';
import MemberIbad from './components/MemberIbad';
import MemberAbdullah from './components/MemberAbdullah';
import MemberJunaidS from './components/MemberJunaidS';
import MemberShammry from './components/MemberShammry';
import MemberJubair from './components/MemberJubair';
import MemberFazal from './components/MemberFazal';
import MemberNabiha from './components/MemberNabiha';
import MemberLavina from './components/MemberLavina';
import MemberSaeed from './components/MemberSaeed';
import MemberAslam from './components/MemberAslam';
import MemberSaleem from './components/MemberSaleem';
import MemberSalman from './components/MemberSalman';
// import MemberHassan from './components/MemberHassan';
// import MemberOmar from './components/MemberOmar';

function CrownExcelFamily() {
  const [cmsData, setCmsData] = useState(null);

  useEffect(() => {
    fetch('/api/cms/content?path=/company/crown-excel-family')
      .then(res => res.json())
      .then(data => {
        if (data && data.content) {
          setCmsData(data.content);
        }
      })
      .catch(err => console.error('Failed to load CMS content:', err));
  }, []);

  const getField = (sectionId, fieldKey, defaultValue) => {
    if (!cmsData || !cmsData.sections) return defaultValue;
    const section = cmsData.sections.find(
      s => s.sectionId === sectionId.toLowerCase() || 
           s.sectionName?.toLowerCase() === sectionId.toLowerCase()
    );
    if (section && section.fields && section.fields[fieldKey]) {
      const field = section.fields[fieldKey];
      if (field.type === 'image') {
        const val = field.value;
        // If the value is a static file import path or is identical to the original path,
        // fall back to the component's static fallback.
        if (!val || val.startsWith('@/') || val.startsWith('.') || val === field.originalValue) {
          return defaultValue;
        }
      }
      return field.value || defaultValue;
    }
    return defaultValue;
  };

  return (
    <div className="min-h-screen">
      <section className="relative w-full h-[280px] sm:h-[180px] md:h-[260px] lg:h-[540px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${FamilyPhoto.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right'
          }}
        />
        <div className="absolute" />
        <div className="pointer-events-none absolute -left-24 w-[340px] h-[340px]" />
        <div className="relative h-full flex items-center justify-start">
          <div className="w-full max-w-5xl px-6 sm:px-8 md:px-12">
            <div className="max-w-2xl ml-0 text-left">
              <h1 className="font-montserrat text-white text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-tight mb-4 drop-shadow-lg tracking-tight text-left">CROWN EXCEL FAMILY</h1>
              <p className="font-muli text-white/90 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed max-w-xl mb-2 text-left">More than just a company, we are a family united by values, driven by excellence, and committed to serving our customers with integrity and care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Values Section */}
          <div className="mb-16 mt-3">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#16806b] font-montserrat mb-4">Our Values</h2>
              <div className="w-16 h-1 bg-[#61ce70] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueTrust 
                title={getField('ValueTrust', 'heading')} 
                desc={getField('ValueTrust', 'paragraph')} 
              />
              <ValueCompanyFirst 
                title={getField('ValueCompanyFirst', 'heading')} 
                desc={getField('ValueCompanyFirst', 'paragraph')} 
              />
              <ValueExcellence 
                title={getField('ValueExcellence', 'heading')} 
                desc={getField('ValueExcellence', 'paragraph')} 
              />
              <ValueInternalMatters 
                title={getField('ValueInternalMatters', 'heading')} 
                desc={getField('ValueInternalMatters', 'paragraph')} 
              />
              <ValueContinuousGrowth 
                title={getField('ValueContinuousGrowth', 'heading')} 
                desc={getField('ValueContinuousGrowth', 'paragraph')} 
              />
              <ValueSustainability 
                title={getField('ValueSustainability', 'heading')} 
                desc={getField('ValueSustainability', 'paragraph')} 
              />
            </div>
          </div>

          {/* Family Members Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#16806b] font-montserrat mb-4">Our Family</h2>
              <div className="w-16 h-1 bg-[#61ce70] mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 font-muli max-w-2xl mx-auto">Our team represents the heart and soul of our family business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <MemberIlyas 
                name={getField('MemberIlyas', 'heading')} 
                position={getField('MemberIlyas', 'paragraph_3')} 
                tenure={getField('MemberIlyas', 'paragraph')} 
                dept={getField('MemberIlyas', 'paragraph_2')} 
                quote={getField('MemberIlyas', 'paragraph_4')} 
                image={getField('MemberIlyas', 'image_ilyaskhan')}
              />
              <MemberWais 
                name={getField('MemberWais', 'heading')} 
                position={getField('MemberWais', 'paragraph_3')} 
                tenure={getField('MemberWais', 'paragraph')} 
                dept={getField('MemberWais', 'paragraph_2')} 
                quote={getField('MemberWais', 'paragraph_4')} 
                image={getField('MemberWais', 'image_waiskhan')}
              />
              <MemberSaqib 
                name={getField('MemberSaqib', 'heading')} 
                position={getField('MemberSaqib', 'paragraph_3')} 
                tenure={getField('MemberSaqib', 'paragraph')} 
                dept={getField('MemberSaqib', 'paragraph_2')} 
                quote={getField('MemberSaqib', 'paragraph_4')} 
                image={getField('MemberSaqib', 'image_saqib')}
              />
              <MemberVishal 
                name={getField('MemberVishal', 'heading')} 
                position={getField('MemberVishal', 'paragraph_3')} 
                tenure={getField('MemberVishal', 'paragraph')} 
                dept={getField('MemberVishal', 'paragraph_2')} 
                quote={getField('MemberVishal', 'paragraph_4')} 
                image={getField('MemberVishal', 'image_vishal')}
              />
              <MemberKhurram 
                name={getField('MemberKhurram', 'heading')} 
                position={getField('MemberKhurram', 'paragraph_3')} 
                tenure={getField('MemberKhurram', 'paragraph')} 
                dept={getField('MemberKhurram', 'paragraph_2')} 
                quote={getField('MemberKhurram', 'paragraph_4')} 
                image={getField('MemberKhurram', 'image_sirkhurram')}
              />
              <MemberBrian 
                name={getField('MemberBrian', 'heading')} 
                position={getField('MemberBrian', 'paragraph_3')} 
                tenure={getField('MemberBrian', 'paragraph')} 
                dept={getField('MemberBrian', 'paragraph_2')} 
                quote={getField('MemberBrian', 'paragraph_4')} 
                image={getField('MemberBrian', 'image_etc1')}
              />
              <MemberRauf 
                name={getField('MemberRauf', 'heading')} 
                position={getField('MemberRauf', 'paragraph_3')} 
                tenure={getField('MemberRauf', 'paragraph')} 
                dept={getField('MemberRauf', 'paragraph_2')} 
                quote={getField('MemberRauf', 'paragraph_4')} 
                image={getField('MemberRauf', 'image_etc3')}
              />
              <MemberNadeem 
                name={getField('MemberNadeem', 'heading')} 
                position={getField('MemberNadeem', 'paragraph_3')} 
                tenure={getField('MemberNadeem', 'paragraph')} 
                dept={getField('MemberNadeem', 'paragraph_2')} 
                quote={getField('MemberNadeem', 'paragraph_4')} 
                image={getField('MemberNadeem', 'image_etc4')}
              />
              <MemberTarun 
                name={getField('MemberTarun', 'heading')} 
                position={getField('MemberTarun', 'paragraph_3')} 
                tenure={getField('MemberTarun', 'paragraph')} 
                dept={getField('MemberTarun', 'paragraph_2')} 
                quote={getField('MemberTarun', 'paragraph_4')} 
                image={getField('MemberTarun', 'image_tarun')}
              />
              <MemberIbad 
                name={getField('MemberIbad', 'heading')} 
                position={getField('MemberIbad', 'paragraph_3')} 
                tenure={getField('MemberIbad', 'paragraph')} 
                dept={getField('MemberIbad', 'paragraph_2')} 
                quote={getField('MemberIbad', 'paragraph_4')} 
                image={getField('MemberIbad', 'image_ibad')}
              />
              <MemberAbdullah 
                name={getField('MemberAbdullah', 'heading')} 
                position={getField('MemberAbdullah', 'paragraph_3')} 
                tenure={getField('MemberAbdullah', 'paragraph')} 
                dept={getField('MemberAbdullah', 'paragraph_2')} 
                quote={getField('MemberAbdullah', 'paragraph_4')} 
                image={getField('MemberAbdullah', 'image_abdullah')}
              />
              <MemberJunaidS 
                name={getField('MemberJunaidS', 'heading')} 
                position={getField('MemberJunaidS', 'paragraph_3')} 
                tenure={getField('MemberJunaidS', 'paragraph')} 
                dept={getField('MemberJunaidS', 'paragraph_2')} 
                quote={getField('MemberJunaidS', 'paragraph_4')} 
                image={getField('MemberJunaidS', 'image_etc5')}
              />
              <MemberShammry 
                name={getField('MemberShammry', 'heading')} 
                position={getField('MemberShammry', 'paragraph_3')} 
                tenure={getField('MemberShammry', 'paragraph')} 
                dept={getField('MemberShammry', 'paragraph_2')} 
                quote={getField('MemberShammry', 'paragraph_4')} 
                image={getField('MemberShammry', 'image_shammry')}
              />
              <MemberJubair 
                name={getField('MemberJubair', 'heading')} 
                position={getField('MemberJubair', 'paragraph_3')} 
                tenure={getField('MemberJubair', 'paragraph')} 
                dept={getField('MemberJubair', 'paragraph_2')} 
                quote={getField('MemberJubair', 'paragraph_4')} 
                image={getField('MemberJubair', 'image_jhubar')}
              />
              <MemberFazal 
                name={getField('MemberFazal', 'heading')} 
                position={getField('MemberFazal', 'paragraph_3')} 
                tenure={getField('MemberFazal', 'paragraph')} 
                dept={getField('MemberFazal', 'paragraph_2')} 
                quote={getField('MemberFazal', 'paragraph_4')} 
                image={getField('MemberFazal', 'image_fazal')}
              />
              <MemberNabiha 
                name={getField('MemberNabiha', 'heading')} 
                position={getField('MemberNabiha', 'paragraph_3')} 
                tenure={getField('MemberNabiha', 'paragraph')} 
                dept={getField('MemberNabiha', 'paragraph_2')} 
                quote={getField('MemberNabiha', 'paragraph_4')} 
                image={getField('MemberNabiha', 'image_nabiha')}
              />
              <MemberLavina 
                name={getField('MemberLavina', 'heading')} 
                position={getField('MemberLavina', 'paragraph_3')} 
                tenure={getField('MemberLavina', 'paragraph')} 
                dept={getField('MemberLavina', 'paragraph_2')} 
                quote={getField('MemberLavina', 'paragraph_4')} 
                image={getField('MemberLavina', 'image_lavina')}
              />
              <MemberSaeed 
                name={getField('MemberSaeed', 'heading')} 
                position={getField('MemberSaeed', 'paragraph_3')} 
                tenure={getField('MemberSaeed', 'paragraph')} 
                dept={getField('MemberSaeed', 'paragraph_2')} 
                quote={getField('MemberSaeed', 'paragraph_4')} 
                image={getField('MemberSaeed', 'image_saeed')}
              />
              <MemberAslam 
                name={getField('MemberAslam', 'heading')} 
                position={getField('MemberAslam', 'paragraph_3')} 
                tenure={getField('MemberAslam', 'paragraph')} 
                dept={getField('MemberAslam', 'paragraph_2')} 
                quote={getField('MemberAslam', 'paragraph_4')} 
                image={getField('MemberAslam', 'image_aslam')}
              />
              <MemberSaleem 
                name={getField('MemberSaleem', 'heading')} 
                position={getField('MemberSaleem', 'paragraph_3')} 
                tenure={getField('MemberSaleem', 'paragraph')} 
                dept={getField('MemberSaleem', 'paragraph_2')} 
                quote={getField('MemberSaleem', 'paragraph_4')} 
                image={getField('MemberSaleem', 'image_saleem')}
              />
              <MemberSalman 
                name={getField('MemberSalman', 'heading')} 
                position={getField('MemberSalman', 'paragraph_3')} 
                tenure={getField('MemberSalman', 'paragraph')} 
                dept={getField('MemberSalman', 'paragraph_2')} 
                quote={getField('MemberSalman', 'paragraph_4')} 
                image={getField('MemberSalman', 'image_salman')}
              />
              {/* <MemberHassan 
                name={getField('MemberHassan', 'heading')} 
                position={getField('MemberHassan', 'paragraph_3')} 
                tenure={getField('MemberHassan', 'paragraph')} 
                dept={getField('MemberHassan', 'paragraph_2')} 
                quote={getField('MemberHassan', 'paragraph_4')} 
                image={getField('MemberHassan', 'image_hassan')}
              /> */}
              {/* <MemberOmar 
                name={getField('MemberOmar', 'heading')} 
                position={getField('MemberOmar', 'paragraph_3')} 
                tenure={getField('MemberOmar', 'paragraph')} 
                dept={getField('MemberOmar', 'paragraph_2')} 
                quote={getField('MemberOmar', 'paragraph_4')} 
                image={getField('MemberOmar', 'image_omar')}
              /> */}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-10">
            <div className="bg-gradient-to-r from-[#084032] to-[#16806b] rounded-2xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Join Our Family</h2>
              <p className="text-xl font-muli mb-8 opacity-90">Be part of a family that values excellence, integrity, and community service</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/company/career">
                  <button className="bg-[#61ce70] text-white px-8 py-3 rounded-lg font-montserrat font-medium hover:bg-[#4ade80] transition-colors">
                    Join Our Family
                  </button>
                </Link>
                <Link href="/company/career">
                  <button className="bg-transparent text-white border-2 border-white px-8 py-2 rounded-lg font-montserrat font-medium hover:bg-white hover:text-[#16806b] transition-colors">
                   Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrownExcelFamily;
