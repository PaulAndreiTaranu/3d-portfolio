import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Cube from './3dmodels/Cube'
import HackerRoom from './3dmodels/HackerRoom'
import HeroCamera from './3dmodels/HeroCamera'
import ReactLogo from './3dmodels/ReactLogo'
import Rings from './3dmodels/Rings'
import Button from './Button'
import CanvasLoader from './CanvasLoader'

const Hero = () => {
    // const ctrls = useControls('HackerRoom', {
    //     posX: { value: 0, min: -10, max: 10 },
    //     posY: { value: 0, min: -10, max: 10 },
    //     posZ: { value: 0, min: -10, max: 10 },
    //     rotationX: { value: 0, min: -10, max: 10 },
    //     rotationY: { value: 0, min: -Math.PI, max: Math.PI },
    //     rotationZ: { value: 0, min: -10, max: 10 },
    //     scale: { value: 0.5, min: 0.05, max: 0.95 },
    // })

    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:texti-2xl text-xl font-medium text-white text-center font-generalsans'>
                    Hi, I am Paul
                </p>
                <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
            </div>

            <div className='w-full h-full absolute inset-0'>
                {/* <Leva /> */}
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <ambientLight intensity={1.5} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                scale={sizes.deskScale}
                                position={sizes.deskPosition}
                                rotation={[0.4, Math.PI, 0]}
                            />
                        </HeroCamera>
                        {!isSmall ? (
                            <group>
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Cube position={sizes.cubePosition} />
                                <Rings position={sizes.ringPosition} />
                            </group>
                        ) : (
                            ''
                        )}
                    </Suspense>
                </Canvas>

                <div className='absolute bottom-7 left-0 w-full z-10 c-space'>
                    <a href='#contact' className='w-fit'>
                        <Button
                            name="Let's work together"
                            isBeam
                            containerClass='sm:w-fit w-full sm:min-w-96'
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
