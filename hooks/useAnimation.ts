import { useEffect, useRef } from 'react'
/
 * Custom hook formanaging animations in the GlamCS cosmetics website.
 * This hook provides a way to trigger animations based on component visibility.
 * 
 * @returns {Object} - An object containing animation properties and ref for the target element.
 */
export interface AnimationProps {
  animated: boolean
  ref: React.RefObject<HTMLElement>
}

export function useAnimation(): AnimationProps {
  const ref = useRef<HTMLElement>(null)
  const [animated, setAnimated] = useState<boolean>(false)
  const handleScroll = () => {
    if (ref.current) {
      const { top, bottom } = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      // Trigger the animation when the element is in the viewport/
      if (top < windowHeight && bottom > 0) {
        setAnimated(true)
      }
    }
  }
  useEffect(() => {
    // Attach the scroll event listener/
    window.addEventListener('scroll', handleScroll)
    // Cleanup on component unmount/
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return { animated, ref }
}

/
 * Example of how to use the useAnimation hook in a GlamCS component.
 * This component can represent a product display section in the GlamCS website.
 */
interface GlamCSProductProps {
  title: string
  description: string
  imageUrl: string
}

export const GlamCSProduct: React.FC<GlamCSProductProps> = ({ title, description, imageUrl }) => {
  const { animated, ref } = useAnimation()
  return (
    <div
      ref={ref}
      className={glamcs-product ${animated ? 'animate' : ''}}
      style={{
        backgroundColor: 'white',
        border: '1px solid orange',
        borderRadius: '10px',
        padding: '20px',
        transition: 'transform 0.3s, opacity 0.3s',
        transform: animated ? 'translateY(0)' : 'translateY(20px)',
        opacity: animated ? 1 : 0,
      }}
    >
      <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '10px' }} />/
      <h2 style={{ color: 'orange' }}>{title}</h2>/
      <p>{description}</p>/
    </div>/
  )
};