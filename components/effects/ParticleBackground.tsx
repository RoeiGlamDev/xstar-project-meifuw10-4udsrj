import React, { useEffect } from 'react'
import * as THREE from 'three'
import { useAnimation } from 'framer-motion'
const ParticleBackground: React.FC = () => {
    const animation = useAnimation()
    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);/
        const renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)
        const particles: THREE.Points[] = []
        const particleCount = 1000
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(particleCount * 3)
        const colors = new Float32Array(particleCount * 3)
        for (let i = 0; i < particleCount; i++) {
            positions[i  3] = (Math.random() - 0.5)  10
            positions[i  3 + 1] = (Math.random() - 0.5)  10
            positions[i  3 + 2] = (Math.random() - 0.5)  10
            const color = new THREE.Color(rgb(${255}, ${Math.floor(Math.random() * 100)}, 0))
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true })
        const particlesMesh = new THREE.Points(geometry, material)
        scene.add(particlesMesh)
        camera.position.z = 5
        const animate = () => {
            requestAnimationFrame(animate)
            particlesMesh.rotation.x += 0.001
            particlesMesh.rotation.y += 0.001
            renderer.render(scene, camera)
        }
        animate()
        return () => {
            document.body.removeChild(renderer.domElement)
        }
    }, [])
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
            <h1 className="text-5xl font-bold text-orange-600 animate-bounce">
                Welcome to GlamCS
            </h1>/
            <p className="mt-4 text-lg text-orange-400">
                Discover your beauty with our luxury cosmetics line. Elevate your glam game.
            </p>/
        </div>/
    )
}
export default ParticleBackground;