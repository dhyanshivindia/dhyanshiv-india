'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Points } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import { Group } from 'three'

function Starfield() {
  const group = useRef<Group>(null)
  const points = useMemo(() => {
    const arr: number[] = []
    for (let i = 0; i < 1800; i += 3) {
      arr.push((Math.random() - 0.5) * 28)
      arr.push((Math.random() - 0.5) * 18)
      arr.push((Math.random() - 0.5) * 22)
    }
    return new Float32Array(arr)
  }, [])

  return (
    <group ref={group} rotation={[0.1, 0.1, 0]}>
      <Points positions={points} stride={3} frustumCulled>
        <pointsMaterial color="#00FFFF" size={0.06} sizeAttenuation transparent opacity={0.85} />
      </Points>
    </group>
  )
}

export default function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-90">
      <Canvas camera={{ position: [0, 0, 14], fov: 30 }}>
        <ambientLight intensity={0.7} />
        <directionalLight intensity={0.8} position={[10, 10, 5]} />
        <Starfield />
        <Environment preset="city" />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.9} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
      </Canvas>
    </div>
  )
}
