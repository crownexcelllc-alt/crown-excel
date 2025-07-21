import BiometricAllinOne from '@/app/_components/Products/Biometric/BiometricAllinOne/BiometricAllinOne'
import BiometricBanner from '@/app/_components/Products/Biometric/BiometricBanner/BiometricBanner'
import BiometricBestSelling from '@/app/_components/Products/Biometric/BiometricBestSelling/BiometricBestSelling'
import BiometricBrands from '@/app/_components/Products/Biometric/BiometricBrands/BiometricBrands.'
import BiometricUltimateSolutions from '@/app/_components/Products/Biometric/BiometricUltimateSolutions/BiometricUltimateSolutions'
import BiometricWhyFromUs from '@/app/_components/Products/Biometric/BiometricWhyFromUs/BiometricWhyFromUs'
import React from 'react'

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
