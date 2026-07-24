import BiometricAllinOne from '@/app/_components/Products/Biometric/BiometricAllinOne/BiometricAllinOne'
import BiometricBanner from '@/app/_components/Products/Biometric/BiometricBanner/BiometricBanner'
import BiometricBestSelling from '@/app/_components/Products/Biometric/BiometricBestSelling/BiometricBestSelling'
import BiometricBrands from '@/app/_components/Products/Biometric/BiometricBrands/BiometricBrands.'
import BiometricUltimateSolutions from '@/app/_components/Products/Biometric/BiometricUltimateSolutions/BiometricUltimateSolutions'
import BiometricWhyFromUs from '@/app/_components/Products/Biometric/BiometricWhyFromUs/BiometricWhyFromUs'
import React from 'react'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/products/biometrics', {
    title: 'Biometric Access Control & Attendance | Crown Excel',
    description: 'Biometric systems, attendance scanners, and access control solutions in Dubai.',
  });
}

const Biometrics = () => {
  return (
    <div>
      <BiometricBanner/>
      <BiometricBestSelling/>
      <BiometricUltimateSolutions/>
      <BiometricAllinOne/>
      <BiometricWhyFromUs/>
      <BiometricBrands/>
    </div>
  )
}

export default Biometrics
