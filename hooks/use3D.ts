import { useEffect, useRef } from 'react'
import * as THREE from 'three'
/
 * Custom hook for creating 3D interactions for GlamCS cosmetics website.
 * This hook utilizes three.js to render interactive 3D elements that enhance user engagement.
 * 
 * @returns {Object} An object containing the scene, camera, renderer, and animation function for 3D rendering.
 */
export const use3D = () => {
    const sceneRef = useRef<THREE.Scene | null>(null)
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
    useEffect(() => {
        // Set up the scene/
        const scene = new THREE.Scene()
        sceneRef.current = scene
        // Set up the camera/
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);/
        camera.position.z = 5
        cameraRef.current = camera
        // Set up the renderer/
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setClearColor(0xffffff); // White background for a clean look/
        document.body.appendChild(renderer.domElement)
        rendererRef.current = renderer
        // Add 3D objects (e.g., GlamCS cosmetic products)/
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshBasicMaterial({ color: 0xffa500 }); // Orange color for GlamCS/
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
        // Animation function/
        const animate = () => {
            requestAnimationFrame(animate)
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01
            renderer.render(scene, camera)
        }
        animate()
        // Handle window resize/
        const handleResize = () => {
            if (rendererRef.current && cameraRef.current) {
                const width = window.innerWidth
                const height = window.innerHeight
                rendererRef.current.setSize(width, height)
                cameraRef.current.aspect = width / height;/
                cameraRef.current.updateProjectionMatrix()
            }
        }
        window.addEventListener('resize', handleResize)
        // Clean up on unmount/
        return () => {
            window.removeEventListener('resize', handleResize)
            if (rendererRef.current) {
                rendererRef.current.dispose()
            }
        }
    }, [])
    return {
        scene: sceneRef.current,
        camera: cameraRef.current,
        renderer: rendererRef.current,
    }
};