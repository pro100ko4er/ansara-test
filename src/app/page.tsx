'use client'
import Image from "next/image";
import arrowBottom from '@/assets/arrow-bottom.svg'
import search from '@/assets/search-md.svg'
import like from '@/assets/heart-rounded.svg'
import photoSlider from '@/assets/photo-slider.jpg'
import previewCenter from '@/assets/preview-center.jpg'
import previewRight from '@/assets/preview-right.jpg'
import logo from '@/assets/logo_fin 1.svg'
import burger from '@/assets/burger.svg'
import arrowLeft from '@/assets/arrow-left.svg'
import arrowRight from '@/assets/arrow-right.svg'
import check from '@/assets/check.svg'
import chevronRight from '@/assets/chevron-right.svg'
import phone from '@/assets/phone.svg'
import videoStart from '@/assets/video-start.svg'
import dimensionsGreen from '@/assets/dimensions-green.svg'
import dimensions from '@/assets/dimensions.svg'
import userCheck from '@/assets/user-check-01.svg'
import pneTree from '@/assets/pne tree.svg'
import media from '@/assets/image-03.svg'
import home from '@/assets/home-05.svg'
import folder from '@/assets/folder.svg'
import AppButton from "./components/controls/app-button";
import MenuUpNav from "./components/controls/menu-up-nav";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import Footer, { FooterData } from "./components/controls/footer";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import BaseModal from "./components/controls/modal";
export default function Home() {

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [currentVideo, setCurrentVideo] = useState<'https://ansaradev.ru/ecotech/bann1.mp4' | 'https://ansaradev.ru/ecotech/les3.mp4'>()

  const menuUpNavData: ReactNode[] = useMemo(() => [
    <div className="flex items-center justify-center gap-1">
      Проекты
      <Image src={arrowBottom} alt="arrow-bottom" />
    </div>,
    <div className="flex items-center justify-center gap-1">Наше производство</div>,
    <div className="flex items-center justify-center gap-1">
      Фото и видео
      <Image src={arrowBottom} alt="arrow-bottom" />
    </div>,
    <div className="flex items-center justify-center gap-1">Новости</div>,
    <div className="flex items-center justify-center gap-1">
      Для клиентов
      <Image src={arrowBottom} alt="arrow-bottom" />
    </div>,
    <div className="flex items-center justify-center gap-1">
      О компании
      <Image src={arrowBottom} alt="arrow-bottom" />
    </div>,
    <div className="flex items-center justify-center gap-1">
      Услуги
      <Image src={arrowBottom} alt="arrow-bottom" />
    </div>
  ], [])

  const responsive = useMemo(() => {
  return {superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
}, []);

  const dataCarousel: ReactNode[] = useMemo(() => [
    <div> 
    <div className="w-full min-h-[340px]">
       <div className="header bg-[#FFFFFF] p-2 z-2 relative top-5 left-5 sm:top-5 sm:left-5 rounded-[87px] w-[250px] h-[40px]">
        Наши авторские проекты
    </div>
      <Image
        src={photoSlider}
        alt="Background"
        fill
        className="object-cover rounded-[15px]"
      />
    </div>
    <div className="desciption z-2 relative text-[#000000E5] sm:text-white sm:top-[-25px] sm:left-50 sm:bottom-50 top-15"> 
    <span>
      Дом из клееного бруса «Истра»
      </span>
      <span className="flex items-center gap-2">
        <Image src={dimensions} alt="dimensions" className="sm:flex hidden" />
        <Image src={dimensionsGreen} alt="dimensions" className="sm:hidden flex" /> 137 м²
      </span>
      </div>
    </div>,
  <div> 
    <div className="w-full min-h-[340px]">
       <div className="header bg-[#FFFFFF] p-2 z-2 relative top-5 left-5 sm:top-5 sm:left-5 rounded-[87px] w-[250px] h-[40px]">
        Наши авторские проекты
    </div>
      <Image
        src={photoSlider}
        alt="Background"
        fill
        className=" object-cover rounded-[15px]"
      />
    </div>
    <div className="desciption z-10000 relative text-[#000000E5] sm:text-white sm:top-[-25px] sm:left-50 sm:bottom-50 top-15"> 
    <span>
      Дом из клееного бруса «Истра»
      </span>
      <span className="flex items-center gap-2">
        <Image src={dimensions} alt="dimensions" className="sm:flex hidden" />
        <Image src={dimensionsGreen} alt="dimensions" className="sm:hidden flex" /> 137 м²
      </span>
      </div>
    </div>,
  ], [])

  const dataFooter: FooterData[] = useMemo(() => [
    {
      icon: home,
      name: "Главная"
    },
    {
      icon: folder,
      name: "Проекты"
    },
    {
      icon: media,
      name: "Медиа"
    },
    {
      icon: pneTree,
      name: "Компания"
    },
    {
      icon: userCheck,
      name: "Клиентам"
    }
  ], [])
 
 

  const onOpenModal = useCallback((video: 'https://ansaradev.ru/ecotech/bann1.mp4' | 'https://ansaradev.ru/ecotech/les3.mp4') => {
      setCurrentVideo(video)
      setIsOpenModal(true)
  }, [])
  return (
    <div className="pl-[20px] pr-[20px] pb-30 md:pl-[50px] md:pr-[50px] pt-[25px]">
      <div className="header mb-[135px]">
          <div className="header-content flex items-center justify-between">
            <div className="header-content__left-rowc flex items-center gap-5">
                <Image src={logo} alt="logo" />
                <AppButton iconLeft={burger} variant="inherit" className="sm:flex hidden">
                  Меню
                </AppButton>
                <MenuUpNav data={menuUpNavData} className="hidden 2xl:flex" />
            </div>
            <div className="header-content__right-row flex items-center md:gap-5 gap-2">
                <h4 className="sm:flex hidden">8 (800) 333-91-91</h4>
                <AppButton iconLeft={phone} className="rounded-[100%] !p-2 sm:hidden flex" variant="inherit" />
                <AppButton iconLeft={search} className="rounded-[100%] !p-2" variant='inherit' />
                <AppButton iconLeft={like} className="rounded-[100%] !p-2" variant='inherit' />
                <AppButton iconLeft={burger} className="rounded-[100%] !p-2 sm:hidden flex" variant='inherit' />
                   
                 
            </div>
          </div>
      </div>
      <div className="section-1 mb-[200px]">
          <div className="section__up flex items-start lg:items-center justify-between flex-col lg:flex-row lg:gap-0 gap-3">
            <div className="section__up-left flex flex-col w-full lg:w-[50%]"> 
            <h1 className="font-bold text-[42px]">
              Мы — лидеры рынка России по строительству деревянных домов
            </h1>
            <p>
              Сами заготавливаем северный лес в Архангельской области, а потом строим дом «под ключ». 
            </p>
            <p>
              Построили 302 дома за 2024 год. Всего же за 26 лет построили свыше 5000 домов.
            </p>
            </div>
            <div className="section__up-right flex flex-row lg:flex-col flex-wrap sm:flex-nowrap items-start lg:items-center justify-center gap-3 sm:w-auto w-full">
              <AppButton variant="primary" className="text-white font-normal w-full sm:w-[50%] md:w-[328px] h-[60px]">
                  Рассчитать стоимость дома
              </AppButton>
              <div className="questions flex items-center flex-col w-[50%] sm:w-auto w-full gap-2"> 
              <AppButton variant="outline" className="font-normal w-full md:w-[328px] h-[60px]">
                  Задать вопрос в WhatsApp
              </AppButton>
              <span className="text-[#00000080] text-[14px]">
                Ответим в течение 10 минут
              </span>
              </div>
            </div>
          </div>
      </div>
    <div className="section-2 flex flex-col sm:flex-col-reverse xl:flex-row-reverse xl:flex-nowrap justify-center sm:flex-wrap gap-5">
        <div className="section-2__videos w-full flex min-h-[500px] flex-col sm:flex-row items-center flex-wrap sm:flex-nowrap gap-5">
            <div className="section-2__videos-first-video-container w-full">
                <div className="relative video-1 w-full min-h-[280px]">
                  <Image 
                  src={previewCenter} 
                  alt="preview center video"
                  fill
                  className="object-cover object-center rounded-[15px]"
                   />
                  <div className="video-1-header bg-[#FFFFFF] p-2 absolute rounded-[87px] left-3 top-2">
                    2 выставочные площадки
                  </div>
                  <AppButton variant="ghost" className="video-1-footer absolute bottom-5 left-3 text-[#FFFFFFE5]
             w-[60%] !self-start !p-0 !justify-start !items-start text-left" onClick={() => onOpenModal('https://ansaradev.ru/ecotech/bann1.mp4')}>
                    
                    Посмотрите, как выглядят наши дома вживую
                    
                  </AppButton>
                </div>
                <div className="video-1-options">
                  <div className="video-1-option-1">
                    <AppButton iconLeft={check} variant="ghost">
                      Москва, 51-й км МКАД
                    </AppButton>
                    <AppButton iconLeft={check} variant="ghost">
                       Наро-Фоминск
                    </AppButton>
                    <AppButton className="text-[#578C62]" variant="ghost" iconRight={chevronRight}>
                      Подробнее про выставочные площадки  
                    </AppButton>
                  </div>
                </div>
            </div>
            
                <div className="section-2__videos-second-video-container w-full ">
                <div className="relative video-2 w-full min-h-[280px]">
                  <Image 
                  src={previewRight} 
                  alt="preview right video" 
                  fill
                  className="object-cover object-center rounded-[15px]"
                  />
                   <div className="video-1-header p-2 absolute rounded-[87px] left-3 top-2 flex items-center gap-3 text-[#FFFFFF]">
                  <AppButton iconLeft={videoStart} className="bg-[#FFFFFF] rounded-full w-[50px] h-[50px]" onClick={() => onOpenModal('https://ansaradev.ru/ecotech/les3.mp4')} />
                   
                   Видео о том, как создаётся идеальный дом
                  </div>
                
                  
                </div>
                <div className="video-1-option-1">
                    <AppButton iconLeft={check} variant="ghost">
                      Собственная лесозаготовка  
                    </AppButton>
                    <AppButton iconLeft={check} variant="ghost">
                       4 цеха в Архангельской области
                    </AppButton>
                    <AppButton className="text-[#578C62]" variant="ghost" iconRight={chevronRight}>
                      Подробнее о нашей лесозаготовке  
                    </AppButton>
                  </div>
            </div>
            </div>
         
        <Carousel 
        ssr
        responsive={responsive} 
        className="max-w-full min-h-[500px]" 
        showDots={false}
        renderArrowsWhenDisabled
        customLeftArrow={<AppButton iconLeft={arrowLeft} className="absolute left-5 bottom-20 w-[58px] h-[58px]" />}
        customRightArrow={<AppButton iconLeft={arrowRight} className="absolute left-25 bottom-20 w-[58px] h-[58px]" />}
        >
          {dataCarousel.map((item, index) => <div key={index}>{item}</div>)}
        </Carousel>
    </div>
    <div className="footer block sm:hidden fixed bottom-0 w-full">
        <Footer data={dataFooter} />
    </div>
        <BaseModal
        isOpen={isOpenModal}
        onRequestClose={(e) => setIsOpenModal(false)}
        
      >
     <video controls src={currentVideo}></video>
      </BaseModal>
    </div>
  );
}
