import BestKeyboards from '@/app/_components/Products/KeyboardMouse/BestKeyboards/BestKeyboards'
import BestSellingMice from '@/app/_components/Products/KeyboardMouse/BestSellingMice/BestSellingMice'
import KeyboardBrands from '@/app/_components/Products/KeyboardMouse/KeyboardBrands/KeyboardBrands'
import KeyboardLatest from '@/app/_components/Products/KeyboardMouse/KeyboardLatest/KeyboardLatest'
import KeyboardMouseBanner from '@/app/_components/Products/KeyboardMouse/KeyboardMouseBanner/KeyboardMouseBanner'
import KeyboardPerformance from '@/app/_components/Products/KeyboardMouse/KeyboardPerformance/KeyboardPerformance'
import KeyboardUnleash from '@/app/_components/Products/KeyboardMouse/KeyboardUnleash/KeyboardUnleash'
import PopularKeyboard from '@/app/_components/Products/KeyboardMouse/PopularKeyboard/PopularKeyboard'
import UnlimitedGamingKeyboards from '@/app/_components/Products/KeyboardMouse/UnlimitedGamingKeyboards/UnlimitedGamingKeyboards'
import WhyBuyKeyboardFromUs from '@/app/_components/Products/KeyboardMouse/WhyBuyKeyboardFromUs/WhyBuyKeyboardFromUs'
import React from 'react'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/products/keyboard-mouse', {
    title: 'Keyboards & Mice | Crown Excel',
    description: 'Ergonomic, wireless, and gaming keyboards and mice at Crown Excel Dubai.',
  });
}

const KeyboardMouse = () => {
  return (
    <div>
      <KeyboardMouseBanner/>
      <BestSellingMice/>
      <KeyboardUnleash/>
      <KeyboardPerformance/>
      <KeyboardLatest/>
      <UnlimitedGamingKeyboards/>
      <BestKeyboards/>
      <PopularKeyboard/>
      <WhyBuyKeyboardFromUs/>
      <KeyboardBrands/>
    </div>
  )
}

export default KeyboardMouse
